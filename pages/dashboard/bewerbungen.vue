<template>
  <div id="app">
    <ejs-grid :data-source="data" :allow-paging="true" :allow-sorting="true" :page-settings="pageSettings" :edit-settings="editSettings">
      <e-columns>
        <e-column
          field="OrderID"
          header-text="Order ID"
          width="120"
          text-align="Right"
          :is-primary-key="true"
          :validation-rules="orderidrules" 
        />
        <e-column field="CustomerID" header-text="Customer ID" width="120" :validation-rules="customeridrules" />
        <e-column
          field="Freight"
          header-text="Freight"
          width="120"
          format="C2"
          text-align="Right"
          edit-type="numericedit"
          :validation-rules="freightrules"
        />
        <e-column
          field="OrderDate"
          header-text="Order Date"
          width="130"
          edit-type="datepickeredit"
          text-align="Right"
          type="date"
          format="yMd" 
        />
        <!-- <e-column field="Location" header-text="Location" width="140" :filter="filter" :template="coltemplate" />
        <e-column field="Status" header-text="Status" width="150" :filter="filter" :template="statusTemplate" /> -->
        <e-column field="ShipCountry" header-text="Ship Country" width="150" edit-type="dropdownedit" :edit="editparams" />
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { Page, Sort, Edit, CommandColumn } from '@syncfusion/ej2-vue-grids'
// import { StatusTemplate } from '~/components/statusTemplate'
export default {
  // eslint-disable-next-line vue/no-unused-components
  //   components: { StatusTemplate },
  data() {
    return {
      data: [
        { OrderID: 10248, CustomerID: 'VINET', Freight: 32.38 },
        { OrderID: 10249, CustomerID: 'TOMSP', Freight: 11.61 },
        { OrderID: 10250, CustomerID: 'HANAR', Freight: 65.83 },
        { OrderID: 10251, CustomerID: 'VICTE', Freight: 41.34 },
        { OrderID: 10252, CustomerID: 'SUPRD', Freight: 51.3 },
        { OrderID: 10253, CustomerID: 'HANAR', Freight: 58.17 },
        { OrderID: 10254, CustomerID: 'CHOPS', Freight: 22.98 },
        { OrderID: 10255, CustomerID: 'RICSU', Freight: 148.33 },
        { OrderID: 10256, CustomerID: 'WELLI', Freight: 13.97 }
      ],
      pageSettings: { pageSize: 5 },
      editparams: { params: { popupHeight: '300px' } },
      editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: 'Batch'
      },
      orderidrules: { required: true },
      customeridrules: { required: true },
      freightrules: { required: true }
    }
  },
  provide: {
    grid: [Page, Sort, Edit, CommandColumn]
  }
}
</script>
