import React, { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Waiting from "../../../common/waiting";
import CurrentOffers from "../../../components/homepage/current-offer/currentOffer";
import Hottrend from "../../../components/homepage/hot-trend/hottrend";
import NewProducts from "../../../components/homepage/new-product/newProduct";
import Sliders from "../../../components/homepage/slider/slider";
import VisitUs from "../../../components/homepage/visit-us/visitUs";

function HomePage() {
  const { t } = useTranslation();
  const dataHotTrend = useSelector((state) => state.products.hotTrend);
  const dataNewProduct = useSelector((state) => state.products.newProduct);
  const [dataHot, setDataHot] = useState([]);
  const [dataNewProducts, setDataNewProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (dataHotTrend.length !== 0) setDataHot([...dataHotTrend]);
    if (dataNewProduct.length !== 0) setDataNewProducts([...dataNewProduct]);
  }, [dataHotTrend, dataNewProduct]);

  return (
    <Fragment>
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
        <main style={{ position: "relative" }}>
          <div className="background">
            <div className="background__img">
              <Sliders />
            </div>
          </div>
          <section>
            <div className="box">
              <div className="policy">
                <div className="policy__transport">
                  <img
                    src={require("../../../assets/img/home/plane.png")}
                    alt=""
                  />
                  <p>{t("policy.policy1")}</p>
                </div>
                <div className="policy__gift">
                  <img
                    src={require("../../../assets/img/home/gift.png")}
                    alt=""
                  />
                  <p>{t("policy.policy2")}</p>
                </div>
                <div className="policy__discount">
                  <img
                    src={require("../../../assets/img/home/star.png")}
                    alt=""
                  />
                  <p>{t("policy.policy3")}</p>
                </div>
              </div>
            </div>
          </section>
          <Hottrend dataHot={dataHot} />
          <CurrentOffers />
          <NewProducts dataNewProducts={dataNewProducts} />
          <VisitUs />
        </main>
      )}
    </Fragment>
  );
}

export default HomePage;
