import { QuestionMarkCircleIcon, XIcon } from "@heroicons/react/solid";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MyModal } from "../../components/UI/Modal/MyModal";
import { addCart, removeCart, removeProduct } from "../../store/actions";
import { Data } from "../../types";

export function ShoppingCart() {
  const state: Data[] = useSelector((state: any) => state.handleCart);
  const dispatch = useDispatch();

  const handleAddProduct = (product: Data) => {
    dispatch(addCart(product));
  };

  const handleRemoveProductAmount = (product: Data) => {
    dispatch(removeCart(product));
  };

  const handleRemoveProduct = (product: Data) => {
    dispatch(removeProduct(product));
  };

  const shopingCartIsEmpty = () => {
    return (
      <div className="max-w-2xl mx-auto mt-4 pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 bg-white">
        <div className="flex text-2xl items-center justify-center">
          Ooopss... your cart is empty! Please choose any product.
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


  const copyState = [...state]
    .map((item: any) => item.total = +item.price * +item.amt)

  const orderSubtotal: number = copyState.reduce((sum, item) => sum + item, 0);

  const orderTax: number = orderSubtotal * 0.1;
  const delivery = 5;
  const orderTotal = orderSubtotal + orderTax + delivery;

  return (
    <>
      {state.length <= 0 ? (
        shopingCartIsEmpty()
      ) : (
        <div className="bg-white">
          <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Shopping Cart
            </h1>
            <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
              <section aria-labelledby="cart-heading" className="lg:col-span-7">
                <h2 id="cart-heading" className="sr-only">
                  Items in your shopping cart
                </h2>
                <ul className="border-t border-b border-gray-200 divide-y divide-gray-200">
                  {state.map((product: Data, productIdx: number) => (
                    <li key={product.id} className="flex py-6 sm:py-10">
                      <div className="flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                        />
                      </div>

                      <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div>
                            <div className="flex justify-between">
                              <h3 className="text-sm">
                                <span className="font-medium text-gray-700 hover:text-gray-800">
                                  {product.title.substring(0, 11)}
                                </span>
                              </h3>
                            </div>
                            <p className="mt-1 text-sm font-medium text-gray-900">
                              ${product.price}
                            </p>
                          </div>
                          <div className="flex items-center justify-center">
                            <button
                              type="button"
                              onClick={() => handleRemoveProductAmount(product)}
                              className="pr-1 "
                            >
                              <AiFillMinusCircle />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleAddProduct(product)}
                              className="pr-1"
                            >
                              <AiFillPlusCircle />
                            </button>
                            <p className="lead fw-bold pr-1">
                              {product.amt} X ${product.price} =
                            </p>

                            <p>${product.total.toFixed(2)}</p>
                          </div>

                          <div className="mt-4 sm:mt-0 sm:pr-9">
                            <div className="absolute bottom-10 right-0">
                              <button
                                type="button"
                                className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
                                onClick={() => handleRemoveProduct(product)}
                              >
                                <span className="sr-only">Remove</span>
                                <XIcon className="h-5 w-5" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              <section
                aria-labelledby="summary-heading"
                className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5"
              >
                <h2
                  id="summary-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Order summary
                </h2>

                <dl className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <dt className="text-sm text-gray-600">Subtotal</dt>
                    <div className="text-sm font-medium text-gray-900">
                      ${orderSubtotal.toFixed(2)}
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="flex items-center text-sm text-gray-600">
                      <span>Shipping estimate</span>
                      <a
                        href="/"
                        className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">
                          Learn more about how shipping is calculated
                        </span>
                        <QuestionMarkCircleIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </a>
                    </dt>
                    <dd className="text-sm font-medium text-gray-900">
                      ${delivery.toFixed(2)}
                    </dd>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <div className="flex text-sm text-gray-600">
                      <span>Tax estimate</span>
                      <a
                        href="/"
                        className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">
                          Learn more about how tax is calculated
                        </span>
                        <QuestionMarkCircleIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      ${orderTax.toFixed(2)}
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">
                      Order total
                    </dt>
                    <div className="text-base font-medium text-gray-900">
                      ${orderTotal.toFixed(2)}
                    </div>
                  </div>
                </dl>
                <div className="mt-6">
                  <MyModal />
                </div>
              </section>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
