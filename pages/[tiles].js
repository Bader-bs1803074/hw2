import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from "next/router"
import EmojContainer from '../components/EmojContainer'
import Header from '../components/Header'


function tiles() {
    const emojis = require("emojis-list")

    const router = useRouter()
    let routerCounter = useRef(router.query.level)


    const [nextLev, setNextLev] = useState( 1|| JSON.parse(localStorage.getItem("level")) )
    const [showArrow, setShowArrow] = useState(false)
    const [backGroundColor, setBackGroundColor] = useState(false)



   
    useEffect(() => {
        localStorage.setItem("level", JSON.stringify(nextLev))
    }, [nextLev])
    


    return (
        <div className='theme'>
            <Header routerCounter={nextLev} nextLevel={router.query.level} showArrow={showArrow} />

            <EmojContainer emojis={emojis} nextLevel={router.query.level} setNextLev={setNextLev} nextLev={nextLev}

                showArrow={showArrow} setShowArrow={setShowArrow} setBackGroundColor={setBackGroundColor} backGroundColor={backGroundColor}


            />


        </div>
    )
}

export default tiles