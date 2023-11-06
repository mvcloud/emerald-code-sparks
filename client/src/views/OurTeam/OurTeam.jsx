import React from "react"
import NavBar from "../../components/NavBar/NavBar"
import "./OurTeam.less"

export default function OurTeam(props) {
  return (
    <div className="container nav-padding">
      <NavBar />
      <div id="about-content-container">
        <h1 id="title">Our Team</h1>
        <div id="logos" className="flex space-between">
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt sem a diam 
        consequat fermentum. Vestibulum laoreet metus id dui eleifend, vitae lacinia 
        dolor tristique. Suspendisse potenti. Integer mollis et neque sodales pretium. 
        Nulla nulla velit, convallis id augue ut, commodo elementum massa. Pellentesque eleifend 
        nec urna ut imperdiet. Suspendisse id placerat dui. 
        </p>
      </div>
    </div>
  )
}