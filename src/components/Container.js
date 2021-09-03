import "./Container.css"
import React, { useState, useRef } from 'react'

export default function Container() {
    const url = "https://robohash.org/"
    const [search, setsearch] = useState("Harry")
    const [setItem, setsetItem] = useState("set1")
    const searchBox = useRef()


    function onClickHandle(e){
        const temp = searchBox.current.value
        setsearch(temp)
    }

    function onChangeHandle(e){
        console.log(e.target.value);
        setsetItem(returnSet(e.target.value))
        console.log(setItem);
    }
    function returnSet(v){
        switch(v){
            case "1":
                return "set1"
                
            case "2":
                return "set2"
             
            case "3":
                return "set3"
                
            case "4":
                return "set4"
                
            default:
                return "set1"
        }

    }

    return (
        <div className="container">
            <h1 className="heading">Is this you?</h1>
            <div>
            <input ref={searchBox} type="text" placeholder="Harry"/>
            <select onChange={onChangeHandle}>
                <option value="1">Robots</option>
                <option value="2">Monsters</option>
                <option value="3">Only heads</option>
                <option value="4">Cute cats</option>
            </select>
            </div>
            <button onClick={onClickHandle}>Revelio</button>
            <img src={url + search + "?set=" + setItem} alt={search} />
        </div>
    )
}
