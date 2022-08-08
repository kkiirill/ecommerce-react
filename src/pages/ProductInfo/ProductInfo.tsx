import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { BASE_URL } from "../../api/api";
import { diffToast, wishListToast } from "../../notification/notification";
import { addCart, addWishlist } from "../../store/actions";
import { Data } from "../../types";
import "./ProductInfo.css";
import "react-toastify/dist/ReactToastify.css";

export function ProductInfo() {
  const dispatch = useDispatch();

  const { productID } = useParams();
  const productURL = `${BASE_URL}/${productID}`;
  const [product, setProduct] = useState<Data | undefined>();

  const [slide, setSlide] = useState(true);

  const slideToggle = () => setSlide(!slide);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(productURL);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const addProduct = () => {
    dispatch(addCart(product as Data));
    diffToast();
  };

  const addProductToWishlist = () => {
    dispatch(addWishlist(product as Data));
    wishListToast();
  };
  return (
    <>
      <div className="flex justify-center items-center scroll-smooth pt-12">
        <div
          id="menu"
          className={
            "md:px-6 px-4 py-12 w-full h-full flex justify-center  bg-gray-200 bg-opacity-40"
          }
        >
          <div className="2xl:container 2xl:mx-auto relative  flex justify-start w-96 md:w-10/12 xl:w-8/12 2xl:w-7/12 item-start flex-col lg:flex-row   lg:space-x-8 py-12 md:py-16 lg:py-12 px-4 md:px-8 lg:px-24 bg-gray-100 bg-opacity-90">
            <div className="w-full">
              <div className="relative">
                <div className="slider">
                  <div className="slide-ana flex flex-shrink-0">
                    <div
                      className={
                        "flex flex-shrink-0 transform " +
                        (slide ? "translate-x-0" : "-translate-x-full")
                      }
                    >
                      <img
                        className=" lg:block hidden w-full h-full object-center object-cover"
                        src={product?.image}
                        alt="product"
                      />
                      <img
                        className="hidden md:block lg:hidden w-full h-full object-center object-cover"
                        src={product?.image}
                        alt="product"
                      />
                    </div>
                    <div
                      className={
                        "flex flex-shrink-0 transform " +
                        (slide ? "translate-x-full" : "translate-x-0")
                      }
                    >
                      <img
                        className=" lg:block hidden w-full h-full object-center object-cover"
                        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1488039020/yydk9moslaswpur6mrun.png"
                        alt="A girl posing Back"
                      />
                      <img
                        className=" hidden md:block lg:hidden w-full h-full object-center object-cover"
                        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1488039020/yydk9moslaswpur6mrun.png"
                        alt="A girl posing Back"
                      />
                    </div>
                  </div>
                </div>
                <div className=" transition duration-150 absolute bottom-0 w-full h-full flex justify-between items-center px-4">
                  <button
                    onClick={slideToggle}
                    aria-label="previous"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center"
                  >
                    <svg
                      className=""
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="26" cy="26" r="26" fill="white" />
                      <path
                        d="M28.4987 19.333L21.832 25.9997L28.4987 32.6663"
                        stroke="#4B5563"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={slideToggle}
                    aria-label="Next"
                    className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center"
                  >
                    <svg
                      className=""
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="26" cy="26" r="26" fill="white" />
                      <path
                        d="M23.5013 19.333L30.168 25.9997L23.5013 32.6663"
                        stroke="#4B5563"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-8 lg:mt-0 flex justify-start items-start w-full flex-col space-y-6">
              <h2 className=" lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 font-semibold">
                {product?.title}
              </h2>
              <p className="font-normal text-lg leading-6 text-gray-600 mr-4">
                {product?.description}
              </p>
              <div className=" flex flex-column items-center mt-4">
                <p className="font-normal text-lg leading-6 text-gray-600 mr-4">
                  Price: {product?.price}$
                </p>
                <div className="cursor-pointer flex space-x-2 mr-3">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M16.0972 19.25C15.9506 19.2506 15.806 19.216 15.6755 19.1492L11.0005 16.7017L6.32551 19.1492C6.17371 19.229 6.00255 19.2647 5.8315 19.252C5.66045 19.2394 5.49637 19.1791 5.35791 19.0779C5.21945 18.9767 5.11216 18.8386 5.04824 18.6795C4.98433 18.5203 4.96635 18.3464 4.99635 18.1775L5.91301 13.0167L2.13635 9.35003C2.01852 9.23244 1.93493 9.08499 1.89456 8.9235C1.85418 8.762 1.85855 8.59256 1.90718 8.43336C1.96031 8.27044 2.05804 8.12568 2.18929 8.0155C2.32053 7.90532 2.48003 7.83414 2.64968 7.81003L7.87468 7.04919L10.1755 2.34669C10.2506 2.19171 10.3678 2.061 10.5137 1.96955C10.6596 1.8781 10.8283 1.82959 11.0005 1.82959C11.1727 1.82959 11.3414 1.8781 11.4873 1.96955C11.6333 2.061 11.7505 2.19171 11.8255 2.34669L14.1538 7.04003L19.3788 7.80086C19.5485 7.82497 19.708 7.89616 19.8392 8.00634C19.9705 8.11652 20.0682 8.26128 20.1213 8.42419C20.17 8.58339 20.1743 8.75283 20.134 8.91433C20.0936 9.07582 20.01 9.22327 19.8922 9.34086L16.1155 13.0075L17.0322 18.1684C17.0649 18.3402 17.0478 18.5178 16.9828 18.6803C16.9178 18.8427 16.8077 18.9832 16.6655 19.085C16.4995 19.2014 16.2997 19.2594 16.0972 19.25Z"
                        fill="#bbff00"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className=" font-normal text-sm leading-3 hover:text-gray-700 duration-100 cursor-pointer text-gray-500 underline">
                  {product?.rating.rate}
                </p>
              </div>
              <div className="  mt-10"></div>

              <div className="flex flex-col w-full space-y-4 mt-10">
                <button
                  className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:w-96 w-full hover:bg-black text-base font-medium leading-4 bg-gray-800 py-4 text-white"
                  onClick={addProduct}
                >
                  Add to Cart
                </button>
                <button
                  className="border border-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 md:w-96 w-full hover:bg-gray-300 text-base font-medium leading-4 text-gray-800 py-4 bg-white"
                  onClick={addProductToWishlist}
                >
                  Add to Wishlist
                </button>
              </div>
            </div>
            <Link
              to="/"
              className="absolute top-4 right-4  md:top-6 md:right-6 focus:outline-none focus:ring-2  focus:ring-gray-800"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3346 13.3337L2.66797 2.66699M13.3346 2.66699L2.66797 13.3337"
                  stroke="#1F2937"
                  strokeLinecap="square"
                />
              </svg>
            </Link>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
