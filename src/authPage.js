import { useEffect, useState } from 'react';
import style from './auth.module.css';
import auth from './images/dr.png';
import logo from './images/logo4.png';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setLogin] = useState(true);
    const [forgotPassword, setForgotPassword] = useState(false);
    const navigate = useNavigate();
    function handleClick() {
        toast.error('This feature is under development');
        console.log('email', email);
        console.log('password', password);
        // if(!email){
        //     toast.error('Email is required');
        // }else if(!email.endsWith('@gmail.com')){
        //     toast.error('invalid email');
        // }else if(!password){
        //     toast.error('password is required');
        // }else if(password.length < 8){
        //     toast.error('minimum password length is 8');
        // }else{
            // navigate('/homepage');
        // }
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    function handlePassword(event) {
        setPassword(event.target.value);
    }
    return (
        <div className={style.container}>
            <div className={style.textContainer}>
                <div className={style.formDiv}>
                <img src={logo} height={150} ></img>
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
                            <button onClick={() => {setLogin(true)}} className={isLogin ? style.activeButton : style.toggleButtons}>
                                Login
                            </button>
                            <button onClick={() => setLogin(false)} className={!isLogin ? style.activeButton : style.toggleButtons}>
                                Sign up
                            </button>
                        </div>
                    }
                    <input onChange={handleEmail} placeholder='Enter email' />
                    <input onChange={handlePassword} type='password' placeholder='Enter password' />
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
                <img className={style.img} src={auth} alt='' height={500}></img>
            </div>
        </div>
    );
}
