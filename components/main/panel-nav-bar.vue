<template>
  <div>
    <div
      class="w-full border bg-white border-gray-100 rounded-2xl p-3 flex justify-between items-center"
    >
      <div
        @click="toggleMenu"
        class="cursor-pointer flex justify-center items-center  "
      >
        <img
          src="../../assets/images/bargram.png"
          class="w-[120px] h-[42px] hidden lg:inline-block"
        />
        <v-icon class="lg:!hidden"> mdi-menu </v-icon>
      </div>
      <div class="flex items-center">
        <v-badge color="error" content="85" class="rounded-full">
          <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
        <div class="flex mx-2 w-fit">
          <span>
            {{ userData.name }}
          </span>
          <span class="mx-1">
            {{ userData.lastName }}
          </span>
        </div>
        <v-container class="!w-fit">
          <v-row justify="center" class="w-fit">
            <v-menu min-width="200px" rounded>
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props">
                  <v-avatar color="brown" size="large">
                    <!-- <span class="text-h5">{{ userData.name }}</span> -->
                    <v-icon>mdi-account</v-icon>
                  </v-avatar>
                </v-btn>
              </template>
              <v-card>
                <v-card-text>
                  <div class="mx-auto text-center">
                    <v-avatar color="brown">
                      <!-- <span class="text-h5">{{ userData.name }}</span> -->
                      <v-icon>mdi-account</v-icon>
                    </v-avatar>
                    <h3>{{ userData.lastName }}</h3>
                    <p class="text-caption mt-1">
                      {{ userData.email }}
                    </p>
                    <v-divider class="my-3"></v-divider>
                    <v-btn variant="text" class="w-full">ویرایش اطلاعات</v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn variant="text" class="w-full" @click="logOut">
                      خروج
                    </v-btn>
                  </div>
                </v-card-text>
              </v-card>
            </v-menu>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>
<script setup >
import { ref } from "#imports";
import { useUserStore } from "~/stores/userStore";
const userStore = useUserStore();
const logOut = () => {
  userStore.logout();
};
const userData = ref({
  name: localStorage.getItem('userName'),
  userName: localStorage.getItem('userName'),
  email: "azadbakht",
});
</script>
