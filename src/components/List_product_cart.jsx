import React from "react";

const ListProductCart = () => {
  return (
    <div className="2xl:col-span-2 xl:col-span-2 border border-gray-300 p-10 rounded-md">
      <div className="font-bold text-[#117c47] text-[16px]">SẢN PHẨM</div>
      {/* Product */}
      <div className="grid grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1  my-3">
        <div className="flex gap-3">
          <div className="img">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/react-project-f1a10.appspot.com/o/image%2F371515_cung-la-tieng-em-ma-la-lam.jpg?alt=media&token=e8852918-1ba8-45bd-ac2f-d3887ab8fc02"
              alt=""
            />
          </div>
          <div className="h-[70px] text-[#66645c]">
            <strong className=" font-semibold">
              Cũng là "Tiếng em"mà lạ lắm
            </strong>
            <div className="flex gap-2 my-2">
              <button className=" border px-2 rounded-[3px] text-[#66645c]">
                -
              </button>
              <div className="border px-2 rounded-[3px]">1</div>
              <button className="border px-2 rounded-[3px]">+</button>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[#66645c] font-semibold">2 x 59.000 đ</div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-[#66645c]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Product */}
    </div>
  );
};

export default ListProductCart;
