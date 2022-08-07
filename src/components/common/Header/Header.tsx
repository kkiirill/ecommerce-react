import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./Header.css";

interface Props {
  user: any;
}

export function Header({ user }: Props) {
  const state = useSelector((state: any) => state.handleCart);
  const [menuUser, setMenuUser] = useState<boolean>(false);

  const handleMenuUser = () => {
    !menuUser ? setMenuUser(true) : setMenuUser(false);
  };

  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };

  return (
    <header className="m-3 h-full">
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
            {user ? (
              <div className="pr-8">
                <ul className="list flex justify-between items-center">
                  <li className="listItem">
                    <img alt="" className="avatar" src={user?.photos[0].value} />
                  </li>
                  <li className="listItem pr-7">{user?.displayName}</li>
                  <li className="listItem cursor-pointer" onClick={logout}>
                    Logout
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

            <button
              type="button"
              className="ml-4 rounded-full text-gray-400 hover:hover:animate-pulse hover:scale-105 focus:outline-none"
            >
              <img
                src="https://cdn-icons.flaticon.com/png/512/3287/premium/3287067.png?token=exp=1659906487~hmac=398ad6ff6f208586a7baacb71f9d48be"
                className="w-10 h-10"
                alt=""
              />
            </button>
            <div className="pl-3 hover:animate-bounce">
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
