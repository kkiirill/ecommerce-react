import { Data } from "../../../types";
import { Field } from "../../UI/Field";
const sections: string[] = [
  "men's clothing",
  "women's clothing",
  "jewelery",
  "electronics",
];
interface Props {
  search: string;
  setSearch: (e: any) => void;
  searchProducts: Data[];
  products: Data[];
  setProductsFilter: (products: Data[]) => void;
}

function Navbar({
  search,
  setSearch,
  searchProducts,
  setProductsFilter,
  products,
}: Props) {
  const filterSection = (category: string) => {
    const sectionChanges = [...products].filter(
      (product) => product.category === category
    );
    setProductsFilter(sectionChanges);
  };

  return (
    <div className="dark:bg-gray-900">
      <div className="container mx-auto relative">
        <div className="py-4 mx-4 md:mx-6">
          <div className="flex flex-row justify-center items-center border-b border-gray-200 dark:border-gray-700 py-4 mb-4">
            <div className="hidden md:block">
              <ul className="flex items-center space-x-6">
                <li>
                  <button
                    className="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none hover:underline"
                    onClick={() => setProductsFilter(products)}
                  >
                    {" "}
                    All{" "}
                  </button>
                </li>
                <li>
                  <button
                    className="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none hover:underline outline-none"
                    onClick={() => filterSection(sections[0])}
                  >
                    {" "}
                    Men's Clothing{" "}
                  </button>
                </li>
                <li>
                  <button className="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:ring-gray-800 hover:underline"
                  onClick={() => filterSection(sections[1])}>
                    {" "}
                    Women's Clothing{" "}
                  </button>
                </li>
                <li>
                  <button className="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none hover:underline"
                  onClick={() => filterSection(sections[2])}>
                    {" "}
                    Jewelery{" "}
                  </button>
                </li>
                <li>
                  <button className="dark:text-white dark:hover:text-gray-300 text-base text-right text-gray-800 focus:outline-none hover:underline"
                  onClick={() => filterSection(sections[3])}>
                    {" "}
                    Electronic{" "}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <Field search={search} setSearch={setSearch} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
