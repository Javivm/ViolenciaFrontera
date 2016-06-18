<div>
	<table style="width = 100%">
		<tr>
			<th>ID</th>
			<th>Título</th>
			<th>Resumen</th>
			<th>Fecha</th>
			<th>Estado</th>
			<th>Municipio</th>
			<th>País</th>
		</tr>

		<?php


		//------------PARTE DINAMICA DE LA TABLA-----------------------//


						while ($row = mysql_fetch_array($res)) {

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

							echo'<tr>
									<td><a href="./editaritem.php?id='.$id.'">'.$id.'</a></td>
									<td>'.$Titulo.'</td>
									<td>'.$Desc.'</td>
									<td>'.$Fecha.'</td>
									<td>'.$Estado.'</td>
									<td>'.$Municipio.'</td>
									<td>'.$Pais.'</td>
								</tr>';
								
						}//FIN WHILE


		//-------------FIN PARTE DINAMICA DE LA TABLA------------------//
		?>

	</table>
</div>