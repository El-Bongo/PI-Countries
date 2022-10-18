
# Individual Project - Countries

<p align="left">
  <img height="200" src="./countries.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Aprender mejores prácticas.

## Horarios y Fechas

El proyecto se finalizo en un plazo de dos semanas y media.

## Enunciado

La idea general es crear una aplicación en la cual se pueda ver información de  distintos paises utilizando la api externa [restcountries](https://restcountries.com/) y a partir de ella poder, entre otras cosas:

- Buscar paises
- Filtrarlos / Ordenarlos
- Crear actividades turísticas

### Únicos Endpoints/Flags utilizados

- GET <https://restcountries.com/v3/all>
- GET <https://restcountries.com/v3/name/{name}>
- GET <https://restcountries.com/v3/alpha/{code}>

#### Tecnologías utilizadas

- React
- Redux
- Express
- Sequelize - Postgres

## Frontend

Rutas principales de projecto:

__Pagina inicial__: landing page con

- Alguna imagen de fondo representativa al proyecto
- Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: home

- Input de búsqueda para encontrar países por nombre
- Área donde se verá el listado de países. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta `GET /countries` y deberá mostrar su:
  - Imagen de la bandera
  - Nombre
  - Continente
- Botones/Opciones para filtrar por continente y por tipo de actividad turística
- Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
- Paginado para ir buscando y mostrando los siguientes paises, 10 paises por pagina, mostrando los primeros 9 en la primer pagina.

__Ruta de detalle de país__: contiene

- Los campos mostrados en la ruta principal para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
- Código de país de 3 letras (id)
- Capital
- Subregión
- Área (Mostrarla en km2 o millones de km2)
- Población
- Actividades turísticas con toda su información asociada

__Ruta de creación de actividad turística__: contiene

- Un formulario __controlado con JavaScript en tiempo real__ con los siguientes campos:
  - Nombre
  - Dificultad
  - Duración
  - Temporada
- Posibilidad de seleccionar/agregar varios países en simultáneo
- Botón/Opción para crear una nueva actividad turística

## Base de datos

El modelo de la base de datos tiene las siguientes entidades (Aquellas propiedades marcadas con asterísco son obligatorias):

- País con las siguientes propiedades:
  - ID (Código de 3 letras) *
  - Nombre *
  - Imagen de la bandera *
  - Continente *
  - Capital *
  - Subregión
  - Área
  - Población
- Actividad Turística con las siguientes propiedades:
  - ID
  - Nombre
  - Dificultad (Entre 1 y 5)
  - Duración
  - Temporada (Verano, Otoño, Invierno o Primavera)

La relación entre ambas entidades debe ser de muchos a muchos ya que un país puede contener varias actividades turísticas y, a su vez, una actividad turística puede darse en múltiples países.

## Backend

Se desarrollo un servidor en Node/Express con las siguientes rutas:

__DETALLE__: No se usaron los filtrados, ordenamientos y paginados brindados por la API externa, todas estas funcionalidades fueron implementadas dentro de la aplicación.

- __GET /countries__:
  - En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe retonar sólo los datos necesarios para la ruta principal)
  - Obtener un listado de los paises.
- __GET /countries/{idPais}__:
  - Obtener el detalle de un país en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de país
  - Incluir los datos de las actividades turísticas correspondientes
- __GET /countries?name="..."__:
  - Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
  - Si no existe ningún país mostrar un mensaje adecuado
- __POST /activities__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
  - Crea una actividad turística en la base de datos, relacionada con los países correspondientes