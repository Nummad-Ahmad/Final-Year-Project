import style from './homePage.module.css';
// import SideBar from './sideBar';
import Dr from './images/dr.png';
import Blackheads from './images/blackheads.jpeg';
import Cysts from './images/cysts.jpeg';
import Whiteheads from './images/whiteheads.jpeg';
import Nodules from './images/nodules.jpeg';
import Pustules from './images/pustules.jpeg';
import Papules from './images/papules.jpeg';

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
            <p className={style.treatments}>
                Treatments we offer
            </p>
            <div className={style.diseasecontainer}>
                <div className={style.diseasebox}>
                    <img className={style.diseaseimg} src={Blackheads} />
                    <span className={style.diseaseboxtext}>Blackheads</span>
                </div>
                <div className={style.diseasebox}>
                    <img className={style.diseaseimg} src={Cysts} />
                    <span className={style.diseaseboxtext}>Cysts</span>
                </div>
                <div className={style.diseasebox}>
                    <img className={style.diseaseimg} src={Whiteheads} />
                    <span className={style.diseaseboxtext}>Whiteheads</span>
                </div>
                <div className={style.diseasebox}>
                    <img className={style.diseaseimg} src={Nodules} />
                    <span className={style.diseaseboxtext}>Nodules</span>
                </div>
                <div className={style.diseasebox}>
                    <img className={style.diseaseimg} src={Pustules} />
                    <span className={style.diseaseboxtext}>Pustules</span>
                </div>
                <div className={style.diseasebox}>
                    <img className={style.diseaseimg} src={Papules} />
                    <span className={style.diseaseboxtext}>Papules</span>
                </div>
            </div>
        </div>
    );
}
