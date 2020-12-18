// https://leetcode.com/problems/course-schedule/

const canFinish = (numCourses, prerequisites) => {
  const memo = {};

  for (let preq of prerequisites) {
    memo[preq[0]] = preq.slice(1);
  }

  return memo;
}


const numCourses = 2, prerequisites = [[1,0],[0,1]];
console.log(canFinish(numCourses, prerequisites));