import React from "react";
import style from "../styles/cardContainer.module.css";
import { useSelector } from "react-redux";
import { RAMDOM_INDEX } from "../utils/helper";
import { ProductCard } from "./ProductCard";
export const ProductContainer = () => {
  const { productApiloading, productApiFailed, productData } = useSelector(
    (store) => store.product
  );

  return (
    <div className={style.card__container__section}>
      <div className="row container">
        {productApiloading ? (
          <div className="loading__spinner">
            <p>Loading...</p>
          </div>
        ) : productApiFailed ? (
          <div className="api__error">
            <p>Someting went wrong!</p>
          </div>
        ) : (
          <>
            {productData.map((item) => {
              return (
                <div
                  key={item.__id}
                  className="col-lg-2 col-md-4 col-sm-6 col-xs-12"
                >
                  <ProductCard data={item} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};
