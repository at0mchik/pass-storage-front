import React, { useEffect, useState } from 'react'
import { createPass, getPass, updatePass } from '../services/PasswordsService'
import { useNavigate, useParams } from 'react-router-dom'

const PasswordComponent = () => {
    const [name, setName] = useState("")
    const [imageURL, setImageURL] = useState('')
    const [pass, setPass] = useState('')

    const navigator = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        if(id){
            getPass(id).then((response)=>{
                setName(response.data.name);
                setImageURL(response.data.imageURL);
                setPass(response.data.pass);
            }).catch(error =>{
                console.error(error);
            })
        }
    }, [id])

    function checkValue(){
        var el = document.getElementById('lengthRange');
        var text = document.getElementById('passLengthText')
        text.innerText = "Password length: " + el.value;
    }

    function saveOrUpdatePassword(e){
        e.preventDefault();

        if ((name == '') || (pass == '')){
            var el = document.getElementById('alert');
            el.classList.remove("hideForm");
        }
        else{
            if(id){
                const password = {name, imageURL, pass}
                console.log(password)
                updatePass(id, password).then((response)=>{
                    console.log(response.data);
                    navigator('/')
                })
            }
            else{
                const password = {name, imageURL, pass}
                console.log(password)
                createPass(password).then((response)=>{
                    console.log(response.data);
                    navigator('/')
                })
            }
        }
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Password</h2>
        }else{
            return <h2 className='text-center'>Add Password</h2>
        }
    }

    function takeValueOfGenerator(){
        var len = document.getElementById('lengthRange').value;
        var isNumber = document.getElementById('numberCheck').checked;
        var isSymbol = document.getElementById('symbolCheck').checked;

        setPass(generatePassword(len, isNumber, isSymbol));
    }

    function generatePassword(length, includeNumbers, includeSymbols) {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
        
        let characters = letters;
        if (includeNumbers) {
            characters += numbers;
        }
        if (includeSymbols) {
            characters += symbols;
        }
    
        let password = '';
        const charactersLength = characters.length;
    
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charactersLength);
            password += characters.charAt(randomIndex);
        }
    
        return password;
    }

    function showGenerator(){
        var el = document.getElementById('generatorCheck');
        var generator = document.getElementById('generatorForm');
        if(el.checked){
            generator.classList.remove("hideForm");
        }
        else{
            generator.classList.add("hideForm");
        }
        
    }

    return (
        <div className='container pt-3'>
            <div className='row'>
                <div className='card rounded border-2 border-dark' style ={{backgroundColor: "rgb(219, 219, 219)"}}>
                    {
                        pageTitle()
                    }
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label fs-4'>Password name:</label>
                            <input
                                type='text'
                                placeholder='Enter your password name'
                                name='name'
                                value={name}
                                className='form-control fs-5'
                                onChange={(e) => setName(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2 fs-4'>
                            <label className='form-label'>Image URL:</label>
                            <input
                                type='text'
                                placeholder='Leave empty for a default picture'
                                name='imageURL'
                                value={imageURL}
                                className='form-control fs-5'
                                onChange={(e) => setImageURL(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className='form-group mb-2 fs-4 pb-2'>
                            <label className='form-label'>Password:</label>
                            <input
                                type='text'
                                placeholder='Enter your password here'
                                name='pass'
                                value={pass}
                                className='form-control fs-5'
                                onChange={(e) => setPass(e.target.value)}
                            >
                            </input>
                        </div>
                        <div className="form-check form-switch fs-4 pb-2">
                            <input className="form-check-input" type="checkbox" role="switch" id="generatorCheck" onChange={showGenerator}></input>
                            <label className="form-check-label" for="flexSwitchCheckDefault">Enable password generator</label>
                        </div>
                        <div className="card pb-4 border border-dark p-2 border-2 hideForm mb-3" id='generatorForm'>
                            <label for="customRange1" className="form-label fs-4" id='passLengthText'>Password length: 30</label>
                            <input type="range" className="form-range" min="6" max="30" id="lengthRange" onClick={checkValue}></input>
                            <div className='row fs-5 pb-2'>
                                <div className='col text-start'>6</div>
                                <div className='col text-end'>30</div>
                            </div>
                                <div className="form-check form-switch fs-4 pb-2">
                                <input className="form-check-input" type="checkbox" role="switch" id="numberCheck"></input>
                                <label className="form-check-label" for="flexSwitchCheckDefault">Enable numbers in password</label>
                            </div>
                            <div className="form-check form-switch fs-4 pb-2">
                                <input className="form-check-input" type="checkbox" role="switch" id="symbolCheck"></input>
                                <label className="form-check-label" for="flexSwitchCheckDefault">Enable symbols in password</label>
                            </div>
                            <button type="button" className="btn btn-dark" onClick={takeValueOfGenerator}>Generate</button>
                        </div>

                        <button type="button" className="btn btn-dark" onClick={saveOrUpdatePassword}>Confirm</button>
                        <div id = 'alert' className="alert alert-danger mt-3 p-2 text-center hideForm" role="alert">Name and password could not be empty</div>
                        <div className='pb-3'></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PasswordComponent