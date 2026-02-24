function yoshi(birthDate){
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

function addStudent(){
    const ism = document.getElementById("fname").value;
    const familya = document.getElementById("lname").value;
    const kurs = document.getElementById("kurs").value;
    const tugilgan = document.getElementById("tugilgan").value;
    const telefon = document.getElementById("telefon").value;
    const kun = document.getElementById("kun").value;

  

    const yosh = yoshi(tugilgan);

    const container = document.getElementById("students");

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <strong>${ism} ${familya}</strong><br><br>
        Kurs: ${kurs}<br>
        Yoshi: ${yosh}<br>
        Telefon: ${telefon}<br>
        Kun: ${kun}
        <button class="delete-btn">O'chirish</button>
    `;

    card.querySelector("button").onclick = function(){
        card.remove();
    };

    container.appendChild(card);

    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("kurs").value="";
    document.getElementById("tugilgan").value="";
    document.getElementById("telefon").value="";
}