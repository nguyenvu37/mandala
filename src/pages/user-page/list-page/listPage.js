import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Waiting from "../../../common/waiting";
import Categories from "../../../components/categories/categories";
import ShowProductList from "../../../components/list-page/showProduct";

function ListPage() {
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
    if (products.length !== 0) setData([...products]);
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
            <div className="list">
              <Categories />
              <ShowProductList data={data} />
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default ListPage;
