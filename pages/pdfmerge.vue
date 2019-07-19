<template>
  <main class="container" fxlayout="row" style="flex-direction: row; box-sizing: border-box; display: flex;">
    <router-outlet /><mp-split-join>
      <mat-card class="exhibit-container drop-target mat-elevation-z4 mat-card" filedrop="">
        <div class="drop-overlay">
          <span class="drop-overlay-text">
            Drop PDFs here
          </span>
        </div>
        <mat-card-header class="mat-card-header">
          <div class="mat-card-header-text" />Split and Join PDFs
        </mat-card-header>
        <mat-card-content class="mat-card-content">
          <!----><div>
                   <p class="body-text">
                     Extract pages from a PDF, or merge multiple PDFs together.
                   </p>
                   <p class="body-text">
                     Tip: To extract a non-sequential range of pages, drop the same PDF here multiple times.
                   </p>
                 </div>
          <mat-list class="sortable mat-list" listsort="">
            <!---->
            <!---->
          </mat-list>
          <div class="text-row">
            <input multiple="multiple" type="file" style="display: none;">
            <button color="primary" mat-raised-button="" class="mat-raised-button mat-primary">
              <span class="mat-button-wrapper">
                Add  PDF
              </span><div class="mat-button-ripple mat-ripple" matripple="" /><div class="mat-button-focus-overlay" />
            </button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            (or drop  PDFs here to add)
          </div>
        </mat-card-content>
        <!---->
      </mat-card>
    </mp-split-join>
  </main>
</template>
<script>
export default {
  layout: 'empty'
}
</script>
