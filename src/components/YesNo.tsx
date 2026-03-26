import { Shuffle } from "lucide-react";
import { useState } from "react";

function result() {
  const [result, setResult] = useState<string | null>(null)

  function generateResult (){
    let randomValue = Math.random() > 0.5 ? "Yes" : "No"
    setResult(randomValue)
  }

  return (
    <div className="max-w-120 bg-white text-center shadow-md rounded-lg  p-5">
      <div className=" p-5">
        <h1 className="text-center text-[25px] font-semibold">
          Random Yes/No Generator
        </h1>
        {result && (
          <div className={`rounded-lg my-3 mx-5 h-30 flex items-center justify-center ${result === "Yes" ? "bg-green-100 border-4 border-green-500" : "bg-red-100 border-4 border-red-500"}`}>
            <h1 className={`text-[50px] font-bold ${result === "Yes" ? "text-green-500" : "text-red-600"}`}>{result}</h1>
        </div>
        )}
        {!result && (
          <div className="bg-gray-100 rounded-lg my-3 mx-5 h-30 flex items-center justify-center">
            <h1 className=" text-[20px] font-semibold text-gray-500">Click to Generate</h1>
        </div>
        )}
        <div className="flex  justify-center">
          <button
          onClick={generateResult}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700">
            <Shuffle size={18} />
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}

export default result;
