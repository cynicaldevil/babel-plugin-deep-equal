const deep_equal_fn = (obj1, obj2) => {

  // if both objects are NaN, obj1 === obj2 will return false
  if(isNaN(obj1) && isNaN(obj2) &&
   typeof(obj1) === 'number' 
   && typeof(obj2) === 'number')
    return true;

  // for all primitive types; won't work for object types which store references
  // objects and arrays...
  if(obj1 === obj2)
    return true;

  // checking for equality for Array types
  if( Array.isArray(obj1) && Array.isArray(obj2))
  {
    if(obj1.length === obj2.length)
    {
      let i;
      for( i=0; i<obj1.length ; i++) {
        if(!deep_equal_fn(obj1[i], obj2[i]))
          return false;
      }

      return true;
    }
    else return false;
  }

  if( typeof obj1 === 'function' && typeof obj2 === 'function') {
    if( obj1.toString() === obj2.toString())
      return true;
    else
      return false;
  }

  if(typeof obj1 === 'object' && typeof obj2 === 'object') {

    const propNamesOne = Object.getPropertyNames(obj1);
    const propNamesTwo = Object.getPropertyNames(obj2);

    if(propNamesOne.length !== propNamesTwo.length(obj2))
      return false;

    for(let i = 0; i<propNamesOne.length ; i++) {

      // property names are always strings: so we can compare them directly
      if(propNamesOne[i] !== propNamesTwo[i])
        return false;

      const propValObj1 = obj1.propNamesOne[i];
      const propValObj2 = obj2.propNamesTwo[i];
      if( !deep_equal_Fn(propValObj1, propValObj2))
        return false;
    }
  }

  // if control reaches till the end of the program, then the
  // two objects don't satisfy any conditions by which they are equal
  return false;
};

export default deep_equal_fn;
