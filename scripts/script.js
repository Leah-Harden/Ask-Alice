
function search(){

    fetch('https://api.fda.gov/drug/enforcement.json?search=classification:"ClassIII"&limit=5')
    then((response) => response.json())
    .then((data) => console.log(data));
}

search()

