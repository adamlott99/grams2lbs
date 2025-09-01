import { gramsToPoundsOunces, poundsOuncesToGrams, PoundsOunces } from './logic.js';

function updatePoundsOuncesOutput() {
    const poundsOunces = gramsToPoundsOunces(gramsInput.value);
    poundsOuncesOutput.textContent = `${poundsOunces.pounds} lbs ${poundsOunces.ounces.toFixed(1)} oz`;
}

function updateGramsOutput() {
    const poundsOunces = new PoundsOunces(poundsInput.value, ouncesInput.value);
    const grams = poundsOuncesToGrams(poundsOunces);
    gramsOutput.textContent = `${grams.toFixed(1)} grams`;
}

const gramsInput = document.getElementById('gramsInput');
const poundsOuncesOutput = document.getElementById('poundsOuncesOutput');
gramsInput.addEventListener("input", updatePoundsOuncesOutput);

const poundsInput = document.getElementById('poundsInput');
const ouncesInput = document.getElementById('ouncesInput');
const gramsOutput = document.getElementById('gramsOutput');
poundsInput.addEventListener("input", updateGramsOutput);
ouncesInput.addEventListener("input", updateGramsOutput);