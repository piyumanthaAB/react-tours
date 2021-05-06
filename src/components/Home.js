import { useState } from 'react';
import Carousel from './carousel/Carousel';
const Home = (props) => {
    const dataObj = {
        heading: "Thailand",
        content:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis totam, non optio quia culpa,
        sapiente, est placeat hic voluptates vel doloremque a dolorem laborum fuga esse quas cumque aliquid soluta.`
      }
    
      const [heading, setHeading] = useState(dataObj.heading);
      const [details, setDetails] = useState(dataObj.content);
    //   const [backImage, setBackImage] = useState('thailand');
    
      const [dot_1, setDot_1] = useState(1);
      const [dot_2, setDot_2] = useState(0);
      const [dot_3, setDot_3] = useState(0);
      const [dot_4, setDot_4] = useState(0);
    
      const handleDotState = (dot) => {
        switch (dot) {
          case 0:
            setDot_1(1);
            setDot_2(0);
            setDot_3(0);
            setDot_4(0);
            break;
          case 1:
            setDot_1(0);
            setDot_2(1);
            setDot_3(0);
            setDot_4(0);
            break;
          case 2:
            setDot_1(0);
            setDot_2(0);
            setDot_3(1);
            setDot_4(0);
            break;
          case 3:
            setDot_1(0);
            setDot_2(0);
            setDot_3(0);
            setDot_4(1);
            break;
        
          default:
            break;
        }
        return dot;
      }
      
    
    return (
        <div className="content">
        
        <div className="content__left">
          
          <div className="content__line">
            <div key={Math.random()} className={`content__dot content__dot--1 ${dot_1 ? 'content__dot--active' : ''}`}><span className='content__dot-no'> 1</span></div>
            <div key={Math.random()} className={`content__dot content__dot--2 ${dot_2 ? 'content__dot--active' : ''}`}><span className='content__dot-no'> 2</span></div>
            <div key={Math.random()} className={`content__dot content__dot--3 ${dot_3 ? 'content__dot--active' : ''}`}><span className='content__dot-no'> 3</span></div>
            <div key={Math.random()} className={`content__dot content__dot--4 ${dot_4 ? 'content__dot--active' : ''}`}><span className='content__dot-no'> 4</span></div>
          </div>
          
          <div className="content__info">
          
            
            <h1 key={heading} className='content__heading content__heading--animate'>{ heading}</h1>
            <p key={details} className="content__details content__details--animate">
              {details}
              
            </p>

            <a href="#" className='btn btn-link'>Explore &nbsp; <span>&rarr;  </span> </a>

          </div>

        </div>


        <div className="content__right">
          
          <Carousel handleDotState={handleDotState} setBackImage={props.setBackImage} setDetails={setDetails} setHeading={ setHeading}/>
          

        </div>
      </div>
     );
}
 
export default Home;