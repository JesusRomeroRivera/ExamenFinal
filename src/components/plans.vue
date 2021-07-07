<template>
  <v-card>
    <v-card-title>
      Plans Comparison:
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-container 
        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))">
    <v-card-text class="cardAnimation" v-for="plan of displayPlans" :key="plan.id">
      <template>
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-card-text>
            <div>Plan number {{plan.id}}:</div>
            <p class="text-h4 text--primary">
              {{plan.name}}           
            </p>
            <div class="text--primary">
              Monthly Price: $ {{plan.monthlyPrice}}
            </div>
            <br>
            <p>{{plan.description}}</p>
            <div class="text--secondary">
              Max Users Allowed: {{plan.maxUsersAllowed}} <br>
              Max Farmlands Per User: {{plan.maxFarmlandsPerUser}} <br>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="green"
              @click="toggleLabel(plan)"
            >
              {{ !plan.labelOn ? "Show Benefits" : "Close Benefits"}}
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <v-card
              v-if="plan.labelOn"
              class="transition-fast-in-fast-out v-card--reveal"
              style="height: 100%; "
            >
              <v-card-text class="pb-0">
                <p class="text-h6 text--primary">
                  Benefits: 
                </p>
                <div v-for="benefit in displayBenefits" :key="benefit.id">
                  <p v-if="benefit.planId == plan.id">- {{ benefit.title }}</p>
                </div>
                <v-btn
                   @click="goJustBenefits(plan.id)">Show More Details</v-btn>
              </v-card-text>
              <br>
            </v-card>
          </v-expand-transition>
        </v-card>
      </template>
    </v-card-text>
    </v-container>
  </v-card>
</template>

<script>
import PlansApiService from '../services/plans-api.service';
import BenefitsService from '../services/benefits-api.service';

export default {
  name: "tutorials",
  data() {
    return {
      reveal: false,
      displayPlans: [],
      displayBenefits: [],
    }
  },

  methods: {
    toggleLabel(user){
      console.log(this.displayBenefits[0].title)
      user.labelOn = !user.labelOn
    },
    getAllPlans() {
      PlansApiService.getAll()
          .then(response => {
            this.displayPlans = response.data.map(this.getDisplayPlans);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    getAllBenefits() {
      BenefitsService.getAll()
          .then(response => {
            this.displayBenefits = response.data.map(this.getDisplayBenefits);
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
    goJustBenefits(id){  
      this.$route.params.id = id;
      this.$router.push({ name: 'Benefits', params: { id: id }})
    },
    getDisplayBenefits(benefit) {
      return {
        id: benefit.id,
        title: benefit.title,
        description: benefit.description,
        value: benefit.value,
        planId: benefit.planId
      };
    },

  },
  mounted() {
    this.getAllBenefits();
    this.getAllPlans();
  }
}

</script>

<style scoped>
.cardAnimation{
  transition: 0.6s;

}
.cardAnimation:hover{
  transform: scale(1.1);
}
</style>

