# Plan MECE para resolver el error de `react-markdown`

1. **Diagnóstico inicial (Análisis)**
   - Ejecuta `npm run dev` y captura el mensaje completo para confirmar que el error es de resolución de paquete.
   - Verifica la versión de Node (`node -v`) y npm (`npm -v`) para descartar incompatibilidades de entorno.

2. **Auditoría de dependencias**
   - Revisa `package.json` y confirma que `react-markdown` aparece en `dependencies`.
   - Ejecuta `npm ls react-markdown` para validar que está instalado correctamente.

3. **Revisión de archivos clave**
   - Inspecciona `src/components/MarkdownText.jsx` para confirmar que el import es `import ReactMarkdown from 'react-markdown'`.
   - Comprueba que no existan alias o cambios en `vite.config.js` que reescriban la resolución del paquete.

4. **Perfeccionamiento en caliente**
   - Si falta el paquete, instala con `npm install react-markdown`.
   - Vuelve a correr `npm run dev`; si aún falla, limpia el caché eliminando `node_modules` y reinstala con `npm ci`.

5. **Validación final y pruebas**
   - Ejecuta `npm run build` para asegurar que el bundle de producción se genera sin errores.
   - Comprueba las vistas que usan `MarkdownText` (lecciones, guías rápidas) para validar que el renderizado de Markdown funciona.

> Nota: cualquier comando de ejecución (`npm run dev`, `npm run build`, `npm run preview`, etc.) dispara un prechequeo automático (`scripts/verify-deps.mjs`) que alerta si falta alguna dependencia antes de iniciar el flujo.
