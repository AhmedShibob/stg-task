import router from '../router';
<template>
  <div class="registration  p-12 bg-blue-800 h-screen">
    <div class="container bg-white">
      <!-- component -->
      <loading
        :active.sync="isLoading"
        :can-cancel="false"
        :is-full-page="true"
      ></loading>
      <div class="flex flex-wrap ">
        <div class="bg-white w-full md:w-3/5 ">
          <div class="mx-8 mt-8 ">
            <h1 class="text-blue-800 text-center text-2xl mt-64">
              مرحبا
            </h1>
          </div>
        </div>
        <div class="bg-red-600 w-full md:w-2/5 ">
          <div class="h-screen w-full img-background">
            <div class="text  text-white text-center">
              <h1 class="text-4xl ">مرحباَ بعودتك</h1>
              <p class="text-xl font-medium">
                بالدخول الي المنصة يمكنكم الاطلاع و ادارة كل ما يتعلق
                باجتماعاتكم بيسر ومرونة
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    axios
      .post("https://beta.development-majles.tech/activate-email-account", {
        email: this.$route.query.email,
        code: this.$route.query.code,
        slug: this.$route.query.slug,
      })
      .then(() => {
        this.isLoading = false;
        Toast.fire({
          icon: "success",
          title: "تم التفعيل بنجاح",
        });
      })
      .catch((error) => {
        Toast.fire({
          icon: "error",
          title: "حدث خطا ما",
        });
        console.log(error);
      });
  },
  methods: {},
};
</script>

<style>
.container {
  margin: auto;
  height: 90vh;
  top: 2rem;
  overflow: hidden;
  border-radius: 0.9rem;
}

.img-background {
  position: relative;
  background: linear-gradient(rgb(44 82 129 / 50%), rgb(44 82 129 / 50%)),
    url(https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80);
  background-size: cover;
  background-position: center center;
}

.text {
  width: 80%;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
}

form {
  direction: rtl;
}

.domain {
  direction: ltr;
}
</style>
