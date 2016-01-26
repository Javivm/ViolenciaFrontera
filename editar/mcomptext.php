<?php

include "./../credentials.php";

$link = mysql_pconnect($cfgServer['host'], $cfgServer['user'], $cfgServer['password']) or die("Could not connect to MySQL database"); //CONNECT TO SERVER
mysql_select_db($cfgServer['dbname']) or die("Could not select database"); //CONNECT TO DB

$id = $_GET['id']; //idEvento

if(isset($_POST['Mod'])){ //CHECAR SI PICO MODIFICAR NOTICIA11	//VARIABLES LIMITADAS

	$NPais = $_POST['Pais']; //OBTENER EL NOMBRE DEL PAIS QUE MANDO
	$q1 = "SELECT idPais FROM Pais WHERE Nombre = '".$NPais."';";
	$res1 = mysql_query($q1); //PAIS
	$rp = mysql_fetch_assoc($res1);
	$idP = $rp['idPais'];

	$NEstado = $_POST['Estado']; //OBTENER EL NOMBRE DEL ESTADO QUE MANDO
	$q2 = "SELECT idEstado FROM Estado WHERE Nombre = '".$NEstado."';";
	$res2 = mysql_query($q2); //ESTADO
	$re = mysql_fetch_assoc($res2);
	$idE = $re['idEstado']; //OBTENER idEstado DE LO QUE MANDO

	$NCategoria = $_POST['Categoria']; //OBTENER EL NOMBRE DEL TIPO DE VIOLENCIA QUE MANDO
	$q4 = "SELECT idTiposViolencia FROM TiposViolencia WHERE Categora = '".$NCategoria."';";
	$res4 = mysql_query($q4); //TIPO VIOLENCIA
	$rc = mysql_fetch_assoc($res4);
	$idC = $rc['idTiposViolencia']; //OBTENER idTiposViolencia DE LO QUE MANDO

	//FIN VARIABLES LIMITADAS

	//VARIABLE ILIMITADAS

	//---------MUNICIPIO-------------//

	$NMunicipio = $_POST['Municipio']; //OBTENER EL NOMBRE DEL MUNICIPIO QUE MANDO
	$q3 = "SELECT idMunicipio FROM Municipio WHERE Nombre = '".$NMunicipio."';";
	$res3 = mysql_query($q3); //MUNICIPIO
	if(mysql_num_rows($res3) > 0){//IF VALIDACION EXISTENCA
		$rm = mysql_fetch_assoc($res3);
		$idM = $rm['idMunicipio']; //OBTENER idMunicipio DE LO QUE MANDO
	}//FIN IF VALIDACION DE EXISTENCIA
	else
	{
		//SI NO EXISTE, HACER NUEVA INCERSION A LA BASE DE DATOS Y OBTENER SU idMunicipio
		$qi = "INSERT INTO Municipio(Nombre) VALUES ('".$NMunicipio."');";
		mysql_query($qi);
		$qi2 = "SELECT * FROM Municipio WHERE Nombre = '".$NMunicipio."';";
		$resi = mysql_query($qi2);
		$rowi = mysql_fetch_assoc($resi);
		$idM = $rowi['idMunicipio'];
		mysql_free_result($resi);
		//echo $idM;
	}

	//---------FIN-MUNICIPIO-------------//


	//---------GRUPO-------------//

	$NSubG = $_POST['SubG']; //OBTENER EL NOMBRE DEL SUBGRUPO QUE MANDO
	$NGrupo = $_POST['Grupo']; //OBTENER EL NOMBRE DEL SUBGRUPO QUE MANDO
	$q5 = "SELECT idGrupo FROM Grupo WHERE Nombre = '".$NSubG."';";
	$res5 = mysql_query($q5); //GRUPO
	if(mysql_num_rows($res5) > 0){//IF VALIDACION EXISTENCA
		$rg = mysql_fetch_assoc($res5);
		if(strcmp($NGrupo, $rg['Grupo']) != 0){ //IF PARA VER SI CAMBIO EL GRUPO
			$qm = "UPDATE Grupo SET Grupo = '".$NGrupo."' WHERE Nombre = '".$NSubG."';";
			mysql_query($qm);
		} //IF PARA VER SI CAMBIO EL GRUPO
		$idG = $rg['idGrupo']; //OBTENER idGrupo DE LO QUE MANDO
	}//FIN IF VALIDACION DE EXISTENCIA
	else
	{
		//SI NO EXISTE, HACER NUEVA INCERSION A LA BASE DE DATOS Y OBTENER SU idGrupo
		$qi = "INSERT INTO Grupo(Nombre, Grupo) VALUES ('".$NSubG."','".$NGrupo."');";
		mysql_query($qi);
		$qi2 = "SELECT * FROM Grupo WHERE Nombre = '".$NSubG."';";
		$resi = mysql_query($qi2);
		$rowi = mysql_fetch_assoc($resi);
		$idG = $rowi['idGrupo'];
		mysql_free_result($resi);
		//echo $idG;
	}

	//---------FIN-GRUPO-------------//

	//FIN VARIABLES ILIMITADAS

	//--------HACER LA MODIFICACION A LA BASE DE DATOS----------//



	$qmod = "UPDATE Evento SET Titulo='".$_POST['Titulo']."', NombrePerpetrador = '".$_POST['NomPerp']."', idGrupo = ".$idG.", idTiposViolencia = ".$idC.", idPais = ".$idP.", idEstado = ".$idE.", idMunicipio = ".$idM.", NumVictimas = ".$_POST['NumVictimas'].", Descripcion = '".$_POST['Desc']."', Fecha = '".$_POST['Fecha']."', TextoCompleto = '".$_POST['CompT']."', lg = ".$_POST['lg'].", lt = ".$_POST['lt']." WHERE idEvento = ".$id.";";

	echo $qmod;

	mysql_query($qmod); //EJECUCION DEL QUERY, AQUI YA SE MODIFICA LA BASE DE DATOS.

	mysql_error();
	//--------FIN-HACER LA MODIFICACION A LA BASE DE DATOS----------//



	//LIBERAR RESULTADOS
		mysql_free_result($res1);
		mysql_free_result($res2);
		mysql_free_result($res3);
		mysql_free_result($res4);
		mysql_free_result($res5);
	//FIN LIBERAR RESULTADOS

	}else
	if(isset($_POST['Borra'])){ //CHECAR SI PICO BORRAR NOTICIA
		//OBTENER LOS POST Y EJECUTAR EL QUERIE.
		$qb = "DELETE FROM Evento WHERE idEvento=".$id.";";
		mysql_query($qb);
		
	}else{

			//EN CASO DE QUE NO HAYA PICADO NADA 

		$q = "SELECT ev.idEvento, Titulo, ev.NombrePerpetrador, ev.NumVictimas, ev.Descripcion, ev.Fecha, ev.TextoCompleto AS Comp, ev.lg, ev.lt, e.Nombre AS Estado, g.Nombre AS SubGrupo, g.Descripcion AS DescGrupo, g.Grupo AS Grupo, m.Nombre AS Municipio, p.Nombre AS Pais, t.Categora AS Categoria FROM Evento ev LEFT JOIN Estado e ON ev.idEstado = e.idEstado LEFT JOIN Grupo g ON ev.idGrupo = g.idGrupo LEFT JOIN Municipio m ON ev.idMunicipio = m.idMunicipio LEFT JOIN Pais p ON ev.idPais = p.idPais LEFT JOIN TiposViolencia t ON ev.idTiposViolencia = t.idTiposViolencia WHERE idEvento = ".$id.";";
		$res = mysql_query($q); //EJECUCION DEL QUERY

		$row = mysql_fetch_assoc($res);

		$id = $row['idEvento'];
		$Titulo = $row['Titulo'];
		$NomPerp = $row['NombrePerpetrador'];
		$NumVictimas = $row['NumVictimas'];
		$Desc = $row['Descripcion'];
		$Fecha = $row['Fecha'];
		$Estado = $row['Estado'];
		$SubG = $row['SubGrupo'];
		$Grupo = $row['Grupo'];
		$Municipio = $row['Municipio'];
		$Pais = $row['Pais'];
		$Categoria = $row['Categoria'];
		$CompT = $row['Comp'];
		$lg = $row['lg'];
		$lt = $row['lt'];

		//PARA PAIS, ETSADO, CATEGORIA, GRUPO, HACER SELECT DINAMICAOS,
		// PARA ESTO SELECCIONAR LOS QUE NO HAYA MANDADO EL USUARIO CON != Y EN GURPO CON GROUP BY
				//select * from Grupo where Grupo != 'Otros' GROUP BY Grupo ORDER BY idGrupo; CON ESTE QUERY SIEMPRE QUEDA OTROS HASTA ABAJO

			echo '<form action="" method="post">
				  <input type="hidden" name="id" value="'.$id.'">
				  <div><input type="text" name="Titulo" value="'.$Titulo.'"></div>
				  <div><input type="text" name="NomPerp" value="'.$NomPerp.'"></div>';
				  
				  //<div><input type="text" name="Grupo" value="'.$Grupo.'">

				  //-------------------SELECT GRUPO----------//
				  $q0 = "SELECT Grupo FROM Grupo WHERE Grupo != '".$Grupo."' GROUP BY Grupo ORDER BY idGrupo;"; //SELECCIONO TODO LO CONTRARIO A LO QUE MANDA EL USUARIO

				  $ress = mysql_query($q0); //EJECUTO QUERY


				  mysql_error($ress);

				  //echo $q0;

				  echo '<select name = Grupo>
				  			<option>'.$Grupo.'</option>'; //EGREGO AL SELECT EL GRUPO QUE ES
				  		

				  while($row = mysql_fetch_assoc($ress)){

				  		$GrupoS = $row['Grupo'];

				  		echo '<option>'.$GrupoS.'</option>'; //AGREGO CAMPO AL SELECT YA CON LAS DEMAS COSAS

				  }

				  mysql_free_result($ress);

				  echo '</select>';

				  //------------FIN SELECT GRUPO--------------------//

				  echo '</div>
				  <div><input type="text" name="SubG" value="'.$SubG.'"></div>
				  <div><input type="text" name="NumVictimas" value="'.$NumVictimas.'"></div>
				  <div><input type="text" name="Fecha" value="'.$Fecha.'"></div>
				  <div>';
				  

				  //-------------------SELECT PAIS----------//
				  $q0 = "SELECT Nombre FROM Pais WHERE Nombre != '".$Pais."';"; //SELECCIONO TODO LO CONTRARIO A LO QUE MANDA EL USUARIO

				  $ress = mysql_query($q0); //EJECUTO QUERY


				  mysql_error($ress);

				  //echo $q0;

				  echo '<select name = Pais>
				  			<option>'.$Pais.'</option>'; //EGREGO AL SELECT EL GRUPO QUE ES
				  		

				  while($row = mysql_fetch_assoc($ress)){

				  		$PaisS = $row['Nombre'];

				  		echo '<option>'.$PaisS.'</option>'; //AGREGO CAMPO AL SELECT YA CON LAS DEMAS COSAS

				  }

				  mysql_free_result($ress);

				  echo '</select>';

				  //------------FIN SELECT PAIS--------------------//


				  echo '</div>
				  <div>';


				  //-------------------SELECT ESTADO----------//
				  $q0 = "SELECT Nombre FROM Estado WHERE Nombre != '".$Estado."';"; //SELECCIONO TODO LO CONTRARIO A LO QUE MANDA EL USUARIO

				  $ress = mysql_query($q0); //EJECUTO QUERY


				  mysql_error($ress);

				  //echo $q0;

				  echo '<select name = Estado>
				  			<option>'.$Estado.'</option>'; //EGREGO AL SELECT EL GRUPO QUE ES
				  		

				  while($row = mysql_fetch_assoc($ress)){

				  		$EstadoS = $row['Nombre'];

				  		echo '<option>'.$EstadoS.'</option>'; //AGREGO CAMPO AL SELECT YA CON LAS DEMAS COSAS

				  }

				  mysql_free_result($ress);

				  echo '</select>';

				  //------------FIN SELECT ESTADO--------------------//

				  echo '</div>
				  <div><input type="text" name="Municipio" value="'.$Municipio.'"></div>';
				  
				  

				  //-------------------SELECT CATEGORIA----------//
				  $q0 = "SELECT Categora FROM TiposViolencia WHERE Categora != '".$Categoria."';"; //SELECCIONO TODO LO CONTRARIO A LO QUE MANDA EL USUARIO

				  $ress = mysql_query($q0); //EJECUTO QUERY


				  mysql_error($ress);

				  //echo $q0;

				  echo '<select name = Categoria>
				  			<option>'.$Categoria.'</option>'; //EGREGO AL SELECT EL GRUPO QUE ES
				  		

				  while($row = mysql_fetch_assoc($ress)){

				  		$CategoriaS = $row['Categora'];

				  		echo '<option>'.$CategoriaS.'</option>'; //AGREGO CAMPO AL SELECT YA CON LAS DEMAS COSAS

				  }

				  mysql_free_result($ress);

				  echo '</select>';

				  //------------FIN SELECT CATEGORIA--------------------//
				  echo '</div>
				  <div><input type="text" name="lg" value="'.$lg.'"></div>
				  <div><input type="text" name="lt" value="'.$lt.'"></div>
				  <div><textarea name="Desc">'.$Desc.'</textarea></div>
				  <div><textarea name="CompT">'.$CompT.'</textarea></div>
				  <div><input type="submit" name="Mod" value="Modificar Noticia"></div>
				  <div><input type="submit" name="Borra" value="Borrar Noticia"></div>
				  <div><input type="button" name="Cancel" value="Cancelar" onClick="location.href='."'./modifica.php'".'"></div>
				  </form>';    //                                                    - LOCATION.HREF="LINK" ES PARA QUE SIRVA COMO UN LINK EL BOTON
		}//ELSE


	//LIBERAR RESULTSETS

		mysql_free_result($res);


	//FIN LIBERAR RESULTSETS

	mysql_close($link); //CERRAR CONECCION CON LA BASE DE DATOS

?>