const distanceWalkedMilesArr = [140, 153, 161, 153, 128, 148];

const conversionFactorMilesToKm = 1.6;

const distanceWalkedKmsArr = distanceWalkedMilesArr.map((distanceMiles, index) => `Month:${index + 1}: ${distanceMiles * conversionFactorMilesToKm} Km`);

console.log(distanceWalkedKmsArr);
