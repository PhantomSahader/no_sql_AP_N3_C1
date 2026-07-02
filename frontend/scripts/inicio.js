window.onload = function () {
    
};

async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('http://localhost:3000/usuarios');
        const paises = await respuesta.json();

        const selectPaises = document.getElementById('selectPais');
        Object.entries(paises).forEach(([key, pais]) => {
            const opcion = document.createElement('option');
            opcion.value = pais.iso2;
            opcion.textContent = pais.nombre;
            selectPaises.appendChild(opcion);
        });
    } catch (error) {
        console.log('Error: ', error);
    }
};