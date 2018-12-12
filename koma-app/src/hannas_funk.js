/****************
*   VARIABLER   *
****************/
var n_clicks = 0; //Räknar antal delmål
var goal_counter = 0; //Räknar antal uppfylda mål


/****************
*  FUNKTIONER   *
****************/

/* NYTT MÅL-knappen 
Öppnar create-diven */
function create_goal() {
    // skapa pop-up ruta
    document.getElementById("create_goal").style.visibility = "visible";
    document.getElementById("new_goal").style.visibility = "hidden";
}

/* PLUS-knappen: 
Lägg till delmål (räknar) */
function add_entry() {
    
    // Hanterar delmål för framtida räkning
    n_clicks += 1; //räknar antal delmål
    document.getElementById("test").innerHTML = n_clicks; //printar antal tryck
    document.getElementById("myProgress").max = n_clicks; //kopplar antal delmål till baren
    
    // Lägger till nya textfält
    var new_entry = document.createElement("TEXTAREA");
    new_entry.setAttribute("placeholder", "Delmål " + n_clicks);
    document.getElementById("create_goal").appendChild(new_entry);
    
    // Enablar KLAR-knappen
    document.getElementById("klar").disabled = false;
    
    // Lägger till checkboxen
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("onclick", "goal()");
    checkbox.setAttribute("label", "label");
    
    // Lägger till målbeskrivning
    var goal_descr = document.createElement("p");
    goal_descr.setAttribute("class", "goal_descr");
    var descr_text = document.createTextNode("Mål nummer " + n_clicks);
    goal_descr.appendChild(descr_text);
    
   
   // Lägger till box och mål i en div  
    document.getElementById("goals").appendChild(checkbox); document.getElementById("goals").appendChild(goal_descr);
    

}

/* KLAR-knappen:
Stänger create, öppnar progress */
function goal_done() {

   // Ändrar synlighet
    document.getElementById("create_goal").style.visibility = "collapse";
    document.getElementById("progress_div").style.visibility = "visible";

    
}

/* CHECKBOXES:
Fyller i mål om man trycker */
function goal() {
    
    if (goal_counter >= n_clicks) {
        return;
    }
    
    goal_counter += 1;
    
    // typ konsol, inte viktigt:
    document.getElementById("test").innerHTML = goal_counter;
    
    document.getElementById("myProgress").value = goal_counter;
    
    if (goal_counter >= n_clicks) {
        
        document.getElementById("test").innerHTML = "Grattis!";
    }

    document.getElementByClass("goal_descr").disabled = true;
   
}

/* Resettar allt */
function reset() {
    n_clicks = 0;
    goal_counter = 0;
    
    document.getElementById("myProgress").max = 0;   document.getElementById("myProgress").value = goal_counter = 0; document.getElementById("progress_div").style.visibility = "hidden"; document.getElementById("new_goal").style.visibility = "visible";
    document.getElementById("klar").disabled = true;
    
}
