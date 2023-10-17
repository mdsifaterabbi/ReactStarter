
import { Link } from "react-router-dom"

const PostCard = ({ posts }) => {

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <span className="font-bold">{posts.title}</span>
                <span className="font-light">Writer:
                    <Link to={`/alluser/${posts.userId}`}>
                        <button className="btn">Writer Info</button>
                    </Link>
                </span>
                <h2 className="font-light text-2xl italic">{posts.body}</h2>

                <span></span>

            </div>
        </div>)
}
export default PostCard