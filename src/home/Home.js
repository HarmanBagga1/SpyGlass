import React from "react"

import "./HomeStyle.css"

import NavBar from "./NavBar"

class Home extends React.Component {
    render() {
        return (
            <div>
                <svg className="homeWaves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="38" y="0" fill="rgba(255,255,255,0.7" />
                        <use xlinkHref="#gentle-wave" x="38" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="38" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="38" y="7" fill="#fff" />
                    </g>
                </svg>
                <NavBar />
                <div className="content homeContent">
                    <div>
                        <h1 className="title">Welcome to Spyglass!</h1>
                        <p className="homeTypewriter">get hyyyyyyype</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home