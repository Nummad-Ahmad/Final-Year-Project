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
import { MdAccessTime } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { IoAccessibility } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";

export default function HomePage() {
    return (
        <div className={style.homepage}>
            {/* <SideBar /> */}
            <Navbar />
            <div className={style.imgandtext}>
                <div className={style.mototaglinediv}>
                    <p className={style.text}>Your Personalized Companion for Smarter Acne Detection</p>
                    <p className={style.tagline} >Personalized solutions for every skin type, backed
                        by advanced detection and prevention tools. Using advanced AI and healthcare expertise,
                        our chatbot delivers personalized recommendations to address unique skin concerns. Detect
                        your acne type to get started.
                    </p>
                </div>
                <img className={style.img} src={Dr}></img>
            </div>
            <div className={style.chat}>
                <BsChatDots size={20} color='white' />
            </div>
            <p className={style.treatments}>
                Types of Acne
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
                <div className={style.leftrightcontainer}>
                    <div className={style.leftdiv}>
                        <p>Combining AI and healthcare insights to assist users in their skincare free of cost
                        </p>
                    </div>
                    <div className={style.rightdiv}>
                        <p>Using advanced AI and healthcare expertise, our chatbot
                            delivers personalized recommendations to address unique skin concerns.</p>
                        <button>Read more</button>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <img className={style.meetingimgs} src={Doctormeeting1} />
                    <img className={style.meetingimgs} src={Doctormeeting2} />
                    <img className={style.meetingimgs} src={Doctormeeting3} />
                </div>
            </div>
            <p className={style.whychooseus}>
                Why choose us?
            </p>
            <div className={style.advantagesdiv}>
            <div className={style.advantage} style={{ background: 'rgb(212, 232, 255)' }}>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <div className={style.icondiv}>
                            <MdAccessTime size={20} color='rgb(212, 232, 255)' />
                        </div>
                        <p style={{ fontWeight: "bold", fontSize: '18px' }}>24/7 Availability</p>
                    </div>
                    <div className={style.whiteline}></div>
                    <p>Available at any time, allowing users to get help without waiting for clinic hours.</p>
                </div>
                <div className={style.advantage} style={{ background: 'rgb(212, 232, 255)' }}>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <div className={style.icondiv}>
                            <FaSackDollar size={20} color='rgb(212, 232, 255)' />
                        </div>
                        <p style={{ fontWeight: "bold", fontSize: '18px' }}>Cost affective</p>
                    </div>
                    <div className={style.whiteline}></div>
                    <p>Eliminates transportation, hospital and consultation charges.</p>
                </div>
                <div className={style.advantage} style={{ background: 'rgb(212, 232, 255)' }}>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <div className={style.icondiv}>
                            <IoAccessibility size={20} color='rgb(212, 232, 255)' />
                        </div>
                        <p style={{ fontWeight: "bold", fontSize: '18px' }}>Accessibility</p>
                    </div>
                    <div className={style.whiteline}></div>
                    <p>Access healthcare advice from homes without visiting hospital.</p>
                </div>
                <div className={style.advantagehidden} style={{ background: 'rgb(212, 232, 255)' }}>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <div className={style.icondiv}>
                            <GrSecure size={20} color='rgb(212, 232, 255)' />
                        </div>
                        <p style={{ fontWeight: "bold", fontSize: '18px' }}>Privacy</p>
                    </div>
                    <div className={style.whiteline}></div>
                    <p>Tailored to individual concerns while maintaining user anonymity.</p>
                </div>
            </div>
        </div>
    );
}
