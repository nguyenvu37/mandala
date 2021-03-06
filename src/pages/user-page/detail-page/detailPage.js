import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchDataDetailRequest } from "../../../actions/actions";
import callApi from "../../../common/callApi";
import Waiting from "../../../common/waiting";
import DetailProduct from "../../../components/detail-page/detail";
import RecentlyProduct from "../../../components/detail-page/recentlyProduct";
// import { FacebookProvider, Comments } from "react-facebook";

function DetailPage(props) {
  const product = useSelector((state) => state.dataDetail);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [numberRecently, setNumberRecently] = useState([]);
  const [dataRecentlyProduct, setDataRecentlyProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const idProduct = props.match.params.id;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (idProduct) {
      dispatch(actFetchDataDetailRequest(idProduct));
    }
  }, [idProduct, dispatch]);

  useEffect(() => {
    if (product.length !== 0) {
      setData([...product]);
    }

    const fetData = async () => {
      await callApi("products", "get", null).then((res) => {
        if (res && res.status === 200) {
          let arrNumber = [...res.data];
          let number = arrNumber[Math.floor(arrNumber.length / 2)];
          setNumberRecently(number.view);
        } else setNumberRecently(1);
      });
    };

    fetData();
    return () => {
      setData([]);
    };
  }, [product]);

  useEffect(() => {
    const fetchDataRecently = async () => {
      await callApi(`products?view_gte=${numberRecently}`, "get", null).then(
        (res) => {
          if (res && res.status === 200) {
            setDataRecentlyProduct([...res.data]);
          } else setDataRecentlyProduct([]);
        }
      );
    };
    fetchDataRecently();
  }, [numberRecently]);

  return data.length !== 0 ? (
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
        <main>
          <DetailProduct data={data} />
          <RecentlyProduct
            dataRecentlyProduct={dataRecentlyProduct}
            numberRecently={numberRecently}
          />

          <div
            className=""
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px 0 70px",
            }}
          >
            {/* <FacebookProvider appId="ilFYmUBs"> */}
            {/* <Comments href={`https://nguyenvu37.github.io/mandala`} /> */}
            <div
              class="fb-comments"
              data-href="https://nguyenvu37.github.io/mandala/#/"
              data-numposts="5"
              data-width=""
            ></div>
            {/* </FacebookProvider> */}
          </div>
        </main>
      )}
    </Fragment>
  ) : (
    <div style={{ height: "600px" }}>
      <Waiting custom={{ position: "relative", top: "100px", left: "50%" }} />
    </div>
  );
}

export default DetailPage;
