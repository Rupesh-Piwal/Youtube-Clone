import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
        {/* 
      - Head
      - Body
       - Sidebar
        - Menuitems
       - MainContainer
        - ButtonsList
        - VideoContainer
         - VideoCard 
      
      */}
      </div>
    </Provider>
  );
}

export default App;
