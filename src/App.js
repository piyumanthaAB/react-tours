import { useState } from 'react';
import Nav from './components/nav/Nav';
import Home from './components/Home';
import Contact from './components/Contact';




function App() {
  
  const [backImage, setBackImage] = useState('thailand');

  const styles = {
    backgroundImage: `url('/img/${backImage}-L.jpg')`
    
  }
 

  return (

    

    <div className="App" style={ styles }>
      
      <Nav />
      <Home setBackImage={setBackImage } />
      
    </div>
  );
}

export default App;
