import Footer from '../../components/client/Footer.component';
import Header from '../../components/client/Header.component';

const HomePage = () => {
    return (
        
            <div className="bg-slate-50">
                <Header/>
                <div className="h-10 grid grid-cols-2 bg-green-500">
                <div className="flex place-content-center p-2">
                    <ul className="flex place-content-center">
                        <li className="">
                            <svg className="h-9 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="2 4 20 20"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5">
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
            <div className="container w-[1240px] mx-auto bg-slate-500 mt-2" >
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
                            placeholder="Tên của bạn"/>
                    </div>
                    <div className="mt-4">
                        <input
                            className="w-[300px] h-[39px] rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Nhập Email của bạn"/>
                    </div>
                    <div className="mt-4 ml-32">
                        <select id="countries"
                            className="bg-gray-50 border w-[182px] h-[39px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
                            <option defaultValue= "Chontheloai">Chọn thể loại</option>
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
            <Footer/>
        </div>
    );
};
export default HomePage;