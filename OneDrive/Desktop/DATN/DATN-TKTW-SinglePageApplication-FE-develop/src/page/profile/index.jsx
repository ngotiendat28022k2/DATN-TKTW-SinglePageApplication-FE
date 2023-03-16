import React from 'react'

const Profile = () => {
  return (
    <div className='m-0 box-border'>
    <div className="container m-[auto] lg:w-[1180px] lg:h-[754px] lg:pt-[50px]">
      <div className="mainbox2 lg:w-[1180px] lg:h-[687px]">
        <div className="profile-title-main-mb w-[100%] h-[55px] bg-[#087b44] flex items-center justify-center lg:hidden">
          <span className="profile-title text-[white] text-[18px] uppercase font-medium lg:hidden">Sửa Thông tin cá nhân</span>
        </div>
        <div className='hidden lg:block lg:pb-[30px] '>
          <span className=' lg:text-[14px] lg:font-medium lg:text-[#6d6d6d]'>Trang chủ &gt; </span>  <span className=' lg:font-semibold lg:pl-[10px] lg:text-[14px] lg:text-[#202020]'>Thông tin cá nhân</span>
        </div>
        <div className="content-main px-[15px] pb-[20px] lg:w-[1111px] lg:h-[634px] lg:p-[20px] lg:border-solid lg:border lg:border-[#dfdfdf]  lg:m-0 lg:rounded-t-[5px]">
          <form action="">
            <div className="profile-title-main-pc lg:pb-[10px]">
              <span className="profile-title hidden lg:text-[22px] lg:font-semibold lg:whitespace-nowrap lg:block lg:text-[#147446] lg:border-b-[1px] lg:border-dashed lg:border-[#c6c6c6]">Thông tin cá nhân</span>
            </div>
            <div className="content pt-[10px]">
              <div className="helloUser lg:pb-[10px]">
                <span className="profile-fullname hidden lg:inline  lg:text-[15.6px] lg:font-bold lg:leading-[40px] lg:text-[#404040]">Xin chào bạn</span>
                <span className="name hidden lg:inline lg:text-[#CA2027] lg:text-[18.72px] lg:font-bold"> Tuấn Anh</span>
              </div>

              <div className="input-data-profile py-[5px]  lg:pb-[7px] ">
                <label className="input-title-profile block pb-[4px] font-semibold  lg:hover:cursor-pointer lg:block lg:text-[13.4px] lg:font-bold lg:text-[#4B4A44] lg:w-[160px] lg:h-[16px] lg:py-[6px] lg:float-left" htmlFor="fullname">Họ và tên</label>

            {/* **************************************************************************************************************/}
            {/* Input HỌ VÀ TÊN ở đây*/}
            {/* **************************************************************************************************************/}  

                <input
                  type="text"
                  id="fullname"
                  className="input-witdh inline-block w-[100%] p-[10px] border-solid border border-[#b8b8b8] text-[#848688] text-[16px] rounded-[7px]  lg:w-[260px] lg:rounded-[3px] lg:p-[8px] lg:border-solid lg:border lg:border-[#CDCDCD] lg:text-[13px] lg:pl-[5px] lg:focus:outline-[1px] lg:focus:outline lg:focus:outline-[#48b7fc] "
                  defaultValue="Đinh Huy Tuấn Anh"
                />

            {/* **************************************************************************************************************/}
            {/* KẾT THÚC Input HỌ VÀ TÊN ở đây*/}
            {/* **************************************************************************************************************/}   
              </div>

              <div className="input-data-profile py-[5px] lg:pb-[7px]">
                <label className="input-title-profile block pb-[4px] font-semibold  lg:hover:cursor-pointer  lg:block lg:text-[13.4px] lg:font-bold lg:text-[#4B4A44] lg:w-[160px] lg:h-[16px] lg:py-[6px] lg:float-left" htmlFor="email">Email</label>

            {/* **************************************************************************************************************/}
            {/* Input HỌ VÀ TÊN ở đây*/}
            {/* **************************************************************************************************************/}  

                <input
                  type="email"
                  id="email"
                  className="input-witdh inline-block w-[100%] p-[10px] border-solid border border-[#b8b8b8] text-[#848688] text-[16px] rounded-[7px]  lg:w-[260px] lg:rounded-[3px] lg:p-[8px] lg:border-solid lg:border lg:border-[#CDCDCD] lg:text-[13px] lg:pl-[5px] lg:focus:outline-[1px] lg:focus:outline lg:focus:outline-[#48b7fc] "
                  defaultValue="tph.tuananh1@gmail.com"
                />

            {/* **************************************************************************************************************/}
            {/* KẾT THÚC Input EMAIL ở đây*/}
            {/* **************************************************************************************************************/}  
              </div>

              <div className="input-data-profile py-[5px] lg:pb-[7px]">
                <label className="input-title-profile block pb-[4px] font-semibold  lg:hover:cursor-pointer  lg:block lg:text-[13.4px] lg:font-bold lg:text-[#4B4A44] lg:w-[160px] lg:h-[16px] lg:py-[6px] lg:float-left" htmlFor="password">Mật khẩu</label>

            {/* **************************************************************************************************************/}
            {/* Input MẬT KHẨU ở đây*/}
            {/* **************************************************************************************************************/}  

                <input
                  type="password"
                  id="password"
                  className="input-witdh inline-block w-[100%] p-[10px] border-solid border border-[#b8b8b8] text-[#848688] text-[16px] rounded-[7px] focus:  lg:w-[260px] lg:rounded-[3px] lg:p-[8px] lg:border-solid lg:border lg:border-[#CDCDCD] lg:text-[13px] lg:pl-[5px] lg:focus:outline-[1px] lg:focus:outline lg:focus:outline-[#48b7fc] "
                  defaultValue="1234567"
                />

            {/* **************************************************************************************************************/}
            {/* KẾT THÚC Input EMAIL ở đây*/}
            {/* **************************************************************************************************************/}  
              </div>

              <div className="input-data-profile py-[5px] lg:pb-[7px]">
                <label className="input-title-profile block pb-[4px] font-semibold  lg:hover:cursor-pointer  lg:block lg:text-[13.4px] lg:font-bold lg:text-[#4B4A44] lg:w-[160px] lg:h-[16px] lg:py-[6px] lg:float-left" htmlFor="repassword"
                  >Xác nhận mật khẩu</label>

            {/* **************************************************************************************************************/}
            {/* Input NHẬP LẠI MẬT KHẨU ở đây*/}
            {/* **************************************************************************************************************/} 
             
                <input
                  type="password"
                  id="repassword"
                  className="input-witdh inline-block w-[100%] p-[10px] border-solid border border-[#b8b8b8] text-[#848688] text-[16px] rounded-[7px] focus:  lg:w-[260px] lg:rounded-[3px] lg:p-[8px] lg:border-solid lg:border lg:border-[#CDCDCD] lg:text-[13px] lg:pl-[5px] lg:focus:outline-[1px] lg:focus:outline lg:focus:outline-[#48b7fc] "
                  defaultValue="1234567"
                />

            {/* **************************************************************************************************************/}
            {/* KẾT THÚC Input NHẬP LẠI MẬT KHẨU ở đây*/}
            {/* **************************************************************************************************************/}  
              </div>

              <div className="input-data-profile py-[5px] lg:pb-[7px]">
                <label className="input-title-profile block pb-[4px] font-semibold  lg:hover:cursor-pointer  lg:block text-[13.4px] lg:font-bold lg:text-[#4B4A44] lg:w-[160px] lg:h-[16px] lg:py-[6px] lg:float-left" htmlFor="date">Ngày sinh</label>

            {/* **************************************************************************************************************/}
            {/* Input NGÀY SINH ở đây*/}
            {/* **************************************************************************************************************/}  

                <input type="date" id="date" className="input-witdh inline-block w-[100%] p-[10px] border-solid border border-[#b8b8b8] text-[#848688] text-[16px] rounded-[7px] focus:  lg:w-[260px] lg:rounded-[3px] lg:p-[8px] lg:border-solid lg:border lg:border-[#CDCDCD] lg:text-[13px] lg:pl-[5px] lg:focus:outline-[1px] lg:focus:outline lg:focus:outline-[#48b7fc] " defaultValue="" />

            {/* **************************************************************************************************************/}
            {/* KẾT THÚC Input NGÀY SINH ở đây*/}
            {/* **************************************************************************************************************/}  
              </div>

              <div className="input-data-profile py-[5px] lg:pb-[7px]">
                <div className="">
                  <label className="input-title-profile block pb-[4px] font-semibold    lg:block lg:text-[13.4px] lg:font-bold lg:text-[#4B4A44] lg:w-[160px] lg:h-[16px] lg:py-[6px] lg:float-left" htmlFor="sex">Giới tính </label>
                </div>

            {/* **************************************************************************************************************/}
            {/* Input CHỌN GIỚI TÍNH ở đây*/}
            {/* **************************************************************************************************************/}  

                {/* NỮ */}
                <div className="radioFemale float-left pr-[30px]  lg:float-left">
                  <input type="radio" id="female" defaultValue="Nữ" name="sex" />
                  <span className="sex  lg:text-[14px] lg:pr-[10px]" > Nữ </span>
                </div>

                {/* NAM */}
                <div className="radioMale">
                  <input type="radio" id="male" defaultValue="Nam"  name="sex"/>
                  <span className="sex  lg:text-[14px] lg:pr-[10px]"> Nam </span>
                </div>

            {/* **************************************************************************************************************/}
            {/* KẾT THÚC Input CHỌN GIỚI TÍNH ở đây*/}
            {/* **************************************************************************************************************/}  
              </div>
            </div>
            <br />
          </form>

          <span className="profile-rs block text-[#24890B] uppercase pb-[5px] text-[20px] border-b-[2px] border-b-[#777777] border-dotted lg:text-[16px] lg:font-semibold">Đăng ký nhận bảng tin</span> <br/>
          <br/>
          <span className="resi-profile block text-[15.5px] mt-[-20px]  lg:text-[14px] lg:text-[#848688]">Đăng ký nhận bản tin theo danh mục dưới đây</span>
          <div className="checkbox-resi-profile pt-[10px] lg:pt-[7px] lg:text-[15px] lg:text-[#848688]">

            {/* **************************************************************************************************************/}
            {/* Input ĐĂNG KÝ NHẬN TIN ở đây*/}
            {/* **************************************************************************************************************/} 

            <input type="checkbox" name="" id="accept-checkbox-profile" />

            {/* **************************************************************************************************************/}
            {/* KẾT THÚC Input ĐĂNG KÝ NHẬN TIN ở đây*/}
            {/* **************************************************************************************************************/} 

            <label htmlFor="accept-checkbox-profile"
              ><span className="resi-checkbox-profile block pl-[23px] mt-[-25px] lg:text-[13px] lg:pl-[30px] lg:mt-[-22.4px] lg:block lg:hover:cursor-pointer">
                Đăng ký nhận tin
              </span></label>
            
          </div>

            {/* **************************************************************************************************************/}
            {/* BUTTON SUBMIT FORM ở đây*/}
            {/* **************************************************************************************************************/} 

          <button type="submit" className="btnSaveProfile w-[100%] h-[40px] bg-[#2ca40e] border border-solid border-[#24890B] py-[9px] px-[30px] text-[white] mt-[20px] font-semibold rounded-[4px] active:bg-[#1b7904] lg:float-right lg:w-[135px] lg:h-[40px] lg:text-[white] lg:rounded-[4px] lg:bg-[#2ca40e] lg:mt-11 lg:border lg:border-solid lg:border-[#24890B] lg:hover:cursor-pointer lg:hover:bg-[#33bf10] lg:active:cursor-pointer lg:active:bg-[#24890B]">LƯU</button>

            {/* **************************************************************************************************************/}
            {/* KẾT THÚC BUTTON SUBMIT FORM ở đây*/}
            {/* **************************************************************************************************************/} 

        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Profile