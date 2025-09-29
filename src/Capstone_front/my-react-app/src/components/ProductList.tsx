import * as S from "./ProductList.styled"; // 그대로 재활용 가능
import ProductCard from "./ProductCard";
import { useSearchSale } from "../hook/useSales";
import { useParams } from "react-router-dom";

export default function ProductList() {

  const { keyWord } = useParams<{ keyWord: string }>();

  if (keyWord === undefined) {
  // id가 없으면 렌더링하지 않거나 에러 처리
  return <div>Invalid ID</div>;
  }
  
  

  const { data : products} = useSearchSale(keyWord);
  const productList = products as any[] || [];
  console.log(productList.length)
  if(productList.length === 0){
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