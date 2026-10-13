/* ============================================================
   CONFIGURACIÓN CENTRAL — Oasis de la Montaña
   Aquí se edita todo lo que cambia: contacto, mapa y fotografías.
   ============================================================ */
window.SITE = {
  // Número en formato internacional, solo dígitos. Ej: "50688887777"
  // Mientras esté vacío, los botones muestran "contacto pendiente".
  whatsapp: "71736440",
  whatsappMessage: "Hola, quisiera consultar disponibilidad en Oasis de la Montaña.",

  // Enlace de Google Maps (compartir > copiar enlace). Vacío = "pendiente".
  mapsUrl: "https://maps.app.goo.gl/PigYBiwk7ruvjDts8",

  // Imágenes ilustrativas (reemplázalas por fotos reales con el mismo nombre
  // en la carpeta /img, o cambia la ruta). Si el archivo no existe,
  // se muestra un espacio reservado elegante.
  images: {
    hero:   { src: "img/portada.jpg",   alt: "Montañas cubiertas de bosque y neblina" },
    nature: { src: "img/cabana1.jpeg", alt: "Bosque de montaña con helechos y neblina" },
  },

  // Poner en false cuando uses fotos reales (oculta "Imagen ilustrativa…")
  showIllustrativeCaption: true,

  /* GALERÍA — para agregar una foto: copia la imagen a /img y añade un objeto.
     Campos: id, src, alt, title (opcional), description (opcional),
             category, order (número, menor = primero).
     Sin fotos aquí, la galería muestra espacios reservados. */

  /* GALERÍA */
  photos: [
    {
      id: "afuera",
      src: "img/afuera.jpeg",
      alt: "Vista de Oasis de la Montaña",
      title: "Oasis de la Montaña",
      description: "Un lugar para descansar y disfrutar.",
      category: "Naturaleza",
      order: 1
    },
    {
      id: "luces",
      src: "img/luces.jpeg",
      alt: "Entorno natural de montaña",
      title: "Entorno natural",
      description: "Naturaleza y tranquilidad.",
      category: "Naturaleza",
      order: 2
    },
    {
      id: "fogata",
      src: "img/fogata.jpeg",
      alt: "Entorno natural de montaña",
      title: "Entorno natural",
      description: "Naturaleza y tranquilidad.",
      category: "Naturaleza",
      order: 2
    },
        {
      id: "cabana1",
      src: "img/cabanadentro.jpeg",
      alt: "Entorno natural de montaña",
      title: "Entorno natural",
      description: "Naturaleza y tranquilidad.",
      category: "La cabaña",
      order: 2
    },
        {
      id: "cabana2",
      src: "img/cabanapordentro.jpeg",
      alt: "Entorno natural de montaña",
      title: "Entorno natural",
      description: "Naturaleza y tranquilidad.",
      category: "La cabaña",
      order: 2
    },
        {
      id: "cama",
      src: "img/cama.jpeg",
      alt: "Entorno natural de montaña",
      title: "Entorno natural",
      description: "Naturaleza y tranquilidad.",
      category: "La cabaña",
      order: 2
    },
    {
      id: "cabanas",
      src: "img/cabanas.jpeg",
      alt: "Entorno natural de montaña",
      title: "Entorno natural",
      description: "Naturaleza y tranquilidad.",
      category: "La cabaña",
      order: 2
    },
    {
      id: "2arriba",
      src: "img/2arriba.jpeg",
      alt: "Entorno natural de montaña",
      title: "Entorno natural",
      description: "Naturaleza y tranquilidad.",
      category: "La cabaña",
      order: 2
    },
    {
      id: "2",
      src: "img/2.jpeg",
      alt: "Entorno natural de montaña",
      title: "Entorno natural",
      description: "Naturaleza y tranquilidad.",
      category: "La cabaña",
      order: 2
    },
    {
      id: "grande",
      src: "img/grande.jpeg",
      alt: "Entorno natural de montaña",
      title: "Entorno natural",
      description: "Naturaleza y tranquilidad.",
      category: "La cabaña",
      order: 2
    },
    {
      id: "pequena",
      src: "img/pequena.jpeg",
      alt: "Entorno natural de montaña",
      title: "Entorno natural",
      description: "Naturaleza y tranquilidad.",
      category: "La cabaña",
      order: 2
    },
    {
      id: "atardecer",
      src: "img/atardecer.jpeg",
      alt: "Entorno natural de montaña",
      title: "Entorno natural",
      description: "Naturaleza y tranquilidad.",
      category: "Naturaleza",
      order: 2
    },
    {
      id: "atardecer2",
      src: "img/atardecer2.jpeg",
      alt: "Entorno natural de montaña",
      title: "Entorno natural",
      description: "Naturaleza y tranquilidad.",
      category: "Naturaleza",
      order: 2
    },
    
  ],

};
