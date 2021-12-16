<template>
  <v-row class="pa-6">
    <v-col md="12">
      <v-alert dense :type="alertType">
        I'm a dense alert with a <strong>{{ alertType }}</strong> of info
      </v-alert>

      <v-row>
        <v-col md="12">
          <v-file-input truncate-length="15"></v-file-input>
        </v-col>
        <v-col md="6">
          <v-combobox
            v-model="select"
            :items="items"
            label="Combobox"
            multiple
            outlined
            dense
          ></v-combobox>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>


<script>
export default {
  name: "App",

  data() {
    return {
      select: ["Vuetify", "Programming"],
      items: ["Programming", "Design", "Vue", "Vuetify"],
      alertType: "success",
    };
  },
};
</script>
 