

import './App.css'
import ColorChanger from './components/ColorChanger'
import Counter from './components/Counter'
import YesNo from './components/YesNo'
import TodoList from './components/TodoList'
import NotesApp from './components/NotesApp'
import SearchFilterApp from './components/SearchFilterApp'
import RoutingApp from './components/RoutingApp'
import ShoppingCart from './components/ShoppingCart'
// import FullCart from './components/FullCart'
function App() {


  return (
    <>
      <div className='min-h-screen w-full max-w-350 mx-auto bg-gray-100 flex flex-wrap justify-center items-center gap-5'>

      <Counter/>
      <YesNo/>
      <ColorChanger/>
      </div>
      <div className='min-h-screen w-full max-w-350 mx-auto bg-gray-200 flex flex-wrap justify-center items-center'>
      <TodoList/>
      </div>
      <div className='min-h-screen w-full max-w-350 mx-auto bg-gray-100 flex flex-wrap justify-center items-center'>
      <NotesApp/>
      </div>
      <div className='min-h-screen w-full max-w-350 mx-auto bg-gray-200 flex flex-wrap justify-center items-center'>
      <SearchFilterApp/>
      </div>
      <div className='min-h-screen w-full max-w-350 mx-auto bg-gray-100 flex flex-wrap justify-center items-center'>
      <RoutingApp/>
      </div>
      <div className='bg-gray-200 max-w-350 mx-auto py-10'>
      <ShoppingCart/>
      </div>
      <div className='bg-gray-200 max-w-350 mx-auto py-10'>
      {/* <FullCart/> */}
      </div>
    </>
  )
}

export default App
