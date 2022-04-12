import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import About from "./Components/About/About";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Checkout from "./Components/Checkout/Checkout";

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
