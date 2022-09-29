import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import Routes from "./Routes";
function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
      <Routes />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
