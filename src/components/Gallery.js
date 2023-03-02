import React from 'react';
import './gallery.css';

const Gallery = () => {
   let data = [
      {
         id: 1,
         imgSrc: 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
         id: 2,
         imgSrc: 'https://images.unsplash.com/photo-1501171619416-9fd38f5e125c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: 3,
         imgSrc: 'https://images.unsplash.com/photo-1605496036006-fa36378ca4ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      },
      {
         id: 4,
         imgSrc: 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
         id: 5,
         imgSrc: 'https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
         id: 6,
         imgSrc: 'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
      },
      {
         id: 7,
         imgSrc: 'https://images.unsplash.com/photo-1591154669695-5f2a8d20c089?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
      {
         id: 8,
         imgSrc: 'https://images.unsplash.com/photo-1537633468298-d86f0c2d4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
      {
         id: 9,
         imgSrc: 'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: 10,
         imgSrc: 'https://images.unsplash.com/photo-1481066717861-4775e000c88a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      },
      {
         id: 11,
         imgSrc: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: 12,
         imgSrc: 'https://images.unsplash.com/photo-1615439935188-5e488fc6b764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: 13,
         imgSrc: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: 14,
         imgSrc: 'https://images.unsplash.com/photo-1600164913117-2125c1f60b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: 15,
         imgSrc: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: 16,
         imgSrc: 'https://images.unsplash.com/photo-1507092519286-c691a4c6de74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: 17,
         imgSrc: 'https://plus.unsplash.com/premium_photo-1663097417329-6ff06e9201b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: 18,
         imgSrc: 'https://images.unsplash.com/photo-1559556489-4024a5abfb57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdlZGRpbmclMjBwaG90b3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },

   ];


   return (
       <div className="gallery">
          {data.map((item, index) => {
             return (
                 <div className="pics" key={index}>
                    <img src={item.imgSrc} style={{ width: '100%'}} alt="img"/>
                 </div>
          )})}
       </div>
   );
};

export default Gallery;
