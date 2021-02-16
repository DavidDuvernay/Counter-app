describe('Pruebas em e; archivo demo.test.js', () => {
    
    test ('Deben ser iguales los strings', () => {
        //incializacion
        const mensaje = 'Hola mundo';
        
        //estimulo
        const mensaje2 = `Hola mundo`;
        
        //observar el comportamiento
        expect( mensaje ).toBe( mensaje2 );
    });
});