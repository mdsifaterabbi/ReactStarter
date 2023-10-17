import Card from "../Components/Card";
import { useState,useEffect } from "react";

const AllUser = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(myUser => setUser(myUser))
    }, [])

    // console.log(user)
    return (
        <>
            <div className="bg-orange-200 p-3 flex flex-wrap gap-2 justify-center">
                {
                    user.map(u => <Card key={u.id} users={u} />)
                }
                
            </div>
        </>
    )
}

export default AllUser