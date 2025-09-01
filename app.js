import { gramsToPoundsOunces } from './logic.js';

const gramsInput = document.getElementById('gramsInput');
const poundsOuncesOutput = document.getElementById('poundsOuncesOutput');
gramsInput.addEventListener("input", () => {
    const poundsOunces = gramsToPoundsOunces(gramsInput.value);
    poundsOuncesOutput.textContent = `${poundsOunces.pounds} lbs ${poundsOunces.ounces.toFixed(1)} oz`;
});