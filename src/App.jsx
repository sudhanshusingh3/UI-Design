import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
 
  return (
    <div className="App">
      <div className="Block">
        <div className="Subjects">
          {/* subjct start */}
          <div className="Flex">
            <div>
              <button className="history">History</button>
              <div className="H-container">
                <div className="H-orange"></div>
                <div className="gray-bar"></div>
                <div className="gray-bar"></div>
              </div>
            </div>
            <div>
              <button className="subject-button">Civics</button>
            </div>
            <div>
              <button className="subject-button">Geo</button>
            </div>
          </div>
          {/* subject end */}
          {/* Content div start */}
          <div className="Content">
            <div>
              <p className="white Right x">X</p>
            </div>
            <div className="white space">
              <p className="font sentence-1">Strength Bar</p>
              <p className="font sentence-2">
                Introducing strength bar to help you know your week subjects
              </p>
            </div>

            {/* content div end */}

            {/* Second content start */}
            <div className="ContentTwo">
              {/* 1st */}
              <div className="Flex font">
                <div>
                  <p className='width'> Weak </p>
                  <div className="container">
                    <div className="red"></div>
                    <div className="gray-bar"></div>
                    <div className="gray-bar"></div>
                  </div>
                </div>
                <div>
                  <p className="width">Average</p>
                  <div className="container">
                    <div className="yellow"></div>
                    <div className="yellow margin"></div>
                    <div className="gray-bar"></div>
                  </div>
                </div>
              </div>
              {/* 2nd */}
              <div className="Flex font">
                <div>
                  <p className="width top-margin">Improvement</p>
                  <div className="container">
                    <div className="orange"></div>
                    <div className="orange margin"></div>
                    <div className="gray-bar"></div>
                  </div>
                </div>
                <div>
                  <p className='width top-margin'> Cutoff level</p>
                  <div className="container">
                    <div className="blue"></div>
                    <div className="blue margin"></div>
                    <div className="blue margin"></div>
                  </div>
                </div>
              </div>
              {/* 2nd end */}
            </div>
            {/* second content end */}
            <div class="third">
              <div className="Right">
                <button className="Finish">Finish</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
