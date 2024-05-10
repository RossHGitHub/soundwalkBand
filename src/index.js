import './style.css'

if (window.location.pathname.includes('pages/Gigs.html') || window.location.pathname.includes('gigs.html')) {
    document.addEventListener("DOMContentLoaded", function() {



    function displayGig(venue, date, startTime){
        let page = document.getElementById('showsPage')
    
        let gigItem = document.createElement('div');
        gigItem.setAttribute('id', 'gigItem')
    
        let venueHolder = document.createElement('div');
        venueHolder.innerHTML=venue;
        venueHolder.setAttribute('id', 'venueHolder')

        let dateHolder = document.createElement('div');
        dateHolder.innerHTML=date;
        dateHolder.setAttribute('id', 'dateHolder')

        let startTimeHolder = document.createElement('div')
        startTimeHolder.innerHTML=startTime;
        startTimeHolder.setAttribute('id', 'startTimeHolder')
    
        gigItem.appendChild(venueHolder);
        gigItem.appendChild(dateHolder);
        gigItem.appendChild(startTimeHolder);
    
        page.appendChild(gigItem)
        console.log('bum')
    }

   
        displayGig('The Red Lion, Earsdon','Sat 1st June 2024','20:00');
        displayGig('Cullercoats Crescent Club', 'Fri 5th July 2024', '20:00')

  
    


    })
};