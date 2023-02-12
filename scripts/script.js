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

    if (date1string===null && date2string===null){
        console.log("no-date-selected")
    }
        else {
        // This function re-directs the index.html to the search-results.html
        document.location.replace('./search-results.html?'+date1string+'&'+date2string);
    }
});



