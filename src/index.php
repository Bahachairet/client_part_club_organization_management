<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $sql = "SELECT * FROM product";
        $result = $conn->query($sql);

        $products = array();
        while ($row = $result->fetch_assoc()) {
            $products[] = $row;
        }
        
        echo json_encode($products);
        break;
    
    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        $title = $data['title'];
        $description = $data['description'];

        $sql = "INSERT INTO product (title, description) VALUES ('$title', '$description')";
        $conn->query($sql);

        echo json_encode(array("message" => "Product created"));
        break;

    case 'PUT':
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data['id'];
        $title = $data['title'];
        $description = $data['description'];

        $sql = "UPDATE product SET title='$title', description='$description' WHERE id=$id";
        $conn->query($sql);

        echo json_encode(array("message" => "Product updated"));
        break;

    case 'DELETE':
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data['id'];

        $sql = "DELETE FROM product WHERE id=$id";
        $conn->query($sql);

        echo json_encode(array("message" => "Product deleted"));
        break;
}

$conn->close();
?>
