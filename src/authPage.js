import { useState } from 'react';
import style from './auth.module.css';
import auth from './images/auth.png';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

export default function Auth() {
    const [isLogin, setLogin] = useState(true);
    const [forgotPassword, setForgotPassword] = useState(false);
    const navigate = useNavigate();
    function handleClick() {
        // navigate('/homepage');
        toast.error('This feature is under development');
    }
    return (
        <div className={style.container}>
            <div className={style.textContainer}>
                <div className={style.formDiv}>
                    {
                        isLogin &&
                            !forgotPassword ?
                            <h2>Login</h2> :
                            !isLogin &&
                                !forgotPassword ?
                                <h2>Sign up</h2> :
                                <h2>Change password</h2>
                    }
                    {
                        !forgotPassword &&
                        <div className={style.togglebuttonDiv}>
                            <button onClick={() => setLogin(true)} className={isLogin ? style.activeButton : style.toggleButtons}>
                                Login
                            </button>
                            <button onClick={() => setLogin(false)} className={!isLogin ? style.activeButton : style.toggleButtons}>
                                Sign up
                            </button>
                        </div>
                    }
                    <input placeholder='Enter email' />
                    <input placeholder='Enter password' />
                    {
                        isLogin &&
                            !forgotPassword ?
                            <p className={style.blueText} onClick={() => setForgotPassword(!forgotPassword)}>Forgot password</p> :
                            !isLogin ? null :
                                <p className={style.blueText} onClick={() => setForgotPassword(!forgotPassword)}>Back to login</p>
                    }
                    {
                        isLogin &&
                            !forgotPassword ?
                            <buton onClick={handleClick} className={style.button}>
                                Login
                            </buton> :
                            !isLogin && 
                                !forgotPassword ?
                                <buton onClick={handleClick} className={style.button}>
                                    Sign up
                                </buton> :
                                <buton className={style.button}>
                                    Change password
                                </buton>
                    }
                </div>
            </div>
            <div className={style.imageContainer}>
                <img src={auth} alt=''></img>
            </div>
        </div>
    );
}