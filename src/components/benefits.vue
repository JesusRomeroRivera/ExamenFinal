<template>
  <v-card>
    <v-card-title>
      Benefits Included:
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-container 
        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));">
    <v-card-text v-for="benefit of displayBenefits" :key="benefit.id">
      <template>
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-card-text>
            <div>Benefit number {{ benefit.id }}:</div>
            <p class="text-h4 text--primary">
              {{ benefit.title }}           
            </p>
            <div class="text--primary">
              {{benefit.description}}
            </div>
            <br>
            <div class="text--secondary">
              Value: {{benefit.value}} <br>
            </div>
          </v-card-text>
        </v-card>
      </template>
      </v-card-text>
    </v-container>
      <v-btn @click="goPlans" style="margin-left: 20px; margin-bottom: 20px;">Atrás</v-btn>
      
  </v-card>
</template>

<script>
import BenefitsService from '../services/benefits-api.service';
export default {
  name: "tutorials",
  data() {
    return {
      search: '',
      displayBenefits: [],
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Tutorial' : 'Edit Tutorial'
    },
  },

  methods: {
    getAllBenefits() {
      this.displayBenefits = []
      BenefitsService.getAll()
          .then(response => {
            response.data.forEach(benefit => {
              if(benefit.planId == this.$route.params.id) {
                this.displayBenefits.push(benefit)
              }
            });
          })
          .catch((e) => {
            console.log(e);
          });
    },
    goPlans(){
       this.$router.push({ name: 'Plans'})
    }
  },
  mounted() {
    this.getAllBenefits();
  }
}

</script>

<style scoped>

</style>
