import './Home.css';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="card-wrapper">
      <div className="card">
        <div>
          <div className="name">Welcome to my website!</div>
          <div className="description">
            <p>
              Hello there!
              My name is Christian.
              I am a software developer and technology enthusiast.
            </p>
            <p>
              I have always been passionate about computers since a young age and have therefore honed my programming skills as a hobby while going to school.
              Projects I have worked on include little games, websites, and tools.
            </p>
            <p>
              Please feel free to take a look at my past projects on this portfolio website of mine.
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