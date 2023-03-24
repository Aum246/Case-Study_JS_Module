let memberList = ["Autumn", "Jason", "Winny", "Kayden", "Emma", "Dai"];
let card = ["Master Card", "Visa Card", "American Express", "Napass", "Napass", "Master Card"];
let images = ["./image/1.png", "./image/2.png", "./image/3.png", "./image/4.png", "./image/5.png", "./image/6.png"];

//Shown all member
function showAllMember() {
    let content = ""
    for (let i = 0; i < memberList.length; i++) {
        content += "<tr>" +
            "<td class ='inputMember'>" + memberList[i] + "</td>" +
            "<td class ='imageMember'><img src='" + images[i] + "'></td>" +
            "<td class ='cardMember'>" + card[i] + "</td>" +
            "<td><button onclick = 'delMember(" + i + ")'>Delete</button></td>" +
            "</tr>"
    }
    document.getElementById("member").innerHTML = content;
}
//All members are shown including newest one.
showAllMember();

// Delete member
// Check array index 
function delMember(index) {
    let check = confirm("Are you sure to delete this?");
    if (check == true) {
        memberList.splice(index, 1);
        card.splice(index, 1);
        images.splice(index, 1);
        showAllMember();
    }
}

// Search member by name
// Uppercase and Lowercase are different.
function searchMember() {
    let memberName = document.getElementById("newMember").value;
    var memberSearch = [];
    var cardSearch = [];
    var imagesSearch = [];
    if (memberName === "" || memberName === null || memberName === undefined) return showAllMember();
    for (let i = 0; i < memberList.length; i++) {
        if (memberList[i].includes(memberName)) {
            memberSearch.push(memberList[i]);
            cardSearch.push(card[i]);
            imagesSearch.push(images[i]);
        }
    }
    let content = "";
    for (let i = 0; i < memberSearch.length; i++) {
        content += "<tr>" +
            "<td>" + memberSearch[i] + "</td>" +
            "<td><img src='" + imagesSearch[i] + "'></td>" +
            "<td>" + cardSearch[i] + "</td>" +
            "<td><button onclick = 'delMember(" + i + ")'>Delete</button></td>" +
            "</tr>"
    }
    document.getElementById("member").innerHTML = content;
}

//Upload photo
function chooseFileCreate(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('image').setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(fileInput.files[0]);
    }
}

// Create a new member
function createNewMember() {
}