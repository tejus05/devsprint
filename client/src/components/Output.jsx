import React from "react";
import { useSelector } from "react-redux";
import HTMLReactParser from "html-react-parser"; // Import html-react-parser

function Output({ target }) {
  const {
    homeObject,
    documentObject,
    processObject,
    feesObject,
    handbookObject,
  } = useSelector((state) => state.combinedReducer);

  let selectedObject = [];

  // Determine the selected object based on the target prop
  switch (target) {
    case "Home":
      selectedObject = homeObject;
      break;
    case "Documents":
      selectedObject = documentObject;
      break;
    case "Process":
      selectedObject = processObject;
      break;
    case "Fees":
      selectedObject = feesObject;
      break;
    case "Handbook":
      selectedObject = handbookObject;
      break;
    default:
      selectedObject = [];
      break;
  }

  return selectedObject.length > 1 ? (
    selectedObject.slice(1).map((res, index) => (
      <div key={index} className="mt-7 w-full flex justify-center">
        <div className="max-w-[330px] lg:max-w-4xl md:max-w-xl w-full border-gray-500 border-4 border-divp-4 px-5 bg-black/5 py-3">
          <p className="text-gray-700 italic font-bold pb-2">Q. {res.input}</p>
          {/* Use html-react-parser to render HTML content */}
          <div>{HTMLReactParser(res.output)}</div>
        </div>
      </div>
    ))
  ) : (
    <p>No input</p>
  );
}

export default Output;
