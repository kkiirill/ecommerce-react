import { memo, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { diffToast } from "../../functions/notification/notification";
import { addCart, removeWishlist } from "../../store/actions";
import { Data } from "../../types";

export const Wishlist: React.FC = memo(() => {
  const state: Data[] = useSelector((state: any) => state.handleWishlist);
  const dispatch = useDispatch();

  const handleRemove = useMemo(
    () => (product: Data) => {
      dispatch(removeWishlist(product));
    },
    [dispatch]
  );

  const addProduct = useMemo(
    () => (product: Data) => {
      dispatch(addCart(product));
      diffToast();
    },
    [dispatch]
  );

  const wishlistIsEmpty = () => {
    return (
      <div className="max-w-2xl mx-auto mt-4 pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 bg-white">
        <div className="flex text-2xl items-center justify-center">
          Ooopss... your wishlist is empty! Please choose any product.
        </div>
        <div className="flex items-center justify-center pt-6">
          <Link
            to="/"
            className="flex justify-center items-center border border-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:w-96 w-full hover:bg-gray-800 text-base font-medium leading-4 bg-gray-500 py-4 text-white animate-bounce"
          >
            Go to shooping
          </Link>
        </div>
      </div>
    );
  };

  return (
    <>
      {state.length > 0 ? (
        <div className="max-w-2xl mx-auto lg:max-w-7xl px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center">
          <div className="flex flex-col jusitfy-start items-start">
            <div className="mt-3">
              <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800">
                Favourites
              </h1>
            </div>
            <div className="mt-4">
              <p className="text-2xl tracking-tight leading-6 text-gray-600">
                {state.length} items
              </p>
            </div>
            <div className="mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {state.map((product, index) => (
                <div className="flex flex-col bg-gray-200 opacity-80 transition hover:scale-105 p-5 rounded-2xl">
                  <div className="relative">
                    <img
                      className="object-fill  rounded-2xl w-72 h-72"
                      src={product.image}
                      alt="bag"
                    />
                    <button
                      onClick={() => handleRemove(product)}
                      aria-label="close"
                      className="top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute  p-1.5 bg-gray-800 text-white hover:text-gray-400"
                    >
                      <svg
                        className="fil-current"
                        width={14}
                        height={14}
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 1L1 13"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 1L13 13"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <div className="flex justify-center items-center">
                      <p className="tracking-tight text-2xl font-semibold leading-6 text-gray-800">
                        {product?.title.substring(0, 20)}
                      </p>
                    </div>
                    <div className="flex justify-center items-center"></div>
                  </div>
                  <div
                    className={`flex-col jusitfy-start items-start mt-12 flex`}
                  >
                    <div className="mt-6">
                      <p className="tracking-tight text-base font-medium leading-4 text-gray-800">
                        ${product.price}
                      </p>
                    </div>
                    <div className="flex tablet:jusitfy-between flex-col lg:flex-row items-center mt-10 w-full  space-y-4 lg:space-y-0 lg:space-x-4 xl:space-x-8">
                      <div className="flex w-full text-center">
                        <Link
                          to={`/product/${product.id}`}
                          className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2 text-gray-800 w-full tracking-tight p-4 text-sm leading-4 hover:bg-gray-300 hover:text-gray-800  bg-white border border-gray-800"
                        >
                          More info
                        </Link>
                      </div>
                      <div className="w-full">
                        <button
                          onClick={() => addProduct(product)}
                          className="focus:outline-none focus:ring-gray-800 focus:ring-offset-2 focus:ring-2  text-white w-full tracking-tight py-4 text-lg leading-4  hover:bg-black bg-gray-800 border border-gray-800"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ToastContainer />
        </div>
      ) : (
        <>{wishlistIsEmpty()}</>
      )}
    </>
  );
});
