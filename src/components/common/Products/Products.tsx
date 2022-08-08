import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { getProducts } from "../../../api/api";
import { Data } from "../../../types";
import Navbar from "../Navbar/Navbar";
import Product from "./Product";
import "react-toastify/dist/ReactToastify.css";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState<Data[]>([]);
  const [productsFilter, setProductsFilter] = useState<Data[]>([]);
  const [search, setSearch] = useLocalStorage("search", "");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setProducts(await getProducts());
        setProductsFilter(await getProducts());
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const searchByProducts = [...productsFilter].filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  const loader = () => {
    return (
      <div className="flex items-center justify-center ">
        <div className="w-40 h-40 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  };

  const productsContent = () => {
    return (
      <main>
        <Navbar
          products={products}
          searchProducts={searchByProducts}
          setProductsFilter={setProductsFilter}
          search={search}
          setSearch={setSearch}
        />
        <div className="flex align-center justify-center">
          {searchByProducts.length ? (
            <div className="container flex-wrap gap-16 products">
              {searchByProducts?.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div
              className="flex justify-center items-center p-4 text-sm text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300"
              role="alert"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 inline w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Info</span>
              <div className="font-medium">
                No results for {search}. Try checking your spelling or use more
                general terms
              </div>
            </div>
          )}
        </div>
        <ToastContainer />
      </main>
    );
  };
  return <div>{loading ? loader() : productsContent()}</div>;
}
