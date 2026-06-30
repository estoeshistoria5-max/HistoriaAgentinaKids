// buscador-datos.js
// Índice manual de páginas para el Buscador del sitio.
// IMPORTANTE: cada vez que crees una página nueva con contenido real,
// agregá un objeto acá para que el buscador la encuentre.
//
// Campos:
//   titulo      -> nombre que se muestra en el resultado
//   descripcion -> texto corto que se muestra debajo del título
//   categoria   -> etiqueta (ej: "Héroes y Heroínas")
//   url         -> ruta relativa a la RAÍZ del sitio (porque buscador.html vive en la raíz)
//   icono       -> emoji para la tarjeta de resultado

const indiceBusqueda = [
    {
        titulo: "Juana Azurduy",
        descripcion: "La guerrera que luchó por la libertad del Alto Perú junto a Belgrano y sus tropas.",
        categoria: "Héroes y Heroínas",
        url: "heroes/juana_azurduy.html",
        icono: "🏇"
    },
    {
        titulo: "Héroes y Heroínas",
        descripcion: "Conocé a los hombres y mujeres que lucharon por nuestra libertad.",
        categoria: "Categoría",
        url: "heroes/index.html",
        icono: "🏇"
    },
    {
        titulo: "Fechas Patrias",
        descripcion: "Las fechas más importantes de nuestra historia. Contenido próximamente.",
        categoria: "Categoría",
        url: "fechas-patrias/index.html",
        icono: "🎉"
    },
    {
        titulo: "Lugares Históricos",
        descripcion: "Los lugares donde se escribió nuestra historia. Contenido próximamente.",
        categoria: "Categoría",
        url: "lugares-historicos/index.html",
        icono: "🏛️"
    },
    {
        titulo: "Pueblos Originarios",
        descripcion: "Las culturas y comunidades originarias de nuestra tierra. Contenido próximamente.",
        categoria: "Categoría",
        url: "pueblos-originarios/index.html",
        icono: "🪶"
    },
    {
        titulo: "Objetos y Curiosidades de la Época",
        descripcion: "Objetos curiosos que usaban los próceres y el pueblo. Contenido próximamente.",
        categoria: "Categoría",
        url: "objetos-curiosidades/index.html",
        icono: "🏺"
    },
    {
        titulo: "Canciones Patrias",
        descripcion: "Las canciones que acompañaron nuestra historia. Contenido próximamente.",
        categoria: "Categoría",
        url: "canciones-patrias/index.html",
        icono: "🎵"
    },
    {
        titulo: "Línea de Tiempo",
        descripcion: "Recorré los grandes hitos de nuestra historia en orden cronológico.",
        categoria: "Sección",
        url: "linea-de-tiempo.html",
        icono: "🗺️"
    },
    {
        titulo: "Blog",
        descripcion: "Las últimas entradas de Relatos del Sur.",
        categoria: "Sección",
        url: "blog.html",
        icono: "📰"
    },
    {
        titulo: "Sobre el Proyecto",
        descripcion: "Quiénes somos y por qué hacemos Historia Argentina Kids.",
        categoria: "Sección",
        url: "sobre-el-proyecto.html",
        icono: "✨"
    },
    {
        titulo: "Contacto",
        descripcion: "Escribinos por email o seguinos en redes sociales.",
        categoria: "Sección",
        url: "contacto.html",
        icono: "✉️"
    }
];
