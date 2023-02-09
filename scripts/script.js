
function search(){

    fetch('https://api.fda.gov/drug/enforcement.json?search=report_date:[20040101+TO+20131231]&limit=1')
    .then((response) => response.json())
    .then((data) => console.log(data));
}

search()

