import { useEffect, useState } from "react"
import PostCard from "../Components/PostCard";

const Home = () => {

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(post => setPost(post))
    }, [])


    return (
        <>
            <div className="bg-orange-200 p-3 flex flex-wrap gap-2 justify-center">
                {
                    //user.map(u => <Card key={u.id} users={u} />)
                    post.map(p => <PostCard key={p.id} posts={p} />)
                }

            </div>
        </>
    )
}
export default Home