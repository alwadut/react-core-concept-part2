
export default function Friend(friend){
    console.log(friend)
    const {name,email} = friend.friend;
   
    return(
   
        <div className="box">
            <h2>Name: {name}</h2>
            <h5>Email: {email}</h5>
        </div>
    )
}