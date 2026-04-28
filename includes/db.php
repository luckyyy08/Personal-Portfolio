<?php
// Database configuration for optional MySQL integration
$host = 'localhost';
$db_name = 'portfolio_db';
$username = 'root';
$password = '';

try {
    $conn = new PDO("mysql:host={$host};dbname={$db_name}", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $exception) {
    // Silently fail for now as DB is optional, or uncomment below to show error
    // echo "Connection error: " . $exception->getMessage();
}
?>
