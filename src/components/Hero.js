import Image from 'next/image';
import Header from './Header';

const Hero = () => {
  return (
    <div className="pt-10 pb-20 px-4 lg:px-16">
      <Header />
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center"> {/* Menggunakan justify-between */}
        <div className="max-w-lg mb-8 lg:mb-0 lg:mr-4"> {/* Mengatur margin kanan */}
          <p className="text-blue-600 text-sm mb-2">
            Mau Jadi Generasi Mahir Teknologi, Kuat Iman?
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800">
            Pondok Pesantren
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600">
            {`{Technopreneur}`}
          </h2>
          <p className="text-gray-600 mt-4">
            Mencetak generasi unggul yang mahir di bidang teknologi digital
            dan teguh dalam pemahaman Islam Ahlu Sunnah Wal Jama'ah
          </p>
          <div className="flex items-center mt-6 border-2 border-blue-500 rounded-full px-4 py-2">
            <span className="text-gray-700 pr-4">
              Jago IT Rajin Ngaji bersama Al Kautsar
            </span>
            <button className="flex items-center py-2 bg-blue-700 text-white rounded-full">
              <svg
                className="w-11 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 011.415-1.415l5.793-5.793a2 2 0 112.829 2.829L10.414 4h6.586a2 2 0 110 4H10v4h4a2 2 0 110 4H10v4h-4V9H3.414a1.986 1.986 0 01-.707-.293A4 4 0 013.172 5.172z"
                  clipRule="evenodd"
                />
              </svg>
              Download Profile Kami
            </button>
          </div>
        </div>
        <div className="flex-shrink-0 lg:ml-4"> {/* Mengatur margin kiri */}
          <Image
            src="/assets/hero.png"
            alt="Hero Image"
            width={650}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
