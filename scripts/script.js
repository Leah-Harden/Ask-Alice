$(function () {
    var dateFormat = "mm/dd/yy",
        from = $("#from")
            .datepicker({
                defaultDate: "+1w",
                changeMonth: true,
                numberOfMonths: 1
            })
            .on("change", function () {
                console.log(this)
                to.datepicker("option", "minDate", getDate(this));
            }),
        to = $("#to").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1
        })
            .on("change", function () {
                from.datepicker("option", "maxDate", getDate(this));
            });

    function getDate(element) {
        console.log(element.value)
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
            console.log(date)
        } catch (error) {
            date = null;
        }
    }
});



$(".search").on("click", function (event) {
    //grab values from the input elements
    var date1 = document.querySelector("#from").value;
    var date2 = document.querySelector("#to").value;

    console.log(date1)
    console.log(date2)
    // using dayjs changed format of date to one API can use
    var date1string = dayjs(date1).format("YYYYMMDD")
    var date2string = dayjs(date2).format("YYYYMMDD")
    fetch('https://api.fda.gov/drug/enforcement.json?search=report_date:[' + date1string + '+TO+' + date2string + ']&limit=20')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            var country = data.results[0].country;
            var productdescription = data.results[0].product_description;
            var reason = data.results[0].reason_for_recall;
            var inidate = data.results[0].recall_initiation_date;
            var firm = data.results[0].recalling_firm;

            localStorage.setItem("country", country);
            localStorage.setItem("product", productdescription);
            localStorage.setItem("reason", reason); 
            localStorage.setItem("date", inidate);
            localStorage.setItem("firm", firm);
            
        }); 
        showRecalls();
        
})
// This function re-directs the index.html to the search-results.html
var showRecalls = function (){

    document.location.replace('./search-results.html');
}

var dateOne="20021212";
var dateTwo="20021212";
var queryString = "?date1=" + dateOne + "&date2=" + dateTwo;

function changePage() {

    window.location.href = "search-results.html" + queryString;
}