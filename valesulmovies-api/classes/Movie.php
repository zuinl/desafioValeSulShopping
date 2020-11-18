<?php

    class Movie {
        
        public function getMovies($name, $year_publication, $genre, $onlyFeatured) {
            $json = file_get_contents("movies.json", true);

            $movies = json_decode($json);

            if(!$name && !$year_publication && !$genre && !$onlyFeatured) {
                http_response_code(200);
                echo json_encode($movies);
            } else {
                $moviesToReturn = array();
                $index = 0;

                foreach($movies as $movie) {
                    $includes = false;

                    if((string)$onlyFeatured === "1") {
                        if($movie->featured == true) {
                            $includes = true;
                        }
                    } else {
                        if($name && $movie->name == $name) {
                            $includes = true;
                        }
    
                        if($year_publication && $movie->year_publication == $year_publication) {
                            $includes = true;
                        }
    
                        if($genre && in_array($genre, $movie->genres)) {
                            $includes = true;
                        }
                    }

                    if($includes) {
                        $moviesToReturn[$index] = $movie;
                        $index++;
                    }
                }

                http_response_code(200);
                echo json_encode($moviesToReturn);
            }
        }
        
    }

?>