

const monthMap = {
    0 : "January",
    1 : "February",
    2 : "March",
    3 : "April",
    4 : "May",
    5 : "June",
    6 : "July",
    7 : "August",
    8 : "September",
    9 : "October",
    10 : "November",
    11 : "December"
}
const dayMap = {
    1 : "Monday",
    2 : "Tuesday",
    3 : "Wednesday",
    4 : "Thursday",
    5 : "Friday",
    6 : "Saturday",
    0 : "Sunday"
};

function daysInMonth (year, month) {
    return new Date(year, month, 0).getDate();
}

function createCalender(year,month)
{
    const noOfDaysInMonth = daysInMonth(year,month);
    const calendarContainer = document.querySelector('#calender-container');
    calendarContainer.innerHTML = ``;
    for( var i = 0 ; i < noOfDaysInMonth ; i++)
    {
        calendarContainer.innerHTML += `<div class="tab" id="cal-${i}">${i+1}</div>`;    
    }
}

function setTodayDate() {
    const currentDate = document.querySelector("#current-date").valueAsDate = new Date();
    const day = currentDate.getUTCDate();
    const month = monthMap[ currentDate.getMonth() ];
    const year = currentDate.getFullYear();
    const dayy = currentDate.getDay();

    const a = currentDate;
    console.log(a);
    document.querySelector('#set-date').innerHTML = `${day} ${month} ${year}`;
    document.querySelector('#set-day').innerHTML = `${dayMap[dayy]}`;
    createCalender(year,currentDate.getMonth());
}

function getCalenderData() {
    const inputDate = document.querySelector('#current-date').valueAsDate;
    const day = inputDate.getUTCDate();
    const month = monthMap[ inputDate.getMonth() ];
    const year = inputDate.getFullYear();
    const dayy = inputDate.getDay();
  
    document.querySelector('#set-date').innerHTML = `${day} ${month} ${year}`;
    document.querySelector('#set-day').innerHTML = `${dayMap[dayy]}`;
    createCalender(year,inputDate.getMonth()+1);

    axios.get('https://mymeetingsapp.herokuapp.com/api/calendar',
    {
        params : {
            'date' : `${year}-${month}-${day}` 
        },
        headers: { 
            'Authorization': `${localStorage.getItem("authToken")}` 
        }
    })
    .then( response => response.data)
    .then(json => {
        // console.log(json);
        // <div class="tab cal-2">
        //         <p class="grey-box tab-font" style="font-weight: bold;" >Project Kickoff</p>
        //         <p class="grey-box tab-font">Attendees : john@example.com</p>
        //     </div> -->

        json.forEach(element =>{
            var members = ``;
            element.attendees.forEach( attend => {
                members += attend.email + `,`;
            });
            const tabCal = '#cal-' + (day-1);
            document.querySelector(tabCal).innerHTML = `
                <p class="grey-box tab-font" style="font-weight: bold;" >${element.name}</p>
                <p class="grey-box tab-font"><strong>Attendees</strong> : ${members}</p>
                `;
        });
    });
}

setTodayDate();
document.querySelector('#current-date').addEventListener('input', getCalenderData);