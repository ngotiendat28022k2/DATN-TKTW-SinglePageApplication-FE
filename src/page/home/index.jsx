import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProductClient } from "../../slice/productsSlice";
import { getAllCategory } from "../../slice/categorySlice";
import helper from "../../utiliti/helper/helper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import ProductSlide from "../../components/productSlide/ProductSlide";
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

    return (
        <div>
            <div className="">
                <SlideShow />
                <div className="grid md:grid-cols-10 md:gap-4 grid-cols-5 gap-3 bg-white">
                    <div className="col-span-1 p-4">
                        <a href="">
                            <div className="">
                                <img
                                    className="md:w-12 md:h-12 w-11 h-11 m-auto"
                                    src="https://i.imgur.com/tkzenTt.png"
                                    alt=""
                                />
                            </div>
                            <div className="md:text-sm text-xs text-center pt-3">
                                Flash Sale
                            </div>
                        </a>
                    </div>
                    <div className="col-span-1 p-4">
                        <a href="">
                            <div className="">
                                <img
                                    className="md:w-12 md:h-12 w-11 h-11 m-auto"
                                    src="https://i.imgur.com/vN0ZtKz.png"
                                    alt=""
                                />
                            </div>
                            <div className="md:text-sm text-xs text-center pt-3">
                                Mã Giảm Giá
                            </div>
                        </a>
                    </div>
                    <div className="col-span-1 p-4">
                        <a href="">
                            <div className="">
                                <img
                                    className="md:w-12 md:h-12 w-11 h-11 m-auto"
                                    src="https://i.imgur.com/TGVhvb3.png"
                                    alt=""
                                />
                            </div>
                            <div className="md:text-sm text-xs text-center pt-3">
                                Xu Hướng
                            </div>
                        </a>
                    </div>
                    <div className="col-span-1 p-4">
                        <a href="">
                            <div className="">
                                <img
                                    className="md:w-12 md:h-12 w-11 h-11 m-auto"
                                    src="https://i.imgur.com/050aWxc.png"
                                    alt=""
                                />
                            </div>
                            <div className="md:text-sm text-xs text-center pt-3">
                                Sản Phẩm Mới
                            </div>
                        </a>
                    </div>
                    <div className="col-span-1 p-4">
                        <a href="">
                            <div className="">
                                <img
                                    className="md:w-12 md:h-12 w-11 h-11 m-auto"
                                    src="https://i.imgur.com/28Ozfcf.png"
                                    alt=""
                                />
                            </div>
                            <div className="md:text-sm text-xs text-center pt-3">
                                Văn Học
                            </div>
                        </a>
                    </div>
                    <div className="col-span-1 p-4">
                        <a href="">
                            <div className="">
                                <img
                                    className="md:w-12 md:h-12 w-11 h-11 m-auto"
                                    src="https://i.imgur.com/DozXoDW.png"
                                    alt=""
                                />
                            </div>
                            <div className="md:text-sm text-xs text-center pt-3">
                                Tâm Lý Kỹ Năng
                            </div>
                        </a>
                    </div>
                    <div className="col-span-1 p-4">
                        <a href="">
                            <div className="">
                                <img
                                    className="md:w-12 md:h-12 w-11 h-11 m-auto"
                                    src="https://i.imgur.com/U0RmU2Z.png"
                                    alt=""
                                />
                            </div>
                            <div className="md:text-sm text-xs text-center pt-3">
                                Đồ Chơi
                            </div>
                        </a>
                    </div>
                    <div className="col-span-1 p-4">
                        <a href="">
                            <div className="">
                                <img
                                    className="md:w-12 md:h-12 w-11 h-11 m-auto"
                                    src="https://i.imgur.com/mKE7kAH.png"
                                    alt=""
                                />
                            </div>
                            <div className="md:text-sm text-xs text-center pt-3">
                                Manga - Comic
                            </div>
                        </a>
                    </div>
                    <div className="col-span-1 p-4">
                        <a href="">
                            <div className="">
                                <img
                                    className="md:w-12 md:h-12 w-11 h-11 m-auto"
                                    src="https://i.imgur.com/4EGGXGL.png"
                                    alt=""
                                />
                            </div>
                            <div className="md:text-sm text-xs text-center pt-3">
                                Phiên Chợ Sách Cũ
                            </div>
                        </a>
                    </div>
                    <div className="col-span-1 p-4">
                        <a href="">
                            <div className="">
                                <img
                                    className="md:w-12 md:h-12 w-11 h-11 m-auto"
                                    src="https://i.imgur.com/89Ma5ji.png"
                                    alt=""
                                />
                            </div>
                            <div className="md:text-sm text-xs text-center pt-3">
                                Kinh Tế
                            </div>
                        </a>
                    </div>
                </div>
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
            </div>
            <div className="my-5">
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
                            <div className="font-bold text-lg">
                                Danh mục sản phẩm
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-10 md:gap-2 grid-cols-5 gap-3 bg-white pb-4 px-[20px]">
                        {categories?.map((itemCategory, index) => (
                            <div
                                key={index}
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
