import React, { useState, useRef } from 'react';
import {useDispatch} from 'react-redux'
import { setDocumentObject, setFeesObject, setHomeObject, setProcessObject} from '../store/slices/combinedSlice';

function Input({placeholder, target}) {
  const [userInput, setUserInput] = useState("");

  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/post/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({userInput})
      });
      inputRef.current.value = "";
      const data = await res.json();
      if (target == 'Home') {
        dispatch(
          setHomeObject({ input: userInput, output: data.message.content })
        );
      }
      if (target == 'Process') {
        dispatch(
          setProcessObject({ input: userInput, output: data.message.content })
        );
      }
      if (target == 'Documents') {
        dispatch(
          setDocumentObject({ input: userInput, output: data.message.content })
        );
      }
      if (target == 'Fees') {
        dispatch(
          setFeesObject({ input: userInput, output: data.message.content })
        );
      }
      if (target == 'Handbook') {
        dispatch(
          setHandbookObject({ input: userInput, output: data.message.content })
        );
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="fixed bottom-0 flex justify-center w-full bg-white h-[120px] items-center pb-5">
      <form
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder={placeholder}
          className="w-[330px] py-2 lg:px-5 px-2 md:px-3.5 text-[16.5px] border-purple-700 border-solid border-[3.5px] md:text-lg lg:text-xl outline-none md:w-[600px] lg:w-[800px] h-[60px] text-purple-700 focus:ring-purple-300 focus:ring-4"
          onChange={handleChange}
          ref={inputRef}
        />
      </form>
    </div>
  );
}

export default Input
