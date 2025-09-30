import React from "react";
import * as S from "./ProductList.styled"; // 그대로 재활용 가능
import ProductCard from "./ProductCard";
import { useSearchSale } from "../hook/useSales";
import { useParams } from "react-router-dom";
import { Product } from "../type/product";
import Loading from "./Loading";

export default function ProductList() {

  const { keyWord } = useParams<{ keyWord: string }>();
  const safeKeyWord = (keyWord ?? "").trim();

  const { data: products, isLoading } = useSearchSale(safeKeyWord);
  const productList = (products ?? []) as Product[];

  if (!safeKeyWord) {
    return <div>검색어가 없습니다</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (productList.length === 0) {
    return <div>검색 결과가 없습니다</div>;
  }
  return (
    <S.List>
      {productList.map((m) => (
        <ProductCard key={m.id} product={m} />
      ))}
    </S.List>
  );
}