import react ,{useEffect, useState}from "react";
import Card from "./Card";
import papa from "papaparse";
import axios from "axios";
import productCSV from "./ProductList.csv"
import { HiSearch } from "react-icons/hi";
import style from "../../src/Components/style.css";

const Main = () => {
  const [search,setSearch]=useState("");
  const [data,setData]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(productCSV);
      const csvData = await response.text();
      const parsedData = papa.parse(csvData, {
        header: true,
      }).data;
      const adjustedData = parsedData.map((item) => ({
        Title: item.Title,
        price: item.Price,
        rating:item.Rating,
        image:item.Image,
        link:item.Link
      }));
      setData(adjustedData);
    };
    fetchData();
  }, []);
  const searchProduct = (evt) => {
    if (evt.key === "Enter") {
      console.log("hello");
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            Find the right product.
            <br /> Get the best deal.
          </h1>
        </div>
        <div className="row2">
          <h2>What are you looking for today?</h2>

          <div className="search relative">
            <div className="wrapper">
              <input
                type="text"
                className="{style.searchInput}"
                placeholder="Enter Product Name Here . . ."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={searchProduct}
              />
              <div className="searchIcon">
                <HiSearch className="fs-3 absolute d-flex start-0 " />
              </div>
            </div>
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>

      <div className="container">
      {data.map((item, index) => (
          <Card
            key={index}
            title={item.Title}
            price={item.price}
            rating={item.rating}
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
};
export default Main;
