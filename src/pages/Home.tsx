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
              I am a software developer and technology enthusiast.
            </p>
            <p>
              I have always been passionate about computers since a young age and have therefore honed my programming skills as a hobby while going to school.
              Projects I have worked on include little games, websites, and tools.
            </p>
            <p>
              Due to my passion for technology, I decided to study Computer Science at RWTH Aachen University, where I have learned a lot about the theoretical and practical aspects of computer science.
              Now I have graduated as a Bachelor of Science in Computer Science and am looking for new opportunities to grow and learn.
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