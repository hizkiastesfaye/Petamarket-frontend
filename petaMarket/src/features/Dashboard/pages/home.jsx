// import { useEffect,useState } from 'react'
// import {useSelector} from 'react-redux'
// import axios from 'axios';
// // import imgg  from "/home/hp/Documents/vscode/Nodejs/Pentamarket/Pentamarket-backend/uploads/john_sm-s9-8-bl-32_1733693639292.jpg"
// function Home(){
//     const token = useSelector((state)=>state.token)
//     const firstname = useSelector((state)=>state.firstname)
//     const role = useSelector((state)=>state.role)
//     const productSku = "sm-s9-8"
//     const invSku = 'sm-s9-8-bl-32'

//     const [inventory, setInventory] = useState(null);

//     useEffect(() => {
//         const fetchInventory = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3004/inventory/get/${productSku}/${invSku}`,{
//                     headers: {
//                         Authorization: `Bearer ${token}`,  // Send token in headers if required
//                     },
//                 });
//                 setInventory(response.data);
//             } catch (error) {
//                 console.error('Error fetching inventory:', error);
//             }
//         };

//         fetchInventory();
//     },[]);

//     if (!inventory) {
//         return <p>Loading...</p>;
//     }

//     return <>
//         <h1>This Home</h1>
//         <p>The token: {token}</p>
//         <p>{firstname}</p>
//         <p>{role}</p>


//         <div>
//             <h2>Inventory Details</h2>
//             <p>SKU: {inventory.invSku}</p>
//             <p>Stock Level: {inventory.invStockLevel}</p>
//             <p>Price: {inventory.price}</p>
//             {inventory.image && (
//                 <img 
//                 src="http://localhost:3000/uploads/john_sm-s9-8-bl-32_1733693639292.jpg" 
//                 alt="image" 
//             />
            
//                 // <img src={`/home/hp/Documents/vscode/Nodejs/Pentamarket/Pentamarket-backend/uploads/john_sm-s9-8-bl-32_1733693639292.jpg`} alt='image' />
//                 // <img
//                 //     src={`data:image/jpeg;base64,${inventory.image}`}
//                 //     alt="Inventory"
//                 //     style={{ width: '200px', height: '200px' }}
//                 // />
//             )}
//         </div>
//     </>
// }
// export default Home


import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Home() {
    const token = useSelector((state) => state.token);
    const firstname = useSelector((state) => state.firstname);
    const role = useSelector((state) => state.role);
    // const productSku = "sm-s9-8";
    // const invSku = 'sm-s9-8-bl-32';
    const imageName = 'john_sm-s9-8-bl-32_1733693639292.jpg'

    const [inventory, setInventory] = useState(null);

    useEffect(() => {
        const fetchInventory = async () => {
            try {
                const response = await axios.get(`http://localhost:3004/inventory`);
                setInventory(response.data);
                console.log(response)
            } catch (error) {
                console.error('Error fetching inventory:', error);
            }
        };

        fetchInventory();
    }, []);

    if (!inventory) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>This Home</h1>
            <p>The token: {token}</p>
            <p>{firstname}</p>
            <p>{role}</p>

            <div>
                <h2>Inventory Details</h2>
                <p>SKU: {inventory.invSku}</p>
                <p>Stock Level: {inventory.invStockLevel}</p>
                <p>Price: {inventory.price}</p>
                <img 
                    src={`http://localhost:3004/${imageName}`} // Assuming `inventory.image` has the image filename
                    alt="Inventory Image" 
                    />
                <p>Image</p>
            </div>
        </>
    );
}

export default Home;
