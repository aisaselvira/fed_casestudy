import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex space-x-4 mt-4">
      <button className="flex items-center px-4 py-2 bg-primary text-white rounded-full">
        <Image src="/assets/vector1.svg" alt="Library Icon" width={20} height={20} />
        <span className="ml-2 text-xs font-haffer">Library Type</span>
      </button>
      <button className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-full">
        <Image src="/assets/vector2.svg" alt="File Type Icon" width={20} height={20} />
        <span className="ml-2 text-xs font-haffer">File Type</span>
      </button>
      <div className="relative flex items-center justify-center">
        {/* Layer 1 */}
        <div className="w-[57.534px] h-[57.534px] rounded-[18.975px] border-[0.164px] border-opacity-20 border-white bg-gradient-to-b from-[#669D89] via-[#12241E] to-[#12241E] shadow-[inset_-1.309px_1.309px_8.835px_rgba(255,255,255,0.1),0px_1.309px_9.9px_#23242E] backdrop-blur-[1.963px] flex items-center justify-center">
          {/* Layer 2 */}
          <div className="w-[49.759px] h-[49.759px] rounded-[14.85px] border-[0.164px] border-opacity-10 border-white bg-opacity-5 bg-white shadow-[inset_-1.309px_1.309px_8.835px_rgba(255,255,255,0.2),0px_1.309px_9.9px_#23242E] backdrop-blur-[1.963px] flex items-center justify-center">
            {/* Layer 3 */}
            <div className="w-[41.984px] h-[41.984px] rounded-[10.725px] bg-opacity-10 bg-white shadow-[0px_1.309px_1.309px_rgba(0,0,0,0.05)] backdrop-blur-[5.399px] flex items-center justify-center">
              <Image src="/assets/vector3.svg" alt="Custom Icon" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
