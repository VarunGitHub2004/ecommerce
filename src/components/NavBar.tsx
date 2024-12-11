
import { Avatar } from '@mui/material'
import { memo } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BiBell, BiChevronDown, BiDownload, BiHeadphone, BiHeart, BiLogOut } from 'react-icons/bi'
import { BsCoin, BsThreeDotsVertical } from 'react-icons/bs'
import { CgShoppingCart } from 'react-icons/cg'
import { FcAdvertising } from 'react-icons/fc'
import { MdSell } from 'react-icons/md'
import { RiCoupon2Fill } from 'react-icons/ri'
import { RxAvatar } from 'react-icons/rx'
import { TbGiftCard, TbMenuOrder } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className='flex gap-4 bg-black text-white items-center p-4 justify-center'>
      <img src="" alt="logo" />
      <div className='flex  gap-4'>
        <form action="" className='flex w-[35rem] text-black rounded-md items-center bg-[#e8cccc] p-2 gap-2 '>
          <AiOutlineSearch size={20} />
          <input type="text" className='bg-[#e8cccc] w-full outline-none' placeholder='Search for products, brands and more' />
        </form>
        <div className='dropdown'><button className='hover:bg-[blue] hover-button p-1 rounded-md'> <Link to="" className='flex items-center gap-1' ><RxAvatar size={20} /> Login <span className='hover:rotate-180 duration-300'><BiChevronDown size={20} /></span> </Link> </button>
          <ul className="dropdown-list text-black">
            <li className='flex'>New Customer &nbsp;&nbsp;&nbsp;<Link to="/signup">SignUp</Link></li>
            <li className='flex items-center gap-2'><Link className='flex gap-2' to="/home_account/*"><Avatar />My Profile</Link></li>
            <li><Link to="" className='flex items-center gap-2'><BsCoin size={40} /> Supercoin zone</Link></li>
            <li><Link to="" className='flex items-center gap-2'><TbMenuOrder size={40} /> Menu order</Link></li>
            <li><Link to="" className='flex items-center gap-2'><BiHeart size={40} /> Wishlist</Link></li>
            <li><Link to="" className='flex items-center gap-2'><RiCoupon2Fill size={40} /> Coupons</Link></li>
            <li><Link to="" className='flex items-center gap-2'><TbGiftCard size={40} /> Gift Cards</Link></li>
            <li><Link to="" className='flex items-center gap-2'><BiBell size={40} />Notification</Link></li>
            <li><Link to="" className='flex items-center gap-2'><BiLogOut size={40} />Logout</Link></li>
          </ul>
        </div>
        <button ><Link to="" className='flex items-center gap-2'><CgShoppingCart size={20} /> Cart </Link></button>
        <button ><Link className='flex items-center gap-2' to=""><MdSell size={20} /> Become a seller </Link></button>
        <button><div className='dropdown'><button className='hover:bg-[blue] hover-button p-1 rounded-md'> <Link to="" className='flex items-center gap-1' ><BsThreeDotsVertical size={30} /> </Link> </button>
          <ul className="dropdown-list text-black">
            <li><Link to="" className='flex items-center gap-2'><BiBell size={40} />  Notification References</Link></li>
            <li><Link to="" className='flex items-center gap-2'><BiHeadphone size={40} />24x7 Customer care</Link></li>
            <li><Link to="" className='flex items-center gap-2'><FcAdvertising size={40} /> Advertise</Link></li>
            <li><Link to="" className='flex items-center gap-2'><BiDownload size={40} /> Download appv</Link></li>          </ul>
        </div></button>
      </div>
    </header>
  )
}

export default memo(NavBar)