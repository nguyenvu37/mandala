import React from "react";

import Slider from "react-animated-slider";
import background from "../../../assets/img/home/background.jpg";
import background2 from "../../../assets/img/home/background2.jpg";
import background3 from "../../../assets/img/home/background3.jpeg";
import { useTranslation } from "react-i18next";
// import { useDispatch } from "react-redux";
// import {
//   actFetchProductRequest,
//   actFetchTotalRowsRequest,
// } from "../../../actions/actions";
import { withRouter } from "react-router-dom";

const Sliders = (props) => {
  const { t } = useTranslation("translation");
  // const dipatchProduct = useDispatch();
  // const dispatchTotalRow = useDispatch();

  const content = [
    {
      title: t("banner.titleBanner1"),
      button: t("banner.shopNow"),
      image: background,
      color: "#789629",
      ml: "150px",
      manufacturer: "green",
      disabled: "disabled",
    },
    {
      // title: t("banner.titleBanner2"),
      button: t("shopNow"),
      image: background2,
      color: "#fff",
      left: "13%",
      top: "-15%",
      ml: "100px",
      manufacturer: "enesti",
    },
    {
      // title: t("banner.titleBanner3"),
      button: t("banner.shopNow"),
      image: background3,
      color: "#fff",
      left: "10%",
      top: "-30%",
      ml: "100px",
      manufacturer: "laneige",
    },
  ];

  // const handleCallListPage = (filter) => {
  //   dipatchProduct(
  //     actFetchProductRequest({
  //       _limit: 6,
  //       _page: 1,
  //       manufacturer: filter,
  //     })
  //   );

  //   dispatchTotalRow(
  //     actFetchTotalRowsRequest({
  //       manufacturer: filter,
  //     })
  //   );
  //   props.history.push("/list");
  // };
  return (
    <Slider autoplay={5000}>
      {content.map((item, index) => (
        <div
          className="sliders__bg"
          key={index}
          style={{
            background: `url(${item.image}) no-repeat center center`,
            backgroundSize: "cover",
          }}
        >
          <div className="overlay">
            <div className="box">
              <div
                className="center showcase"
                style={{
                  marginLeft: `${item.left}`,
                  marginTop: `${item.top}`,
                }}
              >
                <h1 style={{ color: `${item.color}` }}>{item.title}</h1>
                {/* <button
                  style={{ marginLeft: `${item.ml}` }}
                  onClick={() => handleCallListPage(item.manufacturer)}
                  disabled={item.disabled}
                >
                  {item.button}
                </button> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default withRouter(Sliders);
