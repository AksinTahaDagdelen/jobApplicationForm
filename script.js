//SİLME
function delSkills() {
  const delSkills = document.getElementById("skill-table");
  while (delSkills.firstChild) {
    delSkills.removeChild(delSkills.lastChild);
  }
}
function delLang() {
  const delLange = document.getElementById("lang-table");
  while (delLange.firstChild) {
    delLange.removeChild(delLange.lastChild);
  }
}
function delRef() {
  const delRef = document.getElementById("ref-table");
  while (delRef.firstChild) {
    delRef.removeChild(delRef.lastChild);
  }
}
function delPro() {
  const delPro = document.getElementById("proje-table");
  while (delPro.firstChild) {
    delPro.removeChild(delPro.lastChild);
  }
}
function delSer() {
  const delSer = document.getElementById("ser-table");
  while (delSer.firstChild) {
    delSer.removeChild(delSer.lastChild);
  }
}
function delWork() {
  const delWork = document.getElementById("work-table");
  while (delWork.firstChild) {
    delWork.removeChild(delWork.lastChild);
  }
}
function delEd() {
  const delEd = document.getElementById("ed-table");
  while (delEd.firstChild) {
    delEd.removeChild(delEd.lastChild);
  }
}

//DİLLER SCRIPT
function addLanguage() {
  const langName1 = document.getElementById("person-lang");
  const langLevel1 = document.getElementById("person-lang-level");
  var language = document.getElementById("person-lang").value;
  var level = document.getElementById("person-lang-level").value;
  var langTable = document.getElementById("lang-table");

  if (language != "" && level != "") {
    langTable.innerHTML += `
          <tr>
            <td>${language}</td>
            <td>${level} </td>
          </tr>
          `;

    document.getElementById("person-lang").value = "";
    document.getElementById("person-lang-level").value = "";
  } else {
    window.alert("Lütfen Boş Alan Bırakmayınız");
  }
}

// REFEREANSLAR SCRIPT
function addReference() {
  const refName1 = document.getElementById("ref-name");
  const refSurname1 = document.getElementById("ref-surname");
  const refWork1 = document.getElementById("ref-work");
  const refContact1 = document.getElementById("ref-contact");
  const newTr = document.getElementById("ref-tr");

  if (
    refName1.value != "" &&
    refSurname1.value != "" &&
    refWork1.value != "" &&
    refContact1.value != ""
  ) {
    const refName = document.getElementById("ref-name").value;
    const refSurname = document.getElementById("ref-surname").value;
    const refWork = document.getElementById("ref-work").value;
    const refContact = document.getElementById("ref-contact").value;

    const refNameUl = document.getElementById("ref-table");

    const newTr = document.createElement("tr");
    // TR YE İD VERME
    newTr.setAttribute("id", "ref-tr");

    refNameUl.innerHTML += `
          <tr>
            <td>${refName}</td>
            <td>${refSurname} </td>
            <td>${refWork} </td>
            <td>${refContact} </td>
          </tr>
          `;

    refName1.value = "";
    refSurname1.value = "";
    refWork1.value = "";
    refContact1.value = "";
  } else {
    window.alert("Boş Alan Bırakmayınız");
  }
}

// EĞİTİM SCRIPT
function addEducation() {
  const edValue1 = document.getElementById("ed-name");
  const edDate1 = document.getElementById("ed-date");
  const edEndDate1 = document.getElementById("ed-end-date");
  const edSection1 = document.getElementById("ed-section");

  const edValue = document.getElementById("ed-name").value;
  const edDate = document.getElementById("ed-date").value;
  const edEndDate = document.getElementById("ed-end-date").value;
  const edSection = document.getElementById("ed-section").value;

  if (edValue1.value != "" && edDate1.value != "" && edSection1.value != "") {
    const edTableUl = document.getElementById("ed-table");
    const newTrEd = document.createElement("tr");
    newTrEd.setAttribute("id", "ed-tr");

    edTableUl.innerHTML += `
          <tr>
            <td>${edValue}</td>
            <td>${edDate} </td>
            <td>${edEndDate} </td>
            <td>${edSection} </td>

          </tr>
          `;

    edValue1.value = "";
    edDate1.value = "";
    edEndDate1.value = "";
    edSection1.value = "";
  } else {
    window.alert("Boş Alan Bırakmayınız");
  }
}
//BECERİLER SCRIPT
function addSkills() {
  const skills1 = document.getElementById("person-skills");
  var skills = document.getElementById("person-skills").value;
  var skillsTable = document.getElementById("skill-table");

  if (skills != "") {
    skillsTable.innerHTML += `
          <tr id="foo">
            <td>${skills}</td>

          </tr>
          `;

    document.getElementById("person-skills").value = "";
  } else {
    window.alert("Lütfen Boş Alan Bırakmayınız");
  }
}

//İŞ TECRÜBE EKLEME SCRIPT
function addWork() {
  const workName1 = document.getElementById("work-name");
  const workDate1 = document.getElementById("work-date");
  const workEndDate1 = document.getElementById("work-end-date");
  const workPosition1 = document.getElementById("work-position");
  const workDesc1 = document.getElementById("work-desc");
  const workTable = document.getElementById("work-table");

  const workName = document.getElementById("work-name").value;
  const workDate = document.getElementById("work-date").value;
  const workEndDate = document.getElementById("work-end-date").value;
  const workPosition = document.getElementById("work-position").value;
  const workDesc = document.getElementById("work-desc").value;

  if (
    workName1.value != "" &&
    workDate1.value != "" &&
    workEndDate1.value != "" &&
    workPosition1.value != "" &&
    workDesc1.value != ""
  ) {
    workTable.innerHTML += `
          <tr>
            <td>${workName}</td>
            <td>${workDate} </td>
            <td>${workEndDate} </td>
            <td>${workPosition} </td>
            <td>${workDesc} </td>

          </tr>
          `;

    const workTableTr = document.createElement("tr");
    workTableTr.setAttribute("id", "work-tr");

    workName1.value = "";
    workDate1.value = "";
    workEndDate1.value = "";
    workPosition1.value = "";
    workDesc1.value = "";
  } else {
    window.alert("Boş Alan Bırakmayınız");
  }
}
// PROJE EKLEME SCRIPT
function addProject() {
  const proName1 = document.getElementById("proje-name");
  const proDate1 = document.getElementById("proje-date");
  const proDesc1 = document.getElementById("proje-desc");

  const proName = document.getElementById("proje-name").value;
  const proDate = document.getElementById("proje-date").value;
  const proDesc = document.getElementById("proje-desc").value;
  const projeTable = document.getElementById("proje-table");

  if (proName1.value != "" && proDate1.value != "" && proDesc1.value != "") {
    projeTable.innerHTML += `
          <tr>
            <td>${proName}</td>
            <td>${proDate} </td>
            <td>${proDesc} </td>
       

          </tr>
          `;

    proName1.value = "";
    proDate1.value = "";
    proDesc1.value = "";
  } else {
    window.alert("Boş Alan Bırakmayınız");
  }
}
//SERTİFİKA EKLEME  SCRIPT
function addSer() {
  const serName1 = document.getElementById("ser-name");
  const serDate1 = document.getElementById("ser-date");
  const serOrg1 = document.getElementById("ser-org");
  const serDesc1 = document.getElementById("ser-desc");

  const serName = document.getElementById("ser-name").value;
  const serDate = document.getElementById("ser-date").value;
  const serOrg = document.getElementById("ser-org").value;
  const serDesc = document.getElementById("ser-desc").value;
  const serTable = document.getElementById("ser-table");

  if (
    serName1.value != "" &&
    serDate1.value != "" &&
    serOrg1.value != "" &&
    serDesc1.value != ""
  ) {
    serTable.innerHTML += `
          <tr>
            <td>${serName}</td>
            <td>${serDate} </td>
            <td>${serOrg} </td>
            <td>${serDesc} </td>
       

          </tr>
          `;

    serName1.value = "";
    serDate1.value = "";
    serOrg1.value = "";
    serDesc1.value = "";
  } else {
    window.alert("Boş Alan Bırakmayınız");
  }
}

//FOTOĞRAF EKLEME SCRIPT
window.addEventListener("load", function () {
  document
    .querySelector('input[type="file"]')
    .addEventListener("change", function () {
      if (this.files && this.files[0]) {
        var img = document.getElementById("image");
        img.onload = () => {
          URL.revokeObjectURL(img.src);
        };

        img.style.width = "250px";

        img.src = URL.createObjectURL(this.files[0]);
      }
    });
});

//TAMAMLA BUTONU
function finish() {
  const perName1 = document.getElementById("person-name");
  const perSurname1 = document.getElementById("person-surname");
  const perBday1 = document.getElementById("person-birthday");
  const perEmail1 = document.getElementById("person-email");
  const perPhone1 = document.getElementById("person-phone");
  const perPlace1 = document.getElementById("person-place");
  const perPhoto1 = document.getElementById("person-photo");
  const perImg = document.getElementById("person-image");
  const perTable = document.getElementById("person-table");

  const perName = document.getElementById("person-name").value;
  const perSurname = document.getElementById("person-surname").value;
  const perBday = document.getElementById("person-birthday").value;
  const perEmail = document.getElementById("person-email").value;
  const perPhone = document.getElementById("person-phone").value;
  const perPlace = document.getElementById("person-place").value;
  const perPhoto = document.getElementById("person-photo").value;

  if (
    perName != "" &&
    perSurname != "" &&
    perBday != "" &&
    perEmail != "" &&
    perPhone != "" &&
    perPlace != ""
  ) {
    var perNameTd = document.createElement("td");
    var perSurnameTd = document.createElement("td");
    var perBdayTd = document.createElement("td");
    var perEmailTd = document.createElement("td");
    var perPhoneTd = document.createElement("td");
    var perPlaceTd = document.createElement("td");

    var perTr = document.createElement("tr");

    perTr.appendChild(perNameTd);
    perTr.appendChild(perSurnameTd);
    perTr.appendChild(perBdayTd);
    perTr.appendChild(perEmailTd);
    perTr.appendChild(perPhoneTd);
    perTr.appendChild(perPlaceTd);

    perTable.appendChild(perTr);

    perNameTd.innerHTML = perName;
    perSurnameTd.innerHTML = perSurname;
    perBdayTd.innerHTML = perBday;
    perEmailTd.innerHTML = perEmail;
    perPhoneTd.innerHTML = perPhone;
    perPlaceTd.innerHTML = perPlace;

    const close = document.getElementById("close-div-one");
    close.style.display = "none";
    const close1 = document.getElementById("close-div-two");
    close1.style.display = "none";
    const close2 = document.getElementById("close-div-three");
    close2.style.display = "none";
    const close3 = document.getElementById("close-div-four");
    close3.style.display = "none";
    const close4 = document.getElementById("close-div-five");
    close4.style.display = "none";
    const close5 = document.getElementById("close-div-six");
    close5.style.display = "none";
    const close6 = document.getElementById("close-div-seven");
    close6.style.display = "none";

    window.alert(
      "ADIM 1 : Açılan Pencereden Hedef kısmından PDF olarak kaydet seçeneğine tıklayın.\n ADIM 2: İndirdiğiniz .PDF uzantılı dosyayı açılan pencerede belirtilen maile yollayınız"
    );

    const mailSend = document.getElementById("mailSend");
    mailSend.style.visibility = "hidden";

    window.print();
  } else {
    window.alert("Lütfen Boş Alan Bırakmayınız");
  }
}
