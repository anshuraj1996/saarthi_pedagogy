import React, {useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'



 

const UserCompJs = () => {
    const navigate=useNavigate()

  const [posts, setPost]   = useState([]);

 
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`, {

    }).then((res) => {
      console.log( res);
      setPost(res.data)
     
    })
  }, []);
  const gotoAlbum=()=>{
      navigate('/AlbumPage')
  }
  
  
    return (
      <div>
      <h1>Users</h1>
        {
        posts.map(person => {
          return (
            
            <div className="site-container" >
              
              <div className='card' onClick={gotoAlbum}>
                  <div className='head'>
                  <div className='info'>  
                  <div className='name'><b>Name :- {person.name}</b></div>
                  <div className='location'>UserName :-{person.username}</div>
                  <div className='mail'>Email :-{person.email}</div>
                  <div className='mail'>City :-{person.address.city}</div>
                  
                  </div>
                  </div>
               
                </div>
               
            </div>
          )
        })
        
        }
        </div>
    )
  
}

export default UserCompJs