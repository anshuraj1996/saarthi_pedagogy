import React, {useState,useEffect } from "react";
import {useNavigate} from 'react-router-dom'



function PhotosComponents() {
    const navigate=useNavigate()

    const [photos, setphotos]   = useState([]);
  
   
    useEffect(() => {
      fetch(`https://api.unsplash.com/photos/?client_id=Y34fpxUOr0-6RgYWtWmgbacEroch8ol0hWJTWVKN2bA`, {
  
      }).then((res) => {
        console.log( res);
        setphotos(res.data)
       
      })
    }, []);
   
    return (

        
        <div>
         
            <h1>Photos</h1>
         <button className="backbtn" style={{color:'green'} } onClick={()=>navigate("/AlbumPage")}> Back </button>
          
     
    {
        photos.map(photo => {
             return (
              
               <div className="site-container" >
                
                 <div className='card'>
                     <div className='head'>
                     <div className='info'>  
                     <div className='name'><b>ID :- {photo.id}</b></div>
                      <div ><img src={photo.urls.small} alt='img' /></div>
                     
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

export default PhotosComponents