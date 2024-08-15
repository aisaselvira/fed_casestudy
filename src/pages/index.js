import Head from 'next/head';
import Hero from '@/components/Hero';
import BlogList from '@/components/BlogList';

export default function Home() {
  return (
    <div className="bg-dark min-h-screen">
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Landing Page Example" />
      </Head>
      <Hero />
      <BlogList />
    </div>
  );
}
