Object.defineProperty(Object.prototype, 'pipe', {
    value: function (transform) { return transform(this); }
  });

 function doubleSay(val){
    return val.concat(val);
 }
 
 function capitalize(val){
    return val.toUpperCase();
}

  console.log('hello'.pipe(doubleSay).pipe(capitalize));