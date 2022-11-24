<template>
  <div>
    <q-layout class="home-section">
      <q-header bordered class="bg-white" style="position: fixed">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <q-toolbar>
              <q-space />
              <div class="btn-group">

                <a class="btn btn-primary active" style="cursor: pointer" @click="navPage">Home</a>

                <a class="btn btn-primary" style="cursor: pointer" @click="cardsPage">Cards Page</a>

                <a class="btn btn-primary" style="cursor: pointer" @click="darkPage">Setting</a>
              </div>
            </q-toolbar>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></div>
        </div>
      </q-header>

      <q-page-container class="q-pa-lg">
        <transition name="slide" mode="out-in">
          <router-view />
        </transition>
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    navPage() {
      this.$router.push({ name: "Tabledata" });
    },
    cardsPage() {
      this.$router.push({ name: "Cardspage" });
    },
    darkPage() {
      this.$router.push({ name: "Darkmode" });
    },
  },
};
</script>


<style scoped lang="scss">
@media only screen and (min-width: 0px) and (max-width: 599px) {
  // .home-logo {
  //   width: 100px;
  // }
}

@media only screen and (min-width: 600px) {
  // .home-logo {
  //   width: 190px;
  // }
}
</style>
