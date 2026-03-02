function yoshi(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    if (birth > today) return 0;

    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}


document.addEventListener("DOMContentLoaded", loadStudents);

function loadStudents() {
    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.forEach(student => createCard(student));
}

function addStudent() {
    const ism = document.getElementById("fname").value;
    const kurs = document.getElementById("kurs").value;
    const tugilgan = document.getElementById("tugilgan").value;
    const telefon = document.getElementById("telefon").value;
    const kun = document.getElementById("kun").value;
    const jins = document.getElementById("jins").value;
    const vaqt = document.getElementById("vaqt").value;

  

    const student = {
        id: Date.now(), 
        ism,
        kurs,
        tugilgan,
        telefon,
        kun,
        jins,
        vaqt
    };


    if (!ism || !kurs || !tugilgan || !telefon) { alert("Iltimos barcha maydonlarni to‘ldiring!"); return; }

   
    const students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    createCard(student);

    
    document.getElementById("fname").value = "";
    document.getElementById("kurs").value = "";
    document.getElementById("tugilgan").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("jins").value = "";
    document.getElementById("vaqt").value = "";
}

function createCard(student) {
    const container = document.getElementById("students");
    const yosh = yoshi(student.tugilgan);

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <strong>${student.ism}</strong>     /  /
        Yoshi: ${yosh}  /
        Jins: ${student.jins}  /
        Telefon: ${student.telefon}  /
        Kurs: ${student.kurs}  /
        Kun: ${student.kun}  /
        Kelish vaqti: ${student.vaqt}
        <button class="delete-btn">O'chirish</button>
    `;

   
    card.querySelector("button").onclick = function () {
        deleteStudent(student.id);
        card.remove();
    };

    container.appendChild(card);
}


function deleteStudent(id) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students = students.filter(student => student.id !== id);
    localStorage.setItem("students", JSON.stringify(students));
}


