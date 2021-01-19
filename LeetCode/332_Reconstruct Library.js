// https://leetcode.com/problems/reconstruct-itinerary/

const findItinerary = tickets => {
  const map = {};
  const result = [];

  for (let i = 0; i < tickets.length; i++) {
    const dep = tickets[i][0];
    const des = tickets[i][1];

    if (map[dep]) map[dep].push(des);
    else map[dep] = [des];
  }

  for (let loc in map) map[loc].sort();

  const dfs = node => {
    const des = map[node];
    while (des && des.length) {
      dfs(des.shift());
    }
    result.push(node);
  }
  
  dfs('JFK');
  return result.reverse();
}