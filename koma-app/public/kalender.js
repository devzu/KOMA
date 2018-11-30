let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


var d = new Date();
var datum = d.getDate();
document.getElementById("day").innerHTML = datum;
document.getElementById("manad").innerHTML = months[d.getMonth()];


function next() 
{
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous()
{
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() 
{
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) 
{

    let firstDay = new Date(year, month).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
  

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++)
    {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) 
        {
            if (i === 0 && j < firstDay)
            {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth)
            {
                break;
            }

            else
            {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth())
                {
                    cell.classList.add("idag");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                ++date;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }

}


function addEvent()
{
    var txt;
    var e = prompt("Event name");
    if(e == null || e == "")
    {
        txt = null;
    }
    else
    {
        txt = e;
    }
    document.getElementById("demo").innerHTML = txt;
}
function eraseEvent()
{   
    if(confirm('Delete event?'))
    { 
        document.getElementById("demo").innerHTML = "";  
    }
   
}