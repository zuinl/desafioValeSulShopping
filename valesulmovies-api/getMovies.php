<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

require_once 'classes/Movie.php';

if($_SERVER['REQUEST_METHOD'] !== "GET") {
    $response = array(
        "errorCode" => "InvalidRequestMethod",
        "message" => "Este recurso só aceita requisições do tipo GET"
    );

    http_response_code(400);
    echo json_encode($response);
} else {
    $name = isset($_GET['name']) ? $_GET['name'] : "";
    $year_publication = isset($_GET['year_publication']) ? $_GET['year_publication'] : "";
    $genre = isset($_GET['genre']) ? $_GET['genre'] : "";
    $onlyFeatured = isset($_GET['onlyFeatured']) ? $_GET['onlyFeatured'] : "";

    $movie = new Movie();

    $movie->getMovies($name, $year_publication, $genre, $onlyFeatured);
}

?>