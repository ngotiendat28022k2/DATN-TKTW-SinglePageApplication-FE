import React from "react";
const ProfileInfo = () => {
  return (
    <div>
      <div className="container-profile border border-solid border-[#e6e6e6] rounded-[2px] bg-[white]">
        <div className="px-[15px] py-[20px]">
          <div className="pb-[10px]">
            <span className="md:text-[16px] text-[22px] uppercase font-bold">
              Thông tin tài khoản
            </span>
          </div>
          <form action="">
            <div className="py-[8px]">
              <label
                htmlFor="firstname"
                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
              >
                Họ<span className="text-[red]">*</span>
              </label>
              <div className="md:pt-0 pt-[7px]">
                <div className="">
                  <input
                    id="firstname"
                    className="md:max-w-[40%] md:text-[15px] max-w[100%] w-full font-semibold text-[16px] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px]
                    focus:outline-[2px] focus:outline focus:outline-[#8ed0f9] "
                    maxLength={40}
                    type="text"
                    placeholder="Nhập Họ"
                    defaultValue={"Tuấn"}
                  />
                </div>
              </div>
            </div>
            <div className="py-[8px]">
              <label
                htmlFor="name"
                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
              >
                Tên<span className="text-[red]">*</span>
              </label>
              <div className="md:pt-0 pt-[7px]">
                <div className="">
                  <input
                    id="name"
                    className="md:max-w-[40%] md:text-[15px] max-w[100%] w-full font-semibold text-[16px] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px]
                    focus:outline-[2px] focus:outline focus:outline-[#8ed0f9] "
                    maxLength={40}
                    type="text"
                    placeholder="Nhập Tên"
                    defaultValue={"Anh"}
                  />
                </div>
              </div>
            </div>
            <div className="py-[8px]">
              <label
                htmlFor="phoneNumber"
                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
              >
                Số điện thoại
              </label>
              <div className="md:pt-0 pt-[7px]">
                <div className="">
                  <input
                    id="phoneNumber"
                    className="md:max-w-[40%] md:text-[15px] max-w[100%] w-full font-semibold text-[16px] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px]
                    focus:outline-[2px] focus:outline focus:outline-[#8ed0f9] "
                    maxLength={11}
                    type="text"
                    placeholder="Nhập Số Điện Thoại"
                    defaultValue={"0976890027"}
                  />
                </div>
              </div>
            </div>
            <div className="py-[8px]">
              <label
                htmlFor="email"
                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
              >
                Email
              </label>
              <div className="md:pt-0 pt-[7px]">
                <div className="">
                  <input
                    id="email"
                    className="md:max-w-[40%] md:text-[15px] max-w[100%] w-full font-semibold text-[16px] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px]
                    focus:outline-[2px] focus:outline focus:outline-[#8ed0f9] "
                    type="text"
                    placeholder="Chưa có email"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="py-[8px]">
              <label
                htmlFor="sex"
                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
              >
                Giới tính<span className="text-[red]">*</span>
              </label>
              <div className="md:pt-0 pt-[7px]">
                <div className="flex">
                  <div className="flex justify-center items-center">
                    <input id="sex" type="radio" name="sex" />{" "}
                    <span className="md:text-[13px] py-[4px] pl-[10px] pr-[30px] text-[16px]">
                      Nam
                    </span>
                  </div>
                  <div className="flex justify-center items-center">
                    <input id="sex" type="radio" name="sex" />{" "}
                    <span className="md:text-[13px] py-[4px] pl-[10px] pr-[30px] text-[16px] ">
                      Nữ
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-[8px]">
              <label
                htmlFor="birthday"
                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
              >
                Ngày sinh<span className="text-[red]">*</span>
              </label>
              <div className="md:pt-0 pt-[7px]">
                <div className="grid grid-cols-3 gap-[25px] md:max-w-[40%] max-w-[100%] w-full">
                  <input
                    id="birthday"
                    className=" md:text-[14px] text-[15px] w-full text-[#545759] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px] focus:outline-none text-center"
                    type="text"
                    readOnly
                    defaultValue={"28"}
                  />
                  <input
                    id="birthday"
                    className=" md:text-[14px] text-[15px] w-full text-[#545759] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px] focus:outline-none text-center"
                    type="text"
                    readOnly
                    defaultValue={"11"}
                  />
                  <input
                    id="birthday"
                    className=" md:text-[14px] text-[15px] w-full text-[#545759] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px] focus:outline-none text-center"
                    type="text"
                    readOnly
                    defaultValue={"2002"}
                  />
                </div>
              </div>
            </div>
            <div className="py-[8px]">
              <label
                htmlFor="vipcode"
                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
              >
                Mã VIP
              </label>
              <div className="md:pt-0 pt-[7px]">
                <div className="">
                  <input
                    id="vipcode"
                    className="md:max-w-[40%] md:text-[15px] max-w[100%] w-full font-semibold text-[16px] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px]
                    focus:outline-[2px] focus:outline focus:outline-[#8ed0f9] "
                    type="text"
                    placeholder="Nhập mã VIP để nhận ưu đãi"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="py-[8px]">
              <label
                htmlFor="email"
                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
              ></label>
              <div className="flex md:pt-0 pt-[7px]">
                <div className="flex justify-center items-center">
                  <input id="changepassword" type="checkbox" />
                  <span className="pl-[10px] md:text-[14px] text-[17px] font-semibold ">
                    <label
                      className="hover:cursor-pointer"
                      htmlFor="changepassword"
                    >
                      Đổi mật khẩu
                    </label>
                  </span>
                </div>
              </div>
            </div>
            <div className="py-[20px]">
              <div className="text-center flex justify-center items-center">
                <div className="w-[220px] p-[8px] bg-[#C92127] rounded-[8px] hover:cursor-pointer">
                  <span className="text-[white] text-center text-[17px] font-bold">
                    Lưu thay đổi
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="container-profile border border-solid border-[#e6e6e6] rounded-[2px] mt-[20px] bg-[white]">
        <div className="px-[30px] py-[40px]">
          <div className="pb-[10px]">
            <span className="md:text-[16px] text-[22px] uppercase font-bold">
              THÔNG TIN XUẤT HÓA ĐƠN GTGT
            </span>
          </div>
          <form action="">
            <div className="py-[8px]">
              <label
                htmlFor=""
                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
              >
                Họ tên người mua hàng
              </label>
              <div className="md:pt-0 pt-[7px]">
                <div className="">
                  <input
                    id=""
                    className="md:max-w-[40%] md:text-[15px] max-w[100%] w-full font-semibold text-[16px] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px]
                    focus:outline-[2px] focus:outline focus:outline-[#8ed0f9] "
                    maxLength={40}
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="py-[8px]">
              <label
                htmlFor=""
                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
              >
                Tên công ty
              </label>
              <div className="md:pt-0 pt-[7px]">
                <div className="">
                  <input
                    id=""
                    className="md:max-w-[40%] md:text-[15px] max-w[100%] w-full font-semibold text-[16px] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px]
                    focus:outline-[2px] focus:outline focus:outline-[#8ed0f9] "
                    maxLength={40}
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="py-[8px]">
              <label
                htmlFor=""
                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
              >
                Địa chỉ công ty
              </label>
              <div className="md:pt-0 pt-[7px]">
                <div className="">
                  <input
                    id=""
                    className="md:max-w-[40%] md:text-[15px] max-w[100%] w-full font-semibold text-[16px] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px]
                    focus:outline-[2px] focus:outline focus:outline-[#8ed0f9] "
                    maxLength={40}
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="py-[8px]">
              <label
                htmlFor=""
                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
              >
                Mã số thuế công ty
              </label>
              <div className="md:pt-0 pt-[7px]">
                <div className="">
                  <input
                    id=""
                    className="md:max-w-[40%] md:text-[15px] max-w[100%] w-full font-semibold text-[16px] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px]
                    focus:outline-[2px] focus:outline focus:outline-[#8ed0f9] "
                    maxLength={40}
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="py-[8px]">
              <label
                htmlFor=""
                className="md:float-left md:max-w-[20%] md:text-[14px] md:w-full md:font-normal p-[4px] text-[#555555] text-[16px] font-semibold"
              >
                Email nhận hóa đơn
              </label>
              <div className="md:pt-0 pt-[7px]">
                <div className="">
                  <input
                    id=""
                    className="md:max-w-[40%] md:text-[15px] max-w[100%] w-full font-semibold text-[16px] px-[14px] py-[3px] border border-solid border-[#ced4da] rounded-[2px]
                    focus:outline-[2px] focus:outline focus:outline-[#8ed0f9] "
                    maxLength={40}
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="py-[20px]">
              <div className="text-center flex justify-center items-center">
                <div className="w-[220px] p-[8px] bg-[#C92127] rounded-[8px] hover:cursor-pointer">
                  <span className="text-[white] text-center text-[17px] font-bold">
                    Lưu thay đổi
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
