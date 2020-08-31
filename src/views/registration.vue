<template>
  <div class="registration  p-12 bg-blue-800 h-screen">
    <div class="container bg-white">
      <loading
        :active.sync="isLoading"
        :can-cancel="false"
        :is-full-page="true"
      ></loading>
      <!-- component -->
      <div class="flex flex-wrap ">
        <div class="bg-white w-full md:w-3/5 ">
          <div class="mx-8 mt-8 ">
            <form class="text-right ">
              <div class="-mx-3 md:flex mb-6">
                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs  mb-2"
                  >
                    اسم المنشأة بالعربية
                  </label>
                  <input
                    v-model="form.account_ar"
                    required
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-2 px-4 mb-3"
                    type="text"
                  />
                </div>
                <div class="md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs  mb-2"
                  >
                    اسم المنشأة بالأنجليزية
                  </label>
                  <input
                    v-model="form.account_en"
                    required
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4"
                    type="text"
                  />
                </div>
              </div>

              <div class="-mx-3 md:flex mb-6 domain">
                <div
                  class="flex flex-wrap items-stretch w-full px-3 mb-4 relative"
                >
                  <label
                    class="block w-full flex-shrink flex-grow flex-auto leading-normal w-px flex-1  px-3 relative  uppercase tracking-wide text-grey-darker text-xs  mb-2"
                  >
                    اللقب المنشأه</label
                  >
                  <div class="flex -mr-px"></div>
                  <input
                    v-model="form.slug"
                    required
                    type="text"
                    class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-r-none px-3 relative"
                    placeholder="اسم المنشأة"
                  />
                  <div class="flex -mr-px">
                    <span
                      class="flex items-center leading-normal bg-grey-lighter rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm"
                      >.majles.tech</span
                    >
                  </div>
                </div>
              </div>

              <div class="-mx-3 md:flex mb-6 domain">
                <div
                  class="flex flex-wrap items-stretch w-full px-3 mb-4 relative"
                >
                  <label
                    class="block w-full uppercase tracking-wide text-grey-darker text-xs  mb-2"
                  >
                    رقم الجوال
                  </label>
                  <div class="w-full">
                    <VuePhoneNumberInput
                      :required="true"
                      placeholder="اسم المنشأة"
                      v-model="mobile_input"
                      default-country-code="SA"
                    />
                  </div>
                </div>
              </div>

              <div class="-mx-3 md:flex mb-6">
                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs  mb-2"
                  >
                    اللقب بالعربية
                  </label>
                  <input
                    v-model="form.title_ar"
                    required
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-2 px-4 mb-3"
                    type="text"
                  />
                </div>
                <div class="md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs  mb-2"
                  >
                    اللقب بالأنجليزية
                  </label>
                  <input
                    v-model="form.title_en"
                    required
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4"
                    type="text"
                  />
                </div>
              </div>

              <div class="-mx-3 md:flex mb-6">
                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs  mb-2"
                  >
                    الاسم بالعربية
                  </label>
                  <input
                    required
                    v-model="form.name_ar"
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-2 px-4 mb-3"
                    type="text"
                  />
                </div>
                <div class="md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs  mb-2"
                  >
                    الاسم بالأنجليزية
                  </label>
                  <input
                    v-model="form.name_en"
                    required
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4"
                    type="text"
                  />
                </div>
              </div>

              <div class="-mx-3 md:flex mb-6">
                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs  mb-2"
                  >
                    البريد الالكتروني
                  </label>
                  <input
                    v-model="form.email"
                    required
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-2 px-4 mb-3"
                    type="email"
                  />
                </div>
                <div class="md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs  mb-2"
                  >
                    كلمة المرور
                  </label>
                  <input
                    v-model="form.password"
                    required
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4"
                    type="password"
                  />
                </div>
              </div>

              <div class="-mx-3 md:flex mb-6">
                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs  mb-2"
                  >
                    تأكيد كلمة المرور
                  </label>
                  <input
                    v-model="form.password_confirmation"
                    required
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-2 px-4 mb-3"
                    type="password"
                  />
                </div>
                <div class="md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs  mb-2"
                  >
                    الجنسية
                  </label>

                  <div class="inline-block relative w-64 w-full">
                    <select
                      v-model="form.nationality_id"
                      class="appearance-none bg-white block w-full bg-grey-lighter text-grey-darker border border-red rounded py-2 px-4 mb-3"
                    >
                      <option
                        v-for="nationality in nationalities"
                        :key="nationality.id"
                        :value="nationality.id"
                      >
                        {{ nationality.name }}</option
                      >
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700 "
                    >
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex flex-row-reverse">
                <button
                  @click.prevent="handleForm"
                  class="bg-blue-800 text-white font-bold rounded-full h-10 text-2xl w-10 flex items-center justify-center"
                  type="submit"
                >
                  <span>&#62;</span>
                </button>
                <p class="m-2">
                  دخول
                </p>
              </div>
            </form>
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
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export default {
  components: { VuePhoneNumberInput, Loading },
  data() {
    return {
      isLoading: true,
      nationalities: [],
      mobile_input: "",
      form: {
        role_id: 1,
        email: "",
        mobile: "",
        password: "",
        password_confirmation: "",
        title_en: "",
        title_ar: "",
        name_ar: "",
        name_en: "",
        nationality_id: 1,
        account_en: "",
        account_ar: "",
        slug: "",
        activate_link: "http://localhost:8080/verification",
      },
    };
  },
  mounted() {
    const url = `https://beta.development-majles.tech/resources?resources=nationalities`;

    axios
      .get(url)
      .then((response) => {
        this.nationalities = response.data.result.nationalities;
        this.isLoading = false;
      })
      .catch((error) => {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "حدث خطا ما",
        });
        console.log(error);
      });
  },
  methods: {
    handleForm() {
      if (this.form.password === this.form.password_confirmation) {
        this.form.mobile = parseInt(this.mobile_input);
        this.isLoading = true;
        axios
          .post("https://beta.development-majles.tech/register", this.form)
          .then(() => {
            this.isLoading = false;
            this.$router.push({
              path: `/goToMail`,
            });
            Toast.fire({
              icon: "success",
              title: "تم التسجيل بنجاح",
            });
          })
          .catch((error) => {
            this.isLoading = false;
            Toast.fire({
              icon: "error",
              title: "بيانات غير مقبوله",
            });
            console.log(error);
          });
      } else {
        this.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "كلمة المرور غير متطابقه",
        });
      }
    },
  },
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
