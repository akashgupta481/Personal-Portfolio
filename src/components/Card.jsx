import React from "react";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <>
      {/* First Project: Lungs Cancer Detection */}
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
      >
        <a href="hello">
          <img
            className="rounded-t-lg w-full"
            src="https://i.postimg.cc/QNTkM8xD/temp-Image3-XS7-SL.avif"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="helo">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Lungs Cancer Detection
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            This is a Project which uses a Machine Learning Model to Predict the
            presence of Lung cancer by using CT Scan images of Lungs.This
            project aims to detect lung cancer using a Convolutional Neural
            Network (CNN) model deployed with Flask. 
          </p>
          <a
            href={"https://github.com/akashgupta481/Lungs-Cancer-Detection"}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Know More
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Second Project: Transport Management System */}
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        className="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
      >
        <a href="hello">
          <img
            className="rounded-t-lg w-full"
            src="https://i.postimg.cc/bvwFpG8P/IMG-0911.jpg"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="helo">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Transport Management System
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            It is a Java Application which is implemented by Java Programming
            Language and Designed by Java Swing which can be used by
            Transportation Company to manage their Records and Works.
          </p>
          <a
            href={"https://github.com/akashgupta481/Transport_Management"}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Know More
            <svg
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
