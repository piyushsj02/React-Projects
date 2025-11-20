import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {



  return (
    <Provider store={store}>
      <h1 className='bg-gray-800 rounded border border-gray-700 text-white text-5xl font-bold hover:underline py-6'>
        Redux Toolkit
      </h1>

      <AddTodo/>
      <Todos/>
    </Provider>
  )
}

export default App
