<?php
class Conexion {
  private $host = "localhost";
  private $db = "db_parque_vehicular_campos_alexia";
  private $user = "root";
  private $pass = "";

  public function conectar() {
    try {
      return new PDO("mysql:host=$this->host;dbname=$this->db", $this->user, $this->pass);
    } catch (PDOException $e) {
      die("Error: " . $e->getMessage());
    }
  }
}
?>