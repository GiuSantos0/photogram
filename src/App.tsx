import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";

import GlobalStyle from "./styles/global";

import store from "./store";

const App: React.FC = () => (
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <GlobalStyle />
    </Provider>
  </>
);

export default App;
