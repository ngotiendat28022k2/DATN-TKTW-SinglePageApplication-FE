import React, { useState } from 'react'
import DomesticBook from './DomesticBook.component';
import ForeignBook from './ForeignBook.component';
import SchoolSupplier from './SchoolSupplier.componrent';


const ClientMenu = () => {
    const [showDomesticSubMenu, setShowDomesticSubMenu] = useState(true);
    const [showForeignSubMenu, setShowForeignSubMenu] = useState(false);
    const [showSchoolSupplierSubMenu, setshowSchoolSupplierSubMenu] = useState(false);
    return (
        <div className="z-10">
            <div className="md:w-[1280px] md:m-auto flex justify-between bg-white">
                <div className="md:mt-4 md:w-[25%] w-[40%]">
                    <div className="font-bold md:text-2xl md:text-gray-500 md:text-left md:mr-0  mb-4 flex md:ml-9 ml-6 md:w-[90%] w-[230%] text-lg text-center justify-between">
                        Danh mục sản phẩm
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-lg md:hidden block m-0 w-7 h-7 pl-2" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                        </svg>
                    </div>
                    <ul className="md:px-6 pr-0 pl-6 md:mb-10">
                        <li className="md:py-3 py-2 hover:bg-gray-200 rounded-xl"><a href="" className="md:text-lg text-base md:px-3 px-0 text-[#212121] font-medium  hover:no-underline hover:text-black"
                            onMouseEnter={() => {
                                setShowDomesticSubMenu(true);
                                setShowForeignSubMenu(false);
                                setshowSchoolSupplierSubMenu(false)
                            }}
                            onMouseLeave={() => setShowDomesticSubMenu(true)}
                        >Sách Trong Nước</a></li>
                        <li className="md:py-3 py-2 hover:bg-gray-200 rounded-xl"><a href="" className="md:text-lg text-base md:px-3 px-0 text-[#212121] font-medium  hover:no-underline hover:text-black"
                             onMouseEnter={() => {
                                setShowDomesticSubMenu(false);
                                setShowForeignSubMenu(true);
                                setshowSchoolSupplierSubMenu(false)
                            }}
                            onMouseLeave={() => setShowForeignSubMenu(true)}
                        >FOREIGN BOOKS</a></li>
                        <li className="md:py-3 py-2 hover:bg-gray-200 rounded-xl"><a href="" className="md:text-lg text-base md:px-3 px-0 text-[#212121] font-medium  hover:no-underline hover:text-black"
                             onMouseEnter={() => {
                                setShowDomesticSubMenu(false);
                                setShowForeignSubMenu(false);
                                setshowSchoolSupplierSubMenu(true)
                            }}
                            onMouseLeave={() => setshowSchoolSupplierSubMenu(true)}
                        >VPP - DỤNG CỤ HỌC SINH</a></li>
                        <li className="md:py-3 py-2 hover:bg-gray-200 rounded-xl"><a href="" className="md:text-lg text-base md:px-3 px-0 text-[#212121] font-medium  hover:no-underline hover:text-black" >Đồ chơi</a></li>
                        <li className="md:py-3 py-2 hover:bg-gray-200 rounded-xl"><a href="" className="md:text-lg text-base md:px-3 px-0 text-[#212121] font-medium  hover:no-underline hover:text-black" >Làm Đẹp - Sức Khỏe</a></li>
                        <li className="md:py-3 py-2 hover:bg-gray-200 rounded-xl"><a href="" className="md:text-lg text-base md:px-3 px-0 text-[#212121] font-medium  hover:no-underline hover:text-black" >Hành Trang Đến Trường</a></li>
                        <li className="md:py-3 py-2 hover:bg-gray-200 rounded-xl"><a href="" className="md:text-lg text-base md:px-3 px-0 text-[#212121] font-medium  hover:no-underline hover:text-black" >Đồ Chơi Theo Thương Hiệu</a></li>
                    </ul>
                </div>
                <div className="md:w-[12px] md:mt-4 mt-12 md:mr-7 border-l md:border-[#CDCFD0]"></div>
                <div className="md:mt-4 md:w-[70%] w-[50%] mt-9">
                {showDomesticSubMenu && <DomesticBook />}
                    {showForeignSubMenu && <ForeignBook />}
                    {showSchoolSupplierSubMenu && <SchoolSupplier />}
                </div>
            </div>
        </div>
    )
}

export default ClientMenu