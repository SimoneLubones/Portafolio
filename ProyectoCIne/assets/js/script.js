const carteleraElement = document.querySelector("#cartelera");

const cartelera = [
  {
    id: "deadpool",
    nombre: "DEADPOOL & WOLVERINE",
    imagenUrl:
      "https://res.cloudinary.com/pctester/image/upload/c_scale,w_266/v1724115536/p_deadpool_wolverine_snuggle_gen_v2_c251bde1_hrtmjg.jpg",
    descripcion: `Marvel Studios presenta su mayor equivocación hasta la fecha: DEADPOOL & WOLVERINE. Un
            apático Wade Wilson se esfuerza por adaptarse a la vida civil. Sus días como el mercenario moralmente
            flexible, Deadpool, han quedado atrás. Cuando su mundo se enfrenta a una amenaza existencial, reaciamente
            Wade debe ponerse el traje de nuevo, junto con un aún más reacio… ¿muy reacio? ¿reacísimo?... Tiene que
            convencer a un súper-reacio Wolverine a... Mierda. Las sinopsis son tan increíblemente estúpidas.`,
  },
  {
    id: "alien",
    nombre: "ALIEN: ROMULUS",
    imagenUrl:
      "https://res.cloudinary.com/pctester/image/upload/c_scale,w_266/v1724115536/1_preview_alienromulus_latam_1sht_048_v2_simp_cmyk_c04c_74c20d70_jti3q8.jpg",
    descripcion: `Este thriller de ciencia ficción y terror vuelve a las raíces de la exitosa franquicia
          ALIEN: Mientras exploran en las profundidades de una estación espacial abandonada, un grupo de jóvenes
          colonizadores del espacio se encuentra cara a cara con la forma de vida más aterradora del universo.`,
  },
  {
    id: "im",
    nombre: "INTENSA-MENTE 2",
    imagenUrl:
      "https://res.cloudinary.com/pctester/image/upload/c_scale,w_266/v1724115536/1_intensamente_2_payoff_banner_pre_1_aa3d9114_zfopp5.jpg",
    descripcion: `La película de Disney y Pixar INTENSA-MENTE 2 regresa a la mente de la recién
          adolescente Riley justo cuando el cuartel general está sufriendo una repentina demolición para hacer sitio
          a algo totalmente inesperado: ¡nuevas emociones! Alegría, Tristeza, Furia, Temor y Desagrado, que llevan
          mucho tiempo llevando a cabo una operación exitosa, no están seguros de cómo sentirse cuando aparece
          Ansiedad. Y parece que no está sola. Maya Hawke da su voz en inglés a Ansiedad, junto a Amy Poehler como
          Alegría, Phyllis Smith como Tristeza, Lewis Black como Furia, Tony Hale como Temor y Liza Lapira como
          Desagrado.`,
  },
  // { nombre: "Wolverine", imagenUrl: "url", descripcion: "" },
  // { nombre: "Wolverine", imagenUrl: "url", descripcion: "" },
  // { nombre: "Wolverine", imagenUrl: "url", descripcion: "" },
  {
    id: "beet",
    nombre: "BEETLEJUICE, BEETLEJUICE",
    imagenUrl: "assets/img/beetlekjuice.jpg",
    descripcion: "¡Beetlejuice ha vuelto! Después de una tragedia familiar inesperada, tres generaciones de la familia Deetz regresan a su hogar en Winter River. Aún atormentada por Beetlejuice, la vida de Lydia da un vuelco cuando su rebelde hija adolescente, Astrid, descubre el misterioso modelo de la ciudad en el ático y el portal al Más Allá se abre accidentalmente. Con problemas en ambos reinos, es solo cuestión de tiempo hasta que alguien diga el nombre de Beetlejuice tres veces y el travieso demonio regrese para desatar su propio tipo de caos."
},
{
  id: "exor",
    nombre:"EXORCISMO",
    imagenUrl: "assets/img/exorcismo.jpg",
    descripcion:"Anthony, un actor, empieza a comportarse de manera extraña durante el rodaje de una película de terror. Su hija, con quien apenas trata, empieza a preguntarse si su padre ha retomado las viejas adicciones o está ocurriendo algo sobrenatural."
},
{
  id: "forja",  
  nombre:"LA FORJA",
    imagenUrl: "assets/img/forja.jpg",
    descripcion:"Un año después de terminar la preparatoria y sin planes para el futuro, Isaiah Wright es desafiado por su madre y un exitoso hombre de negocios a trazar un mejor rumbo para su vida. A través de las oraciones de su madre y de la Sra. Clara, y el discipulado bíblico de su nuevo mentor, Isaiah comienza a descubrir que el propósito de Dios para su vida es mucho más de lo que podía imaginar."
},
{
  id: "ladron",  
  nombre:"EL LADRÓN DE PERROS",
    imagenUrl: "assets/img/ladronperros.jpg",
    descripcion:"Martín, un huérfano que trabaja como lustrabotas, decide robar el perro de su mejor cliente, un sastre solitario al que ha empezado a imaginar que es su padre."
},
{
  id: "reino",  
  nombre:"EL REINO DE KENSUKE",
    imagenUrl: "assets/img/reino.jpg",
    descripcion:"Tras emprender un viaje en barco junto a sus padres y ser arrastrado por una violenta tormenta, el joven Michael termina varado en una isla desierta luchando por sobrevivir. Pronto Michael descubrirá que no está solo y que un sinfín de aventuras le esperan en este nuevo mundo que alberga peligros y bellezas inimaginables."
}


];

const llenarDatos = (pelicula) => {
  const template = `
  <div  class="col">
     <div class="card pb-4">
          <img
            src="${pelicula.imagenUrl}"
            style=" height: 15rem;"
            class="card-img-top img-fluid " alt="${pelicula.nombre}">
           
          <div class="card-body" style=" height: 5rem;">
            <h5 class="card-title">${pelicula.nombre}</h5>
             <!--  <p class="card-text">${pelicula.descripcion} </p> -->
          </div>
          <div class="card-footer" style=" height: 2rem;">
            <small class="text-muted">
            
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${pelicula.id}">
  Ver Más
</button>

            </small>
          </div>
        </div>
        </div>

<div class="modal fade" id="${pelicula.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${pelicula.nombre}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src="${pelicula.imagenUrl}" alt="">
      <p class="mt-4">${pelicula.descripcion}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>

    `;
  return template;
};

cartelera.map((pelicula) => {
  carteleraElement.innerHTML += llenarDatos(pelicula);
});
