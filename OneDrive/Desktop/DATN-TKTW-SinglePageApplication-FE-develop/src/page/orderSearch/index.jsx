import React from 'react'


const OrderSearch = () => {
  return (
<div className='m-0 box-border'>
    <div className="container m-[auto] lg:w-[1180px] lg:h-[754px] lg:pt-[50px]">
      <div className="mainbox2 lg:w-[1180px] lg:h-[687px]">
        <div className="profile-title-main-mb w-[100%] h-[55px] bg-[#087b44] flex items-center justify-center lg:hidden">
          <span className="profile-title text-[white] text-[18px] uppercase font-medium lg:hidden">Đơn hàng của tôi</span>
        </div>
        <div className='hidden lg:block lg:pb-[30px] '>
          <span className=' lg:text-[14px] lg:font-medium lg:text-[#6d6d6d]'>Trang chủ &gt; </span>  <span className=' lg:font-semibold lg:pl-[10px] lg:text-[14px] lg:text-[#202020]'>Đơn hàng</span>
          <span className="profile-rs lg:block lg:text-[#24890B] lg:pb-[5px] lg:text-[21px] lg:border-b lg:border-b-[#bcbcbc] border-dashed lg:font-normal lg:pt-2">Đơn hàng</span>
        </div>
        <div className="content-main  px-[15px] pb-[20px] lg:w-[1111px] lg:h-[auto] lg:p-[20px] lg:border-solid lg:border lg:border-[#dfdfdf] lg:m-0 lg:rounded-t-[5px]">
          <form action="">
            <div className="profile-title-main-pc lg:pb-[10px]">
              <span className="profile-title hidden lg:text-[22px] lg:font-semibold lg:whitespace-nowrap lg:block lg:text-[#147446] lg:border-b-[1px] lg:border-dashed lg:border-[#c6c6c6]">Đơn hàng của tôi</span>
            </div>
            <div className="content px-[15px] inline-block w-[100%] pt-[10px]">
              <div className="input-data-profile py-[5px] lg:pb-[7px] pb-[20px]">
                <label className="input-title-profile block pb-[7px] font-semibold  lg:hover:cursor-pointer lg:block lg:text-[13.4px] lg:font-bold lg:text-[#4B4A44] lg:w-[160px] lg:h-[16px] lg:py-[6px] lg:float-left" htmlFor="time_order_search">Thời gian</label> 

                 {/* **************************************************************************************************************/}
                 {/* Tùy chọn value select option ở đây*/}
                 {/* **************************************************************************************************************/} 

                  <select className=' w-[100%] p-[10px] border-solid border border-[#b8b8b8] text-[#464646] text-[16px] rounded-[7px] lg:font-medium  lg:w-[170px] lg:rounded-[3px] lg:p-[6px] lg:border-solid lg:border lg:border-[#CDCDCD] lg:text-[14px] lg:pl-[5px] lg:focus:outline-[1px] lg:focus:outline lg:focus:outline-[#48b7fc] lg:cursor-pointer' name="" id="time_order_search">      
                  <option  className='text-[12px] ' value="">Tất cả</option>
                  <option  className='text-[12px] ' value="" disabled>============</option>
                  <option  className='text-[12px]' value="">Ngày hôm nay</option>
                  <option  className='text-[12px]' value="">Tuần này</option>
                  <option  className='text-[12px]' value="">Tháng này</option>
                  <option  className='text-[12px]' value="" disabled>============</option>
                  <option  className='text-[12px]' value="">24 giờ qua</option>
                  <option  className='text-[12px]' value="">7 ngày qua</option>
                  <option  className='text-[12px]' value="">30 ngày qua</option>
                  <option  className='text-[12px]' value="" disabled>============</option>
                  <option  className='text-[12px]' value="">Khác</option>
                  </select>

                 {/* **************************************************************************************************************/}
                 {/*Kết thúc tùy chọn value select option ở đây*/}
                 {/* **************************************************************************************************************/}

              </div>

          

              <div className="input-data-profile pb-[23px] py-[5px] lg:pb-[7px] box-border">
                <label className="input-title-profile block pb-[7px] font-semibold  lg:hover:cursor-pointer  lg:block lg:text-[13.4px] lg:font-bold lg:text-[#4B4A44] lg:w-[160px] lg:h-[16px] lg:py-[6px] lg:float-left" htmlFor="choose_date_order_search">Chọn ngày <span className='hidden lg:inline-block'>từ</span></label>
                <span className='inline-block font-medium pr-3 lg:hidden lg:pl-[0.7px] lg:pr-[0.7px] lg:text-[#464646] lg:text-[13.4px]'>Từ</span>

            {/* **************************************************************************************************************/}
            {/* Input chọn TỪ ngày bao nhiêu để xem thông tin đơn hàng ở đây*/}
            {/* **************************************************************************************************************/}

                <input
                  type="date"
                  id="choose_date_order_search"
                  className="input-witdh inline-block w-[90%] p-[10px] border-solid border border-[#b8b8b8] text-[#464646] text-[16px] rounded-[7px]  lg:w-[260px] lg:rounded-[3px] lg:p-[6px] lg:border-solid lg:border lg:border-[#CDCDCD] lg:text-[14px] lg:pl-[5px] lg:focus:outline-[1px] lg:focus:outline lg:font-medium lg:focus:outline-[#48b7fc] "
                />
            {/* **************************************************************************************************************/}
            {/* KẾT THÚC Input chọn TỪ ngày bao nhiêu để xem thông tin đơn hàng */}
            {/* **************************************************************************************************************/}

                <br className='lg:hidden' /> <br className='lg:hidden'/>
                <span className='hidden lg:inline lg:pl-[0.7px] lg:pr-[0.7px] lg:text-[#464646] lg:text-[13.4px]'> đến </span>
                <span className='inline-block lg:hidden lg:pl-[0.7px] lg:pr-[0.7px] pr-3 lg:text-[#464646] lg:text-[13.4px] font-medium'>Đến</span>

            {/* **************************************************************************************************************/}
            {/* Input chọn ĐẾN ngày bao nhiêu để xem thông tin đơn hàng ở đây*/}
            {/* **************************************************************************************************************/}

                 <input
                  type="date"
                  id="choose_date_order_search"
                  className="input-witdh inline-block w-[87%] p-[10px] border-solid border border-[#b8b8b8] text-[#464646] text-[16px] rounded-[7px]  lg:w-[260px] lg:rounded-[3px] lg:p-[6px] lg:border-solid lg:border lg:border-[#CDCDCD] lg:text-[14px] lg:pl-[5px] lg:focus:outline-[1px] lg:font-medium lg:focus:outline lg:focus:outline-[#48b7fc] "
                />

            {/* **************************************************************************************************************/}
            {/* KẾT THÚC Input chọn ĐẾN ngày bao nhiêu để xem thông tin đơn hàng ở đây*/}
            {/* **************************************************************************************************************/}

              </div>

              <div className="input-data-profile py-[5px] lg:pb-[7px]">
                <label className="input-title-profile block pb-[7px] font-semibold  lg:hover:cursor-pointer  lg:block lg:text-[13.4px] lg:font-bold lg:text-[#4B4A44] lg:w-[160px] lg:h-[16px] lg:py-[6px] lg:float-left" htmlFor="codeOrder">Mã đơn hàng</label>

            {/* **************************************************************************************************************/}
            {/* Input điền MÃ ĐƠN HÀNG ở đây*/}
            {/* **************************************************************************************************************/}

                <input
                  type="text"
                  id="codeOrder"
                  className="input-witdh inline-block w-[100%] p-[10px] border-solid border border-[#b8b8b8] text-[#464646] text-[16px] rounded-[7px] focus:  lg:w-[260px] lg:rounded-[3px] lg:p-[6px] lg:border-solid lg:border lg:border-[#CDCDCD] lg:font-medium lg:text-[14px] lg:pl-[5px] lg:focus:outline-[1px] lg:focus:outline lg:focus:outline-[#48b7fc] "
                />

            {/* **************************************************************************************************************/}
            {/* KẾT THÚC Input điềm MÃ ĐƠN HÀNG */}
            {/* **************************************************************************************************************/}
              </div>
            </div>
            <br />
          </form>
          <div className=' lg:pb-[100px] '>
            <div className=''>
          <button type="submit" className="btnSaveProfile w-[100%] h-[40px] bg-[#2ca40e] border border-solid border-[#24890B] py-[9px] px-[30px] text-[white] mt-[20px] font-semibold rounded-[4px] active:bg-[#1b7904] lg:float-right lg:w-[135px] lg:h-[40px] lg:text-[white] lg:rounded-[4px] lg:bg-[#2ca40e] lg:mt-11 lg:border lg:border-solid lg:border-[#24890B] lg:hover:cursor-pointer lg:hover:bg-[#33bf10] lg:active:cursor-pointer lg:active:bg-[#24890B]">TÌM KIẾM</button>
            </div>
          </div>


          {/* **************************************************************************************************************/}
          {/* Bảng in ra thông tin đơn hàng ở đây*/}
          {/* **************************************************************************************************************/}

<table className="block lg:w-[100%] pt-[80px] pb-[30px] overflow-y-auto">
  <thead>
    <tr>
      <th className="border border-[#dbdbdb] text-center pl-2 lg:text-[14px] p-[23px] lg:pl-2 lg:p-[10px] w-[6%]  bg-[#eeeeee]   ">ID</th>
      <th className="border border-[#dbdbdb] text-left pl-3 lg:text-[14px] p-[23px] lg:pl-2 lg:p-[10px]  w-[15%] bg-[#eeeeee]   ">Ngày</th>
      <th className="border border-[#dbdbdb] text-left pl-3 lg:text-[14px] p-[23px] lg:pl-2 lg:p-[10px] w-[30%] bg-[#eeeeee]   ">Khách hàng</th>
      <th className="border border-[#dbdbdb] text-left pl-3 lg:text-[14px] p-[23px] lg:pl-2 lg:p-[10px] w-[15%] bg-[#eeeeee] ">Tổng cộng</th>
      <th className="border border-[#dbdbdb] text-left pl-3 lg:text-[14px] p-[23px] lg:pl-2 lg:p-[10px] w-[15%] bg-[#eeeeee]   ">Đã thanh toán</th>
      <th className="border border-[#dbdbdb] text-center pl-2 lg:text-[14px] p-[23px] lg:pl-2 lg:p-[10px] w-[6%] bg-[#eeeeee]  ">Còn lại</th>
      <th className="border border-[#dbdbdb] text-center pl-2 lg:text-[14px] p-[23px] lg:pl-2 lg:p-[10px] w-[12%] bg-[#eeeeee]   ">Trạng thái</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border  p-4 lg:p-3 text-center ">1</td>
      <td className="border  p-4 lg:p-3 text-left pl-3">28/3/2023</td>
      <td className="border  p-4 lg:p-3 text-left pl-3">Đinh Huy Tuấn Anh</td>
      <td className="border  p-4 lg:p-3 text-left pl-3 ">1.000.000 VNĐ</td>
      <td className="border  p-4 lg:p-3 text-left pl-3 ">1.000.000 VNĐ</td>
      <td className="border  p-4 lg:p-3 text-center ">1</td>
      <td className="border  p-4 lg:p-3 text-center ">Chuẩn bị</td>
    </tr>
  </tbody>
</table>   

          {/* **************************************************************************************************************/}
          {/* Kết thúc bảng in ra thông tin đơn hàng */}
          {/* **************************************************************************************************************/}

        </div> <br /><br /> <br />
      </div>
    </div>
    </div>
  )
}

export default OrderSearch