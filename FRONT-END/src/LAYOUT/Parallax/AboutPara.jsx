import { Parallax } from 'react-parallax';
import About from "./assets/about.jpg";


const AboutPara = () => (
  <Parallax bgImage={About} strength={800} className='Image'>
    <div className="content">
    </div>
  </Parallax>
);

export default AboutPara;