let guessEmail;
let guessName;
let guessFaName;
let textFile = "text.txt";
let language = "English";

function popUp(){
    window.open("emailPopUp.html");
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


