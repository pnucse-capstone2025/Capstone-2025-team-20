import React, { Suspense} from "react";
import ProductList from "../components/ProductList";
import { BasicBase, Footer, Spacer } from "../style/common.styled";
import Loading from "../components/Loading";
import { ErrorBoundary } from "react-error-boundary";

export default function SearchPage() {
  return (
    <>
      <BasicBase>
        <Spacer h={70}/>
      <ErrorBoundary fallback={
        <div> 오류 발생
      </div>}>
      <Suspense fallback={<Loading/>}>
        <ProductList/>
      </Suspense>
        </ErrorBoundary>
      </BasicBase>
      <Footer>
        © 2025 pusan national university capstone project Blu-ray Recommender
      </Footer>
    </>
  );
}