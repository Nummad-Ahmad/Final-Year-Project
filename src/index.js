import ReactDOM from "react-dom";
import App from "./App";
import { Toaster } from 'react-hot-toast';
import HomePage from "./homePage";
ReactDOM.render(
    <div>
    <App>
    </App> 
    <Toaster/>
    </div>,
    document.getElementById("root")
);