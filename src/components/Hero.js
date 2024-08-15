import Image from 'next/image';
import Header from './Header'; 

const Hero = () => {
  return (
    <div className="text-white pt-10 pb-20 px-">
    <Header />
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold mt-10 text-black">
            CASE STUDY FED - MSIB ARKATAMA
          </h1>
          <p className="text-sm font-inter mt-4 max-w-lg text-black">
            Al Kautsar merupakan Lembaga Pendidikan Non-Formal berbasis Pesantren serta tempat bernanungnya para pelajar yang terfokus pada pengembangan ilmu teknologi.
          </p>
        </div>
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="w-[57.534px] h-[57.534px] rounded-[18.975px] border-[0.164px] border-opacity-20 border-white bg-gradient-to-b from-[#669D89] via-[#12241E] to-[#12241E] shadow-[inset_-1.309px_1.309px_8.835px_rgba(255,255,255,0.1),0px_1.309px_9.9px_#23242E] backdrop-blur-[1.963px] flex items-center justify-center">
              <div className="w-[49.759px] h-[49.759px] rounded-[14.85px] border-[0.164px] border-opacity-10 border-white bg-opacity-5 bg-white shadow-[inset_-1.309px_1.309px_8.835px_rgba(255,255,255,0.2),0px_1.309px_9.9px_#23242E] backdrop-blur-[1.963px] flex items-center justify-center">
                <div className="w-[41.984px] h-[41.984px] rounded-[10.725px] bg-opacity-10 bg-white shadow-[0px_1.309px_1.309px_rgba(0,0,0,0.05)] backdrop-blur-[5.399px] flex items-center justify-center">
                  <Image src="/assets/vector3.svg" alt="Custom Icon" width={20} height={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;