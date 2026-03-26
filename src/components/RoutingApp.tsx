import {  Home, Info, Mail,} from "lucide-react";

function HomePage (){
  return (
    <div className="bg-white min-h-120 shadow-md border border-gray-200 flex items-center justify-center">
          <div className="flex flex-col items-center gap-5">
            <Home size={50} className="text-blue-600" />
            <p className="text-3xl font-bold ">Home Page</p>
          </div>
        </div>
  )
}
function AboutPage(){
  return (
    <div className="bg-white min-h-120 shadow-md border border-gray-200 flex items-center justify-center">
          <div className="flex flex-col items-center gap-5">
            <Info size={50} className="text-green-600" />
            <p className="text-3xl font-bold ">About Page</p>
          </div>
        </div>
  )
}
function ContactPage(){
  return (
    <div className="bg-white min-h-120 shadow-md border border-gray-200 flex items-center justify-center">
          <div className="flex flex-col items-center gap-5">
            <Mail size={50} className="text-purple-600" />
            <p className="text-3xl font-bold ">Contact Page</p>
          </div>
        </div>
  )
}



function RoutingApp() {
  return (
    <div className="max-w-4xl w-full p-8 ">
      <div className="bg-white shadow-md p-12 rounded-md ">
        <h1 className="text-2xl font-bold text-center">Routing</h1>
        <div className="flex text-center  border-b border-gray-300 mt-5">
          <div className="flex-1 flex justify-center items-center gap-2 bg-blue-600 text-white font-semibold text-2xl py-3 rounded-tl-lg">
            <Home />
            <span>Home</span>
          </div>
          <div className="flex-1 flex justify-center items-center gap-2 bg-gray-100 text-gray-700 font-semibold text-2xl py-3">
            <Info />
            <span>About</span>
          </div>
          <div className="flex-1 flex justify-center items-center gap-2 bg-gray-100 text-gray-700 font-semibold text-2xl py-3 rounded-tr-lg">
            <Mail />
            <span>Contact</span>
          </div>
        </div>
        
        <HomePage/>
      </div>
    </div>
  );
}

export default RoutingApp;
