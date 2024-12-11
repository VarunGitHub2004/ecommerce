
import { jsx } from 'react/jsx-runtime';
import img from '../assets/pexels-valeriya-29465901.jpg'
import { memo, useCallback, useMemo, useState } from 'react';
const Login = () => {
  const [value, setValue] = useState('')
  const countryCodes = [
    { country: "United States", code: "+1" },
    { country: "India", code: "+91" },
    { country: "United Kingdom", code: "+44" },
    { country: "Germany", code: "+49" },
    { country: "Australia", code: "+61" },
    { country: "Canada", code: "+1" },
    { country: "France", code: "+33" },
    { country: "Japan", code: "+81" },
    { country: "China", code: "+86" },
    { country: "Brazil", code: "+55" },
    { country: "Russia", code: "+7" },
    { country: "South Africa", code: "+27" },
    { country: "Mexico", code: "+52" },
    { country: "Italy", code: "+39" },
    { country: "Spain", code: "+34" },
    { country: "Argentina", code: "+54" },
    { country: "Belgium", code: "+32" },
    { country: "Egypt", code: "+20" },
    { country: "Netherlands", code: "+31" },
    { country: "Sweden", code: "+46" },
    { country: "South Korea", code: "+82" },
    { country: "Saudi Arabia", code: "+966" },
    { country: "United Arab Emirates", code: "+971" },
    { country: "Turkey", code: "+90" },
    { country: "Malaysia", code: "+60" },
    { country: "Singapore", code: "+65" },
    { country: "Thailand", code: "+66" },
    { country: "Indonesia", code: "+62" },
    { country: "Vietnam", code: "+84" },
    { country: "Philippines", code: "+63" },
    { country: "Nigeria", code: "+234" },
    { country: "Kenya", code: "+254" },
    { country: "Chile", code: "+56" },
    { country: "Colombia", code: "+57" },
    { country: "Peru", code: "+51" },
    { country: "Pakistan", code: "+92" },
    { country: "Bangladesh", code: "+880" },
    { country: "New Zealand", code: "+64" },
    { country: "Poland", code: "+48" },
    { country: "Ukraine", code: "+380" },
    { country: "Finland", code: "+358" },
    { country: "Norway", code: "+47" },
    { country: "Denmark", code: "+45" }
  ];
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = useCallback((e, index) => {
    const value = e.target.value;
    if (value.length === 1 && !isNaN(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input after entering a value
      if (index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  }, [otp])

  const handleKeyDown = (e, index) => {
    // Handle backspace to focus the previous input
    if (e.key === "Backspace" && otp[index] === "") {
      if (index > 0) {
        document.getElementById(`otp-${index - 1}`).focus();
      }
    }
  };
  const handleChange2 = useCallback((e) => {
    setValue(e.target.value)
  }, [])
  return (
    <div className='flex m-auto w-max'>
      <img src={img} className='w-[25rem]' alt="" />
      <div className='bg-[blue]'>
        <form action="" onSubmit={(e) => { e.preventDefault() }} className='bg-[blue] p-4 flex-col gap-2 flex justify-center items-center h-[80%]'>

          <div className=''>
            <select onChange={(e) => { setValue(e.target.value) }} className='h-full' name="" id="">
              {
                countryCodes.map(c => (
                  <option key={c.country} value={c.code}>{c.code + " " + c.country}</option>
                ))
              }

            </select>

            <input type="tel" minLength={10} defaultValue={value} autoComplete='off' className='p-2' />
          </div>
          <div className="flex justify-center items-center  bg-[blue]">

          </div>
          <button type="submit" className='text-white bg-black rounded-md w-max p-2 font-bold' >Send OTP</button>


        </form>
        <form action="">
          <div className="flex gap-4 m-auto w-max">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                id={`otp-${index}`}
                value={digit}
                maxLength={1}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="w-12 h-12 text-center text-2xl border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            ))}
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button type="submit" className='bg-black text-white p-2 m-2'>Submit</button>
        </form>
      </div>
    </div>

  )
}

export default memo(Login)

