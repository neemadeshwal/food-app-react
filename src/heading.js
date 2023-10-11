import React from "react";

const Categories = ({ categories, heading, handleClick }) => {
  return (
    <>
      <div className="category">
        {categories.map((category) => {
          return (
            <button
              onClick={() => {
                handleClick(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
      <h2 className="title">{heading}</h2>
    </>
  );
};

export default Categories;
