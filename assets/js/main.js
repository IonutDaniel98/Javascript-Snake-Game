const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let primary = "#AF1E2D";
let secondary = "#FFCE00"

const grid = 32;
let count = 0;

let snake = {
    x: grid * 5,
    y: grid * 5,

    vx: grid,
    vy: 0,

    cells: [],

    maxCells: 4
};

let apple = {
    x: grid * 10,
    y: grid * 10
};
