import { Avatar, Button, FormControl, FormLabel, Input, Select, TextareaAutosize } from '@mui/material'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { LuLogOut } from 'react-icons/lu'
import { MdPayment } from 'react-icons/md'
import { PiPlus } from 'react-icons/pi'
import { TbMenuOrder } from 'react-icons/tb'
import { Link, Route, Routes } from 'react-router-dom'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
const Profile = ({ name = "varun", mobile = "6376074365" }) => {
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const getLocation=useCallback(()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
    },[])

   const showPosition=useCallback( (position)=> {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        console.log(typeof position)
    },[])
    return (
        <div className='flex p-4 m-auto w-[80%] bg-[#eeeaea] gap-8'>
            <aside className='w-[20%] flex flex-col gap-4'>
                <div className='flex gap-2 p-2 bg-white '>
                    <Avatar />
                    <div className='flex flex-col gap-1'>
                        <span className="text-[gray]">Home,</span>
                        <span>{name}</span>
                    </div>
                </div>
                <div className='p-2 bg-white'>
                    <span className='flex'><TbMenuOrder size={30} color='blue' /> &nbsp;&nbsp;&nbsp;&nbsp;  MY ORDERS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to="">&gt;    </Link></span>
                    <br />
                    <hr />
                    <span className='flex'><CgProfile size={30} color='blue'></CgProfile> &nbsp;&nbsp;&nbsp;&nbsp; <span className='flex'>Account Settings</span>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
                    <div className='flex flex-col p-4 gap-2  '>
                        <Link to="/home_account/account" className='hover:text-[white] active:text-[blue] p-2 hover:bg-[rgba(0,0,255,0.2)]'> <span>Profile Information</span></Link>
                        <Link to="/home_account/addresses" className='hover:text-[white] active:text-[blue] p-2 hover:bg-[rgba(0,0,255,0.2)]'> <span>Manage Addresses</span></Link>
                        <Link to="/home_account/pancard" className='hover:text-[white] active:text-[blue] p-2 hover:bg-[rgba(0,0,255,0.2)]'><span>PAN Card Information</span></Link>
                    </div>
                    <hr />
                    <span className='flex'><MdPayment size={30} color='blue'></MdPayment> &nbsp;&nbsp;&nbsp;&nbsp; <span className='flex'>Payments</span>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>

                    <div className='flex flex-col p-4 gap-2  '>
                        <Link to="/home_account/account" className='hover:text-[white] active:text-[blue] p-2 hover:bg-[rgba(0,0,255,0.2)]'> <span className='flex justify-between'>My Coupons </span></Link>
                        <Link to="/home_account/addresses" className='hover:text-[white] active:text-[blue] p-2 hover:bg-[rgba(0,0,255,0.2)]'> <span>My Reviews and My Ratings</span></Link>
                        <Link to="/home_account/pancard" className='hover:text-[white] active:text-[blue] p-2 hover:bg-[rgba(0,0,255,0.2)]'><span>All notification</span></Link>
                        <Link to="/home_account/pancard" className='hover:text-[white] active:text-[blue] p-2 hover:bg-[rgba(0,0,255,0.2)]'><span>My Wishlist</span></Link>
                    </div>
                    <hr />
                    <span className='flex'><LuLogOut size={30} color='blue'></LuLogOut> &nbsp;&nbsp;&nbsp;&nbsp; <span className='flex'>Logout</span>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>

                </div>

            </aside>
            <div className='w-[80%]'>
                <PCI />
                <Routes>

                    <Route path='/home_account/account' element={<AccountComponent />} />
                    <Route path='/home_account/addresses' element={<ManageAddresses />} />
                    <Route path='/home_account/pancard' element={<PCI />} />
                </Routes>
            </div>

        </div>
    )
}

const AccountComponent = () => {
    const [isDisabled, setIsDisabled] = useState(true)
     
    return (
        <div className='bg-white p-4'>

            <FormControl>
                <FormLabel disabled={isDisabled} htmlFor='my_name'>
                    Personal Information &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;<button onClick={() => { setIsDisabled(!isDisabled) }} className='text-[blue] text-small'>{isDisabled ? 'Edit' : 'Cancel'}</button>
                </FormLabel>
                <div className='flex gap-2'>
                    <Input disabled={isDisabled} type='text' placeholder='First name' name='my_name' />
                    <Input disabled={isDisabled} type='text' placeholder='Second name' name='my_name' />
                    {!isDisabled && <Button style={{ background: "blue", color: "white" }} >Save</Button>}
                </div>
                <br />
                <FormLabel disabled={isDisabled} htmlFor='gender'>
                    Your Gender &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;<button onClick={() => { setIsDisabled(!isDisabled) }} className='text-[blue] text-small'>{isDisabled ? 'Edit' : 'Cancel'}</button>
                </FormLabel>
                <div className='flex gap-4'>
                    <div className='flex items-center'>
                        <FormLabel disabled={isDisabled} htmlFor='gender'>Male</FormLabel>
                        <Input disabled={isDisabled} name='gender' type='radio' />
                    </div>
                    <div className='flex items-center'>
                        <FormLabel disabled={isDisabled} htmlFor='gender'>Female</FormLabel>
                        <Input disabled={isDisabled} name='gender' type='radio' />
                    </div>
                    {!isDisabled && <Button style={{ background: "blue", color: "white" }} >Save</Button>}
                </div>
                <br />
                <FormLabel disabled={isDisabled}>Email Address  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; <button onClick={() => { setIsDisabled(!isDisabled) }} className='text-[blue] text-small'>{isDisabled ? 'Edit' : 'Cancel'}</button></FormLabel>
                <Input disabled={isDisabled} type='email' />
                <br />
                {!isDisabled && <Button style={{ background: "blue", color: "white", width: "max-content" }} >Save</Button>}
                <br />
                <FormLabel disabled={isDisabled}>Mobile number &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={() => { setIsDisabled(!isDisabled) }} className='text-[blue] text-small'>{isDisabled ? 'Edit' : 'Cancel'}</button></FormLabel>
                <Input disabled={isDisabled} type="tel" name="" id="" />
                <br />
                {!isDisabled && <Button style={{ background: "blue", color: "white", width: "max-content" }} >Save</Button>}
                <br />
            </FormControl>
            <h1 className='font-bold'>FAQs</h1>
            <br />
            <strong>What happens when I update my email address (or mobile number)?
            </strong>
            <br />
            <br />
            <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).</p>
            <br />
            <strong>When will my  account be updated with the new email address (or mobile number)?</strong>
            <br />
            <br />
            <p>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
            <br />
            <strong>What happens to my existing  account when I update my email address (or mobile number)?</strong>
            <br />
            <br />
            <p>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.</p>
            <br />
            <strong>Does my Seller account get affected when I update my email address?</strong>
            <br />
            <br />
            <p>It has a 'single sign-on' policy. Any changes will reflect in your Seller account also.</p>
            <br /> <br /> <br />
            <Link to="" className='text-[blue] font-bold'>Deactivate account</Link>
            <br />
            <br />
            <br />
            <Link to="" className='text-[gray] font-bold'>Delete account</Link></div>
    )
}

interface objInterface{
    name:String,
    mobile:Number,
    pincode:Number,
    locality:String,
    address:Number,
    city:String,
    state:String
}
const initialFormState:objInterface={
name:'',
mobile:NaN,
pincode:NaN,
locality:'',
address:NaN,
city:'',
state:''
}
const ManageAddresses = ({ name = "varun", mobile = "6376074365", pincode = 302012 }) => {
    const [isDisabled, setIsDisabled] = useState(true)
    const [isEditing,setIsEditing]=useState(false)
    const [isAddingAddress,setIsAddingAddress]=useState(false)
    const [formState,setFormState]=useState(initialFormState)
    var handleChange=(e)=>{
            setFormState({...formState,[e.target.name]:e.target.value})
            console.log(formState)
    var count:number=1
     console.log("Hii",count++)

     }
     const handleSubmit=useCallback((e)=>{
        e.preventDefault()
            console.log(formState)
     },[]) 
     const states = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal"
      ];
      
 
    const Hello = () => {
        return (
            <div className='p-4 border-2 my-4'>
                {isEditing && <h1>Editing new Address...</h1>}
                {isAddingAddress && <h1>"Adding new Adress ..."</h1> }
                <h1 className='text-[blue]'>ADD A NEW ADDRESS</h1>
                <br />
                <button className='text-white bg-blue-800 flex gap-2 p-4'><CiLocationOn color="white" /> Use my currect location</button>
                <br />
                <form onChange={handleChange} onSubmit={handleSubmit}  style={{ padding: 16 }} className='flex flex-col gap-4 bg-[#e8e2e2]'>
                    <div className='flex gap-2'>
                        <Input onChange={handleChange} type="text" name='name' placeholder='Name' />
                        <Input onChange={handleChange} type="tel" name='mobile' placeholder='10-digit mobile number' />
                    </div>
                    <div className='flex gap-2'>
                        <Input onChange={handleChange} type="number" name='pincode' placeholder='Pincode' />
                        <Input onChange={handleChange} type="tel" name='locality' placeholder='Locality' />
                    </div>
                    <textarea placeholder='Address(Area  and Street)' className='border-b resize-none border-blue-500 outline-none p-4' />
                    <div className='flex gap-2'>
                        <Input onChange={handleChange} type="text" name='city' placeholder='City/District/Town' />
                        <FormLabel htmlFor='state'>--Select State--</FormLabel>
                        <Select onChange={handleChange} type="tel" name='state' value="--State--">
                            {
                                states.map(s=>(
                                  <option key={s} onChange={handleChange} className='border-2 p-2' value={s}>{s}</option>
                                ))
                            }
                        </Select>
                    </div>
                    <div>
                        <FormLabel htmlFor='address'>Address Type</FormLabel>
                        <div className='flex gap-2'>
                            <input onChange={handleChange} type="radio"  name='address' /> <FormLabel>Home</FormLabel>
                            <input onChange={handleChange} type="radio" name='address' /><FormLabel>Work</FormLabel>
                        </div>

                    </div>
                    <div className="flex gap-2">
                        <button onSubmit={handleSubmit} className='text-white bg-[blue] p-3'>Save</button>
                        <button className='text-[blue]'>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
    return (

        <div className='bg-white p-4 flex flex-col'>
            <h1 className='font-bold text-lg'> Manage Addresses</h1>
            <br />
            <Button onClick={()=>{setIsDisabled(!isDisabled)
                setIsAddingAddress(!isAddingAddress)
                setIsEditing(false)
                console.log(isAddingAddress)
            }} style={{ border: "2px solid blue" }} className='text-[blue] w-full border-2 border-[blue]'> <PiPlus size={20} />  &nbsp;&nbsp;&nbsp;&nbsp; ADD A NEW ADDRESS</Button>
            <br />
            <div className='border-2 flex border-black p-4'>
                <div >
                    <span className='block p-2 text-small bg-[gray] w-max text-[lightgray]'>HOME</span>
                    <br />
                    <h1 className='font-bold'>{name}&nbsp;&nbsp;&nbsp;&nbsp;{mobile}</h1>
                    <br />
                    <address>35,durga vihar,, Pawanpuri-f, Nadi ka Phatak, Benad Road, Jhotwara, Jaipur, Rajasthan - <strong>302012</strong></address>
                </div>
                <div className="relative inline-block text-left">

                    <button className='inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none'><BsThreeDotsVertical size={25} cursor='pointer' /></button>
                    <div
                        style={{ margin: -40 }}
                        className="absolute left-0 top-[20] w-56 mt-[-8] bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-200">
                        <div className="py-1">
                            <Link onClick={() =>{ setIsDisabled(!isDisabled)
                                setIsEditing(!isEditing)
                                setIsAddingAddress(false)
                                console.log("isEditing "+isEditing)
                            }} to="#" className="block px-4 py-2 text-sm text-blue-700  hover:bg-gray-100">Edit</Link>
                            <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete</Link>
                        </div>
                    </div>
                </div>
            </div>
            {isDisabled && <Hello />}
        </div>
    )
}

const   PCI=()=>{
    const fileRef=useRef('')
    var acceptType=
    useEffect(()=>{
        //  acceptType=fileRef.current.children[0].accept
        if(fileRef.current.value!=undefined)
        var extension=fileRef.current.value.split('.')[0]
        console.log(extension)
    },[])

    return (
        <div>
            <h1 className='text-2xl font-bold'>PAN Card Information</h1>
            <FormControl>
                <Input placeholder='PAN Card Number'/>
                <Input placeholder='Full Name'/>
                <Input ref={fileRef} placeholder='Upload PAN Card (Only JPEG file is allowed)' type='file' inputProps={{accept:"image/png"}}/>
'                
            </FormControl>
        </div>
    )
}


export default memo( Profile)