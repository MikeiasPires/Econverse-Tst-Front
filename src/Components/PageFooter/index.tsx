import React from "react";
import "./index.scss";
import Pix from "../../public/assets/pix.svg";
import Visa from "../../public/assets/visa.svg";
import Dinners from "../../public/assets/dinners.svg";
import Sodexo from "../../public/assets/sodexo.svg";
import Ifood from "../../public/assets/ifood.svg";
import Amex from "../../public/assets/amex.svg";
import Elo from "../../public/assets/elo.svg";
import Ticket from "../../public/assets/ticket.svg";
import Mastercard from "../../public/assets/mastercard.svg";
import Alelo from "../../public/assets/alelo.svg";



export default function Footer() {
  return (
    <div className="FooterStyle">
      <div className="AlignerGroup">
        <div className="ContainerAboutUs">
          <span className="AboutUs"> Sobre nos</span>
          <span className="Content"> Conheça</span>
          <span className="Content"> Como Comprar</span>
          <span className="Content"> Indicação de desconto</span>
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div>
          <div className="InforStyle">
            <span className="Infors"> INFORMAÇÕES ÚTEIS</span>
            <span className="Content"> Fale conosco</span>
            <span className="Content"> Duvidas</span>
            <span className="Content"> Prazo de entrega</span>
            <span className="Content"> Formas de Pagamento</span>
            <span className="Content"> Política de privacidade</span>
            <span className="Content"> Troca de soluções</span>
          </div>
        </div>
        <div>
      </div>
      <div>
      </div>
          <div className="PayForms">
            <img src={Visa} alt="" />
            <img src={Dinners} alt="" />
            <img src={Pix} alt="" />
            <img src={Sodexo} alt="" />
          </div>
          <div className="PayForms">
          <img src={Elo} alt="" />
            <img src={Ifood} alt="" />
            <img src={Amex} alt="" />
          </div>
          <div className="PayForms">
          <img src={Alelo}  alt="" />
            <img src={Mastercard} alt="" />
            <img src={Ticket} alt="" />
            </div>
          </div>
          <div className="BoxEmail">
           <div>
            <span className="Tittle"> Cadastre-se e Receba nossas </span>
            <span className="SuvTitle"> novidades e promoções <br/></span>
            <span className="Description">Excepteur sint occaecat cudatat non ent,</span>
           </div>
           <div className="alignEmailContainer">
           <input className="EmailStyle" placeholder="SEU E-MAIL" type="email" name="" id="" />
           <button className="StyleButton"> OK</button>
           </div>
          </div>
        </div>
  );
}
