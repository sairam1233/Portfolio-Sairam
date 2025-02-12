/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-target-blank */
import {HiOutlineMail} from 'react-icons/hi'
import {FaInstagram, FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'
import {IoPhonePortrait} from 'react-icons/io5'
import {MdDateRange} from 'react-icons/md'
import {ImLocation2} from 'react-icons/im'
import {TiArrowSortedDown} from 'react-icons/ti'

import ReactContext from '../../context/ReactContext'

import './index.css'

const Profile = () => (
  <ReactContext.Consumer>
    {value => {
      const {isContact, onContact} = value

      const handleDownload = () => {
        const resumeUrl = '/resume.pdf'
        const link = document.createElement('a')
        link.href = resumeUrl
        link.download = 'Resume.pdf' // This is the name the user will see
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }

      const Element = (
        <div className="dsp1">
          <hr className="hr1" />
          <ul className="ul-12">
            <li className="li-1">
              <p className="icon1">
                <HiOutlineMail />
              </p>
              <div className="pf-dt">
                <h1 className="h9">EMAIL</h1>
                <a href="mailto:vinaysairam1233@gmail.com">
                  <p className="p9">sairam28380@g...</p>
                </a>
              </div>
            </li>
            <li className="li-1">
              <p className="icon1">
                <IoPhonePortrait />
              </p>
              <div className="pf-dt">
                <h1 className="h9">PHONE</h1>
                <a href="tel:+91 6304274299">
                  <p>+916304274299</p>
                </a>
              </div>
            </li>
            <li className="li-1">
              <p className="icon1">
                <MdDateRange />
              </p>
              <div className="pf-dt">
                <h1 className="h9">BIRTHDAY</h1>
                <p>JUNE 06, 2003</p>
              </div>
            </li>
            <li className="li-1">
              <p className="icon1">
                <ImLocation2 />
              </p>
              <div className="pf-dt">
                <h1 className="h9">LOCATION</h1>
                <p>TANUKU</p>
              </div>
            </li>
          </ul>
          <hr className="hr1" />
          <ul className="lnks">
            <li>
              <a
                href="https://www.instagram.com/vinay_sairam/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/SaiRam_0012?t=1yClwoXl31yVALxNmgP80A&s=09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sairamkottu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/vinaysairam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
      )

      const onContact1 = () => {
        onContact()
      }

      return (
        <div className="profile">
          <div className="btn1">
            <button
              type="button"
              className={isContact ? 'btn-con1' : 'btn-con'}
              onClick={onContact1}
            >
              <TiArrowSortedDown />
            </button>
          </div>
          <div className="btn">
            <button
              type="button"
              className={isContact ? 'btn-con1' : 'btn-con'}
              onClick={onContact1}
            >
              Show Contacts
            </button>
          </div>
          <div className="f-11">
            <div className="pf-container">
              <img src="/images/profile.jpg" alt="vinay" className="pf-logo" />
              <div className="pf-c">
                <h1 className="pf-heading">Sai Ram Kottu</h1>
                <p className="fstack-para">FULL STACK WEB DEVELOPER</p>
                <button onClick={handleDownload} className="resume-btn">
                  Download Resume
                </button>
              </div>
            </div>
            {isContact && Element}
            <div className="dsp">
              <hr className="hr1" />
              <ul>
                <li className="li-1">
                  <p className="icon1">
                    <HiOutlineMail />
                  </p>
                  <div className="pf-dt">
                    <h1>EMAIL</h1>
                    <a href="mailto:vinaysairam1233@gmail.com">
                      <p>sairam28380@g...</p>
                    </a>
                  </div>
                </li>
                <li className="li-1">
                  <p className="icon1">
                    <IoPhonePortrait />
                  </p>
                  <div className="pf-dt">
                    <h1>PHONE</h1>
                    <a href="tel:+91 6304274299">
                      <p>+916304274299</p>
                    </a>
                  </div>
                </li>
                <li className="li-1">
                  <p className="icon1">
                    <MdDateRange />
                  </p>
                  <div className="pf-dt">
                    <h1>BIRTHDAY</h1>
                    <p>JUNE 06, 2003</p>
                  </div>
                </li>
                <li className="li-1">
                  <p className="icon1">
                    <ImLocation2 />
                  </p>
                  <div className="pf-dt">
                    <h1>LOCATION</h1>
                    <p>TADIPARRU</p>
                  </div>
                </li>
              </ul>
              <hr className="hr1" />
              <ul className="lnks">
                <li>
                  <a
                    href="https://www.instagram.com/vinay_sairam/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/SaiRam_0012?t=1yClwoXl31yVALxNmgP80A&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sairamkottu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/vinaysairam"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }}
  </ReactContext.Consumer>
)

export default Profile
