$(document).ready(function () {
    $("#inputGroupSelect01").change(function () {
        var val = $(this).val();
        if (val == "Choose"){
            $("#canton").html("<option value='Select One'>--Select One--</option>");
        }
        else if (val == "Azuay") {
            $("#canton").html("<option value='Cuenca'>Cuenca</option><option value='Chordeleg'>Chordeleg</option><option value='El Pan'>El Pan</option><option value='Giron'>Giron</option><option value='Guachapala'>Guachapala</option><option value='Nabon'>Nabon</option><option value='Oña'>Oña</option><option value='Paute'>Paute</option><option value='Camilo Ponce Enriquez'>Camilo Ponce Enriquez</option><option value='Pucara'>Pucara</option><option value='San Fernando'>San Fernando</option><option value='Santa Isabel'>Santa Isabel</option><option value='Sevilla de Oro'>Sevilla de Oro</option><option value='Sigsig'>Sigsig</option>");
        }
        else if (val == "Bolivar") {
            $("#canton").html("<option value='Guaranda'>Guaranda</option><option value='Caluma'>Caluma</option><option value='Chillanes'>Chillanes</option><option value='Chimbo'>Chimbo</option><option value='Echeandia'>Echeandia</option><option value='las Naves'>Las Naves</option><option value='San Miguel'>San Miguel</option>");
        }
        else if (val == "Cañar") {
            $("#canton").html("<option value='Azogues'>Azogues</option><option value='Biblian'>Biblian</option><option value='Cañar'>Cañar</option><option value='Deleg'>Deleg</option><option value='El Tambo'>El tambo</option><option value='La Troncal'>La Troncal</option><option value='Suscal'>Suscal</option>");
        }
        else if (val == "Carchi") {
            $("#canton").html("<option value='Bolivar'>Bolivar</option><option value='Espejo'>Espejo</option><option value='Mira'>Mira</option><option value='Montufar'>Montufar</option><option value='San Pedro de Huaca'>San Pedro de Huaca</option><option value='Tulcan'>Tulcan</option>");
        }
        else if (val == "Chimborazo") {
            $("#canton").html("<option value='Alausi'>Alausi</option><option value='Chambo'>Chambo</option><option value='Chunchi'>Chunchi</option><option value='Colta'>Colta</option><option value='Cumanda'>Cumanda</option><option value='Guamote'>Guamote</option><option value='Guano'>Guano</option><option value='Pallatanga'>Pallatanga</option><option value='Penipe'>Penipe</option><option value='Riobamba'>Riobamba</option>");
        }
        else if (val == "Cotopaxi") {
            $("#canton").html("<option value='Latacunga'>Latacunga</option><option value='Mana'>Mana</option><option value='Pangua'>Pangua</option><option value='Pujili'>Pujili</option><option value='Saquisili'>Saquili</option><option value='Sigchos'>Sigchos</option>");
        }
        else if (val == "El Oro") {
            $("#canton").html("<option value='Machala'>Machala</option><option value='Arenillas'>Arenillas</option><option value='Atahualpa'>Atahualpa</option><option value='Balsas'>Balsas</option><option value='Chilla'>Chilla</option><option value='El Guabo'>El Guabo</option><option value='Huaquillas'>Huaquillas</option><option value='Las Lajas'>Las Lajas</option><option value='Marcabeli'>Marcabeli</option><option value='Pasaje'>Pasaje</option><option value='Piñas'>Piñas</option><option value='Portovelo'>Protovelo</option><option value='Santa Rosa'>Santa Rosa</option><option value='Zaruma'>Zaruma</option>");
        }
        else if (val == "Esmeraldas") {
            $("#canton").html("<option value='Esmeraldas'>Esmeraldas</option><option value='Atacames'>Atacames</option><option value='Eloy Alfaro'>Eloy Alfaro</option><option value='Muisne'>Muisne</option><option value='Quininde'>Quininde</option><option value='Rioverde'>Rioverde</option><option value='San Lorenzo'>San Lorenzo</option>");
        }
        else if (val == "Galapagos") {
            $("#canton").html("<option value='San Cristobal'>San Cristobal</option><option value='Isabela'>Isabela</option><option value='Santa Cruz'>Santa Cruz</option>");
        }
        else if (val == "Guayaquil") {
            $("#canton").html("<option value='Guayaquil'>Guayaquil</option><option value='Alfredo Baquerizo Moreno'>Alfredo Baquerizo Moreno</option><option value='Balao'>Balao</option><option value='Balzar'>Balzar</option><option value='Colimes'>Colimes</option><option value='Daule'>Daule</option><option value='Duran'>Duran</option><option value='El Triunfo'>El Triunfo</option><option value='general Antonio Elizalde'>General Antonio Elizalde</option><option value='Isidro Ayora'>Isidro Ayora</option><option value='Lomas de Sargentillo'>Lomas de Sargentillo</option><option value='Marcelino Maridueña'>Marcelino Maridueña</option><option value='Milagro'>Milagro</option><option value='Naranjal'>Naranjal</option><option value='Nobol'>Nobol</option><option value='Palestina'>Palestina</option><option value='Pedro Carbo'>Pedro Carbo</option><option value='Playas'>Playas</option><option value='Salitre'>Salitre</option><option value='Samborondon'>Samborondon</option><option value='Santa Lucia'>Santa Lucia</option><option value='Simon Bolivar'>Simon Bolivar</option><option value='Yaguachi'>Yaguachi</option>");
        }
        else if (val == "Imbabura") {
            $("#canton").html("<option value='Ibarra'>Ibarra</option><option value='Antonio Ante'>Antonio Ante</option><option value='Cotacachi'>Cotacachi</option><option value='Otavalo'>Otavalo</option><option value='Pimampiro'>Pimampiro</option><option value='San Miguel de Urcuqui'>San Miguel de Urcuqui</option>");
        }
        else if (val == "Loja") {
            $("#canton").html("<option value='Loja'>Loja</option><option value='Calvas'>Calvas</option><option value='Catamayo'>Catamayo</option><option value='Celica'>Celica</option><option value='Chaguarpamba'>Chaguarpamba</option><option value='Espindola'>Espindola</option><option value='Gonzanama'>Gonzanama</option><option value='Espindola'>Espindola</option><option value='Macara'>Macara</option><option value='Olmedo'>Olmedo</option><option value='Paltas'>Paltas</option><option value='Pindal'>Pindal</option><option value='Puyango'>Puyango</option><option value='Quilanga'>Quilanga</option><option value='Saraguro'>Saraguro</option><option value='Sozoranga'>Sozoranga</option><option value='Zapotillo'>Zapotillo</option>");
        }
        else if (val == "Los Rios") {
            $("#canton").html("<option value='Baba'>Baba</option><option value='Babahoyo'>babahoyo</option><option value='Buena Fe'>Buena Fe</option><option value='Mocache'>Mocache</option><option value='Montalvo'>Motalvo</option><option value='Palenque'>Palenque</option><option value='Puebloviejo'>Puebloviejo</option><option value='Quevedo'>Quevedo</option><option value='Quinsaloma'>Quinsaloma</option><option value='Urdaneta'>Urdaneta</option><option value='Valencia'>Valencia</option><option value='Ventanas'>Ventanas</option><option value='Vinces'>Vinces</option>");
        }
        else if (val == "Manabi") {
            $("#canton").html("<option value='Portoviejo'>Portoviejo</option><option value='24 de Mayo'>24 de Mayo</option><option value='Bolívar'>Bolívar</option><option value='Bolivar'>Bolivar</option><option value='Chone'>Chone</option><option value='El Carmen'>El Carmen</option><option value='Flavio Alfaro'>Flavio Alfaro</option><option value='Jama'>Jama</option><option value='Jaramijo'>Jaramijo</option><option value='Jipijapa'>Jipijapa</option><option value='Junin'>Junin</option><option value='Manta'>Manta</option><option value='Montecristi'>Montecristi</option><option value='Olmedo'>Olmedo</option><option value='Pajan'>Pajan</option><option value='Pedernales'>Pedernales</option><option value='Pichincha'>Pichincha</option><option value='Puerto Lopez'>Puerto Lopez</option><option value='Rocafuerte'>Rocafuerte</option><option value='San Vicente'>San Vicente</option><option value='Santa Ana'>Santa Ana</option><option value='Sucre'>Sucre</option><option value='Tosagua'>Tosagua</option>");
        }
        else if (val == "Morona Santiago") {
            $("#canton").html("<option value='Morona'>Morona</option><option value='Gualaquiza'>Gualaquiza</option><option value='Huamboya'>Huamboya</option><option value='Limon Indanza'>Limon Indanza</option><option value='Logroño'>Logroño</option><option value='Pablo Sexto'>Pablo Sexto</option><option value='Palora'>Palora</option><option value='San Juan Bosco'>San Juan Bosco</option><option value='Santiago de Mendez'>Santiago de Mendez</option><option value='Sucua'>Sucua</option><option value='Taisha'>Taisha</option><option value='Tiwintza'>Tiwintza</option>");
        }
        else if (val == "Napo") {
            $("#canton").html("<option value='Tena'>Tena</option><option value='Archidona'>Archidona</option><option value='Carlos Julio Arosemena'>Carlos Julio Arosemena</option><option value='El Chaco'>El Chaco</option><option value='Quijos'>Quijos</option>");
        }
        else if (val == "Orellana") {
            $("#canton").html("<option value='Francisco de Orellana'>Francisco de Orellana</option><option value='Aguarico'>Aguarico</option><option value='La Joya de los Sachas'>La Joya de los Sachas</option><option value='Loreto'>Loreto</option>");
        }
        else if (val == "Pastaza") {
            $("#canton").html("<option value='Pastaza'>Pastaza</option><option value='Arajuno'>Arajuno</option><option value='Mera'>Mera</option><option value='Santa Clara'>Santa Clara</option>");
        }
    });
});