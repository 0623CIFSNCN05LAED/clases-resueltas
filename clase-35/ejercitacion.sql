/* Utilizando el Insert, Update, Delete, debemos ejecutar lo siguiente:
1. Insertar en la tabla genres un nuevo género con los siguientes datos:
○ name: Investigación
○ ranking: 13
○ active: 1*/
INSERT INTO genres (name, ranking, active) 
VALUES ('Investigación', 13, 1);

-- 2. Actualizar el nuevo registro “name: Investigación” por “Investigación Científica”.
UPDATE genres 
SET name = 'Investigación Científica'
WHERE name = 'Investigación';

/* 3. Eliminar el registro cuyo name es: “Investigación Científica”. Recordemos verificar
cuál es el id de dicho registro. */
DELETE 
FROM genres 
WHERE name = 'Investigación Científica';

/* Haciendo uso del Select, debemos afrontar las siguientes consultas:
4. Mostrar todos los registros de la tabla “movies”.*/ 
SELECT * FROM movies m 

-- 5. Mostrar el nombre, apellido y rating de todos los actores.
SELECT a.first_name, a.last_name, a.rating 
FROM actors a 

/* 6. Mostrar el título de todas las series. Tomar en cuenta que tanto el nombre de la
tabla como el campo estén en español. */
SELECT s.title as título 
FROM series s 


/*
Micro desafío - Paso 2:
Utilizando el Where y Order by, ejecutemos las siguientes consultas (ten en cuenta el uso
de los operadores lógicos y relacionales).
1. Mostrar el nombre y apellido de los actores cuyo rating sea mayor a 7.5.*/
SELECT a.first_name, a.last_name
FROM actors a  
WHERE rating > 7.5;

/*2. Mostrar el título de las películas, el rating y los premios de las películas con un rating
mayor a 7.5 y con más de dos premios.*/
SELECT m.title, m.rating, m.awards
FROM movies m  WHERE m.rating > 7.5 AND m.awards > 2;

/*
3. Mostrar el título de las películas y el rating ordenadas por rating en forma
ascendente.*/
SELECT m.title, m.rating
FROM movies m 
ORDER BY m.rating ASC;

/*
Micro desafío - Paso 3:
Vamos muy bien, no nos desanimemos ni por un minuto. Ahora, para la realización de las
consultas debemos valernos del Limit y Offset.
1. Mostrar los títulos de las primeras tres películas en la base de datos.*/
SELECT m.title 
FROM movies m 
LIMIT 3;

-- 2. Mostrar el top 5 de las películas con mayor rating.
SELECT *
FROM movies m 
ORDER BY m.rating DESC 
LIMIT 5;

-- 3. Mostrar las top 5 a 10 de las películas con mayor rating.
SELECT *
FROM movies m 
ORDER BY m.rating DESC 
LIMIT 5
OFFSET 5;

-- 4. Listar los primeros 10 actores (sería la página 1).
SELECT *
FROM actors a 
LIMIT 10;

-- a. Luego, usar offset para traer la página 3.*/
SELECT *
FROM actors a 
LIMIT 10
OFFSET 20;



/*
Micro desafío - Paso 4:
Ya casi culminamos todos los desafíos. Utilizando el Between y Like, hagamos las
siguientes consultas:
1. Mostrar el título y rating de todas las películas cuyo título sea Harry Potter.*/
SELECT m.title, m.rating
FROM movies m 
WHERE m.title LIKE '%Harry Potter%'


-- 2. Mostrar a todos los actores cuyos nombres empiecen con Sam.
SELECT * 
FROM actors a 
WHERE a.first_name LIKE 'Sam%';


-- 3. Mostrar el título de las películas que salieron entre el 2004 y 2008.*/
SELECT m.title 
FROM movies m 
WHERE YEAR(m.release_date) >= 2004
AND YEAR(m.release_date) <= 2008;
