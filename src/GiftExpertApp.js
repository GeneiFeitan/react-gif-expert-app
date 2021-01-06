import React, {useState} from 'react'
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

const GiftExpertApp=()=>{
// const categories=['One Punch Man','Samurai X', 'Dragon Ball']
    const [categories,setCategories]=useState(['One Punch Man'])

    // const handldeAdd=()=>{
    //    setCategories(cts=>{
    //        return ([...cts,'hunterxhunter'])
    //    });
    // }
    return(
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>{
                categories.map((categoriy,index)=>
                    (<GifGrid key={categoriy} category={categoriy}/>
                    )
            )

            }

            </ol>
            </>
    )
}
export default GiftExpertApp;