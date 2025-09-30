import React, { useEffect, useRef, useState } from 'react';
import {
  MainTopBarSection,
  NavBar,
  NavBarInsideSectionL,
  NavBarInsideSectionR,
  HeaderMenu,
  Title,
  IconImg,
  LeftAlignBox,
  SearchDiv,
  TextBig,
  TextSmall,
  LeftAlign,
  SearchInput,
  SearchImgDiv,
  SearchImg,
  DropdownMenu,
  DropdownItem,
} from './MainTopBar.styled';
import { BasicBase } from '../../style/common.styled';
import searchIcon from '/img/search_w.svg';
import userIcon from '/img/user_w.svg';
import menuIcon from '/img/menu_w.svg';
import heartIcon from '/img/heart_w.svg';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../../context/ToastContext';

const MainTopBar = () => {
  const navigate = useNavigate();
  const [keyWord, setKeyWord] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { showToast } = useToast();

  const pos = useRef({ x: 48, y: 0 });      // 현재 위치
  const target = useRef({ x: 48, y: 0 });   // 목표 위치

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = 40 + (e.clientX / innerWidth) * 20; // 40% ~ 60%
      const y = (e.clientY / innerHeight) * 10;     // 0% ~ 10%
      target.current = { x, y };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let frame: number;
    const animate = () => {
      // lerp 보간
      pos.current.x += (target.current.x - pos.current.x) * 0.08;
      pos.current.y += (target.current.y - pos.current.y) * 0.08;

      if (sectionRef.current) {
        sectionRef.current.style.clipPath =
          `ellipse(100% 80% at ${pos.current.x}% ${pos.current.y}%)`;
      }

      frame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleSearch = () => {
    navigate(`/static/SearchPage/${keyWord}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  const handleMenuClick = () => {
    setMenuOpen(prev => !prev);
  };

  const handleBugReport = async () => {
    const email = 'hcan1223@pusan.ac.kr';
    try {
      await navigator.clipboard.writeText(email);
      showToast(`이메일 주소가 클립보드에 복사되었습니다`, 'success');
    } catch (error) {
      showToast(`${error}버그 제보 이메일: ${email}`, 'info');
    }
    setMenuOpen(false);
  };

  const handleGitHub = () => {
    window.open('https://github.com/patkrdj/Capstone', '_blank');
    setMenuOpen(false);
  };

  // 메뉴 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <MainTopBarSection ref={sectionRef}>
      <BasicBase>
        <NavBar>
          <NavBarInsideSectionL>
            <Title onClick={() => navigate('/static/')}>L.B</Title>
          </NavBarInsideSectionL>

          <NavBarInsideSectionR>
            <HeaderMenu onClick={() => navigate('/static/onboarding')}>
              <IconImg src={heartIcon} alt="my" />
            </HeaderMenu>
            <HeaderMenu onClick={() => navigate('/static/My')}>
              <IconImg src={userIcon} alt="my" />
            </HeaderMenu>
            <HeaderMenu ref={menuRef} onClick={handleMenuClick} style={{ position: 'relative' }}>
              <IconImg src={menuIcon} alt="menu" />
              {menuOpen && (
                <DropdownMenu>
                  <DropdownItem onClick={handleBugReport}>
                    버그 제보하기
                  </DropdownItem>
                  <DropdownItem onClick={handleGitHub}>
                    깃허브 페이지
                  </DropdownItem>
                </DropdownMenu>
              )}
            </HeaderMenu>
          </NavBarInsideSectionR>
        </NavBar>

        <LeftAlignBox>
          <SearchDiv>
            <TextBig>블루레이 추천</TextBig>
            <TextSmall>당신의 인생영화를 찾아보세요!</TextSmall>
            <LeftAlign>
              <SearchInput
                value={keyWord}
                onChange={(e) => setKeyWord(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="상품명 검색"
              />
              <SearchImgDiv onClick={handleSearch}>
                <SearchImg src={searchIcon} alt="search" />
              </SearchImgDiv>
            </LeftAlign>
          </SearchDiv>
        </LeftAlignBox>
      </BasicBase>
    </MainTopBarSection>
  );
};

export default MainTopBar;
