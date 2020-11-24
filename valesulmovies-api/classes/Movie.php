<?php

class Movie
{

    public function getMovies($name, $year_publication, $genre, $onlyFeatured)
    {
        $json = file_get_contents("movies.json", true);

        $movies = json_decode($json);

        if (!$name && !$year_publication && !$genre && !$onlyFeatured) {
            http_response_code(200);
            echo json_encode($movies);
        } else {
            $moviesToReturn = array();
            $index = 0;

            foreach ($movies as $movie) {
                $includes = true;

                if ($name && $movie->name != $name) {
                    $includes = false;
                }

                if ($year_publication && $movie->year_publication != $year_publication) {
                    $includes = false;
                }

                if ($genre && !in_array($genre, $movie->genres)) {
                    $includes = false;
                }

                if((string)$onlyFeatured === "1" && !$movie->featured) {
                    $includes = false;
                }

                if((string)$onlyFeatured === "0" && $movie->featured) {
                    $includes = false;
                }


                if ($includes) {
                    $moviesToReturn[$index] = $movie;
                    $index++;
                }
            }

            http_response_code(200);
            echo json_encode($moviesToReturn);
        }
    }
}
