var api_key = "xlozztFokJwpqfVlSdbxiEsnNSdEQwdTvLg0rjDvPh6lR95dFqOKpQpC";

import { createClient } from 'pexels';

const client = createClient(api_key);
const query = 'medicine';

client.photos.search({ query, per_page: 1 }).then(photos => {...});




fetch("Authorization: xlozztFokJwpqfVlSdbxiEsnNSdEQwdTvLg0rjDvPh6lR95dFqOKpQpC"
/"https://api.pexels.com/v1/search?query=medicine")
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            // console.log(data)
            // console.log(data)
}); 



