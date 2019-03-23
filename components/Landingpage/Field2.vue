<template>
  <section id="key-benefits2" class="container-lg">
    <img src="assets/download.png" style="width:100%" class="logo">
    <div>
      <h3 class="text-primary">
        Unser Team
      </h3>
      <h5 class="text-weight-thin text-positive">
        Wir haben jahrelange Erfahrung im Bereich der Berufswahl und das Testen von
        tausenden von schweizer Schülerbewerbungen auf Ihre Wirkung bei Lehrlingsverantwortlichen und Firmen, haben uns gelehrt auf was es bei Bewerbungsschreiben drauf ankommt. Wir können dir mittels ausgeklügelter Fragen innert kürzester Zeit dein perfektes Bewerbungsdossier erstellen. Uns steht dabei eine umfangreiche Datenbank
        aus mehr als 1000 verschiedenen erfolgreichen Bewerbungsdossiers zur Verfügung
      </h5>
      <p class="q-subheading text-positive">
        Brauchst du möglichst schnell eine perfekte Bewerbungsmappe so dass du dich damit sofort bei den Firmen bewerben kannst,
        ohne noch mehr Zeit zu verlieren, dann können wir dir helfen.
      </p>
    </div>
  </section>
</template>


<style scoped>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.container-lg {
  padding: 0 30px;
  margin: 0 auto;
  max-width: 1100px;
}
@media screen and (min-width: 760px) {
  #key-benefits {
    display: grid;
    /* grid: repeat(3, auto) / auto-flow 1fr; */
    grid-template-rows: repeat(4, auto);
    grid-template-columns: none;
    grid-template-areas: none;
    grid-auto-rows: auto;
    grid-auto-columns: 1fr;
    grid-auto-flow: column;
    grid-gap: 0 41px;
  }
}

@media screen and (min-width: 760px) {
  #key-benefits2 {
    display: grid;
    /* grid: repeat(3, auto) / auto-flow 1fr; */
    grid-template-rows: repeat(4, minmax(200px, auto));
    grid-template-columns: 1fr 2fr;
    grid-template-areas: none;
    grid-auto-rows: auto;
    grid-auto-columns: 1fr;
    grid-auto-flow: row;
    grid-gap: 0 41px;
    align-items: start;
    justify-items: start;
  }
}
</style>
