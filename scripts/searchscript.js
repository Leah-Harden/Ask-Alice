var api_key = "xlozztFokJwpqfVlSdbxiEsnNSdEQwdTvLg0rjDvPh6lR95dFqOKpQpC";
var photos;
// import { createClient } from 'pexels';

// const client = createClient(api_key);
// const query = 'medicine';

// client.photos.search({ query, per_page: 1 }).then(photos => {...});

async function CuratedPhotos(){
    // fetch the data from api
    const data=await fetch(`https://api.pexels.com/v1/search?query=medicine&total_results=1`, 
    {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: api_key,     //use the apikey you have generated
        },
    });
    const response=await data.json();   //convert the response to json 
    // console.log(response);
    // console.log(response.photos[0].url);
photos = response.photos[0].url;
   console.log (photos);
}

CuratedPhotos();


// "https://api.pexels.com/v1/search?query=medicine"
// fetch("Authorization: xlozztFokJwpqfVlSdbxiEsnNSdEQwdTvLg0rjDvPh6lR95dFqOKpQpC"
// /"https://api.pexels.com/v1/search?query=medicine")
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data)
//             // console.log(data)
//             // console.log(data)
// }); 



