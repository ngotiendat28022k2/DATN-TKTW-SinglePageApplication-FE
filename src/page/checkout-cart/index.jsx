import React from "react";

const CheckoutCart = () => {
  return (
    <div className="">
      <div className="flex items-center gap-[5px] py-[20px]">
        <div className="uppercase font-medium">
          <span className="text-[21px]">Giỏ hàng</span>
        </div>
        <div className="text-[#000]">
          <span>(2 sản phẩm)</span>
        </div>
      </div>
      <div className="flex justify-between">
        {/* Block 1: Chi tiết về thanh toán sản phẩm trong giỏ hàng */}
        <div className=" max-w-[66%] w-full">
          <div className="flex items-center justify-start  max-w-[100%] w-full bg-[white] py-[10px] rounded-[7px]">
            <div className="w-[5%] flex justify-center">
              <input type="checkbox" />
            </div>
            <div className="text-[16px] w-[55%]  flex justify-start font-medium">
              <span className="">Chọn tất cả (2 sản phẩm)</span>
            </div>
            <div className="text-[16px] w-[12%]  flex justify-center font-medium">
              <span className="">Số lượng</span>
            </div>
            <div className="text-[16px] w-[20%] flex justify-center font-medium">
              <span className="">Thành tiền</span>
            </div>
            <div className="w-[7%]"></div>
          </div>
          <br />
          {/* Thông tin về đơn hàng đã đặt */}
          <div className="bg-[white] py-[10px] rounded-[7px]  mt-[-15px]">
            {/* Đơn hàng mẫu đầu tiên */}
            <div className="flex items-center justify-start  max-w-[100%] w-full py-[20px] border-b-[1px] border-solid border-[#e6e6e6]">
              <div className="w-[5%] flex justify-center">
                <input type="checkbox" />
              </div>
              <div className="text-[16px] w-[55%]  flex justify-start">
                <div className="">
                  <img
                    className="max-w-[119px] w-full max-h-[119px] h-full"
                    src="https://cdn0.fahasa.com/media/catalog/product//8/9/8935244885378.jpg"
                    alt=""
                  />
                </div>
                <div className="flex justify-between flex-col">
                  <div className="text-[15px]">
                    <span className="">
                      Thám Tử Lừng Danh Conan Tập 47 (Tái Bản 2023)
                    </span>
                  </div>
                  <div className="text-[17px] font-semibold">
                    <span className="">25.000 đ</span>
                  </div>
                </div>
              </div>
              <div className="w-[12%]">
                <div className="  border border-solid border-[#9e9e9e] rounded-[4px]">
                  <div className="flex items-center">
                    <div className="px-[15px]">
                      <img
                        className="w-[142px] h-auto object-contain"
                        src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_minus2x.png"
                        alt=""
                      />
                    </div>
                    <div className="max-w-[60px] w-full text-[18px] font-medium p-[3px]">
                      <input
                        className="max-w-[60px] w-full text-center focus-visible:outline-0"
                        type="text"
                        defaultValue={1}
                        maxLength={1}
                        minLength={1}
                      />
                    </div>
                    <div className="px-[15px]">
                      <img
                        className="w-[142px] h-auto"
                        src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_plus2x.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[16px] w-[20%] flex justify-center font-medium">
                <span className="text-[#C92127] font-bold">25.000 đ</span>
              </div>
              <div className="w-[7%]"></div>
            </div>
            <div className="flex items-center justify-start  max-w-[100%] w-full py-[20px]">
              <div className="w-[5%] flex justify-center">
                <input type="checkbox" />
              </div>
              <div className="text-[16px] w-[55%]  flex justify-start">
                <div className="">
                  <img
                    className="max-w-[119px] w-full max-h-[119px] h-full"
                    src="https://cdn0.fahasa.com/media/catalog/product//8/9/8935244885378.jpg"
                    alt=""
                  />
                </div>
                <div className="flex justify-between flex-col">
                  <div className="text-[15px]">
                    <span className="">
                      Thám Tử Lừng Danh Conan Tập 47 (Tái Bản 2023)
                    </span>
                  </div>
                  <div className="text-[17px] font-semibold">
                    <span className="">25.000 đ</span>
                  </div>
                </div>
              </div>
              <div className="w-[12%]">
                <div className="  border border-solid border-[#9e9e9e] rounded-[4px]">
                  <div className="flex items-center">
                    <div className="px-[15px]">
                      <img
                        className="w-[142px] h-auto object-contain"
                        src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_minus2x.png"
                        alt=""
                      />
                    </div>
                    <div className="max-w-[60px] w-full text-[18px] font-medium p-[3px]">
                      <input
                        className="max-w-[60px] w-full text-center focus-visible:outline-0"
                        type="text"
                        defaultValue={1}
                        maxLength={1}
                        minLength={1}
                      />
                    </div>
                    <div className="px-[15px]">
                      <img
                        className="w-[142px] h-auto"
                        src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_plus2x.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[16px] w-[20%] flex justify-center font-medium">
                <span className="text-[#C92127] font-bold">25.000 đ</span>
              </div>
              <div className="w-[7%]"></div>
            </div>
          </div>
        </div>
        {/* Block 2: Chi tiết về vé khuyến mãi */}
        <div className="   max-w-[33%] w-full">
          <div className="max-w-[100%] w-full bg-[white] py-[10px] px-[20px]  rounded-[7px]">
            {/* Block 1: Vé khuyến mãi */}
            <div className="flex justify-between border-b-[1px] border-solid border-[#e6e6e6] pb-[20px]">
              <div className="flex">
                <div className="">
                  <img
                    src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/promotion/ico_coupon.svg"
                    alt=""
                  />
                </div>
                <div className="uppercase text-[#2f80ec] pl-[10px]">
                  <span className="">Khuyến mãi</span>
                </div>
              </div>
              <div className="text-[#2f80ec]">
                <span className="">Xem thêm</span>
              </div>
            </div>
            {/* Block 1: Chi tiết về vé khuyến mãi */}
            <div className="py-[5px]">
                {/* Block 1: Sản phẩm mẫu về vé khuyến mãi */}
                <div className="border-b-[1px] border-solid border-[#e6e6e6] py-[20px]">
              <div className=" pb-[30px]">
                <div className="flex justify-between">
                  <div className="">
                    <span className="text-[17px] font-semibold uppercase">
                      Mã giảm 10k
                    </span>
                  </div>

                  <div className=" cursor-pointer">
                    <span className="text-[15px] underline text-[#2f80ec]">
                      Chi tiết
                    </span>
                  </div>
                </div>
                <div className="">
                  <span className="text-[15px]">
                    Đơn hàng từ 150k - Không áp dụng cho Phiếu Quà tặng
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="max-w-[250px] h-[6px] w-full bg-[#2f80ec] rounded-[10px] mt-[6px]">
                <div className="pb-[7px]">
                  <span className=""></span>
                </div>
                <div className="flex justify-between text-[12px]">
                    <div className="">
                    <span className="">
                  Mua thêm 144.000 đ để nhận mã
                  </span>
                    </div>
                    <div className="">
                    <span className="">
                    400.000 đ
                  </span>
                    </div>
                </div>
                </div>
                <div className="">
                <div className=" rounded-[10px] px-[18px] py-[5px] bg-[#2f80ec] items-center justify-center flex cursor-pointer">
                  <span className="text-[#fff] font-semibold">Mua thêm</span>
                </div>
                </div>
              </div>
              </div>
              
            </div>
            {/* Block 3 */}
            <div className="">
            <span className="text-[#9FA7AB] text-[14px]">
            Có thể áp dụng đồng thời nhiều mã
            </span>
            </div>
          </div>
          <br />
          {/* Block 4: Thành tiền */}
          <div className="bg-[white] flex py-[10px] px-[20px]  rounded-[7px]">
         <div className="max-w-[100%] w-full">
         <div className="flex justify-between border-b-[1px] border-solid border-[#e6e6e6] pb-[10px]">
                  <div className="">
                    <span className="text-[17px]">
                      Thành tiền
                    </span>
                  </div>
                  <div className=" cursor-pointer">
                    <span className="text-[17px]">
                    256.000 đ
                    </span>
                  </div>
                </div>
                <div className="py-[10px]">
                <div className="flex justify-between pb-[10px] items-center">
                  <div className="">
                    <span className="text-[17px] font-medium">
                    Tổng Số Tiền (gồm VAT)
                    </span>
                  </div>
                  <div className=" cursor-pointer">
                    <span className="text-[22px] text-[#C92127] font-bold">
                    256.000 đ
                    </span>
                  </div>
                </div>
                <div className="">
                <div className=" w-full border-[2px] border-solid border-[#C92127] rounded-[10px] px-[30px] py-[10px] items-center justify-center flex uppercase bg-[#C92127] text-[19px]">
                  <span className="text-[#fff] font-semibold">Thanh toán</span>
                </div>
                <div className="text-[13px] py-[3px]">
                  <span className="text-[#ff0008]">(Giảm giá trên web chỉ áp dụng cho bán lẻ)</span>
                </div>
                </div>
                </div>
         </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default CheckoutCart;
