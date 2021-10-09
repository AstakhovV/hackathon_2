import React from "react";
import Progress from "../Components/Progress/Progress";

const Home = () => {
  const dataForProgressItems = {
    "Заполненные данные разработчика:": 25,
    HTML: 100,
    CSS: 90,
    JavaScript: 50,
    React: 10,
  };

  return (
    <div>
      <Progress dataForProgressItems={dataForProgressItems} />
    </div>
  );
};

export default Home;
