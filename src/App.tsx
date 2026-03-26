

import './App.css'
import ColorChanger from './components/ColorChanger'
import Counter from './components/Counter'
import YesNo from './components/YesNo'
import TodoList from './components/TodoList'
import Notes from './components/Notes'
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
      <Notes/>
      </div>
    </>
  )
}

export default App
