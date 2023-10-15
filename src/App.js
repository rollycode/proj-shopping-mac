import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./../src/styles/globals.css";

function App() {
  return (
    <Provider store={appStore}>
      <Navbar />
      <HomePage />
      <Footer />
    </Provider>
  );
}

export default App;
