export default async function getAllPost()
{
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
        // cache: "no-store",
        // cache: "force-cache",
        next: {
            revalidate: 10,
        },
    });
    
    if (!result.ok) {
        throw new Error("There was an error fetching posts");
    }
    
    return result.json();


}