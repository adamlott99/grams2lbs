import { gramsToPoundsOunces, poundsOuncesToGrams, PoundsOunces } from './logic.js';

function updatePoundsOuncesOutput() {
    const poundsOunces = gramsToPoundsOunces(gramsInput.value ? gramsInput.value : 0);
    poundsOuncesOutput.textContent = `${poundsOunces.pounds} lbs ${poundsOunces.ounces.toFixed(1)} oz`;
}

function updateGramsOutput() {
    const poundsOunces = new PoundsOunces(poundsInput.value, ouncesInput.value);
    const grams = poundsOuncesToGrams(poundsOunces);
    gramsOutput.textContent = `${grams.toFixed(1)} grams`;
}

function updateGramsChangeOutput() {
    if (!newGramsInput.value || !oldGramsInput.value) {
        return null;
    }
    const relChange = (newGramsInput.value - oldGramsInput.value) / oldGramsInput.value;
    gramsChangeOutput.textContent = `${(100 * relChange).toFixed(1)}% change`;
}

function updatePoundsChangeOutput() {
    if (
        (!oldPoundsInput.value && !oldOuncesInput.value) || (!newPoundsInput.value && !newOuncesInput.value)
    )
    {
        return null;
    }
    const oldPoundsOunces = new PoundsOunces(oldPoundsInput.value, oldOuncesInput.value);
    const oldGrams = poundsOuncesToGrams(oldPoundsOunces);
    const newPoundsOunces = new PoundsOunces(newPoundsInput.value, newOuncesInput.value);
    const newGrams = poundsOuncesToGrams(newPoundsOunces);
    const relChange = (newGrams - oldGrams) / oldGrams;
    poundsChangeOutput.textContent = `${(100 * relChange).toFixed(1)}% change`;
}

const gramsInput = document.getElementById('gramsInput');
const poundsOuncesOutput = document.getElementById('poundsOuncesOutput');
gramsInput.addEventListener("input", updatePoundsOuncesOutput);

const poundsInput = document.getElementById('poundsInput');
const ouncesInput = document.getElementById('ouncesInput');
const gramsOutput = document.getElementById('gramsOutput');
poundsInput.addEventListener("input", updateGramsOutput);
ouncesInput.addEventListener("input", updateGramsOutput);

const oldGramsInput = document.getElementById('oldGramsInput');
const newGramsInput = document.getElementById('newGramsInput');
const gramsChangeOutput = document.getElementById('gramsChangeOutput');
oldGramsInput.addEventListener("input", updateGramsChangeOutput);
newGramsInput.addEventListener("input", updateGramsChangeOutput);

const oldPoundsInput = document.getElementById('oldPoundsInput');
const oldOuncesInput = document.getElementById('oldOuncesInput');
const newPoundsInput = document.getElementById('newPoundsInput');
const newOuncesInput = document.getElementById('newOuncesInput');
const poundsChangeOutput = document.getElementById('poundsChangeOutput');
oldPoundsInput.addEventListener("input", updatePoundsChangeOutput);
oldOuncesInput.addEventListener("input", updatePoundsChangeOutput);
newPoundsInput.addEventListener("input", updatePoundsChangeOutput);
newOuncesInput.addEventListener("input", updatePoundsChangeOutput);