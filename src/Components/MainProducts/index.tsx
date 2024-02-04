import React, { useEffect, useState } from "react";
import "./index.scss";
import { error } from "console";
import { paterns } from "../../utils/datapartners";

function ProductsContainer() {
  const [armazen, setArmazen] = useState([]);
  console.log(paterns);

  useEffect(() => {
    fetch(
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error("erro durante a busca", error);
      });
  });

  return (
    <>
      <div className="ContainerProducts">
        <div>
          <img src="" alt="" />
        </div>
        <span className="TitleStyle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
        </span>
        <span className="PriceSale">
          {" "}
          R$ 50 <br />{" "}
        </span>
        <span className="PriceTotal">
          {" "}
          R$28,90 <br />{" "}
        </span>
        <span className="PriceDiscount">
          ou 2x de 49,95 sem juros <br />
        </span>
        <span className="Freight">Frete grátis</span>
        <div>
          <button>COMPRA</button>
        </div>
      </div>
      <div>
      {paterns.map((partintem) => {
        return (
            <div className="PartnersContainer" key={partintem.id}>
            <h3>{partintem.title}</h3>
            <span>
              {partintem.subtitle}
            </span>
            <div>
              <button>CONFIRA</button>
            </div>
          </div>
        )
    })}

      </div>
    </>
  );
}

export default ProductsContainer;
