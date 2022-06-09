import React from 'react';
import './setupTests';

test("returns undefined by default", () => {
  	const mock = jest.fn();    
  	let result = mock("foo");
    //tester que result est bien undefined
    expect(result).toBeUndefined(); 
    //tester que la fonction mock a bien été appelée
 	let new_result = mock("foo2");
    expect(mock).toHaveBeenCalledTimes(2);
    //tester que la fonction mock a bien été appelée 2 fois
    expect(mock).toBeCalledWith('foo2');
    //tester que la fonction mock a bien été appelée avec le paramètre foo2
});

const doAdd = (a, b, callback) => {    
  let add = a + b + 3;    
  callback(add);
};

test("calls callback with arguments added", () => {   
    const mock = jest.fn(x => x); 
    let a = 1;
    let b = 2;
    doAdd(a, b, mock);
    expect(mock).toHaveBeenCalledWith(6);
  //mocker la fonction de callback puis appeler la fonction doAdd avec a=1 et b=2
  //vérifiez que la fonction a été appelée avec le bon paramètre
});