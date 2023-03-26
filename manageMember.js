let memberList = ["Autumn", "Dai", "Hien", "Henry", "Emma", "Jason"];
let card = ["Master Card", "Visa Card", "American Express", "Napas", "Napas", "Master Card"];
let images = ["./image/1.png", "./image/2.png", "./image/3.png", "./image/4.png", "./image/5.png", "./image/6.png"];
let imgTemp;
let imgTemp_1;
//Shown all member
function showAllMember() {
    let content = ""
    for (let i = 0; i < memberList.length; i++) {
        content += "<tr>" +
            "<td class ='inputMember'>" + memberList[i] + "</td>" +
            "<td class ='imageMember'><img src='" + images[i] + "'></td>" +
            "<td class ='cardMember'>" + card[i] + "</td>" +
            "<td><button onclick ='editMember(" + i + ")'>Edit</button> <button onclick = 'delMember(" + i + ")'>Delete</button></td>" +
            "</tr>"
    }
    document.getElementById("member").innerHTML = content;
}
//All members are shown including newest one.
showAllMember();

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
    let newMember = document.getElementById("newMember").value;
    let cardMember = document.getElementById("cardMember").value;
    let imgMember = document.getElementById('image').getAttribute('src');
    if (newMember == '') {
        document.getElementById("errorName").style.display = "block";
    } else if (newMember !== '') {
        card.push(cardMember);
        memberList.push(newMember);
        images.push(imgMember);
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
            "<td><button onclick ='editMember(" + i + ")'>Edit</button> <button onclick = 'delMember(" + i + ")'>Delete</button></td>" +
            "</tr>"
    }
    document.getElementById("member").innerHTML = content;
}

// Edit member: name && photo - can not edit card member
// Check array index
let editCheck = true; // to edit on the same row
function editMember(index) {
    let changeName = document.getElementsByClassName('inputMember')[index].innerHTML;
    if (changeName == memberList[index] && editCheck == true) {
        document.getElementsByClassName('inputMember')[index].innerHTML = '<input type="text"  id="changeNameMember" value="' + changeName + '">';
        document.getElementsByClassName('imageMember')[index].innerHTML = '<input type="file"  id="changeImageMember" onChange="chooseFileChange(this)" >';
        editCheck = false;
    }
    if (changeName != memberList[index] && editCheck == false) {
        memberList[index] = document.getElementById('changeNameMember').value;
        document.getElementsByClassName('inputMember')[index].innerHTML = memberList[index];
        images[index] = document.getElementById('changeImageMember').value;
        document.getElementsByClassName('imageMember')[index].innerHTML = images[index];
        images[index] = imgTemp;
        editCheck = true;
        showAllMember();
    }
}

//Upload changed photo
function chooseFileChange(fileInput) {
    if (fileInput.files && fileInput.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            imgTemp = e.target.result;
        }
        reader.readAsDataURL(fileInput.files[0]);
        console.log(fileInput.files[0])
    }
}

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