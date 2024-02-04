import React from "react";
import "./index.scss"; 
import { options } from "../../utils/dataRelated";
import { CategoryBox } from "../../utils/dataCategory.ts";

export function RelatedProductsMenu() {
  console.log(CategoryBox);

  return (
    <>
      {CategoryBox.map((category) => (
        <React.Fragment key={category.id}>
          <div className="SelectBoxCategory">
            <img
              src={category.img}
              alt="images"
              style={{ width: "61px", marginLeft: "30px" }}
            />
          </div>
          <div className="StyleSpan">
            <span>{category.name}</span>
          </div>
        </React.Fragment>
      ))}

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