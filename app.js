
var nme = document.getElementById('nme');
var image = document.getElementById('image');
var date = document.getElementById('inp');


var today = new Date();
var year = today.getFullYear();
var month = String(today.getMonth() + 1).padStart(2, '0');
var day = String(today.getDate()).padStart(2, '0');
var formattedDate = year + '-' + month + '-' + day;

function passedOrUpcoming() {
    if (date.value < formattedDate) {
        document.getElementById('staus').innerHTML = "Passed";
        document.getElementById('staus').style.color = "red";
    }
    else if (date.value > formattedDate) {
        document.getElementById('staus').innerHTML = "Up-Coming";
        document.getElementById('staus').style.color = "Green";
    }
    else {
        document.getElementById('staus').innerHTML = "Today!";
        document.getElementById('staus').style.color = "orange";
        console.log(date.value);
        console.log(formattedDate);
    }
}

function touch() {
    var d = date.value;
    if (d === "2023-01-01") {
        passedOrUpcoming();
        nme.innerHTML = "Happy New Year";
        image.src = "./img/1.webp";
    }
    else if (d === "2023-02-05") {
        passedOrUpcoming();
        nme.innerHTML = "Kashmir Day";
        image.src = "./img/2.jpg";
    }
    else if (d === "2023-02-19") {
        passedOrUpcoming();
        nme.innerHTML = "Shab-e-Meraaj";
        image.src = "./img/3.avif";
    }
    else if (d === "2023-03-07") {
        passedOrUpcoming();
        nme.innerHTML = "Holi";
        image.src = "./img/4.avif";
    }
    else if (d === "2023-03-09") {
        passedOrUpcoming();
        nme.innerHTML = "Shab-e-Baraat";
        image.src = "./img/5.webp";
    }
    else if (d === "2023-03-23") {
        passedOrUpcoming();
        nme.innerHTML = "Pakistan Day";
        image.src = "./img/20.jpg";
    }
    else if (d === "2023-03-24") {
        passedOrUpcoming();
        nme.innerHTML = "Ramadan";
        image.src = "./img/6.avif";
    }
    else if (d === "2023-04-23") {
        passedOrUpcoming();
        nme.innerHTML = "Eid-ul-Fitr";
        image.src = "./img/7.webp";
    }
    else if (d === "2023-05-01") {
        passedOrUpcoming();
        nme.innerHTML = "Labour Day";
        image.src = "./img/8.webp";
    }
    else if (d === "2023-05-09") {
        passedOrUpcoming();
        nme.innerHTML = "Teacher's Day";
        image.src = "./img/9.png";
    }
    else if (d === "2023-05-14") {
        passedOrUpcoming();
        nme.innerHTML = "Mother's Day";
        image.src = "./img/10.jpg";
    }
    else if (d === "2023-06-29") {
        passedOrUpcoming();
        nme.innerHTML = "Hajj Day";
        image.src = "./img/21.jpg"
    }
    else if (d === "2023-06-30") {
        passedOrUpcoming();
        nme.innerHTML = "Eid-ul-Adha";
        image.src = "./img/11.webp"
    }
    else if (d === "2023-06-18") {
        passedOrUpcoming();
        nme.innerHTML = "Father's Day";
        image.src = "./img/12.jpg";
    }
    else if (d === "2023-07-28") {
        passedOrUpcoming();
        nme.innerHTML = "Youm-e-Ashura";
        image.src = "./img/22.jpg";
    }
    else if (d === "2023-08-14") {
        passedOrUpcoming();
        nme.innerHTML = "Independence Day";
        image.src = "./img/13.png";
    }
    else if (d === "2023-09-06") {
        passedOrUpcoming();
        nme.innerHTML = "Defence Day";
        image.src = "./img/14.jpg";
    }
    else if (d === "2023-09-20") {
        passedOrUpcoming();
        nme.innerHTML = "My Birthday";
        image.src = "./img/15.jpg";
    }
    else if (d === "2023-09-28") {
        passedOrUpcoming();
        nme.innerHTML = "Eid - milad - un - Nabi";
        image.src = "./img/16.jpg";
    }
    else if (d === "2023-11-09") {
        passedOrUpcoming();
        nme.innerHTML = "Iqbal Day";
        image.src = "./img/17.jpg";
    }
    else if (d === "2023-11-14") {
        passedOrUpcoming();
        nme.innerHTML = "Children's Day";
        image.src = "./img/18.webp";
    }
    else if (d === "2023-12-25") {
        passedOrUpcoming();
        nme.innerHTML = "Quaid Day / " + "<br>" + "Christmas";
        image.src = "./img/19.jpg";
    }
    else {
        alert("Festival You Are Looking Is Not In The List")
        location.reload();
    }
}
function search(){
    var s = prompt("Search Festival Name").toUpperCase();
    if (s == "HAPPY NEW YEAR") {
        passedOrUpcoming();
        date.value = "2023-01-01";
        nme.innerHTML = "Happy New Year";
        image.src = "./img/1.webp";
    }
    else if (s == "KASHMIR DAY") {
        passedOrUpcoming();
        date.value = "2023-02-05";
        nme.innerHTML = "Kashmir Day";
        image.src = "./img/2.jpg";
    }
    else if (s == "SHAB-E-MERAAJ" || s == "SHAB E MERAAJ") {
        passedOrUpcoming();
        date.value = "2023-02-19";
        nme.innerHTML = "Shab-e-Meraaj";
        image.src = "./img/3.avif";
    }
    else if (s == "HOLI") {
        passedOrUpcoming();
        date.value = "2023-03-07";
        nme.innerHTML = "Holi";
        image.src = "./img/4.avif";
    }
    else if (s == "SHAB-E-BARAAT" || s == "SHAB E BARAAT") {
        passedOrUpcoming();
        date.value = "2023-03-09";
        nme.innerHTML = "Shab-e-Baraat";
        image.src = "./img/5.webp";
    }
    else if (s == "PAKISTAN DAY") {
        passedOrUpcoming();
        date.value = "2023-03-23";
        nme.innerHTML = "Pakistan Day";
        image.src = "./img/20.jpg";
    }
    else if (s == "RAMADAN" || s == "RAMZAN") {
        passedOrUpcoming();
        date.value = "2023-03-24";
        nme.innerHTML = "Ramadan";
        image.src = "./img/6.avif";
    }
    else if (s == "EID-UL-FITR" || s == "EID UL FITR" || s == "EID") {
        passedOrUpcoming();
        date.value = "2023-04-23";
        nme.innerHTML = "Eid-ul-Fitr";
        image.src = "./img/7.webp";
    }
    else if (s == "LABOUR DAY") {
        passedOrUpcoming();
        date.value = "2023-05-01";
        nme.innerHTML = "Labour Day";
        image.src = "./img/8.webp";
    }
    else if (s == "TEACHER DAY" || s == "TEACHER'S DAY") {
        passedOrUpcoming();
        date.value = "2023-05-09";
        nme.innerHTML = "Teacher's Day";
        image.src = "./img/9.png";
    }
    else if (s == "MOTHER DAY" || s == "MOTHER'S DAY") {
        passedOrUpcoming();
        date.value = "2023-05-14";
        nme.innerHTML = "Mother's Day";
        image.src = "./img/10.jpg";
    }
    else if (s == "HAJJ DAY") {
        passedOrUpcoming();
        date.value = "2023-06-29";
        nme.innerHTML = "Hajj Day";
        image.src = "./img/21.jpg"
    }
    else if (s == "EID-UL-ADHA" || s == "BAKRA EID" || s == "EID UL ADHA") {
        passedOrUpcoming();
        date.value = "2023-06-30";
        nme.innerHTML = "Eid-ul-Adha";
        image.src = "./img/11.webp"
    }
    else if (s == "FATHER DAY" || s == "FATHER'S DAY") {
        passedOrUpcoming();
        date.value = "2023-06-18";
        nme.innerHTML = "Father's Day";
        image.src = "./img/12.jpg";
    }
    else if (s == "YOUM-E-ASHURA" || s == "MUHARRAM" || s == "YOUM E ASHURA") {
        passedOrUpcoming();
        date.value = "2023-07-28";
        nme.innerHTML = "Youm-e-Ashura";
        image.src = "./img/22.jpg";
    }
    else if (s == "INDEPENDENCE DAY") {
        passedOrUpcoming();
        date.value = "2023-08-14";
        nme.innerHTML = "Independence Day";
        image.src = "./img/13.png";
    }
    else if (s == "DEFENCE DAY") {
        passedOrUpcoming();
        date.value = "2023-09-06";
        nme.innerHTML = "Defence Day";
        image.src = "./img/14.jpg";
    }
    else if (s == "BIRTHDAY" || s == "SHARJEEL BIRTHDAY" || s == "MY BIRTHDAY") {
        passedOrUpcoming();
        date.value = "2023-09-20";
        nme.innerHTML = "My Birthday";
        image.src = "./img/15.jpg";
    }
    else if (s == "EID-MILAD-UN-NABI"  || s == "EID MILAD UN NABI") {
        passedOrUpcoming();
        date.value = "2023-09-28";
        nme.innerHTML = "Eid - milad - un - Nabi";
        image.src = "./img/16.jpg";
    }
    else if (s == "IQBAL DAY"  || s == "ALLAMA IQBAL DAY" || s == "ALLAMA IQBAL" || s == "IQBAL" || s == "ALLAMA-IQBAL" || s == "ALLAMA-IQBAL-DAY") {
        passedOrUpcoming();
        date.value = "2023-11-09";
        nme.innerHTML = "Iqbal Day";
        image.src = "./img/17.jpg";
    }
    else if (s == "CHILDREN DAY") {
        passedOrUpcoming();
        date.value = "2023-11-14";
        nme.innerHTML = "Children's Day";
        image.src = "./img/18.webp";
    }
    else if (s == "QUAID DAY" || s == "CHRISTMAS" || s == "QUAID-E-AZAM DAY" || s == "QUAID-E-AZAM" || s == "QUAID E AZAM") {
        passedOrUpcoming();
        date.value = "2023-12-25";
        nme.innerHTML = "Quaid Day / " + "<br>" + "Christmas";
        image.src = "./img/19.jpg";
    }
    else {
        alert("Festival You Are Looking Is Not In The List")
        location.reload();
    }
}