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
    <div className="container mx-auto py-8">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="p-6 rounded-2xl shadow-md my-4"
          style={{ backgroundColor: '#F2F5F6' }}
        >
          {blog.thumbnail && blog.thumbnail.preview && (
            <div className="mb-4">
              <Image
                src={blog.thumbnail.preview}
                alt={blog.judul}
                width={600}
                height={400}
                className="object-cover rounded-md"
              />
            </div>
          )}
          <h2 className="text-xl font-montserrat font-bold">{blog.judul}</h2>
          <p className="text-sm font-inter mt-2">{blog.konten}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
