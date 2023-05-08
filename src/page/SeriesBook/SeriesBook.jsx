import React from "react";
import "./index.css";
const SeriesBook = () => {
    return (
        <div>
            {/* <div className="my-5">
                <div className="bg-[#cff2fc] mb-2">
                    <div className="flex py-3 px-3">
                        <div className="mr-3">
                            <img
                                src="https://i.imgur.com/aEOCgNo.png"
                                className="w-6 h-6"
                                alt=""
                            />
                        </div>
                        <div className="font-bold text-lg text-[#289aef]">
                            SERIES BỘ
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFFF] mb-1">
                    <div className="flex p-3">
                        <div className="w-[25%] ml-3">
                            <img
                                src="https://cdn0.fahasa.com/media/catalog/product/t/s/tsnb55.jpg"
                                alt=""
                                className="w-[100%] h-[100%] m-auto"
                            />
                        </div>
                        <div className="md:flex w-[75%]">
                            <div className="md:w-[65%] w-[100%] ml-5 md:h-[40%] m-auto">
                                <div className="flex mb-2">
                                    <div className="mr-3 mt-[1px]">
                                        <img
                                            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/label_Bo.svg"
                                            className="w-6 h-6"
                                            alt=""
                                        />
                                    </div>
                                    <div className="font-medium text-base">
                                        Thiên Sứ Nhà Bên
                                    </div>
                                </div>
                                <div className="mb-2">
                                    Tác giả: Saekisan, Hanekoto
                                </div>
                                <div className="mb-2">
                                    Nhà xuất bản: Kim Đồng
                                </div>
                                <div className="text-[#2F80ED]">
                                    3898 lượt theo dõi
                                </div>
                            </div>
                            <div className="md:w-[35%] w-[100%] follow">
                                <button className="bg-[rgb(255,152,0)] md:w-[60%] w-[50%] m-auto rounded-[20px]">
                                    <span className="flex justify-center p-2">
                                        <img
                                            src="https://i.imgur.com/iEmRxIY.png"
                                            className="w-4 h-4 m-1"
                                            alt=""
                                        />
                                        <span className="ml-2 text-[#FFFF]">
                                            THEO DÕI
                                        </span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FFFF] mb-1">
                    <div className="flex py-3 px-3">
                        <div className="mr-3 mt-[2px]">
                            <img
                                src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/label_Bo.svg"
                                className="w-6 h-6"
                                alt=""
                            />
                        </div>
                        <div className="font-bold text-base">
                            Thiên Sứ Nhà Bên
                        </div>
                    </div>
                </div>

                <div className="bg-white p-2">
                    <div className="grid md:grid-cols-5 grid-cols-3 gap-2 md:mx-2">
                        <div className="relative hover:border-2 hover:shadow-md">
                            <div className="md:m-2 m-2">
                                <a href="">
                                    <img
                                        src="https://cdn0.fahasa.com/media/catalog/product/t/s/tsnb55.jpg"
                                        alt=""
                                    />
                                    <div className="ml-4 rounded-md text-white text-center w-16 bg-black">
                                        Tập 5.5
                                    </div>
                                </a>
                            </div>
                            <div className="mb-3">
                                <a href="">
                                    <h4 className="text-[#333333] md:text-lg text-base md:px-5 px-3 text-h4">
                                        Thiên Sứ Nhà Bên - Tập 5.5 - Tặng Kèm
                                        Bookmark
                                    </h4>
                                    <div className="flex">
                                        <span className="block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold">
                                            76.000
                                        </span>
                                        <span className="rounded-md bg-[#C92127] text-white text-xs font-bold w-10 h-6 pt-[1px] text-center">
                                            -7%
                                        </span>
                                    </div>
                                    <span className="block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through">
                                        95.000
                                    </span>
                                    <span className="block md:px-5 px-3 text-sm md:text-xs">
                                        Đã bán: 1
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="relative hover:border-2 hover:shadow-md">
                            <div className="md:m-2 m-2">
                                <a href="">
                                    <img
                                        src="https://cdn0.fahasa.com/media/catalog/product/t/h/thien-su-nha-ben_5_ban-pho-thong.jpg"
                                        alt=""
                                    />
                                    <div className="ml-4 rounded-md text-white text-center w-16 bg-black">
                                        Tập 5
                                    </div>
                                </a>
                            </div>
                            <div className="mb-3">
                                <a href="">
                                    <h4 className="text-[#333333] md:text-lg text-base md:px-5 px-3 text-h4">
                                        Thiên Sứ Nhà Bên - Tập 5 - Tặng Kèm
                                        Bookmark
                                    </h4>
                                    <div className="flex">
                                        <span className="block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold">
                                            76.000
                                        </span>
                                        <span className="rounded-md bg-[#C92127] text-white text-xs font-bold w-10 h-6 pt-[1px] text-center">
                                            -7%
                                        </span>
                                    </div>
                                    <span className="block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through">
                                        95.000
                                    </span>
                                    <span className="block md:px-5 px-3 text-sm md:text-xs">
                                        Đã bán: 1
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="relative hover:border-2 hover:shadow-md">
                            <div className="md:m-2 m-2">
                                <a href="">
                                    <img
                                        src="https://cdn0.fahasa.com/media/catalog/product/t/s/tsnb55.jpg"
                                        alt=""
                                    />
                                    <div className="ml-4 rounded-md text-white text-center w-16 bg-black">
                                        Tập 5.5
                                    </div>
                                </a>
                            </div>
                            <div className="mb-3">
                                <a href="">
                                    <h4 className="text-[#333333] md:text-lg text-base md:px-5 px-3 text-h4">
                                        Thiên Sứ Nhà Bên - Tập 5.5 - Tặng Kèm
                                        Bookmark
                                    </h4>
                                    <div className="flex">
                                        <span className="block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold">
                                            76.000
                                        </span>
                                        <span className="rounded-md bg-[#C92127] text-white text-xs font-bold w-10 h-6 pt-[1px] text-center">
                                            -7%
                                        </span>
                                    </div>
                                    <span className="block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through">
                                        95.000
                                    </span>
                                    <span className="block md:px-5 px-3 text-sm md:text-xs">
                                        Đã bán: 1
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="relative hover:border-2 hover:shadow-md">
                            <div className="md:m-2 m-2">
                                <a href="">
                                    <img
                                        src="https://cdn0.fahasa.com/media/catalog/product/t/h/thien-su-nha-ben_5_ban-pho-thong.jpg"
                                        alt=""
                                    />
                                    <div className="ml-4 rounded-md text-white text-center w-16 bg-black">
                                        Tập 5
                                    </div>
                                </a>
                            </div>
                            <div className="mb-3">
                                <a href="">
                                    <h4 className="text-[#333333] md:text-lg text-base md:px-5 px-3 text-h4">
                                        Thiên Sứ Nhà Bên - Tập 5 - Tặng Kèm
                                        Bookmark
                                    </h4>
                                    <div className="flex">
                                        <span className="block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold">
                                            76.000
                                        </span>
                                        <span className="rounded-md bg-[#C92127] text-white text-xs font-bold w-10 h-6 pt-[1px] text-center">
                                            -7%
                                        </span>
                                    </div>
                                    <span className="block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through">
                                        95.000
                                    </span>
                                    <span className="block md:px-5 px-3 text-sm md:text-xs">
                                        Đã bán: 1
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="relative hover:border-2 hover:shadow-md">
                            <div className="md:m-2 m-2">
                                <a href="">
                                    <img
                                        src="https://cdn0.fahasa.com/media/catalog/product/t/h/thien-su-nha-ben_5_ban-pho-thong.jpg"
                                        alt=""
                                    />
                                    <div className="ml-4 rounded-md text-white text-center w-16 bg-black">
                                        Tập 5
                                    </div>
                                </a>
                            </div>
                            <div className="mb-3">
                                <a href="">
                                    <h4 className="text-[#333333] md:text-lg text-base md:px-5 px-3 text-h4">
                                        Thiên Sứ Nhà Bên - Tập 5 - Tặng Kèm
                                        Bookmark
                                    </h4>
                                    <div className="flex">
                                        <span className="block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold">
                                            76.000
                                        </span>
                                        <span className="rounded-md bg-[#C92127] text-white text-xs font-bold w-10 h-6 pt-[1px] text-center">
                                            -7%
                                        </span>
                                    </div>
                                    <span className="block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through">
                                        95.000
                                    </span>
                                    <span className="block md:px-5 px-3 text-sm md:text-xs">
                                        Đã bán: 1
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="relative md:hidden block py-[100%] px-5">
                            <div className="border-2 rounded-2xl text-center p-1 border-teal-400">
                                <button className="text-teal-500 hover:text-orange-400">
                                    Xem Thêm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default SeriesBook;
