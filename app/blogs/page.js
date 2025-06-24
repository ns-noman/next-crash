import Link from "next/link";

export default function Blogs() {

  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "Blog 1 Description",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "Blog 2 Description",
    },
  ];

  return (
    <main className="mt-10">
      <h1>Blogs</h1>
      <hr></hr>
      <ul>
        {blogs.map((blog, key)=>(
            <li key={key}><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></li>
        ))}
      </ul>
    </main>
  );
}
