import React from "react";
import "./index.scss";

interface IntModal {
  isOpen: boolean;
  setOpen: (isOpen:boolean)=> void;
  selectProduct:{
    productName:string;
    descriptionShort:string;
    photo:string;
    price:number;
  }
}



export default function Modal({ isOpen, setOpen, selectProduct }: IntModal) {

    

  if (isOpen) {
    return (
      <div className="Background">
        <div className="ContainerModal">
          <button className="ButtonClose" onClick={() => setOpen(!isOpen)}>
            X
          </button>
            <img className="ImageStyle" src= {selectProduct.photo} alt="" />
          <div className="Titletype">
            <h2>{selectProduct.productName}</h2>
            <span className="PriceStyle">{selectProduct.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}</span>
            <span className="TitleSub">
             {selectProduct.descriptionShort}
            </span>
            <span className="TitleSubDetails">
              {" "}
              Veja mais detalhes do produto{" "}
            </span>
            <div>
              <button>
                <i></i>
              </button>
              <span>2</span>
              <button>
                <i></i>
              </button>
            </div>
            <button className="ButtonBuy">COMPRAR</button>
          </div>
          </div>
        </div>
    );
  } else {
    <></>;
  }
}
