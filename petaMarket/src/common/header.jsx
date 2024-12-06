import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import all from "../images/icons/all.png"
import cart from "../images/icons/cart.png"
import filter from "../images/icons/filter.png"
import notification from "../images/icons/notification.png"
import order from "../images/icons/order.png"
import peta from "../images/icons/peta.png"
import user from "../images/icons/user.png"
import message from "../images/icons/message.png"
import search from "../images/icons/search.png"

export default function Header(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout=()=>{
        dispatch({type:'LOGOUT'})
        navigate('/user/login')
    }
    return<>
        <div className="shadow-md border-solid pb-2 px-6">
            <div className='mx-5 flex justify-between mt-5'>
                <div className='flex justify-around gap-3'>
                    <img src={peta} alt="petamarket logo" className="w-7 h-7 rounded-full" />
                    <h1 className='font-bold text-2xl text-[#3182CE]'>PetaMarket</h1>
                </div>
                <div className='w-3/5 flex justify-end gap-[calc(10%)] pr-6'>
                    <div className='hover:bg-[#C1DCFF] hover:cursor-pointer hover:rounded-lg'>
                        <img src={notification} alt="notification" className="w-6 mx-5" />
                        <h1>Notification</h1>
                    </div>
                    <div className='hover:bg-[#C1DCFF] hover:cursor-pointer hover:rounded-lg'>
                        <img src={message} alt="message" className="w-6 mx-4" />
                        <h1>Message</h1>
                    </div>
                    <div className='hover:bg-[#C1DCFF] hover:cursor-pointer hover:rounded-lg'>
                        <img src={order} alt="order" className="w-6 mx-2" />
                        <h1>Order</h1>
                    </div>
                    <div className='hover:bg-[#C1DCFF] hover:cursor-pointer hover:rounded-lg'>
                        <img src={cart} alt="cart" className="w-6" />
                        <h1>Carts</h1>
                    </div>
                    <div className='hover:bg-[#C1DCFF] hover:cursor-pointer hover:rounded-lg'>
                        <img src={user} alt="firstname" className="w-6" />
                        <h1>User</h1>
                    </div>
                </div>
            </div>
            <div className='mx-5 flex justify-between my-3'>
                <div className='flex justify-around'>
                    <img src={all} alt="cart" className="h-10 w-10" />
                    <h1 className='text-2xl font-bold'>All</h1>
                </div>
                <div className='flex border-2 border-gray-500 rounded-3xl w-3/4 mr-[calc(2%)] gap-3 justify-between'>
                    <div className='border-r-2 w-2/3'>
                        <p className='ml-[calc(10%)] mt-1 text-gray-400'>search for product</p>
                    </div>
                    <div className='mt-1 mr-3'>
                        <img src={filter} alt='filter' className='w-7 '/>
                    </div>
                    <div className='bg-gray-200 w-1/4 rounded-r-3xl'>
                        <div className='flex justfiy-center mt-1 mx-auto w-fit gap-2'>
                        <img src={search} alt='search' className='w-4 h-4 mt-1'/>
                        <p>Search</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <button onClick={handleLogout}>Logout</button>
        <br />
        <br />
    </>
}