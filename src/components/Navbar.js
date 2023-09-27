import React from "react";

export default function Navbar(props) {
    const [char, setChar] = React.useState("")

    // console.log(char)

    function handleClick(event) {
        props.changeChar(char)
        event.preventDefault();
    }

    return (
        <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Marvel App</a>
                <form className="d-flex" role="search">
                    <input onChange={(event) => setChar(event.target.value)} className="form-control me-2" type="search" placeholder="Search" />
                    <button onClick={handleClick} className="btn btn-outline-danger">Go</button>
                </form>
            </div>
        </nav>
    )
}