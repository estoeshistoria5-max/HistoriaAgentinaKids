// componentes.js
// Menú superior y pie de página reutilizables para todo el sitio "Historia Argentina Kids".
//
// CÓMO USARLO en cada página:
//   1. Poné <div id="menu-principal"></div> justo después de <body>
//   2. Poné <div id="footer-principal"></div> justo antes de </body>
//   3. Al final del archivo, antes de cerrar </body>, agregá:
//
//      <script>
//        const RUTA_BASE = "";            // "" si la página está en la raíz
//                                          // "../" si está un nivel adentro (ej: /heroes/)
//        const PAGINA_ACTUAL = "inicio";  // resalta el link activo del menú
//      </script>
//      <script src="RUTA_RELATIVA_A_js/componentes.js"></script>
//      <script>cargarMenu(RUTA_BASE, PAGINA_ACTUAL);</script>

function cargarMenu(rutaBase = "", paginaActual = "") {

    const navItems = [
        { key: "inicio",   icon: "🏠", label: "Inicio",            href: rutaBase + "index.html" },
        { key: "buscador", icon: "🔍", label: "Buscador",          href: rutaBase + "buscador.html" },
        { key: "blog",     icon: "📰", label: "Blog",              href: rutaBase + "blog.html" },
        { key: "timeline", icon: "🗺️", label: "Línea de Tiempo",   href: rutaBase + "linea-de-tiempo.html" },
        { key: "sobre",    icon: "✨", label: "Sobre el Proyecto", href: rutaBase + "sobre-el-proyecto.html" },
        { key: "contacto", icon: "✉️", label: "Contacto",          href: rutaBase + "contacto.html" }
    ];

    const navHtml = navItems.map(item => {
        const activo = item.key === paginaActual
            ? "underline decoration-2 decoration-white underline-offset-4"
            : "";
        return `<a href="${item.href}" class="hover:underline whitespace-nowrap text-white font-bold text-xs sm:text-sm ${activo}">${item.icon} ${item.label}</a>`;
    }).join("");

    const header = `
    <header class="bg-sky-500 shadow-md sticky top-0 z-50 border-b-4 border-white">
        <div class="max-w-5xl mx-auto px-4 py-3 flex flex-col gap-3">
            <div class="flex items-center justify-between">
                <a href="${rutaBase}index.html" class="flex items-center gap-2">
                    <span class="text-2xl">📚</span>
                    <span class="text-lg sm:text-xl text-white font-bold" style="font-family: 'Fredoka One', cursive;">
                        Historia Argentina Kids
                    </span>
                </a>
            </div>
            <nav class="flex gap-4 overflow-x-auto pb-1">
                ${navHtml}
            </nav>
        </div>
    </header>
    `;

    const footer = `
    <footer class="bg-slate-900 text-slate-400 text-center py-6 px-4 mt-8 border-t-4 border-sky-400">
        <p class="text-xs">¡Inspirémonos en la valentía de nuestros héroes para luchar por un mundo más justo!</p>
        <div class="flex justify-center flex-wrap gap-4 mt-4 text-xs">
            <a href="mailto:relatosdelsur.ar@gmail.com" class="hover:text-white transition">✉️ relatosdelsur.ar@gmail.com</a>
            <a href="https://www.facebook.com/relatosdelsur.ar" target="_blank" rel="noopener noreferrer" class="hover:text-white transition">📘 Facebook</a>
            <a href="https://www.instagram.com/estoes_historia/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition">📸 Instagram</a>
        </div>
        <p class="text-[10px] mt-4 text-slate-500">Un proyecto de Relatos del Sur · Hecho con fines educativos e interactivos.</p>
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
