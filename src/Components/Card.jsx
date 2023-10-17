import { useState } from "react"

const Card = () => {

    const [myCounter,setMyCounter] = useState(0);

    const Increment = () => {
        setMyCounter(myCounter+1)
    }
    const Decrement = () => {
        if(myCounter === 0)
            {
                alert('Can\'t take negative value');
                return 0;
            }
        setMyCounter(myCounter - 1)
    }


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{myCounter}</h2>
                <p>This is an example of useState hook function or variable</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={Increment}>Increment</button>
                    <button className="btn btn-secondary" onClick={Decrement}>Decrement</button>
                </div>
            </div>
        </div>)
}

export default Card