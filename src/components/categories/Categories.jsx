import React from "react";

const Categories = ({ categories }) => {
  return (
    <div className="Categories">
      {categories.map((categgory) => {
        return <button>{categgory.category}</button>;
      })}
    </div>
  )
};

export default Categories;
