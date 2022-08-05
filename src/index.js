
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length == 0) return [];
  
  let sortedMatrix = matrix.map(function(item, index) {
    if (index % 2 == 0) {
      return item;
      } else { 
      return item.reverse();
     } 
  });

  return sortedMatrix.join(',').split(',').map(item => Number(item));
}
