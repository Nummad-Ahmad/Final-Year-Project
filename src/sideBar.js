import style from './sideBar.module.css';
import Logo from './images/logo1.png';
// import Dashboard from '@/public/dashboard.png';
// import Dashboard2 from '@/public/dashboard2.png';
// import Events from '@/public/events.png';
// import Events2 from '@/public/events2.png';
// import Meetings from '@/public/meetings.png';
// import Meetings2 from '@/public/meetings2.png';
// import Organizations from '@/public/organizations.png';
// import Organizations2 from '@/public/organizations2.png';
// import Users from '@/public/users.png';
// import Users2 from '@/public/users2.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function SideBar() {
    const navigate = useNavigate();
    const [activeIndex, setSelectedIndex] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('value');
            return saved !== null ? JSON.parse(saved) : 0;
        }
        return 0;
    });
    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(activeIndex));
    }, [activeIndex]);
    function changeOption(value) {
        const newValue = parseInt(value, 10);
        if (!isNaN(newValue)) {
            setSelectedIndex(newValue);
        }

        if (value == 0) {
            navigate('/homepage');
        }
        else if (value == 1) {
            // router.push('/organizations')
        }
        else if (value == 2) {
            // router.push('/events')
        }
        else if (value == 3) {
            // router.push('/meetings')
        }
        else if (value == 4) {
            // router.push('/users')
        }
        else if (value == 5) {
            // router.push('/')
        }
    }
    return (
        <div className={style.sideBar}>
            <img src={Logo} alt='' height={100} width={100}></img>
            <div className={style.optionsContainer}>
                <div className={`${style.option} ${activeIndex == 0 ? style.active : ''}`} onClick={() => changeOption(0)}>
                    <p className=''>Icon</p>
                    <p>Name</p>
                </div>
                <div className={`${style.option} ${activeIndex == 1 ? style.active : ''}`} onClick={() => changeOption(1)}>
                    <p className=''>Icon</p>
                    <p>Name</p>
                </div>
                <div className={`${style.option} ${activeIndex == 2 ? style.active : ''}`} onClick={() => changeOption(2)}>
                    <p className=''>Icon</p>
                    <p>Name</p>
                </div>
                <div className={`${style.option} ${activeIndex == 3 ? style.active : ''}`} onClick={() => changeOption(3)}>
                    <p className=''>Icon</p>
                    <p>Name</p>
                </div>
            </div>
        </div>
    );
}