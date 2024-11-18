// import { useEffect } from 'react'
import {useSelector} from 'react-redux'
function Home(){
    const token = useSelector((state)=>state.token)
    const firstname = useSelector((state)=>state.firstname)
    const role = useSelector((state)=>state.role)
    return <>
        <h1>This Home</h1>
        <p>The token: {token}</p>
        <p>{firstname}</p>
        <p>{role}</p>
    </>
}
export default Home