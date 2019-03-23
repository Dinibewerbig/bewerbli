<template>
  <div>
    <div class="container">
      <h1>Willkommen zu den Fragen</h1>

      <form class="form">
        <input type="text" placeholder="Username">
        <input type="password" placeholder="Password">
        <button id="login-button" type="submit">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss" >
.clicked {
  /* box-shadow: 0 5px #666; */
  /* transform: translateY(4px); */
  animation: hue 0.25s linear normal none running;
  animation-iteration-count: 3;
  background-color: #edcffd !important;
  background-color: #edcffd !important;
}

@keyframes hue {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
.wrapper.form-success .container h1 {
  -webkit-transform: translateY(85px);
  transform: translateY(85px);
}
::placeholder {
  color: white;
}
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 80px 0;
  height: 400px;
  text-align: center;
  font-family: 'Source Sans Pro', sans-serif;
  color: white !important;
  font-weight: 300;
}
.container h1 {
  font-size: 40px;
  transition-duration: 1s;
  transition-timing-function: ease-in-put;
  font-weight: 300;
  color: white;
}
form {
  padding: 20px 0;
  position: relative;
  z-index: 2;
}
form input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.2);
  width: 250px;
  border-radius: 3px;
  padding: 10px 15px;
  margin: 0 auto 10px auto;
  display: block;
  text-align: center;
  font-size: 18px;
  color: white !important;
  transition-duration: 0.25s;
  font-weight: 300 !important;
}
form input:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
form input:focus {
  background-color: white;
  width: 300px;
  color: #53e3a6 !important;
}
form button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: 0;
  background-color: white;
  border: 0;
  padding: 10px 15px;
  color: #53e3a6;
  border-radius: 3px;
  width: 250px;
  cursor: pointer;
  font-size: 18px;
  transition-duration: 0.25s;
  font-weight: 300;
}
form button:hover {
  background-color: #f5f7f9;
}
</style>
