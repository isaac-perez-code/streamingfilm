# Sprint Planning - Sprint 1

**Fecha de Planning:** 17/10/2025  
**Duración del Sprint:** 2 semanas  

---

## 🎯 Objetivo del Sprint

Definir e implementar la base visual y funcional del sistema **IsaacFilm**, centrando el esfuerzo en el **diseño UX/UI**, el flujo de **registro e inicio de sesión**, y la integración inicial del **catálogo de películas** proveniente de la API TMDB.

El propósito de este sprint es entregar un **MVP navegable en Figma** y la **estructura base del frontend y backend** en GitHub, garantizando coherencia entre diseño, funcionalidad y documentación técnica.

---

## 🧩 Product Backlog Seleccionado

### Historias de Usuario Comprometidas

---

#### Historia #1: Registro de usuarios
- **Como:** usuario nuevo  
- **Quiero:** registrarme con mis datos personales y crear una cuenta  
- **Para:** poder acceder al catálogo de películas personalizadas  
- **Story Points:** 5  
- **Criterios de Aceptación:**
  - [x] El formulario debe incluir los campos: nombre, apellido, correo, usuario, contraseña y fecha de nacimiento.  
  - [x] Validar que ningún campo esté vacío y mostrar mensajes de error claros.  
  - [x] Mostrar mensaje de confirmación al crear una cuenta exitosamente.

---

#### Historia #2: Inicio de sesión
- **Como:** usuario registrado  
- **Quiero:** iniciar sesión con mi correo y contraseña  
- **Para:** acceder a mi perfil y ver mis películas favoritas  
- **Story Points:** 5  
- **Criterios de Aceptación:**
  - [x] El formulario debe validar credenciales contra la base de datos simulada o archivo JSON.  
  - [x] Mostrar mensaje de error si los datos son incorrectos.  
  - [x] Redirigir a la pantalla de inicio al iniciar sesión correctamente.

---

#### Historia #3: Catálogo de películas
- **Como:** usuario autenticado  
- **Quiero:** visualizar un catálogo con las películas disponibles  
- **Para:** explorar títulos y acceder a su información detallada  
- **Story Points:** 8  
- **Criterios de Aceptación:**
  - [x] Mostrar al menos 8 películas por defecto con sus portadas.  
  - [x] Incluir botones “Ver Detalles” y “Añadir a Favoritos”.  
  - [x] Consumir datos de la API TMDB o dataset estático de respaldo.

---

#### Historia #4: Navegación principal
- **Como:** usuario general  
- **Quiero:** poder desplazarme fácilmente por las secciones del sistema  
- **Para:** acceder rápidamente al catálogo, perfil y favoritos  
- **Story Points:** 3  
- **Criterios de Aceptación:**
  - [x] Navbar visible en todas las pantallas principales.  
  - [x] Diseño responsive para escritorio y móvil.  
  - [x] Accesos a Inicio, Catálogo y Búsqueda.

---

## 🔢 Total de Story Points: **21**

---

## 📅 Entregables del Sprint
- Prototipo funcional en **Figma** (v1.1).  
- Repositorios estructurados en GitHub (frontend y backend).  
- Documentación de componentes UI y flujos.  
- README.md actualizado con propósito, objetivos y enlaces.  
- Carpeta `docs/` con planificación y retrospectiva.

---

## 📋 Herramientas Utilizadas
- **Figma:** Diseño UX/UI  
- **GitHub:** Control de versiones  
- **VS Code:** Entorno de desarrollo  
- **Trello / Notion:** Gestión de tareas y seguimiento Scrum  
- **Canva:** Elementos visuales de presentación  

---

**Responsable:** Isaac Pérez  
**Equipo:** Diseño y Desarrollo IsaacFilm  
**Versión del documento:** v1.0  
**Última actualización:** 17/10/2025
