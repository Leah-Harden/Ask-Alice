
function search(){

    fetch('https://api.fda.gov/drug/event.json?api_key=fMBkSpWpi59SAripPdWheuRojQkyA6OF0gT5n64y&search=patient.reaction.reactionmeddrapt:"fatigue"&limit=1')
    then((response) => response.json())
    .then((data) => console.log(data));
}

search()

