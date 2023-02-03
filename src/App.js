import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/header/Navigation";
import Header from "./pages/Header/Header";
import Body from "./pages/Body/Body";
import Footer from "./pages/Footer/Footer";
import Modal from "./components/custom/CustomModal";
import { useDispatch, useSelector } from "react-redux";
import { getInfo } from "./features/modalSlicer";
import { getOnOffModal } from "./features/modalSlicer";

function App() {
  const allInfo = useSelector(getInfo);
  const onOffModal = useSelector(getOnOffModal);

  return (
    <div className="App">
      <Modal open={onOffModal} allInfo={allInfo} />;
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
