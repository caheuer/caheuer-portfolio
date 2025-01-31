import './Home.css';

import photo from '../assets/photo.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="card-wrapper">
      <div className="card">
        <img src={photo} alt="Christian Andreas Heuer" className="photo" />
        <div>
          <div className="name">Christian Andreas Heuer</div>
          <div className="tagline">Software Developer | Technology Enthusiast</div>
          <div className="description">
            <p>
              Hello there!
              My name is Christian.
              I am a software developer and BSc alumni in Computer Science from RWTH Aachen University.
            </p>
            <p>
              
            </p>
            <p>
              Feel free to take a look at my past projects on this portfolio website of mine.
            </p>
          </div>
          <div className="link-btns">
            <Link to="/projects" className="link-btn">Projects</Link>
            {/* <Link to="/gallery" className="link-btn">Gallery</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}