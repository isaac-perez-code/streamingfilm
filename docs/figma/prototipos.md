# Prototipos del Proyecto

## Información del Documento
Presentación - Metodología de Desarrollo


Actividad 1: Definición Inicial del Proyecto Frontend

Idea de la Aplicación Web

IsaacFilm es una plataforma de streaming de películas y series inspirada en Netflix, con un enfoque en contenido independiente y películas de culto.

Problema que resuelve:

· Centraliza películas independientes y de culto que no están disponibles en plataformas mainstream

· Ofrece recomendaciones personalizadas basadas en gustos cinematográficos específicos

· Proporciona una experiencia de usuario similar a Netflix, pero para nichos de contenido específicos

· Permite a usuarios descubrir nuevo contenido basado en sus preferencias

Requerimientos Funcionales

Gestión de Usuarios

· Registro y autenticación de usuarios

· Perfiles de usuario personalizables

· Sistema de favoritos y listas personalizadas

Contenido

· Catálogo de películas y series organizado por categorías

· Reproductor de video integrado

· Sistema de búsqueda y filtrado avanzado

Personalización

· Recomendaciones basadas en historial de visualización

· Calificación y reseñas de contenido

· Sistema de notificaciones de nuevos lanzamientos

Administración

· Panel de administración para gestión de contenido

· Estadísticas de uso y visualizaciones

· Gestión de usuarios y permisos

Requerimientos No Funcionales

Rendimiento

· Tiempo de carga inferior a 3 segundos para la página principal

· Streaming de video sin buffering en conexiones de 10Mbps

Seguridad

· Autenticación segura con encriptación de contraseñas

· Protección contra ataques XSS y SQL injection

Usabilidad

· Interfaz intuitiva con curva de aprendizaje menor a 5 minutos

· Diseño responsive compatible con dispositivos móviles y tablets

Escalabilidad

· Arquitectura capaz de soportar hasta 10,000 usuarios concurrentes

· Base de datos optimizada para grandes volúmenes de contenido

Disponibilidad

· Tiempo de actividad del 99.9% (uptime)

· Sistema de backup y recuperación ante desastres

Estructura Básica de la Aplicación

Frontend (Cliente)

· Login/Registro: Autenticación de usuarios

· Página Principal: Catálogo con recomendaciones

· Página de Detalles: Información de películas/series

· Reproductor: Visualización de contenido

· Perfil de Usuario: Gestión de preferencias y listas

Backend (Servidor)

· API REST: Comunicación entre frontend y backend

· Base de Datos: Almacenamiento de usuarios, contenido y preferencias

· Servidor de Streaming: Entrega optimizada de video

· Sistema de Recomendación: Algoritmos de sugerencia de contenido

Manifiesto Ágil - 12 Principios

1. Satisfacción del cliente

Entregar software valioso de forma temprana y continua

2. Aceptar el cambio

Reaccionar ante cambios competitivos incluso en etapas tardías

3. Entregar con frecuencia

Desde un par de semanas hasta un par de meses

4. Colaboración

Negocios y desarrolladores trabajando juntos

5. Motivación

Proyectos construidos alrededor de individuos motivados

6. Comunicación cara a cara

Forma más eficiente de transmitir información

7. Software funcionando

Principal medida de progreso

8. Desarrollo sostenible

Ritmo constante indefinidamente

9. Excelencia técnica

Atención continua a la calidad y buen diseño

10. Simplicidad

Maximizar la cantidad de trabajo no realizado

11. Auto organización

Equipos que se auto-organizan producen mejores diseños

12. Reflexión y ajuste

Ajustar comportamiento a intervalos regulares

Metodología Ágil - Scrum

Características principales:

· Sprints: Iteraciones de tiempo fijo (2-4 semanas)

· Roles: Product Owner, Scrum Master, Equipo de Desarrollo

· Artefactos: Product Backlog, Sprint Backlog, Incremento

· Eventos: Sprint Planning, Daily Stand-up, Sprint Review, Retrospectiva

Aplicación en IsaacFilm:

· Sprint 1: Autenticación y estructura básica

· Sprint 2: Catálogo y sistema de búsqueda

· Sprint 3: Reproductor de video y favoritos

· Sprint 4: Sistema de recomendaciones y perfiles

Roles para el Proyecto Frontend

Product Owner

Responsable de maximizar el valor del producto y gestionar el Product Backlog

Scrum Master

Facilita el proceso Scrum, elimina impedimentos y asegura que el equipo siga la metodología

Desarrolladores Frontend

Implementan la interfaz de usuario utilizando HTML, CSS, JavaScript y frameworks

Diseñador UI/UX

Crea la experiencia de usuario y la interfaz visual de la aplicación

QA Tester

Asegura la calidad del software mediante pruebas funcionales y de usabilidad

Historias de Usuario para IsaacFilm

HU01: Registro de nuevo usuario

Como: Usuario nuevo

Quiero: Poder registrarme en la plataforma

Para: Acceder al catálogo de películas y series

Criterios de aceptación:

· Formulario con email, usuario y contraseña

· Validación de campos obligatorios

· Verificación de que el usuario no existe

· Redirección a página principal tras registro exitoso

HU02: Búsqueda de contenido

Como: Usuario registrado

Quiero: Poder buscar películas y series

Para: Encontrar contenido específico rápidamente

Criterios de aceptación:

· Campo de búsqueda visible en header

· Resultados en tiempo real mientras se escribe

· Filtrado por categorías en resultados

· Manejo de búsquedas sin resultados

HU03: Ver detalles de película

Como: Usuario interesado en una película

Quiero: Ver información detallada de una película

Para: Decidir si quiero verla

Criterios de aceptación:

· Página con título, sinopsis, elenco y director

· Visualización de calificación y reseñas

· Botón para reproducir o añadir a favoritos

· Recomendaciones de contenido similar

Proyecto IsaacFilm - Actividad 1: Definición Inicial del Proyecto Frontend

Metodología de Desarrollo - © 2025 Isaac Code

**Última actualización:** [13/10/2025]  
**Versión del prototipo:** [v1.0]  
**Herramienta:** Figma  

---

## Propósito del Prototipo

Este documento centraliza toda la información sobre los **diseños y prototipos** creados en Figma para el proyecto. Sirve como **puente entre el diseño UX/UI y el desarrollo técnico**, facilitando la implementación durante los sprints.

**Objetivos del prototipo:**
- Validar la **experiencia de usuario** antes de desarrollar
- Alinear la **visión del producto** entre todos los miembros del equipo
- Servir como **referencia visual** durante el desarrollo backend y frontend
- Documentar las **decisiones de diseño** tomadas en cada sprint

---

## Enlaces Principales

### Proyecto Principal
**URL:** [https://www.figma.com/design/rJSE8SbLOQ39c8cuMvQCHl/App-IsaacFilm?node-id=498-844&t=M0we6lrvCKBRT3ab-1]

---

## Estructura del Prototipo

### Sistema de Diseño

**Paleta de colores:**
- **Color primario:** #000000 - Acciones principales
- **Color secundario:** #101010 - Elementos complementarios
- **Color de acento:** #232323 - Llamadas a la acción
- **Color cajas secundario:** #232323 - Para cajas

- **Colores de estado:**
  - Éxito: #XXXXXX
  - Error: #XXXXXX
  - Advertencia: #XXXXXX
  - Info: #XXXXXX

**Tipografía:**
- **Principal:** [Nombre de fuente] - Textos y contenido
- **Títulos:** [Nombre de fuente] - Encabezados


**Espaciado:**
- Sistema de **8px grid**
- Espaciado base: 8px, 16px, 24px, 32px

---

## Pantallas incluidas:**
### Flujo Principal
1. **Página de bienvenida**
   

2. **Formulario de registro**
   

3. **Verificación de email**
   

4. **Login**
   

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
- **Desktop:** 1024px+

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