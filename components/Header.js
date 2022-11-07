import React from 'react'
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link'

function Header({ routerCounter, nextLevel, showArrow }) {
    console.log(nextLevel);
    return (
        <div className='cont'>

            <Typography variant="h3" sx={{ padding: "20px", fontWeight: "1000", color: "#3498DB" }}>Level {nextLevel} </Typography>

            {showArrow ? <Link href={`tiles?level=${routerCounter}`}>  <Typography variant="h3" sx={{ margin: "", padding: "20px", fontWeight: "1000", color: "#3498DB" }}>Level {routerCounter} <ArrowForwardIcon /></Typography></Link> : <span></span>}

        </div>
    )
}

export default Header