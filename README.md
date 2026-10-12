# GymTrack v8 Pro Max

Versión optimizada para GitHub Pages/iPhone.

## Estructura
- `index.html` — aplicación
- `app.js` — lógica, entrenamiento, progresión y datos
- `style.css` — diseño
- `manifest.json` — instalación como app
- `sw.js` — funcionamiento offline y caché
- `images/` — imágenes de ejercicios

## Mejoras v8
- Registro de peso, repeticiones y **RIR por serie**.
- Progresión basada en repeticiones + RIR y pequeños incrementos de carga.
- Conversión correcta entre lb y kg para perfil, historial, sesiones y récords.
- Conversión correcta de pies/pulgadas a centímetros.
- Backup completo que incluye los datos principales y Coach Pro.
- Restauración de backups v8 y compatibilidad con backups anteriores.
- Estadísticas de 7 y 30 días, volumen por músculo, PR y 1RM estimado.
- Sustitución funcional de ejercicios dentro de las rutinas.
- Service Worker actualizado con todas las imágenes locales.
- Sin modo demo.

## Uso en GitHub Pages
Mantén `index.html`, `app.js`, `style.css`, `manifest.json` y `sw.js` en la raíz del repositorio y la carpeta `images/` también en la raíz.


## v11
- Coach diario integrado con recuperación y carga reciente.
- Temas de color personalizables: verde, azul, morado, rosa, rojo, dorado y claro.
- Instrucciones de entrenamiento avanzado visibles dentro de la sesión.
- Backup actualizado a formato v11.


## V16 Premium
Pulido final de UX para iPhone: navegación más fluida, safe areas, objetivos táctiles, estados offline, mensajes inteligentes, prevención de toques duplicados, cierre de hojas, recuperación ante errores, botón volver arriba, accesibilidad de movimiento reducido y metadatos PWA actualizados. Se mantiene un solo perfil por teléfono.


## V16.1 — Entrenamiento flexible y selección por músculos
- Selecciona cualquier rutina para entrenar hoy aunque esté asignada a otro día.
- Si reemplazas la rutina prevista, se conserva y reubica en el próximo día libre; se evita repetir la rutina elegida en su fecha original.
- Plan muestra los próximos siete días con rutinas reprogramadas.
- El creador/editor de días manuales agrupa ejercicios por zonas musculares y muestra músculo, equipo y series/repeticiones.
- Se mantiene un solo perfil por teléfono y se conservan los datos anteriores.
