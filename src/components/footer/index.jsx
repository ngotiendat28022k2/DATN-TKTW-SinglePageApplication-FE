import React from 'react'
const Footer = () => {
  return (
    <>
        <footer className='max-w-[1280px] w-full m-auto'>
            <div className='bg-PK-client p-[20px] lg:flex lg:justify-center lg:items-center text-center'>
                <div className='flex items-center justify-between max-w-[230px] w-full m-auto text-[#e9e9e9]'>
                    <i className="fa-solid fa-envelope text-[20px]"></i>
                    <h2 className='capitalize text-[20px]'> đăng ký nhập bản tin</h2>
                </div>
                <div className='mt-[20px] lg:mt-0 bg-[#fff] flex justify-between items-center w-full lg:max-w-[650px]'>
                   <div className='w-[80%] ]'>
                    <input 
                        type="email" 
                        className=' pl-[20px] w-full py-[5px] outline-none'
                    /> 
                   </div>
                    <div className='w-[20%]'>
                        <button
                            className='bg-yellow-500 uppercase text-[16px] w-full text-[#efefef] py-[5px]' 
                        >
                            đăng ký
                        </button>
                    </div>
                </div>
            </div>

            <div className='px-[20px] mt-[20px] lg:flex lg:justify-between lg:items-start'>
                <div className='lg:max-w-[30%]'>
                    <ul>
                        <li>
                            <img 
                                src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/logo.png" 
                                alt="" 
                                className='max-w-[250px]'
                            />
                        </li>
                        <li className='mt-[10px] lg:mt-[20px]'>
                            <p className='text-[14px] lg:text-[16px]'>Lầu 5, 387-389 Hai Bà Trưng Quận 3 TP HCMCông Ty Cổ Phần Phát Hành Sách TP HCM - FAHASA60 - 62 Lê Lợi, Quận 1, TP. HCM, Việt Nam</p>
                        </li>
                        <li>
                            <p className='text-[14px] lg:text-[16px] mt-[10px]'>Fahasa.com nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng cũng như tất cả Hệ Thống Fahasa trên toàn quốc.</p>
                        </li>
                        <li>
                            <img 
                                src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/logo-bo-cong-thuong-da-thong-bao1.png" 
                                alt="" 
                                className='max-w-[150px] lg:max-w-[200px] mt-[10px]'
                            />
                        </li>
                        <li>
                            <ul className='lg:mt-[10px] mt-[5px]'>
                                <li className='inline-block ml-[5px]'><img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Insta-on.png" alt="" /></li>
                                <li className='inline-block ml-[5px]'><img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Insta-on.png" alt="" /></li>
                                <li className='inline-block ml-[5px]'><img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Insta-on.png" alt="" /></li>
                                <li className='inline-block ml-[5px]'><img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Insta-on.png" alt="" /></li>
                                <li className='inline-block ml-[5px]'><img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Insta-on.png" alt="" /></li>
                            </ul>
                        </li>
                        <li>
                            <div className='flex justify-between items-center mt-[10px] lg:justify-start'>
                                <img 
                                    className='max-w-[200px] lg:max-w-[150px]'
                                    src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/android1.png" alt="" />
                                <img 
                                    className='max-w-[200px] lg:max-w-[150px] lg:ml-[10px]'
                                    src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/appstore1.png" alt="" />
                            </div>
                        </li>
                    </ul>

                </div>

                <div className='lg:max-w-[68%] lg:w-full mt-[20px] lg:mt-0'>
                    <div className='lg:flex lg:justify-around lg:items-start lg:flex-wrap'>
                        <div className='mt-[10px] lg:mt-[20px]'>
                            <h2 className='uppercase text-[#333] text-[18px] font-medium tracking-wide'>dịch vụ</h2>
                            <ul className='mt-[10px]'>
                                <li className='mt-[5px] hover:text-PK-client hover:list-disc transition ease-in-out delay-150'><a href="">Điều khoản sử dụng</a></li>
                                <li className='mt-[5px] hover:text-PK-client hover:list-disc transition ease-in-out delay-150'><a href="">Chính sách bảo mật thông tin cá nhân</a></li>
                                <li className='mt-[5px] hover:text-PK-client hover:list-disc transition ease-in-out delay-150'><a href="">Chính sách bảo mật thanh toán</a></li>
                            </ul>
                        </div>

                        <div className='mt-[10px] lg:mt-[20px]'>
                            <h2 className='uppercase text-[#333] text-[18px] font-medium tracking-wide'>dịch vụ</h2>
                            <ul className='mt-[10px]'>
                                <li className='mt-[5px] hover:text-PK-client hover:list-disc transition ease-in-out delay-150'><a href="">Điều khoản sử dụng</a></li>
                                <li className='mt-[5px] hover:text-PK-client hover:list-disc transition ease-in-out delay-150'><a href="">Chính sách bảo mật thông tin cá nhân</a></li>
                                <li className='mt-[5px] hover:text-PK-client hover:list-disc transition ease-in-out delay-150'><a href="">Chính sách bảo mật thanh toán</a></li>
                            </ul>
                        </div>

                        <div className='mt-[10px] lg:mt-[20px]'>
                            <h2 className='uppercase text-[#333] text-[18px] font-medium tracking-wide'>dịch vụ</h2>
                            <ul className='mt-[10px]'>
                                <li className='mt-[5px] hover:text-PK-client hover:list-disc transition ease-in-out delay-150'><a href="">Điều khoản sử dụng</a></li>
                                <li className='mt-[5px] hover:text-PK-client hover:list-disc transition ease-in-out delay-150'><a href="">Chính sách bảo mật thông tin cá nhân</a></li>
                                <li className='mt-[5px] hover:text-PK-client hover:list-disc transition ease-in-out delay-150'><a href="">Chính sách bảo mật thanh toán</a></li>
                            </ul>
                        </div>

                    </div>
                    <div>
                        <div><h2 className='text-[20px] uppercase mt-[20px] font-medium'>liên hệ</h2></div>
                        <div className='mt-[10px]'>
                            <ul className='lg:flex lg:justify-around lg:items-center'>
                                <li className='mb-[10px] lg:mb-0'><i className="fa-sharp fa-solid fa-map-location"></i> <span className='text-[#333 lg:text-[16px]'>60-62 Lê Lợi, Q.1, TP. HCM</span></li>
                                <li className='mb-[10px] lg:mb-0'><i className="fa-solid fa-envelope"></i> <span className='text-[#333 lg:text-[16px]'>60-62 Lê Lợi, Q.1, TP. HCM</span></li>
                                <li className='mb-[10px] lg:mb-0'><i className="fa-solid fa-phone"></i> <span className='text-[#333 lg:text-[16px]'>1900636467</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className='hidden lg:block lg:flex lg:justify-between lg:items-center lg:flex-wrap lg:mt-[20px]'>
                        <img className='w-full max-w-[130px] mt-[10px]' src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png" alt="" />
                        <img className='w-full max-w-[130px] mt-[10px]' src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png" alt="" />
                        <img className='w-full max-w-[130px] mt-[10px]' src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png" alt="" />
                        <img className='w-full max-w-[130px] mt-[10px]' src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png" alt="" />
                        <img className='w-full max-w-[130px] mt-[10px]' src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png" alt="" />
                        <img className='w-full max-w-[130px] mt-[10px]' src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/vnpost1.png" alt="" />
                        
                    </div>
                </div>
            </div>

            <div className='py-[20px] text-[#6e6e6e] text-center font-medium'>
                <p>Giấy chứng nhận Đăng ký Kinh doanh số 0304132047 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 20/12/2005, đăng ký thay đổi lần thứ 10, ngày 20/05/2022.</p>
            </div>
        </footer>
    </>
  )
}

export default Footer