import { useState } from 'react';
import Nav from './components/nav/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Blog from './components/Blog';
import TourDetails from './components/TourDetails';

import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';




function App() {
  
  const [backImage, setBackImage] = useState('thailand');
  const [navActive, setNavActive] = useState('tours')
  
  console.log(backImage);

  const styles = {
    backgroundImage: `url('/img/${backImage}-L.jpg')`
    
  }

  

  const videoStyle = {
    display:'none'
  }
 
  return (
    <Router>

      <div  className="App" style={styles}>
        
        {/* <div className="App__bg-video" style={backImage && videoStyle}>
          
          <video  className="bg-video__content" autoPlay muted loop>
              <source src="/img/video/video_2.mp4" type="video/mp4"></source>    
              <source src="/img/video/video_2.webm" type="video/webm"></source>  
              Your browser is not supported!  
          </video>
        </div> */}
      
        <Nav navActive={ navActive}/>

      <Switch>
            <Route exact path='/'>
              <Home setNavActive={setNavActive} setBackImage={setBackImage} />
          </Route>
          <Route exact path='/contact'>
              <Contact setNavActive={setNavActive} setBackImage={setBackImage} /> 
          </Route>
          <Route exact path='/blog'>
              <Blog setNavActive={setNavActive} setBackImage={setBackImage}/> 
            </Route>
            <Route exact path='/:tour'>
              <TourDetails  setNavActive={setNavActive} setBackImage={setBackImage} />
            </Route>
            
            
            <Route exact path='/404' component={() => {
              return (
                <NotFound setNavActive={setNavActive} setBackImage={setBackImage}/>
              )
              }} />

            <Redirect from='*' to='/404' />
          
          </Switch>
      
      
      </div>
      </Router>
  );
}

export default App;
