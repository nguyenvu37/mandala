import React, { useEffect, useRef, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchProductRequest,
  actFetchTotalRowsRequest,
  actLoading,
  actNumCart,
} from "../../actions/actions";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { actLogout } from "../../actions/actions";
import callApi from "../../common/callApi";
import TranslationBtn from "../../common/translationBtn";
import queryString from "query-string";
import ResultSearchProduct from "../../common/resultSearchProduct";

const Header = (props) => {
  const { t } = useTranslation("translation");
  const [menu, setMenu] = useState(false);
  const inputSearch = useRef();
  const dispatch = useDispatch();
  const dispatchToTalRow = useDispatch();
  const dispatchLogout = useDispatch();
  const loggedIn = useSelector((state) => state.users.loggedIn);
  const [quanProduct, setQuanProduct] = useState(0);
  const [dataSearch, setDataSearch] = useState([]);
  const numCart = useSelector((state) => state.numCart.num);
  const inCart = useSelector((state) => state.addCart);
  const actionDelProduct = useSelector((state) => state.delCart.id);

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      const fetchNumProduct = async () => {
        await callApi(
          `carts?userId=${JSON.parse(localStorage.getItem("Token")).id}`,
          "get",
          null
        ).then((res) => {
          if (res && res.status === 200) {
            const dataCarts = [...res.data];
            if (dataCarts.length) {
              const numProduct = dataCarts[0].data.reduce(
                (a, b) => a + parseInt(b.quantity),
                0
              );
              setQuanProduct(numProduct);
            } else setQuanProduct(0);
          }
        });
      };
      fetchNumProduct();
    } else {
      let numProduct = inCart.reduce((a, b) => a + parseInt(b.quantity), 0);
      setQuanProduct(numProduct);
    }
  }, [numCart, inCart, actionDelProduct]);

  const handleLogout = () => {
    if (window.confirm(t("query-logout"))) {
      dispatchLogout(actLogout());
      dispatch(actNumCart(0));
      localStorage.removeItem("Token");
      localStorage.removeItem("idCustomer");
      localStorage.removeItem("order");
      props.history.push("/");
      NotificationManager.success("Success message", t("logout.success"));
      setMenu(false);
    }
  };

  const handleSearch = async () => {
    if (inputSearch.current.value) {
      const paramString = queryString.stringify({
        q: inputSearch.current ? inputSearch.current.value : "",
      });

      await callApi(`products?${paramString}`, "get", null).then((res) => {
        if (res && res.status && res.data) {
          setDataSearch([...res.data]);
        } else setDataSearch([]);
      });
    } else {
      setDataSearch([]);
    }
  };

  const handleShowMenu = () => {
    setMenu(true);
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  return (
    <header>
      <div className="box"></div>
      <div className="box">
        <div className="nav">
          <div className="nav__logo logo">
            <div className="nav__logo--square logo-square">
              <Link className="link" to="/">
                <img
                  className="logo-img"
                  src={require("../../assets/img/home/mandala.png")}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="nav__menu">
            <ul>
              <li>
                <Link className="link" to="/">
                  {t("navigations.home")}
                </Link>
              </li>
              <li className="dropdown">
                <div className="arrow-up"></div>
                <Link
                  className="link"
                  to="/grid"
                  onClick={() => {
                    dispatch(actLoading(true));
                    dispatch(actFetchProductRequest({ _limit: 6, _page: 1 }));
                    dispatchToTalRow(actFetchTotalRowsRequest({}));
                  }}
                >
                  {t("navigations.products")}
                </Link>
                <div className="dropdown-list">
                  <ul>
                    <li>
                      <Link
                        className="link"
                        to="/list"
                        onClick={() => {
                          dispatch(actLoading(true));
                          dispatch(
                            actFetchProductRequest({
                              _limit: 6,
                              _page: 1,
                              species: "cosmetic",
                            })
                          );
                          dispatchToTalRow(
                            actFetchTotalRowsRequest({ species: "cosmetic" })
                          );
                        }}
                      >
                        {t("dropdown.cosmetic")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="link"
                        to="/list"
                        onClick={() => {
                          dispatch(actLoading(true));
                          dispatch(
                            actFetchProductRequest({
                              _limit: 6,
                              _page: 1,
                              species: "perfume",
                            })
                          );
                          dispatchToTalRow(
                            actFetchTotalRowsRequest({ species: "perfume" })
                          );
                        }}
                      >
                        {t("dropdown.perfume")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="link"
                        to="/list"
                        onClick={() => {
                          dispatch(actLoading(true));
                          dispatch(
                            actFetchProductRequest({
                              _limit: 6,
                              _page: 1,
                              species: "makeup",
                            })
                          );
                          dispatchToTalRow(
                            actFetchTotalRowsRequest({ species: "makeup" })
                          );
                        }}
                      >
                        {t("dropdown.makeup")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link className="link" to="/about">
                  {t("navigations.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav__cart">
            <div className="nav__cart__item">
              <Link className="link cart-item" to="/cart">
                <i className="fas fa-shopping-cart cart"></i>
                <span>{quanProduct}</span>
              </Link>
              <div className="nav__cart__item__search">
                <input
                  className="input-search"
                  type="text"
                  name="search"
                  placeholder={t("admin.search")}
                  ref={inputSearch}
                  onKeyUp={handleSearch}
                />
                <i className="fas fa-search search"></i>
                {dataSearch.length > 0 ? (
                  <ResultSearchProduct data={dataSearch} />
                ) : (
                  ""
                )}
              </div>
              <div className="access">
                <div className="access-btn">
                  {loggedIn || localStorage.getItem("Token") !== null ? (
                    <div
                      className="dropdown login"
                      style={{
                        zIndex: 1000,
                        position: "relative",
                        width: "150px",
                        textAlign: "center",
                      }}
                    >
                      <Link to="/">
                        <i
                          className="far fa-user"
                          style={{
                            fontSize: "20px",
                            margin: "0 10px",
                          }}
                        ></i>{" "}
                        |{" "}
                        {`${JSON.parse(
                          localStorage.getItem("Token")
                        ).lastName.substring(0, 6)}`}
                      </Link>
                      <div className="dropdown-user">
                        <Link to="/editInformation" className="dropdown-item">
                          <i className="fas fa-cog"></i>
                          {t("edit-profile")}
                        </Link>
                        <Link to="/history-order" className="dropdown-item">
                          <i className="fas fa-list-alt"></i>
                          {t("history")}
                        </Link>
                        <span
                          className="dropdown-item"
                          style={{ fontSize: "1.2rem" }}
                          onClick={() =>
                            props.history.push(
                              `/profile/${
                                JSON.parse(localStorage.getItem("Token"))
                                  .firstName +
                                " " +
                                JSON.parse(localStorage.getItem("Token"))
                                  .lastName
                              }`
                            )
                          }
                        >
                          <i className="fas fa-user"></i>
                          {`${
                            JSON.parse(localStorage.getItem("Token")).firstName
                          } ${
                            JSON.parse(localStorage.getItem("Token")).lastName
                          }`}
                        </span>
                        <button
                          onClick={handleLogout}
                          className="dropdown-item"
                          href="#LogOut"
                        >
                          <i className="fas fa-sign-out-alt"></i>
                          {t("logout.title")}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div style={{ display: "flex" }}>
                      <Link className="link" to="/login">
                        {t("navigations.login")}
                      </Link>
                      <div className="emty"></div>
                      <Link className="link" to="/register">
                        {t("navigations.register")}
                      </Link>
                    </div>
                  )}
                  <TranslationBtn />
                </div>
                <div className="icon-nav">
                  <div className="icon-show">
                    <i className="fas fa-bars" onClick={handleShowMenu}></i>
                  </div>

                  <div className={menu ? "menu-overlay" : "hidden"}></div>
                  {menu ? (
                    <div className={menu ? "menu__vertical" : "hidden"}>
                      <div className="menu__logo logo">
                        <div className="menu__logo--square logo-square">
                          <Link
                            className="link"
                            to="/"
                            onClick={() => setMenu(false)}
                          >
                            <img
                              className="logo-img"
                              src={require("../../assets/img/home/mandala.png")}
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="icon-close">
                          <i
                            className="far fa-times-circle"
                            onClick={handleCloseMenu}
                          ></i>
                        </div>
                      </div>

                      <div className="menu-cart">
                        <Link
                          className="link cart-item"
                          to="/cart"
                          onClick={() => setMenu(false)}
                        >
                          <i className="fas fa-shopping-cart cart"></i>
                          <span>{quanProduct}</span>
                        </Link>
                        <div className="nav__cart__item__search">
                          <input
                            className="input-search"
                            type="text"
                            name="search"
                            placeholder={t("admin.search")}
                            ref={inputSearch}
                            onKeyUp={handleSearch}
                          />
                          <i className="fas fa-search search"></i>
                          {dataSearch.length > 0 ? (
                            <ResultSearchProduct data={dataSearch} />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>

                      <div className="menu__item">
                        <ul>
                          <li>
                            <Link
                              className="link"
                              to="/"
                              onClick={() => setMenu(false)}
                            >
                              {t("navigations.home")}
                            </Link>
                          </li>
                          <li className="dropdown">
                            <Link
                              className="link"
                              to="/grid"
                              onClick={() => {
                                dispatch(actLoading(true));
                                dispatch(
                                  actFetchProductRequest({
                                    _limit: 6,
                                    _page: 1,
                                  })
                                );
                                dispatchToTalRow(actFetchTotalRowsRequest({}));
                                setMenu(false);
                              }}
                            >
                              {t("navigations.products")}
                            </Link>
                            <div className="dropdown-list">
                              <ul>
                                <li>
                                  <Link
                                    className="link"
                                    to="/list"
                                    onClick={() => {
                                      dispatch(actLoading(true));
                                      dispatch(
                                        actFetchProductRequest({
                                          _limit: 6,
                                          _page: 1,
                                          species: "cosmetic",
                                        })
                                      );
                                      setMenu(false);
                                      dispatchToTalRow(
                                        actFetchTotalRowsRequest({
                                          species: "cosmetic",
                                        })
                                      );
                                    }}
                                  >
                                    {t("dropdown.cosmetic")}
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="link"
                                    to="/list"
                                    onClick={() => {
                                      dispatch(actLoading(true));
                                      dispatch(
                                        actFetchProductRequest({
                                          _limit: 6,
                                          _page: 1,
                                          species: "perfume",
                                        })
                                      );
                                      dispatchToTalRow(
                                        actFetchTotalRowsRequest({
                                          species: "perfume",
                                        })
                                      );
                                      setMenu(false);
                                    }}
                                  >
                                    {t("dropdown.perfume")}
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="link"
                                    to="/list"
                                    onClick={() => {
                                      dispatch(actLoading(true));
                                      dispatch(
                                        actFetchProductRequest({
                                          _limit: 6,
                                          _page: 1,
                                          species: "makeup",
                                        })
                                      );
                                      dispatchToTalRow(
                                        actFetchTotalRowsRequest({
                                          species: "makeup",
                                        })
                                      );
                                      setMenu(false);
                                    }}
                                  >
                                    {t("dropdown.makeup")}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <Link
                              className="link"
                              to="/about"
                              onClick={() => setMenu(false)}
                            >
                              {t("navigations.contact")}
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="menu__btn">
                        {loggedIn || localStorage.getItem("Token") !== null ? (
                          <div
                            className="dropdown login"
                            style={{
                              zIndex: 1000,
                              position: "relative",
                              width: "150px",
                              textAlign: "center",
                            }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setMenu(false);
                                props.history.push(
                                  `/profile/${
                                    JSON.parse(localStorage.getItem("Token"))
                                      .firstName +
                                    " " +
                                    JSON.parse(localStorage.getItem("Token"))
                                      .lastName
                                  }`
                                );
                              }}
                            >
                              <i
                                className="far fa-user"
                                style={{
                                  fontSize: "20px",
                                  margin: "0 10px",
                                }}
                              ></i>{" "}
                              |{" "}
                              {`${JSON.parse(
                                localStorage.getItem("Token")
                              ).lastName.substring(0, 6)}`}
                            </span>
                          </div>
                        ) : (
                          <div style={{ display: "flex" }}>
                            <Link
                              className="link"
                              to="/login"
                              onClick={() => setMenu(false)}
                            >
                              {t("navigations.login")}
                            </Link>
                            <div className="emty"></div>
                            <Link
                              className="link"
                              to="/register"
                              onClick={() => setMenu(false)}
                            >
                              {t("navigations.register")}
                            </Link>
                          </div>
                        )}
                        <div className="translation">
                          <TranslationBtn />
                        </div>
                      </div>

                      {localStorage.getItem("Token") ? (
                        <div className="menu-logout">
                          <button
                            onClick={handleLogout}
                            className="dropdown-item"
                            href="#LogOut"
                          >
                            <i className="fas fa-sign-out-alt"></i>
                            {t("logout.title")}
                          </button>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
