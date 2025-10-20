# Prototipos del Proyecto

## Información del Documento
**Curso:** Backend Developer Web
**Proyecto:** Plataforma de Streaming IsaacFilm
**Actividad:** Definición Inicial del Proyecto Frontend
**Autor:** Isaac Pérez
**Última actualización:** [17/10/2025]  
**Versión del prototipo:** [v1.1]  
**Herramienta:** [![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)]()

---

## Propósito del Prototipo 

Este documento centraliza toda la información sobre los **diseños y prototipos** creados en Figma para el proyecto IsaacFilm, una plataforma inspirada en el estilo visual de Netflix, pero con una identidad visual cinematográfica y minimalista. Sirve como **puente entre el diseño UX/UI y el desarrollo técnico**, facilitando la implementación durante los sprints.

**Objetivos del prototipo:**
- Validar la **experiencia de usuario** antes del desarrollo
- Documentar las **interacciones clave** (registro, búsqueda, detalles, favoritos)
- Establecer una **referencia visual uniforme** para los sprints de desarrollo
- Garantizar la **consistencia visual** entre diseño y codigo
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
- **Primario:** #000000 - Fondo general del tema oscuro
- **Secundario:** #1A1A1A - Paneles y secciones secundarias
- **Acento:** #E50914 - Botones, indicadores activos
- **Texto principal** #FFFFFF - Tipografía principal
- **Texto secundario** #B3B3B3 - Descripciones y detalles
- **Borde/Detalles** #2E2E2E - Líneas divisorias

- **Colores de estado:**
  - Éxito: #648DDB - Mensajes positivos
  - Error: #FF0000 - Validaciones fallidas
  - Advertencia: #CD3546 - Alertas
  - Info: #ACA5A5 - Notificaciones informativas

**Tipografía:**
- **Texto Principal:** [Afacad-Bold-96px] 
- **Subtítulos:** [Adamina-Regular-32px] 
- **Cajas y encabezados secundarios** [Afacad-Bold-48px] 
- **Texto general y cards** [Actor-REgular-24px] 
- **Pie de página** [Abhaya-Regular-24px] 

**Espaciado:**
- Sistema de espaciado**8px grid**
- Espaciado base: 8px, 16px, 24px, 32px
- Márgen interno de tarjetas: 10px - 16px
- Espaciado entre secciones: 64px
---

## Pantallas incluidas:**
### Flujo Principal
1. **Pantalla principal (usuario no logueado)**
- Hero section con mensaje: "Descubre cine que no encontrarás en otras plataformas"
- Botones: "Comenzar ahora" y "Explorar catálogo"
- Navbar: Inicio, Catálogo, Búsqueda
- Pie de pagina personalizado

2. **Formulario de registro**
- Campos: Nombre, Apellido, Correo, Contraseña, Confirmación, Fecha de nacimiento
- Checkbox: Crear cuenta
- Enlace: "¿Ya tienes una cuenta? Inicia sesión" 

3. **Inicio de sesion**
- Fondo dividido (imágen + formulario)
- Campos: Email y contraseña
- Checkbox: Recordar sesión
- Link: ¿Olvidaste tu contraseña?
- Botón: Iniciar sesión

4. **Pantalla de inicio (usuario logueado)**
- Similar al index pero con acceso a Configuración de Cuenta
- Botón principal: Explorar catálogo

5. **Catálogo de películas**
- Sección con resultados obtenidos de la API de TMDB
- Filtros: Todos los géneros, Más populares
- Paginación: Botones Anterior, Siguiente + contador
- Pie de página personalizado

6. **Detalle de Película**
- Imágen destacada, título, valoración, año, duración y descripción
- Botones: Ver ahora, Añadir a Favoritos
- Sección de reparto con nombres e imágenes
- Recomendaciones relacionadas

7. **Búsqueda**
- Campo de búsqueda visible con resultados dinámicos
- Filtro de coincidencias y manejo de búsquedas vacías

8. **Configuración de perfil**
- Foto de pefil editable
- Sección "Mis Favoritos"
- Opción "Ver Todo" para mostrar todas las películas guardadas

9. **Pantalla de mis películas favoritas**
- Lista de cards con opciones "Ver Detalles" y "Eliminar de favoritos"
  
**Interacciones prototipadas:**
- Navegación entre pantallas
- Validación de formularios
- Mensajes de error/éxito
- Estados de carga (loading)


## 🧩 Componentes Reutilizables


**Componentes diseñados:**

#### Botones
- **Primario:** Acciones principales (guardar, enviar) - #E50914
- **Secundario:** Acciones secundarias (cancelar, volver) - estilo menos prominente
- **Terciario:** Acciones terciarias (enlaces, texto) - estilo textual
- **Estados:** Default, hover, active, disabled, loading (cada estado documentado como variante en figma)

#### Formularios
- **Input text:** Entrada de texto estándar con placeholder y label
- **Input password:** Con toggle para mostrar/ocultar contraseña
- **Select dropdown:** Con búsqueda interna para listas largas
- **Checkbox:** Individual y grupos (con estados: cheched / unchecked / indeterminate)
- **Radio buttons:** Opciones excluyentes visualmente claras
- **Date picker:** Selección de fechas (para registro)
- **File upload:** Carga de archivos (foto de perfil), con validación de formato/tamaño

#### Navegación
- **Navbar:** Barra superior de navegación fija, responsive, con logo y búsquedas
- **Sidebar:** Menú lateral colapsable (opcional para vistas internas)
- **Tabs:** Pestañas para contenido en vistas
- **Pagination:** Paginación de listas numéricas y controles Prev/Next

#### Feedback
- **Toast notifications:** Mensajes temporales para confirmar acciones
- **Modals:** Ventanas emergentes para confirmaciones
- **Alerts:** Avisos en contexto para errores o información crítica
- **Loading spinners:** Indicadores de carga para peticiones
- **Progress bars:** Barras de progreso para cargas o procesos largos

#### Visualización de datos
- **Cards:** Tarjeta de película (poster, título, rating)
- **Tables:** Tablas para vistas administrativas o listados técnicos
- **Charts:** Gráficos (si aplica para analíticas) 
- **Stats cards:** Tarjetas con métricas (usuarios activos, películas añadidas)h

---

### Responsive Design

**Breakpoints definidos:**
- **Mobile:** 442px - 984px
- **Desktop:** 1629px +
  
**Ajustes:**
  - Navegación colapsable en móvil (hamburger menu)
  - Grid de películas reflow (4 columnas -> 2 -> 1 según breackpoint)
  - CTA y botones reescalados para accesibilidad táctil
    
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
- [X] Revisar el prototipo de Figma correspondiente al sprint
- [X] Identificar todos los componentes necesarios
- [X] Validar los endpoints de backend requeridos
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

**Responsable de diseño:** Isaac Pérez  
**Canal de comunicación:** GitHub Issues  
**Horario de disponibilidad:** Lunes a viernes - 8:00 a.m. a 5:00 p.m.

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

**Última actualización:** 17/10/2025 
**Mantenido por:** Equipo de Diseño y Desarrollo IsaacFilm
<<<<<<< HEAD
**Versión del documento:** 1.0
=======
**Versión del documento:** 1.0
>>>>>>> f800a45cc8b0aa4544d51fca8f741a5922d6bd60
