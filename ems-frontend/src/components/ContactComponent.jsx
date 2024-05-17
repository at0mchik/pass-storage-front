import React from 'react'
import picElite from '../assets/esh.jpg'
import picRock from '../assets/rock.jpg'

function changePhoto(e){
    var picElite = document.getElementById('elitePicture');
    var picRock = document.getElementById('rockPicture');
    
    if(e.target.value == 1337)
        picElite.classList.remove("hideForm");
    else if(e.target.value == 1488)
        picRock.classList.remove("hideForm");
    else{
        picElite.classList.add("hideForm");
        picRock.classList.add("hideForm");
    }
}

const ContactComponent = () => {
  return (
    <div className='container pt-3'>
        <div className='container rounded border border-2 border-dark pb-4' style ={{backgroundColor: "rgb(219, 219, 219)"}}>
            <div className='row'>
                <div className='text-center col fs-2 fw-bold'>My Contacts</div>
            </div>
            <div className='row text-center pt-3'>
                <div className='col'>
                    <a href="#" class="link-dark fs-3 col">GitHub</a>
                </div>
                <div className='col'>
                    <a href="#" class="link-dark fs-3 col">Telegram</a>
                </div>
            </div>
            <div className='row p-3'>
                <div className='form-group mb-2 d-flex justify-content-center'>
                    <input
                        type='text'
                        placeholder='Easter EGG??'
                        name='code'
                        className='form-control fs-5'
                        onChange={changePhoto}
                        style={{width: "30vw"}}
                    >
                    </input>
                </div>
            </div>
            <div id="elitePicture" className='text-center hideForm'>
                <img src={picElite} alt="elite pic" style={{width: "30vw"}}/>
            </div>
            <div id="rockPicture" className='text-center hideForm'>
                <img src={picRock} alt="elite pic" style={{width: "30vw"}}/>
            </div>
        </div>
    </div>
  )
}

export default ContactComponent