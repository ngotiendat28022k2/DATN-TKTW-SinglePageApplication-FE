import Footer from '../../components/footer/Footer.component';
import Header from '../../components/header/Header.component';
import SlideShow from '../../components/slide-show/SlideShow.component';
const HomePage = () => {

    return (
        <div>
            <div className=''>
                <SlideShow/>
                {/* <div className='grid md:grid-cols-10 md:gap-4 grid-cols-5 gap-3 bg-white'>
                    <div className='col-span-1 p-4'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-12 md:h-12 w-11 h-11 m-auto' src="https://i.imgur.com/tkzenTt.png" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Flash Sale</div>
                        </a>
                    </div>
                    <div className='col-span-1 p-4'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-12 md:h-12 w-11 h-11 m-auto' src="https://i.imgur.com/vN0ZtKz.png" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Mã Giảm Giá</div>
                        </a>
                    </div>
                    <div className='col-span-1 p-4'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-12 md:h-12 w-11 h-11 m-auto' src="https://i.imgur.com/TGVhvb3.png" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Xu Hướng</div>
                        </a>
                    </div>
                    <div className='col-span-1 p-4'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-12 md:h-12 w-11 h-11 m-auto' src="https://i.imgur.com/050aWxc.png" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Sản Phẩm Mới</div>
                        </a>
                    </div>
                    <div className='col-span-1 p-4'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-12 md:h-12 w-11 h-11 m-auto' src="https://i.imgur.com/28Ozfcf.png" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Văn Học</div>
                        </a>
                    </div>
                    <div className='col-span-1 p-4'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-12 md:h-12 w-11 h-11 m-auto' src="https://i.imgur.com/DozXoDW.png" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Tâm Lý Kỹ Năng</div>
                        </a>
                    </div>
                    <div className='col-span-1 p-4'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-12 md:h-12 w-11 h-11 m-auto' src="https://i.imgur.com/U0RmU2Z.png" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Đồ Chơi</div>
                        </a>
                    </div>
                    <div className='col-span-1 p-4'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-12 md:h-12 w-11 h-11 m-auto' src="https://i.imgur.com/mKE7kAH.png" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Manga - Comic</div>
                        </a>
                    </div>
                    <div className='col-span-1 p-4'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-12 md:h-12 w-11 h-11 m-auto' src="https://i.imgur.com/4EGGXGL.png" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Phiên Chợ Sách Cũ</div>
                        </a>
                    </div>
                    <div className='col-span-1 p-4'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-12 md:h-12 w-11 h-11 m-auto' src="https://i.imgur.com/89Ma5ji.png" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Kinh Tế</div>
                        </a>
                    </div>
                </div> */}
            </div>
            {/* <div className='my-5'>
                <div className='bg-[#FCDAB0]'>
                    <div className='flex md:py-5 py-3 px-3'>
                        <div className='mr-3'>
                            <img className='w-6 h-6' src="https://i.imgur.com/H63fkyZ.png" alt="" />
                        </div>
                        <div className='font-bold text-lg'>FLASH SALE</div>
                    </div>
                </div>
                <div className='bg-white p-2'>
                    <div className='grid md:grid-cols-5 grid-cols-3 gap-2 md:mx-2'>
                        <div className='relative hover:border-2 hover:shadow-md'>
                            <div className='flex bg-[#F7941E] md:w-[44px] md:h-[44px] w-12 h-12 md:rounded-3xl rounded-[22px] justify-center items-center absolute top-[10px] right-[10px]'>
                                <span className='text-white font-semibold'>35%</span>
                            </div>
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
                            <div className='flex bg-[#F7941E] md:w-[44px] md:h-[44px] w-12 h-12 md:rounded-3xl rounded-[22px] justify-center items-center absolute top-[10px] right-[10px]'>
                                <span className='text-white font-semibold'>35%</span>
                            </div>
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
                            <div className='flex bg-[#F7941E] md:w-[44px] md:h-[44px] w-12 h-12 md:rounded-3xl rounded-[22px] justify-center items-center absolute top-[10px] right-[10px]'>
                                <span className='text-white font-semibold'>35%</span>
                            </div>
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
                            <div className='flex bg-[#F7941E] md:w-[44px] md:h-[44px] w-12 h-12 md:rounded-3xl rounded-[22px] justify-center items-center absolute top-[10px] right-[10px]'>
                                <span className='text-white font-semibold'>35%</span>
                            </div>
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
                            <div className='flex bg-[#F7941E] md:w-[44px] md:h-[44px] w-12 h-12 md:rounded-3xl rounded-[22px] justify-center items-center absolute top-[10px] right-[10px]'>
                                <span className='text-white font-semibold'>35%</span>
                            </div>
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
                        <div className='relative md:hidden block py-[100%] px-5'>
                            <div className='border-2 rounded-2xl text-center p-1 border-teal-400'>
                                <button className='text-teal-500 hover:text-orange-400'>Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:mt-5 md:3 md:block rounded-3xl hidden'>
                <div className='bg-[#FFFFFF]'>
                    <div className='flex md:py-5 py-3 px-3'>
                        <div className='mr-3'>
                            <img className='w-8 h-8' src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_menu.svg" alt="" />
                        </div>
                        <div className='font-bold text-lg'>Danh mục sản phẩm</div>
                    </div>
                </div>
                <div className='grid md:grid-cols-10 md:gap-2 grid-cols-5 gap-3 bg-white pb-4 px-2'>
                    <div className='col-span-1'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-[100px] md:h-[100px] w-11 h-11 m-auto' src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Luyen_Thi.jpg" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Sách Luyện Thi</div>
                        </a>
                    </div>
                    <div className='col-span-1'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-[100px] md:h-[100px] w-11 h-11 m-auto' src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Manga.jpg" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Manga</div>
                        </a>
                    </div>
                    <div className='col-span-1'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-[100px] md:h-[100px] w-11 h-11 m-auto' src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/T_m_linh.jpg" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Tâm Linh Luân Hồi</div>
                        </a>
                    </div>
                    <div className='col-span-1'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-[100px] md:h-[100px] w-11 h-11 m-auto' src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Thao_t_ng.jpg" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Thao Túng Tâm Lý</div>
                        </a>
                    </div>
                    <div className='col-span-1'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-[100px] md:h-[100px] w-11 h-11 m-auto' src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Th_c_T_nh.jpg" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Đối Mặt Thức Tỉnh</div>
                        </a>
                    </div>
                    <div className='col-span-1'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-[100px] md:h-[100px] w-11 h-11 m-auto' src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/Ti_u_Thuy_t.jpg" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Tiểu Thuyết</div>
                        </a>
                    </div>
                    <div className='col-span-1'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-[100px] md:h-[100px] w-11 h-11 m-auto' src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/lightnovel.jpg" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Light Novel</div>
                        </a>
                    </div>
                    <div className='col-span-1'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-[100px] md:h-[100px] w-11 h-11 m-auto' src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/_u_t_.jpg" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Đầu Tư Bền Vững</div>
                        </a>
                    </div>
                    <div className='col-span-1'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-[100px] md:h-[100px] w-11 h-11 m-auto' src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/K_n_ng_cho_tr_.jpg" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Kỹ Năng Sống Cho Trẻ</div>
                        </a>
                    </div>
                    <div className='col-span-1'>
                        <a href="">
                            <div className=''>
                                <img className='md:w-[100px] md:h-[100px] w-11 h-11 m-auto' src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Danh-muc-san-pham/_am_m_.jpg" alt="" />
                            </div>
                            <div className='md:text-sm text-xs text-center pt-3'>Đam Mỹ Ngôn Tình</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <div className='bg-[#FFFFFF]'>
                    <div className='flex md:py-5 py-3 px-3'>
                        <div className='font-bold text-lg'>SẢN PHẨM MỚI</div>
                    </div>
                </div>
                <div className='bg-white p-2'>
                    <div className='grid md:grid-cols-5 grid-cols-3 gap-2 md:mx-2'>
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
                        <div className='relative md:hidden block py-[100%] px-5'>
                            <div className='border-2 rounded-2xl text-center p-1 border-teal-400'>
                                <button className='text-teal-500 hover:text-orange-400'>Xem Thêm</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-5'>
                <div className='bg-[#FFFFFF]'>
                    <div className='flex md:py-5 py-3 px-3'>
                        <div className='font-bold text-lg'>SÁCH KINH TẾ</div>
                    </div>
                </div>
                <div className='bg-white md:p-5'>
                    <div className='md:grid md:grid-cols-3 md:gap-1 md:mx-5 md:mb-12 flex mx-3 pb-3'>
                        <div className='w-[100%] m-auto md:block hidden'>
                            <a href="">
                                <img className='m' src="https://cdn0.fahasa.com/media/wysiwyg/Thang-01-2023/BannerBlock10_KinhTe350x415.jpg" alt="" />
                            </a>
                        </div>
                        <div className='md:grid md:grid-rows-2 flex'>
                            <div className='grid md:grid-cols-2 border-2 md:mb-2 md:mr-2 mr-1'>
                                <div>
                                    <a href="">
                                        <img src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_18957.jpg" alt="" />
                                    </a>
                                </div>
                                <div className='md:my-5 md:pr-5 p-1 text-left'>
                                    <a href="">
                                        <h4 className='text-[#333333] md:text-base text-sm'>Tinh Anh Công Sở 4.0</h4>
                                        <p className='flex md:mt-3'>
                                            <span className='block text-base md:text-xl text-[#C92127] md:font-semibold font-medium md:mr-5 mr-3'>56.000</span>
                                            <span className='bg-[#C92127] md:text-base text-sm text-[#FFF] rounded-lg md:font-semibold md:p-[2px] p-[1px'>-50%</span>
                                        </p>
                                        <span className='block md:text-base text-sm text-[#888888] line-through'>112.000</span>
                                    </a>
                                </div>
                            </div>
                            <div className='grid md:grid-cols-2 border-2 md:mr-2 mr-1'>
                                <div>
                                    <a href="">
                                        <img src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_18957.jpg" alt="" />
                                    </a>
                                </div>
                                <div className='md:my-5 md:pr-5 p-1 text-left'>
                                    <a href="">
                                        <h4 className='text-[#333333] md:text-base text-sm'>Tinh Anh Công Sở 4.0</h4>
                                        <p className='flex md:mt-3'>
                                            <span className='block text-base md:text-xl text-[#C92127] md:font-semibold font-medium md:mr-5 mr-3'>56.000</span>
                                            <span className='bg-[#C92127] md:text-base text-sm text-[#FFF] rounded-lg md:font-semibold md:p-[2px] p-[1px'>-50%</span>
                                        </p>
                                        <span className='block md:text-base text-sm text-[#888888] line-through'>112.000</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='md:grid md:grid-rows-2 flex'>
                            <div className='grid md:grid-cols-2 border-2 md:mb-2 mr-1'>
                                <div>
                                    <a href="">
                                        <img src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_18957.jpg" alt="" />
                                    </a>
                                </div>
                                <div className='md:my-5 md:pr-5 p-1 text-left'>
                                    <a href="">
                                        <h4 className='text-[#333333] md:text-base text-sm'>Tinh Anh Công Sở 4.0</h4>
                                        <p className='flex md:mt-3'>
                                            <span className='block text-base md:text-xl text-[#C92127] md:font-semibold font-medium md:mr-5 mr-3'>56.000</span>
                                            <span className='bg-[#C92127] md:text-base text-sm text-[#FFF] rounded-lg md:font-semibold md:p-[2px] p-[1px'>-50%</span>
                                        </p>
                                        <span classNam e='block md:text-base text-sm text-[#888888] line-through'>112.000</span>
                                    </a>
                                </div>
                            </div>
                            <div className='grid md:grid-cols-2 border-2 mr-1'>
                                <div>
                                    <a href="">
                                        <img src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_18957.jpg" alt="" />
                                    </a>
                                </div>
                                <div className='md:my-5 md:pr-5 p-1 text-left'>
                                    <a href="">
                                        <h4 className='text-[#333333] md:text-base text-sm'>Tinh Anh Công Sở 4.0</h4>
                                        <p className='flex md:mt-3'>
                                            <span className='block text-base md:text-xl text-[#C92127] md:font-semibold font-medium md:mr-5 mr-3'>56.000</span>
                                            <span className='bg-[#C92127] md:text-base text-sm text-[#FFF] rounded-lg md:font-semibold md:p-[2px] p-[1px'>-50%</span>
                                        </p>
                                        <span className='block md:text-base text-sm text-[#888888] line-through'>112.000</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};
export default HomePage;