<?php

	include"./../config.php";
	//require_once"HTML/Template/ITX.php"; //NO PUEDO INCLUIR LA BIBLIOTECA

	$link = mysql_pconnect($cfgServer['host'], $cfgServer['user'], $cfgServer['password']) or die("Could not connect to MySQL database"); //CONNECT TO SERVER
	mysql_select_db($cfgServer['dbname']) or die("Could not select database"); //CONNECT TO DB

	//----CHECAR SI YA FUE ENVIADA LA FORMA-----//
	if($_POST['hidden'] == 0){
		//----CHECAR QUE ES LO QUE SE DESEA PARA DESPLEGAR LA FORMA NECESARIA----//
		if (strcmp($_POST['Campo'], "Grupo") == 0) {

			echo "<form method='post' action=''>
					Nombre del Grupo que deseas modificar:<br><br>
					<input type='text' name='id'><br><br>
					Campo que desea alterar<br><br>
					<select name='campo'>
						<option>Nombre</option>
						<option>Descripcion</option>
						<option>Grupo</option>
					</select><br><br>
					Informacion Coregida<br><br>
					<input type='text' name='new_info'><br><br>
					<input type='hidden' value='Grupo' name='tabla'> 
					<input type='hidden' value='Nombre' name='nombre'>
					<input type='hidden' value='1' name='hidden'><br><br>
					<input type='submit' value='OK'>
				  <form>";
		}else

		if (strcmp($_POST['Campo'], "Estado") == 0) {

			echo "<form method='post' action=''>
					Nombre del Estado que deseas modificar:<br><br>
					<input type='text' name='id'><br><br>
					Informacion Coregida<br><br>
					<input type='text' name='new_info'><br><br>
					<input type='hidden' value='Estado' name='tabla'> 
					<input type='hidden' value='Nombre' name='nombre'>
					<input type='hidden' value='Nombre' name='campo'>
					<input type='hidden' value='1' name='hidden'><br><br>
					<input type='submit' value='OK'>
				  <form>";
		}else

		if (strcmp($_POST['Campo'], "Municipio") == 0) {

			echo "<form method='post' action=''>
					Nombre del Municipio que deseas modificar:<br><br>
					<input type='text' name='id'><br><br>
					Informacion Coregida<br><br>
					<input type='text' name='new_info'><br><br>
					<input type='hidden' value='Municipio' name='tabla'> 
					<input type='hidden' value='Nombre' name='nombre'>
					<input type='hidden' value='Nombre' name='campo'>
					<input type='hidden' value='1' name='hidden'><br><br>
					<input type='submit' value='OK'>
				  <form>";
		}else
		if (strcmp($_POST['Campo'], "Tipo de Violencia") == 0) {

			echo "<form method='post' action=''>
					Nombre de la Categoria que deseas modificar:<br><br>
					<input type='text' name='id'><br><br>
					Campo que desea alterar<br><br>
					<select name='campo'>
						<option value='Categora'>Categoria</option>
						<option value='NumVictimas'>Numero de Victimas</option>
					</select><br><br>
					Informacion Coregida<br><br>
					<input type='text' name='new_info'><br><br>
					<input type='hidden' value='TiposViolencia' name='tabla'> 
					<input type='hidden' value='Categora' name='nombre'>
					<input type='hidden' value='1' name='hidden'><br><br>
					<input type='submit' value='OK'>
				  <form>";
		}else
		if (strcmp($_POST['Campo'], "Evento") == 0) {

			echo "<form method='post' action=''>
					Titulo del evento que deseas modificar:<br><br>
					<input type='text' name='id'><br><br>
					Campo que deseas alterar<br><br>
					<select name='campo'>
						<option value='Titulo'>Titulo</option>
						<option value='NombrePerpetrador'>Nombre Perpetrador</option>
						<option value='NumVictimas'>NumVictimas</option>
						<option value='Descripcion'>Descripcion</option>
						<option value='Fecha'>Fecha</option>
						<option value='TextoCompleto'>Texto</option>
						<option value='lg'>Longitud</option>
						<option value='lt'>Latitud</option>
					</select><br><br>
					Informacion Coregida<br><br>
					<input type='text' name='new_info'><br><br>
					<input type='hidden' value='Evento' name='tabla'> 
					<input type='hidden' value='Titulo' name='nombre'>
					<input type='hidden' value='1' name='hidden'><br><br>
					<input type='submit' value='OK'>
				  <form>";
		}
		
		//LOS HIDDEN SON PARA IDENTIFICAR QUE TABLA SE DESEA ALTERAR, SU CAMPO PARA IDENTIFICAR EL ELEMENTO Y SU ID
		
	}else{
		$Tabla = $_POST['tabla'];
		$Campo = $_POST['campo'];
		$ID = $_POST['id'];
		$New_Info = $_POST['new_info'];
		$Nombre = $_POST['nombre'];
		$q = "UPDATE $Tabla SET $Campo = '$New_Info' WHERE $Nombre = '$ID';";
		$res = mysql_query($q); //EJECUTAR QUERY
		//----CHECAR QUE SE HAYA ALTERADO LA BASE DE DATOS---//
		if(mysql_affected_rows($link) > 0){
			echo "<script>alert('Se ha modificado la base de datos')</script>";
		}else{
			echo "<script>alert('ERROR: No se encontro ningun campo con el nombre o categoria ".$ID."')</script>";
		}
	}

?>