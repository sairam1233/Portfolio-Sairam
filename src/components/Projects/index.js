/* eslint-disable react/jsx-no-target-blank */
import {Link} from 'react-router-dom'
import '../Home'
import './index.css'
import ReactContext from '../../context/ReactContext'
import Profile from '../Profile'
import 'animate.css'

const Projects = () => (
  <ReactContext.Consumer>
    {value => {
      const {isActiveTab, onChangeActiveTab} = value
      const activeTab = isActiveTab === 'Projects' ? 'll1' : 'l'
      const activeTab1 = isActiveTab === 'Projects' ? 'l11' : 'l1'
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
      const projects = [
        {
          id: 1,
          title: 'Nxt Watch',
          link: 'https://vinaynxtwatch00.ccbp.tech/login',
          image: '/images/1.webp', // Corrected path
          description: 'You Tube Clone, Login page, Saved video details',
          category: 'Dynamic',
        },
        {
          id: 2,
          title: 'Jobby App',
          link: 'https://vinayjob00.ccbp.tech/',
          image: '/images/2.bmp', // Corrected path
          description: 'Job Search, Login page, View job details',
          category: 'Dynamic',
        },
        {
          id: 3,
          title: 'Nxt Trendz',
          link: 'https://vinaynxtjob.ccbp.tech/login',
          image: '/images/3.bmp', // Corrected path
          description:
            'Ecommerce clone, Login page, cart page, products section, product details',
          category: 'Dynamic',
        },
        {
          id: 4,
          title: 'Emoji Game',
          link: 'https://emojigame000.ccbp.tech/',
          image: '/images/4.bmp', // Corrected path
          description: 'Game, Score board, timer, Top score',
          category: 'Dynamic',
        },
        {
          id: 5,
          title: 'Smart Wedding Invitation',
          link: 'https://keerthana00.ccbp.tech/',
          image: '/images/5.bmp', // Corrected path
          description:
            'Smart invitation, bride details, Location details, Gallery section',
          category: 'Responsive',
        },
        {
          id: 6,
          title: 'Gallery App',
          link: 'https://vinaygallery.ccbp.tech/',
          image: '/images/6.bmp', // Corrected path
          description: 'Selected image, list of images',
          category: 'Responsive',
        },
        {
          id: 7,
          title: 'Personal Portfolio',
          link: 'https://sairamptf.ccbp.tech/',
          image: '/images/7.bmp', // Corrected path
          description: 'About section, skills and Education, Projects showcase',
          category: 'Responsive',
        },
        {
          id: 8,
          title: 'Coin Toss Game',
          link: 'https://cointoss00.ccbp.tech/',
          image: '/images/8.bmp', // Corrected path
          description: 'Heads and Tails score board',
          category: 'Dynamic',
        },
        {
          id: 9,
          title: 'Money Manager',
          link: 'https://saimoneymn.ccbp.tech/',
          image: '/images/9.bmp', // Corrected path
          description:
            'Your balance, Your income, Your expenses, History, add your transaction',
          category: 'Dynamic',
        },
        {
          id: 10,
          title: 'Password Manager',
          link: 'https://vinaypsmanager.ccbp.tech/',
          image: '/images/10.bmp', // Corrected path
          description:
            'Add new password, show your password, Pc version, Search your passwords',
          category: 'Dynamic',
        },
        {
          id: 11,
          title: 'Projects Timeline',
          link: 'https://vinayprojects0.ccbp.tech/',
          image: '/images/11.bmp', // Corrected path
          description: 'List of Projects, using React Chrono package',
          category: 'Dynamic',
        },
        {
          id: 12,
          title: 'Gradient Generator',
          link: 'https://saigradients.ccbp.tech/',
          image: '/images/12.bmp', // Corrected path
          description:
            'Choose direction , Pick the colors, Generate the gradient',
          category: 'Dynamic',
        },
        {
          id: 13,
          title: 'Smart Wedding Invitations',
          link: 'https://smart-wedding-invitation.vercel.app/',
          image: '/images/14.png', // Corrected path
          description:
            'Choose Websites , Smart Invitation, Marriage Invitation',
          category: 'Responsive',
        },
        {
          id: 14,
          title: 'Smart Wedding Invitations',
          link: 'https://prasannalive.vercel.app/',
          image: '/images/13.png', // Corrected path
          description: 'Live Stream Platform , Youtube Live, Gallery Section',
          category: 'Responsive',
        },
      ]
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
                <Link to="/skills" className="lnk11">
                  <p className="li" onClick={onSkills}>
                    Skills
                  </p>
                </Link>
                <Link to="/Projects">
                  <li className={`${activeTab1}`} onClick={onProjects}>
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
                    <span className="sp">P</span>rojects
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
                      <li className={`${activeTab}`} onClick={onProjects}>
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
                <ul className="projects-container">
                  {projects.map(project => (
                    <li
                      className="project-card animate__animated animate__zoomIn"
                      key={project.id}
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="img-card">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="project-img"
                          />
                        </div>
                        <div className="project-ds">
                          <h1 className="pr-title">
                            {project.title}
                            <span className="sp2">{project.category}</span>
                          </h1>
                          <p className="pr-discription">
                            {project.description}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ReactContext.Consumer>
)

export default Projects
