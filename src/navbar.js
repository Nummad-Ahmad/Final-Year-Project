import style from './navbar.module.css';
import Logo from './images/logo4.png';
export default function () {
    return (
        <div className={style.topnavbar}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
                <img className={style.navbarlogo} height={50} src={Logo}></img>
                <h3 className={style.h3}>WellnessWiz</h3>
            </span>
            <button className={style.btn}>
                Chat
            </button>
        </div>
    );
}