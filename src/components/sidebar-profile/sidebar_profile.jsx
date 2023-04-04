import React from 'react'
const SidebarProfile = () => {
  return (
    <div className='max-w-[200px] w-full border border-solid border-[#e6e6e6] rounded-[2px] bg-[white]'>
        <div className=''>
            <div className='px-[20px] pt-[18px] border-b-[2px] border-solid border-[#f6f6f6]'>
               <p className='uppercase text-[20px] text-[#C92127] font-bold pt-[10px] pr-[15px] pb-[10px]'>tài khoản</p>
            </div>
            <div className='px-[10px] p-[20px]'>
              <div className='border-b-[1px] border-solid border-[#f2f2f2] py-[5px]'>
                  <a className='py-[5px] text-[#333333] text-[14px] font-normal' href="/account/edit">Thông tin tài khoản</a>
              </div> 
              <div className='border-b-[1px] border-solid border-[#f2f2f2] py-[5px]'>
                 <a className='py-[5px] text-[#333333] text-[14px] font-normal' href="/account/address">Sổ địa chỉ</a>
              </div> 
              <div className='border-b-[1px] border-solid border-[#f2f2f2] py-[5px]'>
                  <a className='py-[5px] text-[#333333] text-[14px] font-normal' href="/account/order">Đơn hàng của tôi</a>
              </div> 
              <div className='border-b-[1px] border-solid border-[#f2f2f2] py-[5px]'>
                  <a className='py-[5px] text-[#333333] text-[14px] font-normal' href="/account/voucher">Ví voucher</a>
              </div> 
              <div className='border-b-[1px] border-solid border-[#f2f2f2] py-[5px]'>
                  <a className='py-[5px] text-[#333333] text-[14px] font-normal' href="/account/notification">Thông báo</a>
              </div> 
            </div>
        </div>
    </div>
  )
}

export default SidebarProfile