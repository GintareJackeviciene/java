import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Video from './Video';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <div className='container d-flex justify-content-between gap-5'>
    <Video videoId="yJ0V4Aj8qGo" autoplay={false} controls ={0} />
    <Video videoId="jlz1ZA8AWmQ" color ="red" start = {10} end ={50} loop={0}/>
    <Video videoId="jlz1ZA8AWmQ"  thumbrail={"https://picsum.photos/560/315"}/>
   </div> 
   
</>

);


