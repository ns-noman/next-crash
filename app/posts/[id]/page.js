import getPost from "@/lib/getPost";


export async function generateMetadata({params}){
  const {id} = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body
  }
}


export default async function PostDetails({params}) {
  const {id} = params;

  const post = await getPost(id);

  return (
    <div className="mt-6">
        <h2 className="text-green-500 p-1">{post.title}</h2>
        <p className="text-yellow-500 p-1">{post.body}</p>
    </div>
  );
}
