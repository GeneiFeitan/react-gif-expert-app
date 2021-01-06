export const getGifs= async (category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=9gSahZ5z1Rc9xLWLLLxyZtgJTKJdTewN`
    const resp=await fetch( url );
    const {data}= await resp.json();

    const gifs= data.map(img=>{
        return{
            img:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })


return gifs;

}