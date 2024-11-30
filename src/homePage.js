import style from './homePage.module.css';
import { BsChatDots } from "react-icons/bs";
import Dr from './images/dr.png';
import Blackheads from './images/blackheads.jpeg';
import Cysts from './images/cysts.jpeg';
import Whiteheads from './images/whiteheads.jpeg';
import Nodules from './images/nodules.jpeg';
import Pustules from './images/pustules.jpeg';
import Papules from './images/papules.jpeg';
import Doctormeeting1 from './images/doctormeeting1.jpeg';
import Doctormeeting2 from './images/doctormeeting2.jpeg';
import Doctormeeting3 from './images/doctormeeting3.jpeg';
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
            <div className={style.chat}>
                <BsChatDots size={20} color='white' />
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
            <div className={style.lightbluecontainer}>
                <div style={{display: 'flex', gap: '50px'}}>
                    <div className={style.leftdiv}>
                        <p>Combining AI and healthcare insights to assist users in their skincare free of cost
                        </p>
                        <button>Read more</button>
                    </div>
                    <div className={style.rightdiv}>
                        <p>Using advanced AI and healthcare expertise, our chatbot
                            delivers personalized recommendations to address unique skin concerns.
                            It empowers users with insights into skincare routines, medications
                            and preventive care tailored to their needs.</p>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <img height={230} src={Doctormeeting1}/>
                    <img height={230} src={Doctormeeting2}/>
                    <img height={230} src={Doctormeeting3}/>
                </div>
            </div>
        </div>
    );
}
