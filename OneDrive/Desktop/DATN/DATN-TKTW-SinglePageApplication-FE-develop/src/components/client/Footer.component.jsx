const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900">
                <div className="container mx-auto py-12 flex flex-wrap">
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-white font-semibold mb-4">Về Vinabook</h3>
                        <ul className="text-gray-400 text-sm">
                            <li className="mb-2"><a href="#" className="hover:text-white">Giới thiệu Vinabook</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Tuyển dụng</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Chính sách bảo mật</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Chính sách đổi trả và hoàn tiền</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-white font-semibold mb-4">Hỗ trợ khách hàng</h3>
                        <ul className="text-gray-400 text-sm">
                            <li className="mb-2"><a href="#" className="hover:text-white">Trung tâm trợ giúp</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Hướng dẫn đặt hàng</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Phương thức thanh toán</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Phương thức vận chuyển</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-white font-semibold mb-4">Kết nối với chúng tôi</h3>
                        <ul className="text-gray-400 text-sm">
                            <li className="mb-2"><a href="#" className="hover:text-white">Facebook</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Instagram</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Twitter</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white">Youtube</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-white font-semibold mb-4">Tải ứng dụng Vinabook</h3>
                        <div className="flex">
                            <a href="#" className="mr-4">
                                <img src="https://www.vinabook.com/img/google-play.png" alt="Google Play" className="h-10" />
                            </a>
                            <a href="#">
                                <img src="https://www.vinabook.com/img/app-store.png" alt="App Store" /></a>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-white font-semibold mb-4">Đăng ký nhận tin mới từ Vinabook</h3>
                            <form className="flex">
                                <input type="email" placeholder="Nhập email của bạn"
                                    className="rounded-l py-2 px-3 w-2/3 focus:outline-none focus:shadow-outline-gray" />

                                <button type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-r py-2 px-4 focus:outline-none focus:shadow-outline-blue">Đăng
                                    ký</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 py-4">
                    <div className="container mx-auto text-gray-400 text-sm text-center">
                        <p>© 2023 Vinabook. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;