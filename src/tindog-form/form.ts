const form = document.getElementById("form");

form.addEventListener("submit", event => {
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
    const printName = (document.getElementById("doggoName") as HTMLInputElement).value;
    return console.log(`Imię: ${printName}`);
}

function printGenderResult() {
    const radioGender = document.getElementsByName("gender");

    for (let i = 0; i < radioGender.length; i++) {
        if ((radioGender[i] as HTMLInputElement).checked) {
            return console.log(`Płeć: ${(radioGender[i] as HTMLInputElement).nextElementSibling.innerHTML}`);
        }
    }
}

function printEmailResult() {
    let printEmail = (document.getElementById("email") as HTMLInputElement).value;
    return console.log(`Email: ${printEmail}`);
}

function printBirthday() {
    let printDate = (document.getElementById("birthday") as HTMLInputElement).value;
    return console.log(`Birthday: ${printDate}`);
}

function printPasswordResult() {
    let printPassword = (document.getElementById("password") as HTMLInputElement).value;
    return console.log(`Password: ${printPassword}`);
}

function printPhotoInfo() {
    let printPhoto = (document.getElementById("photo") as HTMLInputElement).value;
    return console.log(`Photo Information: ${printPhoto}`);
}

function printHobbyResult() {
    const hobbyInputs = document.getElementsByName("hobby");

    const hobbyArray = [];

    for (let i = 0; i < hobbyInputs.length; i++) {
        if ((hobbyInputs[i] as HTMLInputElement).checked) {
            hobbyArray.push((hobbyInputs[i] as HTMLInputElement).nextElementSibling.innerHTML);

        }
    }
    return console.log(`Hobby: ${hobbyArray}`);
}

function printBreedResult() {
    const selectBreed = document.getElementsByTagName("option");

    for (let i = 0; i < selectBreed.length; i++) {
        if ((selectBreed[i] as HTMLOptionElement).selected) {
            return console.log(`Rasa: ${(selectBreed[i] as HTMLOptionElement).innerText}`);
        }
    }
}

