# Web de l'Associació Geeks.CAT

Lloc web estàtic de l'Associació Geeks.CAT construït amb [Astro](https://astro.build) i el tema [Virex](https://github.com/erlandv/virex).

## Requisits

- [Node.js](https://nodejs.org/) (versió 18.14.1 o superior)
- [pnpm](https://pnpm.io/) (gestor de paquets)

## Instal·lació

```bash
pnpm install
```

## Desenvolupament

Per iniciar el servidor de desenvolupament:

```bash
pnpm dev
```

El lloc web estarà disponible a `http://localhost:4321`.

## Build

Per generar la versió de producció:

```bash
pnpm build
```

Els fitxers generats es trobaran al directori `dist`.

## Desplegament

El lloc web es desplega automàticament a GitHub Pages quan es fa push a la branca `main`. Vegeu `.github/workflows/deploy.yml` per veure la configuració del desplegament.

## Llicència

El contingut d'aquest lloc web (HTML, CSS, imatges i altres actius estàtics) està sota la llicència [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/).

El tema utilitzat és [Virex](https://github.com/erlandv/virex) (MIT License).

El disseny original de la plantilla HTML és d'[HTML5 UP](https://html5up.net/) sota llicència [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).

Els paquets de software utilitzats per construir el lloc (Astro, Vite, etc.) tenen les seves pròpies llicències (principalment MIT). Vegeu `LICENSE.txt` per a més detalls.
