import './Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faSteam } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return <div className="card-wrapper">
    <div className="card">
      <div>
        <div className="contact-title">Contact</div>
        <div className="contact-email">
          Email me at <a href="mailto:mail@caheuer.de">mail@caheuer.de</a>
        </div>
        <div className="social-media-row">
          <a href="https://www.linkedin.com/in/christian-andreas-heuer-406598209/" className="social-media-icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/caheuer" className="social-media-icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://steamcommunity.com/id/chrisausdemklo" className="social-media-icon">
            <FontAwesomeIcon icon={faSteam} />
          </a>
        </div>
      </div>
    </div>
  </div>;
}