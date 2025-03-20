"use client";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";
import { RootState } from "../redux/store";

export default function Home() {
  const count = useSelector((state: RootState) => (state.counter as { count: number }).count);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-12">Redux Counter</h1>

      <p className="text-3xl mb-10">Count: {count}</p>

      <div className="flex space-x-12">
        <button 
          onClick={() => dispatch(decrement())} 
          className="bg-green-500 px-4 py-2 rounded transition-all duration-300 hover:bg-green-600 hover:scale-120"
        >
          Decrement
        </button>

        <button 
          onClick={() => dispatch(increment())} 
          className="bg-green-500 px-4 py-2 rounded transition-all duration-300 hover:bg-green-600 hover:scale-120"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
