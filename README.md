# Prueba técnica para Nibi
## Enunciado
Para la siguiente prueba debes desarrollar el siguiente programa: 

Sistema de registro de estudiantes para un salón con 20 personas, Registro de las clases o materias que va a estudiar cada persona, nombre de los profesores de cada materia.

1. Tipo: Web usando React
2. Base de datos: SQL Server (enviar todos los scripts) 
3. Esquema: CRUD (Create, Read, Update, Delete) 
4. Desarrollado en: javascript/ node.js
5. Datos manejados por medio de Stored Procedures (SP)
6. Mínimo 3 tablas

Opcional: el aplicativo tiene que tener adicionalmente un servicio API Rest
## Despliegue  
Frontend: [Nibi Universidad](https://student-enrollment-fe.vercel.app/)  
Backend: [Nibi Universidad BE](https://student-enrollment-be-production.up.railway.app/)  
Endpoints más relevantes:  
 - /students  
 - /students/:id 
 - /teachers
 - /subjects

## Repositorios
Frontend: https://github.com/GrajalesU/student-enrollment-fe  
Backend: https://github.com/GrajalesU/student-enrollment-be  

## Objetivos cumplidos

 - [X] Tipo: Web usando react
 - [ ] Base de datos: SQL Server (enviar todos los scripts) 
 - [X] Esquema: CRUD (Create, Read, Update, Delete)
 - [X] Desarrollado en: javascript/ node.js 
 - [ ]  Datos manejados por medio de Stored Procedures (SP)
 - [X] Minimo 3 tablas

## Dificultades

No encontré un servicio de hosting gratuito para SQL Server, entonces procedí a instalarlo en mi máquina, después de varias horas, no logré crear un usuario y una contraseña para acceder a la base de datos.

Con este inconveniente procedí a utilizar un ORM para todo el tema de la gestión de la base de datos, por esta razón, tampoco usé stored procedures, puesto que ya el ORM se encargaba de almacenar y modificar la inormación de acuerdo a sus rutinas.

Las ventajas del ORM es que me brindaban más seguridad a la hora de almacenar algo dentro de la base de datos y me permitió como desarrollador un desarrollo más ágil de estas funcionalidades.

## Logros

Construí un sistema que permite mostrar al usuario las materias y los profesores de un "universidad", permite ver los estudiantes de la misma y permite a otros estudiantes matricularse dentro de esta, permitiéndole elegir las materias que verá ese semestre.

## Logros técnicos

Frontend:

 - Landing page.
 - Login.
 - Listado de estudiantes, materias y profesores.
 - Página de usuario que permite modificar la matrícula.

Backend:

 - Conexión a base de datos MariaDB.
 - Creación de modelos simples de cada entidad del sistema (estudiante, materia y profesor)
 - Creación de tabla intermediaria (estudiante-materia) para el correcto flujo de la información
 - Creación de los controladores, donde pude hacer todo el CRUD de cada entidad
 - Creación de endpoints para permitir ser consumido por el Frontend
Esto traduce a una API funcional del sistema.

Infraestructura:

 - Base de datos en hosting AlwaysData
 - Backend en Railwail
 - Frontend en Vercel
