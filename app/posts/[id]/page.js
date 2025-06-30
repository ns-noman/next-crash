import Comments from "@/app/components/Comments";
import getAllPost from "@/lib/getAllPost";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComments";
import { Suspense } from "react";


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


  const postComments = getPostComments(id);
  const post = await getPost(id);

  setTimeout(function() {
    console.log('Time out is over!');
    
  }, 5000);

  console.log('Posts');

  // const [post, postComments] = await Promise.all([postPromise,postCommentsPromise]);


  return (
    <div className="mt-6">
        <h2 className="text-green-500 p-1">{post.title}</h2>
        <p className="text-yellow-500 p-1">{post.body}</p>
        <hr/>
      <Suspense fallback="<h1>Loading comments...</h1>">
          <Comments comments={postComments}/>
      </Suspense>
    </div>
  );
}
export async function generateStaticParams() {
  const posts =  await getAllPost();

  return posts.map((post)=> ({
    id: post.id.toString(),
  }));
}