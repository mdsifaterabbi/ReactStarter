import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SpecificUser = () => {

    const { id } = useParams();
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(myUser => setUser(myUser))
    })


    return (
        <>

            <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-10">
                <div className="card-body">
                    <span className="font-bold">{user.username}</span>
                    <h2 className="font-light text-2xl italic">{user.id}</h2>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <span>{user.phone}</span>
                    <span>{user?.address?.city}</span>
                    <span>{user?.address?.street}</span>
                    <span>{user?.address?.zipcode}</span>
                    <span>{user?.company?.name}</span>
                </div>
            </div>

        </>



    )
}

export default SpecificUser

