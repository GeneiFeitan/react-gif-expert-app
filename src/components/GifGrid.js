import React from 'react';
import {GifGridItem} from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrid =({category})=>{

    const {loading,data}= useFetchGifs(category);

    console.log(loading)



    return(
        <>
            <h3 className="animate__animated animate__fadeIn">{ category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                {
                    data.map((img,i)=>(
                        <GifGridItem
                            key={i}
                            {...img}
                        />
                    ))
                }
            </div>
        </>

    )
}