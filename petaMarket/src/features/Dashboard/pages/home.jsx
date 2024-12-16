// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
// import axios from 'axios';
import s2 from "../../../images/s2.jpg"
import Discount from '../components/discount'



function Home() {

    return (
        <div>  
            <Discount />
            <div>
                <img 
                    src={s2} // Assuming `inventory.image` has the image filename
                    alt="Inventory Image"
                    />
                <p>Image</p>
            </div>
        </div>
    );
}

export default Home;
