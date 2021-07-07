<template>
  <v-card>
    <v-card-title>
      Plans:
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-card-title>
    <template>
      <v-card
        class="mx-auto"
        max-width="344"
      >
        <v-card-text>
          <div style="text-align: center" class="text-h6 text--primary">Total of Plans Registered</div>
          <br>
          <p style="text-align: center" class="text-h6 text--secondary">{{ this.plansSize }}</p>
        </v-card-text>
      </v-card>
      <br>
    </template>
  </v-card>
</template>

<script>
import PlansApiService from '../services/plans-api.service';

export default {
  name: "tutorials",
  data() {
    return {
      reveal: false,
      displayPlans: [],
      plansSize: 0,
    }
  },

  methods: {
    getAllPlans() {
      PlansApiService.getAll()
          .then(response => {
            this.displayPlans = response.data.map(this.getDisplayPlans);
            this.plansSize = this.displayPlans.length
          })
          .catch((e) => {
            console.log(e);
          });
    },

    getDisplayPlans(plan) {
      return {
        id: plan.id,
        name: plan.name,
        description: plan.description,
        maxUsersAllowed: plan.maxUsersAllowed,
        maxFarmlandsPerUser: plan.maxFarmlandsPerUser,
        monthlyPrice: plan.monthlyPrice,
        labelOn: false,
      };
    },

  },
  mounted() {
    this.getAllPlans();
  }
}

</script>

<style scoped>

</style>

