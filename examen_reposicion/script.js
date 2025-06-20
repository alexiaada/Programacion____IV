document.getElementById('vehiculoForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let marca = document.getElementById('marca').value;
  let modelo = document.getElementById('modelo').value;
  let year = document.getElementById('year').value;

  const regexMarca = /^[A-Z]{3,}$/;
  const regexModelo = /^[A-Za-z]{4,}$/;
  const regexYear = /^[0-9]{4}$/;

  if (!regexMarca.test(marca)) {
    alert("⚠️ Marca inválida. Usa solo MAYÚSCULAS y al menos 3 letras.");
    return;
  }
  if (!regexModelo.test(modelo)) {
    alert("⚠️ Modelo inválido. Usa mínimo 4 letras.");
    return;
  }
  if (!regexYear.test(year)) {
    alert("⚠️ Año inválido. Solo se aceptan 4 dígitos.");
    return;
  }

  let formData = new FormData(document.getElementById('vehiculoForm'));

  fetch("guardar_vehiculo.php", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    if (data.includes("OK")) {
      alert("✅ ¡Se guardó tu vehículo correctamente!");
      document.getElementById("vehiculoForm").reset();
    } else {
      alert("❌ Error al guardar: " + data);
    }
  })
  .catch(error => {
    alert("❌ Error en la conexión al servidor.");
    console.error(error);
  });
});