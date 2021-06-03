/** Files that holds custom helper functions */

/**
 * 
 * @param {Array} data, State data from API response 
 * @param {String} search  search through data based on Categories
 * @param {String} filter  filter thorough data based on "Alphabet" and "Date"
 * @returns 
 */
export const handleQueries = (data, search, filter) => {
    if(search) {
      return search === "All" ? 
        create2dArray([...data], 15) : 
        create2dArray([...data].filter(template => template.category.includes(search)), 15)
    }
    if(filter.includes("order")) {
        if(filter.includes("Ascending")) {
            return create2dArray([...data].sort(sortAlphabetically("name")), 15)
        }
        else if(filter.includes("Descending")) {
            return create2dArray([...data].sort(sortAlphabetically("name", true)), 15)
        }
        return create2dArray([...data], 15)
    }
    if(filter.includes("date")) {
        if(filter.includes("Ascending")) {
            return create2dArray([...data].sort(sortByDate()), 15)
        } else if(filter.includes("Descending")) {
            return create2dArray([...data].sort(sortByDate()), 15)
        }
        return create2dArray([...data], 15)
    }
    return create2dArray([...data], 15)
}

/**
 * 
 * @param {Array} arr 
 * @param {Number} count 
 * @returns 2D array for efficient pagination
 * E.g arr = [a,b,c,d,e,f]; count = 2
 * returns [
 *      [a,b],
 *      [c,d],
 *      [e,f]
 * ]
 */
export const create2dArray = (arr, count) => {
    let newarr = []
    while(arr.length) {
        newarr.push(arr.splice(0, count))
    }
    return newarr
}


/**
 * Sorts an Array of object alphabetically based on object property
 * @param {String} property of object to sort
 * @param {Boolean} isDesc if true, sorts the array Descending to Ascending
 *
 */
export const sortAlphabetically = (property, isDesc) => {
  let sortOrder = 1;

  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  if(isDesc) {
    return (a,b) => {
      if(sortOrder === -1){
          return a[property].localeCompare(b[property]);
      }else{
          return b[property].localeCompare(a[property]);
      }        
  }
  }
  return (a,b) => {
      if(sortOrder === -1){
          return b[property].localeCompare(a[property]);
      }else{
          return a[property].localeCompare(b[property]);
      }        
  }
}



/**
 * Sorts an Array of object by date, which has the property "created"
 * @param {Boolean} isDesc if true, sorts the array Descending to Ascending
 * @returns 
 */
export const sortByDate = (isDesc) => {
  if(isDesc) {
    return (a,b) => {
      return new Date(b.created) - new Date(a.created)
    }
  }
  return (a,b) => {
    return new Date(a.created) - new Date(b.created)
  }
}