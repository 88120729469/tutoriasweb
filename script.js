document.getElementById('comentarios-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;
    const evaluacion = document.getElementById('evaluacion').value;
    const imagen = document.getElementById('imagen').files[0];

    const comentarioHTML = `
        <div class="comentario">
            <p><strong>${nombre}</strong></p>
            <p>${comentario}</p>
            <p>Evaluación: ${'★'.repeat(evaluacion)}</p>
        </div>
    `;

    if (imagen) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('comentarios-lista').innerHTML += `
                ${comentarioHTML}
                <img src="${e.target.result}" alt="Imagen de ${nombre}" style="max-width: 100px; max-height: 100px;">
            `;
        };
        reader.readAsDataURL(imagen);
    } else {
        document.getElementById('comentarios-lista').innerHTML += comentarioHTML;
    }

    document.getElementById('comentarios-form').reset();
});