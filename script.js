document.getElementById("generateButton").addEventListener("click", generateIdea);
document.addEventListener("DOMContentLoaded", updateWeekNumber);

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

function updateWeekNumber() {
    const currentWeekNumber = getCurrentWeekNumber();
    document.getElementById("weekNumber").textContent = `Uke ${currentWeekNumber}`;
}

function getCurrentWeekNumber() {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

function updateDinnerIdea(idea) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const norwegianDays = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'];
    const currentDayIndex = new Date().getDay();
    const currentDayNorwegian = norwegianDays[currentDayIndex];
    
    // Update the span with the dinner idea for the current Norwegian day
    const dayElement = document.getElementById(currentDayNorwegian).querySelector(".dinner-idea");
    dayElement.textContent = idea;
}
