# Prototipos del Proyecto

## Información del Documento
Presentación - Metodología de Desarrollo


Actividad 1: Definición Inicial del Proyecto Frontend

Idea de la Aplicación Web

IsaacFilm es una plataforma de streaming de películas y series inspirada en Netflix, con un enfoque en contenido independiente y películas de culto.



**Última actualización:** [13/10/2025]  
**Versión del prototipo:** [v1.0]  
**Herramienta:** [![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)]()

---

## Propósito del Prototipoq 

Este documento centraliza toda la información sobre los **diseños y prototipos** creados en Figma para el proyecto IsaacFilm, una plataforma inspirada en el estilo visual de Netflix, pero con una identidad visual cinematográfica y minimalista. Sirve como **puente entre el diseño UX/UI y el desarrollo técnico**, facilitando la implementación durante los sprints.

**Objetivos del prototipo:**
- Validar la **experiencia de usuario** antes del desarrollo
- Alinear la **visión del producto** entre todos los miembros del equipo
- Servir como **referencia visual** durante el desarrollo backend y frontend
- Documentar las **decisiones de diseño y sus fundamentos estéticos**

---

## Enlaces Principales

### Proyecto Principal

**URL:** [![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)]
[https://www.figma.com/design/rJSE8SbLOQ39c8cuMvQCHl/App-IsaacFilm?node-id=498-844&t=M0we6lrvCKBRT3ab-1]

---

## Estructura del Prototipo

### Sistema de Diseño

**Paleta de colores:**
- **Color primario:** #000000 - Fondo general y base del tema oscuro
- **Color secundario:** #1A1A1A - Paneles, menús y fondos secundarios
- **Color de acento:** #E50914 - Botones principales, indicadores activos
- **Texto principal** #FFFFFF - Tipografía en áreas oscuras
- **Texto secundario** #B3B3B3 - Descripciones o información secundaria
- **Borde/Detalles** #2E2E2E -Lineas divisoras y bordes sutiles

- **Colores de estado:**
  - Éxito: #648DDB
  - Error: #FF0000
  - Advertencia: #CD3546
  - Info: #ACA5A5

**Tipografía:**
- **Texto Principal:** [Afacad-Bold-96px] - Títulos de pantallas
- **Subtítulos:** [Adamina-Regular-32px] - Para secciones
- **Títulos de cajas** [Afacad-Bold-48px] - Para cajas
- **Para textos en general** [Actor-REgular-24px] - Para cards en informacion de los card
- **Pie de página** [Abhaya-REgular-24px] - Para pie de pagina copyright


**Espaciado:**
- Sistema de **8px grid**
- Espaciado base: 8px, 16px, 24px, 32px
- Márgen interno de tarjetas: 10px - 16px
- Espaciado entre secciones: 64px
---

## Pantallas incluidas:**
### Flujo Principal
1. **Index de usuario no logueado**
- Navbar menú (Inicio, Catálogo, Búsqueda).
- Presentación con título (Películas Independientes y de Culto).
- Subtítulo (Descubre cine que no encontrarás en otras plataformas).
- Botones (Comenzar ahora, Explorar catálogo).
- Categorías (Independientes, De culto, Internacionales).
- Pie de página (© 2025 IsaacFilm. Todos los derechos reservados).

2. **Formulario de registro de nuevo usuario**
- Formulario (Nombre, Apellido, Correo electrónico, Usuario, Contraseña, Confirmar contraseña, Fecha de nacimiento).
- Componente de calendario.
- Checkbox.
- Aceptar los Términos y Condiciones y Política de Privacidad.
- Botón (Crear Cuenta).
- Pregunta (¿Ya tienes una cuenta?).
- Hiperlink (Inicia sesión).

3. **Inicio de sesion**
- Framer dividico para (Imágen de fondo y Formulario).
- Título de Isaac Film.
- Formulario (Correo electrónico, Contraseña)
- Checkbox de Recordar sesión.
- Hiperlink (¿Olvidaste tu contraseña?)
- Botón (Inicia sesión).

4. **Pantalla de inicio logueado**
Igual que la pantalla de Index pero esta vez con la opcion de (Configuración de cuenta).
- Solo esta el botón (Explorar catálogo).

5. **Pantalla de Catálogo**
- Navbar menú (Inicio, Catálogo, Búsqueda)
- Título (Catálogo de Películas).
- Sección (Buscar Películas, Todos los géneros, Más populares).
- Sección de cards de películas gracias a la API de TMDB.
- Botones (Anterior, Siguiente)
- Contador de páginas de todas las películas gracias a la API de TMDB.
- Pagina de pie (© 2025 IsaacFilm. Todos los derechos reservados).

6. **Detalle de Película**
- Navbar menú (Inicio, Catálogo, Búsqueda, Configuración de cuenta).
- Sección que muestra (Imágen de película, Título de película, Valoración de la película, año de la película, Duración de la película, Característica de la película y descripción).
- Botones (Ver ahora, Añadir a Favoritos).
- Reparto principal: Muestra (Imágen, nombres reales y nombres dentro de la película de los actores).
- Opción disponible para (Ver más) personajes de la película.
- Pie de página (© 2025 IsaacFilm. Todos los derechos reservados).

7. **Búsqueda de película**
- Nabvar menú.
- Título (Buscar Películas)
- Sección para buscar películas por el título.
- Botón (Buscar).
- En el apartado de abajo aparecerán las películas relacionadas con lo que el usuario pide Buscar.

8. **Configuración de perfil**
- Título (Perfil)
- Icono para ir hacia tras
- Perfil de usuario
- Icono de cámara (Permite al usuario cambiar de foto de perfil)
- Botón para Editar Perfil
- Subtítulo de Mis Favoritos
- Opción para Ver Todo (Todas las películas guardadas a Favoritos)
- Cátalogo de las Películas que fueron agregadas a Favoritos
- Botones de ELiminar de Favoritos y Ver Detalles
- Pie de página

9. **Pantalla de mis películas favoritas**
**Interacciones prototipadas:**
- Navegación entre pantallas
- Validación de formularios
- Mensajes de error/éxito
- Estados de carga (loading)


## 🧩 Componentes Reutilizables


**Componentes diseñados:**

#### Botones
- **Primario:** Acciones principales (guardar, enviar)
- **Secundario:** Acciones secundarias (cancelar, volver)
- **Terciario:** Acciones terciarias (enlaces, texto)
- **Estados:** Default, hover, active, disabled, loading

#### Formularios
- **Input text:** Entrada de texto estándar
- **Input password:** Con toggle de visibilidad
- **Select dropdown:** Con búsqueda
- **Checkbox:** Individual y grupos
- **Radio buttons:** Opciones excluyentes
- **Date picker:** Selección de fechas
- **File upload:** Carga de archivos

#### Navegación
- **Navbar:** Barra superior de navegación
- **Sidebar:** Menú lateral colapsable
- **Tabs:** Pestañas para contenido
- **Pagination:** Paginación de listas

#### Feedback
- **Toast notifications:** Mensajes temporales
- **Modals:** Ventanas emergentes
- **Alerts:** Avisos en contexto
- **Loading spinners:** Indicadores de carga
- **Progress bars:** Barras de progreso

#### Visualización de datos
- **Cards:** Tarjetas de información
- **Tables:** Tablas de datos
- **Charts:** Gráficos (si aplica)
- **Stats cards:** Tarjetas de estadísticas

---

### Responsive Design

**Breakpoints definidos:**
- **Mobile:** 320px - 767px
- **Desktop:** 1629px+

### Accesibilidad

**Criterios implementados:**
- Contraste de colores según WCAG 2.1 AA
- Textos alternativos para imágenes
- Navegación por teclado
- Estados de foco visibles
- Jerarquía semántica de encabezados



## 📋 Checklist de Implementación

### Para el Equipo de Desarrollo

**Antes de comenzar un sprint:**
- [ ] Revisar el prototipo de Figma correspondiente al sprint
- [ ] Identificar todos los componentes necesarios
- [ ] Validar los endpoints de backend requeridos
- [ ] Confirmar las historias de usuario vinculadas

**Durante el desarrollo:**
- [ ] Consultar especificaciones de diseño (colores, tipografía, espaciado)
- [ ] Implementar estados de los componentes (hover, active, disabled)
- [ ] Validar responsive design en todos los breakpoints
- [ ] Solicitar feedback del diseñador si hay dudas

**Al finalizar:**
- [ ] Comparar implementación con el prototipo
- [ ] Actualizar este documento con notas de implementación
- [ ] Marcar las pantallas como completadas

---

## 🎨 Assets y Recursos

### Imágenes y Gráficos

**Ubicación:** `src/frontend/assets/images/`

**Assets exportados de Figma:**
- Logotipo (SVG, PNG)
- Iconos personalizados (SVG)
- Imágenes de placeholder (PNG, WebP)
- Ilustraciones (SVG)

**Convención de nombres:**
```
[tipo]-[descripcion]-[tamaño].[extension]

Ejemplos:
icon-user-24px.svg
logo-primary-full.svg
img-hero-1920x1080.webp
illus-empty-state.svg
```


### Preguntas Frecuentes

**P: ¿Dónde encuentro las medidas exactas de espaciado?**  
R: En Figma, selecciona cualquier elemento y revisa el panel de propiedades. Todos los espaciados siguen el sistema de 8px grid.

**P: ¿Puedo modificar un componente para un caso específico?**  
R: Consulta primero con el equipo. Si es un caso único, crea una variante. Si es recurrente, actualiza el componente base en Figma.

**P: ¿Cómo exporto assets de Figma?**  
R: Selecciona el elemento → Export → Configura formato y resolución → Export [nombre].

---

## Contacto y Soporte

**Responsable de diseño:** [Nombre]  
**Canal de comunicación:** [Slack, Discord, etc.]  
**Horario de disponibilidad:** [Especificar]

**Para dudas sobre el prototipo:**
1. Revisar este documento primero
2. Consultar directamente en Figma (comentarios)
3. Preguntar en el canal del equipo
4. Agendar sesión de revisión de diseño

---

## 🔗 Referencias Útiles

**Documentación relacionada:**
- `README.md` - Información general del proyecto
- `docs/sprint-planning/` - Planificación de sprints
- `CONTRIBUTING.md` - Guía de contribución
- `docs/retrospectivas/` - Aprendizajes de los sprints

**Recursos externos:**
- [Guía de Figma](https://help.figma.com)
- [Material Design Guidelines](https://m3.material.io)
- [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines)

---

**Última actualización:** [Fecha]  
**Mantenido por:** [Equipo de diseño/Product Owner]  
**Versión del documento:** 1.0