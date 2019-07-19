<template>
  <div class=" flex-1 w-full  ">
    <div class="card-header w-full">
      <h2 class="font-light">
        Dashboard
      </h2>
    </div>

    <div class="flex flex-col flex-wrap flex-1 md:flex-row lg:flex-row -mx-3 ">
      <div class="card flex-1 md:w-1/4 lg:w-1/4 mb-2 mx-3">
        <div class="card-header card-division">
          <h2 class="font-medium">
            Dokumente
          </h2>
          <div>open</div>
        </div>
        <div class="card-body">
          <div class="card-division flex">
            <div>Meier AG</div>  
            <div>02. Februar 2019</div>
          </div>
          <div class="card-division">
            Lebenslauf
          </div>
          <div class="card-division">
            Lebenslauf
          </div>
        </div>
        <div class="card-footer">
          hello
        </div>
      </div>
      <div class="card flex-1 md:w-1/3 lg:w-1/3 mb-2 mx-3 ">
        <div class="card-header card-division">
          <h2 class="font-medium">
            Aktivität
          </h2>
          <div>open</div>
        </div>
        <div class="card-body">
          <div class="card-division flex">
            <div>Lebenslauf</div>  
            <div>rechts</div>
          </div>
          <div class="card-division">
            Lebenslauf
          </div>
          <div class="card-division">
            Lebenslauf
          </div>
        </div>
        <div class="card-footer">
          hello
        </div>
      </div>
      <div class="card flex-1 md:w-1/4 lg:w-1/4 mb-2 mx-3">
        <div class="card-header card-division">
          <h2 class="font-medium">
            Bestellungen
          </h2>
          <div>öffne</div>
        </div>
        <div class="card-body">
          <div class="card-division flex">
            <div>Bewerbungsbrief Meier AG</div>  
            <div>rechts</div>
          </div>
          <div class="card-division">
            Lebenslauf
          </div>
          <div class="card-division">
            Lebenslauf
          </div>
        </div>
        <div class="card-footer">
          hello
        </div>
      </div>
      <div class="card md:w-1/2 lg:w-1/2 mb-2 mx-3">
        <div class="card-header card-division">
          <h2 class="font-medium">
            Bestellungen
          </h2>
          <div>öffne</div>
        </div>
        <div class="card-body">
          <div class="card-division flex">
            <div>Bewerbungsbrief Meier AG</div>  
            <div>rechts</div>
          </div>
          <div class="card-division">
            Lebenslauf
          </div>
          <div class="card-division">
            Lebenslauf
          </div>
        </div>
        <div class="card-footer">
          hello
        </div>
      </div>
      <div class="card md:w-1/2 lg:w-1/2 mb-2 mx-3">
        <div class="card-header card-division">
          <h2 class="font-medium">
            Scheduler
          </h2>
          <div>öffne</div>
        </div>
        <div class="card-body">
          <div class="card-division flex">
            <div>Bewerbungsbrief Meier AG</div>  
            <div>rechts</div>
          </div>
          <div class="card-division">
            Lebenslauf
          </div>
          <div class="card-division">
            Lebenslauf
          </div>
        </div>
        <div class="card-footer">
          hello
        </div>
      </div>
      <div class="card md:w-1/2 lg:w-1/2 mb-2 mx-3">
        <div class="card-header card-division">
          <h2 class="font-medium">
            Verschickt
          </h2>
          <div>öffne</div>
        </div>
        <div class="card-body">
          <div class="card-division flex">
            <div>Bewerbungsbrief Meier AG</div>  
            <div>rechts</div>
          </div>
          <div class="card-division">
            Lebenslauf
          </div>
          <div class="card-division">
            Lebenslauf
          </div>
        </div>
        <div class="card-footer">
          hello
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.cards {
  @apply bg-white text-headline flex rounded-l font-bold text-lg rounded-r items-center no-underline px-12 py-6 w-full;
}

.cards:hover {
  @apply bg-elahover;
}

.copy {
  @apply font-normal text-lead mt-4;
}

.image {
  background-position-x: 10px;
  background-image: url(~assets/welcomeimage.png);
  background-size: 30%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top right;
}
</style>
