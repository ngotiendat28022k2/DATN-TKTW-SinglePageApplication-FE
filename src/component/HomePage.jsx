import React from 'react'

const HomePage = () => {
    return (
        <div>
            <div className="bg-slate-50">
                <div>
                    {/* <!-- Top Line Start --> */}
                    <div className="bg-white border-gray-200">
                        <ul className="container mx-auto flex">
                            <li className="ml-40 text-gray-700 border-b border-gray-100 text-sm font-medium">Miễn phí giao hàng |</li>
                            <li className="mx-4 text-gray-700 border-b border-gray-100 text-sm font-medium">80.000 tựa sách |</li>
                            <li className="mx-2 text-gray-700 border-b border-gray-100 text-sm font-medium">Vinabook Reader</li>
                        </ul>
                    </div>
                    {/* <!-- Top Line End --> */}

                    {/* <!-- Header Start --> */}
                    <div className="bg-white">
                        <div className="mx-auto grid grid-cols-3 text-center h-24">
                            <div className="">
                                <img className="mx-auto mr-12 mt-6" src="./img/vnb_logo_2x.png" alt="" />
                            </div>
                            <div className="mt-6">
                                <form className="flex items-center h-9">
                                    <div className="relative w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <input type="text" id="simple-search"
                                            className="h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                            placeholder="Search" required>
                                        </input>
                                    </div>
                                    <button type="submit"
                                        className="h-9 p-2.5 ml-2 text-sm font-medium text-white bg-green-700 rounded-full border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                        </svg>
                                    </button>
                                </form>
                            </div>
                            <div className="flex mt-6 ml-24">
                                <svg className="h-9" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z">
                                    </path>
                                </svg>
                                <ul className="container mx-auto flex mt-2">
                                    <li className="ml-2">Đăng nhập |</li>
                                    <li className="ml-2">Đăng ký</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Header End --> */}


                    {/* <!-- Menu Start --> */}
                    <div className="mx-auto">
                        <nav
                            className="bg-green-700 navbar navbar-expand-lg shadow-lg py-2 bg-gray-50 relative flex items-center w-full justify-between">
                            <div className="px-6 container w-[1240px] mx-auto">
                                <button
                                    className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out"
                                    type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentY"
                                    aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-5" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor"
                                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                                        </path>
                                    </svg>
                                </button>
                                <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                                    <ul className="navbar-nav mr-auto flex flex-row">
                                        <li className="nav-item dropdown static">
                                            <a className="nav-link block pr-2 lg:px-2 py-2 text-xl font-semibold text-white transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap"
                                                href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonY"
                                                data-bs-toggle="dropdown" aria-expanded="false">Danh mục sách
                                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2"
                                                    role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <path fill="currentColor"
                                                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z">
                                                    </path>
                                                </svg>
                                            </a>
                                            <div
                                                className="dropdown-menu w-[100%] max-w-[1240px] m-0 left-[50%] translate-x-[-50%] transform mt-0 hidden shadow-lg bg-white absolute top-full"
                                                aria-labelledby="dropdownMenuButtonY">
                                                <div className="px-6 lg:px-8 py-5">
                                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                                        <div className="bg-white text-gray-600 ">
                                                            <p
                                                                className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">
                                                                Lorem ipsum</p>
                                                            <a href="#!" aria-current="true"
                                                                className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Dolor
                                                                sit</a>
                                                            <a href="#!" aria-current="true"
                                                                className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Amet
                                                                consectetur</a>
                                                            <a href="#!" aria-current="true"
                                                                className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Cras
                                                                justo odio</a>
                                                            <a href="#!" aria-current="true"
                                                                className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Adipisicing
                                                                elit</a>
                                                        </div>
                                                        <div className="bg-white text-gray-600">
                                                            <p
                                                                className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">
                                                                Explit voluptas</p>
                                                            <a href="#!" aria-current="true"
                                                                className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Perspiciatis
                                                                quo</a>
                                                            <a href="#!" aria-current="true"
                                                                className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Cras
                                                                justo odio</a>
                                                            <a href="#!" aria-current="true"
                                                                className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Laudant
                                                                maiores</a>
                                                            <a href="#!" aria-current="true"
                                                                className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Provident
                                                                dolor</a>
                                                        </div>
                                                        <div className="bg-white text-gray-600">
                                                            <p
                                                                className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">
                                                                Iste quaerato</p>
                                                            <a href="#!" aria-current="true"
                                                                className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Cras
                                                                justo odio</a>
                                                            <a href="#!" aria-current="true"
                                                                className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Est
                                                                iure</a>
                                                            <a href="#!" aria-current="true"
                                                                className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Praesentium</a>
                                                            <a href="#!" aria-current="true"
                                                                className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Laboriosam</a>
                                                        </div>
                                                        <div className="bg-white text-gray-600">
                                                            <p
                                                                className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">
                                                                Cras justo odio</p>
                                                            <a href="#!" aria-current="true"
                                                                className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Saepe</a>
                                                            <a href="#!" aria-current="true"
                                                                className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Vel
                                                                alias</a>
                                                            <a href="#!" aria-current="true"
                                                                className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Sunt
                                                                doloribus</a>
                                                            <a href="#!" aria-current="true"
                                                                className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Cum
                                                                dolores</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="text-center p-2">
                                        <ul className="flex place-content-center text-white font-body">
                                            <li>Hotline : 1900 6401 |</li>
                                            <li> Hỗ trợ trực tuyến</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                </div>
                {/* <!-- <div className="h-10 grid grid-cols-2 bg-green-500"> */}
                <div className="flex place-content-center p-2">
                    <ul className="flex place-content-center">
                        <li className="">
                            <svg className="h-9 mx-auto" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="2 4 20 20"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5">
                                </path>
                            </svg>
                        </li>
                        <li>
                            <p className="text-xl ml-4">Danh mục sách</p>
                        </li>
                    </ul>
                </div>
                <div className="text-center p-2">
                    <ul className="flex place-content-center">
                        <li>Hotline : 1900 6401 |</li>
                        <li>Hỗ trợ trực tuyến</li>
                    </ul>
                </div>
            </div>
            {/* <!-- Mega Menu --> */}
            < div className="container w-[1240px] mx-auto bg-slate-500 mt-2" >
                <div className="col-span-3">
                    <div className="grid grid-cols-3">
                        <div className="col-span-2 row-span-2"><img className="w-[826px] h-[463px]" src="./img/banner1.jpg" alt="" /></div>
                        <div className=""><img src="./img/banner2.jpg" alt="" /></div>
                        <div className=""><img src="./img/banner3.jpg" alt="" /></div>
                        <div className=""><img className="h-full" src="./img/banner4.jpg" alt="" /></div>
                        <div className=""><img className="h-full" src="./img/banner5.jpg" alt="" /></div>
                        <div className=""><img src="./img/banner6.jpg" alt="" /></div>
                    </div>
                </div>
            </div >
            {/* <!-- Mega Menu End --> */}

            {/* <!-- New Book Start --> */}
            <div className="container w-[1240px] mx-auto mt-6">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3">
                        <div>
                            <h1 className="text-2xl font-semibold">Sách mới hay</h1>
                            <div className="bg-red-400 h-[400px] grid grid-cols-3 gap-4 mt-6">
                                <div>
                                    <img className="m-8 p-4 shadow-md shadow-slate-600" src="./img/sachmoihay.jpg" alt="" />
                                </div>
                                <div className="col-span-2 text-white">
                                    <h1 className="text-2xl font-semibold mt-12">Bách Khoa Toàn Thư Content: Đại Biểu Mẫu</h1>
                                    <p className="mt-2">Nhiều tác giả</p>
                                    <hr className="w-[93px]" />
                                    <p className="mt-2 mr-12">Bạn thân mến, Bạn đang sống trong một thời đại mà khi khép mắt vào, điều còn đọng
                                        lại
                                        trong đầu bạn có
                                        khi không phải là những lời thì thầm chúc ngủ ngon, mà là lời lẽ mời gọi từ một chiếc email bạn nhận
                                        được lúc nửa đêm. Và khi mở mắt ra, điều đầu tiên bạn nhìn thấy có thể không phải là một gương mặt của
                                        người thân quen, hay của chính mình trong gương. Đó có thể là những dòng tin trên chiếc điện thoại của
                                        bạn, một hình ảnh trên mạng xã hội, một vài video quảng cáo, một clip Tiktok vui nhộn… Vâng, đúng thế.
                                        Chào ngày mới, chúng ta đang sống...</p>
                                    <hr className="mt-2 w-[550px]" />
                                    <div className="grid grid-cols-3 gap-4 mt-2">
                                        <div className="flex">
                                            <button className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold">-10%</button>
                                            <p className="text-lg font-semibold ml-4 place-content-center line-through">1.200.000 ₫</p>
                                        </div>
                                        <div>
                                            <p className="text-lg font-semibold">1.080.000 ₫</p>
                                        </div>
                                        <div>
                                            <button className="bg-red-600 w-[123px] h-[42px] rounded-lg text-white font-semibold ml-2">Mua
                                                Ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-6">
                                <p className="text-2xl font-semibold">Sách bán chạy</p>
                            </div>
                            <div className="grid grid-cols-3 grid-rows-2 gap-10 mt-6">
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-xl font-semibold text-center">Sách bán chạy trong tuần</p>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- New Book End --> */}

            {/* <!-- Feature Book Start --> */}
            <div className="container w-[1240px] mx-auto mt-6">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3">
                        <div>
                            <h1 className="text-2xl font-semibold">Sách hay</h1>
                            <div className="bg-green-700 h-[400px] grid grid-cols-3 gap-4 mt-6">
                                <div>
                                    <img className="m-8 p-4 shadow-md shadow-slate-600" src="./img/sachhay.jpg" alt="" />
                                </div>
                                <div className="col-span-2 text-white">
                                    <h1 className="text-2xl font-semibold mt-12">
                                        Luật Tâm Thức - Giải Mã Ma Trận Vũ Trụ</h1>
                                    <p className="mt-2">Ngô Sa Thạch</p>
                                    <hr className="w-[93px]" />
                                    <hr className="mt-10 w-[550px]" />
                                    <div className="grid grid-cols-3 gap-4 mt-2">
                                        <div className="flex">
                                            <button className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold">-10%</button>
                                            <p className="text-lg font-semibold ml-4 place-content-center line-through">1.200.000 ₫</p>
                                        </div>
                                        <div>
                                            <p className="text-lg font-semibold">1.080.000 ₫</p>
                                        </div>
                                        <div>
                                            <button className="bg-red-600 w-[123px] h-[42px] rounded-lg text-white font-semibold ml-2">Mua
                                                Ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-6">
                                <p className="text-2xl font-semibold">Sách Văn Học Mới</p>
                            </div>
                            <div className="grid grid-cols-3 grid-rows-2 gap-10 mt-6">
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-xl font-semibold text-center">Báo Chí Giới Thiệu</p>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Feature Book End --> */}

            {/* <!-- Comic Book Start --> */}
            <div className="container w-[1240px] mx-auto mt-6">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3">
                        <div>
                            <h1 className="text-2xl font-semibold">Truyện tranh</h1>
                            <div className="bg-red-700 h-[400px] grid grid-cols-3 gap-4 mt-6">
                                <div>
                                    <img className="m-8 p-2 shadow-md shadow-slate-600" src="./img/truyentranh.jpg" alt="" />
                                </div>
                                <div className="col-span-2 text-white">
                                    <h1 className="text-2xl font-semibold mt-12">Combo Lucky Luke - Bộ 4 Tập (Số Ngẫu hiên)</h1>
                                    <p className="mt-2">Nhiều tác giả</p>
                                    <hr className="w-[93px]" />
                                    <p className="mt-2 mr-12">
                                        Combo Lucky Luke - Bộ 4 Tập (Số Ngẫu hiên)
                                        First News
                                        Nhân vật trung tâm của loạt truyện là Lucky Luke - chàng cao bồi không bao giờ biết sợ, luôn khoác
                                        chiếc
                                        áo ghi-lê đen, sơ mi vàng và cổ đeo chiếc khăn màu đỏ, làm bạn cùng chú ngựa Jolly Jumper đặc biệt. Đó
                                        là người anh hùng hào phóng và dũng cảm, người bắn nhanh hơn cả cái bóng của mình. Các tập truyện luôn
                                        kết thúc bằng một hình ảnh đã trở thành bất hủ trong lịch sử truyện tranh: "gã cao bồi nghèo đơn độc"
                                        rong ruổi trên con ngựa của mình vào buổi hoàng hôn, sau khi đánh bại những kẻ xấu</p>
                                    <hr className="mt-2 w-[550px]" />
                                    <div className="grid grid-cols-3 gap-4 mt-2">
                                        <div className="flex">
                                            <button className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold">-10%</button>
                                            <p className="text-lg font-semibold ml-4 place-content-center line-through">1.200.000 ₫</p>
                                        </div>
                                        <div>
                                            <p className="text-lg font-semibold">1.080.000 ₫</p>
                                        </div>
                                        <div>
                                            <button className="bg-red-600 w-[123px] h-[42px] rounded-lg text-white font-semibold ml-2">Mua
                                                Ngay</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-6">
                                <p className="text-2xl font-semibold">Sách Kinh Tế Mới</p>
                            </div>
                            <div className="grid grid-cols-3 grid-rows-2 gap-10 mt-6">
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-xl font-semibold text-center">Sách Mới Nhập Về</p>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Comic Book End --> */}

            {/* <!-- Feature Author Start --> */}
            <div className="container w-[1240px] mx-auto mt-6">
                <div className="grid grid-cols-4 gap-4 ">
                    <div className="col-span-3 ">
                        <div>
                            <h1 className="text-2xl font-semibold">Tác giả nổi bật</h1>
                            <div className="bg-white h-[400px] grid grid-cols-3 gap-4 mt-6 border border-solid border-inherit rounded-md">
                                <div>
                                    <img className="m-8 p-4 shadow-sm rounded-sm" src="./img/author.jpg" alt="" />
                                </div>
                                <div className="col-span-2 text-black">
                                    <h1 className="text-2xl font-semibold mt-12">Nguyên Phong</h1>
                                    <hr className="w-[93px]" />
                                    <p className="mt-2 mr-12 font-xs">Nguyên Phong tên thật là Vũ Văn Du, sinh năm 1950 tại Hà Nội. Năm 1968,
                                        ông
                                        rời khỏi
                                        Việt Nam, sang Hoa Kỳ du học hai nghành Sinh vật học và Điện toán, sau đó ông sống và làm việc tại Hoa
                                        Kỳ cho đến nay.Bên cạnh vai trò là một nhà khoa học, Nguyên Phong còn là dịch giả của hàng loạt sách
                                        về
                                        văn hóa và tâm linh phương Đông rất nổi tiếng. Trong số đó, có thể kể đến: Hành Trình Về Phương Đông,
                                        Ngọc Sáng Trong Hoa Sen, Bên Rặng Tuyết Sơn, Hoa Sen Trên Tuyết, Hoa Trôi Trên Sóng Nước, Trở Về Từ Xứ
                                        Tuyết, Minh Triết Trong Đời Sống Ăn Uống, Đường Mây Qua Xứ Tuyết…</p>
                                    <hr className="mt-2 w-[550px]" />
                                    <div className="grid grid-cols-3 gap-4 mt-6">
                                        <div className="flex">
                                            <img className="w-[59px] h-27px" src="./img/author1.jpg" alt="" />
                                            <p className="text-xs text-green-800">Huyền Thuật Và Các Đạo Sĩ Tây Tạng</p>
                                        </div>
                                        <div className="flex">
                                            <img className="w-[43px] h-65px" src="./img/author2.jpg" alt="" />
                                            <p className="text-xs text-green-800">Đường Mây Qua Xứ Tuyết (Tái Bản 2021)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="mt-6">
                                <p className="text-2xl font-semibold">Tạp chí bán chạy nhất</p>
                            </div>
                            <div className="grid grid-cols-3 grid-rows-2 gap-10 mt-6">
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className="text-xl font-semibold text-center">Sách bán chạy trong tuần</p>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 mt-5">
                            <div>
                                <img className="w-[56px] h-[89px] mx-auto mt-2" src="./img/book7.jpg" alt="" />
                            </div>
                            <div className="col-span-2">
                                <h4 className="text-sm font-semibold">Con Chó Nhỏ Mang Giỏ Hoa Hồng (Bìa Mềm)</h4>
                                <p className="text-xs">Nguyễn nhật Ánh</p>
                                <div className="flex items-center">
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>First star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Second star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Third star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <title>Fourth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <title>Fifth star</title>
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                        </path>
                                    </svg>
                                </div>
                                <div className="flex col-span-2">
                                    <p className="text-xs line-through">200.000 ₫</p>
                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Feature Author End --> */}

            {/* <!-- Kids Book Start  --> */}
            <div className="container w-[1240px] mx-auto mt-6">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3">
                        <div>
                            <div className="mt-6">
                                <p className="text-2xl font-semibold">Sách Nuôi Dạy Trẻ</p>
                            </div>
                            <div className="grid grid-cols-3 grid-rows-2 gap-10 mt-6">
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
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
            {/* <!-- Kids Book End  --> */}

            {/* <!-- Child Books News Start --> */}
            <div className="container w-[1240px] mx-auto mt-6">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3">
                        <div>
                            <div className="mt-6">
                                <p className="text-2xl font-semibold">Sách Thiếu Nhi Mới</p>
                            </div>
                            <div className="grid grid-cols-3 grid-rows-2 gap-10 mt-6">
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[280px] h-[225] bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <img className="h-[170px] mx-auto rounded-sm shadow-sm pt-4" src="./img/book1.jpg" alt="" />
                                        </div>
                                        <div>
                                            <div className="mt-2">
                                                <h3 className="text-sm font-medium mt-2">
                                                    Sự Im Lặng Của Bầy...
                                                </h3>
                                                <p className="text-xs">Thomas Haris</p>
                                                <hr className="mt-2" />
                                                <p className="text-sm font-light mt-2 mr-2">Những cuộc phỏng vấn ở xà lim với kẻ ăn thịt người ham
                                                    thích
                                                    trò
                                                    đùa trí
                                                    tuệ,...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="mt-2" />
                                    <div>
                                        <div className="grid grid-cols-2 m-2">
                                            <div>
                                                <button
                                                    className="bg-red-600 w-[55px] h-[30px] rounded-lg text-white font-semibold ml-2">-10%</button>
                                            </div>
                                            <div>
                                                <div className="flex col-span-2">
                                                    <p className="text-xs line-through">200.000 ₫</p>
                                                    <p className="text-sm text-red-500 ml-2">180.000 ₫</p>
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
            {/* <!-- Child Books News End --> */}

            {/* <!-- Subscribe Start --> */}
            <div className="h-22 bg-green-700 mt-12">
                <div className="container grid grid-cols-8 gap-4">
                    <div className="col-span-3 mt-4 text-white ml-80">
                        <h2 className="text-lg font-semibold">ĐĂNG KÝ NHẬN EMAIL</h2>
                        <p>Đăng ký nhận thông tin sách mới, sách bán</p>
                    </div>
                    <div className="mt-4">
                        <input
                            className="w-[178px] h-[39px] rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Tên của bạn">
                        </input>
                    </div>
                    <div className="mt-4">
                        <input
                            className="w-[300px] h-[39px] rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Nhập Email của bạn">
                        </input>
                    </div>
                    <div className="mt-4 ml-32">
                        <select id="countries"
                            className="bg-gray-50 border w-[182px] h-[39px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                            <option selected>Chọn thể loại</option>
                            <option value="US">Comic</option>
                            <option value="CA">Manga</option>
                            <option value="FR">Advance</option>
                            <option value="DE">Travel</option>
                        </select>
                    </div>
                    <div className="mt-4 ml-32">
                        <button
                            className="w-[174px] h-[39px] bg-white font-bold py-2 px-4 border rounded-lg border-green-800 text-green-800">
                            Đăng ký ngay
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- Subscribe End --> */}

            {/* <!-- Footer start --> */}
            <footer className="bg-gray-900">
                <div className="container mx-auto py-12 flex flex-wrap">
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-white font-semibold mb-4">Về Vinabook</h3>
                        <ul className="text-gray-400 text-sm">
                            <li className="mb-2"><a href="#" className="hover:text-white">Giới thiệu Vinabook</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Tuyển dụng</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Chính sách bảo mật</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Chính sách đổi trả và hoàn tiền</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-white font-semibold mb-4">Hỗ trợ khách hàng</h3>
                        <ul className="text-gray-400 text-sm">
                            <li className="mb-2"><a href="#" className="hover:text-white">Trung tâm trợ giúp</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Hướng dẫn đặt hàng</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Phương thức thanh toán</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Phương thức vận chuyển</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-white font-semibold mb-4">Kết nối với chúng tôi</h3>
                        <ul className="text-gray-400 text-sm">
                            <li className="mb-2"><a href="#" className="hover:text-white">Facebook</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Instagram</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Twitter</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Youtube</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-white font-semibold mb-4">Tải ứng dụng Vinabook</h3>
                        <div className="flex">
                            <a href="#" className="mr-4">
                                <img src="https://www.vinabook.com/img/google-play.png" alt="Google Play" className="h-10" />
                            </a>
                            <a href="#">
                                <img src="https://www.vinabook.com/img/app-store.png" alt="App Store" /></a>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-white font-semibold mb-4">Đăng ký nhận tin mới từ Vinabook</h3>
                            <form className="flex">
                                <input type="email" placeholder="Nhập email của bạn"
                                    className="rounded-l py-2 px-3 w-2/3 focus:outline-none focus:shadow-outline-gray">
                                    <button type="submit"
                                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-r py-2 px-4 focus:outline-none focus:shadow-outline-blue">Đăng
                                        ký</button>
                                </input>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 py-4">
                    <div className="container mx-auto text-gray-400 text-sm text-center">
                        <p>© 2023 Vinabook. All rights reserved.</p>
                    </div>
                </div>
            </footer>
            {/* <!-- Footer end --> */}
        </div>
    );
};
export default HomePage