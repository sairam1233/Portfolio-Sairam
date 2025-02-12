import 'animate.css'
import {Link} from 'react-router-dom'
import './index.css'
import ReactContext from '../../context/ReactContext'
import Profile from '../Profile'

const Home = () => (
  <ReactContext.Consumer>
    {value => {
      const {isActiveTab, onChangeActiveTab} = value
      const activeTab = isActiveTab === 'About' ? 'll1' : 'l'
      const activeTab1 = isActiveTab === 'About' ? 'l11' : 'l1'

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
                  <p className={`${activeTab1}`} onClick={onAbout}>
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
                  <p className="li" onClick={onContact}>
                    Contact
                  </p>
                </Link>
              </div>
              <div className="fl-11">
                <div className="header">
                  <h1 className="animate__animated animate__fadeIn">
                    <span className="sp">A</span>bout Me
                  </h1>
                  <ul className="ul">
                    <Link to="/">
                      <li className={`${activeTab}`} onClick={onAbout}>
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
                      <li className="l" onClick={onContact}>
                        Contact
                      </li>
                    </Link>
                  </ul>
                </div>
                <section className="about-container">
                  <p className="animate__animated animate__fadeIn">
                    I am a Full Stack Developer, with extensive knowledge and
                    years of case study, working in web technologies and
                    UI/Backend, delivering quality work. I enjoy turning complex
                    problems into simple, beautiful, and intuitive designs.
                  </p>
                  <br />
                  <p className="animate__animated animate__fadeIn">
                    My job is to build your website so that it is functional and
                    user-friendly but at the same time attractive. Moreover, I
                    add a personal touch to your product and make sure that it
                    is eye-catching and easy to use. My aim is to bring across
                    your message and identity in the most creative way.
                  </p>
                  <h1 className="h11 animate__animated animate__fadeIn">
                    <span className="sp">E</span>ducation
                  </h1>
                  <ul className="ul11 animate__animated animate__fadeIn">
                    <li className="li11">
                      <div className="li12">
                        <h1 className="ed-h">CCBP Academy 4.0 Tech Program</h1>
                      </div>
                      <p className="pp12">Full Stack Web Development</p>
                      <p>
                        (CCBP Academy is an Industry-Ready Certification program
                        focused on full-stack web development that provides
                        training through an immersive hands-on and
                        reverse-engineering curriculum)
                      </p>
                    </li>
                    <li className="li11">
                      <div className="li12">
                        <h1 className="ed-h">
                          Dhanekula Institute of Engineering and Technology
                        </h1>
                      </div>
                      <p>
                        Bachelor of Technology, Computer Science Engineering
                        <br /> Vijayawada, Andhra Pradesh
                      </p>
                    </li>
                    <li className="li11">
                      <div className="li12">
                        <h1 className="ed-h">
                          Vikas Junior College Samisragudem
                        </h1>
                      </div>
                      <p>
                        Intermediate_MPC (89.0%)
                        <br /> Nidadavolu, Andhra Pradesh
                      </p>
                    </li>
                  </ul>
                  <h1 className="h11 animate__animated animate__fadeIn">
                    <span className="sp">E</span>xperience
                  </h1>
                  <ul className="ul11 animate__animated animate__fadeIn">
                    <li className="li11">
                      <div className="li12">
                        <h1 className="ed-h">
                          Gollamudi Technology & Software
                        </h1>
                      </div>
                      <p className="pp12">WEB DEVELOPMENT INTERN</p>
                      <p>
                        Collaborated with a development team to build an online
                        HRMS portal, incorporating features like user
                        registration, login, attendance tracking, and
                        performance reporting. Implemented secure authentication
                        and created userfriendly interfaces with React,
                        enhancing the overall user experience. Worked closely
                        with team members to optimize backend systems using
                        Node.js and Python, and improved database efficiency
                        with MySQL. Conducted comprehensive testing to ensure
                        high performance and security, maintaining robustness
                        under high user loads.
                      </p>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ReactContext.Consumer>
)

export default Home
