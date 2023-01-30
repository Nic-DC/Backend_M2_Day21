// 1. Find all columns from the film table.
SELECT 
	* 
FROM 
	film

// 2. Find district,phone,postal_code from “address” table.
SELECT 
	district || ' , phone: ' || phone  || ' , postal_code: ' || postal_code AS fulladdress
FROM 
	address

// 3. Find address, district,postal_code and concat them and get as “full_address”.
SELECT 
	address || ' , district: ' || district  || ' , postal_code: ' || postal_code AS full_address
FROM 
	address


// 4. Find all “R” rated movies, return title, rating and length only
SELECT 
	title, rating, length
FROM 
	film
WHERE
	rating = 'R'


// 5. Find all “G” rated movies with a length greater than 3 hours
SELECT 
	title, rating, length
FROM 
	film
WHERE
    rating = 'R' AND length > 180
    

// 6. Find top 10 payments by amount spent
SELECT 
	payment_id || ' , customer_id: ' || customer_id  || ' , amount: $' || amount AS bigspenders
FROM 
	payment
WHERE
	amount > 10 
ORDER BY
	amount DESC
LIMIT 10


// 7. Find first 5 films, sort them by title DESC
SELECT 
	title, description, release_year
FROM 
	film
WHERE 
	release_year > 1900
ORDER BY
	title DESC
LIMIT 5


// 8. Find all payments with amount between 1 and 2 and sort them by amount descending order
SELECT 
	*
FROM 
	payment
WHERE 
	amount BETWEEN 1 AND 2
ORDER BY
	amount DESC


// 9. Find payments that happened in March 2007
SELECT 
	customer_id,amount
FROM 
	payment
WHERE 
	payment_date BETWEEN '2007-03-01' AND '2007-03-31'
ORDER BY
	amount DESC


// 10. Find all films which title contains the word “north”
SELECT 
	title, description, replacement_cost
FROM 
	film
WHERE 
	title ILIKE '%north%'
ORDER BY
	replacement_cost DESC



// 11. Find all actors with surname starting with “W”
SELECT 
	actor_id, first_name, last_name
FROM 
	actor
WHERE 
	last_name LIKE 'W%'
ORDER BY 	
	actor_id DESC


// 12. Find all actors with name containing three caracthers and last one is “y”
SELECT 
	actor_id, first_name, last_name
FROM 
	actor
WHERE 
	first_name ILIKE '__y' OR last_name ILIKE '__Y'
ORDER BY 	
	actor_id DESC 


/* -----------------------------------------------------------------------------------
INVENT 5 exercises on this db, they’ll be asked to your colleagues at the debrief 🙂
----------------------------------------------------------------------------------- */

// 13. Find all movies whose titles have maximum 13 characters, start with "C", and only
// display the title and description columns
SELECT 
	title, description
FROM 
	film
WHERE 
	title ILIKE 'C____________' 


// 13. Find all movies whose titles finish in "W" or their descriptions start with "a" and display
//     them by id in a descending order, but only the title and description columns
SELECT 
	title, description
FROM 
	film
WHERE 
	title ILIKE '%w' OR description ILIKE 'boat%'
ORDER BY 	
	film_id DESC


// 14. Display the title and description of all movies that are over 2 hours long and include "India" 
//     in their description

SELECT 
	title, description
FROM 
	film
WHERE 
	description ILIKE '%India%' AND length > 120
ORDER BY 	
film_id 
    

// 15. 