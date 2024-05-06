let guessEmail;
let guessName;
let guessFaName;
let textFile = "text.json";
let language = "English";

function popUp(string){
    document.getElementById(string).style.visibility = "visible";
}

function exitPopUp(string){
    document.getElementById(string).style.visibility = "hidden";
}

function openGit(){
    window.open("https://github.com/ArtaliaVN")
}

function downloadCV(){
    switch(language){
        case "Vietnamese":
            window.open("image/NguyenMinhThong_CV_VN.pdf"); 
            break;
        case "English":
            window.open("image/NguyenMinhThong_CV_ENG.pdf"); 
            break;
    }
}

async function setLanguage(input, index){
    const response = await fetch("text.json");
    const data = await response.json();
    return data.language[input][input];
}


