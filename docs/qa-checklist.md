# Checklist de QA rápida

## Preparación del entorno
- [ ] Ejecuta `npm install` si es la primera vez o si el preflight de `npm run dev` reporta dependencias faltantes.
- [ ] Levanta la app con `npm run dev -- --host --port 4173` y verifica que Vite muestre la URL sin errores.
- [ ] Mantén abierta la consola para capturar warnings en caliente mientras navegas.

## Revisiones de Markdown
- [ ] En una lección, abre cualquier sección con ejemplos y confirma que el bloque usa estilos rich text (listas, código y separadores) en lugar de markdown plano.
- [ ] Revisa el Centro de Ayuda y las Preguntas Frecuentes: expande al menos dos ítems y valida que listas, enlaces y notas se rendericen con formato consistente.
- [ ] Prueba con contenido que incluya tablas o bloques `~~~text` para asegurarte de que el renderer los pinta con la tipografía monoespaciada.

## Accesibilidad y navegación
- [ ] Navega con teclado (Tab/Shift+Tab) dentro de un bloque de contenido Markdown y verifica que los enlaces muestran el foco visible y que los encabezados pueden recibir foco programáticamente.
- [ ] Activa un lector de pantalla y usa la navegación por encabezados para confirmar que la jerarquía h1/h2/h3 se anuncia correctamente.
- [ ] Desde una tarjeta o enlace del dashboard, recorre hasta una lección y vuelve atrás con el botón correspondiente para validar el orden de foco.

## Pruebas funcionales rápidas
- [ ] Completa una pregunta de quiz en alguna lección y comprueba que el estado de aprobado se refleja en el progreso del módulo.
- [ ] Abre el glosario o tooltips relacionados y confirma que los términos se leen correctamente con el lector de pantalla.

## Cierre
- [ ] Ejecuta `npm run test` antes de subir cambios en código.
- [ ] Documenta cualquier warning o error que aparezca durante las validaciones para que el equipo pueda reproducirlos.
