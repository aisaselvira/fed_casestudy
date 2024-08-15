import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBlogs } from '../redux/slices/blogSlice';
import Image from 'next/image';

const BlogList = () => {
  const { blogs, status } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error fetching blogs</p>;

  return (
    <div className="container mx-auto py-16 px-4 lg:px-16 font-montserrat"> 
      <h2 className="text-3xl font-bold text-center mb-8">Blog Terbaru</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="rounded-2xl shadow-md bg-white p-4"
            style={{ backgroundColor: '#F2F5F6' }}
          >
            {blog.thumbnail && blog.thumbnail.preview && (
              <div className="mb-4">
                <Image
                  src={blog.thumbnail.preview}
                  alt={blog.judul}
                  width={300}
                  height={200}
                  className="rounded-md object-cover"
                />
              </div>
            )}
            <h3 className="text-lg font-semibold mb-2">{blog.judul}</h3>
            <p className="text-sm text-gray-700 mb-4">
              {blog.konten}
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 text-sm"
            >
              Baca Selengkapnya
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-6 py-2 bg-blue-700 text-white rounded-full flex items-center">
          <span>Lihat Artikel Lainnya</span>
          <svg
            className="w-4 h-4 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.707-9.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 001.414 1.414l3-3z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogList;
