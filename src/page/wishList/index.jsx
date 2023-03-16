import React from 'react'

const WishList = () => {
  return (
    <div className='m-0 box-border'>
    <div className="container m-[auto] lg:w-[1180px] lg:h-[auto] lg:pt-[50px] pb-[40px]">
      <div className="mainbox2 lg:w-[1180px] lg:h-[auto]">
        <div className="profile-title-main-mb w-[100%] h-[55px] bg-[#087b44] flex items-center justify-center lg:hidden">
          <span className="profile-title text-[white] text-[18px] uppercase font-medium lg:hidden">Danh sách ưa thích</span>
        </div>
        <div className='hidden lg:block lg:pb-[10px] '>
          <span className=' lg:text-[14px] lg:font-medium lg:text-[#6d6d6d]'>Trang chủ &gt; </span>  <span className=' lg:font-semibold lg:pl-[10px] lg:text-[14px] lg:text-[#202020]'>Danh sách ưa thích</span>
          <span className="profile-rs lg:block lg:text-[#24890B] lg:pb-[5px] lg:text-[21px] lg:border-b lg:border-b-[#bcbcbc] border-dashed lg:font-normal lg:pt-2">Danh sách ưa thích</span>
        </div>
        <div className="content-main grid grid-cols-2 gap-3 pb-9 lg:pb-9 lg:grid lg:grid-cols-5 lg:gap-3">
   
   {/* **************************************************************************************************************/}
   {/* 1 SẢN PHẨM HOÀN CHỈNH BẮT ĐẦU TỪ ĐOẠN DIV DƯỚI NÀY */}
   {/* **************************************************************************************************************/}
<div className='item-product  shadow-lg shadow-slate-500/100  w-[170px] h-[335px] py-[30px]  text-center px-[30px]  mx-[auto] mt-[30px]   lg:w-[auto] lg:h-[360px]  lg:text-center lg:px-[30px] lg:block  lg:pb-[35px] lg:hover:text-[#24890B]  lg:shadow-none'>

  {/* **************************************************************************************************************/}
  {/* Kích cỡ ảnh tiêu chuẩn: 115 x 171  */}
  {/* HÌNH ẢNH CỦA SẢN PHẨM Ở ĐÂY */}
  {/* **************************************************************************************************************/}
  <img className='lg:inline-block lg:cursor-pointer lg:w-[115px] lg:h-[171px] lg:hover:shadow-lg lg:hover:shadow-slate-500/100'  src="https://www.vinabook.com/images/thumbnails/product/115x/376148_p97320mscreenshot20230213081258.jpg" alt="" title="Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)"/>

  <div className='lg:w-[120px] lg:mx-[27px]  lg:pt-[20px]  lg:hover:text-[#24890B]'>
   {/* **************************************************************************************************************/}
   {/* TÊN TIÊU ĐỀ SẢN PHẨM ở đây */}
   {/* **************************************************************************************************************/}
  <a className='block text-left truncate text-[18px] lg:block lg:text-left lg:truncate lg:text-[15px]' title="Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)" href='#'>Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)</a>

   {/* **************************************************************************************************************/}
   {/* TÊN TÁC GIẢ CỦA SẢN PHẨM ở đây */}
   {/* **************************************************************************************************************/}
  <span className='block text-center truncate text-[15px] pt-[2px] text-[#6c6c6c] lg:block lg:text-left lg:text-[13px] lg:pt-[5px] lg:text-[#6c6c6c]'>John Toland</span>

   {/* **************************************************************************************************************/}
   {/* GIÁ GỐC CỦA SẢN PHẨM ở đây */}
   {/* **************************************************************************************************************/}
  <span className='block text-center truncate text-[17px] pt-[2px] text-[#494949] lg:block lg:text-left lg:text-[15px] lg:pt-[5px] lg:text-[#494949]'> <del>599.000 đ</del></span>

   {/* **************************************************************************************************************/}
   {/* GIÁ SAU KHI GIẢM GIÁ CỦA SẢN PHẨM ở đây */}
   {/* **************************************************************************************************************/}
  <span className='block text-center truncate text-[18px] text-[#b43535] font-medium lg:block lg:text-left  lg:text-[16px] lg:text-[#b43535] lg:font-medium'>450.000 đ</span>
  </div>

   {/* **************************************************************************************************************/}
   {/* PHẦN TRĂM ĐÃ GIẢM GIÁ CỦA SẢN PHẨM ở đây */}
   {/* **************************************************************************************************************/}
 <span className='block w-[43px] bg-red-500 p-1 rounded-[5px] text-[white] mt-[-137px] ml-[72px] relative    lg:block lg:w-[43px] lg:bg-red-500 lg:p-1 lg:rounded-[5px] lg:text-[white] lg:mt-[-140px] lg:ml-[115px] lg:relative'>15%</span>


</div>

 {/* **************************************************************************************************************/}
 {/* KẾT THÚC 1 SẢN PHẨM HOÀN CHỈNH */}
 {/* **************************************************************************************************************/}

 {/* **************************************************************************************************************/}
   {/* 1 SẢN PHẨM HOÀN CHỈNH BẮT ĐẦU TỪ ĐOẠN DIV DƯỚI NÀY */}
   {/* **************************************************************************************************************/}
   <div className='item-product  shadow-lg shadow-slate-500/100  w-[170px] h-[335px] py-[30px]  text-center px-[30px]  mx-[auto] mt-[30px]   lg:w-[auto] lg:h-[360px]  lg:text-center lg:px-[30px] lg:block  lg:pb-[35px] lg:hover:text-[#24890B]  lg:shadow-none'>

{/* **************************************************************************************************************/}
{/* Kích cỡ ảnh tiêu chuẩn: 115 x 171  */}
{/* HÌNH ẢNH CỦA SẢN PHẨM Ở ĐÂY */}
{/* **************************************************************************************************************/}
<img className='lg:inline-block lg:cursor-pointer lg:w-[115px] lg:h-[171px] lg:hover:shadow-lg lg:hover:shadow-slate-500/100'  src="https://www.vinabook.com/images/thumbnails/product/115x/376148_p97320mscreenshot20230213081258.jpg" alt="" title="Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)"/>

<div className='lg:w-[120px] lg:mx-[27px]  lg:pt-[20px]  lg:hover:text-[#24890B]'>
 {/* **************************************************************************************************************/}
 {/* TÊN TIÊU ĐỀ SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<a className='block text-left truncate text-[18px] lg:block lg:text-left lg:truncate lg:text-[15px]' title="Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)" href='#'>Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)</a>

 {/* **************************************************************************************************************/}
 {/* TÊN TÁC GIẢ CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block text-center truncate text-[15px] pt-[2px] text-[#6c6c6c] lg:block lg:text-left lg:text-[13px] lg:pt-[5px] lg:text-[#6c6c6c]'>John Toland</span>

 {/* **************************************************************************************************************/}
 {/* GIÁ GỐC CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block text-center truncate text-[17px] pt-[2px] text-[#494949] lg:block lg:text-left lg:text-[15px] lg:pt-[5px] lg:text-[#494949]'> <del>599.000 đ</del></span>

 {/* **************************************************************************************************************/}
 {/* GIÁ SAU KHI GIẢM GIÁ CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block text-center truncate text-[18px] text-[#b43535] font-medium lg:block lg:text-left  lg:text-[16px] lg:text-[#b43535] lg:font-medium'>450.000 đ</span>
</div>

 {/* **************************************************************************************************************/}
 {/* PHẦN TRĂM ĐÃ GIẢM GIÁ CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block w-[43px] bg-red-500 p-1 rounded-[5px] text-[white] mt-[-137px] ml-[72px] relative    lg:block lg:w-[43px] lg:bg-red-500 lg:p-1 lg:rounded-[5px] lg:text-[white] lg:mt-[-140px] lg:ml-[115px] lg:relative'>15%</span>


</div>

{/* **************************************************************************************************************/}
{/* KẾT THÚC 1 SẢN PHẨM HOÀN CHỈNH */}
{/* **************************************************************************************************************/}

 {/* **************************************************************************************************************/}
   {/* 1 SẢN PHẨM HOÀN CHỈNH BẮT ĐẦU TỪ ĐOẠN DIV DƯỚI NÀY */}
   {/* **************************************************************************************************************/}
   <div className='item-product  shadow-lg shadow-slate-500/100  w-[170px] h-[335px] py-[30px]  text-center px-[30px]  mx-[auto] mt-[30px]   lg:w-[auto] lg:h-[360px]  lg:text-center lg:px-[30px] lg:block  lg:pb-[35px] lg:hover:text-[#24890B]  lg:shadow-none'>

{/* **************************************************************************************************************/}
{/* Kích cỡ ảnh tiêu chuẩn: 115 x 171  */}
{/* HÌNH ẢNH CỦA SẢN PHẨM Ở ĐÂY */}
{/* **************************************************************************************************************/}
<img className='lg:inline-block lg:cursor-pointer lg:w-[115px] lg:h-[171px] lg:hover:shadow-lg lg:hover:shadow-slate-500/100'  src="https://www.vinabook.com/images/thumbnails/product/115x/376148_p97320mscreenshot20230213081258.jpg" alt="" title="Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)"/>

<div className='lg:w-[120px] lg:mx-[27px]  lg:pt-[20px]  lg:hover:text-[#24890B]'>
 {/* **************************************************************************************************************/}
 {/* TÊN TIÊU ĐỀ SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<a className='block text-left truncate text-[18px] lg:block lg:text-left lg:truncate lg:text-[15px]' title="Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)" href='#'>Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)</a>

 {/* **************************************************************************************************************/}
 {/* TÊN TÁC GIẢ CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block text-center truncate text-[15px] pt-[2px] text-[#6c6c6c] lg:block lg:text-left lg:text-[13px] lg:pt-[5px] lg:text-[#6c6c6c]'>John Toland</span>

 {/* **************************************************************************************************************/}
 {/* GIÁ GỐC CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block text-center truncate text-[17px] pt-[2px] text-[#494949] lg:block lg:text-left lg:text-[15px] lg:pt-[5px] lg:text-[#494949]'> <del>599.000 đ</del></span>

 {/* **************************************************************************************************************/}
 {/* GIÁ SAU KHI GIẢM GIÁ CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block text-center truncate text-[18px] text-[#b43535] font-medium lg:block lg:text-left  lg:text-[16px] lg:text-[#b43535] lg:font-medium'>450.000 đ</span>
</div>

 {/* **************************************************************************************************************/}
 {/* PHẦN TRĂM ĐÃ GIẢM GIÁ CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block w-[43px] bg-red-500 p-1 rounded-[5px] text-[white] mt-[-137px] ml-[72px] relative    lg:block lg:w-[43px] lg:bg-red-500 lg:p-1 lg:rounded-[5px] lg:text-[white] lg:mt-[-140px] lg:ml-[115px] lg:relative'>15%</span>


</div>

{/* **************************************************************************************************************/}
{/* KẾT THÚC 1 SẢN PHẨM HOÀN CHỈNH */}
{/* **************************************************************************************************************/}

 {/* **************************************************************************************************************/}
   {/* 1 SẢN PHẨM HOÀN CHỈNH BẮT ĐẦU TỪ ĐOẠN DIV DƯỚI NÀY */}
   {/* **************************************************************************************************************/}
   <div className='item-product  shadow-lg shadow-slate-500/100  w-[170px] h-[335px] py-[30px]  text-center px-[30px]  mx-[auto] mt-[30px]   lg:w-[auto] lg:h-[360px]  lg:text-center lg:px-[30px] lg:block  lg:pb-[35px] lg:hover:text-[#24890B]  lg:shadow-none'>

{/* **************************************************************************************************************/}
{/* Kích cỡ ảnh tiêu chuẩn: 115 x 171  */}
{/* HÌNH ẢNH CỦA SẢN PHẨM Ở ĐÂY */}
{/* **************************************************************************************************************/}
<img className='lg:inline-block lg:cursor-pointer lg:w-[115px] lg:h-[171px] lg:hover:shadow-lg lg:hover:shadow-slate-500/100'  src="https://www.vinabook.com/images/thumbnails/product/115x/376148_p97320mscreenshot20230213081258.jpg" alt="" title="Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)"/>

<div className='lg:w-[120px] lg:mx-[27px]  lg:pt-[20px]  lg:hover:text-[#24890B]'>
 {/* **************************************************************************************************************/}
 {/* TÊN TIÊU ĐỀ SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<a className='block text-left truncate text-[18px] lg:block lg:text-left lg:truncate lg:text-[15px]' title="Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)" href='#'>Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)</a>

 {/* **************************************************************************************************************/}
 {/* TÊN TÁC GIẢ CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block text-center truncate text-[15px] pt-[2px] text-[#6c6c6c] lg:block lg:text-left lg:text-[13px] lg:pt-[5px] lg:text-[#6c6c6c]'>John Toland</span>

 {/* **************************************************************************************************************/}
 {/* GIÁ GỐC CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block text-center truncate text-[17px] pt-[2px] text-[#494949] lg:block lg:text-left lg:text-[15px] lg:pt-[5px] lg:text-[#494949]'> <del>599.000 đ</del></span>

 {/* **************************************************************************************************************/}
 {/* GIÁ SAU KHI GIẢM GIÁ CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block text-center truncate text-[18px] text-[#b43535] font-medium lg:block lg:text-left  lg:text-[16px] lg:text-[#b43535] lg:font-medium'>450.000 đ</span>
</div>

 {/* **************************************************************************************************************/}
 {/* PHẦN TRĂM ĐÃ GIẢM GIÁ CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block w-[43px] bg-red-500 p-1 rounded-[5px] text-[white] mt-[-137px] ml-[72px] relative    lg:block lg:w-[43px] lg:bg-red-500 lg:p-1 lg:rounded-[5px] lg:text-[white] lg:mt-[-140px] lg:ml-[115px] lg:relative'>15%</span>


</div>

{/* **************************************************************************************************************/}
{/* KẾT THÚC 1 SẢN PHẨM HOÀN CHỈNH */}
{/* **************************************************************************************************************/}

 {/* **************************************************************************************************************/}
   {/* 1 SẢN PHẨM HOÀN CHỈNH BẮT ĐẦU TỪ ĐOẠN DIV DƯỚI NÀY */}
   {/* **************************************************************************************************************/}
   <div className='item-product  shadow-lg shadow-slate-500/100  w-[170px] h-[335px] py-[30px]  text-center px-[30px]  mx-[auto] mt-[30px]   lg:w-[auto] lg:h-[360px]  lg:text-center lg:px-[30px] lg:block  lg:pb-[35px] lg:hover:text-[#24890B]  lg:shadow-none'>

{/* **************************************************************************************************************/}
{/* Kích cỡ ảnh tiêu chuẩn: 115 x 171  */}
{/* HÌNH ẢNH CỦA SẢN PHẨM Ở ĐÂY */}
{/* **************************************************************************************************************/}
<img className='lg:inline-block lg:cursor-pointer lg:w-[115px] lg:h-[171px] lg:hover:shadow-lg lg:hover:shadow-slate-500/100'  src="https://www.vinabook.com/images/thumbnails/product/115x/376148_p97320mscreenshot20230213081258.jpg" alt="" title="Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)"/>

<div className='lg:w-[120px] lg:mx-[27px]  lg:pt-[20px]  lg:hover:text-[#24890B]'>
 {/* **************************************************************************************************************/}
 {/* TÊN TIÊU ĐỀ SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<a className='block text-left truncate text-[18px] lg:block lg:text-left lg:truncate lg:text-[15px]' title="Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)" href='#'>Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)</a>

 {/* **************************************************************************************************************/}
 {/* TÊN TÁC GIẢ CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block text-center truncate text-[15px] pt-[2px] text-[#6c6c6c] lg:block lg:text-left lg:text-[13px] lg:pt-[5px] lg:text-[#6c6c6c]'>John Toland</span>

 {/* **************************************************************************************************************/}
 {/* GIÁ GỐC CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block text-center truncate text-[17px] pt-[2px] text-[#494949] lg:block lg:text-left lg:text-[15px] lg:pt-[5px] lg:text-[#494949]'> <del>599.000 đ</del></span>

 {/* **************************************************************************************************************/}
 {/* GIÁ SAU KHI GIẢM GIÁ CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block text-center truncate text-[18px] text-[#b43535] font-medium lg:block lg:text-left  lg:text-[16px] lg:text-[#b43535] lg:font-medium'>450.000 đ</span>
</div>

 {/* **************************************************************************************************************/}
 {/* PHẦN TRĂM ĐÃ GIẢM GIÁ CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block w-[43px] bg-red-500 p-1 rounded-[5px] text-[white] mt-[-137px] ml-[72px] relative    lg:block lg:w-[43px] lg:bg-red-500 lg:p-1 lg:rounded-[5px] lg:text-[white] lg:mt-[-140px] lg:ml-[115px] lg:relative'>15%</span>


</div>

{/* **************************************************************************************************************/}
{/* KẾT THÚC 1 SẢN PHẨM HOÀN CHỈNH */}
{/* **************************************************************************************************************/}

 {/* **************************************************************************************************************/}
   {/* 1 SẢN PHẨM HOÀN CHỈNH BẮT ĐẦU TỪ ĐOẠN DIV DƯỚI NÀY */}
   {/* **************************************************************************************************************/}
<div className='item-product  shadow-lg shadow-slate-500/100  w-[170px] h-[335px] py-[30px]  text-center px-[30px]  mx-[auto] mt-[30px]   lg:w-[auto] lg:h-[360px]  lg:text-center lg:px-[30px] lg:block  lg:pb-[35px] lg:hover:text-[#24890B]  lg:shadow-none'>

  {/* **************************************************************************************************************/}
  {/* Kích cỡ ảnh tiêu chuẩn: 115 x 171  */}
  {/* HÌNH ẢNH CỦA SẢN PHẨM Ở ĐÂY */}
  {/* **************************************************************************************************************/}
  <img className='lg:inline-block lg:cursor-pointer lg:w-[115px] lg:h-[171px] lg:hover:shadow-lg lg:hover:shadow-slate-500/100'  src="https://www.vinabook.com/images/thumbnails/product/115x/376148_p97320mscreenshot20230213081258.jpg" alt="" title="Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)"/>

  <div className='lg:w-[120px] lg:mx-[27px]  lg:pt-[20px]  lg:hover:text-[#24890B]'>
   {/* **************************************************************************************************************/}
   {/* TÊN TIÊU ĐỀ SẢN PHẨM ở đây */}
   {/* **************************************************************************************************************/}
  <a className='block text-left truncate text-[18px] lg:block lg:text-left lg:truncate lg:text-[15px]' title="Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)" href='#'>Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)</a>

   {/* **************************************************************************************************************/}
   {/* TÊN TÁC GIẢ CỦA SẢN PHẨM ở đây */}
   {/* **************************************************************************************************************/}
  <span className='block text-center truncate text-[15px] pt-[2px] text-[#6c6c6c] lg:block lg:text-left lg:text-[13px] lg:pt-[5px] lg:text-[#6c6c6c]'>John Toland</span>

   {/* **************************************************************************************************************/}
   {/* GIÁ GỐC CỦA SẢN PHẨM ở đây */}
   {/* **************************************************************************************************************/}
  <span className='block text-center truncate text-[17px] pt-[2px] text-[#494949] lg:block lg:text-left lg:text-[15px] lg:pt-[5px] lg:text-[#494949]'> <del>599.000 đ</del></span>

   {/* **************************************************************************************************************/}
   {/* GIÁ SAU KHI GIẢM GIÁ CỦA SẢN PHẨM ở đây */}
   {/* **************************************************************************************************************/}
  <span className='block text-center truncate text-[18px] text-[#b43535] font-medium lg:block lg:text-left  lg:text-[16px] lg:text-[#b43535] lg:font-medium'>450.000 đ</span>
  </div>

   {/* **************************************************************************************************************/}
   {/* PHẦN TRĂM ĐÃ GIẢM GIÁ CỦA SẢN PHẨM ở đây */}
   {/* **************************************************************************************************************/}
 <span className='block w-[43px] bg-red-500 p-1 rounded-[5px] text-[white] mt-[-137px] ml-[72px] relative    lg:block lg:w-[43px] lg:bg-red-500 lg:p-1 lg:rounded-[5px] lg:text-[white] lg:mt-[-140px] lg:ml-[115px] lg:relative'>15%</span>


</div>

 {/* **************************************************************************************************************/}
 {/* KẾT THÚC 1 SẢN PHẨM HOÀN CHỈNH */}
 {/* **************************************************************************************************************/}

  {/* **************************************************************************************************************/}
   {/* 1 SẢN PHẨM HOÀN CHỈNH BẮT ĐẦU TỪ ĐOẠN DIV DƯỚI NÀY */}
   {/* **************************************************************************************************************/}
<div className='item-product  shadow-lg shadow-slate-500/100  w-[170px] h-[335px] py-[30px]  text-center px-[30px]  mx-[auto] mt-[30px]   lg:w-[auto] lg:h-[360px]  lg:text-center lg:px-[30px] lg:block  lg:pb-[35px] lg:hover:text-[#24890B]  lg:shadow-none'>

{/* **************************************************************************************************************/}
{/* Kích cỡ ảnh tiêu chuẩn: 115 x 171  */}
{/* HÌNH ẢNH CỦA SẢN PHẨM Ở ĐÂY */}
{/* **************************************************************************************************************/}
<img className='lg:inline-block lg:cursor-pointer lg:w-[115px] lg:h-[171px] lg:hover:shadow-lg lg:hover:shadow-slate-500/100'  src="https://www.vinabook.com/images/thumbnails/product/115x/376148_p97320mscreenshot20230213081258.jpg" alt="" title="Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)"/>

<div className='lg:w-[120px] lg:mx-[27px]  lg:pt-[20px]  lg:hover:text-[#24890B]'>
 {/* **************************************************************************************************************/}
 {/* TÊN TIÊU ĐỀ SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<a className='block text-left truncate text-[18px] lg:block lg:text-left lg:truncate lg:text-[15px]' title="Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)" href='#'>Adolf Hitler - Chân Dung Một Trùm Phát Xít (Tái Bản 2020) (Bìa Cứng)</a>

 {/* **************************************************************************************************************/}
 {/* TÊN TÁC GIẢ CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block text-center truncate text-[15px] pt-[2px] text-[#6c6c6c] lg:block lg:text-left lg:text-[13px] lg:pt-[5px] lg:text-[#6c6c6c]'>John Toland</span>

 {/* **************************************************************************************************************/}
 {/* GIÁ GỐC CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block text-center truncate text-[17px] pt-[2px] text-[#494949] lg:block lg:text-left lg:text-[15px] lg:pt-[5px] lg:text-[#494949]'> <del>599.000 đ</del></span>

 {/* **************************************************************************************************************/}
 {/* GIÁ SAU KHI GIẢM GIÁ CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block text-center truncate text-[18px] text-[#b43535] font-medium lg:block lg:text-left  lg:text-[16px] lg:text-[#b43535] lg:font-medium'>450.000 đ</span>
</div>

 {/* **************************************************************************************************************/}
 {/* PHẦN TRĂM ĐÃ GIẢM GIÁ CỦA SẢN PHẨM ở đây */}
 {/* **************************************************************************************************************/}
<span className='block w-[43px] bg-red-500 p-1 rounded-[5px] text-[white] mt-[-137px] ml-[72px] relative    lg:block lg:w-[43px] lg:bg-red-500 lg:p-1 lg:rounded-[5px] lg:text-[white] lg:mt-[-140px] lg:ml-[115px] lg:relative'>15%</span>


</div>

{/* **************************************************************************************************************/}
{/* KẾT THÚC 1 SẢN PHẨM HOÀN CHỈNH */}
{/* **************************************************************************************************************/}



        </div> 
        <div className='mx-auto border-t-2 border-x-zinc-900 w-[90%] lg:mx-0 lg:border-t-2 lg:border-x-zinc-900 lg:w-[1000px]'>
        <span className='text-[15px] inline-block p-[10px] text-[#2287b6] lg:text-[13px] lg:inline-block lg:p-[20px] lg:text-[#2287b6]'>Xóa sản phẩm</span> <span className='text-[15px] inline-block p-[10px] text-[#2287b6] lg:text-[13px] lg:inline-block lg:p-[20px] lg:text-[#2287b6]'>Tiếp tục mua</span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WishList