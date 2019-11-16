<?php
	include_once('config.php');
	
	/**
	 * 
	 */
	class Model
	{
		protected $db;

		function __construct()
		{
			$this->db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
			if ($this->db->connect_errno) {
				echo "Error de conexion: ". $this->db->connect_errno;
				return;
			}
			$this->db->set_charset(DB_CHARSET);
		}


		function api_user(){
			// $sql = $this->db->query("SELECT * FROM users");
			// $row =  $sql->fetch_array(MYSQLI_ASSOC);
			$file = fopen("config.txt", "w");

			fwrite($file, '
			[{
			  "app": "Centinela",
			  "version": "1.0.0",
			  "author": "Jonthan Raymundo Magallanes Martinez",
			  "rastreo": "0"
			}]


				' . PHP_EOL);

			fclose($file);
			// $json = '[{';
			// 	$json.= '"nombre:"'.$row['nombres'].',';
			// 	$json.= '"rastreo:"'.$row['rastreo'].',';
			// 	$json.= '"panico:"'.$row['panico'];
				
			// $json .= '}]';
			// return $json;
		}
	}


		
?>