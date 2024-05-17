import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderComponent = () => {
    const navigator = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand fs-2 pointer" onClick={() => navigator('/')}>PassStorage</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav fs-4">
                    <li className="nav-item">
                        <a className="nav-link active pointer" onClick={() => navigator('/')}>Main page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active pointer" onClick={() => navigator('/contacts')}>Contacts</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComponent