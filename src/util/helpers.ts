function findNodesByKey(obj: any, key: string): any[] {
  let results: any[] = [];
  if (!obj || typeof obj !== 'object') return results;
  
  if (obj[key] && Array.isArray(obj[key])) {
    return obj[key];
  }
  
  for (const k in obj) {
    if (typeof obj[k] === 'object') {
      results = results.concat(findNodesByKey(obj[k], key));
    }
  }
  return results;
}

export { findNodesByKey };