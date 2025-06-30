export default async function Comments({comments}) {
  
  let postComments = await comments;
  console.log('Comments');
  return (
   <div className="mt-10">
        <h1>Comments</h1>
        <ul>
          {postComments.map((comment, key)=>{
              return(
                <li className="mb-2 text-blue-500" key={key}>{comment.body}</li>
              )
          })}
        </ul>
    </div>
  );
}
