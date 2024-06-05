import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg"  style={{backgroundColor:"#00827F"}}>
                <div className="container">
                    <a className="navbar-brand text-light" href="#" style={{fontSize:"22px"}}>Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to
                                ='/' style={{fontSize:"18px"}}>View</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to
                                ='/Add' style={{fontSize:"18px"}}>Add</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Header
