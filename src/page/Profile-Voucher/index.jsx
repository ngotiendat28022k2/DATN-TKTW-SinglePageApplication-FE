import React from "react";

const ProfileVoucher = () => {
  return (
    <div className="container-profile border border-solid border-[#e6e6e6] rounded-[2px] bg-[white]">
      <div className="px-[15px] py-[20px] h-auto">
        <div className="px-[15px]">
          <span className="text-[22px] font-medium">Ví Voucher</span>
        </div>
        <div className="px-[15px] py-[10px]">
          <div className="">
            <div className="pb-[20px] border-b-[2px] border-solid border-[#fd6b6b]">
              <ul className="md:flex">
                <li className="inline-block pt-[15px] font-medium md:pt-0 pr-[20px] text-[17px] hover:text-[#db3737] cursor-pointer text-[#333333]">
                  Voucher của tôi
                </li>
                <li className="inline-block pt-[15px] font-medium md:pt-0 pr-[20px] text-[17px] hover:text-[#db3737] cursor-pointer text-[#333333]">
                  Voucher đối tác
                </li>
              </ul>
            </div>
            <div className="overflow-y-scroll h-[400px] pt-[10px]">
              <div className="md:grid md:grid-cols-2 gap-[20px]">
                <div className="relative mb-[20px] md:mb-0">
                  <div className="">
                    <img
                      src="https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-red-atmospheric-festive-coupon-image_262017.jpg"
                      alt="voucher"
                      title="voucher"
                    />
                  </div>
                  <div className="flex">
                    <div className="w-[42%]"></div>
                    <div className="w-[55%]">
                      <div className="absolute top-0 right-0 px-[20px] py-[10px] text-[#fcf9d8] text-[17px]">
                        <span className="">Dùng ngay</span>
                      </div>
                      <div className="absolute bottom-0 right-0 px-[20px] py-[10px] text-[#e0e04c] text-[13px] ">
                        <span className="">Điều kiện</span>
                      </div>
                      <div className="absolute top-0 text-[#fff] h-full items-center flex">
                        <div className="grid grid-cols-1">
                          <div className="text-[26px] ">
                            <span className="">Giảm đ10k</span>
                          </div>
                          <div className="text-[14px] ">
                            <span className="">Đơn tối thiểu đ100k</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileVoucher;
