import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Marvel App</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" />
                    <button className="btn btn-outline-danger">Go</button>
                </form>
            </div>
        </nav>
    )
}