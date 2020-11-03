// https://leetcode.com/problems/rotting-oranges/
// Good explanation: https://leetcode.com/problems/rotting-oranges/discuss/443931/Javascript-BFS-with-explaination 

const orangesRotting = grid => {
  let minutes = 0;
  let totalFreshOranges = 0;

  // Contains [x,y] of rotten oranges and will be used in while loop as spreading point
  let rottenOranges = []; 

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // Find rotten oranges and push to stack
      //  This will be used to spread to fresh oranges that are left
      if (grid[i][j] === 1) totalFreshOranges += 1;
      if (grid[i][j] === 2) rottenOranges.push([i, j]);
    }
  }

  const m = [[0, -1], [0, 1], [-1, 0], [1, 0]]; // adjacent grids

  // Keep spreading if there are still fresh oranges and there are rotten oranges to spread
  while (totalFreshOranges && rottenOranges.length) {
    // Fresh oranges adjacent to rotten oranges will be pushed into this to become rotten
    let rottingOranges = [];

    while (rottenOranges.length) {
      let [x, y] = rottenOranges.pop();

      for (let i = 0; i < 4; i++) {
        let [x2, y2] = [x + m[i][0], y + m[i][1]];

        // If adjacent grid is fresh orange, make it rotten and decrement totalFreshOranges
        //  and push into rottenOranges to be used for next round
        if (grid[x2] && grid[x2][y2] === 1) {
          grid[x2][y2] = 2;
          totalFreshOranges -= 1;
          rottingOranges.push([x2, y2]);
        }
      }
    }
    // Rotting oranges become rotten oranges
    rottenOranges = rottingOranges;
    minutes += 1;
  }

  // If there are fresh oranges left, return -1. Otherwise, return minutes
  return totalFreshOranges ? -1 : minutes;
}





console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]));