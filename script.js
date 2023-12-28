document.getElementById("generateButton").addEventListener("click", generateIdea);

function generateIdea() {
    const meat = ["Kyllinglår", "Kyllingvinger", "Kyllingkjøttdeig", "Kyllingfilet", "Svinefilet", "Svinestek", "Svinekjøttdeig", "Svinekoteletter", "Biff", "Oksekjøttdeig", "Grytekjøtt", "Biffstrimler", "Lammekoteletter", "Lammestek", "Lammebiff", "Laks", "Sei"];
    const vegetables = ["Gulrøtter", "Brokkoli", "Blomkål"];
    const pasta = ["Spagetti", "Penne", "Fusilli", "Makaroni", "Tagliatelle", "Nudler", "Orzo", "Linguine", "Fettuccine", "Kokte poteter", "Stekte poteter", "Ovnsbakte poteter", "Potetmos", "Pommes frites", "Hasselbakte poteter", "Fløtegrat", "Ris"];
    const special = ["Pizza", "Burger", "Sushi", "Taco", "Lasagne"];

    if (Math.random() < 0.20) {
        // 20% chance to pick from the special category
        const selectedSpecial = special[Math.floor(Math.random() * special.length)];
        const idea = `Ta noe lett idag. Kjør ${selectedSpecial}?`;
        document.getElementById("dinnerIdea").textContent = idea;
    } else {
        // Regular selection process
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
        document.getElementById("dinnerIdea").textContent = idea;
    }
}
