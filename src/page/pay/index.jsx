import React, { useEffect, useState } from "react";
import "./index.css";
import local from "../../utiliti/local/localSesion";
import { Button } from "@mui/material";
import Popup from "../../components/AdminComponent/MyPopup/MyPopup";
import AddressListUser from "../../components/addressUser/addressUserList/AddressListUser";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addressUserIsActive,
  getAllAddressUser,
} from "../../slice/addressUserSlide";
import helper from "../../utiliti/helper/helper";
const PagePay = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [user, setUser] = useState(local.get("user") || null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const infoUserStore = useSelector((state) => state.infoUser.value);
  const [infoUser, setInfoUser] = useState(undefined);
  const [totalPerProduct, setTotalPerProduct] = useState(0);
  const [totalPerProducts, setTotalPerProducts] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [orderFromLocalStorage, setOrderFromLocalStorage] = useState(() => {
    const orderWithExpiry = JSON.parse(localStorage.getItem("pendingOrder"));
    if (orderWithExpiry && orderWithExpiry.expiry > Date.now()) {
      return orderWithExpiry.order;
    }
    return null;
  });
  console.log("totalPerProduct", totalPerProduct);
  console.log("totalPerProducts", totalPerProducts);
  useEffect(() => {
    if (!user || !orderFromLocalStorage) {
      navigate("/checkout/cart");
    }
  }, [orderFromLocalStorage, user]);
 
  useEffect(() => {
    (async () => {
      try {
        await dispatch(getAllAddressUser(user._id));
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [user]);
  useEffect(() => {
    let totalPrices = [];
    let totalPrice = 0;

    orderFromLocalStorage.forEach((cart) => {
      let price = cart.product.sale || cart.product.price;
      let total = cart.quantity * price;
      if (cart.selected) {
        totalPrice += total;
      }
      totalPrices.push(total);
    });

    setTotalPerProduct(totalPrices);
    setTotalPerProducts(totalPrice);
  }, [orderFromLocalStorage]);

  useEffect(() => {
    const data = infoUserStore.filter((infoUser) => infoUser.isActive === true);
    setInfoUser(...data);
  }, [infoUserStore]);

  const handleAddress = () => {
    setOpenPopup(true);
  };


  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };
  console.log("selectedPaymentMethod", selectedPaymentMethod)

  const handlepayment = () => {
    console.log("dia chi", infoUser)
    console.log("don hang",orderFromLocalStorage)
  }

  const handleRequest = () => {
    const requestData = {
      payment_type_id: 2,
      required_note: "KHONGCHOXEMHANG",
      // to_name: fullname,
      // to_phone: phoneNumber,
      // to_address: address,
      // to_ward_code: selectedWard,
      // to_district_id: parseInt(selectedDistrict),
      // cod_amount: codAmount,
      to_name: fullname,
      to_phone: phoneNumber,
      to_address: address,
      to_ward_code: selectedWard,
      to_district_id: parseInt(selectedDistrict),
      cod_amount: codAmount,
      content: productshortDescription,
      weight: Number(weight.split('(')[0]),
      length: 1,
      width: 14,
      height: 20,
      cod_failed_amount: codAmount,
      deliver_station_id: null,
      insurance_value: grandTotal,
      service_id: 100039,
      service_type_id: 2,
      coupon: null,
      items: [
        {
          name: productName,
          code: productCategory,
          quantity: productQuantity,
          price: productSale,
          width: 14,
          height: 20,
          category: {
            level1: productCategory
          }
        }
      ]
    };
  
    fetch("https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ShopId': '4152116',
        'Token': '6918bfab-f625-11ed-a281-3aa62a37e0a5'
      },
      body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
      // Xử lý phản hồi từ API
      console.log(data);
    })
    .catch(error => {
      // Xử lý lỗi
      console.error(error);
    });
  };
  return (
    <div>
      <div className="bg-white md:m-5 m-3">
        <div className="md:p-5 p-3">
          <div className="font-bold text-lg p-2">ĐỊA CHỈ NHẬN HÀNG</div>
          <div className="mx-2 border-b-2"></div>
          <div className="p-2">
            <div className="inline-block">
              <i className="fa-solid fa-location-dot mr-[5px] text-[#c7232b]"></i>
              <span className="capitalize">{`${infoUser?.name} - ${infoUser?.numberPhone}. `}</span>
              <span className="capitalize text-[#333]">
                Address:{" "}
                {`${infoUser?.specificAddress} ${infoUser?.selectedWard} ${infoUser?.selectedDistrict} ${infoUser?.selectedProvince}`}
              </span>
              <span className="border-[1px] text-[10px] py-[3px] px-[7px] ml-[10px] border-[#c7232b] text-[#c7232b]">
                Mặc Định
              </span>
            </div>
            <Button
              onClick={handleAddress}
              color="error"
              sx={{ textTransform: "capitalize", marginLeft: "30px" }}
            >
              Thay đổi
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white md:m-5 m-3">
        <div className="md:p-5 p-3">
          <div className="font-bold text-lg p-2">MÃ KHUYẾN MÃI/MÃ QUÀ TẶNG</div>
          <div className="mx-2 border-b-2"></div>
          <div className="p-2">
            <div className="flex my-3">
              <label className="mr-10 leading-8">Mã KM/Quà tặng</label>
              <div>
                <input
                  type="text"
                  className="input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[320px] rounded-lg"
                  placeholder="Nhập mã khuyến mãi/Quà tặng"
                />
                <span className="bg-[#2F80ED] p-1 border border-inherit h-4 rounded-md md:ml-[-14%] ml-[-25%] font-bold text-[#FFFF]">
                  Áp dụng
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white md:m-5 m-3">
        <div className="md:p-5 p-3">
          <div className="font-bold text-lg p-2">KIỂM TRA LẠI ĐƠN HÀNG</div>
          <div className="mx-2 border-b-2"></div>
          {orderFromLocalStorage &&
            orderFromLocalStorage.map((item, index) => (
              <div className="p-2" key={item._id}>
                <div className="">
                  <div className="flex">
                    <div className="">
                      <img
                        className="w-36 h-36"
                        src={item.product.productImage[0]}
                        alt=""
                      />
                    </div>
                    <div className="md:flex">
                      <div className="lg:w-[650px] md:w-[300px] w-[300px]">
                        {item.product.name}
                      </div>
                      <div className="w-20">
                        {item.product.sale ? (
                          <>
                            <div>
                              {helper.maskValuePrice(item.product.sale)}
                            </div>
                            <div className="text-[#bfbfbf] line-through">
                              {helper.maskValuePrice(item.product.price)}
                            </div>
                          </>
                        ) : (
                          <div>{helper.maskValuePrice(item.product.price)}</div>
                        )}
                      </div>
                      <div className="w-20 md:text-center flex md:justify-center">
                        <div className="md:hidden block">Số lượng: </div>
                        <div>{item.quantity}</div>
                      </div>
                      <div className="w-20 text-[#F39801] font-bold">
                        {helper.maskValuePrice(totalPerProduct[index])}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="bg-white md:m-5 m-3">
      <div className="md:p-5 p-3">
        <div className="font-bold text-lg p-2">PHƯƠNG THỨC THANH TOÁN</div>
        <div className="mx-2 border-b-2"></div>
        <div className="p-2">
          <div className="flex my-3">
            <input
              type="radio"
              className="w-5 h-5 mt-[2px]"
              value="VNPAY"
              checked={selectedPaymentMethod === 'VNPAY'}
              onChange={handlePaymentMethodChange}
            />
            <img
              className="ml-2"
              src="https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_vnpay.svg?q=102103"
              alt=""
            />
            <div className="text-base pl-2 h-6">VNPAY</div>
          </div>
          <div className="flex">
            <input
              type="radio"
              className="w-5 h-5 mt-[2px]"
              value="COD"
              checked={selectedPaymentMethod === 'COD'}
              onChange={handlePaymentMethodChange}
            />
            <img
              className="ml-2"
              src="https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_cashondelivery.svg?q=102103"
              alt=""
            />
            <div className="text-base pl-2 h-6">
              Thanh toán bằng tiền mặt khi nhận hàng
            </div>
          </div>
        </div>
      </div>
    </div>

      <div className="bg-white md:m-5 m-3">
        <div className="md:p-5 p-3">
          <div className="mx-2 mb-4">
            <div>
              <div className="flex md:justify-end mb-1 justify-between">
                <div>Thành tiền</div>
                <div className="text-right w-40">198.400 đ</div>
              </div>
              <div className="flex md:justify-end justify-between mb-1">
                <div>Phí vận chuyển (Giao hàng tiêu chuển)</div>
                <div className="text-right w-40">20.000 đ</div>
              </div>
              <div className="flex md:justify-end justify-between mb-1">
                <div className="font-bold">Tổng số tiền (Gồm VAT)</div>
                <div className="font-bold text-lg text-[#F39801] text-right w-40">
                  216.400 đ
                </div>
              </div>
            </div>
          </div>

          <div className="mx-2 border-b-2"></div>
          <div className="flex mx-2 py-5 md:justify-between justify-center">
            <Link to="/checkout/cart">
              <Button className="md:flex hidden mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-arrow-left w-8 h-8"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <div className="ml-3 font-bold pt-1">Quay về giỏ hàng</div>
              </Button>
            </Link>
            <div className="flex">
              <Button color="error" variant="contained" onClick={handlepayment}>
                Xác nhận thanh toán
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Popup
        title="Địa Chỉ Của Tôi"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <AddressListUser setOpen={setOpenPopup} />
      </Popup>
    </div>
  );
};

export default PagePay;
