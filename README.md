# Oasis de la Montaña

Sitio estático (HTML + CSS + JS). No requiere build ni dependencias.

## Probar en local
    npx serve .        # o abre index.html en el navegador

## Publicar en Vercel
1. Sube esta carpeta a un repositorio de GitHub.
2. En vercel.com: Add New > Project > importa el repo.
3. Framework Preset: **Other**. Build Command y Output Directory: vacíos. Deploy.
(Alternativa: `npx vercel` dentro de la carpeta.)

## Completar datos (todo en config.js)
- `whatsapp`: número con código de país, solo dígitos (ej. "50688887777").
- `mapsUrl`: enlace de Google Maps.
- Fotos de portada: guarda `img/hero.jpg` e `img/nature.jpg` (o cambia las rutas).
- Pon `showIllustrativeCaption: false` cuando uses fotos reales.

## Agregar fotografías a la galería
1. Copia la imagen a `/img` (JPG/WebP, ~1600 px de ancho máx.).
2. En `config.js`, dentro de `photos`, añade:
       { id: "sala-1", src: "img/sala-1.jpg", alt: "Descripción de la foto",
         title: "Sala", description: "", category: "Interiores", order: 2 }
3. Guarda y haz commit: Vercel redepliega solo.
Si hay 2 o más categorías aparecen filtros; sin fotos se muestran espacios reservados.
