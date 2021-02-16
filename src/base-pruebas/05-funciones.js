export const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});


const user = getUser();

// Tarea
export const getUsuarioActivo = ( nombre = 'David' ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );