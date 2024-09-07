import style from './homePage.module.css';
import SideBar from './sideBar';
export default function HomePage(){
    return (
        <div className={style.homepage}>
            <SideBar />
        </div>
    );
}