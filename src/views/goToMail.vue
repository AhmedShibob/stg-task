import router from '../router';
<template>
  <div class="registration  p-12 bg-blue-800 h-screen">
    <div class="container bg-white">
      <!-- component -->
      <div class="flex flex-wrap ">
        <div class="bg-white w-full md:w-3/5 ">
          <div class="mx-8 mt-8 ">
            <h1 class="text-blue-800 text-center text-2xl mt-64">
              لقد أرسلنا بريدًا إلكترونيًا ، قم بفتحه لتفعيل حسابك.
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
export default {
  data() {
    return {};
  },
  mounted() {},
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
