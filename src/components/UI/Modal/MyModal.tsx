import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useWindowSize } from "../../../hooks/UseWindowSize";
import Confetti from "react-confetti";
import { Data } from "../../../types";

export function MyModal() {
  const state = useSelector((state: any) => state.handleCart);
  const clearState: any = [...state].splice(0, state.length);
  const [showModal, setShowModal] = useState(false);
  const { width, height } = useWindowSize();

  const closeModal = () => {
    setShowModal(false);
    clearState()
  };
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:animate-bounce"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Buy
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-2xl leading-relaxed">
                    Thank you for purchasing from us<span role="img">🤑</span>
                  </p>
                </div>
                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                  <Link
                    className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:scale-105"
                    type="button"
                    onClick={closeModal}
                    to={"/"}
                  >
                    Go to shoopppinggg
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Confetti width={width} height={height} />
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
