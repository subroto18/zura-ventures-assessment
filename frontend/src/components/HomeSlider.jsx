import React from "react";
import style from "../styles/slider.module.css";
import { useSelector } from "react-redux";
import { RAMDOM_INDEX } from "../utils/helper";
export const HomeSlider = () => {
  const { productApiloading, productApiFailed, productData } = useSelector(
    (store) => store.product
  );

  let sliderArray = [];

  sliderArray =
    productData.length > 0
      ? productData?.[RAMDOM_INDEX(productData.length)]?.listOfImages
      : [];

  return (
    <div className={style.slider__section}>
      <div className={style.slider}>
        <div className={style.imgs_slides}>
          {/* // radio button  */}
          {sliderArray.map((img, index) => {
            return (
              <input
                key={img}
                type="radio"
                name="radio-btn"
                id={`radio${index}`}
              />
            );
          })}

          {/* <!-- Radio buttons end -->
                <!-- Embedding  images start --> */}

          {sliderArray.map((img) => {
            return (
              <div key={img} className={`first ${style.slide}`}>
                <img src={img} alt="slider image" />
              </div>
            );
          })}
        </div>
        {/* <!-- Navigation start --> */}
        <div className={style.navigation}>
          {sliderArray.map((img, index) => {
            return (
              <label
                key={img}
                htmlFor={`radio${index}`}
                className={style.navigation__btn}
              ></label>
            );
          })}
        </div>
        {/* <!-- Navigation end --> */}
      </div>
      {/* <!-- Image slider end --> */}
    </div>
  );
};
