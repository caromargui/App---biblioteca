<template>
  <div>
    <Header />
    <v-container>
      <v-row justify="center">
        <v-col cols="auto">
          <h1>Acerca de los cursos</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            eaque tempora necessitatibus exercitationem! A, minima tempora
            voluptas sint amet cum dicta molestias dolorem, in harum, iste illo
            illum iure doloremque! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Earum perspiciatis asperiores voluptates nulla
            molestiae, doloremque ut harum qui pariatur atque inventore corporis
            optio sed eos quae, amet necessitatibus, distinctio mollitia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            voluptatem ad? Quos deleniti officiis, consequatur voluptates odit
            corporis soluta odio incidunt molestiae obcaecati pariatur quibusdam
            eveniet. Id, esse. Temporibus, a.
          </p>
          <br />
          <hr />
          <!-- Inicia Barra de búsqueda-->
          <v-system-bar></v-system-bar>
          <v-toolbar flat color="transparent">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Buscar cursos"
              single-line
            ></v-text-field>
          </v-toolbar>
          <!-- Termina Barra de búsqueda -->
          <!-- Inicia lista -->

          <v-sheet class="mx-auto" max-width="1400">
            <v-slide-group center-active next-icon = "mdi-chevron-right" prev-icon = "mdi-chevron-left">
              <v-slide-item
                v-for="(item, i) in searching"
                :key="i"
                ripple
                @click="() => {}"
              >
                <!-- Inicia v-card -->
                <v-card
                  :loading="loading"
                  class="mx-auto my-12"
                  max-width="374"
                >
                  <template slot="progress">
                    <v-progress-linear
                      color="deep-purple"
                      height="10"
                      indeterminate
                    ></v-progress-linear>
                  </template>

                  <v-img height="250" :src="item.image"></v-img>

                  <v-card-title
                    v-text="item.title"
                    class="text-no-wrap"
                  ></v-card-title>
                  <hr />
                  <v-card-text class="justify-center" v-text="item.resume">
                    <v-chip v-text="item.keyword"></v-chip>
                  </v-card-text>

                  <v-divider class="mx-4"></v-divider>

                  <v-card-title>Nivel</v-card-title>

                  <v-card-text class="justify-center">
                    <v-chip-group
                      v-model="selection"
                      active-class="deep-purple accent-4 white--text"
                      column
                    >
                      <v-chip>Principiante</v-chip>

                      <v-chip>Intermedio</v-chip>

                      <v-chip>Avanzado</v-chip>
                    </v-chip-group>
                  </v-card-text>

                  <v-card-actions>
                    <v-btn color="deep-purple lighten-2" text @click="Acceder">
                      Acceder
                    </v-btn>
                  </v-card-actions>
                </v-card>
                <!-- Finaliza V-card -->
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
          <!-- Termina lista -->
        </v-col>
      </v-row>
    </v-container>

    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
export default {
  components: { Header, Footer },
  data: () => ({
    items: [
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg",
        title: "TBI’s 5 Best: SF Mocktails to Finish Dry January Strong",
        resume:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nam quisquam odit magnam, aut quis natus. Nesciunt, tempora asperiores numquam necessitatibus nam sapiente labore, voluptatum nostrum quos illo animi sequi.",
        keyword: "Drinks",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*BBNtYUieAqHoXKjiJ2mMjQ.png",
        title:
          "PWAs on iOS 12.2 beta: the good, the bad, and the “not sure yet if good”",
        resume:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nam quisquam odit magnam, aut quis natus. Nesciunt, tempora asperiores numquam necessitatibus nam sapiente labore, voluptatum nostrum quos illo animi sequi.",
        keyword: "Phones",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*rTEtei1UEmNqbq6evRsExw.jpeg",
        title: "How to Get Media Mentions for Your Business",
        resume:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nam quisquam odit magnam, aut quis natus. Nesciunt, tempora asperiores numquam necessitatibus nam sapiente labore, voluptatum nostrum quos illo animi sequi.",
        keyword: "Social",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*FD2nkJewVeQnGf0ommQfrw.jpeg",
        title:
          "The Pitfalls Of Outsourcing Self-Awareness To Artificial Intelligence",
        resume:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nam quisquam odit magnam, aut quis natus. Nesciunt, tempora asperiores numquam necessitatibus nam sapiente labore, voluptatum nostrum quos illo animi sequi.",
        keyword: "Military",
      },
      {
        image:
          "https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg",
        title: "Degrees of Freedom and Sudoko",
        resume:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem nam quisquam odit magnam, aut quis natus. Nesciunt, tempora asperiores numquam necessitatibus nam sapiente labore, voluptatum nostrum quos illo animi sequi.",
        keyword: "Social",
      },
    ],
    search: "",
  }),

  computed: {
    keywords() {
      if (!this.search) return [];

      const keywords = [];

      for (const search of this.searching) {
        keywords.push(search.keyword);
      }

      return keywords;
    },
    searching() {
      if (!this.search) return this.items;

      const search = this.search.toLowerCase();

      return this.items.filter((item) => {
        const text = item.title.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
}
</style>