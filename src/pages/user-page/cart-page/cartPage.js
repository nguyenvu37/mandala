import React, { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Waiting from "../../../common/waiting";
import CartList from "../../../components/cart-page/cart-list";

const CartPage = () => {
  const { t } = useTranslation("translation");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
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
        <Fragment>
          <div className="box">
            <div className="process">
              <div className="progressbar">
                <div className="page-cart">
                  <span>Step 1: {t("process.step1")}</span>
                </div>
              </div>
            </div>
          </div>
          <CartList />
        </Fragment>
      )}
    </main>
  );
};

export default CartPage;
