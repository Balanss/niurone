import React from 'react'
import '../styles.css'

export default function Background() {
  return (

<div id="parallax">
    <div className="layer" data-depth="0.6">
        <div className="some-space">
            {/* <h1>PARALLAX</h1> */}
            <p className="hero-text2">
                Our method of business brokering was designed to help you create new business relationships with fellow local business owners. You may be building your new empire from scratch, but every connection holds a value beyond money<br /><br />
                We only work with Business Leaders who have a People-First mentality.<br /><br />
                <b>Quote by Zig Ziglar</b>: “<em>You Can Have Everything In Life You Want, If You Will Just Help Enough Other People Get What They Want.</em>”
            </p>
        </div>
    </div>
    <div className="layer" data-depth="0.4">
        <div id="particles-js"></div>
    </div>
    {/*
    <div className="layer" data-depth="0.3">
        <div className="some-more-space"><a href="https://codepen.io/shindry" target="_blank">is it cool ?</a></div>
    </div> */}
</div>

  )
}
