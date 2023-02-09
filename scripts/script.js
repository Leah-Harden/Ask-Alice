

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
  
function search(){

    fetch('https://api.fda.gov/drug/event.json?api_key=fMBkSpWpi59SAripPdWheuRojQkyA6OF0gT5n64y&search=patient.reaction.reactionmeddrapt:"fatigue"&limit=1')
    .then((response) => response.json())
    .then((data) => console.log(data));
}

search()