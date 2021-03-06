import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import callApi from "../../../common/callApi";
import SearchAdmin from "../../../common/searchAdmin";
import ProductItem from "../component/product-management/productItem";
import AddProduct from "../component/product-management/addProduct";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  actFetchProductRequest,
  actFetchTotalRowsRequest,
} from "../../../actions/actions";
import Pagination from "../../../common/pagination";

const ProductManagement = () => {
  const { t } = useTranslation("translation");
  const [data, setData] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const totalRows = useSelector((state) => state.totalRow);
  const filters = useSelector((state) => state.filters.filters);

  useEffect(() => {
    dispatch(
      actFetchProductRequest({
        _limit: 6,
        _page: 1,
        _sort: "date",
        _order: "desc",
      })
    );
    dispatch(actFetchTotalRowsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (products.length > 0) {
      setData([...products]);
    } else setData([]);
  }, [products]);

  const handleDelete = async (id) => {
    if (id) {
      if (window.confirm(t("admin.delete?"))) {
        await callApi(`products/${id}`, "delete", null).then(async () => {
          dispatch(actFetchProductRequest({ ...filters }));
          dispatch(actFetchTotalRowsRequest());
        });
      }
    }
  };

  const handleSearch = (keyword) => {
    dispatch(actFetchProductRequest({ ...filters, q: keyword }));
    dispatch(actFetchTotalRowsRequest({ q: keyword }));
  };

  const handleEdit = (id) => {
    history.push(`/admin/product-management/${id}`);
  };

  return (
    <div className="user-management">
      <div className="card text-center">
        <h5
          className="card-header bg-secondary text-light"
          style={{ fontSize: "28px", textTransform: "uppercase" }}
        >
          <i className="fas fa-users" style={{ marginRight: "10px" }}></i>
          {t("admin.menu3")}
        </h5>
        <div className="card-body">
          <div
            className="card-add"
            style={{ float: "left", width: "30%", margin: " 20px 0" }}
          >
            <AddProduct />
          </div>
          <div
            className="card-search"
            style={{ float: "right", width: "30%", margin: " 20px 0" }}
          >
            <SearchAdmin onSearch={handleSearch} />
          </div>
          {data.length > 0 ? (
            <table className="table table-bordered table-striped">
              <thead>
                <tr className="bg-light">
                  <th>{t("admin.code")}</th>
                  <th>{t("admin.discount")}</th>
                  <th>{t("admin.price")}</th>
                  <th>{t("admin.category")}</th>
                  <th>{t("admin.species")}</th>
                  <th>{t("admin.status")}</th>
                  <th>{t("admin.action")}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <ProductItem
                    key={index + 1}
                    data={item}
                    onDeleteItem={handleDelete}
                    onEditItem={handleEdit}
                  />
                ))}
              </tbody>
            </table>
          ) : (
            <div className="nothing-data">
              <h4>{t("admin.nothing")}</h4>
            </div>
          )}
        </div>

        <Pagination totalRows={totalRows} />
      </div>
    </div>
  );
};

export default ProductManagement;
