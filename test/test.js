var assert = require('assert');
var World = require('../world');
var Cell = require('../cell');

describe("Game of Life", function(){
    it("should get correct map", function(){
        var world = new World(3, 3);
        world.addCell(new Cell(1, 1));        
        assert.equal(world.map['[0,0]'], 1);
        assert.equal(world.map['[1,1]'], undefined);
        assert.equal(world.map['[2,2]'], 1);

        world.addCell(new Cell(1,2));
        assert.equal(world.map['[0,0]'], 1);
        assert.equal(world.map['[0,1]'], 2);
        assert.equal(world.map['[2,2]'], 2);
    })

})