document.addEventListener("DOMContentLoaded", () => {
  const btnEnviar = document.getElementById("btnEnviar");
  const tipo = document.getElementById("tipo");
  const archivo = document.getElementById("archivo");

  btnEnviar.addEventListener("click", () => {
    if (!tipo.value || !archivo.files.length) {
      alert("Por favor, complete todos los campos antes de enviar.");
      return;
    }

    const file = archivo.files[0];
    const nombreArchivo = file.name.toLowerCase();
    const extensionesPermitidas = [".pdf", ".csv"];
    const esValido = extensionesPermitidas.some(ext => nombreArchivo.endsWith(ext));

    if (!esValido) {
      alert("Solo se permiten archivos con extensión .pdf o .csv 📄");
      archivo.value = ""; // limpiar input
      return;
    }

    alert("✅ Solicitud enviada correctamente.");
  });
});
