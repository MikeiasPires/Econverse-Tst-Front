import React from "react";
import './index.scss'
import Credcard from "../../public/assets/CreditCard.svg"
import Truck from "../../public/assets/Truck.svg";
import ShieldCheck from "../../public/assets/ShieldCheck.svg";


export default function PrimaryHeder() {
    return (
        <div className="Containerinit">
        <div className="ItensContainer">
          <img src={ShieldCheck} alt="" />
          <span>Compra </span>
          <span style={{ color: "#F71963", fontWeight:'600' }}>100% segura</span>
        </div>
        <div className="ItensContainer">
          <img src={Truck} alt="" />
          <span style={{ color: "#F71963", fontWeight:'600' }}>frete grátis</span>
          <span>acima de r$ 200</span>
        </div>
        <div className="ItensContainer">
          <img src={Credcard} alt="icon cartao de credito" />
          <span style={{ color: "#F71963", fontWeight:'600' }}>Parcele</span>
          <span>suas compras </span>
        </div>
      </div>
    )
}