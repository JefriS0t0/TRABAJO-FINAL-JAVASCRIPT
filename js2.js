class Registro {
  constructor(nombre, usuario, correo, pais, telefono) {
    this.nombre = nombre;
    this.usuario = usuario;
    this.correo = correo;
    this.pais = pais;
    this.telefono = telefono;
  }
}

class UI {
      agregarFila(nuevoRegistro,) {
        
        const filaRegistro = document.getElementById("celdasLibres");
        const elemento = document.createElement("tr");
      
        elemento.innerHTML = `
        <td class='text-center'>${nuevoRegistro.nombre}</td>
        <td class='text-center'>${nuevoRegistro.usuario}</td>
        <td class='text-center'>${nuevoRegistro.correo}</td>
        <td class='text-center'>${nuevoRegistro.pais}</td>
        <td class='text-center'>${nuevoRegistro.telefono}</td>
        <a name='delete' class='btn btn-danger'>Eliminar Registro</a>
        `;
        filaRegistro.appendChild(elemento);
        
      }
      
      resetearFormulario(){
        let form = localStorage.getItem('form');
        form.reset();
      }

      eliminarFila(elemento){
          if (elemento.name === 'delete') {
            elemento.parentElement.remove();
          } 
      }
}

// DOM


window.onload = function(e) {
  
    let nombre = localStorage.getItem("nombre");
    let usuario = localStorage.getItem("usuario");
    let correo = localStorage.getItem("correo");
    let pais = localStorage.getItem("pais");
    let telefono = localStorage.getItem("telefono");

    const nuevoRegistro = new Registro(nombre, usuario, correo, pais, telefono);
    const ui = new UI();
    ui.agregarFila(nuevoRegistro);
    // const nuevoRegistro2 = JSON.parse(localStorage.getItem(nuevoRegistro));
    ui.resetearFormulario();
    e.preventDefault();
    
   
}
document.getElementById('celdasLibres').addEventListener('click',function(e){
  const ui = new UI();
  ui.eliminarFila(e.target)

})
