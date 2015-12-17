<?php

	include"config.php";
	//require_once"HTML/Template/ITX.php"; //NO PUEDO INCLUIR LA BIBLIOTECA

	$link = mysql_pconnect($cfgServer['host'], $cfgServer['user'], $cfgServer['password']) or die("Could not connect to MySQL database"); //CONNECT TO SERVER
	mysql_select_db($cfgServer['dbname']) or die("Could not select database"); //CONNECT TO DB
	
	//------OBTENER VARIABLES-----//
	$Titulo = $_POST['titulo'];
	$Grupo = $_POST['grupo'];
	$SubGrupo = $_POST['subgrupo'];
	$Nombre = $_POST['nomperp'];
	$Categoria = $_POST['categoria'];
	$Fecha = $_POST['fecha'];
	$NumVictimas = $_POST['numvictimas'];
	$Pais = $_POST['pais'];
	$Estado = $_POST['estado'];
	$Municipio = $_POST['municipio'];
	$long = $_POST['long'];
	$lat = $_POST['lat'];
	$Desc = $_POST['desc'];
	$Text = $_POST['texto'];

	$Querie2 = "SELECT * FROM Estado WHERE Nombre='$Estado';";
	$Querie3 = "SELECT * FROM Municipio WHERE Nombre='$Municipio';";
	$Querie5 = "SELECT * FROM TiposViolencia WHERE Categora= '$Categoria';";
	$Querie4 = "SELECT * FROM Grupo WHERE Nombre= '$SubGrupo';";


	$res = mysql_query($Querie2);

	//----VALIDACION DE EXISTENCIA DE ESTADO-------//
	if(mysql_num_rows($res) == 0){ //LA VALIDACION SIRVE, SI EXISTE INSERTA SI NO EXISTE NO INSERTA
		echo'<script>alert("El estado '.$Estado.' no se encuantra en la base de datos, este se va a agregar");</script>'; //NO DESPLIEGA EL POP UP
		$QuerieS = "INSERT INTO Estado(Nombre) VALUES ('$Estado');";
		mysql_query($QuerieS);
		$res = mysql_query($Querie2);
		$line = mysql_fetch_assoc($res); //OBTENGO LA LINEA DEL RESULTADO
		$idEstado = $line['idEstado']; //OBTENER EL DATO DE LA DB
	}
	else{
		echo "<script>alert('El estado ya existe');</script>"; //NO SE POR QUE NO DESPLIEGA LOS POP UP
		$line = mysql_fetch_assoc($res); //OBTENGO LA LINEA DEL RESULTADO
		$idEstado = $line['idEstado']; //OBTENER EL DATO DE LA DB
		//echo $idEstado;
	}
	//----FIN VALIDACION ESTADO------/

	$res = mysql_query($Querie3);

	//----VALIDACION DE EXISTENCIA DE MUNICIPIO-------//
	if(mysql_num_rows($res) == 0){ //LA VALIDACION SIRVE, SI EXISTE INSERTA SI NO EXISTE NO INSERTA
		echo'<script>alert("El municipio '.$Municipio.' no se encuantra en la base de datos, este se va a agregar");</script>'; //NO DESPLIEGA EL POP UP
		$QuerieS = "INSERT INTO Municipio(Nombre) VALUES ('$Municipio');";
		mysql_query($QuerieS);
		$res = mysql_query($Querie3);
		$line = mysql_fetch_assoc($res); //OBTENGO LA LINEA DEL RESULTADO
		$idMunicipio = $line['idMunicipio']; //OBTENER EL DATO DE LA DB
	}
	else{
		echo "<script>alert('El municipio ya existe');</script>"; //NO SE POR QUE NO DESPLIEGA LOS POP UP
		$line = mysql_fetch_assoc($res); //OBTENGO LA LINEA DEL RESULTADO
		$idMunicipio = $line['idMunicipio']; //OBTENER EL DATO DE LA DB
		//echo $idMunicipio;
	}
	//----FIN VALIDACION MUNICIPIO------//

	$res = mysql_query($Querie5);

	//----VALIDACION DE EXISTENCIA DE TIPO VIOLENCIA-------//
	if(mysql_num_rows($res) == 0){ //LA VALIDACION SIRVE, SI EXISTE INSERTA SI NO EXISTE NO INSERTA
		echo'<script>alert("El tipo de violencia '.$Categoria.' no se encuantra en la base de datos, este se va a agregar");</script>'; //NO DESPLIEGA EL POP UP
		$QuerieS = "INSERT INTO TiposViolencia(Categora) VALUES ('$Categoria');";
		mysql_query($QuerieS);
		$res = mysql_query($Querie5);
		$line = mysql_fetch_assoc($res);
		$idTipoViolencia = $line['idTiposViolencia']; 
	}
	else{
		echo "<script>alert('El tipo de violencia ya existe');</script>"; //NO SE POR QUE NO DESPLIEGA LOS POP UP
		$line = mysql_fetch_assoc($res);
		$idTipoViolencia = $line['idTiposViolencia']; //OBTENER EL DATO DE LA DB
		//echo $idTipoViolencia;
	}
	//----FIN VALIDACION TIPO VIOLENCIA------//

	$res = mysql_query($Querie4);

	//----VALIDACION DE EXISTENCIA DE GRUPO-------//
	if(mysql_num_rows($res) == 0){ //LA VALIDACION SIRVE, SI EXISTE INSERTA SI NO EXISTE NO INSERTA
		echo'<script>alert("El grupo '.$Grupo.' no se encuantra en la base de datos, este se va a agregar"</script>'; //NO DESPLIEGA EL POP UP
		$QuerieS = "INSERT INTO Grupo(Nombre, Grupo) VALUES ('$SubGrupo', '$Grupo');";
		mysql_query($QuerieS);
		$res = mysql_query($Querie4);
		$line = mysql_fetch_assoc($res); //OBTENGO LA LINEA DEL RESULTADO
		$idGrupo = $line['idGrupo']; //OBTENER EL DATO DE LA DB
	}
	else{
		echo "<script>alert('El grupo ya existe');</script>"; //NO SE POR QUE NO DESPLIEGA LOS POP UP
		$line = mysql_fetch_assoc($res); //OBTENGO LA LINEA DEL RESULTADO
		$idGrupo = $line['idGrupo']; //OBTENER EL DATO DE LA DB
		//echo $idGrupo;
	}
	//----FIN VALIDACION GRUPO------//
	

	//---QUERIE FINAL
	$QuerieF = "INSERT INTO Evento(idGrupo, idTiposViolencia, idPais, idEstado, idMunicipio, Titulo, NombrePerpetrador, NumVictimas, Descripcion, Fecha, TextoCompleto, lg, lt) VALUES ($idGrupo, $idTipoViolencia, $Pais, $idEstado, $idMunicipio, '$Titulo', '$Nombre', $NumVictimas, '$Desc', '$Fecha', '$Text', $long, $lat);";

	//echo $QuerieF;

	//---INSERTAR A LA BASE DE DATOS
	mysql_query($QuerieF);

	if(!mysql_error($link)){
		echo "Se ha insertado correctamente a la base de datos.";
		echo '<a href="http://159.203.136.89/">Regresar a la pagina principal</a>';
	}else{
		echo "ERROR: No se pudo insertar a la base de datos.";
		echo mysql_error($link);
	}

	mysql_free_result($res); //LIBERAR RESULTSET
	mysql_close($link); //CERRAR CONECCION CON LA BASE DE DATOS

	include"./../crea.php";
?>