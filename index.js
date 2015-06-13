var World = require('./world');
var Cell = require('./cell');

var world = new World(5, 5);
world.addCells([
    new Cell(2, 1), new Cell(2,2), new Cell(2,3) 
]).out();

var number = 5;
while(number--){
    world.grow().out();
}
