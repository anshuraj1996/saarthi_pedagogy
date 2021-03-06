import React, {useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'




function AlbumComponent() {
    const navigate=useNavigate()

    const [albums, setalbums]   = useState([]);
  
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => {
            setalbums(res.data)
            console.log(res.data)
            console.log(albums)
        });
    },[]);
    const gotoPhotos=()=>{
        navigate("Photo")
    }
   
    
    
      return (

        
            <div>
            <h1>Albums</h1>
             <button  style={{color:'blue'} } onClick={()=>navigate("/UserPage")}> Back </button>
              
         
        {
             albums.map(album => {
                 return (
                  
                   <div className="site-container" >
                    
                     <div className='card' onClick={gotoPhotos} >
                         <div className='head'>
                         <div className='info'>  
                         <div className='name'><b>ID :- {album.id}</b></div>
                         <div className='location'><b>Album Title :- </b>{album.title}</div>
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
export default AlbumComponent