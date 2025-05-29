function mostrarCategoria(id) {
  const subcatalogos = document.querySelectorAll('.subcatalogo');
  subcatalogos.forEach(c => c.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
function cambiarImagen(btn, direccion) {
  const galeria = btn.parentElement;
  const imagenes = galeria.querySelectorAll('img');
  let indiceActual = Array.from(imagenes).findIndex(img => img.classList.contains('activo'));
  imagenes[indiceActual].classList.remove('activo');
  let nuevoIndice = (indiceActual + direccion + imagenes.length) % imagenes.length;
  imagenes[nuevoIndice].classList.add('activo');
}
function zoomImage(img) {
  const zoomedImg = document.createElement('img');
  zoomedImg.src = img.src;
  zoomedImg.classList.add('zoomed');
  document.body.appendChild(zoomedImg);
  zoomedImg.onclick = function() {
    document.body.removeChild(zoomedImg);
  };
}