import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import Navbar from "./components/Navbar";

export default function App() {
    const [charArr, setCharArr] = React.useState([])

    console.log(charArr)

    function characterChange(char) {
        // const url = `https://gateway.marvel.com/v1/public/characters?ts=${process.env.REACT_APP_TS}&name=hulk&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}#`
        const url = `https://gateway.marvel.com/v1/public/characters?ts=1&name=${char}&apikey=c652e9239e342f5196a3b4aab84a7b78&hash=c0ffed02dfca96ca41999c3c585bad2f#`
        fetch(url)
            .then(res => res.json())
            .then(data => setCharArr(data.data.results))
    }

    React.useEffect(() => {
        characterChange("iron man");
    },[])

    return (
        <div>
            <Navbar/>
        </div>
    )
}