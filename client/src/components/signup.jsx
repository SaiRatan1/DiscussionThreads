import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'



const Signup = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({ name: "", gender: "", dob: "", year: "", branch: "", section: "", email: "", password: "", confirmpassword: "", });

    const handleSubmit = async (e) => {
        let res;
        e.preventDefault();
        const { name,gender,dob,year,branch,section ,email, password } = user;
        console.log(user);
        res = await fetch('/api/signuproute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                { name,gender,dob,year,branch,section ,email, password }
            )
        })

        const data = await res.json();
        if (res.status === 400) {
            alert('Invalid Credentials')
        }
        else {
            alert('Signin Successfull')
            navigate('/');
        }
    }


    const validate = (e) => {
        if (validatesignup()) {
            handleSubmit(e);
        }
        else {
            e.preventDefault();
        }
    };

    const seterror = (f) => {
        let temp = document.getElementsByClassName("errorf")[0]

        temp.style.color = "red";
        if (f == 0) {
            temp.innerHTML = "*Passwords do not match!";
        }
        if (f == 1) {
            temp.innerHTML = "*Password is too short!";
        }
        if (f == 2) {
            temp.innerHTML = "*Not a valid email address!";
        }
    }

    const validatesignup = () => {
        let flag = true;

        let temp = document.getElementsByClassName("errorf")[0]
        temp.innerHTML = "";
        const emailRegex = /^[\w-]+@student\.nitw\.ac\.in$/;

        // Test if the input matches the regex pattern
        const isValidFormat = emailRegex.test(user.email);
        if (!isValidFormat) {
            flag = false;
            seterror(2);
        }

        // let pass = document.forms['signupform']["fpass2"].value;
        // let cpass = document.forms['signupform']["fpass3"].value;
        if (user.confirmpassword != user.password) {
            flag = false;
            seterror(0);
        }
        else if (user.password.length < 4) {
            flag = false;
            seterror(1);
        }
        return flag
    }


    return (
        <div className='flex flex-col h-screen'>
            {/* <Navbar /> */}
            <div className="c2 flex-grow flex flex-col items-center justify-center h-screen gap-3  bg-gray-100">
                <div className='flex flex-col justify-center items-center w-[400px] bg-white'>
                    <p className='mb-5 text-xl font-semibold pt-6'>Sign Up For Amazing Features</p>
                    <div className='flex flex-col items-center justify-center gap-4  w-full  p-6  '>
                        <input type="text" className="name border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" placeholder="Name" required
                            value={user.name} onChange={(e) => { setUser({ ...user, name: e.target.value }) }} />
                        <input type="text" className="name border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" placeholder="Gender (M/F/G/NB/T)" required
                            value={user.gender} onChange={(e) => { setUser({ ...user, gender: e.target.value }) }} />
                        <input type="date" className="name border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" placeholder="Date Of Birth" required
                            value={user.dob ? user.dob.toISOString().split('T')[0] : ''} onChange={(e) => {  const selectedDate = new Date(e.target.value); setUser({ ...user, dob: selectedDate }) }} />
                        <input type="text" className="name border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" placeholder="Year (1/2/3/4)" required
                            value={user.year} onChange={(e) => { setUser({ ...user, year: e.target.value }) }} />
                        <input type="text" className="name border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" placeholder="Branch" required
                            value={user.branch} onChange={(e) => { setUser({ ...user, branch: e.target.value }) }} />
                        <input type="text" className="name border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" placeholder="Section" required
                            value={user.section} onChange={(e) => { setUser({ ...user, section: e.target.value }) }} />
                        <input type="text" className="name border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" placeholder="Email" required
                            value={user.email} onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />

                        <input type="password" className="pass border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" name="fpass2" placeholder="Password" required
                            value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />
                        <input type="password" className="pass border-2 border-neutral-400 w-full h-10 p-2 focus:outline-none" name="fpass3" placeholder="Confirm password" required
                            value={user.confirmpassword} onChange={(e) => { setUser({ ...user, confirmpassword: e.target.value }) }} />
                        <button type="submit" onClick={validate} className=" border-1  w-full h-8 bg-neutral-600 text-white rounded-sm" name="fsubmit2" value="Sign Up" >Sign Up</button>

                        <div className="flex  w-full justify-center">
                            Have an account?<span className='ml-2'><Link to={'/login'}>Sign In</Link></span>
                        </div>
                        <div className="errorf"></div>

                    </div>
                </div>
                {/* <hr className='w-2/12 bg-black' /> */}
                {/* <div name="invalidname" className="invalid" >
                </div> */}
            </div>

        </div>
    )
}

export default Signup