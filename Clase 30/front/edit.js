document.addEventListener("DOMContentLoaded", async () => {
    const formEditarPosteo = document.querySelector("#form-editar-posteo");
    const inputTitulo = document.querySelector("#editar-titulo");
    const textareaContenido = document.querySelector("#editar-contenido");

    // Obtener el ID del posteo desde la URL (por ejemplo, edit.html?id=123)
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    // Función para cargar los datos del posteo existente
    const cargarDatosPosteo = async () => {
        try {
            const respuesta = await axios.get(`http://localhost:3000/posteos/${postId}`);
            const posteo = respuesta.data;

            // Rellenar los campos del formulario con los datos del posteo
            inputTitulo.value = posteo.titulo;
            textareaContenido.value = posteo.contenido;
        } catch (error) {
            console.error("Error al cargar los datos del posteo:", error);
        }
    };

    // Función para guardar los cambios al editar el posteo
    const guardarCambios = async () => {
        const nuevoTitulo = inputTitulo.value;
        const nuevoContenido = textareaContenido.value;

        try {
            await axios.put(`http://localhost:3000/posteos/${postId}`, {
                titulo: nuevoTitulo,
                contenido: nuevoContenido
            });

            // Redirigir al usuario a la página de listado de posteos
            window.location.href = "index.html";
        } catch (error) {
            console.error("Error al guardar los cambios:", error);
        }
    };

    // Cargar los datos del posteo al cargar la página
    await cargarDatosPosteo();

    // Manejar el envío del formulario
    formEditarPosteo.addEventListener("submit", async (event) => {
        event.preventDefault(); // Evita que se recargue la página al enviar el formulario
        await guardarCambios();
    });
});
