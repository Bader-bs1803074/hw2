import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from "next/router"

import { Grid } from "@mui/material";
import Box from '@mui/material/Box';


function EmojContainer({ emojis, nextLevel, setNextLev, nextLev, setShowArrow, showArrow }) {
    const router = useRouter()

    let isClicked = useRef(-1)

    let array = []


    for (let i = 0; i < nextLevel; i++) {
        let emj = emojis[Math.floor(Math.random() * emojis.length)]

        let newData = { emj: emj, id: i, clicked: false }
        array.push(newData)
        array.push(newData)
    }

    array.sort(() => Math.random() - 0.5)

    const check = (currentId) => {

        if (array[currentId].id === array[isClicked.current].id) {
            array[currentId].clicked = true
            array[isClicked.current].clicked = true

            if (array.every(p => p.clicked === true)) {
                // routerCounter.current = router.query.level++
                setNextLev(+nextLevel + 1)
                setShowArrow(true)

                console.log("true")
            } else if (array.every(p => p.clicked !== true)) {
                setShowArrow(false)
            }

            isClicked.current = -1



        } else {
            console.log("false");

        }
    }
    console.log(nextLev);



    function handelClick(id) {
        // setBackGroundColor(p => !p)

        if (isClicked.current === -1) {
            isClicked.current = id

        } else if (isClicked.current !== -1) {
            check(id)
        }

    }



    const styles = {
        
        transform: " rotate(45deg)"
    }



    return (
        <div>

            <Grid component="section" container spacing={1} sx={{ padding: "20px" }}>
                {array.map((emojis, i) => (
                    <Grid key={i} component="article" item xs={1} md={1}>

                        {/* <EmojiCard emojis={emojis} id={i} aha={aha} handelClick={handelClick}  /> */}



                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                '& > :not(style)': {
                                    m: 0,
                                    width: 50,
                                    height: 50,
                                },
                            }}
                        >

                            <span style={styles}> <span className='span1'  onClick={() => handelClick(i)}>{emojis.emj}</span></span>
                        </Box>






                    </Grid>
                ))}
            </Grid>

        </div>
    )
}

export default EmojContainer