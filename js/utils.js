// Delay animation
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Generate random integer
export function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}