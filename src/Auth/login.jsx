import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextApi/AuthContext';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

const defaultForm = {
    email: '',
    password: ''
}

function Login() {
    const {Login} = useContext(AuthContext);
    const [formField, setFormField] = useState(defaultForm);
    const {email, password} = formField;
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    // const resetForm = () => {
    //     setFormField(defaultForm)
    // }

    const handleVisible = ()=> {
        setIsVisible(!isVisible)
    };
    const handleChange = (e)=> {
        const {name, value} = e.target;
        setFormField({...formField, [name] : value})
    }; 

    const handleSubmit = (e)=> {
        e.preventDefault();
        Login();
        setFormField(defaultForm)
        // resetForm()
        navigate('./menu')
    };



  return (
    <div className='form-container'>
        <h3>Login To Book Your Table</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" name='email' value={email} placeholder='Enter Your Email' onChange={ handleChange} required />
            <span>
            <input type={ isVisible ? 'text' : 'password' } name='password' value={password} placeholder='Enter Your Password' onChange={ handleChange} required />
            <div className="wrap" onClick={handleVisible}>
                { isVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye /> }
            </div>
            </span>
            <button>Sumit</button>
            <p onClick={()=> navigate('/signup')}>You don't have an accout yet? Signup</p>
        </form>
    </div>
  )
}

export default Login;
