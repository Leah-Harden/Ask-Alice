

$( function() {
    var dateFormat = "YYYYMMDD",
    from = $( "#from" )
        .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
        })
        .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
        }),
    to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3
    })
    .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
    });

    function getDate( element ) {
    var date;
    try {
        date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
        date = null;
    }

    return date;
    }
} );

//var oneDate = 

//var twoDate = 



<<<<<<< Updated upstream
=======
$(".search").on("click", function (event) {
    //grab values from the input elements
    var date1 = document.querySelector("#from").value;
    var date2 = document.querySelector("#to").value;

    console.log(date1)
    console.log(date2)
    // using dayjs changed format of date to one API can use
    var date1string = dayjs(date1).format("YYYYMMDD")
    var date2string = dayjs(date2).format("YYYYMMDD")
    fetch('https://api.fda.gov/drug/enforcement.json?search=report_date:[' + date1string + '+TO+' + date2string + ']&limit=5')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            // console.log(data)
            // console.log(data)
        });
    });
>>>>>>> Stashed changes

function search(){

    fetch('https://api.fda.gov/drug/enforcement.json?search=report_date:[20040101+TO+20131231]&limit=1')
    .then((response) => response.json())
    .then((data) => console.log(data));
}

<<<<<<< Updated upstream
search()
=======
search();


function redirect() {
    window.navigate("search-result.html")
}
>>>>>>> Stashed changes
