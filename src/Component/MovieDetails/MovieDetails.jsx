import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams , Link  } from 'react-router-dom'
import avatar from '../../avatar.jpg';

export default function MovieDetails() {
    let params = useParams();
    console.log(params.id);
    const [itemDetails, setItemDetails] = useState({})
    const [similarItem, setSimilarItem] = useState([])
    async function getItemDetails(){
        let {data} = await axios.get(`https://api.themoviedb.org/3/${params.mediaType}/${params.id}?api_key=f04abd28a278b378a10634e8da13acc0&language=en-US`);
        setItemDetails(data);
    }
    async function getSimilar(){
        let {data} = await axios.get(`https://api.themoviedb.org/3/${params.mediaType}/${params.id}/similar?api_key=f04abd28a278b378a10634e8da13acc0&language=en-US&page=1`);
        setSimilarItem(data.results);
    }
    useEffect(()=>{
        getItemDetails();
        getSimilar();
    },[])
  return <>
  <div className='row'>
    <div className='col-md-3'>
        {itemDetails.poster_path?<img className='w-100' src={'https://image.tmdb.org/t/p/w500'+itemDetails.poster_path} alt='#'/>:''}
        {itemDetails.profile_path?<img className='w-100' src={'https://image.tmdb.org/t/p/w500'+itemDetails.profile_path} alt='#'/>:''}
        {!itemDetails.profile_path && !itemDetails.poster_path ? <img className='w-100' src={avatar} alt="" />:''}
    </div>
    <div className='col-md-9'>
        <h2>{itemDetails.title} {itemDetails.name}</h2>
        <p className='text-muted'>{itemDetails.overview}</p> 
    </div>
  </div>
  
  <div className='row pt-5'>
        {similarItem.slice(0,10).map((movie)=>
        <div className='col-md-2'>
          <Link to={'/moviedetails/'+movie.id +'/'+params.mediaType}>
            <div className='movie position-relative'>
              {movie.poster_path?<img className='w-100' src={'https://image.tmdb.org/t/p/w500'+movie.poster_path} alt='#'/>:''}
              {movie.profile_path?<img className='w-100' src={'https://image.tmdb.org/t/p/w500'+movie.profile_path} alt='#'/>:''}
              {!movie.profile_path && !movie.poster_path ? <img className='w-100' src={avatar} alt="" />:''}
              <h3 className='h6 my-2'>{movie.title}{movie.name}</h3>
              {movie.vote_average?<div className='vote p-2 text-center position-absolute'>{movie.vote_average?.toFixed(1)}</div>:''}
            </div>
          </Link>
        </div>
        )}
  </div>
  </>
}
