<?php 


	include"./../config.php";
	//require_once"HTML/Template/ITX.php"; //NO PUEDO INCLUIR LA BIBLIOTECA

	$link = mysql_pconnect($cfgServer['host'], $cfgServer['user'], $cfgServer['password']) or die("Could not connect to MySQL database"); //CONNECT TO SERVER
	mysql_select_db($cfgServer['dbname']) or die("Could not select database"); //CONNECT TO DB

	$Tabla = $_POST['tabla'];
	$identifier = $_POST['identifier'];

	if(strcmp($Tabla, "Tipo de Violencia") == 0){
		$Tabla = "TiposViolencia";
		$ID = "Categora";
	}else
	if(strcmp($Tabla, "Evento") == 0){
		$ID = "Titulo";
	}else{
		$ID = "Nombre";
	}

	$Query = "DELETE FROM $Tabla WHERE $ID = '$identifier';";

	mysql_query($Query);

	if(mysql_affected_rows($link) > 0){
			echo "<script>alert('Se ha eliminado correctamente')</script>";
		}else{
			echo "<script>alert('ERROR: No se encontro ningun campo con el nombre o categoria ".$identifier."')</script>";
		}

 ?>