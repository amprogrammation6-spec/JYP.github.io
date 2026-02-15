# Blueprint: Portfolio de Astro

## Visión General

Este es un sitio web de portafolio personal de una sola página, moderno y visualmente atractivo, construido con Astro.js. Está diseñado para ser extremadamente rápido, optimizado para SEO y para mostrar el perfil, los proyectos y la información de contacto de un desarrollador o profesional creativo. El diseño es limpio, responsivo y presenta efectos visuales sutiles para una experiencia de usuario premium.

## Esquema del Proyecto

### Estilo, Diseño y Características

*   **Framework:** Astro.js
*   **Arquitectura:** Componentes de Astro para contenido estático (Server-Side Rendered, cero JS por defecto).
*   **Estilo:**
    *   CSS global definido en `src/styles/global.css`.
    *   Diseño limpio y moderno con un amplio uso de espacio en blanco.
    *   Paleta de colores enfocada en la legibilidad y el atractivo visual.
    *   Diseño totalmente responsivo que se adapta a dispositivos móviles y de escritorio.
*   **Estructura de la Página (`src/pages/index.astro`):**
    *   **Layout Principal (`src/layouts/Layout.astro`):** Define la estructura HTML base, importa las fuentes y el CSS global.
    *   **Header (`src/components/Header.astro`):** Barra de navegación fija en la parte superior.
    *   **Hero (`src/components/Hero.astro`):** Sección principal de bienvenida con un titular llamativo.
    *   **About (`src/components/About.astro`):** Sección de "Acerca de mí".
    *   **Services (`src/components/Services.astro`):** Sección para describir los servicios ofrecidos.
    *   **Contact (`src/components/Contact.astro`):** Sección con información de contacto.
    *   **Footer (`src/components/Footer.astro`):** Pie de página con créditos o enlaces adicionales.
*   **Assets:**
    *   Imágenes SVG utilizadas para íconos y fondos, ubicadas en `src/assets/` y `public/`.

## Plan Actual

**Objetivo:** Subir el proyecto a un repositorio de GitHub.

**Pasos:**

1.  ✅ **Crear `blueprint.md`:** Documentar la visión general, el esquema y el plan actual del proyecto.
2.  **Inicializar Git:** Preparar el proyecto para el control de versiones con Git.
3.  **Crear `.gitignore`:** Asegurarse de que los archivos innecesarios (como `node_modules`) no se incluyan en el repositorio.
4.  **Commit Inicial:** Crear el primer guardado (commit) del estado del proyecto.
5.  **Conectar Remoto:** Esperar la URL del repositorio de GitHub del usuario.
6.  **Subir a GitHub:** Añadir la URL remota y empujar el commit inicial a GitHub.
