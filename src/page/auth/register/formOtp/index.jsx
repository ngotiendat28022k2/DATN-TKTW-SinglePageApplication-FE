import {useState, useEffect, useRef} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import helper from '../../../../utiliti/helper/helper'
import { register, sendOtp } from '../../../../slice/userSlice'
let indexOTP  = 0
const FormOtp = (props) => {
    const [email, setEMail] = useState(props.email || "")
    useEffect(() => {
      setEMail(props.email)
    }, [props.email])
    const [otp, setOtp] = useState(new Array(6).fill(""))
    const [activeOtpIndex, setActiveOtpIndex] = useState(0)
    const inputRef = useRef(null)
    const navigate = useNavigate();
    const dispatch = useDispatch()

  const handleOnChange = (e) => {
    const value = e.target.value
    const newOtp = [...otp]
    newOtp[indexOTP] = value.substring(value.length-1)
    if(!value) setActiveOtpIndex(indexOTP - 1)
    else setActiveOtpIndex(indexOTP + 1)
    setOtp(newOtp)
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [activeOtpIndex])

  const handleOnKeyDown =async (key, index) => {
    indexOTP = index
    if(key === "Backspace") setActiveOtpIndex(indexOTP - 1)     
  }

  const onHandleVerify =async (event) => {
    event.preventDefault()
    if(otp[otp.length - 1] === "") {
      helper.toast("error")
    }
    const otpString = otp.toString()
    otpString.replaceAll(",","")
      const valOTP = {
        email:email.email,
        otp: otpString.replaceAll(",","")
      }  
      try {
        // console.log(valOTP)
        const {payload} = await dispatch(sendOtp(valOTP))
        if(payload.data.element){
          helper.toast("success", "Successfully OTP")
          setTimeout(() => {
            navigate("/login")
          }, 1500);
        }
        if(payload.data.code >= 400){
           helper.toast("error", payload.data.message)
        }
      } catch (error) {
        helper.toast("error", error)
      }
  }
  const handleResend =async () => {
     const {payload} = await dispatch(register(email))
     console.log(payload);
     if(payload.data.element){
        setOtp(new Array(6).fill(""))
       helper.toast("success", "Reset otp success")
     }
     if(payload.data.code >= 400) {
      helper.toast("error", payload.data.message  )
    }
  }

  return (
     <div className="min-w-[400px] w-[540px]">
                        <div className="relative bg-white px-6 pt-10 pb-9 mx-auto w-full max-w-lg rounded-2xl">
                          <div className="flex flex-col items-center justify-center text-center space-y-2">
                            <div className="font-semibold text-3xl">
                              <p>Email Verification</p>
                            </div>
                            <div className="flex flex-row text-sm font-medium text-gray-400">
                              <p>We have sent a code to your email ba**@dipainhouse.com</p>
                            </div>
                          </div>

                          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                            <div>
                              <form action="" method="post" onSubmit={onHandleVerify}>
                                <div className="flex flex-col space-y-16 mt-[40px]">
                                  <div className="flex items-center justify-between w-full">
                                    {otp.map((_, index) => 
                                      <div className="lg:w-16 lg:h-16 w-10 h-10 " key={index}>
                                          <input 
                                            ref={index === activeOtpIndex ? inputRef : null}
                                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700 px-[5px]" 
                                            type="text" 
                                            name="" 
                                            id="" 
                                            value={otp[index]}
                                            onChange={(e) => handleOnChange(e)}
                                            onKeyDown={(e) => handleOnKeyDown(e, index)}
                                          />
                                      </div>
                                    )}
                                  </div>

                                  <div className="flex flex-col space-y-5">
                                    <div>
                                      <button 
                                        className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm" 
                                      >
                                        Verify Account
                                      </button>
                                    </div>

                                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                      <p>Didn't recieve code?</p> 
                                      <span 
                                        className="cursor-pointer flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer"
                                        onClick={() => handleResend()}
                                      >
                                        Resend
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
  )
}

export default FormOtp