let therapists = {
    data:[{
            Name: "Dylan Nicholls",
            Phone: "0401 123 424",
            Email: "DylanNicholls@gmail.com",
            Skills: "Addiction",
            Access: "Online, In Person"
        },
        {
            Name: "Mandy Halabi",
            Phone: "0426 203 126",
            Email: "MandyH@gmail.com",
            Skills: "Female",
            Access: "In Person"
        },
        {
            Name: "Lila Juliette Pesa",
            Phone: "0421 594 217",
            Email: "LilaJP@gmail.com",
            Skills: "Anxiety",
            Access: "Online"
        },
        {
            Name: "Cathy Freeman",
            Phone: "0468 496 216",
            Email: "CFreeman@gmail.com",
            Skills: "Addiction",
            Access: "Online"
        },
    ],
};

for (let i of therapists.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.Skills, "hide");

    let container = document.createElement("div");
    container.classList.add("container")

    let name = document.createElement("div");
    name.classList.add("Name");
    name.innerText = i.Name.toUpperCase();
    container.appendChild(name);

    let phone = document.createElement("div");
    phone.classList.add("Phone");
    phone.innerText = i.Phone;
    container.appendChild(phone)

    let email = document.createElement("Email");
    email.classList.add("Email");
    email.innerText = i.Email + '\n';
    container.appendChild(email);

    // let skills = document.createElement("Skills");
    // skills.classList.add("Skills");
    // skills.innerText = i.Skills + '\n';
    // container.appendChild(skills);

    let access = document.createElement("Access");
    access.classList.add("Access");
    access.innerText = i.Access;
    container.appendChild(access);

    card.appendChild(container);
    document.getElementById("therapists").appendChild(card)
}

function filterSkills(value) {
    let buttons = document.querySelectorAll("button-value");

    buttons.forEach(button => {
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    let elements = document.querySelectorAll(".card");

    elements.forEach((element) => {
        if (value == "All") {
            element.classList.remove("hide");
        } 
        else {
            if(element.classList.contains(value)) {
            // if (element.classList.toUpperCase().includes(value.toUpperCase())) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });
}

window.onload = () => {
    filterSkills("All")
}