import React, { useEffect, useState } from "react";
import "./index.scss";
import { brandsdata } from "../../utils/dataBrands";
import { paterns } from "../../utils/datapartners";
import ArrowLeft from "../../public/assets/Esquerda.svg";
import ArrowRigth from "../../public/assets/Direita.svg";
import Modal from "../Modal";




function ProductsContainer() {
  const [armazen, setArmazen] = useState([]);
  const [selectProduct, SetSelectProduct] = useState([])
  const [open, SetOpen] = useState<Boolean>(false);
  

  function aplicarDesconto(item) {
    let totalDesconto = 0;
  
    for (const produto of item) {
      const precoOriginal = produto.price;
      const PrecoMenor = precoOriginal - 2;
      const precoParcel = precoOriginal / 2;
      produto.precoMenor = PrecoMenor;
      produto.precoParcel = precoParcel;
      produto.precoOriginal = precoOriginal;
      totalDesconto += 2;
      produto.desconto = totalDesconto;
    }
  }
  
  // Aplicar desconto aos produtos
  aplicarDesconto(armazen);
  

  console.log(selectProduct)

  function handleclick(item){
    SetSelectProduct(item)
    SetOpen(!open)
  }

  console.log(selectProduct)

  useEffect(() => {
    fetch(
      "https://corsproxy.io/?https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
    )
      .then((res) => res.json())
      .then((data) => setArmazen(data.products))
      .catch((error) => {
        console.error("erro durante a busca", error);
      });
  },[]);

  return (
    <>
      <div className="styleContainer">
        {armazen.map((item) => {
          return (
            <div className="ContainerProducts">
              <div>
                <img src={item.photo} alt="" />
              </div>
              <span className="TitleStyle">
                {item.productName} <br />
                {item.descriptionShort}
                <br />
              </span>
              <span className="PriceSale">
                {item.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
                <br />
              </span>
              <span className="PriceTotal">
                {item.precoMenor.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
                <br />
              </span>
              <span className="PriceDiscount">
                ou 2x de {item.precoParcel.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })} sem juros <br />
              </span>
              <span className="Freight">Frete grátis</span>
              <div className="DirectionButton">
                <button  onClick={() => handleclick(item)}>COMPRA</button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <Modal selectProduct={selectProduct}  isOpen={open}  setOpen={SetOpen}/>
      </div>
      <div className="StylePart">
        {paterns.map((partintem) => {
          return (
            <div className="PartnersContainer" key={partintem.id}>
              <h3>{partintem.title}</h3>
              <span>{partintem.subtitle}</span>
              <div>
                <button>CONFIRA</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="NameTopic">
        <h1>Produtos relacionados</h1>
        <span>Ver todos</span>
      </div>
      <div className="StylePartTwo">
        {paterns.map((partintem) => {
          return (
            <div className="PartnersContainertwo" key={partintem.id}>
              <h3>{partintem.title}</h3>
              <span>{partintem.subtitle}</span>
              <div>
                <button>CONFIRA</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="NameTopic">
        <h1>Navegue por marcas</h1>
      </div>
        <div className="StyleCircle">
          {brandsdata.slice(0, 5).map((brands) => {
            return (
              <div className="BrandsCircle" key={brands.id}>
                <img src={brands.image} alt="" />
              </div>
            );
          })}
        </div>
    </>
  );
}

export default ProductsContainer;
