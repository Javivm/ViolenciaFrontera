<?php

include "./../credentials.php";

$link = mysql_pconnect($cfgServer['host'], $cfgServer['user'], $cfgServer['password']) or die("Could not connect to MySQL database"); //CONNECT TO SERVER
mysql_select_db($cfgServer['dbname']) or die("Could not select database"); //CONNECT TO DB

$id = $_GET['id'];

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

if(isset($_POST['Mod'])){ //CHECAR SI PICO MODIFICAR NOTICIA
	//OBTENER LOS POST Y EJECUTAR EL QUERIE.
	$id = $_POST['id'];
	echo "Modificar".$id;
	}else
	if(isset($_POST['Borra'])){ //CHECAR SI PICO BORRAR NOTICIA
		//OBTENER LOS POST Y EJECUTAR EL QUERIE.
		$id = $_POST['id'];
		echo"Borra".$id;
	}else{
			//EN CASO DE QUE NO HAYA PICADO NADA 
			echo '<form action="" method="post">
				  <input type="hidden" name="id" value="'.$id.'">
				  <div><input type="text" value="'.$Titulo.'"></div>
				  <div><input type="text" value="'.$NomPerp.'"></div>
				  <div><input type="text" value="'.$Grupo.'"></div>
				  <div><input type="text" value="'.$SubG.'"></div>
				  <div><input type="text" value="'.$NumVictimas.'"></div>
				  <div><input type="text" value="'.$Fecha.'"></div>
				  <div><input type="text" value="'.$Pais.'"></div>
				  <div><input type="text" value="'.$Estado.'"></div>
				  <div><input type="text" value="'.$Municipio.'"></div>
				  <div><input type="text" value="'.$Categoria.'"></div>
				  <div><textarea>'.$Desc.'</textarea></div>
				  <div><textarea>'.$CompT.'</textarea></div>
				  <div><input type="submit" name="Mod" value="Modificar Noticia"></div>
				  <div><input type="submit" name="Borra" value="Borrar Noticia"></div>
				  <div><input type="button" name="Cancel" value="Cancelar" onClick="location.href='."'./modifica.php'".'"></div>
				  </form>';    //                                                    - LOCATION.HREF="LINK" ES PARA QUE SIRVA COMO UN LINK EL BOTON
		}//ELSE

?>