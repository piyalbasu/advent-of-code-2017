/*
--- Day 3: Spiral Memory ---
You come across an experimental new kind of memory stored on an infinite
two-dimensional grid.

Each square on the grid is allocated in a spiral pattern starting at a location
marked 1 and then counting up while spiraling outward. For example, the first few squares are allocated like this:

17  16  15  14  13
18   5   4   3  12
19   6   1   2  11
20   7   8   9  10
21  22  23---> ...
While this is very space-efficient (no squares are skipped),
requested data must be carried back to square 1 (the location of the only access
port for this memory system) by programs that can only move up, down, left, or right.
They always take the shortest path: the Manhattan Distance between the location
of the data and square 1.

For example:

Data from square 1 is carried 0 steps, since it's at the access port.
Data from square 12 is carried 3 steps, such as: down, left, left.
Data from square 23 is carried only 2 steps: up twice.
Data from square 1024 must be carried 31 steps.
How many steps are required to carry the data from the square identified in your
puzzle input all the way to the access port?
*/

const stepGen = (num) => {
  const testMatrix = {
    1: [0, 0],
    2: [1, 0],
    3: [1, 1],
    4: [0, 1],
    5: [-1, 1],
    6: [-1, 0],
    7: [-1, -1],
    8: [0, -1],
    9: [1, -1]
  };
  let x = 0,
    y = 0,
    rowLen = 1,
    rowHeight = 0,
    direction = 'right';
    matrix = [x, y];

  if (num === 1) {
    return matrix;
  }

  for (let i = 2; i <= num; i++) {
    if(direction === 'right') {
      x++;
      matrix[0] = x;
      if (x === rowLen) {
        direction = 'up';
        rowHeight++;
      }
    } else if(direction === 'up') {
      y++;
      matrix[1] = y;
      direction = y === rowHeight ? 'left' : direction;
    } else if (direction === 'left') {
      x--;
      matrix[0] = x;
      direction = x === -rowLen ? 'down' : direction;
    } else {
      y--;
      matrix[1] = y;
      if (y === -rowHeight) {
        direction = 'right';
        rowLen++;
      }
    }
  }

  return matrix;
};

module.exports.stepGen = stepGen;