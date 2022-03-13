import React from 'react'

const About = () => {
    return (
        <div>
          <div className="w3-container w3-padding-32" id="about">
            <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="w3-row-padding w3-grayscale">
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img src="https://www.w3schools.com/w3images/team2.jpg" alt="John" style={{width: '100%'}} />
              <h3>John Doe</h3>
              <p className="w3-opacity">CEO &amp; Founder</p>
              <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img src="https://www.w3schools.com/w3images/team1.jpg" alt="Jane" style={{width: '100%'}} />
              <h3>Jane Doe</h3>
              <p className="w3-opacity">Architect</p>
              <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img src="https://www.w3schools.com/w3images/team3.jpg" alt="Mike" style={{width: '100%'}} />
              <h3>Mike Ross</h3>
              <p className="w3-opacity">Architect</p>
              <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
            <div className="w3-col l3 m6 w3-margin-bottom">
              <img src="https://www.w3schools.com/w3images/team4.jpg" alt="Dan" style={{width: '100%'}} />
              <h3>Dan Star</h3>
              <p className="w3-opacity">Architect</p>
              <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
              <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
            </div>
          </div>
        </div>
      );
}

export default About