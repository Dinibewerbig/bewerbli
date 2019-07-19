<template>
  <div>
    <div class="col-md-12 control-section">
      <div class="schedule-container">
        <ejs-schedule
          id="Schedule"
          height="650px"
          :selected-date="selectedDate"
          :current-view="currentView"
          :event-settings="eventSettings"
          :group="group"
        >
          <e-header-rows>
            <e-header-row option="Month" :template="monthHeaderTemplate" />
            <e-header-row option="Week" :template="weekHeaderTemplate" />
            <e-header-row option="Date" />
          </e-header-rows>
          <e-views>
            <e-view option="TimelineMonth" :interval="interval" />
            <e-view option="Agenda" :interval="interval" />
          </e-views>
          <e-resources>
            <e-resource
              field="ProjectId"
              title="Choose Project"
              name="Projects"
              :data-source="projectResourceDataSource"
              text-field="text"
              id-field="id"
              color-field="color"
            />
            <e-resource
              field="TaskId"
              title="Employee"
              name="Employees"
              :data-source="employeeDataSource"
              :allow-multiple="allowMultiple"
              text-field="text"
              id-field="id"
              group-i-d-field="groupId"
              color-field="color"
            />
          </e-resources>    
        </ejs-schedule>
      </div>
    </div>
  </div>
</template>
<script>
// import zooEventsData from 'assets/berufe.js'
// import { extend } from '@syncfusion/ej2-base'
import {
  Agenda,
  TimelineViews,
  TimelineMonth,
  Resize,
  DragAndDrop
} from '@syncfusion/ej2-vue-schedule'

import { resourceData, timelineResourceData } from 'assets/datasource'
import { enableRipple } from '@syncfusion/ej2-base'
enableRipple(true)

export default {
  data: function() {
    return {
      eventSettings: {
        dataSource: this.generateData()
      },
      selectedDate: new Date(2018, 3, 4),
      currentView: 'TimelineMonth',
      interval: 12,
      allowMultiple: true,
      group: {
        resources: ['Projects', 'Employees']
      },
      projectResourceDataSource: [
        { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
        { text: 'PROJECT 2', id: 2, color: '#56ca85' },
        { text: 'PROJECT 3', id: 3, color: '#df5286' }
      ],
      employeeDataSource: [
        { text: 'Nancy', id: 1, groupId: 1, color: '#df5286' },
        { text: 'Steven', id: 2, groupId: 1, color: '#7fa900' },
        { text: 'Robert', id: 3, groupId: 2, color: '#ea7a57' },
        { text: 'Smith', id: 4, groupId: 2, color: '#5978ee' },
        { text: 'Micheal', id: 5, groupId: 3, color: '#df5286' },
        { text: 'Root', id: 6, groupId: 3, color: '#00bdae' }
      ]
    }
  },
  provide: {
    schedule: [Agenda, TimelineViews, TimelineMonth, Resize, DragAndDrop]
  },
  methods: {
    generateData: function() {
      let collections = []
      const dataCollections = [resourceData, timelineResourceData]
      for (let i = 0; i < dataCollections.length; i++) {
        collections = collections.concat(dataCollections[i])
      }
      return collections
    }
  }
}
</script>


<style>
.e-schedule:not(.e-device) .e-agenda-view .e-content-wrap table td:first-child {
  width: 90px;
}

.e-schedule .e-agenda-view .e-resource-column {
  width: 100px;
}
</style>
