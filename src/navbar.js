import style from './navbar.module.css';
import Logo from './images/logo4.png';
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { VscTools } from "react-icons/vsc";
import { MdOutlineLightbulb } from "react-icons/md";
import { useState } from 'react';
export default function () {
    const [clicked, setClicked] = useState(false);
    return (
        <div className={style.topnavbar}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
                <img className={style.navbarlogo} height={50} src={Logo}></img>
                <h3 className={style.h3}>WellnessWiz</h3>
            </span>
            <div className={style.btncontainer}>
                <button className={style.btn}>
                    About
                </button>
                <button className={style.btn}>
                    Services
                </button>
                <button className={style.btn}>
                    How it works
                </button>
                <button className={style.btn}>
                    FAQs
                </button>
                <button className={style.chatbtn}>
                    Chat
                </button>
            </div>
            <div className={style.menu}>
                <div onClick={() => { setClicked(true) }}>
                    <MdMenu color='white' />
                </div>
                {
                    clicked &&
                    <div className={style.sidemenu}>
                        <div onClick={() => { setClicked(false) }}>
                            <IoMdClose size={20} color='black' />
                        </div>
                        <ul>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <IoIosInformationCircleOutline size={20} color='black' />
                                <li><a>About</a></li>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <VscTools size={20} color='black' />
                                <li><a>Services</a></li>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <MdOutlineLightbulb size={20} color='black' />
                                <li><a>How it works</a></li>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <MdOutlineLightbulb size={20} color='black' />
                                <li><a>How it works</a></li>
                            </div>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
}
