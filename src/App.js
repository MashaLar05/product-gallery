import React, { useState, useEffect } from "react";
import GoodCard from "./components/GoodsCard";
import axios from "axios";
import "./App.css";
import { HashRouter as Router } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiURL = "https://fakestoreapi.com/products";

    axios
      .get(apiURL)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
      });
  }, []);

  return (
    <Router>
      <div className="App" style={styles.gallery}>
        {products.length > 0 ? (
          products.map((product) => (
            <GoodCard
              key={product.id}
              image={product.image}
              name={product.title}
              price={product.price}
            />
          ))
        ) : (
          <p>Завантаження товарів...</p>
        )}
      </div>
    </Router>
  );
}

const styles = {
  gallery: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "20px",
  },
};

export default App;
