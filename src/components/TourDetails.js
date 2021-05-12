import { useParams } from "react-router";
import { BsFillPeopleFill, BsCompass, BsStopwatchFill,BsFillBookmarkFill,BsGeoAlt  } from "react-icons/bs";
import { BiDollarCircle} from "react-icons/bi";
import { FiShoppingCart} from "react-icons/fi";
import { CgDollar} from "react-icons/cg";
import { useState } from "react";

import NotFound from './NotFound';

import {Redirect } from 'react-router-dom';


// BsFillPeopleFill,BsCompass,BsStopwatchFill,BiDollarCircle

const TourDetails = (props) => {

    const { tour } = useParams()

    const tours = ['thailand','bali','kerala','indonesia'];

  
    
    props.setNavActive('none');
    props.setBackImage(`${tour}-tour`);

    const [descImage, sestDescImage] = useState(`${tour}-tour-desc`)
    
    const styles = {
        backgroundImage: `url('/img/${descImage}-L.jpg')`
        
    }
    if (!tours.includes(tour)) {
        // console.log(tour);
        return (
            // <Redirect from='*' to='/404' />
            <NotFound setBackImage={props.setBackImage} setNavActive={ props.setNavActive}/>
        )
    }
    return (
        <div className='tour-details'>
            <div className="tour-details__container tour-details__container--animated">
                
                <div className="tour-details__left">
                    
                    <h1 className="tour-details__heading">{tour.charAt(0).toUpperCase()+tour.slice(1)} </h1>
                    {/* <h1 className="tour-details__heading">Island</h1> */}
                    <p className="tour-details__description">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia nam eligendi, a iusto odit dicta facilis,
                        similique nisi in officiis possimus enim delectus assumenda ducimus sequi,
                    </p>
                </div>

                <div className="tour-details__right">
                    <div className="tour-details__img" style={styles}></div>
                    <div className="tour-details__icons">
                        <p className="tour-details__icon"><BsFillPeopleFill />&nbsp; 5 People</p>
                        <p className="tour-details__icon"><BsCompass />&nbsp; Easy</p>
                        <p className="tour-details__icon"><BsStopwatchFill />&nbsp; 2 Days</p>
                        <p className="tour-details__icon"><CgDollar />&nbsp; 10 Per Person</p>
                    </div>
                    <button className="btn btn--book">Book Now ! <FiShoppingCart className='btn--book-icon' /></button>
                </div>

            </div>
            
            
        </div>
     );
}
 
export default TourDetails;