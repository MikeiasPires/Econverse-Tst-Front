import React from 'react';
import "./index.scss";
import Box from "../../public/assets/Box.png";
import Heart from "../../public/assets/Heart.svg";
import User from "../../public/assets/UserCircle.svg";
import ShoppingCart from "../../public/assets/ShoppingCart.svg";
import Vtex from "../../public/assets/vtex.svg";

function HeaderBar() {
  return (
    <div>
        <div className="LineHeder" />
        <div className="ContainerHalf">
          <div>
            <img src={Vtex} alt="" style={{ marginLeft: "20px" }} />
          </div>
          <div>
            <input
              className="InputText"
              type="text"
              name=""
              id=""
              placeholder="O que você está buscando?"
            />
          </div>
          <button>
            <img src={Box} alt="" className="SizeBox" />
          </button>
          <button>
            <img src={Heart} alt="" className="SizeIMG" />
          </button>
          <button>
            <img src={User} alt="" className="SizeIMG" />
          </button>
          <button>
            <img src={ShoppingCart} alt="" className="SizeIMG" />
          </button>
        </div>
    </div>
  );
}


export default HeaderBar;