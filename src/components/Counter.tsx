import { Minus, Plus } from "lucide-react";
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="max-w-120   p-5">
      <div className="bg-white text-center shadow-md rounded-lg p-5">
        <h1 className="text-center text-[30px] font-semibold">Counter</h1>
        <div className="bg-gray-100 rounded-lg my-3 mx-5 h-30 flex items-center justify-center">
          <h1 className="text-[50px] font-bold text-blue-500">{count}</h1>
        </div>
        <div className="flex justify-center items-center flex-wrap gap-3">
          <button
            onClick={() => setCount(count - 1)}
            className="flex items-center gap-1 bg-red-700 text-white px-4.5 py-2.5 rounded-lg hover:bg-red-800"
          >
            <Minus size={18} />
            Decrease
          </button>
          <button
            onClick={() => setCount(0)}
            className=" bg-gray-800 text-white px-4.5 py-2.5 rounded-lg hover:bg-gray-900"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="flex items-center gap-1 bg-green-700 text-white px-4.5 py-2.5 rounded-lg hover:bg-green-800"
          >
            <Plus size={18} />
            Increase
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
