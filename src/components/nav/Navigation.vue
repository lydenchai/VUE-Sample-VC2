<template>
  <v-list nav dense>
    <v-list-item-group active-class="deep-purple--text text--accent-4">
      <v-list-item :to="{ path: '/expansion' }">
        <v-list-item-icon>
          <v-icon>mdi-arrow-expand</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Expansion panels</v-list-item-title>
      </v-list-item>

      <v-list-item :to="{ path: '/cards' }">
        <v-list-item-icon>
          <v-icon>mdi-credit-card</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Cards</v-list-item-title>
      </v-list-item>

      <v-list-item :to="{ path: '/table' }">
        <v-list-item-icon>
          <v-icon>mdi-table</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Table</v-list-item-title>
      </v-list-item>

      <v-list-item :to="{ path: '/autocomplete' }">
        <v-list-item-icon>
          <v-icon>mdi-format-list-bulleted</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Autocomplete</v-list-item-title>
      </v-list-item>

      <v-list-item :to="{ path: '/forms' }">
        <v-list-item-icon>
          <v-icon>mdi-format-float-left</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Forms</v-list-item-title>
      </v-list-item>

      <v-list-item :to="{ path: '/tabs' }">
        <v-list-item-icon>
          <v-icon>mdi-tab-unselected</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Tabs</v-list-item-title>
      </v-list-item>

      <v-list-item :to="{ path: '/steppers' }">
        <v-list-item-icon>
          <v-icon>mdi-debug-step-over</v-icon>
        </v-list-item-icon>
        <v-list-item-title>Steppers</v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>