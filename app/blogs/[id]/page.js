import Image from "next/image";
import { notFound } from "next/navigation";

export default function BlogDetails({params}) {
  const {id} = params;
  if(id==3){
    notFound();
  }
  return (
      <h1>The blog id is : {id}</h1>
  );
}
