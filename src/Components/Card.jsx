import { Link } from "react-router-dom"

const Card = ({ users }) => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <span className="font-bold">{users.username}</span>
                    <h2 className="font-light text-2xl italic">{users.id}</h2>
                    <p>{users.name}</p>
                    <span>{users.email}</span>
                    <div className="card-actions justify-end">
                        <Link to={`/alluser/${users.id}`}>
                            <button className="btn btn-primary">More Info</button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Card