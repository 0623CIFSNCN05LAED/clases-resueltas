/* Micro desafío - Paso 1:
Utilizando la base de datos de películas queremos conocer, por un lado, los títulos y el
nombre del género de todas las series de la base de datos. Por otro, necesitamos listar los
títulos de los episodios junto con el nombre y apellido de los actores que trabajan en cada
uno de ellos. */

SELECT s.title, g.name 
FROM series s 
JOIN genres g on s.genre_id = g.id; 


SELECT e.title , a.first_name, a.last_name
FROM episodes e 
JOIN actor_episode ae ON e.id = ae.episode_id 
JOIN actors a ON ae.actor_id = a.id; 


/* Micro desafío - Paso 2:
Para nuestro próximo desafío necesitamos obtener a todos los actores o actrices (mostrar
nombre y apellido) que han trabajado en cualquier película de la saga de la Guerra de las
galaxias, pero ¡cuidado!: debemos asegurarnos de que solo se muestre una sola vez cada
actor/actriz. */


SELECT DISTINCT a.first_name , a.last_name 
FROM actors a 
JOIN actor_movie am ON a.id = am.actor_id 
JOIN movies m ON am.movie_id = m.id 
WHERE m.title LIKE '%Guerra de las galaxias%';


/*Micro desafío - Paso 3:
Debemos listar los títulos de cada película con su género correspondiente. En el caso de
que no tenga género, mostraremos una leyenda que diga "no tiene género". Como ayuda
podemos usar la función COALESCE() que retorna el primer valor no nulo de una lista.
Podemos encontrar más información haciendo click acá.*/

SELECT m.title, COALESCE(g.name, 'no tiene género')
FROM movies m 
LEFT JOIN genres g on m.genre_id = g.id; 


/*Micro desafío - Paso 4:
Necesitamos mostrar, de cada serie, la cantidad de días desde su estreno hasta su fin, con
la particularidad de que a la columna que mostrará dicha cantidad la renombraremos:
“Duración”. Por ejemplo:
*/

-- opción 1
SELECT s.title as Título, DATEDIFF(s.end_date, release_date) as Duración 
FROM series s; 

-- opción 2
SELECT s.title,
	(YEAR (s.end_date) - YEAR (s.release_date)) * 12 +
	(MONTH (s.end_date) - MONTH (s.release_date)) AS duración
FROM series s; 









-- Micro desafío - Paso 5:
-- Listar los actores ordenados alfabéticamente cuyo nombre sea mayor a 6 caracteres.
SELECT a.first_name, a.last_name 
FROM actors a 
WHERE char_length(a.first_name) > 6 
ORDER BY a.first_name ASC; 


-- Debemos mostrar la cantidad total de los episodios guardados en la base de datos.
SELECT count(*)
FROM episodes e; 


/* Para el siguiente desafío nos piden que obtengamos el título de todas las series y el total
de temporadas que tiene cada una de ellas. */

SELECT s.title AS serie, count(*) AS 'total de temporadas'  
FROM series s 
JOIN seasons s2 ON s.id = s2.serie_id 
GROUP BY s.title; 


/*
Mostrar, por cada género, la cantidad total de películas que posee, siempre que sea mayor
o igual a 3.
*/

SELECT g.name, count(*) as 'cantidad de películas'
FROM movies m 
JOIN genres g ON m.genre_id = g.id 
GROUP BY g.name 
HAVING count(*) >= 3;
