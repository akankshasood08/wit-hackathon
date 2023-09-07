let therapists = {
    data:[{
            Name: "Dylan Nicholls",
            Phone: "0401 123 424",
            Email: "DylanNicholls@gmail.com",
            Skills: ["Online ", "In Person ", "Male ", "Addiction "]
        },
        {
            Name: "Mandy Halabi",
            Phone: "0426 203 126",
            Email: "MandyH@gmail.com",
            Skills: ["In Person ", "Female "]
        },
        {
            Name: "Lila Juliette Pesa",
            Phone: "0421 594 217",
            Email: "LilaJP@gmail.com",
            Skills: ["Online ", "Female ", "Youth ", "Anxiety "]
        },
        {
            Name: "Cathy Freeman",
            Phone: "0468 496 216",
            Email: "CFreeman@gmail.com",
            Skills: ["Online ", "In Person ", "Addiction "]
        },
    ],
};

for (let i of therapists.data) {
    let card = document.createElement("div");
    card.classList.add("card", "i.Skills");

    let container = document.createElement("div");
    container.classList.add("container")

    let name = document.createElement("div");
    name.classList.add("Name");
    name.innerText = i.Name.toUpperCase();
    container.appendChild(name);

    card.appendChild(container);
    document.getElementById("therapists").appendChild(card)
}