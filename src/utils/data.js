// src/utils/data.js
function processData(data) {
    if (!Array.isArray(data)) return [];
    return data.map(x => x * 2);
  }
  
  module.exports = processData;
  