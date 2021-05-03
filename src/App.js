import { useState } from 'react';
import Nav from './components/nav/Nav';
import Carousel from './components/carousel/Carousel';





function App() {

  // let detail=' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis mollitia cumque velit? Assumenda blanditiis sit distinctio delectus natus harum officia rem! Cumque doloremque magnam aut delectus quia sapiente quisquam deleniti.'

  const dataObj = {
    heading: "Thailand",
    content:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis totam, non optio quia culpa,
    sapiente, est placeat hic voluptates vel doloremque a dolorem laborum fuga esse quas cumque aliquid soluta.`
  }

  const [heading, setHeading] = useState(dataObj.heading);
  const [details, setDetails] = useState(dataObj.content);
  

  const animation = {

  }

  return (
    <div className="App">
      
      <Nav />

      <div className="content">
        
        <div className="content__left">
          
          <div className="content__line">
            <div className="content__dot content__dot--1  "><span className='content__dot-no'> 1</span></div>
            <div className="content__dot content__dot--2 content__dot--active"><span className='content__dot-no'> 2</span></div>
            <div className="content__dot content__dot--3 "><span className='content__dot-no'> 3</span></div>
            <div className="content__dot content__dot--4 "><span className='content__dot-no'> 4</span></div>
          </div>
          
          <div className="content__info">
          {/* 'content__heading content__heading--animate' */}
            
            <h1 key={heading} className='content__heading content__heading--animate'>{ heading}</h1>
            <p key={details} className="content__details content__details--animate">
              {details}
              
            </p>

            <a href="#" className='btn btn-link'>Explore &nbsp; &rarr;</a>

          </div>

        </div>


        <div className="content__right">
          
          <Carousel setDetails={setDetails} setHeading={ setHeading}/>
          

        </div>
      </div>
    </div>
  );
}

export default App;
