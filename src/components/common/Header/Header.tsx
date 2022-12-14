import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";
import { User } from "../../../types";
import { memo } from "react";

interface Props {
  user?: User | null;
}

export const Header: React.FC<Props> = memo(({ user }) => {
  const state = useSelector((state: any) => state.handleCart);
  const stateWishlist = useSelector((state: any) => state.handleWishlist);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <header className="bg-gray-200 opacity-95 h-full sticky top-0 z-50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-3">
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
            {user ? (
              <div className="pr-8">
                <ul className="list flex justify-between items-center">
                  <li className="listItem">
                    <img
                      alt=""
                      className="w-10 h-10 mr-2 rounded-full"
                      src={user?.photo}
                    />
                  </li>
                  <li className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600 pr-7 animate-pulse">
                    {user?.name}
                  </li>
                  <li className="listItem cursor-pointer" onClick={logout}>
                    <img
                      alt=""
                      className="w-10 h-10 mr-2 rounded hover:animate-pulse"
                      src="https://cdn-icons-png.flaticon.com/512/1053/1053210.png"
                      title="logout"
                    />
                  </li>
                </ul>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex text-sm rounded-full focus:outline-none hover:animate-pulse"
              >
                <img
                  className="h-10 w-10"
                  src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                  alt=""
                />
              </Link>
            )}

            <Link
              to="/wishlist"
              className="relative ml-4 rounded-full text-gray-400 hover:hover:animate-pulse hover:scale-105 focus:outline-none"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/7720/7720865.png"
                className="w-10 h-10"
                alt=""
              />
              <div className="wishlist-counter">{stateWishlist.length}</div>
            </Link>
            <div
              className={
                "pl-3 hover:animate-bounce " +
                (state.length && "animate-bounce")
              }
            >
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
});
