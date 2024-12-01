import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from './authPage';
import HomePage from "./homePage";
import SideBar from "./sideBar";
export default function App() {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Auth />} />
                    <Route path="/homepage" element={<HomePage/>} />
                </Routes>
            </Router>
    );
}