let therapists = {
    data:[{
            Name: "Dylan Nicholls",
            Phone: "0401 123 424",
            Email: "DNicholls@gmail.com",
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
        {
            Name: "Patty Mills",
            Phone: "0428 575 499",
            Email: "PMills@gmail.com",
            Skills: "PTSD",
            Access: "In Person"
        },
        {
            Name: "Stan Grant",
            Phone: "0488 172 489",
            Email: "SGrant@gmail.com",
            Skills: "Youth",
            Access: "Online, In Person",
        },
        {
            Name: "Brooke Boney",
            Phone: "0412 475 992",
            Email: "BBoney@gmail.com",
            Skills: "Depression",
            Access: "Online"
        },
        {
            Name: "Bronwyn Bancroft",
            Phone: "0488 287 577",
            Email: "BBancroft@gmail.com",
            Skills: "Domestic-Violence",
            Access: "In Person"
        },
        {
            Name: "David Gulpilil",
            Phone: "0482 587 309",
            Email: "DGulpilil@gmail.com",
            Skills: "Depression",
            Access: "Online"
        },
        {
            Name: "Casey Donovan",
            Phone: "0482 747 318",
            Email: "CDonovan@gmail.com",
            Skills: "PTSD",
            Access: "In Person"
        },
        {
            Name: "John Citizen",
            Phone: "0400 000 000",
            Email: "JCitizen@gmail.com",
            Skills: "PTSD",
            Access: "Online"
        },
        {
            Name: "Neville Bonner",
            Phone: "0423 858 402",
            Email: "NBonner@gmail.com",
            Skills: "Youth",
            Access: "Online"
        },
        {
            Name: "Adam Goodes",
            Phone: "0438 049 588",
            Email: "AGoodes@gmail.com",
            Skills: "Domestic-Violence",
            Access: "In Person"
        },
        {
            Name: "Brandon Walters",
            Phone: "0498 903 866",
            Email: "BWalters@gmail.com",
            Skills: "Anxiety",
            Access: "Online, In person"
        },
        {
            Name: "David Unaipon",
            Phone: "0492 774 126",
            Email: "DUnaipon@gmail.com",
            Skills: "Addiction",
            Access: "Online"
        },
        {
            Name: "Archie Roach",
            Phone: "0455 291 547",
            Email: "ARoach@gmail.com",
            Skills: "Depression",
            Access: "Online"
        },
        {
            Name: "Albert Namatjira",
            Phone: "0432 866 271",
            Email: "ANamatjira@gmail.com",
            Skills: "PTSD",
            Access: "Online"
        },
        {
            Name: "Ben Harradine",
            Phone: "0488 872 301",
            Email: "BHarradine@gmail.com",
            Skills: "Youth",
            Access: "In Person"
        }
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
    phone.innerText = "Phone: " + i.Phone;
    container.appendChild(phone)

    let email = document.createElement("Email");
    email.classList.add("Email");
    email.innerText = "Email: "+ i.Email + '\n';
    container.appendChild(email);

    // let skills = document.createElement("Skills");
    // skills.classList.add("Skills");
    // skills.innerText = i.Skills + '\n';
    // container.appendChild(skills);

    let access = document.createElement("Access");
    access.classList.add("Access");
    access.innerText = "Location: " + i.Access;
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