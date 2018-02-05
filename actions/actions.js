export const ADD_CAKE = 'ADD_CAKE'

let nextId = 1;

export function addCake(name,comment,imageUrl,yumFactor) {
   return {
      type: ADD_CAKE,
      id: nextId++,
      name,
      comment,
      imageUrl,
      yumFactor
   };
}

