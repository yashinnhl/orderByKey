


const get = (object, path, defaultValue) => {
    return path.split('.').reduce((o, p) => o ? o[p] : defaultValue, object)
} 

const  set = (obj, path, value) => {
    const pList = path.split('.');
    const key = pList.pop();
    const pointer = pList.reduce((accumulator, currentValue) => {
      if (accumulator[currentValue] === undefined) accumulator[currentValue] = {};
      return accumulator[currentValue];
    }, obj);
    pointer[key] = value;
    return obj;
}

 const  orderByKey = (data, string) => {
    const orderArray = string.split(',');
    let newObj = {};

    orderArray.map(path => {
      path = path.trim();
      const foundObj = get(data, path);
      if (foundObj !== undefined) {
        newObj = set(newObj, path, (typeof foundObj) === 'object' ? {} : null);
      }
    });
    
    const deepMerge = (target, source) => {
      Object.entries(source).forEach(([key, value]) => {
        if (value && typeof value === "object" && !Array.isArray(value)) {
          deepMerge((target[key] = target[key] || {}), value);
          return;
        }
        target[key] = value;
      });
      return target;
    };
    
    const c = [newObj, data].reduce(deepMerge, {});
    return c;
}
module.exports = orderByKey;