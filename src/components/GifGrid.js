import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    const {data:images, loading} =  useFetchGifs(category)   

    return (
        <>
            <h2>{category}</h2>
            {loading && <h2 style={{color:'red'}}>Cargando...</h2>  }

             <div className='card-grid'>

                {
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                } 
            </div>
        </>
    )
}
