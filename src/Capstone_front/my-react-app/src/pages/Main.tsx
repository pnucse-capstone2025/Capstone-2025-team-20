import React, { Suspense, useState } from "react";
import ProductSimpleList from "../components/ProductSimpleList";
import { BackgroundPattern, BasicBase, EmptyBox, Footer, Spacer } from "../style/common.styled";
import {
  ProductsSection,
  SubTitle,
  SectionDivider,
} from "./Main.styled";

import MainTopBar from "../components/main/MainTopBar";
import { ErrorBoundary } from "react-error-boundary";
import Loading from "../components/Loading";

import RecommendationSection from "../components/RecommendationSection";
import { WhiteContainer } from "../components/ProductSimpleList.styled";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  mall: string;
};

const Main = () => {

  return (
    <>
      <BackgroundPattern />
      <MainTopBar />
      <Spacer h={48} />
      <BasicBase>
        <div style={{ width: "100%" }}>
          <SubTitle>추천 상품</SubTitle>
        </div>
        <ErrorBoundary
          fallback={<div>상품을 불러오는중 오류가 발생했습니다</div>}
        >
          <RecommendationSection />
        </ErrorBoundary>
        <SectionDivider />

        <div style={{ width: "100%" }}>
          <SubTitle>인기순</SubTitle>
        </div>
        <ErrorBoundary
          fallback={<div>상품을 불러오는중 오류가 발생했습니다</div>}
        >
          <Suspense fallback={
            <WhiteContainer>
              <Loading 
                type="enhanced" 
                message="인기 상품을 불러오고 있어요..."
              />
            </WhiteContainer>
            }>
            <ProductSimpleList />
          </Suspense>
        </ErrorBoundary>

        <SectionDivider />


      </BasicBase>
      <Footer>
        © 2025 pusan national university capstone project Blu-ray Recommender
      </Footer>
    </>
  );
};

export default Main;
