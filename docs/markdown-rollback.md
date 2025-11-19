# Rollback rápido para fallas en renderizados Markdown

Si el renderizado de Markdown falla en producción después de un despliegue, sigue estos pasos para volver a un estado estable.

1. **Revertir el despliegue actual**
   - Si el despliegue fue con `npm run build` + host estático, vuelve al artefacto anterior: reemplaza la carpeta `dist` publicada por la versión previa (o restaura el artefacto publicado desde el último backup del CDN).
   - En entornos con control de versiones, ejecuta `git revert <sha>` apuntando al commit que introdujo el fallo y vuelve a hacer la publicación habitual (`npm ci && npm run build && npm run preview` para validar localmente).

2. **Vaciar cachés**
   - Purga el CDN/bucket donde se sirven los assets para obligar a los clientes a descargar el CSS/JS restaurado.

3. **Verificación rápida**
   - Carga una vista con Markdown (p. ej. /ayuda) y comprueba que los encabezados, listas y enlaces vuelvan a aplicar estilos.
   - Confirma que el evento `markdown:rendered` vuelve a dispararse en el navegador (puedes inspeccionar con `window.addEventListener('markdown:rendered', console.log)` antes de refrescar).

4. **Seguimiento**
   - Documenta el incidente y abre un issue con los pasos para reproducir el problema original, adjuntando capturas o mensajes de consola relevantes.

> Tip: Mantén una copia del último bundle válido (`dist`) para acelerar futuras recuperaciones.
