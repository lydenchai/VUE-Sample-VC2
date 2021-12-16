<template>
  <v-container fluid>
    <v-tabs align-with-title v-model="tab">
      <v-tab key="tab1">Tab 1</v-tab>
      <v-tab key="cards-panel">Tab 2</v-tab>
      <v-tab key="table-panel">Tab 3</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item key="tab1">
        <v-container fluid>
          <p class=".text-body-1">Something in tab 1</p>
        </v-container>
      </v-tab-item>

      <v-tab-item key="tab2">
        <v-container fluid>
          <p class=".text-body-1">Something in tab 2</p>
        </v-container>
      </v-tab-item>

      <v-tab-item key="tab3">
        <v-container fluid>
          <p class=".text-body-1">Something in tab 3</p>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      tab: null,
      loading: false,
      selection: 1,
    };
  },
};
</script>