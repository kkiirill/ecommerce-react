import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

export function Header() {
  const state = useSelector((state: any) => state.handleCart);
  return (
    <header className="m-3">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                className="h-14 w-14 my-3 bg-none hover:animate-pulse"
                src="https://cdn-icons-png.flaticon.com/512/4521/4521119.png"
                alt="Workflow"
              />
            </Link>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="p-1 rounded-full text-gray-400 hover:hover:animate-pulse hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-white"
            >
              <img
                src="https://cdn-icons.flaticon.com/png/512/3983/premium/3983887.png?token=exp=1659793706~hmac=bffb3a86992e3d6969cc4f28de60fdbe"
                className="w-10 h-10"
                alt=""
                title="soon"
              />
            </button>

            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-400 focus:ring-white hover:animate-pulse"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-10 w-10"
                    src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                    alt=""
                    title="soon"
                  />
                </button>
              </div>
              <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                hidden
              >
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="/"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hover:animate-bounce">
              <Link to="/cart" className="relative">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5998/5998083.png"
                  className="w-10 h-10"
                  alt=""
                />
                <div className="cart-counter">{state.length}</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
