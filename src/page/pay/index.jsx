import React from 'react'
import "./index.css"
const PagePay = () => {
    return (
        <div>
            <div className='bg-white md:m-5 m-3'>
                <div className='md:p-5 p-3'>
                    <div className='font-bold text-lg p-2'>
                        ĐỊA CHỈ GIAO HÀNG
                    </div>
                    <div className='mx-2 border-b-2'></div>
                    <div className='p-2'>
                        <form action="">
                            <div className='md:flex md:my-2'>
                                <div className='md:w-52 p-1'>
                                    <label className=''>Họ và tên người nhận</label>
                                </div>
                                <div className=''>
                                    <input type="text" className='input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg' placeholder='Nhập họ và tên người nhận' />
                                </div>
                            </div>
                            <div className='md:flex md:my-2'>
                                <div className='md:w-52 p-1'>
                                    <label className=''>Email</label>
                                </div>
                                <div className=''>
                                    <input type="email" className='input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg' placeholder='Nhập email' />
                                </div>
                            </div>
                            <div className='md:flex md:my-2'>
                                <div className='md:w-52 p-1'>
                                    <label className=''>Số điện thoại</label>
                                </div>
                                <div className=''>
                                    <input type="text" className='input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg' placeholder='Ví dụ: 0976890xxx (10 ký tự)' />
                                </div>
                            </div>
                            <div className='md:flex md:my-2'>
                                <div className='md:w-52 p-1'>
                                    <label className=''>Quốc gia</label>
                                </div>
                                <div className=''>
                                    <input type="text" className='input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg' value="Việt Nam" />
                                </div>
                            </div>
                            <div className='md:flex md:my-2'>
                                <div className='md:w-52 p-1'>
                                    <label className=''>Tỉnh/Thành Phố</label>
                                </div>
                                <div className=''>
                                    <input type="text" className='input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg' />
                                </div>
                            </div>
                            <div className='md:flex md:my-2'>
                                <div className='md:w-52 p-1'>
                                    <label className=''>Quận/Huyện</label>
                                </div>
                                <div className=''>
                                    <input type="text" className='input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg' />
                                </div>
                            </div>
                            <div className='md:flex md:my-2'>
                                <div className='md:w-52 p-1'>
                                    <label className=''>Phường/Xã</label>
                                </div>
                                <div className=''>
                                    <input type="text" className='input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg' />
                                </div>
                            </div>
                            <div className='md:flex md:my-2 my-2'>
                                <div className='md:w-52 p-1'>
                                    <label className=''>Địa chỉ nhận hàng</label>
                                </div>
                                <div className=''>
                                    <input type="text" className='input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='bg-white md:m-5 m-3'>
                <div className='md:p-5 p-3'>
                    <div className='font-bold text-lg p-2'>
                        PHƯƠNG THỨC VẬN CHUYỂN
                    </div>
                    <div className='mx-2 border-b-2'></div>
                    <div className='px-2 my-3'>
                        <div className='flex'>
                            <input type="radio" className='w-5 h-5 mt-[2px]' />
                            <div className='font-bold text-base pl-2 h-6'>Giao hàng tiêu chuẩn: 20.000 đ</div>
                        </div>
                        <div className='text-sm px-7 py-1'>Thứ Sáu - 07/04</div>
                    </div>
                </div>
            </div>

            <div className='bg-white md:m-5 m-3'>
                <div className='md:p-5 p-3'>
                    <div className='font-bold text-lg p-2'>
                        PHƯƠNG THỨC THANH TOÁN
                    </div>
                    <div className='mx-2 border-b-2'></div>
                    <div className='p-2'>
                        <div className='flex my-3'>
                            <input type="radio" className='w-5 h-5 mt-[2px]' />
                            <img className='ml-2' src="https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_vnpay.svg?q=102103" alt="" />
                            <div className='text-base pl-2 h-6'>VNPAY</div>
                        </div>
                        <div className='flex'>
                            <input type="radio" className='w-5 h-5 mt-[2px]' />
                            <img className='ml-2' src="https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_cashondelivery.svg?q=102103" alt="" />
                            <div className='text-base pl-2 h-6'>Thanh toán bằng tiền mặt khi nhận hàng</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white md:m-5 m-3'>
                <div className='md:p-5 p-3'>
                    <div className='font-bold text-lg p-2'>
                        MÃ KHUYẾN MÃI/MÃ QUÀ TẶNG
                    </div>
                    <div className='mx-2 border-b-2'></div>
                    <div className='p-2'>
                        <div className='flex my-3'>
                            <label className='mr-10 leading-8'>Mã KM/Quà tặng</label>
                            <div>
                                <input type="text" className='input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[320px] rounded-lg' placeholder='Nhập mã khuyến mãi/Quà tặng' />
                                <span className='bg-[#2F80ED] p-1 border border-inherit h-4 rounded-md md:ml-[-14%] ml-[-25%] font-bold text-[#FFFF]'>Áp dụng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white md:m-5 m-3'>
                <div className='md:p-5 p-3'>
                    <div className='font-bold text-lg p-2'>
                        KIỂM TRA LẠI ĐƠN HÀNG
                    </div>
                    <div className='mx-2 border-b-2'></div>
                    <div className='p-2'>
                        <div className=''>
                            <div className='flex'>
                                <div className=''>
                                    <img className='w-36 h-36' src="https://cdn0.fahasa.com/media/catalog/product//t/d/tdcsvnsh.jpg" alt="" />
                                </div>
                                <div className='md:flex'>
                                    <div className='lg:w-[650px] md:w-[300px] w-[300px]'>Thay Đổi Cuộc Sống Với Nhân Số Học</div>
                                    <div className='w-20'>
                                        <div>198.400 đ</div>
                                        <div className='text-[#bfbfbf] line-through'>248.000 đ</div>
                                    </div>
                                    <div className='w-20 md:text-center flex md:justify-center'>
                                        <div className='md:hidden block'>Số lượng: </div>
                                        <div>1</div>
                                    </div>
                                    <div className='w-20 text-[#F39801] font-bold'>198.400 đ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white md:m-5 m-3'>
                <div className='md:p-5 p-3'>
                    <div className='mx-2 mb-4'>
                        <div>
                            <div className='flex md:justify-end mb-1 justify-between'>
                                <div>Thành tiền</div>
                                <div className='text-right w-40'>198.400 đ</div>
                            </div>
                            <div className='flex md:justify-end justify-between mb-1'>
                                <div>Phí vận chuyển (Giao hàng tiêu chuển)</div>
                                <div className='text-right w-40'>20.000 đ</div>
                            </div>
                            <div className='flex md:justify-end justify-between mb-1'>
                                <div className='font-bold'>Tổng số tiền (Gồm VAT)</div>
                                <div className='font-bold text-lg text-[#F39801] text-right w-40'>216.400 đ</div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-2 border-b-2'></div>
                    <div className='flex mx-2 py-5 md:justify-between justify-center'>
                        <div className='md:flex hidden mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left w-8 h-8" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                            <div className='ml-3 font-bold pt-1'>Quay về giỏ hàng</div>
                        </div>
                        <div className='flex'>
                            <button className='font-bold text-[#FFFF] bg-red-600 p-3 w-72 rounded-lg'>Xác nhận thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PagePay;