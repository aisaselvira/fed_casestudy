import Image from 'next/image';
import Header from './Header';

const Hero = () => {
  return (
    <div className="pt-10 pb-20">
      <Header />
      <div className="container mx-auto flex justify-between items-center">
        <div className="max-w-lg">
          <p className="text-blue-600 text-sm mb-2">
            Mau Jadi Generasi Mahir Teknologi, Kuat Iman?
          </p>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Pondok Pesantren
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-blue-600">
            {`{Technopreneur}`}
          </h2>
          <p className="text-gray-600 mt-4">
            Mencetak generasi unggul yang mahir di bidang teknologi digital
            dan teguh dalam pemahaman Islam Ahlu Sunnah Wal Jama'ah
          </p>
          <button className="mt-6 px-4 py-2 bg-blue-700 text-white rounded-full">
            Download Profile Kami
          </button>
        </div>
        <div className="flex-shrink-0">
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
