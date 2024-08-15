import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="flex justify-center bg-white">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-8" style={{ height: '70px' }}>
        <div className="flex items-center">
          <Image src="/assets/al-kautsar.png" alt="Al Kautsar Logo" width={100} height={40} />
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-500">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Produk
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Pendaftaran
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Donasi
          </a>
          <div className="relative group">
            <a href="#" className="text-gray-700 hover:text-blue-500 flex items-center">
              Blog
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 011.04 1.08l-4 3.75a.75.75 0 01-1.04 0l-4-3.75a.75.75 0 01-.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <div className="absolute left-0 hidden pt-2 group-hover:block">
              <div className="bg-white shadow-lg rounded">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Sub Blog 1
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Sub Blog 2
                </a>
              </div>
            </div>
          </div>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Kontak
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Masuk
          </a>
          <button className="px-4 py-2 bg-blue-700 text-white rounded-full">
            Daftar Sekarang
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
