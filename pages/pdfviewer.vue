<template>
  <div>
<ejs-pdfviewer id="pdfViewer" :service-url="serviceUrl" :document-path="documentPath" />
  </div>
</template>
<script>
import {
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch
} from '@syncfusion/ej2-vue-pdfviewer'
export default {
  layout: 'empty',
  data() {
    return {
      serviceUrl:
        'https://ej2services.syncfusion.com/production/web-services/api/pdfviewer',
      documentPath: 'PDF_Succinctly.pdf'
    }
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      LinkAnnotation,
      BookmarkView,
      ThumbnailView,
      Print,
      TextSelection,
      TextSearch
    ]
  }
}
</script>
