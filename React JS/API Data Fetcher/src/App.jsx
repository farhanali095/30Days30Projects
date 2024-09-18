import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Products</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
          }}
        >
          {data.map((el) => (
            <div
              key={el.id}
              style={{
                textAlign: "center",
                width: "100%",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                fontFamily: "cursive",
              }}
            >
              <h2 style={{ color: "teal" }}>{el.title}</h2>
              <img
                src={el.image}
                alt={el.title}
                style={{ height: "300px", width: "300px" }}
              />
              <p style={{ color: "teal" }}>${el.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
