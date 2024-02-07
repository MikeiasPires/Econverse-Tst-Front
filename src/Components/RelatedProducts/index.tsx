import React from "react";
import "./index.scss"; 
import { options } from "../../utils/dataRelated";
import { CategoryBox } from "../../utils/dataCategory";

export function RelatedProductsMenu() {
  return (
    <>
    <div className="StyleBoxCategoy">
      {CategoryBox.map((category) => (
        <div key={category.id}>
          <div className="SelectBoxCategory">
            <img
              src={category.img}
              alt="images"
              style={{ width: "61px", marginLeft: "30px" }}
            />
          </div> 
            <span>{category.name}</span>
        </div>
      ))}
</div>
      <div className="NameTopic">
        <span className="Linehorizontal"></span>
        <h1>Produtos relacionados</h1>
        <span className="Linehorizontal"></span>
      </div>

      <ul className="horizontal-list">
        {options.map((option) => (
          <li key={option.id}>{option.name.toUpperCase()}</li>
        ))}
      </ul>
    </>
  );
}