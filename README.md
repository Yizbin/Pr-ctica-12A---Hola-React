## Preguntas y Respuestas

### 1. ¿En qué se convirtió cada etiqueta del JSX con SWC?
* **Modo clásico (`"runtime": "classic"`):** SWC traduce cada etiqueta JSX a una llamada a la función `React.createElement('etiqueta', props, ...hijos)`.
* **Modo automático (`"runtime": "automatic"`):** SWC importa un helper interno desde `react/jsx-runtime` (como `_jsx` o `_jsxs`) y convierte cada etiqueta en una llamada del tipo `_jsx('etiqueta', { ...props, children })`.

---

### 2. Si React es «sólo una biblioteca», ¿quién traduce el JSX?
El JSX es traducido por un **compilador/transpilador** en el paso de construcción (*build time*), como **SWC**, **Babel** o **esbuild**. React no procesa el JSX directamente en el navegador; el compilador transforma la sintaxis JSX a código JavaScript nativo ejecutable antes o durante el empaquetado del proyecto.

---

### 3. ¿Qué hace `createRoot` y qué hace `render`?
* **`createRoot`**: Toma un nodo del DOM real (por ejemplo, `document.getElementById('root')`) y crea la raíz del árbol de componentes de React, preparando la infraestructura del Virtual DOM sobre ese elemento.
* **`render`**: Recibe el componente principal de React y se encarga de renderizar y sincronizar la jerarquía de componentes dentro del contenedor raíz configurado.

---

### 4. ¿Por qué el nombre de un componente empieza con mayúscula?
Porque React utiliza la convención de la primera letra para diferenciar entre **elementos nativos de HTML** (que se escriben en minúsculas, como `<div>` o `<p>`) y **componentes personalizados** (que inician con mayúscula, como `<Saludo />` o `<TarjetaPerfil />`). Si un componente se define en minúsculas, React intentará renderizarlo como una etiqueta HTML común.

---

### 5. ¿Cuál es la diferencia entre escribir `semestre="8"` y `semestre={8}`?
* **`semestre="8"`**: Transmite el valor como un tipo de dato **cadena de texto** (`string`).
* **`semestre={8}`**: Evalúa el contenido dentro de las llaves como una expresión de JavaScript, pasando el valor como un tipo **numérico** (`number`). En TypeScript, esto permite cumplir con la interfaz esperada (`semestre: number`).
