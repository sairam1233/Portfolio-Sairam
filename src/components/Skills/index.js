/* eslint-disable react/no-unescaped-entities */
import 'animate.css'
import {Link} from 'react-router-dom'
import {FaLaptopCode, FaCode} from 'react-icons/fa'
import './index.css'
import ReactContext from '../../context/ReactContext'
import Profile from '../Profile'

const Home = () => (
  <ReactContext.Consumer>
    {value => {
      const {isActiveTab, onChangeActiveTab} = value
      const activeTab = isActiveTab === 'Skills' ? 'll1' : 'l'
      const activeTab1 = isActiveTab === 'Skills' ? 'l11' : 'li'
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
      return (
        <div className="bg-main">
          <Profile className="pf-block" />
          <div className="main-section1">
            <div className="main1">
              <div className="footer1">
                <Link to="/">
                  <p className="li" onClick={onAbout}>
                    About
                  </p>
                </Link>
                <Link to="/skills">
                  <p className={`${activeTab1}`} onClick={onSkills}>
                    Skills
                  </p>
                </Link>
                <Link to="/Projects">
                  <li className="li" onClick={onProjects}>
                    Projects
                  </li>
                </Link>
                <Link to="/contact">
                  <p className="li" onClick={onContact}>
                    Contact
                  </p>
                </Link>
              </div>
              <div className="fl-11">
                <div className="header">
                  <h1 className="animate__animated animate__fadeIn">
                    <span className="sp">S</span>kills
                  </h1>
                  <ul className="ul">
                    <Link to="/">
                      <li className="l" onClick={onAbout}>
                        About
                      </li>
                    </Link>
                    <Link to="/skills">
                      <li className={`${activeTab}`} onClick={onSkills}>
                        Skills
                      </li>
                    </Link>
                    <Link to="/Projects">
                      <li className="l" onClick={onProjects}>
                        Projects
                      </li>
                    </Link>
                    <Link to="/contact">
                      <li className="l" onClick={onContact}>
                        Contact
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="skills-container">
                  <h1 className="h12 animate__animated animate__fadeIn">
                    What <span>I'm</span> Doing
                  </h1>
                  <div className="what-m-doing">
                    <div className="what-m-doing-card animate__animated animate__zoomIn">
                      <p className="ic">
                        <FaCode />
                      </p>
                      <div>
                        <h1 className="tl-1">Frontend Development</h1>
                        <p className="p12">
                          The most modern and high-quality design made at a
                          professional level
                        </p>
                      </div>
                    </div>
                    <div className="what-m-doing-card animate__animated animate__zoomIn">
                      <p className="ic">
                        <FaLaptopCode />
                      </p>
                      <div>
                        <h1 className="tl-1">Backend Development</h1>
                        <p className="p12">
                          Integrations with highload services and solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <h1 className="h12 animate__animated animate__fadeIn">
                    Ui/Ux
                  </h1>

                  <div className="progress-card animate__animated animate__fadeInUp">
                    <li>
                      <p className="p23">
                        Figma <span className="p12">50%</span>
                      </p>
                      <span className="bar">
                        <span className="ui-ux">{}</span>
                      </span>
                    </li>
                    <li>
                      <p className="p23">
                        Adobe Photoshop <span className="p12">60%</span>
                      </p>
                      <span className="bar">
                        <span className="Adobe">{}</span>
                      </span>
                    </li>
                  </div>
                  <h1 className="h12 animate__animated animate__fadeIn">
                    Frontend
                  </h1>
                  <div className="progress-card animate__animated animate__fadeInUp">
                    <li>
                      <p className="p23">
                        HTML <span className="p12">80%</span>
                      </p>
                      <span className="bar">
                        <span className="html">{}</span>
                      </span>
                    </li>
                    <li>
                      <p className="p23">
                        CSS <span className="p12">70%</span>
                      </p>
                      <span className="bar">
                        <span className="css">{}</span>
                      </span>
                    </li>
                    <li>
                      <p className="p23">
                        Bootstrap <span className="p12">75%</span>
                      </p>
                      <span className="bar">
                        <span className="bootstrap">{}</span>
                      </span>
                    </li>
                    <li>
                      <p className="p23">
                        Javascript <span className="p12">80%</span>
                      </p>
                      <span className="bar">
                        <span className="javascript">{}</span>
                      </span>
                    </li>
                    <li>
                      <p className="p23">
                        React <span className="p12">75%</span>
                      </p>
                      <span className="bar">
                        <span className="react">{}</span>
                      </span>
                    </li>
                  </div>
                  <h1 className="h12 animate__animated animate__fadeIn">
                    Backend
                  </h1>
                  <div className="progress-card animate__animated animate__fadeInUp">
                    <li>
                      <p className="p23">
                        Python <span className="p12">65%</span>
                      </p>
                      <span className="bar">
                        <span className="python">{}</span>
                      </span>
                    </li>
                    <li>
                      <p className="p23">
                        NodeJs <span className="p12">70%</span>
                      </p>
                      <span className="bar">
                        <span className="nodejs">{}</span>
                      </span>
                    </li>
                    <li>
                      <p className="p23">
                        ExpressJs <span className="p12">70%</span>
                      </p>
                      <span className="bar">
                        <span className="expressjs">{}</span>
                      </span>
                    </li>
                  </div>
                  <h1 className="h12 animate__animated animate__fadeIn">
                    Database
                  </h1>
                  <div className="progress-card animate__animated animate__fadeInUp">
                    <li>
                      <p className="p23">
                        SQL Lite <span className="p12">80%</span>
                      </p>
                      <span className="bar">
                        <span className="sql">{}</span>
                      </span>
                    </li>
                    <li>
                      <p className="p23">
                        Mangodb <span className="p12">70%</span>
                      </p>
                      <span className="bar">
                        <span className="Mangodb">{}</span>
                      </span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ReactContext.Consumer>
)

export default Home
