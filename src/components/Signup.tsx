import { Button, FormControl, FormLabel, Input } from '@mui/material'
import { memo, useCallback, useState } from 'react'
import image from '../assets/pexels-valeriya-29465901.jpg'

const Signup = () => {
  const [isDisabled, setIsDisabled] = useState(true)
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
  return (
    <div className='text-black flex w-max m-auto'>
      <img src={image} alt="" className='w-[25rem]' />
      <div className='p-8'>
        <div>
          <FormControl style={{ padding: "8rem" }}>
            <FormLabel htmlFor='fname'>First name</FormLabel>
            <Input type='text' name='fname' />
            <FormLabel htmlFor='lname'>Last name</FormLabel>
            <Input type="text" name="lname" />
            <FormLabel htmlFor='mobile'>Mobile no</FormLabel>
            <Input type="tel" name="mobile" />
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input type="email" name="email" />

            <Button>Send Otp and Submit</Button>
          </FormControl>

        </div>
        <FormControl>
          <div className="flex gap-4 p-2">
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
          <Button disabled>Submit</Button>
        </FormControl>
      </div>

    </div>
  )
}

export default memo(Signup)