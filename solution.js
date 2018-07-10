//Write a program that adds a single new node to a directed graph. 
//The new node must be the child of all nodes in the graph that had no 
//children before it was added.


const giveChild = (nodes, edges, newNode) => {
  const parents = {};
  edges.forEach(val => parents[val[0]] = true);

  let index = 0;
  while (index < nodes.length) {
        if (!parents[nodes[index]]) {
          edges.push([nodes[index], newNode]);
        }
    index++;
  }
  return edges;
} 


console.log(giveChild([0, 1, 2, 3, 4, 5, 6],
                      [
                        [0,1],
                        [1,2],
                        [2,3],
                        [2,4],
                        [2,5],
                        [3,6]
                      ],
                      7 ))