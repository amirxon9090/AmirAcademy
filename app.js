function yoshi(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

function addStudent() {
    const ism = document.getElementById("fname").value;
    const kurs = document.getElementById("kurs").value;
    const tugilgan = document.getElementById("tugilgan").value;
    const telefon = document.getElementById("telefon").value;
    const kun = document.getElementById("kun").value;
    const jins = document.getElementById("jins").value;
    const vaqt = document.getElementById("vaqt").value;




    const yosh = yoshi(tugilgan);

    const container = document.getElementById("students");

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        ${ism}<br><br>
         Yoshi: ${yosh}<br>
         Jins: ${jins}<br>
         Telefon: ${telefon}<br>
         Kurs: ${kurs}<br>
         Kun: ${kun}<br>
         kelish vaqti: ${vaqt}<br>
     
    
       
      
       
   

        
        <button class="delete-btn">O'chirish</button>
    `;

    card.querySelector("button").onclick = function () {
        card.remove();
    };

    container.appendChild(card);

    document.getElementById("fname").value = "";
    document.getElementById("kurs").value = "";
    document.getElementById("tugilgan").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("jins").value = "";
    document.getElementById("vaqt").value = "";

}