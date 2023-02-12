var api_key = "xlozztFokJwpqfVlSdbxiEsnNSdEQwdTvLg0rjDvPh6lR95dFqOKpQpC";
var photos;

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
photos = response.photos[0].src;
console.log(response)
console.log (photos);
$("#image-api").attr("src", photos);
}

CuratedPhotos();
callApi();

function callApi(){
    
    var dt_string = document.location.search;
    var datestring = dt_string.split("?")[1];
    var datestring1 = datestring.split("&")[0];
    var datestring2 = datestring.split("&")[1];
    console.log(datestring1)
    console.log(datestring2)

    var date1 = dayjs(datestring1).format("YYYY/MM/DD")
    var date2 = dayjs(datestring2).format("YYYY/MM/DD")
    console.log(date1)
    console.log(date2)

    $("#dates").text(date1)

    fetch('https://api.fda.gov/drug/enforcement.json?search=report_date:['+ datestring1 + '+TO+' + datestring2+']&limit=5')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        var country = data.results[0].country;
        var productdescription = data.results[0].product_description;
        console.log(productdescription)
        var reason = data.results[0].reason_for_recall;
        var inidate = data.results[0].recall_initiation_date;
        var firm = data.results[0].recalling_firm;
        var status = data.results[0].status;

        $("#place").text(country);
        $(".product_description").text(productdescription);
        $(".reason").text(reason);
        $("#spanStatus").text(status);


        // localStorage.setItem("country", country);
        // localStorage.setItem("product", productdescription);
        // localStorage.setItem("reason", reason); 
        // localStorage.setItem("date", inidate);
        // localStorage.setItem("firm", firm);
        
                }
        )
    }
      
    $("#backbtn").on("click", function (event) {

            document.location.replace('./index.html');
        })