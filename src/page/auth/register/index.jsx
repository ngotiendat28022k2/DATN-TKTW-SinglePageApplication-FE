import React, { useState } from 'react'
import { Link } from "react-router-dom"
import {useDispatch} from "react-redux"
import { register } from '../../../slice/userSlice'
import helper from "../../../utiliti/helper/helper"
import FormOtp from "./formOtp/index"
import Popup from "../../../components/AdminComponent/MyPopup/MyPopup";
const Register = () => {
  const dispatch = useDispatch()
  const [openPopup, setOpenPopup] = useState(false);
  const [email, setEMail] = useState({
    email:""
  })
  const handleSubmit =async (event) => {
    event.preventDefault()
    try {
      const {payload} =await dispatch(register(email))
      console.log(payload)
      if(payload.data.element){
        helper.toast("success", "Please check code by email")
        setOpenPopup(true)
      }
      if(payload.data.code >= 400){
        helper.toast("error", payload.data.message)
      }
    } catch (error) {
      helper.toast("error", error)
    }
  }   

  return (
    <>
      <div className="py-6">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover h-[610px]"
            style={{
              backgroundImage: "url(https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg)",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          >
          </div>
          {/* scan form */}
          <div className='w-full p-8 lg:w-1/2 flex justify-between items-start'>
            <form className="w-full" onSubmit={handleSubmit}>
              <div>
                <img
                  className='w-full max-w-[120px] m-auto'
                  src="https://logos.textgiraffe.com/logos/logo-name/Niki-designstyle-smoothie-m.png"
                  alt=""
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                <input 
                  className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" 
                  type="email" 
                  onChange={(event) => setEMail((prev) => ({...prev, email:event.target.value}))}
                />
              </div>
              <div className="mt-8">
                <button
                  className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                >
                  Register
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <Link to="/login" className="text-xs text-gray-500 uppercase">or login</Link>
                <span className="border-b w-1/5 md:w-1/4"></span>
              </div>
            </form>
            <Popup
              title=""
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
            >
              <FormOtp email={email} />
            </Popup>
          </div>

        </div>
      </div>
    </>
  )
}

export default Register