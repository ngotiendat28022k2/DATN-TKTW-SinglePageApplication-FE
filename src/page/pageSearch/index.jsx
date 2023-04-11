import React from 'react'

const PageSearch = () => {
     return (
          <div>
               <div className='my-5'>
                    <p className='m-2 text-sm font-light'>HOME {'>'} TẤT CẢ {'>'}  NHÓM SẢN PHẨM {'>'} SÁCH TIẾNG VIỆT {'>'} LỊCH SỬ - ĐỊA LÝ - TÔN GIÁO {'>'} <a className='text-orange-500' href="">TÔN GIÁO</a> </p>
                    <div className="flex flex-col sm:flex-row">
                         <div className="w-full sm:w-1/4 p-4 bg-white">
                              <div className="mb-4">
                                   <div>
                                        <ul>
                                             <li className="font-bold">Nhóm Sản Phẩm</li>
                                             <li className="pl-4 py-2 border-gray-400">
                                                  <a href="#" className="text-gray-700 hover:text-orange-500">Sách Tiếng Việt</a>
                                                  <ul className="pl-4 pt-2">
                                                       <li className="font-medium">Lịch Sử - Địa Lý - Tôn Giáo</li>
                                                       <li className="pl-4 py-2 border-gray-400">
                                                            <a href="#" class="text-gray-700 hover:text-orange-500">Lịch Sử</a>
                                                       </li>
                                                       <li className="pl-4 py-2 border-gray-400">
                                                            <a href="#" className="text-gray-700 hover:text-orange-500">Tôn Giáo</a>
                                                       </li>
                                                       <li className="pl-4 py-2 border-gray-400">
                                                            <a href="#" className="text-gray-700 hover:text-orange-500">Địa Lý</a>
                                                       </li>
                                                  </ul>
                                             </li>
                                        </ul>
                                 <hr className='m-2' />
                                   </div>
                                   <div>
                                        <p className='text-semibold'>Giá</p>
                                        <div class="flex items-center ml-4 mt-2">
                                             <input type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none" name="radio-group" />
                                             <label for="radio1" class="ml-3">
                                                  <span class="block text-sm font-sm leading-5 text-gray-700">0đ - 150,000đ</span>
                                             </label>
                                        </div>
                                        <div class="flex items-center mt-2 ml-4">
                                             <input type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none" name="radio-group" />
                                             <label for="radio2" class="ml-3">
                                                  <span class="block text-sm font-sm leading-5 text-gray-700">150,000đ - 300,000đ</span>
                                             </label>
                                        </div>
                                        <div class="flex items-center mt-2 ml-4">
                                             <input type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none" name="radio-group" />
                                             <label for="radio2" class="ml-3">
                                                  <span class="block text-sm font-sm leading-5 text-gray-700">300,000đ - 500,000đ</span>
                                             </label>
                                        </div>
                                        <div class="flex items-center mt-2 ml-4">
                                             <input type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none" name="radio-group" />
                                             <label for="radio2" class="ml-3">
                                                  <span class="block text-sm font-sm leading-5 text-gray-700">500,000đ - 700,000đ</span>
                                             </label>
                                        </div>
                                        <div class="flex items-center mt-2 ml-4">
                                             <input type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none" name="radio-group" />
                                             <label for="radio2" class="ml-3">
                                                  <span class="block text-sm font-sm leading-5 text-gray-700">700,000đ - Trở Lên</span>
                                             </label>
                                        </div>
                                   </div>
                                   <hr className='mt-4 mb-4' />
                                   <div>
                                        <p className='text-semibold'>Nhà cung cấp</p>
                                        <div class="flex items-center ml-4 mt-2">
                                             <input type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none" name="radio-group" />
                                             <label for="radio1" class="ml-3">
                                                  <span class="block text-sm font-sm leading-5 text-gray-700">Thái Hà</span>
                                             </label>
                                        </div>
                                        <div class="flex items-center mt-2 ml-4">
                                             <input type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none" name="radio-group" />
                                             <label for="radio2" class="ml-3">
                                                  <span class="block text-sm font-sm leading-5 text-gray-700">Cty Văn Hoà Hương Trang</span>
                                             </label>
                                        </div>
                                        <div class="flex items-center mt-2 ml-4">
                                             <input type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none" name="radio-group" />
                                             <label for="radio2" class="ml-3">
                                                  <span class="block text-sm font-sm leading-5 text-gray-700">Cty Văn Hoà Văn Lang</span>
                                             </label>
                                        </div>
                                        <div class="flex items-center mt-2 ml-4">
                                             <input type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none" name="radio-group" />
                                             <label for="radio2" class="ml-3">
                                                  <span class="block text-sm font-sm leading-5 text-gray-700">CTY CỔ PHẦN VĂN HOÁ PHẬT GIÁO</span>
                                             </label>
                                        </div>
                                        <div class="flex items-center mt-2 ml-4">
                                             <input type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none" name="radio-group" />
                                             <label for="radio2" class="ml-3">
                                                  <span class="block text-sm font-sm leading-5 text-gray-700">Saigon Books</span>
                                             </label>
                                        </div>
                                        <div class="flex items-center mt-2 ml-4">
                                             <input type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none" name="radio-group" />
                                             <label for="radio2" class="ml-3">
                                                  <span class="block text-sm font-sm leading-5 text-gray-700">First News</span>
                                             </label>
                                        </div>
                                        <div class="flex items-center mt-2 ml-4">
                                             <input type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none" name="radio-group" />
                                             <label for="radio2" class="ml-3">
                                                  <span class="block text-sm font-sm leading-5 text-gray-700">Cty Chính Thông</span>
                                             </label>
                                        </div>
                                        <div class="flex items-center mt-2 ml-4">
                                             <input type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none" name="radio-group" />
                                             <label for="radio2" class="ml-3">
                                                  <span class="block text-sm font-sm leading-5 text-gray-700">Cty Văn Hoá Minh Lâm</span>
                                             </label>
                                        </div>
                                        <div className="flex justify-center items-center mt-4">
                                             <button className="flex text-sm text-orange-500">
                                                  Xem thêm
                                                  <svg class="h-6 w-6 text-orange-500" viewBox="0 0 28 28 " fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
                                             </button>
                                        </div>
                                   </div>
                                   <hr className='mt-4 mb-4' />
                                   <div>
                                        <p className='text-semibold'>Ngôn Ngữ</p>
                                        <div class="flex items-center ml-4 mt-2">
                                             <input type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none" name="radio-group" />
                                             <label for="radio1" class="ml-3">
                                                  <span class="block text-sm font-sm leading-5 text-gray-700">Tiếng Việt</span>
                                             </label>
                                        </div>
                                   </div>
                                   <hr className='mt-4 mb-4' />
                                   <div>
                                        <p className='text-semibold'>Hình thức</p>
                                        <div class="flex items-center ml-4 mt-2">
                                             <input type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none" name="radio-group" />
                                             <label for="radio1" class="ml-3">
                                                  <span class="block text-sm font-sm leading-5 text-gray-700">Bìa Mềm</span>
                                             </label>
                                        </div>
                                        <div class="flex items-center ml-4 mt-2">
                                             <input type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none" name="radio-group" />
                                             <label for="radio1" class="ml-3">
                                                  <span class="block text-sm font-sm leading-5 text-gray-700">Bìa Cứng</span>
                                             </label>
                                        </div>
                                        <div class="flex items-center ml-4 mt-2">
                                             <input type="radio" class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out rounded-none" name="radio-group" />
                                             <label for="radio1" class="ml-3">
                                                  <span class="block text-sm font-sm leading-5 text-gray-700">Bộ Hộp</span>
                                             </label>
                                        </div>
                                   </div>
                                   <hr className='mt-4 mb-4' />
                              </div>
                         </div>
                         <div className="w-full sm:w-3/4 p-4 bg-white ml-0 sm:ml-2">
                              <div className="mb-4">
                                   <label htmlFor="sort">Sắp xếp theo: </label>
                                   <select
                                        id="sort"
                                        className="w-58 ml-4 border border-gray-300 rounded p-1"
                                        onChange={(event) => handleSort(event.target.value)}
                                   >
                                        <option value="default">Bán chạy tháng</option>
                                        <option value="best-seller-week">Bán chạy tuần</option>
                                        <option value="best-seller-month">Bán chạy tháng</option>
                                        <option value="best-seller-year">Bán chạy năm</option>
                                   </select>
                                   <select
                                        id="sort"
                                        className="w-55 ml-6 border border-gray-300 rounded p-1"
                                        onChange={(event) => handleSort(event.target.value)}
                                   >
                                        <option value="default">24 sản phẩm</option>
                                        <option value="ammount-product-12">12 sản phẩm</option>
                                        <option value="ammount-product-24">24 sản phẩm</option>
                                        <option value="ammount-product-36">36 sản phẩm</option>
                                   </select>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                   <div className='relative hover:border-2 hover:shadow-md'>
                                        <div className='md:m-2 m-2'>
                                             <a href="">
                                                  <img src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_27402023_084042.jpg" alt="" />
                                             </a>
                                        </div>
                                        <div className="mb-3">
                                             <a href="">
                                                  <h4 className='text-[#333333] md:text-lg text-base md:px-5 px-3'>Chainsaw Man - Tập 8</h4>
                                                  <span className='block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold'>29.250</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through'>45.000</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-xs'>Đã Bán 12</span>
                                             </a>
                                        </div>
                                   </div>
                                   <div className='relative hover:border-2 hover:shadow-md'>
                                        <div className='md:m-2 m-2'>
                                             <a href="">
                                                  <img src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_27402023_084042.jpg" alt="" />
                                             </a>
                                        </div>
                                        <div className="mb-3">
                                             <a href="">
                                                  <h4 className='text-[#333333] md:text-lg text-base md:px-5 px-3'>Chainsaw Man - Tập 8</h4>
                                                  <span className='block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold'>29.250</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through'>45.000</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-xs'>Đã Bán 12</span>
                                             </a>
                                        </div>
                                   </div>
                                   <div className='relative hover:border-2 hover:shadow-md'>
                                        <div className='md:m-2 m-2'>
                                             <a href="">
                                                  <img src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_27402023_084042.jpg" alt="" />
                                             </a>
                                        </div>
                                        <div className="mb-3">
                                             <a href="">
                                                  <h4 className='text-[#333333] md:text-lg text-base md:px-5 px-3'>Chainsaw Man - Tập 8</h4>
                                                  <span className='block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold'>29.250</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through'>45.000</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-xs'>Đã Bán 12</span>
                                             </a>
                                        </div>
                                   </div>
                                   <div className='relative hover:border-2 hover:shadow-md'>
                                        <div className='md:m-2 m-2'>
                                             <a href="">
                                                  <img src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_27402023_084042.jpg" alt="" />
                                             </a>
                                        </div>
                                        <div className="mb-3">
                                             <a href="">
                                                  <h4 className='text-[#333333] md:text-lg text-base md:px-5 px-3'>Chainsaw Man - Tập 8</h4>
                                                  <span className='block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold'>29.250</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through'>45.000</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-xs'>Đã Bán 12</span>
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                   <div className='relative hover:border-2 hover:shadow-md'>
                                        <div className='md:m-2 m-2'>
                                             <a href="">
                                                  <img src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_27402023_084042.jpg" alt="" />
                                             </a>
                                        </div>
                                        <div className="mb-3">
                                             <a href="">
                                                  <h4 className='text-[#333333] md:text-lg text-base md:px-5 px-3'>Chainsaw Man - Tập 8</h4>
                                                  <span className='block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold'>29.250</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through'>45.000</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-xs'>Đã Bán 12</span>
                                             </a>
                                        </div>
                                   </div>
                                   <div className='relative hover:border-2 hover:shadow-md'>
                                        <div className='md:m-2 m-2'>
                                             <a href="">
                                                  <img src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_27402023_084042.jpg" alt="" />
                                             </a>
                                        </div>
                                        <div className="mb-3">
                                             <a href="">
                                                  <h4 className='text-[#333333] md:text-lg text-base md:px-5 px-3'>Chainsaw Man - Tập 8</h4>
                                                  <span className='block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold'>29.250</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through'>45.000</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-xs'>Đã Bán 12</span>
                                             </a>
                                        </div>
                                   </div>
                                   <div className='relative hover:border-2 hover:shadow-md'>
                                        <div className='md:m-2 m-2'>
                                             <a href="">
                                                  <img src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_27402023_084042.jpg" alt="" />
                                             </a>
                                        </div>
                                        <div className="mb-3">
                                             <a href="">
                                                  <h4 className='text-[#333333] md:text-lg text-base md:px-5 px-3'>Chainsaw Man - Tập 8</h4>
                                                  <span className='block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold'>29.250</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through'>45.000</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-xs'>Đã Bán 12</span>
                                             </a>
                                        </div>
                                   </div>
                                   <div className='relative hover:border-2 hover:shadow-md'>
                                        <div className='md:m-2 m-2'>
                                             <a href="">
                                                  <img src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_27402023_084042.jpg" alt="" />
                                             </a>
                                        </div>
                                        <div className="mb-3">
                                             <a href="">
                                                  <h4 className='text-[#333333] md:text-lg text-base md:px-5 px-3'>Chainsaw Man - Tập 8</h4>
                                                  <span className='block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold'>29.250</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through'>45.000</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-xs'>Đã Bán 12</span>
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                   <div className='relative hover:border-2 hover:shadow-md'>
                                        <div className='md:m-2 m-2'>
                                             <a href="">
                                                  <img src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_27402023_084042.jpg" alt="" />
                                             </a>
                                        </div>
                                        <div className="mb-3">
                                             <a href="">
                                                  <h4 className='text-[#333333] md:text-lg text-base md:px-5 px-3'>Chainsaw Man - Tập 8</h4>
                                                  <span className='block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold'>29.250</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through'>45.000</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-xs'>Đã Bán 12</span>
                                             </a>
                                        </div>
                                   </div>
                                   <div className='relative hover:border-2 hover:shadow-md'>
                                        <div className='md:m-2 m-2'>
                                             <a href="">
                                                  <img src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_27402023_084042.jpg" alt="" />
                                             </a>
                                        </div>
                                        <div className="mb-3">
                                             <a href="">
                                                  <h4 className='text-[#333333] md:text-lg text-base md:px-5 px-3'>Chainsaw Man - Tập 8</h4>
                                                  <span className='block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold'>29.250</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through'>45.000</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-xs'>Đã Bán 12</span>
                                             </a>
                                        </div>
                                   </div>
                                   <div className='relative hover:border-2 hover:shadow-md'>
                                        <div className='md:m-2 m-2'>
                                             <a href="">
                                                  <img src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_27402023_084042.jpg" alt="" />
                                             </a>
                                        </div>
                                        <div className="mb-3">
                                             <a href="">
                                                  <h4 className='text-[#333333] md:text-lg text-base md:px-5 px-3'>Chainsaw Man - Tập 8</h4>
                                                  <span className='block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold'>29.250</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through'>45.000</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-xs'>Đã Bán 12</span>
                                             </a>
                                        </div>
                                   </div>
                                   <div className='relative hover:border-2 hover:shadow-md'>
                                        <div className='md:m-2 m-2'>
                                             <a href="">
                                                  <img src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_27402023_084042.jpg" alt="" />
                                             </a>
                                        </div>
                                        <div className="mb-3">
                                             <a href="">
                                                  <h4 className='text-[#333333] md:text-lg text-base md:px-5 px-3'>Chainsaw Man - Tập 8</h4>
                                                  <span className='block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold'>29.250</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through'>45.000</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-xs'>Đã Bán 12</span>
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                   <div className='relative hover:border-2 hover:shadow-md'>
                                        <div className='md:m-2 m-2'>
                                             <a href="">
                                                  <img src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_27402023_084042.jpg" alt="" />
                                             </a>
                                        </div>
                                        <div className="mb-3">
                                             <a href="">
                                                  <h4 className='text-[#333333] md:text-lg text-base md:px-5 px-3'>Chainsaw Man - Tập 8</h4>
                                                  <span className='block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold'>29.250</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through'>45.000</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-xs'>Đã Bán 12</span>
                                             </a>
                                        </div>
                                   </div>
                                   <div className='relative hover:border-2 hover:shadow-md'>
                                        <div className='md:m-2 m-2'>
                                             <a href="">
                                                  <img src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_27402023_084042.jpg" alt="" />
                                             </a>
                                        </div>
                                        <div className="mb-3">
                                             <a href="">
                                                  <h4 className='text-[#333333] md:text-lg text-base md:px-5 px-3'>Chainsaw Man - Tập 8</h4>
                                                  <span className='block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold'>29.250</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through'>45.000</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-xs'>Đã Bán 12</span>
                                             </a>
                                        </div>
                                   </div>
                                   <div className='relative hover:border-2 hover:shadow-md'>
                                        <div className='md:m-2 m-2'>
                                             <a href="">
                                                  <img src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_27402023_084042.jpg" alt="" />
                                             </a>
                                        </div>
                                        <div className="mb-3">
                                             <a href="">
                                                  <h4 className='text-[#333333] md:text-lg text-base md:px-5 px-3'>Chainsaw Man - Tập 8</h4>
                                                  <span className='block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold'>29.250</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through'>45.000</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-xs'>Đã Bán 12</span>
                                             </a>
                                        </div>
                                   </div>
                                   <div className='relative hover:border-2 hover:shadow-md'>
                                        <div className='md:m-2 m-2'>
                                             <a href="">
                                                  <img src="https://cdn0.fahasa.com/media/catalog/product/n/x/nxbtre_full_27402023_084042.jpg" alt="" />
                                             </a>
                                        </div>
                                        <div className="mb-3">
                                             <a href="">
                                                  <h4 className='text-[#333333] md:text-lg text-base md:px-5 px-3'>Chainsaw Man - Tập 8</h4>
                                                  <span className='block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold'>29.250</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through'>45.000</span>
                                                  <span className='block md:px-5 px-3 text-sm md:text-xs'>Đã Bán 12</span>
                                             </a>
                                        </div>
                                   </div>
                              </div>
<div>
<nav className='flex justify-center mt-8 mb-4'>
  <ul class="inline-flex -space-x-px">
    <li>
      <a href="#" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">1</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>
</div>

                         </div>

                    </div>

               </div>
          </div>
     )
}
export default PageSearch
