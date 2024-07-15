import React from "react";
import Header from "./Header";
import Card from "./Card";
import data from "./data.js";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="card-container">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            location={item.location}
            googleMapsUrl={item.googleMapsUrl}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
