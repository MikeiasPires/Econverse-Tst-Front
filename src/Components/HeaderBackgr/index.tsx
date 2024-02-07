import React from "react";
import Crow from "../../public/assets/CrownSimple.svg";
import "./index.scss";
import { headerBackData } from "../../utils/datas";

export function HeaderBack() {

  return (
    <div>
      <div className="HeaderCategory">
        <ul className="StruturingList">
          {headerBackData.map((item) => {
            return (
              <React.Fragment key={item.id}>
                {item.img && (
                  <img
                    style={{  width:'20px', marginRight:'5px' }}
                    src={item.img}  
                    key={item.id}
                    alt="image"
                  />
                )}
                <li>{item.content}</li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
      <div className="BackgroundConfig">
        <div className="ConfigSpace">
          <span style={{marginTop:'40px'}}>
            Venha conhecer nossas <br /> Promoções <br /> 50% off nos produtos
          </span>
          <div>
          <button style={{ marginTop: "30px" }}> Ver produto</button>
          </div>
        </div>
      </div>
    </div>
  );
}
