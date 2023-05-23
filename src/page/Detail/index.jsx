import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../slice/productsSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import helper from "../../utiliti/helper/helper";
import { Button } from "@mui/material";
import local from "../../utiliti/local/localSesion";
import {
  addToCart,
  getToCart,
  saveCartToDatabase,
} from "../../slice/cartSlice";
import WSPGallery from "./CarouselImage/WSPGallery";
import CommentList from "./CommentList/CommentList";
import { getAllComment } from "../../slice/commentSlice";
const DetailProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(local.get("user"));
  const [comments, setComments] = useState([]);
  const [cart, setCart] = useState({
    product: id,
    selected: false,
    quantity: 1,
    user: user ? user._id : undefined,
  });
  const [showFullDescription, setShowFullDescription] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    try {
      (async () => {
        const { payload } = await dispatch(getProduct(id));
        // console.log("payload", payload);
        if (payload?.data) {
          setProduct(payload.data);
        } else {
          helper.toast("error", payload.message);
          setTimeout(() => {
            navigate("/home");
          }, 3000);
        }
      })();
    } catch (error) {
      helper.toast("error", "fetching product false");
    }
  }, [id]);

  const handleQuantity = (action) => {
    if (action === "increase" && cart.quantity < product.quantity) {
      setCart({ ...cart, quantity: cart.quantity + 1 });
    } else if (action === "decrease" && cart.quantity > 1) {
      setCart({ ...cart, quantity: cart.quantity - 1 });
    }
  };

  const handleAddToCart = async () => {
    if (user) {
      try {
        const { payload } = await dispatch(saveCartToDatabase(cart));
        console.log("payload", payload);
        if (payload?.successCode) {
          helper.toast("success", "Product added to cart");
        }
        if (payload?.errorCode) {
          helper.toast("success", payload.message);
        }
      } catch (error) {
        console.log("error", error);
      }
    } else {
      const { user, ...other } = cart;
      const newCart = { ...other, product: product };
      dispatch(getToCart());
      const { payload } = dispatch(addToCart(newCart));
      console.log("payload", payload);
      if (payload.successCode) {
        helper.toast("success", payload.message);
      } else {
        helper.toast("error", payload.message);
      }
    }
  };

  const handlePayCart = async () => {
    if (user) {
      try {
        const { payload } = await dispatch(saveCartToDatabase(cart));
        if (payload?.successCode) {
          navigate("/checkout/cart");
        }
        if (payload?.errorCode) {
          helper.toast("success", payload.message);
        }
      } catch (error) {
        console.log("error", error);
      }
    } else {
      const { user, ...other } = cart;
      const newCart = { ...other, product: product };
      dispatch(getToCart());
      const { payload } = dispatch(addToCart(newCart));
      console.log("payload", payload);
      if (payload.successCode) {
        navigate("/checkout/cart");
      } else {
        helper.toast("error", payload.message);
      }
    }
  };

  useEffect(() => {
    (async () => {
      const { payload } = await dispatch(getAllComment(id));
      if (payload.success) {
        setComments(payload.data);
      }
    })();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="">
        {/* Tiêu đề link đến sản phẩm */}
        <div className="uppercase text-[#000] text-[13px] flex gap-[5px] py-[10px] px-[20px] md:px-[0px]">
          <span className="">Sách</span>
          <span className="text-[#737373]"> &gt; </span>
          <span className="">{product?.name}</span>
        </div>
        <div className="bg-[white] grid grid-cols-1 md:flex px-[20px] py-[40px] rounded-[7px]">
          {/* Hình ảnh sản phẩm */}
          <div className="">
            <div className="flex justify-center">
              <div className=" object-contain items-center">
                <div className="">
                  <WSPGallery galleryImages={product?.productImage} />
                </div>
              </div>
              <div className=" object-contain p-[6px]">
                <img
                  className="max-w-[608px] max-h-[468px] w-full h-full "
                  src={product?.productImage[0]}
                  alt=""
                />
              </div>
            </div>
            <div className="flex md:justify-center md:gap-[10px] mt-[25px] fixed bottom-0 z-[1] md:static ml-[-20px] w-[100%]  shadow-[0px_5px_15px_rgba(0,0,0,0.35)] md:shadow-none md:ml-0">
              <div className="w-[28%]  border-r-[1px] border-solid border-[#9e9e9e] bg-[#fff] flex items-center justify-center md:hidden custom">
                <div className="flex items-center justify-center">
                  <div className="px-[15px]" onClick={() =>
                    handleQuantity("decrease")
                  }>
                    <img
                      className="w-[72px] h-auto"
                      src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_minus2x.png"
                      alt=""
                    />
                  </div>
                  <div className="max-w-[60px] w-full text-[16px] md:text-[18px] font-medium p-[3px]">
                    <input
                      className="max-w-[60px] w-full text-center focus-visible:outline-0"
                      type="text"
                      defaultValue={1}
                      value={cart.quantity}
                    />
                  </div>
                  <div className="px-[15px]" onClick={() =>
                    handleQuantity("increase")
                  }>
                    <img
                      className="w-[72px] h-auto"
                      src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_plus2x.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div
                className="w-[40%] px-[20px] py-[15px] md:max-w-[220px] md:w-full md:border-[2px] md:border-solid md:border-[#C92127] md:rounded-[10px] md:px-[30px] md:py-[10px] items-center justify-center flex cursor-pointer bg-[#fff]"
                onClick={handleAddToCart}
              >
                <span className="text-[#C92127] font-semibold w-full text-[16px] md:text-[16px] text-center ">
                  Thêm vào giỏ hàng
                </span>
              </div>
              <div className="w-[32%] px-[20px] py-[15px] md:max-w-[220px] md:w-full border-[2px] border-solid border-[#C92127] md:rounded-[10px] md:px-[30px] md:py-[10px] bg-[#C92127] items-center justify-center flex cursor-pointer" onClick={handlePayCart}>
                <span
                  className="text-[#fff] font-semibold "
                 
                >
                  Mua ngay
                </span>
              </div>
            </div>
          </div>
          {/* Tên sản phẩm, giá sản phẩm, desc.. */}
          <div className="md:w-[70%]">
            <div className="md:pb-[16px] pt-[10px]">
              <span className="text-[23px] text-[#000] font-medium">
                {product?.name}
              </span>
            </div>
            <div className="md:flex md:justify-between hidden">
              <div className="text-[14px]">
                <div className="">
                  <span className=" text-[#000]">
                    Nhà cung cấp:
                    {product?.supplieres.map((suppliere) => (
                      <Link
                        className="text-[#2f80ec] font-semibold pl-[5px] hover:text-[red]"
                        to=""
                        key={suppliere.name}
                      >
                        {suppliere.name}
                      </Link>
                    ))}
                  </span>
                </div>
                <div className="">
                  <span className=" text-[#000]">
                    Nhà xuất bản:
                    {product?.publishings.map((publishing) => (
                      <Link
                        className="text-[#2f80ec] font-semibold pl-[5px] hover:text-[red]"
                        to=""
                        key={publishing.name}
                      >
                        {publishing.name}
                      </Link>
                    ))}
                  </span>
                </div>
              </div>
              <div className="text-[14px] mr-[100px]">
                <div className="">
                  <span className=" text-[#000]">
                    Tác giả:
                    {product?.authors.map((author) => (
                      <Link
                        className="text-[#2f80ec] font-semibold pl-[5px] hover:text-[red]"
                        to=""
                        key={author.name}
                      >
                        {author.name}
                      </Link>
                    ))}
                  </span>
                </div>
                <div className="">
                  <span className=" text-[#000]">
                    Hình thức bìa:
                    {product?.formbooks.map((formbook) => (
                      <Link
                        className="text-[#2f80ec] font-semibold pl-[5px] hover:text-[red]"
                        to=""
                        key={formbook.name}
                      >
                        {formbook.name}
                      </Link>
                    ))}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex pb-[15px]">
              <div className="flex justify-start md:justify-center items-center">
                {product?.sale !== 0 || product?.sale ? (
                  <>
                    <div className="pr-[20px]">
                      <span className="text-[33px] text-[#C92127] font-bold ">
                        {helper.maskValuePrice(product?.sale)}
                      </span>
                    </div>
                    <div className="pr-[20px]">
                      <span className="text-[17px] line-through">
                        {helper.maskValuePrice(product?.price)}
                      </span>
                    </div>
                    <div className="">
                      <span className="text-[17px] p-[5px] bg-[#C92127] rounded-[5px] text-[white] font-medium">
                        {(
                          ((product?.price - product?.sale) / product?.price) *
                          100
                        ).toFixed(0)}
                        %
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="pr-[20px]">
                    <span className="text-[33px] text-[#C92127] font-bold">
                      {helper.maskValuePrice(product?.price)}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="w-[100%] pb-[10px]">
              <div className="text-[14px]">
                <div className="flex gap-[30px] pb-[10px]">
                  <div className="w-[17%]  md:block hidden">
                    <span className=" text-[#000]">Thời gian giao hàng</span>
                  </div>
                  <div className="w-[100%] md:w-[75%]">
                    <span className=" text-[#000] cursor-pointer">
                      <span className=" font-semibold">
                        Từ 3 đến 7 ngày (Tùy thuộc vào địa chỉ của bạn)
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex gap-[30px] ">
                  <div className="w-[17%] md:block hidden">
                    <span className=" text-[#000]">Chính sách đổi trả</span>
                  </div>
                  <div className="w-[100%] md:w-[75%]">
                    <span className=" text-[#000]">
                      Đổi trả sản phẩm trong 30 ngày
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex gap-[30px] pt-[10px] hidden">
              <div className="w-[17%]">
                <span className="text-[#555555] font-medium text-[18px]">
                  Số lượng:
                </span>
              </div>
              <div className="  border border-solid border-[#9e9e9e] rounded-[4px]">
                <div className="flex items-center">
                  <div
                    className="p-[15px]"
                    onClick={() => handleQuantity("decrease")}
                  >
                    <img
                      className="w-[12px] h-auto"
                      src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_minus2x.png"
                      alt=""
                    />
                  </div>
                  <div className="max-w-[60px] w-full text-[18px] font-medium p-[3px]">
                    <input
                      className="max-w-[60px] w-full text-center focus-visible:outline-0"
                      type="text"
                      defaultValue={1}
                      value={cart.quantity}
                    />
                  </div>
                  <div
                    className="p-[15px]"
                    onClick={() => handleQuantity("increase")}
                  >
                    <img
                      className="w-[12px] h-auto"
                      src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_plus2x.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* Block 2: Ưu đãi liên quan */}
        <div className="bg-[white] flex px-[20px] py-[15px] rounded-[7px] relative">
          <div className="max-w-[100%] w-full">
            {/* tiêu đề ưu đãi */}
            <div className="flex uppercase font-semibold text-[18px] w-full pb-[10px]">
              <div className="pr-[5px]">
                <img
                  src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/event_cart_2/ico_coupon_red.svg?q=102080"
                  alt=""
                />
              </div>
              <div className="justify-center items-center flex">
                <span className="">Ưu đãi liên quan</span>
              </div>
            </div>
            <div className="">
              <span className=" absolute right-0 px-[20px] text-[#9FA7AB] top-[50px]">
                Có thể áp dụng nhiều mã
              </span>
            </div>
            {/* ul li ưu đãi */}
            <div className="">
              <div className="pb-[5px] border-b-[1px] border-solid border-[silver]">
                <ul className="md:flex">
                  <li className="inline-block pt-[15px] font-medium md:pt-0 pr-[40px] text-[15px] hover:text-[#db3737] cursor-pointer text-[#333333]">
                    Tất cả
                  </li>
                  <li className="inline-block pt-[15px] font-medium md:pt-0 pr-[40px] text-[15px] hover:text-[#db3737] cursor-pointer text-[#333333]">
                    Mã giảm giá
                  </li>
                  <li className="inline-block pt-[15px] font-medium md:pt-0 pr-[40px] text-[15px] hover:text-[#db3737] cursor-pointer text-[#333333]">
                    Ưu đãi khác
                  </li>
                </ul>
              </div>
            </div>
            {/* Các mã giảm giá */}
            <div className="overflow-y-scroll w-[100%] md:overflow-auto">
              <div className="relative flex pt-[20px] gap-[10px]  overflow-hidden md:w-auto w-[330%] ">
                {/* <Voucher {...{vouchers}}/> */}
                {/* Xem thêm các mã voucher khác */}
                <div className="w-[12%] flex justify-center items-center">
                  <div className="cursor-pointer">
                    <div className="flex justify-center items-center ">
                      <svg
                        id="ico-nextslider"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <g
                          id="Group_1011"
                          data-name="Group 1011"
                          transform="translate(32 32) rotate(180)"
                        >
                          <circle
                            id="Ellipse_55"
                            data-name="Ellipse 55"
                            cx="16"
                            cy="16"
                            r="16"
                            fill="#c92127"
                          />
                          <g
                            id="Group_916"
                            data-name="Group 916"
                            transform="translate(6.4 6.4)"
                          >
                            <path
                              id="Path_684"
                              data-name="Path 684"
                              d="M0,0H19.2V19.2H0Z"
                              fill="none"
                            />
                            <path
                              id="Path_685"
                              data-name="Path 685"
                              d="M4.8,0,0,4.8,4.8,9.6"
                              transform="translate(7.2 4.8)"
                              fill="none"
                              stroke="#fff"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="flex justify-center items-center">
                      <span className="text-[#C92127] text-[15px] font-bold">
                        Xem thêm Mã
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        {/* Block 3: Thông tin chi tiết về sản phẩm */}
        <div className="bg-[white] px-[20px] py-[15px] rounded-[7px] text-[15px]">
          <div className="">
            {/* Tên tiêu đề Block 3 */}
            <div className="text-[20px] font-semibold">
              <span className="">Thông tin sản phẩm</span>
            </div>
            <div className="max-w-[100%] w-full">
              {/* Bảng thông tin chi tiết về sản phẩm */}
              <table className="max-w-[100%] w-full text-[15px]">
                <thead></thead>
                <tbody>
                  <tr className="">
                    <td className="w-[25%] p-[4px] text-[#777]">Mã hàng</td>
                    <td className="w-[100%] p-[4px]">{product?._id}</td>
                  </tr>
                  <tr className="">
                    <td className="w-[25%] p-[4px] text-[#777]">
                      Tên Nhà Cung Cấp
                    </td>
                    <td className="w-[100%] p-[4px]">
                      {" "}
                      {product?.supplieres.map((suppliere) => (
                        <Link
                          className="hover:text-[red]"
                          to=""
                          key={suppliere.name}
                        >
                          {suppliere.name}
                        </Link>
                      ))}
                    </td>
                  </tr>
                  <tr className="">
                    <td className="w-[25%] p-[4px] text-[#777]">Tác giả</td>
                    <td className="w-[100%] p-[4px]">
                      {product?.authors.map((author) => (
                        <Link
                          className=" hover:text-[red]"
                          to=""
                          key={author.name}
                        >
                          {author.name}
                        </Link>
                      ))}
                    </td>
                  </tr>
                  <tr className="">
                    <td className="w-[25%] p-[4px] text-[#777]">Hình Thức</td>
                    <td className="w-[100%] p-[4px]">
                      {product?.formbooks.map((formbook) => (
                        <Link
                          className="hover:text-[red]"
                          to=""
                          key={formbook.name}
                        >
                          {formbook.name}
                        </Link>
                      ))}
                    </td>
                  </tr>
                  {product?.other.map((item) => (
                    <tr className="" key={item.id}>
                      <td className="w-[50%] md:w-[25%] p-[4px] text-[#777]">{item.k}</td>
                      <td className="w-[100%] p-[4px]">{item.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div
                className="border-b-[1px] border-solid border-[#adadad] pb-[10px]"
                dangerouslySetInnerHTML={{ __html: product?.descriptionShort }}
              ></div>
              <div className="pt-[20px]">
                <div
                  className="pt-[10px]"
                  dangerouslySetInnerHTML={{
                    __html: showFullDescription
                      ? product?.descriptionLong
                      : helper.truncateString(product?.descriptionLong, 200),
                  }}
                ></div>
                <div className="items-center justify-center flex cursor-pointer pt-[15px] pb-[8px]">
                  <button
                    className=" text-[#C92127] font-semibold max-w-[220px]  w-full border-[2px] border-solid border-[#C92127] rounded-[10px] px-[30px] py-[10px] items-center justify-center flex"
                    onClick={() => setShowFullDescription(!showFullDescription)}
                  >
                    {showFullDescription ? "Rút gọn" : "Xem thêm"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* Block 4: Đánh giá sản phẩm */}
        <CommentList {...{ user, product, comments }} />
        <br />
        <div className="bg-[white] px-[20px] py-[15px] rounded-[7px] text-[15px] flex justify-around ">
          <div className=" md:flex md:px-[12px] md:py-[12px]">
            <div className="flex justify-center items-center">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-1-2020/icon/ico_shop_1.png"
                alt=""
              />
            </div>
            <div className="md:flex md:justify-center md:items-center md:pl-[10px] font-bold text-[#646464]">
              <span className="text-[17px] hidden md:block">
                Chính Sách Khách Sỉ
              </span>
              <span className="text-[17px] md:hidden block">Khách Sỉ</span>
            </div>
          </div>
          <div className="md:flex md:px-[12px] md:py-[12px]">
            <div className="flex justify-center items-center">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-1-2020/icon/ico_truck.png"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center md:pl-[10px] font-bold text-[#646464]">
              <span className="text-[17px] hidden md:block">
                Thời Gian Giao Hàng
              </span>
              <span className="text-[17px] md:hidden block">Giao Hàng</span>
            </div>
          </div>
          <div className="md:flex md:px-[12px] md:py-[12px]">
            <div className="flex justify-center items-center">
              <img
                src="https://cdn0.fahasa.com/media/wysiwyg/Thang-1-2020/icon/ico_transfer.png"
                alt=""
              />
            </div>
            <div className="flex justify-center items-center md:pl-[10px] font-bold text-[#646464]">
              <span className="text-[17px] hidden md:block">
                Chính Sách Đổi Trả
              </span>
              <span className="text-[17px] md:hidden block">Đổi Trả</span>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
};

export default DetailProduct;
