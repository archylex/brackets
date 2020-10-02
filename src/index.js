module.exports = function check(str, bracketsConfig) {
  const single = [].concat(...bracketsConfig);
  let stack = [];
  let similar = false;
  
  for (let i = 0; i < str.length; i++) {
    let idx = single.indexOf(str[i]);
    
    if (idx < 0) return false;

    similar = single[idx] === single[idx+1] ? true : false;
    idx = (similar && stack[stack.length-1] === idx) ? idx+1 : idx; 

    if (idx % 2 === 0) 
      stack.push(idx);        
    else if (idx !== stack.pop() + 1) 
      return false;      
  }
  
  if (stack.length > 0) 
    return false;

  return true;
}
