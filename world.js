var Cell = require('./cell');

function World(rows, cols) {
    var self = this;
    
    self.rows = rows;
    self.cols = cols;

    self.map = {};
    self.cells = {};   
}

World.prototype.addCell = function(cell) {
    var self = this;
    cell.eachNeighbors(function(r, c){
        if (r < 0 || r >= self.rows || c < 0 || c >= self.cols) return;
        var k = JSON.stringify([r,c]);
        self.map[k] = self.map[k] || 0;
        self.map[k] ++;
    });
    self.cells[JSON.stringify([cell.row,cell.col])] = cell;
}

World.prototype.addCells = function(cells) {
    var self = this;
    cells.forEach(function(cell) {
        self.addCell(cell);
	});
    return self;
}

World.prototype.grow = function() {
    var self = this; 
    var map = self.map, cells = self.cells;
    self.map = {}; self.cells = {};
    Object.keys(map).forEach(function(k){
        if (cells[k]) {
            //alive cell
            if (map[k] == 2 || map[k] ==3 ) {
                self.addCell(cells[k]);
            }
        } else if (map[k] == 3) {
            var o = JSON.parse(k);
            self.addCell(new Cell(o[0], o[1]));
        }
    });
    return self;
}

World.prototype.out = function() {
    var self = this;
    var r, c;
    for (r=0; r<self.rows; r++) {
        var s = "";
        for (c=0; c<self.cols; c++) {
            s += self.cells[JSON.stringify([r,c])] ? " @ " : " . "; 
        }
        console.log(s);
    }
    console.log("");
    return self;
}

module.exports = World;
