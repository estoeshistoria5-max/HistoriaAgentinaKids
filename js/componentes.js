// componentes.js
// Menú superior y pie de página reutilizables para todo el sitio.
//
// CÓMO USARLO en cada página:
//   1. Poné <div id="menu-principal"></div> justo después de <body>
//   2. Poné <div id="footer-principal"></div> justo antes de </body>
//   3. Al final del archivo, antes de cerrar </body>, agregá:
//
//      <script>
//        const RUTA_BASE = "";       // "" si la página está en la raíz
//                                     // "../" si está un nivel adentro (ej: /heroes/)
//        const PAGINA_ACTUAL = "inicio"; // o "heroes" -> resalta el link activo
//      </script>
//      <script src="RUTA_RELATIVA_A_js/componentes.js"></script>
//      <script>cargarMenu(RUTA_BASE, PAGINA_ACTUAL);</script>

function cargarMenu(rutaBase = "", paginaActual = "") {

    // Clase extra para resaltar el link de la página en la que estamos
    const claseActiva = "underline decoration-2 decoration-white";

    const header = `
    <header class="bg-sky-500 p-4 shadow-md sticky top-0 z-50 border-b-4 border-white">
        <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <a href="${rutaBase}index.html" class="flex items-center gap-3">
                <span class="text-3xl">📚</span>
                <span class="text-xl sm:text-2xl text-white font-bold" style="font-family: 'Fredoka One', cursive;">
                    Historias de Argentina
                </span>
            </a>
            <nav class="flex gap-5 text-white font-bold text-sm">
                <a href="${rutaBase}index.html" class="hover:underline ${paginaActual === 'inicio' ? claseActiva : ''}">
                    🏠 Inicio
                </a>
                <a href="${rutaBase}heroes/index.html" class="hover:underline ${paginaActual === 'heroes' ? claseActiva : ''}">
                    🏇 Héroes y Heroínas
                </a>
            </nav>
        </div>
    </header>
    `;

    const footer = `
    <footer class="bg-slate-900 text-slate-400 text-center py-6 px-4 mt-8 border-t-4 border-sky-400">
        <p class="text-xs">¡Inspirémonos en la valentía de nuestros héroes para luchar por un mundo más justo!</p>
        <p class="text-[10px] mt-2 text-slate-500">Hecho con fines educativos e interactivos.</p>
    </footer>
    `;

    const menuDiv = document.getElementById("menu-principal");
    const footerDiv = document.getElementById("footer-principal");

    if (menuDiv) {
        menuDiv.innerHTML = header;
    } else {
        console.warn("componentes.js: no encontré <div id='menu-principal'></div> en esta página.");
    }

    if (footerDiv) {
        footerDiv.innerHTML = footer;
    } else {
        console.warn("componentes.js: no encontré <div id='footer-principal'></div> en esta página.");
    }
}
