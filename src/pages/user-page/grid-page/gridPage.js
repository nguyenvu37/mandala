import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Waiting from "../../../common/waiting";
import Categories from "../../../components/categories/categories";
import ShowProduct from "../../../components/grid-page/showProduct";

function GridPage() {
  const [data, setData] = useState([]);
  const products = useSelector((state) => state.products.products);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (products.length > 0) {
      setData([...products]);
    } else setData([]);
  }, [products]);

  return (
    <main>
      {isLoading ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Waiting />
        </div>
      ) : (
        <section>
          <div className="box">
            <div className="grid">
              <Categories />
              <ShowProduct data={data} />
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default GridPage;
