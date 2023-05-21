import React, { useState, useEffect } from 'react'
import "./index.css"
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
import { Link, json } from "react-router-dom";
import RequestLoading from "../../components/requestLoading/RequestLoading";
import { Button } from "@mui/material";
import { Delete } from "@mui/icons-material";
import axios from 'axios';

const PagePay = () => {
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedWard, setSelectedWard] = useState('');
    const [codAmount, setCodAmount] = useState(0);
    const [weight, setWeight] = useState('');
    const [productName, setProductName] = useState('');
    const [productshortDescription, setProductShortDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productSale, setProductSale] = useState('');

    const [total, setTotal] = useState(null);
    const [deliveryTime, setDeliveryTime] = useState(null);
    const [leadTime, setLeadTime] = useState(0);
    const [showLeadTime, setShowLeadTime] = useState(false);
    const [orderDate, setOrderDate] = useState(0);
    const [showEstimatedDeliveryTime, setShowEstimatedDeliveryTime] = useState(false);

    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber,setPhoneNumber] = useState('')
    const [address, setAddress] = useState('')

    const handleChangeFullName = (event) => {
        setFullName(event.target.value);
        console.log(event.target.value);
      };
    
      const handleChangeEmail = (event) => {
        setEmail(event.target.value);
      };
    
      const handleChangePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
      };

      const handleChangeAddress = (event) => {
        setAddress(event.target.value);
      };

      

    useEffect(() => {
      // Lấy danh sách tỉnh/thành phố
      fetch('https://online-gateway.ghn.vn/shiip/public-api/master-data/province', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Token': '6918bfab-f625-11ed-a281-3aa62a37e0a5'
        },
      })
        .then(response => response.json())
        .then(data => setProvinces(data.data))
        .catch(error => console.error(error));
    }, []);
  
    const handleChangeProvince = (event) => {
      const selectedProvinceId = event.target.value;
      setSelectedProvince(selectedProvinceId);
    
      
  
      // Lấy danh sách quận/huyện dựa trên mã tỉnh/thành phố
      fetch(`https://online-gateway.ghn.vn/shiip/public-api/master-data/district?province_id=${selectedProvinceId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Token': '6918bfab-f625-11ed-a281-3aa62a37e0a5'
        },
      })
        .then(response => response.json())
        .then(data => setDistricts(data.data))
        .catch(error => console.error(error));
    }
  
    const handleRequest = () => {
        const requestData = {
          payment_type_id: 2,
          required_note: "KHONGCHOXEMHANG",
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
      
      useEffect(() => {
        carts.map((cartItem, index) => {
          if (cartItem.product.other[2]) {
            const value = cartItem.product.other[2].v;
            const productName = cartItem.product.name
            const productQuantity = cartItem.quantity
            const productSale = cartItem.product.sale
            const productCategory = cartItem.product.categories[0].name
            const productShortDescription = cartItem.product.descriptionShort
            setWeight(value);
            setProductName(productName)
            setProductQuantity(productQuantity)
            setProductSale(productSale)
            setProductCategory(productCategory)
            setProductShortDescription(productShortDescription)
            console.log('value', value);
          }
        });
      
        if (selectedDistrict && selectedWard) {
          const requestData = {
            service_id: 100039,
            service_type_id: 2,
            from_district_id: 3440,
            to_district_id: parseInt(selectedDistrict),
            to_ward_code: selectedWard,
            weight: Number(weight.split('(')[0]),
            cod_amount: codAmount,
            length: 0,
            width: 0,
            height: 0,
            coupon: '',
            insurance_value: 0
          };
      
          fetch(`https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/fee`, {
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
            const formattedTotal = data.data.total;
            setTotal(formattedTotal);
            setShowLeadTime(!!codAmount);
          })
          .catch(error => console.error(error));
      
          fetch(`https://online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/leadtime`, {
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
            const { leadtime, order_date } = data.data;
            setLeadTime(leadtime);
            setOrderDate(order_date);
          })
          .catch(error => console.error(error));
      
          // Gọi hàm handleRequest để gửi yêu cầu tạo đơn hàng
          handleRequest();
        }
      }, [selectedDistrict, codAmount, selectedWard, weight]);
      
    
    
  
  
    const handleChangeDistrict = (event) => {
      const selectedDistrictId = event.target.value;
      setSelectedDistrict(selectedDistrictId);
      setShowEstimatedDeliveryTime(!!selectedDistrictId);
  
      // Lấy danh sách phường/xã dựa trên mã quận/huyện
      fetch(`https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id=${selectedDistrictId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Token': '6918bfab-f625-11ed-a281-3aa62a37e0a5'
        },
      })
        .then(response => response.json())
        .then(data => setWards(data.data))
        .catch(error => console.error(error));
    }
  
    const handleChangeWard = (event) => {
      setSelectedWard(event.target.value);
      
    }
    function formatEstimatedDeliveryTime(leadTime) {
      if (leadTime) {
        const deliveryTime = new Date(leadTime * 1000);
        const day = deliveryTime.getDate();
        const month = deliveryTime.getMonth() + 1;
        const year = deliveryTime.getFullYear();
        return `${day}/${month}/${year}`;
      }
      return null;
    }

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
  useEffect(() => {
    let totalPrices = [];
    let totalPrice = 0;
  
    carts.forEach((cart) => {
      let price = cart.product.sale || cart.product.price;
      let total = cart.quantity * price;
      totalPrice += total;
      totalPrices.push(total);
    });
  
    setTotalPerProduct(totalPrices);
    setTotalPerProducts(totalPrice);
  }, [carts]);

  console.log('total', total);
  console.log('totalProduct', totalPerProducts);

  const grandTotal = total + totalPerProducts
  console.log(grandTotal)
  

    return (
        <div>
            <div className='bg-white md:m-5 m-3'>
                <div className='md:p-5 p-3'>
                    <div className='font-bold text-lg p-2'>
                        ĐỊA CHỈ GIAO HÀNG
                    </div>
                    <div className='mx-2 border-b-2'></div>
                    <div className='p-2'>
                        <form action="">
                            <div className='md:flex md:my-2'>
                                <div className='md:w-52 p-1'>
                                    <label className=''>Họ và tên người nhận</label>
                                </div>
                                <div className=''>
                                    <input value={fullname} onChange={handleChangeFullName} type="text" className='input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg' placeholder='Nhập họ và tên người nhận' />
                                </div>
                            </div>
                            <div className='md:flex md:my-2'>
                                <div className='md:w-52 p-1'>
                                    <label className=''>Email</label>
                                </div>
                                <div className=''>
                                    <input value={email} onChange={handleChangeEmail} type="email" className='input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg' placeholder='Nhập email' />
                                </div>
                            </div>
                            <div className='md:flex md:my-2'>
                                <div className='md:w-52 p-1'>
                                    <label className=''>Số điện thoại</label>
                                </div>
                                <div className=''>
                                    <input value={phoneNumber} onChange={handleChangePhoneNumber} type="text" className='input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg' placeholder='Ví dụ: 0976890xxx (10 ký tự)' />
                                </div>
                            </div>
                            <div className='md:flex md:my-2'>
                                <div className='md:w-52 p-1'>
                                    <label className=''>Quốc gia</label>
                                </div>
                                <div className=''>
                                    <input type="text" className='input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg' value="Việt Nam" />
                                </div>
                            </div>
                            <div className='md:flex md:my-2'>
                                <div className='md:w-52 p-1'>
                                    <label className=''>Tỉnh/Thành Phố</label>
                                </div>
                                <div className=''>
                                    <select className='input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg' id="province" value={selectedProvince} onChange={handleChangeProvince}>
                                        <option value="">Chọn tỉnh/thành phố</option>
                                        {provinces?.map(province => (
                                            <option key={province.ProvinceID} value={province.ProvinceID}>{province.ProvinceName}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className='md:flex md:my-2'>
                                <div className='md:w-52 p-1'>
                                    <label className=''>Quận/Huyện</label>
                                </div>
                                <div className=''>
                                    <select className='input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg' id="district" value={selectedDistrict} onChange={handleChangeDistrict}>
                                        <option value="">Chọn quận/huyện</option>
                                        {districts.map(district => (
                                            <option key={district.DistrictID} value={district.DistrictID}>{district.DistrictName}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className='md:flex md:my-2'>
                                <div className='md:w-52 p-1'>
                                    <label className=''>Phường/Xã</label>
                                </div>
                                <div className=''>
                                    <select className='input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg' id="ward" value={selectedWard} onChange={handleChangeWard}>
                                        <option value="">Chọn phường/xã</option>
                                        {wards?.map(ward => (
                                            <option key={ward.WardCode} value={ward.WardCode}>{ward.WardName}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className='md:flex md:my-2 my-2'>
                                <div className='md:w-52 p-1'>
                                    <label className=''>Địa chỉ nhận hàng</label>
                                </div>
                                <div className=''>
                                    <input value={address} onChange={handleChangeAddress} type="text" className='input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[420px] rounded-lg' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className='bg-white md:m-5 m-3'>
                <div className='md:p-5 p-3'>
                    <div className='font-bold text-lg p-2'>
                        PHƯƠNG THỨC VẬN CHUYỂN
                    </div>
                    <div className='mx-2 border-b-2'></div>
                    <div className='px-2 my-3'>
                        <div className='flex'>
                            <input type="radio" className='w-5 h-5 mt-[2px]' />
                            <div className='font-bold text-base pl-2 h-6'>Giao hàng tiêu chuẩn: {total}</div>
                        </div>
                        <div className='text-sm px-7 py-1'>Thời gian giao hàng dự kiến: {formatEstimatedDeliveryTime(leadTime)}</div>
                    </div>
                </div>
            </div>

            <div className='bg-white md:m-5 m-3'>
                <div className='md:p-5 p-3'>
                    <div className='font-bold text-lg p-2'>
                        PHƯƠNG THỨC THANH TOÁN
                    </div>
                    <div className='mx-2 border-b-2'></div>
                    <div className='p-2'>
                        <div className='flex my-3'>
                            <input type="radio" className='w-5 h-5 mt-[2px]' />
                            <img className='ml-2' src="https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_vnpay.svg?q=102103" alt="" />
                            <div className='text-base pl-2 h-6'>VNPAY</div>
                        </div>
                        <div className='flex'>
                            <input type="radio" className='w-5 h-5 mt-[2px]' />
                            <img className='ml-2' src="https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_cashondelivery.svg?q=102103" alt="" />
                            <div className='text-base pl-2 h-6'>Thanh toán bằng tiền mặt khi nhận hàng</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white md:m-5 m-3'>
                <div className='md:p-5 p-3'>
                    <div className='font-bold text-lg p-2'>
                        MÃ KHUYẾN MÃI/MÃ QUÀ TẶNG
                    </div>
                    <div className='mx-2 border-b-2'></div>
                    <div className='p-2'>
                        <div className='flex my-3'>
                            <label className='mr-10 leading-8'>Mã KM/Quà tặng</label>
                            <div>
                                <input type="text" className='input-pay border border-inherit h-9 md:px-5 px-3 md:w-[500px] w-[320px] rounded-lg' placeholder='Nhập mã khuyến mãi/Quà tặng' />
                                <span className='bg-[#2F80ED] p-1 border border-inherit h-4 rounded-md md:ml-[-14%] ml-[-25%] font-bold text-[#FFFF]'>Áp dụng</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-white md:m-5 m-3'>
                <div className='md:p-5 p-3'>
                    <div className='font-bold text-lg p-2'>
                        KIỂM TRA LẠI ĐƠN HÀNG
                    </div>
                    <div className='mx-2 border-b-2'></div>
                    <div className='p-2'>
                    {carts.length > 0 ? (
                    carts.map((cartItem, index) => {
                       return <div className=''>
                            <div className='flex'>
                                <div className=''>
                                    <img className='w-36 h-36' src={cartItem.product?.productImage[0]} alt="" />
                                </div>
                                <div className='md:flex'>
                                    
                                    <div className='lg:w-[650px] md:w-[300px] w-[300px]'>{cartItem.product?.name}</div>
                                    <div className='w-20'>
                                        <div>{helper.maskValuePrice(cartItem.product.sale)}</div>
                                        <div className='text-[#bfbfbf] line-through'>{helper.maskValuePrice(cartItem.product.price)}</div>
                                    </div>
                                    <div className='w-20 md:text-center flex md:justify-center'>
                                        <div className='md:hidden block'>Số lượng: </div>
                                        <div>{cartItem.quantity}</div>
                                    </div>
                                    <div className='w-20 text-[#F39801] font-bold'>{helper.maskValuePrice(totalPerProducts)}</div>
                                </div>
                            </div>
                        </div>
})
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
            </div>

            <div className='bg-white md:m-5 m-3'>
                <div className='md:p-5 p-3'>
                    <div className='mx-2 mb-4'>
                        <div>
                            <div className='flex md:justify-end mb-1 justify-between'>
                                <div>Thành tiền</div>
                                <div className='text-right w-40'>{helper.maskValuePrice(totalPerProducts)}</div>
                            </div>
                            <div className='flex md:justify-end justify-between mb-1'>
                                <div>Phí vận chuyển (Giao hàng tiêu chuển)</div>
                                <div className='text-right w-40'>{helper.maskValuePrice(total)}</div>
                            </div>
                            <div className='flex md:justify-end justify-between mb-1'>
                                <div className='font-bold'>Tổng số tiền (Gồm VAT)</div>
                                <div className='font-bold text-lg text-[#F39801] text-right w-40'>{helper.maskValuePrice(grandTotal)}</div>
                            </div>
                        </div>
                    </div>
                    <div className='mx-2 border-b-2'></div>
                    <div className='flex mx-2 py-5 md:justify-between justify-center'>
                        <div className='md:flex hidden mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left w-8 h-8" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                            </svg>
                            <div className='ml-3 font-bold pt-1'>Quay về giỏ hàng</div>
                        </div>
                        <div className='flex'>
                            <button onClick={handleRequest} className='font-bold text-[#FFFF] bg-red-600 p-3 w-72 rounded-lg'>Xác nhận thanh toán</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PagePay;