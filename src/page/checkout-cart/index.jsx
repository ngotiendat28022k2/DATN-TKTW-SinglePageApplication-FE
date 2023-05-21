import React, { useEffect, useState } from "react";
import {
  getCartToDatabase,
  getToCart,
  readCartToDatabase,
  removeCartToDatabase,
  removeToCart,
  updateCartToDatabase,
  updatetoCart,
} from "../../slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import local from "../../utiliti/local/localSesion";
import helper from "../../utiliti/helper/helper";
import { Link } from "react-router-dom";
import RequestLoading from "../../components/requestLoading/RequestLoading";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";

const CheckoutCart = () => {
  const dispatch = useDispatch();
  const [carts, setCarts] = useState([]);
  const [user, setUser] = useState(local.get("user") || null);
  const cartStore = useSelector((state) => state.cart.value);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPerProduct, setTotalPerProduct] = useState(0);
  const [totalPerProducts, setTotalPerProducts] = useState([]);

  useEffect(() => {
    if (user) {
      (async () => {
        try {
          const { payload } = await dispatch(getCartToDatabase(user._id));
          console.log("getcart", payload);
          if (payload?.successCode) {
            setCarts(payload.data);
          }
        } catch (error) {
          console.log("error", error);
        }
      })();
    } else {
      dispatch(getToCart());
    }
  }, []);

  useEffect(() => {
    setCarts(cartStore);
  }, [cartStore]);
  console.log("cartStore", cartStore);

  const handleSlected = async (e, id) => {
    const isSelected = e.target.checked ? true : false;
    const data = carts.filter((cart) => cart._id === id);
    const cartToUpdate = { ...data[0], selected: isSelected };
    if (user) {
      try {
        setIsLoading(true);
        await dispatch(updateCartToDatabase(cartToUpdate));
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    } else {
      console.log("cartToUpdate", cartToUpdate);
      dispatch(updatetoCart(cartToUpdate));
    }
  };
  const increaseQuantity = (quantity) => {
    return quantity + 1;
  };

  const decreaseQuantity = (quantity) => {
    return quantity - 1;
  };
  const handleQuantityChange = async (id, action) => {
    const data = carts.filter((cart) => cart._id === id);
    let cartToUpdate = { ...data[0] };
    switch (action) {
      case "increase":
        cartToUpdate.quantity = increaseQuantity(cartToUpdate.quantity);
        break;
      case "decrease":
        cartToUpdate.quantity = decreaseQuantity(cartToUpdate.quantity);
        break;
      default:
        throw new Error(`Unsupported action: ${action}`);
    }
    console.log("cartToUpdate", cartToUpdate);
    if (user) {
      try {
        setIsLoading(true);
        await dispatch(updateCartToDatabase(cartToUpdate));
        setIsLoading(false);
      } catch (error) {
        console.log("Error:", error);
      }
    } else {
      dispatch(updatetoCart(cartToUpdate));
    }
  };

  const handleRemove = async (data) => {
    if (user) {
      try {
        console.log("id", data);
        setIsLoading(true);
        const { payload } = await dispatch(removeCartToDatabase(data));
        console.log("payload", payload);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    } else {
      dispatch(removeToCart(data));
    }
  };

  useEffect(() => {
    let totalPrices = [];
    let totalPrice = 0;
  
    carts.forEach((cart) => {
      let price = cart.product.sale || cart.product.price;
      let total = cart.quantity * price;
      if (cart.selected) {
        totalPrice += total;
      }
      totalPrices.push(total);

    });
  
    setTotalPerProduct(totalPrices);
    setTotalPerProducts(totalPrice);
  }, [carts]);

  return (
    <div className="">
      {isLoading && <RequestLoading />}
      <div className="flex items-center gap-[5px] py-[20px]">
        <div className="uppercase font-medium">
          <span className="text-[21px]">Giỏ hàng</span>
        </div>
        <div className="text-[#000]">
          <span>({carts.length} sản phẩm)</span>
        </div>
      </div>
      <div className="flex justify-between">
        {/* Block 1: Chi tiết về thanh toán sản phẩm trong giỏ hàng */}
        <div className=" max-w-[66%] w-full">
          <div className="flex items-center justify-start  max-w-[100%] w-full bg-[white] py-[10px] rounded-[7px]">
            <div className="w-[5%] flex justify-center">
              {/* <input type="checkbox" className="w-[20px] h-[20px]" /> */}
            </div>
            <div className="text-[16px] w-[55%]  flex justify-start font-medium">
              <span className="">Chọn tất cả ({carts.length} sản phẩm)</span>
            </div>
            <div className="text-[16px] w-[12%]  flex justify-center font-medium">
              <span className="">Số lượng</span>
            </div>
            <div className="text-[16px] w-[20%] flex justify-center font-medium">
              <span className="">Thành tiền</span>
            </div>
            <div className="w-[7%]"></div>
          </div>
          <br />
          {/* Thông tin về đơn hàng đã đặt */}
          <div className="bg-[white] py-[10px] rounded-[7px]  mt-[-15px]">
            {/* Đơn hàng mẫu đầu tiên */}
            {carts.length > 0 ? (
              carts.map((cartItem, index) => (
                <div
                  key={cartItem._id}
                  className="flex items-center justify-start  max-w-[100%] w-full py-[20px] border-b-[1px] border-solid border-[#e6e6e6]"
                >
                  <div className="w-[5%] flex justify-center">
                    <input
                      className="w-[20px] h-[20px]"
                      type="checkbox"
                      defaultChecked={cartItem.selected}
                      checked={cartItem.selected}
                      onClick={(e) => handleSlected(e, cartItem._id)}
                    />
                  </div>
                  <div className="w-[55%] flex justify-start">
                    <div className="mr-[20px] max-w-[100px]">
                      <img
                        className="w-full"
                        src={cartItem.product?.productImage[0]}
                        alt={cartItem.product?.name}
                      />
                    </div>
                    <div className="flex justify-between flex-col">
                      <div className="text-[15px]">
                        <span className="hover:text-PK-client transition-all">
                          <Link to={`/detail/${cartItem.product._id}`}>
                            {cartItem.product.name}
                          </Link>
                        </span>
                      </div>
                      <div className=" font-semibold">
                        {cartItem.product.sale === 0 ||
                        !cartItem.product.sale ? (
                          <span className="text-[17px] mr-[20px]">
                            {helper.maskValuePrice(cartItem.product.price)}
                          </span>
                        ) : (
                          <>
                            <span className="text-[17px] mr-[20px]">
                              {helper.maskValuePrice(cartItem.product.sale)}
                            </span>
                            <span className="text-[13px] line-through text-[#7A7E7F]">
                              {helper.maskValuePrice(cartItem.product.price)}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="w-[16%]">
                    <div className="  border border-solid border-[#9e9e9e] rounded-[4px]">
                      <div className="flex items-center">
                        <div
                          className="p-[14px]"
                          onClick={() =>
                            handleQuantityChange(cartItem._id, "decrease")
                          }
                        >
                          <img
                            className="w-[142px] h-auto object-contain"
                            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_minus2x.png"
                          />
                        </div>
                        <div className=" text-[18px] font-medium p-[3px]">
                          <input
                            className="w-full text-center focus-visible:outline-0"
                            type="text"
                            value={cartItem.quantity}
                          />
                        </div>
                        <div
                          className="p-[14px]"
                          onClick={() =>
                            handleQuantityChange(cartItem._id, "increase")
                          }
                        >
                          <img
                            className="w-[142px] h-auto"
                            src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_plus2x.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-[16px] w-[20%] flex justify-center font-medium">
                    <span className="text-[#C92127] font-bold">
                      {helper.maskValuePrice(totalPerProduct[index])}{" "}
                    </span>
                  </div>
                  <div
                    className="w-[10%] text-center"
                    onClick={() => handleRemove(cartItem)}
                  >
                    <Button>
                      <Delete color="error"></Delete>
                    </Button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center">
                <span className="mr-[10px]">Giỏ hàng không có sản phẩm.</span>
                <Link
                  to="/home"
                  className="hover:text-green-500 text-PK-client"
                >
                  Xem thêm sản phẩm
                </Link>
              </div>
            )}
          </div>
        </div>
        {/* Block 2: Chi tiết về vé khuyến mãi */}
        <div className="   max-w-[33%] w-full">
          <div className="max-w-[100%] w-full bg-[white] py-[10px] px-[20px]  rounded-[7px]">
            {/* Block 1: Vé khuyến mãi */}
            <div className="flex justify-between border-b-[1px] border-solid border-[#e6e6e6] pb-[20px]">
              <div className="flex">
                <div className="">
                  <img
                    src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/promotion/ico_coupon.svg"
                    alt=""
                  />
                </div>
                <div className="uppercase text-[#2f80ec] pl-[10px]">
                  <span className="">Khuyến mãi</span>
                </div>
              </div>
              <div className="text-[#2f80ec]">
                <span className="">Xem thêm</span>
              </div>
            </div>
            {/* Block 1: Chi tiết về vé khuyến mãi */}
            <div className="py-[5px]">
              {/* Block 1: Sản phẩm mẫu về vé khuyến mãi */}
              <div className="border-b-[1px] border-solid border-[#e6e6e6] py-[20px]">
                <div className=" pb-[30px]">
                  <div className="flex justify-between">
                    <div className="">
                      <span className="text-[17px] font-semibold uppercase">
                        Mã giảm 10k
                      </span>
                    </div>

                    <div className=" cursor-pointer">
                      <span className="text-[15px] underline text-[#2f80ec]">
                        Chi tiết
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <span className="text-[15px]">
                      Đơn hàng từ 150k - Không áp dụng cho Phiếu Quà tặng
                    </span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="max-w-[250px] h-[6px] w-full bg-[#2f80ec] rounded-[10px] mt-[6px]">
                    <div className="pb-[7px]">
                      <span className=""></span>
                    </div>
                    <div className="flex justify-between text-[12px]">
                      <div className="">
                        <span className="">Mua thêm 144.000 đ để nhận mã</span>
                      </div>
                      <div className="">
                        <span className="">400.000 đ</span>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div className=" rounded-[10px] px-[18px] py-[5px] bg-[#2f80ec] items-center justify-center flex cursor-pointer">
                      <span className="text-[#fff] font-semibold">
                        Mua thêm
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Block 3 */}
            <div className="">
              <span className="text-[#9FA7AB] text-[14px]">
                Có thể áp dụng đồng thời nhiều mã
              </span>
            </div>
          </div>
          <br />
          {/* Block 4: Thành tiền */}
          <div className="bg-[white] flex py-[10px] px-[20px]  rounded-[7px]">
            <div className="max-w-[100%] w-full">
              <div className="flex justify-between border-b-[1px] border-solid border-[#e6e6e6] pb-[10px]">
                <div className="">
                  <span className="text-[17px]">Thành tiền</span>
                </div>
                <div className=" cursor-pointer">
                  <span className="text-[17px]">
                    {helper.maskValuePrice(totalPerProducts)}
                  </span>
                </div>
              </div>
              <div className="py-[10px]">
                <div className="flex justify-between pb-[10px] items-center">
                  <div className="">
                    <span className="text-[17px] font-medium">
                      Tổng Số Tiền (gồm VAT)
                    </span>
                  </div>
                  <div className=" cursor-pointer">
                    <span className="text-[22px] text-[#C92127] font-bold">
                      {helper.maskValuePrice(totalPerProducts)}
                    </span>
                  </div>
                </div>
                <div className="">
                  <div className=" w-full border-[2px] border-solid border-[#C92127] rounded-[10px] px-[30px] py-[10px] items-center justify-center flex uppercase bg-[#C92127] text-[19px]">
                    <span className="text-[#fff] font-semibold">
                      Thanh toán
                    </span>
                  </div>
                  <div className="text-[13px] py-[3px]">
                    <span className="text-[#ff0008]">
                      (Giảm giá trên web chỉ áp dụng cho bán lẻ)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default CheckoutCart;
