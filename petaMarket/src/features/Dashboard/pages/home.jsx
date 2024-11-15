// import { useEffect } from 'react'
import {useSelector} from 'react-redux'
function Home(){
    const token = useSelector((state)=>state.token)
    const firstname = useSelector((state)=>state.firstname)
    return <>
        <h1>This Home</h1>
        <p>The token: {token}</p>
        <p>{firstname}</p>
    </>
}
export default Home