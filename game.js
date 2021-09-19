let logged = 1;
let health = 50000;// Change this one to update based on database health
let startstring = "-------- I will flood the streets with rage! --------"

// Update the life bar of both the boss and the database
function updateLife(life){
    if (life < 0){
        health = 0
    } else {
        health = life; // Update the database health as well.
    }
    document.getElementById('num_health').innerHTML
        = health;
    
}

// Update the source of the image based on the given health.
function updateCloud(life){
    if (life < 25000){
        document.getElementById("cloud").src="/imgs/cloud_mellow.png";
    }
    if (life <= 0){
        document.getElementById("cloud").src="/imgs/cloud_happy.png";
    }
}

// Updates the message underneath the cloud.
    function updateMessage(sentence){
        let element =  document.getElementById("display_message")
        element.innerHTML = sentence;
        element.classList.remove("message");
        setTimeout(() => element.classList.add("message"), 0);
    }

// Attack the boss
document.getElementById("attack_button").addEventListener("click", function(event){
    let multiplyer = 1;
    let message = "-------- What a pathetic Excuse of a human! --------"

    // Gather the points
    let cans = parseInt(document.getElementById('cans').value);
    let bottles = parseInt(document.getElementById('bottles').value);
    let reuse = parseInt(document.getElementById('reuse').value);
    let paper = parseInt(document.getElementById('paper').value);
    let ewaste = parseInt(document.getElementById('ewaste').value);

    // If any of the levels are > 5, then a 2x multiplyer is added
    if (cans > 5 || bottles > 5 || reuse > 5 || paper > 5 || ewaste > 5){
        multiplyer += 5;
    }

    // If all of the levels are > 5, then a 5x multiplyer is added
    if (cans > 5 && bottles > 5 && reuse > 5 && paper > 5 && ewaste > 5){
        multiplyer += 10;
    }

    // If all of the levels are > 5, then a 5x multiplyer is added
    if (cans == 0 && bottles == 0 && reuse == 0 && paper == 0 && ewaste == 0){
        multiplyer == 0;
    }
    
    // Add up all the recycling 
    let total = cans + bottles + reuse + paper + ewaste;
    let final = total * multiplyer;
    let temp_health = health - final;

    // Update the health and the cloud image
    updateLife(temp_health);
    updateCloud(temp_health);
    updateMessage(message);

    // If Cans and bottles are 
    event.preventDefault();
});


// Determines if the log in button is shown or the log out button is shown.
function logDisplay(check) {
    if (check == 0){
        document.getElementById("in").style.display = "none";
    }
    else {
        document.getElementById("out").style.display = "none";
    }
}

logDisplay(logged);
updateLife(health);
updateCloud(health);
updateMessage(startstring);