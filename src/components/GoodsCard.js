import React from "react";

const GoodCard = ({ image, name, price }) => {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3>{name}</h3>
      <p style={styles.price}>
        <b>Price: {price}</b>
      </p>
    </div>
  );
};

const styles = {
  card: {
    border: "2px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    width: "200px",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Додаємо тінь для краси
    transition: "transform 0.3s", // Додаємо анімацію при наведенні
  },

  image: {
    position: "relative",
    top: "8%",
    paddingBottom: "16px",
    width: "100px",
    height: "auto",
  },

  price: {
    position: "relative",
    top: "5%",
    color: "#555",
  },
};

export default GoodCard;
