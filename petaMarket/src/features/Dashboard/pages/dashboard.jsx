import {useSelector} from 'react-redux'
function Dashboard(){
    const token = useSelector((state)=>state.token)
    return <>
        <h1>This Dashboard</h1>
        <p>The token: {token}</p>
    </>
}
export default Dashboard