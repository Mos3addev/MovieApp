import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem';

export default function Home() {

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingPerson, setTrendingPerson] = useState([]);

  async function getTrending (mediaType,func){
    let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f04abd28a278b378a10634e8da13acc0`);
    func(data.results);
    console.log(data.results);
  } 
  useEffect(()=>{
    getTrending('movie',setTrendingMovies);
    getTrending('tv',setTrendingTv);
    getTrending('person',setTrendingPerson);
  },[]);
  return <>
    <div className='row'>
      <div className='col-md-4 d-flex align-items-center'>
        <div>
          <div className='brdrLine w-25 mb-3'></div>
          <h2 className='h4'>Trending <br /> Movies <br /> To Watch Right Now</h2>
          <p className='text-muted py-3'>Most watched Movies by Days</p>
          <div className='brdrLine w-100 mt-3'></div>
        </div>
      </div>
      {trendingMovies.slice(0,10).map((movie , index)=> <MediaItem key={index} movie={movie}/>)}
    </div>
    <div className='row py-5'>
      <div className='col-md-4 d-flex align-items-center'>
        <div>
          <div className='brdrLine w-25 mb-3'></div>
          <h2 className='h4'>Trending <br /> TV <br /> To Watch Right Now</h2>
          <p className='text-muted py-3'>Most watched Movies by Days</p>
          <div className='brdrLine w-100 mt-3'></div>
        </div>
      </div>
      {trendingTv.slice(0,10).map((movie , index)=> <MediaItem key={index} movie={movie}/>)}
    </div>
    <div className='row'>
      <div className='col-md-4 d-flex align-items-center'>
        <div>
          <div className='brdrLine w-25 mb-3'></div>
          <h2 className='h4'>Trending <br /> People <br /> To Watch Right Now</h2>
          <p className='text-muted py-3'>Most watched People by Days</p>
          <div className='brdrLine w-100 mt-3'></div>
        </div>
      </div>
      {trendingPerson.slice(0,10).map((movie , index)=> <MediaItem key={index} movie={movie}/>)}
    </div>
    </>
}
