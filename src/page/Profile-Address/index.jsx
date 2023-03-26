import React from "react";

const ProfileAddress = () => {
  return (
    <div>
      <div className="container-profile border border-solid border-[#e6e6e6] rounded-[2px] bg-[white]">
        <div className="px-[15px] py-[20px] h-auto">
          <div className="px-[15px]">
            <div className="pb-[10px]">
              <span className="md:text-[22px] text-[22px] uppercase text-[#565555]">
                Thêm địa chỉ mới
              </span>
            </div>
            <form action="">
              <div className="px-[20px] md:grid md:grid-cols-2 border-b-[1px] border-solid border-[#d4d4d4] pb-[50px]">
                <div className="px-[20px]">
                  <div className="pb-[10px]">
                    <span className="md:text-[18px] text-[22px]">
                      Thông tin liên hệ
                    </span>
                  </div>
                  <div className="px-[5px] py-[3px]">
                    <input
                      className="rounded-[4px] p-[5px] pl-[5px] border-b-[1px] border-solid border-[#9e9e9e] w-[100%] focus-visible:outline-0"
                      type="text"
                      placeholder="Tên *"
                      defaultValue={"Tuấn"}
                    />
                  </div>
                  <div className="px-[5px] py-[10px]">
                    <input
                      className="rounded-[4px] p-[5px] pl-[5px] border-b-[1px] border-solid border-[#9e9e9e] w-[100%] focus-visible:outline-0"
                      type="text"
                      placeholder="Họ *"
                      defaultValue={"Anh"}
                    />
                  </div>
                  <div className="px-[5px] py-[10px]">
                    <input
                      className="rounded-[4px] p-[5px] pl-[5px] border-b-[1px] border-solid border-[#9e9e9e] w-[100%] focus-visible:outline-0"
                      type="text"
                      placeholder="Ex: 0972xxxx"
                      defaultValue={""}
                    />
                  </div>
                </div>

                <div className="px-[20px] pt-[30px] md:pt-0">
                  <div className="pb-[10px]">
                    <span className="md:text-[18px] text-[22px]">Địa chỉ</span>
                  </div>
                  <div className="px-[5px] py-[3px]">
                    <input
                      className="rounded-[4px] p-[5px] pl-[5px] border-b-[1px] border-solid border-[#9e9e9e] w-[100%] focus-visible:outline-0"
                      type="text"
                      placeholder="Địa chỉ"
                      defaultValue={""}
                    />
                  </div>
                  <div className="pl-[5px] flex justify-between items-center px-[5px] py-[10px]">
                    <label
                      className="pl-[5px] text-[14px] font-medium text-[#5e5e5e] pr-[15px] md:pr-[10px]"
                      htmlFor=""
                    >
                      Quốc gia<span className="text-[red]">*</span>
                    </label>
                    <select
                      className="max-w-[254px] w-full border border-solid border-[#424242] rounded-[3px] px-[7px] py-[5px] text-[13px] text-[#5d5d5d]"
                      name=""
                      id=""
                    >
                      <option value="">Việt Nam</option>
                      <option value="">United State</option>
                      <option value="">Singapore</option>
                      <option value="">Malaysia</option>
                      <option value="">Franch</option>
                    </select>
                  </div>
                  <div className="pl-[5px] flex justify-between items-center px-[5px] py-[10px]">
                    <label
                      className="pl-[5px] text-[14px] font-medium text-[#5e5e5e] pr-[15px] md:pr-[10px]"
                      htmlFor=""
                    >
                      Tỉnh/Thành phố<span className="text-[red]">*</span>
                    </label>
                    <select
                      className="max-w-[254px] w-full border border-solid border-[#424242] rounded-[3px] px-[7px] py-[5px] text-[13px] text-[#5d5d5d]"
                      name=""
                      id=""
                    >
                      <option value="">Vui lòng chọn</option>
                      <option value="">United State</option>
                      <option value="">Singapore</option>
                      <option value="">Malaysia</option>
                      <option value="">Franch</option>
                    </select>
                  </div>
                  <div className="pl-[5px] flex justify-between items-center px-[5px] py-[10px]">
                    <div className="md:pr-[1px]">
                      <label
                        className="pl-[5px] text-[14px] font-medium text-[#5e5e5e] md:w-[33%] pr-[15px] md:pr-[10px]"
                        htmlFor=""
                      >
                        Quận/Huyện<span className="text-[red]">*</span>
                      </label>
                    </div>
                    <div className="w-[100%] md:w-[65%]">
                      <input
                        className="rounded-[4px] p-[5px] pl-[5px] border-b-[1px] border-solid border-[#9e9e9e] w-full focus-visible:outline-0"
                        type="text"
                        placeholder=""
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="pl-[5px] flex justify-between items-center px-[5px] py-[10px]">
                    <div className="md:pr-[1px]">
                      <label
                        className="pl-[5px] text-[14px] font-medium text-[#5e5e5e] md:w-[33%] pr-[15px] md:pr-[10px]"
                        htmlFor=""
                      >
                        Xã/Phường<span className="text-[red]">*</span>
                      </label>
                    </div>
                    <div className="w-[100%] md:w-[65%]">
                      <input
                        className="rounded-[4px] p-[5px] pl-[5px] border-b-[1px] border-solid border-[#9e9e9e] w-full focus-visible:outline-0"
                        type="text"
                        placeholder=""
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="py-[10px]">
              <div className="">
                <span className="text-[red] text-[12px] float-right">
                  (*): bắt buộc
                </span>
              </div>
            </div>
            <div className="pt-[20px] flex justify-between w-full">
              <div className="">
                <span className="text-[#3876e9] text-[14px]">Quay lại</span>
              </div>
              <div className="">
                <div className="">
                  <button className="uppercase text-[white] text-[14px] px-[20px] py-[10px] rounded-[10px] font-bold bg-[#C92127] ">
                    Lưu địa chỉ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAddress;
