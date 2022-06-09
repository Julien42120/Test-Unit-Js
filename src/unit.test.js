import { render } from 'enzyme';
import React from 'react'
import '@testing-library/jest-dom/extend-expect'

function sum(a, b){
    return a + b;
}

describe('sum', function () {
    expect(sum(1,2)).toEqual(3);
});

function arrayify(input = []) {
    return Array.isArray(input) ? input : [input];
}

 
describe('arrayify', () => {
    it("retourne un tableau vide quand rien n'est donné", () => {
        expect(arrayify('')).toEqual(['']);
    });

    it('renvoie la version en tableau de ce qui lui est donné', () => {
        expect(arrayify('bobo')).toEqual(['bobo'])
    });

    it('retourne le tableau si on lui donne un tableau', () => {
        expect(['bobo']).toEqual(['bobo'])
    });
});