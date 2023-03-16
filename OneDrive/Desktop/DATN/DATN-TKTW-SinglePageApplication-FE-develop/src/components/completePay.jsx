import React from "react";

const CompletePay = () => {
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
          <div className="-mx-12 mt-8 h-1 bg-green-600"></div>
          <div className="text-center ">
            <div className="bg-[#117c47] w-12 mx-auto my-2 p-3 text-center font-bold text-white rounded-full">
              3
            </div>
            Hoàn thành đơn hàng
          </div>
        </div>
      </div>
      <h1 className="text-center text-[20px] font-bold text-[#117c47]">
        HOÀN THÀNH ĐƠN HÀNG
      </h1>
      <div className="text-center my-10">Đơn hàng của bạn đã hoàn thành.</div>
      <div className="flex justify-center">
        <button className="text-center px-10 py-2 text-white rounded-md bg-[#117c47]">
          Quay lại mua sắm
        </button>
      </div>
    </div>
  );
};

export default CompletePay;
