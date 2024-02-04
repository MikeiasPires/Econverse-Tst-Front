import React from "react";
import PrimaryHeder from "./HederInitial/PrimaryHeder";
import HeaderBar from "./HeaderText";
import { HeaderBack } from "./HeaderBackgr";
import { RelatedProductsMenu } from "./RelatedProducts";
import "./index.scss";
import ProductsContainer from "./MainProducts";

export default function Header() {
  return (
    <>
      <main className="main">
        <PrimaryHeder />
        <HeaderBar />
        <HeaderBack/>
        <RelatedProductsMenu/>
        <ProductsContainer/>
      </main>
    </>
  );
}
