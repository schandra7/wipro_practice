import React,{useState,useEffect} from 'react';
function GetData(){
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState(null);
 
    useEffect(() =>  {
        //fetch data from api when the component gets mounted
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            if(!res.ok){
                throw new Error("Network is not responsding");
            }
            return res.json();
        })
        .then((data) => {
            setUser(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        })
    } , []) // ensure it runs only once when component mounts
 
    if(loading) return <p> Loading....</p>;
 
    if(error) return <p style={{color: "red"}}>Error: {error}</p>;
 
 
    return(
        <div>
            <h2>Get User data from Json Server</h2>
            <ul>
                {users.map((user) => (
                    <li key ={user.id}>
                         <strong>{user.name}</strong>-{user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
 
}
export default GetData;
 