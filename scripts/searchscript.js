var api_key = "xlozztFokJwpqfVlSdbxiEsnNSdEQwdTvLg0rjDvPh6lR95dFqOKpQpC";
var photos;
var photolimit = 10;

async function CuratedPhotos() {
    var p = Math.floor(Math.random() * 10);
    // fetch the data from api
    const data = await fetch(`https://api.pexels.com/v1/search?query=medicine&total_results=10`,
        {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: api_key,     //use the apikey you have generated
            },
        });
    const response = await data.json();   //convert the response to json 
    // console.log(response);
    // console.log(response.photos[0].url);

    photos = response.photos[p].src.medium;
    console.log(p)

    $("#image-api").attr("src", photos);
}

CuratedPhotos();
callApi();


function callApi() {
    
    var dt_string = document.location.search;
    var datestring = dt_string.split("?")[1];
    var datestring1 = datestring.split("&")[0];
    var datestring2 = datestring.split("&")[1];
    console.log(datestring1)
    console.log(datestring2)
    var date1 = dayjs(datestring1).format("MM/DD/YYYY")
    var date2 = dayjs(datestring2).format("MM/DD/YYYY")

    console.log(date1)
    console.log(date2)

    $("#dates").text(date1 + " - " + date2)

    fetch('https://api.fda.gov/drug/enforcement.json?search=report_date:[' + datestring1 + '+TO+' + datestring2 + ']&limit=200')
        .then((response) => {
            console.log(response.ok)
            if (response.ok) {
                response.json().then(function(data){
                    rabbithole(data);
                    console.log("Correct")

                    // .then((response) => response.json())
                    // .then((data) => {
            })}
            else {
                document.location.replace('./error-page.html');
                // document.location.replace('./index.html');
                console.log("error")
            }
        })
    }

    var rabbithole = function (data) {
        var x = Math.floor(Math.random() * 20);

        console.log(data)
        console.log(data.results.length);
        console.log(x)
        var country = data.results[x].country;
        var productDescription = data.results[x].product_description;
        console.log(productDescription)
        var reason = data.results[x].reason_for_recall;
        var inidate = data.results[x].recall_initiation_date;
        var firm = data.results[x].recalling_firm;
        var status = data.results[x].status;
        var recallcount = data.results.length;

        var inidate1 = dayjs(inidate).format("MM/DD/YYYY")

        $("#place").text(country);
        $(".product_description").text(productDescription);
        $(".reason").text(reason);
        $("#spanStatus").text(status);
        $("#iniDate").text(inidate1);
        $("#firm").text(firm);
        $("#count2").text(recallcount);

        localStorage.setItem("product", productDescription);
    }

    // localStorage.setItem("country", country);
    // localStorage.setItem("reason", reason); 
    // localStorage.setItem("date", inidate1);
    // localStorage.setItem("firm", firm);

function lastRecall () {
    var lastOne = localStorage.getItem("product");
    $(".text-past").text(lastOne);
}
    $("#continuebtn").on("click", function(event)    {

        callApi();
        CuratedPhotos();
        lastRecall();

        // fetch('https://api.fda.gov/drug/enforcement.json?search=report_date:[' + datestring1 + '+TO+' + datestring2 + ']&limit=200')
        // .then(function (response) {
        //     if (response.ok) {
        //         response.json().then(function(data1){
        //             rabbithole(data1);
        //         })}
        // rabbithole(data1);
        // })

    });


    // {
    // var country1 = data.results[p].country;
    // console.log(reason1)
    // var productdescription1 = data.results[p].product_description;
    // console.log(productdescription)
    // var reason1 = data.results[p].reason_for_recall;
    // var inidate = data.results[p].recall_initiation_date;
    // var firm = data.results[p].recalling_firm;
    // var status1 = data.results[p].status;
    // // var recallcount = data.results.length;
    // $("#place").text(country1);
    // $(".product_description").text(productdescription1);
    // $(".reason").text(reason1);
    // $("#spanStatus").text(status1);
    // // $("#count").text(recallcount);
// }
