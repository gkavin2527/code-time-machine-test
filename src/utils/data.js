// src/utils/data.js
function processData(data) {
    if (!data) return [];
    return data.map(x => x * 2);
  }
  
  module.exports = processData;
  