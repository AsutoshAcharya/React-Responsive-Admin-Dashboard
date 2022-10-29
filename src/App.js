import "./App.css";
import Header from "./components/Header/Header";
import LeftContent from "./components/LeftContent/LeftContent";
import RightContent from "./components/RightContent/RightContent";

function App() {
  return (
    <div className="wrapper">
      <div className="sidebar">Sidebar</div>

      <div className="contents">
        <Header />
        <div className="parent-content">
          <LeftContent />
          <RightContent />
        </div>
      </div>
    </div>
  );
}

export default App;
