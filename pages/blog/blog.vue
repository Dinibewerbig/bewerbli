<template>
  <div class="flex w-screen sm:h-screen relative flex-col sm:flex-row">
    <div class="relative overflow-hidden w-full sm:w-1/2 flex justify-center">
      <div class="hidden sm:profile-column sm:flex items-end p-8 justify-center h-full w-full bg-center text-white">
        <div class="text-center sm:pb-8">
          <h1 class="mb-2 hidden sm:block text-sh text-shadow text-white">
            christoph rumpel
          </h1>
          <p class="text-green text-xl hidden sm:block text-shadow">
            web and chatbot developer
          </p>
        </div>
      </div>
    </div>
    <div class="bg-cover relative overflow-hidden w-full sm:w-1/2 sm:h-full flex-col flex p-10">
      <header class="flex justify-between items-center flex-col lg:flex-row mt-4 sm:mt-0 mb-12">
        <a href="https://christoph-rumpel.com">
          <img src="/images/cr_logo_18_01.svg" alt="Photo of Christoph Rumpel" width="50">
        </a>
        <nav class="p-8 sm:pt-0 sm:pr-0 sm:pl-8 sm:pb-0">
          <ul class="list-reset flex justify-center sm:justify-end">
            <li class="p-2 sm:ml-4 font-sans underline">
              <a class="text-grey-darkest  text-sm sm:text-lg no-underline hover:underline" href="https://christoph-rumpel.com">
                Blog
              </a>
            </li>
            <li class="p-2 sm:ml-4 font-sans ">
              <a class="text-grey-darkest text-sm sm:text-lg no-underline hover:underline" href="https://christoph-rumpel.com/talks">
                Talks
              </a>
            </li>
            <li class="p-2 sm:ml-4 font-sans">
              <a class="text-sm sm:text-lg no-underline hover:underline bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded" href="https://christoph-rumpel.com/build-chatbots-with-php">
                Book
              </a>
            </li>
            <li class="p-2 sm:ml-4 font-sans ">
              <a class="text-grey-darkest text-sm sm:text-lg no-underline hover:underline" href="https://christoph-rumpel.com/newsletter">
                Newsletter
              </a>
            </li>
          </ul>
        </nav>
      </header>
        
      <ul class="flex flex-col p-0 mt-0 mb-0 sm:justify-center w-full white flex-grow">
        <li class="mb-4 w-full list-reset">
          <time class="mb-0 text-grey-darkest font-bold uppercase text-sm font-sans tracking-wide">
            February 2019
            |
            <a href="https://christoph-rumpel.com/category/design" class="text-orange">
              design
            </a>
            <a href="https://christoph-rumpel.com/category/%20performance" class="text-orange">
              performance
            </a>
            <a href="https://christoph-rumpel.com/category/%20laravel" class="text-orange">
              laravel
            </a>
          </time>

          <a class="no-underline" href="https://christoph-rumpel.com/2019/02/how-i-built-laravel-core-adventures">
            <h2 class="mt-0 mb-2 text-grey-darkest text-lg lg:text-xl">
              How I Built Laravel Core Adventures
            </h2>
          </a>
          <p class="blogsummary hidden  text-base md:block">
            Most interesting about a new product, except the product itself, are the little details and decisions that shaped it to what it became. T...
          </p>
          <a class="text-blue-light text-sm" href="https://christoph-rumpel.com/2019/02/how-i-built-laravel-core-adventures">
            Read more
          </a>
        </li>
        <li class="mb-4 w-full list-reset">
          <time class="mb-0 text-grey-darkest font-bold uppercase text-sm font-sans tracking-wide">
            January 2019
            |
            <a href="https://christoph-rumpel.com/category/design" class="text-orange">
              design
            </a>
            <a href="https://christoph-rumpel.com/category/%20editor" class="text-orange">
              editor
            </a>
          </time>

          <a class="no-underline" href="https://christoph-rumpel.com/2019/01/my-current-dark-and-light-theme">
            <h2 class="mt-0 mb-2 text-grey-darkest text-lg lg:text-xl">
              My Current Dark And Light Theme in 2019
            </h2>
          </a>
          <p class="blogsummary hidden  text-base md:block">
            There are two hard things in computer science: cache invalidation, naming things, and deciding which editor theme to choose. I've been la...
          </p>
          <a class="text-blue-light text-sm" href="https://christoph-rumpel.com/2019/01/my-current-dark-and-light-theme">
            Read more
          </a>
        </li>
        <li class="mb-4 w-full list-reset">
          <time class="mb-0 text-grey-darkest font-bold uppercase text-sm font-sans tracking-wide">
            December 2018
            |
            <a href="https://christoph-rumpel.com/category/general" class="text-orange">
              general
            </a>
          </time>

          <a class="no-underline" href="https://christoph-rumpel.com/2018/12/my-coding-year-2018">
            <h2 class="mt-0 mb-2 text-grey-darkest text-lg lg:text-xl">
              My Coding Year 2018
            </h2>
          </a>
          <p class="blogsummary hidden  text-base md:block">
            Another year has come to an end, and it is time for my traditional New Year's Eve blog post. I want to take some minutes to think back ab...
          </p>
          <a class="text-blue-light text-sm" href="https://christoph-rumpel.com/2018/12/my-coding-year-2018">
            Read more
          </a>
        </li>
      </ul>
      <!-- Render pagination -->
      <ul class="pagination list-reset flex flex-row justify-center h-10 mt-4 mb-4">
        <li class="disabled pr-2 text-lg">
          <span>« Previous</span>
        </li>
        
        
        <li class="text-lg">
          <a class="text-blue-light pl-2" href="https://christoph-rumpel.com?page=2" rel="next">
            Next »
          </a>
        </li>
      </ul>


      <footer class="flex justify-end m-4">
        <p class="text-grey-dark text-sm font-sans">
          <a class="text-grey-dark no-underline " href="https://christoph-rumpel.com/privacy-policy">
            Privacy Policy
          </a>
          <a class="ml-4 no-underline" href="https://twitter.com/christophrumpel" data-turbolinks="false">
            <!--?xml version="1.0" encoding="iso-8859-1"?-->
            <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

            <svg
              id="Capa_1"
              class="fill-grey-dark hover:fill-blue-light"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="14"
              height="14"
              viewBox="0 0 512.002 512.002"
              xml:space="preserve"
            >
              <g>
                <path
                  d="M512.002,97.211c-18.84,8.354-39.082,14.001-60.33,16.54c21.686-13,38.342-33.585,46.186-58.115
		c-20.299,12.039-42.777,20.78-66.705,25.49c-19.16-20.415-46.461-33.17-76.674-33.17c-58.011,0-105.042,47.029-105.042,105.039
		c0,8.233,0.929,16.25,2.72,23.939c-87.3-4.382-164.701-46.2-216.509-109.753c-9.042,15.514-14.223,33.558-14.223,52.809
		c0,36.444,18.544,68.596,46.73,87.433c-17.219-0.546-33.416-5.271-47.577-13.139c-0.01,0.438-0.01,0.878-0.01,1.321
		c0,50.894,36.209,93.348,84.261,103c-8.813,2.399-18.094,3.687-27.674,3.687c-6.769,0-13.349-0.66-19.764-1.888
		c13.368,41.73,52.16,72.104,98.126,72.949c-35.95,28.176-81.243,44.967-130.458,44.967c-8.479,0-16.84-0.496-25.058-1.471
		c46.486,29.807,101.701,47.197,161.021,47.197c193.211,0,298.868-160.062,298.868-298.872c0-4.554-0.104-9.084-0.305-13.59
		C480.111,136.775,497.92,118.275,512.002,97.211z"
                />
              </g>
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
              <g />
            </svg>
          </a>
          <a class="ml-4 no-underline" href="https://christoph-rumpel.com/feed" data-turbolinks="false">
            <svg class="stroke-grey-dark hover:stroke-blue-light" width="13" height="13" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>rss</title><path d="M1.124.002c-.303-.016-.57.08-.79.29C.112.502 0 .762 0 1.07v1.427c0 .566.435 1.033 1 1.068C9.3 4.065 15.936 10.702 16.436 19c.035.565.505 1.006 1.074 1h1.42c.307 0 .57-.112.778-.334.21-.218.306-.49.29-.796C19.432 8.706 11.29.568 1.124.002zm.03 6.28c-.31-.025-.587.067-.814.28-.228.21-.34.476-.34.79v1.426C0 9.33.416 9.79.97 9.84c4.863.46 8.737 4.327 9.196 9.19.05.554.51.976 1.062.976h1.427c.313 0 .58-.118.79-.346.21-.227.304-.505.278-.815C13.167 12.163 7.84 6.84 1.155 6.283zM2.93 14.14c-1.62 0-2.93 1.314-2.928 2.932 0 1.62 1.31 2.932 2.928 2.934.778 0 1.524-.308 2.075-.858.55-.55.86-1.297.858-2.076.002-.778-.307-1.524-.857-2.075-.55-.55-1.297-.86-2.075-.858z" fill="#87959E" fill-rule="evenodd" />
            </svg>
          </a>
        </p>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-grey-darkest {
  color: #3d4852;
}

.font-sans {
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}
</style>
