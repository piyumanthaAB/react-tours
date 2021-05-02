
import Nav from './components/nav/Nav';
import Carousel from './components/carousel/Carousel';


function App() {
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
            
            <h1 className="content__heading">Thailand</h1>
            <p className="content__details">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deleniti nostrum sunt molestias autem quod, animi laudantium
              velit tempore assumenda itaque accusantium sequi minus, nobis provident quam nulla veritatis
              officia aliquid!quod, animi laudantium
              velit tempore assumenda itaque accusantium sequi minus, nobis provident quam nulla veritatis
              officia aliquid!
            </p>

            <a href="#" className='btn btn-link'>Explore &nbsp; &rarr;</a>

          </div>

        </div>


        <div className="content__right">
          
          <Carousel />
          

        </div>
      </div>
    </div>
  );
}

export default App;
