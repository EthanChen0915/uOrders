import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Card from "../../components/card/Card";
import Categories from "../../components/categories/Categories";
import "./Body.scss";

function Body() {
  const url = "http://localhost:3003/dishes";
  const [categories, setCategories] = useState([]);
  const [selectCate, setSelectCate] = useState("burger");
  const [selectedData, setSeletectedData] = useState();
  useEffect(() => {
    fetch(url).then(async (response) => {
      if (response.ok) {
        const jsonResponse = await response.json();
        setCategories(await jsonResponse);
        setSeletectedData(await jsonResponse[0].types);
      }
    });
  }, [url]);

  return (
    <div>
      <div className="button_wrapper">
        <div className="button_container">
          {categories.map((categgory) => {
            return (
              <button
                onClick={() => {
                  setSelectCate(categgory.category);
                  setSeletectedData(categgory.types);
                }}
                className={
                  categgory.category === selectCate ? "button-red" : "button"
                }
              >
                {categgory.category}
              </button>
            );
          })}
        </div>
      </div>
      <hr className="divider" />
      <div className="card__item_container">
        <div className="category__container">
          <h1 className="category__title">{selectCate}</h1>
        </div>
        <Card selectedData={selectedData} />
      </div>
    </div>
  );
}

export default Body;
