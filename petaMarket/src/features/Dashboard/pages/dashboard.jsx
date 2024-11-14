import { useEffect } from 'react'
import {useSelector} from 'react-redux'
function Dashboard(){
    const token = useSelector((state)=>state.token)

    console.log("expiry token is: ", expiryToken)
    useEffect(()=>{
    })
    return <>
        <h1>This Dashboard</h1>
        <p>The token: {token}</p>
    </>
}
export default Dashboard