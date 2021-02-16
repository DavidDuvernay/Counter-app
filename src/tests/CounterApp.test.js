import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
import '@testing-library/jest-dom';

describe('Pruebas en CounterApp', () => {
    
    let wrapper = shallow(<CounterApp />);;

    beforeEach( () => {
        
        wrapper = shallow(<CounterApp />);

    });
    
    test('Debe de mostrar CounterApp correctamente', () => {

        
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar el valor por defecto de 10', () => {

        const wrapper = shallow(<CounterApp value = { 100 }/>);
        
        const numberValue = wrapper.find('h2').text().trim();
        
        expect( numberValue ).toBe( '100' );
    });

    test('Debe decrecer contador', () => {

        wrapper.find('button').at(0).simulate('click');

        const numberValue = wrapper.find('h2').text().trim();

        expect( numberValue ).toBe('9');
    });

    test('Debe incrementar contador', () => {

        wrapper.find('button').at(2).simulate('click');

        const numberValue = wrapper.find('h2').text().trim();

        expect( numberValue ).toBe('11');
    });

    test('Debe colocar el valor por defecto en el contador', () => {

        const wrapper = shallow(<CounterApp value = { 10 }/>);

        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const numberValue = wrapper.find('h2').text().trim();
        
        expect( numberValue ).toBe('10');
    });
});
