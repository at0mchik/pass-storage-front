import React, {useState, useEffect} from 'react'
import {deletePass, listPass} from "../services/PasswordsService"
import passLogo from "../assets/key.png"
import { useNavigate } from 'react-router-dom'

const ListPasswordsComponent = () => {

    const [passwords, setPasswords] = useState([])

    const navigator = useNavigate();

    useEffect(()=>{
        getAllPasswords();
    },[])

    function getAllPasswords() {
        listPass().then((response) =>{
            setPasswords(response.data);
        }).catch(error =>{
            console.error(error);
        })
    }

    function removePassword(id){
        var isDelete = confirm("Delete this password?");

        if(isDelete){
            deletePass(id).then((response)=>{
                getAllPasswords();
            }).catch(error =>{
                console.error(error);
            })
        }
    }

    function updatePassword(id){
        navigator(`/edit-pass/${id}`)
    }

    function showPass(password){
        var checkBox = document.getElementById('check_'+password.id);
        var passPlace = document.getElementById('pass_'+password.id);

        if(checkBox.checked){
            passPlace.innerText = password.pass;
        }
        else{
            passPlace.innerText = "******************************"
        }
    }


    return (
        <div style = {{
            width: "100%",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
    }}>
        <div className='container' style={{width: "100%"}}>
            <div className = 'row fs-2 fw-bold pt-2 pb-2' style={{width: "100%"}}>
                <div className='col text-start'>List of all your Passwords </div>
                <div className='col-md-auto text-end'>
                    <button type="button" className="btn btn-dark" onClick={() => navigator('/add-password')}>New password</button> 
                </div>
            </div>
            {
                passwords.map(password =>
                    <div key={password.id} className='row bg-dark rounded mt-2' style={{
                        width: "100%",
                        height: "3vw"
                    }}>
                        <div className='col-md-1'>
                            <img src={password.imageURL=="" ? passLogo : password.imageURL} alt="pass logo" style={{width: "2.9vw"}}/>
                        </div>
                        <div className='col-4 text-start fs-4 text-light' style = {{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            {password.name}
                        </div>
                        <div className='col-5 text-start fs-4 text-light' style = {{
                            display: 'flex',
                            alignItems: 'center',
                        }}>
                            {/* <div class="form-check form-switch"> */}
                            <div className='m-2'>
                                <label className="check-text">
                                    <input type='checkbox' id={"check_" + password.id} onClick={()=>showPass(password)}/>
                                    <i className="bi bi-eye-slash unchecked"></i>
                                    <i className="bi bi-eye checked"></i>
                                </label>
                            </div>
                                {/* <input class="form-check-input" type="checkbox" role="switch" id={"check_" + password.id} onClick={()=>showPass(password)}></input> */}
                            {/* </div> */}
                            <div id = {"pass_" + password.id} className='pl-3'>******************************</div>
                        </div>
                        <div className='col-md-auto  button-col' style={{ height: "3vw"}}>
                            <button type="button" className="btn btn-light" onClick={()=>removePassword(password.id)} style={{ height: "2.25vw"}}>
                                Delete
                            </button> 
                        </div>
                        <div className='col-md-auto  button-col'>
                            <button type="button" className="btn btn-light" onClick={()=>updatePassword(password.id)}style={{ height: "2.25vw"}}>
                                Change
                            </button> 
                        </div>
                    </div>
                )
            }
        </div>
        </div>
    )
}

export default ListPasswordsComponent