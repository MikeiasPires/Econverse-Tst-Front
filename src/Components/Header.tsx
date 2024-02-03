import React from "react";
import PrimaryHeder from "./HederInitial/PrimaryHeder";
import HeaderBar from "./HeaderText";
import { HeaderBack } from "./HeaderBackgr";


export default function Header() {
  return (
    <>
      <header>
        <PrimaryHeder />
        <HeaderBar />
        <HeaderBack/>
      </header>
    </>
  );
}
