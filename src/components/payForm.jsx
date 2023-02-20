import React from "react";

const PayForm = () => {
  return (
    <div>
      <img src="" alt="" />
      <div className="mx-auto w-2/3 h-[100px]">
        <div className="grid grid-cols-5 w-3/4 mx-auto ">
          <div className="text-center ">
            <div className="bg-[#117c47] w-12 mx-auto my-2 p-3 text-center font-bold text-white rounded-full">
              1
            </div>
            Địa chỉ & dịch vụ
          </div>
          <div className="-mx-12 mt-8 h-1 bg-green-600"></div>
          <div className="text-center ">
            <div className="bg-[#117c47] w-12 mx-auto my-2 p-3 text-center font-bold text-white rounded-full">
              2
            </div>
            Hình thức thanh toán
          </div>
          <div className=""></div>
          <div className="text-center ">
            <div className="bg-[#ffffff] text-[#117c47] border-[#117c47] border w-12 mx-auto my-2 p-3 text-center font-bold rounded-full">
              3
            </div>
            Hoàn thành đơn hàng
          </div>
        </div>
      </div>
      <h1 className="text-center text-[20px] font-bold text-[#117c47]">
        HÌNH THỨC THANH TOÁN
      </h1>
      <div className="grid grid-cols-2 gap-5 my-10 mx-[300px]">
        <div className="">
          <h2 className="font-semibold text-[#117c47] mb-5">
            HÌNH THỨC THANH TOÁN
          </h2>
          <div className="">
            <div className="my-5">
              <input type="checkbox" name="" className="w-4 h-4" id="" /> Thanh
              toán khi nhận hàng
            </div>
            <div className="my-5">
              <input type="checkbox" name="" className="w-4 h-4" id="" /> Thanh
              toán online
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="font-semibold text-[#117c47] mb-5">
            NHẬP MÃ GIẢM GIÁ
          </h2>
          <div className="flex">
            <input
              className="border rounded-md px-1 w-1/2"
              type="text"
              placeholder="Nhập mã giảm giá"
            />
            <button className="mx-2 px-10 py-2 text-white rounded-md bg-[#117c47]">
              Áp dụng
            </button>
          </div>
        </div>
      </div>
      <div className="font-semibold w-1/3 px-3 mx-auto">
        <button className="px-20 py-2 mx-2 text-white bg-gray-300 rounded-md">
          QUAY LẠI
        </button>
        <button className="px-16 py-2 mx-2 bg-[#fdc92d] rounded-md">
          TIẾP TỤC
        </button>
      </div>
    </div>
  );
};

export default PayForm;
