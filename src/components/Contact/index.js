/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/self-closing-comp */
import {Link} from 'react-router-dom'

import './index.css'
import ReactContext from '../../context/ReactContext'
import Profile from '../Profile'
import 'animate.css'

const Contact = () => (
  <ReactContext.Consumer>
    {value => {
      const {isActiveTab, onChangeActiveTab} = value

      const activeTab = isActiveTab === 'contact' ? 'll1' : 'l'
      const activeTab1 = isActiveTab === 'contact' ? 'l11' : 'l1'
      const onAbout = () => {
        onChangeActiveTab('About')
      }
      const onSkills = () => {
        onChangeActiveTab('Skills')
      }
      const onProjects = () => {
        onChangeActiveTab('Projects')
      }
      const onContact = () => {
        onChangeActiveTab('contact')
      }
      console.log(isActiveTab)
      return (
        <div className="bg-main">
          <Profile className="pf-block" />
          <div className="main-section1">
            <div className="main1">
              <div className="footer1">
                <Link to="/" className="lnk11">
                  <p className="li" onClick={onAbout}>
                    About
                  </p>
                </Link>
                <Link to="/skills">
                  <p className="li" onClick={onSkills}>
                    Skills
                  </p>
                </Link>
                <Link to="/Projects">
                  <p className="li" onClick={onProjects}>
                    Projects
                  </p>
                </Link>
                <Link to="/contact">
                  <p className={`${activeTab1}`} onClick={onContact}>
                    Contact
                  </p>
                </Link>
              </div>
              <div className="fl-11">
                <div className="header">
                  <h1 className="animate__animated animate__fadeIn">
                    <span className="sp">C</span>ontact Me
                  </h1>
                  <ul className="ul">
                    <Link to="/">
                      <li className="l" onClick={onAbout}>
                        About
                      </li>
                    </Link>
                    <Link to="/skills">
                      <li className="l" onClick={onSkills}>
                        Skills
                      </li>
                    </Link>
                    <Link to="/Projects">
                      <li className="l" onClick={onProjects}>
                        Projects
                      </li>
                    </Link>
                    <Link to="/contact">
                      <li className={`${activeTab}`} onClick={onContact}>
                        Contact
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="contact-container">
                  <div className="map-container animate__animated animate__fadeInUp">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.7821346099413!2d81.72111512455982!3d16.787511434000965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b84df97985d7%3A0xf2dbf5b02497a37f!2sTadiparru%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1714753111127!5m2!1sen!2sin"
                      style={{border: 0}}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <h1 className="h12 animate__animated animate__fadeInUp">
                    Contact Form
                  </h1>
                  <form
                    action="https://formspree.io/f/xvoelwdn"
                    method="POST"
                    className="fm"
                  >
                    <div className="rs-inp">
                      <input
                        type="text"
                        name="username"
                        placeholder="Full name"
                        autoComplete="off"
                        required
                        className="inp animate__animated animate__fadeInLeft"
                      />
                      <input
                        type="email"
                        name="Email"
                        placeholder="Email address"
                        autoComplete="off"
                        required
                        className="inp animate__animated animate__fadeInRight"
                      />
                    </div>
                    <textarea
                      name="message"
                      cols="30"
                      rows="8"
                      autoComplete="off"
                      placeholder="Your message"
                      required
                      className="inp1 animate__animated animate__fadeInUp"
                    ></textarea>
                    <div className="btn-dv">
                      <p className="visitors animate__animated animate__zoomIn">
                        <a href="https://www.hitwebcounter.com" target="_blank">
                          <img
                            src="https://hitwebcounter.com/counter/counter.php?page=13095770&style=0001&nbdigits=5&type=page&initCount=0"
                            title="Counter Widget"
                            Alt="Visit counter For Websites"
                            border="0"
                          />
                        </a>{' '}
                      </p>
                      <input
                        type="submit"
                        value="Send"
                        className="btn-sbt animate__animated animate__zoomIn"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ReactContext.Consumer>
)

export default Contact
