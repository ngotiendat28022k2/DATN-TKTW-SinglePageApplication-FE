import React from 'react'

const ForeignBook = () => {
  return (
    <div>
           <div className="md:flex hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-book text-[#e92424] mr-4" viewBox="0 0 16 16">
                            <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                        </svg>
                        <span className="inline font-bold text-2xl text-black-500">Foreign Books</span>
                    </div>
                    <div className="md:mt-4 md:grid md:grid-cols-4 justify-between">
                        <div className="md:mr-6 md:mb-10 md:block flex">
                            <h4 className="font-medium text-sm py-3 w-[85%]">VĂN HỌC</h4>
                            <ul className="md:block hidden">
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Tiểu Thuyết</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Truyện Ngắn - Tản Văn</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Light Novel</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Ngôn Tình</a></li>
                            </ul>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-down-fill md:hidden block w-5 h-5 my-3 justify-between" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </div>
                        <div className="md:mr-6 md:mb-10 md:block flex">
                            <h4 className="font-medium text-sm py-3 w-[85%]">KINH TẾ</h4>
                            <ul className="md:block hidden">
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Nhân Vật - Bài Học Kinh Doanh</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Quản Trị - Lãnh Đạo</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Marketing - Bán Hàng</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Phân Tích Kinh Tế</a></li>
                            </ul>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-down-fill md:hidden block w-5 h-5 my-3 justify-between" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </div>
                        <div className="md:mr-6 md:mb-10 md:block flex">
                            <h4 className="font-medium text-sm py-3 w-[85%]">TÂM LÝ - KĨ NĂNG SỐNG</h4>
                            <ul className="md:block hidden">
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Kĩ Năng Sống</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Rèn Luyện Nhân Cách</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Tâm Lý</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Sách Cho Tuổi Mới Lớn</a></li>
                            </ul>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-down-fill md:hidden block w-5 h-5 my-3 justify-between" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </div>
                        <div className="md:mr-6 md:mb-10 md:block flex">
                            <h4 className="font-medium text-sm py-3 w-[85%]">NUÔI DẠY CON</h4>
                            <ul className="md:block hidden">
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Cẩm Nang Làm Cha Mẹ</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Phương Pháp Giáo Dục Trẻ</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Phát Triển Trí Tuệ Cho Trẻ</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Phát Triển Kỹ Năng Cho Trẻ</a></li>
                            </ul>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-down-fill md:hidden block w-5 h-5 my-3 justify-between" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </div>

                        <div className="md:mr-6 md:mb-10 md:block flex">
                            <h4 className="font-medium text-sm py-3 w-[85%]">VĂN HỌC</h4>
                            <ul className="md:block hidden">
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Tiểu Thuyết</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Truyện Ngắn - Tản Văn</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Light Novel</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Ngôn Tình</a></li>
                            </ul>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-down-fill md:hidden block w-5 h-5 my-3 justify-between" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </div>
                        <div className="md:mr-6 md:mb-10 md:block flex">
                            <h4 className="font-medium text-sm py-3 w-[85%]">KINH TẾ</h4>
                            <ul className="md:block hidden">
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Nhân Vật - Bài Học Kinh Doanh</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Quản Trị - Lãnh Đạo</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Marketing - Bán Hàng</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Phân Tích Kinh Tế</a></li>
                            </ul>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-down-fill md:hidden block w-5 h-5 my-3 justify-between" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </div>
                        <div className="md:mr-6 md:mb-10 md:block flex">
                            <h4 className="font-medium text-sm py-3 w-[85%]">TÂM LÝ - KĨ NĂNG SỐNG</h4>
                            <ul className="md:block hidden">
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Kĩ Năng Sống</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Rèn Luyện Nhân Cách</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Tâm Lý</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Sách Cho Tuổi Mới Lớn</a></li>
                            </ul>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-down-fill md:hidden block w-5 h-5 my-3 justify-between" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </div>
                        <div className="md:mr-6 md:mb-10 md:block flex">
                            <h4 className="font-medium text-sm py-3 w-[85%]">NUÔI DẠY CON</h4>
                            <ul className="md:block hidden">
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Cẩm Nang Làm Cha Mẹ</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Phương Pháp Giáo Dục Trẻ</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Phát Triển Trí Tuệ Cho Trẻ</a></li>
                                <li className="md:pt-1"><a href="" className="md:hover:no-underline text-[#666] text-sm md:hover:text-[#FAD6A5]">Phát Triển Kỹ Năng Cho Trẻ</a></li>
                            </ul>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-down-fill md:hidden block w-5 h-5 my-3 justify-between" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </div>
                    </div>
    </div>
  )
}

export default ForeignBook