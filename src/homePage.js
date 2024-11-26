import style from './homePage.module.css';
import SideBar from './sideBar';
import Dr from './images/dr.png';

import Navbar from './navbar';
export default function HomePage() {
    return (
        <div className={style.homepage}>
            {/* <SideBar /> */}
            <Navbar />
            <div className={style.imgandtext}>
                <div className={style.mototaglinediv}>
                    <p className={style.text}>Your Personalized Companion for Smarter Acne Detection</p>
                    <p className={style.tagline} >Personalized solutions for every skin type, backed by advanced detection and prevention tools</p>
                </div>
                <img className={style.img} src={Dr}></img>
            </div>
        </div>
    );
}
