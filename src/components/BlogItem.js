const BlogItem = ({ blog }) => (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-xl font-bold">{blog.judul}</h2>
      <p>{blog.konten}</p>
    </div>
  );
  
  export default BlogItem;
  