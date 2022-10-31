import "./App.css";
import Header from "./components/Header/Header";
import LeftContent from "./components/LeftContent/LeftContent";
import RightContent from "./components/RightContent/RightContent";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="wrapper">
      <Sidebar />

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
