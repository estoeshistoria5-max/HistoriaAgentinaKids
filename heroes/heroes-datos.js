// heroes-datos.js
// Lista de héroes y heroínas de la categoría.
//
// CÓMO AGREGAR UN HÉROE NUEVO:
//   1. Creá su página, por ejemplo: heroes/manuel-belgrano.html
//   2. Agregá un objeto acá abajo, en cualquier lugar de la lista.
//   3. Listo: la tarjeta aparece sola en heroes/index.html, no hay que tocar el HTML.
//
// Campos:
//   nombre       -> nombre que se muestra en la tarjeta
//   descripcion  -> texto corto debajo del nombre
//   emoji        -> ícono de la tarjeta
//   url          -> nombre del archivo .html (relativo a esta misma carpeta heroes/)
//   activo       -> true = tiene página real y se puede entrar
//                   false = aparece como "Próximamente" (sin link), útil para
//                           anunciar un héroe antes de terminar su página

const heroesData = [
    {
        nombre: "Juana Azurduy",
        descripcion: "La guerrera que luchó por la libertad del Alto Perú.",
        emoji: "🏇",
        url: "juana_azurduy.html",
        activo: true
    }

    // Ejemplo de cómo se vería el próximo héroe, antes de tener su página lista:
    // {
    //     nombre: "Manuel Belgrano",
    //     descripcion: "El creador de la bandera argentina.",
    //     emoji: "🏳️",
    //     url: "manuel-belgrano.html",
    //     activo: false
    // }
];
