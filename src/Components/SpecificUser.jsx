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
            {/* <h1>{user.id}</h1>
            <span>{user.name}</span><br></br>
            <span>{user.username}</span><br></br>
            <span>{user.email}</span><br></br>
            <span>{user.phone}</span><br></br>
            <span>{user?.address?.city}</span><br></br>
            <span>{user?.address?.street}</span><br></br>
            <span>{user?.address?.zipcode}</span><br></br>
            <span>{user?.company?.name}</span><br></br> */}

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

/*
{
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
        "street": "Norberto Crossing",
        "suite": "Apt. 950",
        "city": "South Christy",
        "zipcode": "23505-1337",
        "geo": {
            "lat": "-71.4197",
            "lng": "71.7478"
        }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
        "name": "Considine-Lockman",
        "catchPhrase": "Synchronised bottom-line interface",
        "bs": "e-enable innovative applications"
    }
}
*/