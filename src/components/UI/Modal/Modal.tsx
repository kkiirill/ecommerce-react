import React, { useState } from "react";

export default function Modal() {
  const [show, setshow_modal_XII] = useState(true);

  return (
    <>
      <div className="py-12 px-4 ">
        <div
          className={`${
            show ? "hidden" : "absolute"
          } container mx-auto justify-center items-center px-4 md:px-10 py-20`}
        >
          <button
            onClick={() => setshow_modal_XII(true)}
            className="bg-white text-gray-800 py-5 px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded"
          >
            Sale
          </button>
        </div>
        <div
          className={`${
            show ? "flex" : "hidden"
          } lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] justify-center mx-auto bg-[#4C4C4C]  md:px-6 px-4  lg:py-24 md:py-12 py-9 relative`}
        >
          <div className="lg:px-5 md:px-6 px-4 py-5">
            <div className="md:flex block justify-center">
              <div className="bg-white flex justify-end items-center h-[50px] px-4 w-full md:hidden">
                <svg
                  onClick={() => setshow_modal_XII(false)}
                  className="md:hidden block cursor-pointer z-10"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L10.9393 12L6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12 13.0607L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.0607 12L17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967Z"
                    fill="#1F2937"
                  />
                </svg>
              </div>
              <div className="bg-gray-800 text-white text-center flex flex-col justify-center items-center lg:px-[66px] md:px-[50px] lg:max-w-[405px] max-w-[343px] w-full md:py-0 py-32">
                <p>Summer Sale 2022</p>
                <p className="lg:text-4xl md:text-3xl text-3xl pt-4 font-semibold">
                  Avail Flat 40%!!
                </p>
                <p className="text-sm pt-4">It’s an “Add to Cart” Kinda Day!</p>
              </div>
              <div className="lg:max-w-[373px] md:max-w-[696px] w-full bg-white lg:px-8 md:px-4 px-4 pt-5 md:pb-6 pb-4 relative">
                <svg
                  onClick={() => setshow_modal_XII(false)}
                  className="md:block hidden cursor-pointer right-4 top-4 absolute"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L10.9393 12L6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12 13.0607L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.0607 12L17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967Z"
                    fill="#1F2937"
                  />
                </svg>
                <p className="text-2xl text-gray-800 font-semibold text-center pt-16">
                  Enter Your Email Below To Unlock
                </p>
                <p className="text-center text-gray-600 pt-4">
                  Where Should We Send Your 30% Off?
                </p>
                <div className="text-center pt-8 w-full">
                  <input
                    type="Email"
                    placeholder="Enter email here"
                    className="border border-gray-200 placeholder:text-gray-600 focus:outline-none lg:max-w-[405px] w-full px-4 py-3"
                  />
                </div>
                <div className="text-center pt-4 w-full">
                  <button className="bg-gray-800 font-medium text-white lg:max-w-[406px] w-full py-3 hover:bg-gray-700 duration-200 md:mt-0 mt-4">
                    GET MY $10 OFF
                  </button>
                </div>
                <p className="text-center text-gray-800 pt-6 font-medium text-lg hover:border-b border-gray-800 w-[95px] h-[50px] mx-auto decoration-gray-800 cursor-pointer">
                  No, Thanks
                </p>
                <p className="text-gray-600 text-center lg:pt-12 md:pt-10 pt-12">
                <span role="img" aria-label="money-mouth face" className="react-emojis">🤑</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}