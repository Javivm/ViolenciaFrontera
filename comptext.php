<?php

include "./credentials.php";

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

echo '<div>'.$Titulo.'</div>
	  <div>'.$NomPerp.'</div>
	  <div>'.$Grupo.'</div>
	  <div>'.$SubG.'</div>
	  <div>'.$NumVictimas.'</div>
	  <div>'.$Fecha.'</div>
	  <div>'.$Pais.'</div>
	  <div>'.$Estado.'</div>
	  <div>'.$Municipio.'</div>
	  <div>'.$Categoria.'</div>
	  <div>'.$Desc.'</div>
	  <div>'.$CompT.'</div>
	  ';


?>