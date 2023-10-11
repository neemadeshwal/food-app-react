import React from "react";
const category = ({ items }) => {
  return (
    <div className="food-list">
      {items.map((item) => {
        const {
          img,
          name,
          id,
          hasDiscount,
          price,
          Calories,
          isSpicy,
          HasGlutan,
          isBestSeller
        } = item;

        return (
          <div key={id} className="content">
            <img className="food-image" src={img} alt="foood" />
            <div className="discount">{hasDiscount}% off</div>
            <h4 className="food-name">
              {name}({Calories}Cal)
            </h4>
            <div className="icon-container">
              {isSpicy && (
                <img
                  className="icons"
                  src="https://static.vecteezy.com/system/resources/previews/007/258/385/non_2x/chili-logo-spicy-food-symbol-template-free-vector.jpg"
                  alt="red-chilli-img"
                />
              )}
              {HasGlutan && (
                <img
                  className="icons"
                  src="https://media.istockphoto.com/id/1164451180/vector/gluten-free-label-vector.jpg?s=612x612&w=0&k=20&c=fcUkZSj3ZYct1FwKL6486eqR9qH9G-AodPqDU8hUaI4="
                  alt="glutan-free-icon"
                />
              )}
              {isBestSeller && (
                <img
                  className="icons"
                  src="https://c8.alamy.com/comp/T3AA0R/awards-icon-on-background-for-graphic-and-web-design-simple-vector-sign-internet-concept-symbol-for-website-button-or-mobile-app-T3AA0R.jpg"
                  alt="is-bestseller-icon"
                />
              )}
            </div>
            <p className="price">${price}</p>
            <button className="order">Order now</button>
          </div>
        );
      })}
    </div>
  );
};

export default category;
