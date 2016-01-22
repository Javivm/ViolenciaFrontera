<?php

include "./../credentials.php";

$link = mysql_pconnect($cfgServer['host'], $cfgServer['user'], $cfgServer['password']) or die("Could not connect to MySQL database"); //CONNECT TO SERVER
mysql_select_db($cfgServer['dbname']) or die("Could not select database"); //CONNECT TO DB

$q = "SELECT ev.idEvento, Titulo, ev.NombrePerpetrador, ev.NumVictimas, ev.Descripcion, ev.Fecha, ev.TextoCompleto, ev.lg, ev.lt, e.Nombre AS Estado, g.Nombre AS SubGrupo, g.Descripcion AS DescGrupo, g.Grupo AS Grupo, m.Nombre AS Municipio, p.Nombre AS Pais, t.Categora AS Categoria FROM Evento ev LEFT JOIN Estado e USING(idEstado) LEFT JOIN Grupo g USING(idGrupo) LEFT JOIN Municipio m USING(idMunicipio) LEFT JOIN Pais p USING(idPais) LEFT JOIN TiposViolencia t USING(idTiposViolencia) WHERE idEvento = ".$_GET['id'].";";


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

echo $Titulo;


?>