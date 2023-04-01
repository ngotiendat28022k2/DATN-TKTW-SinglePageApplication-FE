import React from 'react'
import {Link} from "react-router-dom"
const Register = () => {
  return (
    <>
       <div className="py-6">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div 
                    className="hidden lg:block lg:w-1/2 bg-cover h-[610px]" 
                    style={{
                        backgroundImage:"url(https://thumbs.dreamstime.com/b/old-book-flying-letters-magic-light-background-bookshelf-library-ancient-books-as-symbol-knowledge-history-218640948.jpg)",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}
                >
                </div>
                {/* scan form */}
                <div className='w-full p-8 lg:w-1/2 flex justify-between items-start'>
                  <div className="w-full">
                      <div>
                          <img 
                              className='w-full max-w-[120px] m-auto'
                              src="https://logos.textgiraffe.com/logos/logo-name/Niki-designstyle-smoothie-m.png" 
                              alt="" 
                          />
                      </div>
                      <div className="mt-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                          <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email"/>
                      </div>
                      <div className="mt-8">
                          <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Register</button>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                          <span className="border-b w-1/5 md:w-1/4"></span>
                          <Link to="/login" className="text-xs text-gray-500 uppercase">or login</Link>
                          <span className="border-b w-1/5 md:w-1/4"></span>
                      </div>
                  </div>
                  {/* <div className="hidden w-full">
                        <div className="relative bg-white px-6 pt-10 pb-9 mx-auto w-full max-w-lg rounded-2xl">
                          <div class="flex flex-col items-center justify-center text-center space-y-2">
                            <div class="font-semibold text-3xl">
                              <p>Email Verification</p>
                            </div>
                            <div class="flex flex-row text-sm font-medium text-gray-400">
                              <p>We have sent a code to your email ba**@dipainhouse.com</p>
                            </div>
                          </div>
                          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                            <div>
                              <form action="" method="post">
                                <div className="flex flex-col space-y-16 mt-[40px]">
                                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                    <div className="w-16 h-16 ">
                                      <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
                                    </div>
                                    <div className="w-16 h-16 ">
                                      <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
                                    </div>
                                    <div className="w-16 h-16 ">
                                      <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
                                    </div>
                                    <div className="w-16 h-16 ">
                                      <input className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
                                    </div>
                                  </div>

                                  <div className="flex flex-col space-y-5">
                                    <div>
                                      <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                        Verify Account
                                      </button>
                                    </div>

                                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                      <p>Didn't recieve code?</p> <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div> */}
                  {/*  */}
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Register