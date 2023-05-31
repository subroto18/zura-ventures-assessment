import React from "react";

export const ProductCard = (props) => {
  let { name, listOfImages, Quantity, Rating, options } = props.data;
  let productThumbnail = listOfImages?.[0];
  return (
    <div className="card">
      <div className="card__img">
        <img
          className="img__fuite "
          src={productThumbnail}
          alt="product thumbnail"
        />
      </div>
      <div className="card__details">
        <h5 className="card__title">
          {name.length > 10 ? name.substring(0, 10) + "..." : name}
        </h5>
        <div className="card__option__outer">
          <div className="card__option">
            {options.map((pd) => {
              return (
                <>
                  {Object.keys(pd).map((item, index) => {
                    return (
                      <div className="card__option_inner">
                        <p className="card__option__name">{item}:</p>
                        <select>
                          {Object.values(pd)[index].map((item) => {
                            return (
                              <option key={item} value="volvo">
                                {item}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    );
                  })}
                </>
              );
            })}
          </div>
        </div>
        <div className="card__stock__rating__div">
          <p>
            <spam>Stock</spam>: <span>{Quantity}</span>
          </p>

          <p>
            <spam>Rating</spam>: <span>{Rating.toFixed(1)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
