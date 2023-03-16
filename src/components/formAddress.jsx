import React from "react";

const FormAddress = () => {
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
          <div className=""></div>
          <div className="text-center ">
            <div className="bg-[#ffffff] text-[#117c47] border-[#117c47] border w-12 mx-auto my-2 p-3 text-center font-bold rounded-full">
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
        ĐỊA CHỈ & DỊCH VỤ
      </h1>
      <div className="grid grid-cols-2 gap-5 my-10 mx-[300px]">
        <div className="">
          <h2 className="font-semibold text-[#117c47] mb-5">
            ĐỊA CHỈ GIAO HÀNG
          </h2>
          <form className="grid grid-cols-6" action="">
            <div className="justify-end col-span-2">
              <label className="flex font-semibold mx-3 my-2" htmlFor="">
                Họ và tên <p className="text-red-500">*</p>
              </label>
            </div>
            <div className="col-span-4">
              <input
                className="border rounded-md w-full my-2"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="justify-end col-span-2">
              <label className="flex font-semibold mx-3 my-2" htmlFor="">
                Điện thoại <p className="text-red-500">*</p>
              </label>
            </div>
            <div className="col-span-4">
              <input
                className="border rounded-md w-full my-2"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="justify-end col-span-2">
              <label className="flex font-semibold mx-3 my-2" htmlFor="">
                Quốc gia <p className="text-red-500">*</p>
              </label>
            </div>
            <div className="col-span-4">
              <input
                className="border rounded-md w-full my-2"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="justify-end col-span-2">
              <label className="flex font-semibold mx-3 my-2" htmlFor="">
                Tỉnh thành <p className="text-red-500">*</p>
              </label>
            </div>
            <div className="col-span-4">
              <input
                className="border rounded-md w-full my-2"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="justify-end col-span-2">
              <label className="flex font-semibold mx-3 my-2" htmlFor="">
                Quận/Huyện <p className="text-red-500">*</p>
              </label>
            </div>
            <div className="col-span-4">
              <input
                className="border rounded-md w-full my-2"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="justify-end col-span-2">
              <label className="flex font-semibold mx-3 my-2" htmlFor="">
                Phường/Xã <p className="text-red-500">*</p>
              </label>
            </div>
            <div className="col-span-4">
              <input
                className="border rounded-md w-full my-2"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="justify-end col-span-2">
              <label className="flex font-semibold mx-3 my-2" htmlFor="">
                Tên tòa nhà <p className="text-red-500">*</p>
              </label>
            </div>
            <div className="col-span-4">
              <input
                className="border rounded-md w-full my-2"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="justify-end col-span-2">
              <label className="flex font-semibold mx-3 my-2" htmlFor="">
                Số nhà <p className="text-red-500">*</p>
              </label>
            </div>
            <div className="col-span-4">
              <input
                className="border rounded-md w-full my-2"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="justify-end col-span-2">
              <label className="flex font-semibold mx-3 my-2" htmlFor="">
                Tên đường <p className="text-red-500">*</p>
              </label>
            </div>
            <div className="col-span-4">
              <input
                className="border rounded-md w-full my-2"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="justify-end col-span-2"></div>
            <div className="col-span-4 gap-3">
              <button className="bg-green-500 text-white font-bold rounded-md px-5 py-2">
                Lưu
              </button>
              <button className="bg-gray-300 text-white font-bold rounded-md mx-2 px-5 py-2">
                Hủy bỏ
              </button>
            </div>
          </form>
          <p>Phí vận chuyển: Miễn phí</p>
          <div className="my-5">
            <h2 className="font-semibold text-[#117c47]">GHI CHÚ GIAO HÀNG</h2>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="p-3 w-full h-[200px] border rounded-md"
              placeholder="Ghi chú"
            ></textarea>
          </div>
        </div>
        <div className="">
          <h2 className="font-semibold text-[#117c47] mb-5">CHỌN DỊCH VỤ</h2>
          <div className="">
            <div className="my-5">
              <input type="checkbox" name="" className="w-4 h-4" id="" /> Bọc
              sách (3.000đ/quyển)
            </div>
            <div className="my-5">
              <input type="checkbox" name="" className="w-4 h-4" id="" /> Gói
              quà (10.000đ/quyển)
            </div>
            <div className="my-5">
              <input type="checkbox" name="" className="w-4 h-4" id="" /> Xuất
              hóa đơn
            </div>
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

export default FormAddress;
