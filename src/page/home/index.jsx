import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProductClient } from "../../slice/productsSlice";
import { getAllCategory } from "../../slice/categorySlice";
import helper from "../../utiliti/helper/helper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ProductSlide from "../../components/productSlide/ProductSlide";
import SlideShow from "../../components/slide-show/SlideShow.component";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.value);
  const category = useSelector((state) => state.category.value);
  console.log("category", categories);
  console.log("products", products);

  useEffect(() => {
    (async () => {
      try {
        const productss = await dispatch(getAllProductClient());
        const category = await dispatch(getAllCategory());
        if (productss.payload?.successCode) {
          setProducts(productss.payload.data);
        }
        if (productss.payload?.errorCode) {
          helper.toast("error", productss.payload.message);
        }
        if (category.payload.data?.successCode) {
          setCategories(category.payload.data.data);
        }
        if (category.payload.data?.errorCode) {
          helper.toast("error", category.payload.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    setProducts(product);
    setCategories(category);
  }, [product, category]);

  const handleNext = () => {
    setStartIndex(startIndex + 5);
    setEndIndex(endIndex + 5);
  };

  const handlePrev = () => {
    if (startIndex >= 5) {
      setStartIndex(startIndex - 5);
      setEndIndex(endIndex - 5);
    }
  };

  return (
    <div>
      <div className="">
        <SlideShow />
        <div className="md:mt-5 md:3 md:block rounded-3xl hidden">
        <div className="bg-[#FFFFFF]">
          <div className="flex md:py-5 py-3 px-3">
            <div className="mr-3">
              <img
                className="w-8 h-8"
                src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_menu.svg"
                alt=""
              />
            </div>
            <div className="font-bold text-lg">Danh mục sản phẩm</div>
          </div>
        </div>
        <div className="grid md:grid-cols-10 md:gap-2 grid-cols-5 gap-3 bg-white pb-4 px-[20px]">
          {categories?.map((itemCategory) => (
            <div
              className="col-span-1 p-[5px] overflow-hidden rounded-md transition duration-300 ease-in-out hover:scale-110 hover:shadow-md dark:hover:shadow-black/30"
              title={itemCategory.name}
            >
              <Link to="">
                <div className="">
                  <img
                    className="md:w-[100px] md:h-[100px] w-11 h-11 m-auto "
                    src={itemCategory.image}
                    alt=""
                  />
                </div>
                <div className="md:text-sm text-xs text-center pt-3">
                  {itemCategory.name}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      </div>
      <div className="my-5">
        <div className="bg-[#FCDAB0]">
          <div className="flex md:py-5 py-3 px-3">
            <div className="mr-3">
              <img
                className="w-6 h-6"
                src="https://i.imgur.com/H63fkyZ.png"
                alt=""
              />
            </div>
            <div className="font-bold text-lg">FLASH SALE</div>
          </div>
        </div>
        <div className="bg-white p-2">
          <div className="grid md:grid-cols-5 grid-cols-3 gap-2 md:mx-2">
            {products?.map((itemProduct) => (
              <div
                className="relative transition rounded-md hover:shadow-md ease-in-out"
                title={itemProduct.name}
              >
                <div className="flex bg-[#F7941E] md:w-[44px] md:h-[44px] w-12 h-12 md:rounded-3xl rounded-[22px] justify-center items-center absolute top-[10px] right-[10px]">
                  <span className="text-white font-semibold">
                    {helper.calculatePercentage(
                      itemProduct.price,
                      itemProduct.sale
                    )}
                    %
                  </span>
                </div>
                <div className="md:m-2 m-2">
                  <Link to={`/detail/${itemProduct._id}`}>
                    <img src={itemProduct.productImage[0]} alt="" />
                  </Link>
                </div>
                <div className="mb-3">
                  <Link to={`/detail/${itemProduct._id}`}>
                    <h4 className="text-[#333333] md:text-lg text-base md:px-5 px-3 md:mb-[10px]">
                      {helper.truncateString(itemProduct.name, 40)}
                    </h4>
                    {itemProduct.sale !== 0 || itemProduct.sale ? (
                      <>
                        <div className="pr-[20px] md:px-5 px-3">
                          <span className="text-[15px] text-[#C92127] font-bold ">
                            {helper.maskValuePrice(itemProduct?.sale)}
                          </span>
                        </div>
                        <div className="pr-[20px] md:px-5 px-3">
                          <span className="text-[12px] line-through">
                            {helper.maskValuePrice(itemProduct?.price)}
                          </span>
                        </div>
                      </>
                    ) : (
                      <div className="pr-[20px] md:px-5 px-3">
                        <span className="text-[15px] text-[#C92127] font-bold">
                          {helper.maskValuePrice(itemProduct?.price)}
                        </span>
                      </div>
                    )}
                    <span className="block md:px-5 px-3 text-sm md:text-[14px]">
                      Số lượng còn lại: {itemProduct.quantity}
                    </span>
                  </Link>
                </div>
              </div>
            ))}

            <div className="relative md:hidden block py-[100%] px-5">
              <div className="border-2 rounded-2xl text-center p-1 border-teal-400">
                <button className="text-teal-500 hover:text-orange-400">
                  Xem Thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <div className="my-5">
        <div className="bg-[#FFFFFF]">
          <div className="flex md:py-5 py-3 px-3">
            <div className="font-bold text-lg">SẢN PHẨM MỚI</div>
          </div>
        </div>
        <div className="bg-white p-2">
          <div className="grid md:grid-cols-5 grid-cols-3 gap-2 md:mx-2">
            {products?.map((product) => (
              <div className="relative hover:border-2 hover:shadow-md">
                <div className="md:m-2 m-2">
                  <Link to={`/detail/${product._id}`}>
                    <img src={product.productImage[0]} alt={product.name} />
                  </Link>
                </div>
                <div className="mb-3">
                  <Link to={`/detail/${product._id}`}>
                    <h4 className="text-[#333333] md:text-lg text-base md:px-5 px-3">
                      {helper.truncateString(product.name, 40)}
                    </h4>
                    <span className="block md:px-5 px-3 text-base md:text-xl text-[#F7941E] font-semibold">
                      {helper.maskValuePrice(product.sale)}
                    </span>
                    <span className="block md:px-5 px-3 text-sm md:text-base text-[#888888] line-through">
                      {helper.maskValuePrice(product.price)}
                    </span>
                    <span className="block md:px-5 px-3 text-sm md:text-xs">
                      {" "}
                      Số lượng còn lại: {product.quantity}
                    </span>
                  </Link>
                </div>
              </div>
            ))}
            <div className="relative md:hidden block py-[100%] px-5">
              <div className="border-2 rounded-2xl text-center p-1 border-teal-400">
                <button className="text-teal-500 hover:text-orange-400">
                  Xem Thêm
                </button>
              </div>
            </div>
          </div>
        </div>
        {products.length > 5 && (
          <div className="relative my-5">
            {startIndex > 0 && (
              <button
                className="absolute left-[10px] top-[-350px] text-slate-400 hover:text-slate-600 mr-5 border-[2px] w-[35px] h-[35px] flex justify-center items-center rounded-[50%] border-[#bbbbbb]"
                onClick={handlePrev}
              >
                <FaArrowLeft className="text-[20px]" />
              </button>
            )}
            {endIndex < products.length && (
              <button
                className="absolute right-[10px] top-[-350px]  text-slate-400 hover:text-slate-600 border-[2px] w-[35px] h-[35px] flex justify-center items-center rounded-[50%] border-[#bbbbbb]"
                onClick={handleNext}
              >
                <FaArrowRight className="text-[20px]" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default HomePage;
