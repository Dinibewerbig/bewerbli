<template>
  <div class="bg-grey-lighter text-base text-grey-darkest font-normal relative">
    <div class="h-2 bg-primary" />

    <div class="container  mx-auto p-8">
      <div class="mx-auto   max-w-sm">
        <div class=" py-10 text-center">
          <nuxt-link to="/">
            <img
              class="logoImg"
              :class="{scrolledLogo : scrolled}"
              src="~/assets/newlogo2.svg"
            >
          </nuxt-link>
        </div>

        <div class="bg-white card rounded-lg shadow">
          <div class="card-header py-8  text-black text-center text-xl tracking-widest uppercase">
            <h1>Welcome!</h1>  
          </div>
          <div class="flex">
            <button class="facebook p-2 flex-1 rounded mr-8 my-3 " @click="facebookSignIn">
              <img width="24" src="~/assets/facebook.svg" style="fill: #fff" alt="Icon github">
              <span class="text-white font-thin">
                Facebook
              </span> 
            </button>
            <button class="flex-grow p-2 flex-1 rounded my-3 border border-grey-light" @click="googleSignIn">
              <img width="24" src="~/assets/icon-google.svg" alt="Icon google">
              <span class="font-thin">
                Google
              </span>
            </button>
          </div>

          <form class=" px-10 py-10">
            {{ }}

            <div class="mb-3">
              <label class="form-label" for="email">
                Email
              </label>
              <input class="form-input" name="email" type="text" placeholder="E-Mail">
            </div>
            <div class="mb-6">
              <label class="form-label" for="email">
                Passwort
              </label>
              <input class="form-input" name="password" type="password" placeholder="**************">
            </div>
            <div class="flex">
              <button type="submit" class="btn btn--primary w-full p-4 tracking-wider">
                Log in
              </button>
            </div>
          </form>

          <div class="border-t px-10 py-6">
            <div class="flex justify-between">
              <a href="#" class="font-bold text-primary hover:text-primary-dark no-underline">
                Don't have an account?
              </a>
              <a href="#" class="text-grey-darkest hover:text-black no-underline">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.form-input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  width: 100%;
  border-radius: 0.25rem;
  background-color: #f3f6fa;
  padding: 1rem;
  color: #1b476f;
}

.form-label {
  display: block;
  color: #1b476f;
  letter-spacing: 0.03em;
  font-weight: 700;
  margin-bottom: 0.25rem;
  font-size: 0.8rem;
}

.btn--primary {
  background-color: #2b79c1;
  border-width: 1px;
  border-color: #2b79c1;
  color: #fff;
}

.card-header h1 {
  font-size: 1.125rem;
  color: #1b476f;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.btn {
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: 0;
  border-radius: 0.25rem;
  text-align: center;
  font-size: 0.875rem;
  text-decoration: none;
  font-weight: 700;
  -webkit-box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
    0 0 1px rgba(0, 0, 0, 0.08);
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 0 1px rgba(0, 0, 0, 0.08);
  text-transform: uppercase;
  position: relative;
}

.text-primary {
  color: #2b79c1;
}

.card {
  -webkit-box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1),
    0 8px 15px rgba(0, 0, 0, 0.07);
  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
}
</style>
