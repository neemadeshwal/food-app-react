import "./styles.css";
import Heading from "./heading";
import Content from "./content";
import React from "react";
import FoodData from "./data";

function App() {
  const allCategories = ["All", ...new Set(FoodData.map((food) => food.type))];
  const [foodMenu, setFoodMenu] = React.useState(FoodData);
  const [categories, setCategories] = React.useState(allCategories);
  const [title, setTitle] = React.useState("All");

  function handleClick(type) {
    setTitle(type);
    if (type === "All") {
      return setFoodMenu(FoodData);
    }
    const newList = FoodData.filter((food) => food.type === type);
    setFoodMenu(newList);
  }
  return (
    <div className="food-container">
      <Heading
        categories={categories}
        heading={title}
        handleClick={handleClick}
      />
      <Content items={foodMenu} />
    </div>
  );
}

export default App;
