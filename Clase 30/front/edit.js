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
        const updatePosteo = {
            titulo: inputTitulo.value,
            contenido: textareaContenido.value
        }

        try {
            await axios.put(`http://localhost:3000/posteos/${postId}`, updatePosteo);
            alert("Posteo modificado correctamente!")
            window.location.href = "index.html";
        } catch (error) {
            console.error("Error al guardar los cambios:", error);
        }
    };

    formEditarPosteo.addEventListener("submit", async (event) => {
        event.preventDefault();
        await guardarCambios();
    });

    await cargarDatosPosteo();
});
