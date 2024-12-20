import {useNavigate,Link} from 'react-router-dom'
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
import menu from "../images/icons/menu.png"
import down from "../images/icons/down.png"
import close from "../images/icons/close.png"
import Notification from './components/notificHeader'
import { useState } from 'react'
import UserHeader from './components/userHeader'
import All from './components/All'

export default function Header(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [isAll,setIsAll]=useState(false)
    const handleLogout=()=>{
        dispatch({type:'LOGOUT'})
        navigate('/user/login')
    }
    const [isNotfiOpen,setIsNotfiOpen] = useState(false)
    const NotfiToggleHandle = (status)=>{
        setIsNotfiOpen(status);
    }
    const handleAll=()=>{
        setIsAll(!isAll)
        if(!isAll){
        document.body.style.opacity='30%'
        document.body.style.backgroundColor='black'
        document.body.style.inset=0
        }
        else{
        document.body.style.opacity='100%'
        document.body.style.backgroundColor='white'

        }
    }
    return<>
        <div className="shadow-md border-solid pb-2 md:px-6 px-1" onClick={()=>{
                if(isAll === true){
                    setIsAll(false)
                }
            }}>
            <div className='md:mx-5 flex justify-between mt-5'>
                <div className='flex justify-around gap-3'>
                    <div className='block md:hidden h-7'>
                        <img src={all} alt="cart" className="h-9 w-9" />
                    </div>
                    <div>
                        <Link to='/home' className='flex justify-around'>
                        <img src={peta} alt="petamarket logo" className="w-6 h-6 rounded-full mt-1" />
                        <h1 className='font-bold text-2xl text-[#3182CE]'>etaMarket</h1>
                        </Link>
                    </div>
                </div>
                <div className='md:hidden mr-2'>
                    <img src={menu} alt="Menu icon" className='h-6 w-6' />
                </div>
                <div className='md:w-3/5 md:flex md:justify-end md:gap-[calc(10%)] md:pr-6 hidden'>
                    <div className='hover:bg-gray-100 hover:cursor-pointer hover:rounded-lg relative group'>
                        <button >
                            <img src={notification} alt="notification" className="w-6 mx-5" />
                            <div className='flex justify-around'>
                                <h1>Notification</h1>
                                <img src={down} alt='down' className='w-4 h-4 mt-1'/>
                            </div>
                        </button>
                        <div className='hidden group-hover:block '>
                            <Notification />
                        </div>
                    </div>
                    {/* <div className='hover:bg-[#C1DCFF] hover:cursor-pointer hover:rounded-lg'>
                        <img src={message} alt="message" className="w-6 mx-4" />
                        <h1>Message</h1>
                    </div> */}
                    <div className='hover:text-blue-600 hover:shadow-xl hover:cursor-pointer hover:rounded-lg'>
                        <img src={order} alt="order" className="w-6 mx-2" />
                        <h1>Order</h1>
                    </div>
                    <div className='hover:text-blue-600 hover:shadow-xl hover:cursor-pointer hover:rounded-lg'>
                        <img src={cart} alt="cart" className="w-6" />
                        <h1>Carts</h1>
                    </div>
                    <div className=' group hover:shadow-xl hover:cursor-pointer hover:rounded-lg'>
                        <div className='hover:text-blue-600'>
                            <img src={user} alt="firstname" className="w-6" />
                            <div className='flex justify-around'>
                                <h1>User</h1>
                                <img src={down} alt='down' className='w-4 h-4 mt-1'/>
                            </div>
                        </div>
                        <div className='hidden group-hover:block'>
                            <UserHeader />
                        </div>

                    </div>
                </div>
            </div>
            <div className='ml-1 mr-5 flex justify-between my-3'>
                <div className='md:flex md:justify-around hidden group'>
                    <button className='text-2xl font-bold' onClick={handleAll}>
                        <img src={all} alt="cart" className="h-8 w-8" />
                        <p>All</p>
                    </button>

                </div>
                <div className='flex border-2 border-gray-500 rounded-3xl md:w-3/4 mr-[calc(2%)] gap-3 justify-between'>
                    <div className='border-r-2 w-2/3'>
                        {/* <p className='ml-[calc(10%)] mt-1 text-gray-400'>search for product</p> */}
                        <input type='text' placeholder='search for product' className=' mx-1 px-2 focus:outline-none rounded-lg w-[calc(97%)] md:w-[calc(99%)] mt-1 text-gray-400 h-[calc(80%)]'/>
                    </div>
                    <div className='mt-1 mr-3 '>
                        <img src={filter} alt='filter' className='w-7 '/>
                    </div>
                    <div className='bg-gray-200 w-1/4 rounded-r-3xl'>
                        <div className='flex justfiy-center mt-1 mx-auto w-fit gap-2'>
                        <img src={search} alt='search' className='w-4 h-4 mt-1'/>
                        <p className='hidden md:block'>Search</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        {isAll && <div className="absolute left-0 top-2 w-[calc(30%)] flex justify-around">
            <div className='w-[calc(94%)] bg-slate-100'>
                <All/>
            </div>
            <div  className='h-8 w-8 '>
                <img src={close} alt='close' onClick={handleAll} className='w-6 h-6 hover:w-8 hover:h-8 hover:shadow-gray-500 hover:shadow-lg'/>
            </div>
            
        </div>}
        <br />
        <br />
    </>
}