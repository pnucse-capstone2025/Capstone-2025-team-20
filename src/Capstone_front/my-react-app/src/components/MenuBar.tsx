import React, { useState, useEffect, useRef } from 'react'
import searchIcon from '../resource/img/search.svg'
import userIcon from '/img/user.svg'
import menuIcon from '/img/menu.svg'
import heartIcon from '/img/heart.svg'
import {
    HeaderMenu, IconImg, NavBar, NavBarInsideSectionL, NavBarInsideSectionR,
    Title, SearchInput, SearchBoxWrapper, DropdownMenu, DropdownItem
} from './MenuBar.styled'
import { BasicBase } from '../style/common.styled'
import { useNavigate } from 'react-router-dom'
import { useToast } from '../context/ToastContext'

const MenuBar = () => {
    const navigate = useNavigate()
    const [searchOpen, setSearchOpen] = useState(false)
    const [keyword, setKeyword] = useState('')
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const { showToast } = useToast()

    const handleSearch = () => {
        if (!keyword) return
        navigate(`/static/SearchPage/${keyword}`)
        setKeyword('')
        setSearchOpen(false)
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSearch()
    }

    const handleMenuClick = () => {
        setMenuOpen(prev => !prev)
    }

    const handleBugReport = async () => {
        const email = 'hcan1223@pusan.ac.kr'
        try {
            await navigator.clipboard.writeText(email)
            showToast(`이메일 주소가 클립보드에 복사되었습니다`, 'success')
        } catch (err) {
            showToast(`버그 제보 이메일: ${email}`, 'info')
        }
        setMenuOpen(false)
    }

    const handleGitHub = () => {
        window.open('https://github.com/patkrdj/Capstone', '_blank')
        setMenuOpen(false)
    }

    // 메뉴 외부 클릭 시 드롭다운 닫기
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false)
            }
        }

        if (menuOpen) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [menuOpen])

    return (
        <BasicBase>
            <NavBar>
                <NavBarInsideSectionL>
                    <Title onClick={() => navigate('/static/')}>L.B</Title>
                </NavBarInsideSectionL>

                <NavBarInsideSectionR>
                    <SearchBoxWrapper>
                        <SearchInput
                            type="text"
                            value={keyword}
                            onChange={e => setKeyword(e.target.value)}
                            placeholder="검색어 입력 후 Enter"
                            onKeyDown={handleKeyPress}
                            open={searchOpen} // props 전달
                        />
                        <HeaderMenu onClick={() => setSearchOpen(prev => !prev)}>
                            <IconImg src={searchIcon} alt="search" />
                        </HeaderMenu>
                    </SearchBoxWrapper>

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
        </BasicBase>
    )
}

export default MenuBar
