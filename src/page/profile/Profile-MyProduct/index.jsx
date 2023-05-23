import React, { useEffect } from "react";

const ProfileMyProduct = () => {

  useEffect(() => {

    // fetch("https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/create", {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'ShopId': '4152116',
    //     'Token': '6918bfab-f625-11ed-a281-3aa62a37e0a5'
    //   },
    //   body: JSON.stringify(requestData)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data);
    //   if(data.message === "Success"){
    //     navigate("/thanks")
    //   }
    // })
    // .catch(error => {
    //   // Xử lý lỗi
    //   console.error(error);
    // });
  }, [])
  return (
    <div className="container-profile border border-solid border-[#e6e6e6] rounded-[2px] bg-[white]">
      <div className=" h-auto">
        <div className="">
          <div className="">
            <div className="px-[30px] py-[20px]">
              <div className="flex justify-between border-b-[1px] border-solid border-[#dbdbdb] pb-[10px]">
                <div className="inline-block text-left md:flex w-[30%]">
                  <div className="inline-block">
                    <span className="bg-[#f7442d] text-[white] text-[13px] px-[7px] py-[1px] rounded-[3px] font-medium">
                      Yêu thích
                    </span>
                  </div>
                  <div className="inline-block">
                    <span className=" text-[#000] text-[15px] px-[7px] py-[1px] rounded-[3px] font-medium">
                      Binzi
                    </span>
                  </div>
                </div>
                <div className="inline-block text-right w-[70%]">
                  <div className="inline-block">
                    <span className="text-[#26aa99] text-[14px] px-[7px] py-[1px] rounded-[3px] font-medium">
                      Đơn hàng đã được giao thành công
                    </span>
                  </div>
                  <div className="inline-block md:pt-0">
                    <span className=" text-[#f7442d] text-[14px] px-[7px] py-[1px] uppercase font-medium border-l-[1px] border-solid border-[#dbdbdb]">
                      Hoàn thành
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className="pt-[10px] px-[30px] py-[30px]">
                <div className="flex items-center">
                  <div className="flex pr-[10px] w-[80%] md:w-[90%] items-center">
                    <div className="max-w-[80px] max-h-[80px] w-full">
                      <img
                        src="https://vn-test-11.slatic.net/p/c87ff15a9100861b0d13004f4094942a.jpg"
                        className="max-w-[80px] max-h-[80px] w-[100%] h-[100%] object-contain"
                        alt=""
                      />
                    </div>
                    <div className="pl-[15px]">
                      <div className="">
                        <span className="text-[14px] md:text-[16px]">
                          Set Bóng trang Trí cho Cơ Quan, Tổ Chức Gia Đình Nhân
                          Ngày Phụ Nữ Việt Nam 20/10, Quốc Tế Phụ Nữ 8/3 Tặng
                          Bơm Băng Dính
                        </span>
                      </div>
                      <div className="">
                        <span className="text-[#919191] text-[14px]">
                          Phân loại hàng: Set 1
                        </span>
                      </div>
                      <div className="">
                        <span className="text-[#000] text-[14px]">x1</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-[20%] text-center md:w-[10%]">
                    <div className="">189.000đ</div>
                  </div>
                </div>
              </div>
              <div className=" border-t-[1px] border-solid border-[#dbdbdb] #fffefb">
                <div className="">
                  <div className="p-[24px]">
                    <div className="flex justify-end items-center">
                      <span className="text-[18px] md:text-[16px]">Thành tiền:</span><span className="pl-[10px] text-[#f7442d] text-[28px] md:text-[24px]">271.000đ</span>
                    </div>
                  </div>
                  <div className="p-[24px]">
                    <div className=" md:flex md:justify-end md:items-center md:gap-[10px]">
                      <div className="grid pb-[20px] md:pb-[0px]">
                      <button className="hover:bg-[#ca3213] bg-[#ee4d2d] px-[50px] py-[10px] rounded-[3px] border border-solid border-[#d9d9d9] text-[14px] text-[white] font-medium">Đánh Giá</button>
                      </div>
                      <div className="grid pb-[20px] md:pb-[0px]">
                      <button className="hover:bg-[#f4f4f4] px-[50px] py-[10px] rounded-[3px] border border-solid border-[#d9d9d9] text-[14px]">Liên Hệ Người Bán</button>
                      </div>
                      <div className="grid pb-[20px] md:pb-[0px]">
                      <button className="hover:bg-[#f4f4f4] px-[50px] py-[10px] rounded-[3px] border border-solid border-[#d9d9d9] text-[14px]">Mua Lại</button>
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

export default ProfileMyProduct;
