function Cell(row, col) {
	var self = this;
	self.row = row;
	self.col = col;
}

Cell.prototype.eachNeighbors = function(cb){
    var self = this, r = self.row, c = self.col;
    cb(r-1,c-1); cb(r-1, c); cb(r-1, c+1);
    cb(r, c-1); cb(r, c+1);
    cb(r+1, c-1); cb(r+1, c); cb(r+1, c+1);
}

module.exports = Cell;
