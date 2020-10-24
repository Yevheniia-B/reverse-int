module.exports = function reverse (n) {
       
    if (String(n).startsWith('-')) {
       return String(n).split('').reverse().join('').slice(0, -1);
    }
    else {
      return String(n).split('').reverse().join('')
    }
}
