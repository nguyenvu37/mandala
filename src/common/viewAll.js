import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchProductRequest,
  actFetchTotalRowsRequest,
  actLoading,
} from "../actions/actions";
import { withRouter } from "react-router-dom";
import Aos from "aos";
import Waiting from "./waiting";

const ViewAll = (props) => {
  const { t } = useTranslation("translation");
  const isLoading = useSelector((state) => state.loading);
  const dispatchGridPage = useDispatch();
  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleChangeGridPage = (filter) => {
    dispatch(actLoading(true));
    if (filter === "hot") {
      dispatchGridPage(
        actFetchProductRequest({ _limit: 6, _page: 1, hot: filter })
      );
      dispatchGridPage(actFetchTotalRowsRequest({ hot: filter }));
    }

    if (filter === "new") {
      dispatchGridPage(
        actFetchProductRequest({ _limit: 6, _page: 1, new: filter })
      );
      dispatchGridPage(actFetchTotalRowsRequest({ new: filter }));
    }

    if (filter > 0) {
      dispatchGridPage(
        actFetchProductRequest({ _limit: 6, _page: 1, view_gte: filter })
      );
      dispatchGridPage(actFetchTotalRowsRequest({ view_gte: filter }));
    }

    setTimeout(() => {
      props.history.push("/grid");
      dispatch(actLoading(true));
    }, 500);
  };

  return (
    <div className="product__view-all">
      <button
        onClick={() => handleChangeGridPage(props.filter)}
        data-aos="flip-down"
      >
        {isLoading ? (
          <div className="btn-view">
            <Waiting />
          </div>
        ) : (
          t("hotTrend.viewAll")
        )}
      </button>
    </div>
  );
};

export default withRouter(ViewAll);
