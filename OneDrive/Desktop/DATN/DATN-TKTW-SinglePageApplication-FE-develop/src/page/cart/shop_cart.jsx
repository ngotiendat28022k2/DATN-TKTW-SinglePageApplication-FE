import React from "react";
import ListProductCart from "../../components/List_product_cart";

const ShopCart = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-[#117c47] text-[20px] font-bold">
        Giỏ hàng
      </h1>
      <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3 my-10 mx-48">
        <ListProductCart></ListProductCart>
        <div className="border rounded-md max-h-[270px]">
          <div className="text-center text-white font-bold bg-[#117c47] rounded-t-md py-2">
            Tóm tắt đơn hàng
          </div>
          <div className="grid grid-cols-2 px-4 py-5">
            <div className="">
              <div className="my-1">Sản phẩm</div>
              <div className="my-1">Phí vận chuyển</div>
              <div className="my-1">Tạm tính</div>
            </div>
            <div className="">
              <div className="text-right my-1">3</div>
              <div className="text-right my-1">Miễn phí</div>
              <div className="text-right my-1">216.000 đ</div>
            </div>
            <div className="col-span-2 my-3 italic">
              (Đã bao gồm Thuế VAT và Phí đóng gói cơ bản)
            </div>
            <div className="col-span-2 border border-black w-2/3 mx-auto my-2"></div>
            <div className="my-2 font-bold">Tổng:</div>
            <div className="text-right my-2">216.000 đ</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex justify-end">
          <button className="px-20 py-3 font-semibold text-white bg-gray-400 rounded-md">
            <h1>QUAY LẠI</h1>
          </button>
        </div>
        <div className="justify-start">
          <button className="px-16 py-3 font-semibold bg-[#fdc92d] rounded-md">
            <h1>THANH TOÁN</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
