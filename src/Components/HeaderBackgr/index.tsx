import React from 'react';
import Crow from "../../public/assets/CrownSimple.svg";
import "./index.scss";


export function HeaderBack() {
  return (
    <div>
<div className="HeadeCategory">
          <ul className="StruturingList">
            <li>Todas as categorias</li>
            <li>supermercado</li>
            <li>livros</li>
            <li>moda</li>
            <li>lançamentos</li>
            <li>Oferta do dia</li>
            <img src={Crow} alt="" style={{}} />
            <li> assinatura</li>
          </ul>
        </div>
        <div className="BackgroundConfig">
          <div className="ConfigSpace">
          <span >Venha conhecer nossas</span>
          <span>Promoções</span>
          <label> 50% off nos produtos</label>
          <button style={{marginTop:'30px'}}> Ver produto</button>
          </div>
        </div>    
        </div>
  );
}