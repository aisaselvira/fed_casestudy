import Head from 'next/head';
import Image from 'next/image'; 
import Hero from '@/components/Hero';
import BlogList from '@/components/BlogList';

export default function Home() {
  return (
    <div className="min-h-screen font-montserrat">
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing Page Example" />
      </Head>
      <Hero />

      {/* Section content1 */}
      <div className="bg-blue-700 py-12">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 lg:px-16">
          <div className="max-w-lg text-white mb-8 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-3xl font-bold mb-4">
              Perpaduan Pendidikan Agama dan Teknologi secara Seimbang
            </h2>
            <p className="text-lg">
              Bersama Al Kautsar, komunitas yang suportif dan inspiratif untuk tumbuh dan berkembang
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg flex items-center">
              <Image
                src="/assets/icon1.svg"
                alt="Icon 1"
                width={50}
                height={50}
              />
              <p className="ml-4 text-blue-700 font-semibold">
                Pengembangan Aplikasi Web dan Mobile
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center">
              <Image
                src="/assets/icon2.svg"
                alt="Icon 2"
                width={50}
                height={50}
              />
              <p className="ml-4 text-blue-700 font-semibold">
                Keamanan Siber
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center">
              <Image
                src="/assets/icon3.svg"
                alt="Icon 3"
                width={50}
                height={50}
              />
              <p className="ml-4 text-blue-700 font-semibold">
                Data Science dan Analitika
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg flex items-center">
              <Image
                src="/assets/icon4.svg"
                alt="Icon 4"
                width={50}
                height={50}
              />
              <p className="ml-4 text-blue-700 font-semibold">
                Technopreneur dan Digital Marketing
              </p>
            </div>
          </div>
        </div>
      </div>

      <BlogList />
    </div>
  );
}
