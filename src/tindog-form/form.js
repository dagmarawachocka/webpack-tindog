var form = document.getElementById("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    printNameResults();
    printGenderResult();
    printEmailResult();
    printBirthday();
    printPasswordResult();
    printPhotoInfo();
    printHobbyResult();
    printBreedResult();
});
function printNameResults() {
    var printName = document.getElementById("doggoName").value;
    return console.log("Imi\u0119: ".concat(printName));
}
function printGenderResult() {
    var radioGender = document.getElementsByName("gender");
    for (var i = 0; i < radioGender.length; i++) {
        if (radioGender[i].checked) {
            return console.log("P\u0142e\u0107: ".concat(radioGender[i].nextElementSibling.innerHTML));
        }
    }
}
function printEmailResult() {
    var printEmail = document.getElementById("email").value;
    return console.log("Email: ".concat(printEmail));
}
function printBirthday() {
    var printDate = document.getElementById("birthday").value;
    return console.log("Birthday: ".concat(printDate));
}
function printPasswordResult() {
    var printPassword = document.getElementById("password").value;
    return console.log("Password: ".concat(printPassword));
}
function printPhotoInfo() {
    var printPhoto = document.getElementById("photo").value;
    return console.log("Photo Information: ".concat(printPhoto));
}
function printHobbyResult() {
    var hobbyInputs = document.getElementsByName("hobby");
    var hobbyArray = [];
    for (var i = 0; i < hobbyInputs.length; i++) {
        if (hobbyInputs[i].checked) {
            hobbyArray.push(hobbyInputs[i].nextElementSibling.innerHTML);
        }
    }
    return console.log("Hobby: ".concat(hobbyArray));
}
function printBreedResult() {
    var selectBreed = document.getElementsByTagName("option");
    for (var i = 0; i < selectBreed.length; i++) {
        if (selectBreed[i].selected) {
            return console.log("Rasa: ".concat(selectBreed[i].innerText));
        }
    }
}
