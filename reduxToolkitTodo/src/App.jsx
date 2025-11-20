import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {



  return (
    <Provider store={store}>
      <h1>Redux Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </Provider>
  )
}

export default App
