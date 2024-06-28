document.addEventListener("DOMContentLoaded", async () => {
    const bodyTablaPosteos = document.querySelector("#body-tabla-posteos");
    const formCrearPosteo = document.querySelector("#form-crear-posteo");

    const cargarDatosPosteo = async () => {
        try {
            const respuesta = await axios.get(`http://localhost:3000/posteos`);
            const posteos = respuesta.data;

            bodyTablaPosteos.innerHTML = ""; // Limpiar la tabla antes de agregar nuevos datos

            posteos.forEach(posteo => {
                const fila = document.createElement("tr");
                const celdaTitulo = document.createElement("td");
                const celdaContenido = document.createElement("td");
                const celdaAcciones = document.createElement("td");

                celdaTitulo.textContent = posteo.titulo;
                celdaContenido.textContent = posteo.contenido;

                const botonEliminar = document.createElement("button");
                botonEliminar.textContent = "Eliminar";
                botonEliminar.addEventListener("click", () => {
                    borrarPosteo(posteo.id);
                });

                const botonEditar = document.createElement("button");
                botonEditar.textContent = "Editar";
                botonEditar.addEventListener("click", () => {
                    window.location.href = `edit.html?id=${posteo.id}`;
                });

                celdaAcciones.appendChild(botonEliminar);
                celdaAcciones.appendChild(botonEditar);

                fila.appendChild(celdaTitulo);
                fila.appendChild(celdaContenido);
                fila.appendChild(celdaAcciones);

                bodyTablaPosteos.appendChild(fila);
            });
        } catch (error) {
            console.error("Error al cargar los posteos:", error);
        }
    };

    const borrarPosteo = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/posteos/${id}`);
            await cargarDatosPosteo();
        } catch (error) {
            console.error("Error al borrar el posteo:", error);
        }
    };

    const guardarCambios = async () => {
        const nuevoPosteo = {
            titulo: document.querySelector("#nuevo-titulo").value,
            contenido: document.querySelector("#nuevo-contenido").value
        }

        try {
            await axios.post("http://localhost:3000/posteos", nuevoPosteo);

            // Limpiar los campos del formulario
            formCrearPosteo.reset();

            await cargarDatosPosteo(); // Actualizar la lista de posteos
        } catch (error) {
            console.error("Error al crear el posteo:", error);
        }
    }

    formCrearPosteo.addEventListener("submit", async (event) => {
        event.preventDefault(); // Evita que se recargue la página al enviar el formulario
        await guardarCambios();
    });

    await cargarDatosPosteo();
});
