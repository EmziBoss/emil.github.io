document.getElementById("generateButton").addEventListener("click", generateIdea);

function generateIdea() {
    const meat = ["Kyllinglår", "Kyllingvinger", "Kyllingkjøttdeig", "Kyllingfilet", "Svinefilet", "Svinestek", "Svinekjøttdeig", "Svinekoteletter", "Biff", "Oksekjøttdeig", "Grytekjøtt", "Biffstrimler", "Lammekoteletter", "Lammestek", "Lammebiff", "Laks", "Sei"];
    const vegetables = ["Gulrøtter", "Brokkoli", "Blomkål"];
    const pasta = ["Spagetti", "Penne", "Fusilli", "Makaroni", "Tagliatelle", "Nudler", "Orzo", "Linguine", "Fettuccine", "Kokte poteter", "Stekte poteter", "Ovnsbakte poteter", "Potetmos", "Pommes frites", "Hasselbakte poteter", "Fløtegrat", "Ris"];
    const special = ["Pizza", "Burger", "Spagetti og kjøttdeig", "Taco", "Nachos", "Pitabrød", "Fish and Chips"];

    if (Math.random() < 0.20) {
        const selectedSpecial = special[Math.floor(Math.random() * special.length)];
        const idea = `Ta noe lett idag. Kjør ${selectedSpecial}?`;
        updateDinnerIdea(idea);
    } else {
        const selectedMeat = meat[Math.floor(Math.random() * meat.length)];
        const selectedPasta = pasta[Math.floor(Math.random() * pasta.length)];
        let selectedVegetables = [];
        let numberOfVegetables = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3

        while (selectedVegetables.length < numberOfVegetables) {
            let veggie = vegetables[Math.floor(Math.random() * vegetables.length)];
            if (!selectedVegetables.includes(veggie)) {
                selectedVegetables.push(veggie);
            }
        }

        const vegetableText = "med " + selectedVegetables.join(" og ");
        const idea = `Hva med ${selectedMeat} ${vegetableText} og ${selectedPasta}?`;
        updateDinnerIdea(idea);
    }
}

function updateDinnerIdea(idea) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[new Date().getDay()];
    const dayElement = document.getElementById(currentDay);

    // Only update the span with the dinner idea
    dayElement.querySelector(".dinner-idea").textContent = idea;
}
