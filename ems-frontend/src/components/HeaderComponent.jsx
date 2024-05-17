import React from 'react'

const HeaderComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand fs-2" href="/">PassStorage</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav fs-4">
                <li className="nav-item">
                    <a className="nav-link active" href="/">Main page</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="/contacts">Contacts</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default HeaderComponent