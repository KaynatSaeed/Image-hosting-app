<template>
  <div>
    <!-- <Navbar /> -->
    <div>
      <v-main>
        <v-container>
          <v-row>
            <v-col cols="8" class="mx-auto align-center justify-center veri">

              <v-card>
                <v-title>
                  <h1>Your account is almost ready.</h1>
                </v-title>
                <v-card-text>
                  Verification link has been sent to your email. Please click
                  the link to verify your account. The activation link is only
                  valid for 48 hours. If you don't receive the instructions try
                  checking your junk or spam filters..
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </div>
  </div>
</template>

<script>
// import Navbar from "../components/Navbar";

export default {
  components: {
    // Navbar,
  },
};
</script>

<style>
.veri {
  margin-top: 70px;
}
</style>