document.addEventListener("DOMContentLoaded", async () => {
    const formEditarPosteo = document.querySelector("#form-editar-posteo");
    const inputTitulo = document.querySelector("#editar-titulo");
    const textareaContenido = document.querySelector("#editar-contenido");
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");

    const cargarDatosPosteo = async () => {
        try {
            const respuesta = await axios.get(`http://localhost:3000/posteos/${postId}`);
            const posteo = respuesta.data;

            inputTitulo.value = posteo.titulo;
            textareaContenido.value = posteo.contenido;
        } catch (error) {
            console.error("Error al cargar los datos del posteo:", error);
        }
    };

    const guardarCambios = async () => {
        const nuevoTitulo = inputTitulo.value;
        const nuevoContenido = textareaContenido.value;

        try {
            await axios.put(`http://localhost:3000/posteos/${postId}`, {
                titulo: nuevoTitulo,
                contenido: nuevoContenido
            });

            window.location.href = "index.html";
        } catch (error) {
            console.error("Error al guardar los cambios:", error);
        }
    };

    await cargarDatosPosteo();

    formEditarPosteo.addEventListener("submit", async (event) => {
        event.preventDefault();
        await guardarCambios();
    });
});
