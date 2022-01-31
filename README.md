# PLENNA MEDICAL

[Plenna medical](https://plenna-medical.netlify.app/) proyecto desarrollado en React y CSS, por parte del Front End.

## Inicializando el proyecto

#### Dependecias

- Es necesario instalar las dependencias, tan pronto se clone el proyecto.

```shell
$ npm install
```

Una vez hecho esto, crear un archivo `.env` para generar las variables de entorno.

`.env`

```
REACT_APP_BACKEND_URL='API_BACKEND'
```

Para correr la aplicación de manera local, deberá ejecutar:

### `npm run start`

puede visualizar el proyecto en el navegador:
[http://localhost:3000](http://localhost:3000).

##Estructura del proyecto

**El proyecto se estructura de la siguiente manera:**

- public
- src
  - componentes
  - config
  - context
  - routes
- Hoja de estilos
- Archivo principal de JS
- Router

## Páginas del portal médico

- Home
- Registro
- Inicia sesión
- Nuestros pacientes
- Detalles de un paciente
- Consultas
- Detalles de una consulta
- Página no encontrada

#### Home

El home es una página cuyo proposito es meramente hablar sobre el portal y su próposito en el mercado.
http://localhost:3000

#### Register

Página de autenticación, cuentan con la integración de un manejo de errores, email previamente registrado. [Registro](http://localhost:3000/signup)

#### Login

Página de autenticación, cuentan con la integración de un manejo de errores, email inválido, password o email incorrecto. [Inicio de sesión](http://localhost:3000/login)

### Nuestros pacientes

En está vista se renderizan nuestros actuales pacientes.
[Nuestros cursos](http://localhost:3000/patients)

### Detalles de un paciente

Cada paciente tiene una página con el detalle completo. Basta con dar click a uno en especifico para redireccionarlo [Nombre de paciente](http://localhost:3000/patients/:patientId).
En esta vista el medico podrá encontrar el historial médico con consultas previas e iniciar nueva consulta.

### Consulta

Está página permite ingresa diagnostico, exploración física, receta, así como servicios, estudios o productos extras. [Iniciar nueva consulta](http://localhost:3000/consult/:patientId).

### Detalles de consulta

Cada consulta tiene una página con el detalle completo. Basta con dar click a uno en especifico para redireccionarlo [detalles de consulta](http://localhost:3000/consult/:consultId).

### Página de error

En la página de error se muestra en caso de no encontrar coincidencias [Error](*)

### Gracias

Comentarios y sugerencias:
[Github](https://github.com/DulceFabiola)
[Twitter](https://twitter.com/DulcefabiolaRm)
