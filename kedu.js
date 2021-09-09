//RESPONSIVE DESIGN NAVBAR

//THE JAVASCRIPT BEHIND THE NAVBAR COLLAPSE

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("toggle");
    })
});


//APP FOR THE EMAIL MANAGER

function allowDrop(ev) {
    ev.preventDefault();
    statusChange();
}

function drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
    statusChange();
    increase(false);
}

//JS for the color change once user clicks sent
function statusChange() {
    var doneDone = document.getElementById("done");
    doneDone.addEventListener('click', () => {
        doneDone.style.backgroundColor = "#28a745";
        doneDone.value = "sent";
    });
}

//JS for number count
function increase() {
    var value = parseInt(document.getElementById("number").value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;

    var value2 = parseInt(document.getElementById("number2").value, 10);
    value2 = parseInt(7) - parseInt(value);
    document.getElementById('number2').value = value2;

    var value1 = parseInt(document.getElementById("number1").value, 10);
    value1 = parseInt(value2) / parseInt(7) * 100;
    document.getElementById('number1').value = `${Math.round(value1)}%`;

}


//THIS POSTS THE CONTENT TO THE NEXT SET OF DIVS
const form = document.querySelector('form');
const uname = document.querySelector('#uName');
const eMail = document.querySelector("#email");
const sub = document.querySelector("#subject");
const date = document.querySelector("#date");
const msg = document.querySelector('#message');
const history = document.querySelector("#history");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const hList = document.createElement('div');
    hList.id = 'historyList';
    hList.style.display = 'block';
    hList.innerHTML = `<br><strong>Subject: </strong>${sub.value}<br> <br><strong>Date:</strong> ${date.value}<br>`;
    history.appendChild(hList);
    uname.value = '';
    eMail.value = '';
    sub.value = '';
    msg.value = '';
    date.value = "";
});