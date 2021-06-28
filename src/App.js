import { Provider } from "react-redux"
import "./App.css"
import CakeContainer from "./components/CakeContainer"
import HooksCakeContainer from "./components/HooksCakeContainer"
import IceCreamContainer from "./components/IceCreamContainer"
import store from "./reduxItems/store"

function App() {
   return (
      <Provider store={store}>
         <div className="App">
            <header className="App-header">
               <IceCreamContainer />
               <CakeContainer />
               <HooksCakeContainer />
            </header>
         </div>
      </Provider>
   )
}

export default App
