function renderHtml(json){
    const row = document.querySelector('.row');
    row.innerHTML = ``;
    json.forEach(element => {

            // attendees
            const member = document.createElement('h5');
            member.classList.add('members');
            member.innerHTML = `<strong> Members </strong> : `;
            element.attendees.forEach(attendees =>{
                // console.log(attendees.email);
                member.innerHTML += `<span>${attendees.email}, </span>`
            });


            row.innerHTML += `<div class="column-m">
            <h4>${element.date} <span>${element.startTime.hours}:${element.startTime.minutes} - ${element.endTime.hours}:${element.endTime.minutes}</span></h4>
            <p>${element.name}</p>
            <button class="btn-red">Excuse Yourself</button><hr>
            ${member.innerHTML}
            <form action="">
                <select id="member" name="member" class="font-size">
                  <option value="member0">Select member</option>
                  <option value="member1">Member1</option>
                  <option value="member2">Member2</option>                    
                </select>
                <input type="submit" class="font-size btn-blue" value="Add">
            </form>
        </div>`;
    })
}

// todays meeting
function renderMeeting()
{
    axios.get('https://mymeetingsapp.herokuapp.com/api/calendar?date=2021-01-28',
        {
            headers: { 
                'Authorization': `${localStorage.getItem("authToken")}` 
            }
        }
    ).then( response => response.data)
    .then( json => {
        // console.log(json);
        renderHtml(json);
    })  
    .catch()
    {
        console.log('Exception');
    };
}  

function onSubmitSearchForm(event) {
    
    event.preventDefault();

    axios.get('https://mymeetingsapp.herokuapp.com/api/meetings?',
        {
            params : {
                'search' : document.querySelector('#search').value,
                'period' : document.querySelector('#date').value
            },   
            headers: { 
                'Authorization': `${localStorage.getItem("authToken")}` 
            }
        }
    )
    .then( response => response.data)
    .then( json => {
        // console.log(json);    
        renderHtml(json);
    });
}

// search meeting
function searchMeeting() {
    document.querySelector( '#search-meeting' ).innerHTML = `
    <h3 style="color: white;">Search for meetings</h3><hr>
    <form method="post" id="search-form">
        <div class="mar"><label for="date">Date</label></div>
        <select id="date" name="date" class="font-size date-btn">
            <option value="all">All</option>
            <option value="past">Past</option>
            <option value="present">Present</option>                    
            <option value="future">Future</option>                    
        </select>
        <div class="mar"><label for="search">Search for</label></div>
        <div class="mar"><input type="text" class="search-btn" name="search" id="search" placeholder="Search using keywords that describe the meeting"></div>
        <button type="submit" class="btn-blue">Search</button>
    </form>
    `;

}
searchMeeting();
renderMeeting();

document.querySelector( '#search-form' ).addEventListener( 'submit', onSubmitSearchForm );