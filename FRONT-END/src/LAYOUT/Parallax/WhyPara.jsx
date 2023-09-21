import { Parallax } from 'react-parallax';
import why from "./assets/why.jpg";

const WhyPara = () => (
  <Parallax bgImage={why} strength={800} className='Image'>
    <div className="content">
      <h3 className="text-white text-left pt-28 pl-40 ml-52 text-3xl w-2/4">
      Grow at your own pace,with a little nudge. Sessions are based on 
      where <br/> you are in your journey, and where you’re going next.
        </h3>
    </div>
  </Parallax>
);

export default WhyPara; 