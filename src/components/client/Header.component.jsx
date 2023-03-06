const Header = () => {
    return (
        <div>
            <div>
                <div className="bg-white border-gray-200">
                    <ul className="container mx-auto flex">
                        <li className="ml-40 text-gray-700 border-b border-gray-100 text-sm font-medium">Miễn phí giao hàng |</li>
                        <li className="mx-4 text-gray-700 border-b border-gray-100 text-sm font-medium">80.000 tựa sách |</li>
                        <li className="mx-2 text-gray-700 border-b border-gray-100 text-sm font-medium">Vinabook Reader</li>
                    </ul>
                </div>
                <div className="bg-white">
                    <div className="mx-auto grid grid-cols-3 text-center h-24">
                        <div className="">
                            <img className="mx-auto mr-12 mt-6" src="./img/vnb_logo_2x.png" alt="" />
                        </div>
                        <div className="mt-6">
                            <form className="flex items-center h-9">
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                clipRule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search"
                                        className="h-9 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                                        placeholder="Search" required />
                                </div>
                                <button type="submit"
                                    className="h-9 p-2.5 ml-2 text-sm font-medium text-white bg-green-700 rounded-full border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </button>
                            </form>
                        </div>
                        <div className="flex mt-6 ml-24">
                            <svg className="h-9" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z">
                                </path>
                            </svg>
                            <ul className="container mx-auto flex mt-2">
                                <li className="ml-2">Đăng nhập |</li>
                                <li className="ml-2">Đăng ký</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mx-auto">
                    <nav
                        className="bg-green-700 navbar navbar-expand-lg shadow-lg py-2 bg-gray-50 relative flex items-center w-full justify-between">
                        <div className="px-6 container w-[1240px] mx-auto">
                            <button
                                className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out"
                                type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentY"
                                aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-5" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="currentColor"
                                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                                    </path>
                                </svg>
                            </button>
                            <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                                <ul className="navbar-nav mr-auto flex flex-row">
                                    <li className="nav-item dropdown static">
                                        <a className="nav-link block pr-2 lg:px-2 py-2 text-xl font-semibold text-white transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap"
                                            href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonY"
                                            data-bs-toggle="dropdown" aria-expanded="false">Danh mục sách
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2"
                                                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                <path fill="currentColor"
                                                    d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z">
                                                </path>
                                            </svg>
                                        </a>
                                        <div
                                            className="dropdown-menu w-[100%] max-w-[1240px] m-0 left-[50%] translate-x-[-50%] transform mt-0 hidden shadow-lg bg-white absolute top-full"
                                            aria-labelledby="dropdownMenuButtonY">
                                            <div className="px-6 lg:px-8 py-5">
                                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                                    <div className="bg-white text-gray-600 ">
                                                        <p
                                                            className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">
                                                            Lorem ipsum</p>
                                                        <a href="#!" aria-current="true"
                                                            className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Dolor
                                                            sit</a>
                                                        <a href="#!" aria-current="true"
                                                            className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Amet
                                                            consectetur</a>
                                                        <a href="#!" aria-current="true"
                                                            className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Cras
                                                            justo odio</a>
                                                        <a href="#!" aria-current="true"
                                                            className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Adipisicing
                                                            elit</a>
                                                    </div>
                                                    <div className="bg-white text-gray-600">
                                                        <p
                                                            className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">
                                                            Explit voluptas</p>
                                                        <a href="#!" aria-current="true"
                                                            className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Perspiciatis
                                                            quo</a>
                                                        <a href="#!" aria-current="true"
                                                            className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Cras
                                                            justo odio</a>
                                                        <a href="#!" aria-current="true"
                                                            className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Laudant
                                                            maiores</a>
                                                        <a href="#!" aria-current="true"
                                                            className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Provident
                                                            dolor</a>
                                                    </div>
                                                    <div className="bg-white text-gray-600">
                                                        <p
                                                            className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">
                                                            Iste quaerato</p>
                                                        <a href="#!" aria-current="true"
                                                            className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Cras
                                                            justo odio</a>
                                                        <a href="#!" aria-current="true"
                                                            className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Est
                                                            iure</a>
                                                        <a href="#!" aria-current="true"
                                                            className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Praesentium</a>
                                                        <a href="#!" aria-current="true"
                                                            className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Laboriosam</a>
                                                    </div>
                                                    <div className="bg-white text-gray-600">
                                                        <p
                                                            className="block px-6 py-2 border-b border-gray-200 w-full uppercase font-semibold text-gray-700">
                                                            Cras justo odio</p>
                                                        <a href="#!" aria-current="true"
                                                            className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Saepe</a>
                                                        <a href="#!" aria-current="true"
                                                            className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Vel
                                                            alias</a>
                                                        <a href="#!" aria-current="true"
                                                            className="block px-6 py-2 border-b border-gray-200 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Sunt
                                                            doloribus</a>
                                                        <a href="#!" aria-current="true"
                                                            className="block px-6 py-2 w-full hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Cum
                                                            dolores</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="text-center p-2">
                                    <ul className="flex place-content-center text-white font-body">
                                        <li>Hotline : 1900 6401 |</li>
                                        <li> Hỗ trợ trực tuyến</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header;