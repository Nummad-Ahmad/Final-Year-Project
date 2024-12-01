import ReactDOM from "react-dom";
import App from "./components/App";
import { Toaster } from 'react-hot-toast';
ReactDOM.render(
    <div>
    <App>
    </App> 
    <Toaster/>
    </div>,
    document.getElementById("root")
);