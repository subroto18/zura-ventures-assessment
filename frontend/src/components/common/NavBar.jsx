import React, { useEffect, useState } from "react";
import style from "../../styles/navbar.module.css";
import Api from "../../api/Api";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateProductStatus } from "../../store/slices/productSlice";

export const NavBar = () => {
  const [search, setSearch] = useState("");
  const [searchProduct, setSearchProduct] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchApiError, setSearchApiError] = useState(false);

  let dispatch = useDispatch();
  useEffect(() => {
    performAPi();
  }, []);

  const performAPi = async () => {
    // loading phase

    dispatch(updateProductStatus({ loading: true, apiError: false, data: [] }));

    await Api()
      .get("product/getProducts")
      .then((res) => {
        // api success phase
        dispatch(
          updateProductStatus({
            loading: false,
            apiError: false,
            data: res.data,
          })
        );
      })
      .catch((error) => {
        // api failed phase
        updateProductStatus({
          loading: false,
          apiError: true,
          data: [],
        });
      });
  };

  // when search product

  // implement debounce
  useEffect(() => {
    let timer = setTimeout(() => {
      performSearchApi();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const performSearchApi = async () => {
    //loading phase
    setSearchLoading(true);
    const data = { searchData: search };
    await Api()
      .post("/product/getProductByAttribute", data)
      .then((res) => {
        // success phase
        setSearchLoading(false);
        setSearchProduct(res.data);
        setSearchApiError(false);

        console.log(res.data);
      })
      .catch((error) => {
        setSearchLoading(false);
        setSearchProduct([]);
        setSearchApiError(true);
      });
  };

  return (
    <div className={style.navbar__section}>
      <div>
        <input
          onBlur={() => setSearch("")}
          onChange={(e) => setSearch(e.target.value)}
          className={style.navbar__search__field}
          placeholder="Search Products"
          value={search}
        />
        <button className={style.navbar__search__btn}>Enter</button>

        {/* // if search data exist only then show product search result */}

        {!search == "" && (
          <div className={style.product__search__div}>
            {searchLoading ? (
              <p>Loading...</p>
            ) : searchApiError ? (
              <p>Something went wrong</p>
            ) : (
              <>
                {searchProduct.length > 0 ? (
                  <ul>
                    {searchProduct.map((item) => {
                      return (
                        <li key={item._id}>
                          <img
                            src={item?.listOfImages?.[0]}
                            className={style.search__product__img}
                            alt={item.name}
                          />
                          <span>{item.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p>No data found</p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
