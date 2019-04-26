<template>
  <div class="flex font-sans flex-row justify-center w-screen">
    <div class="bg-cover relative overflow-hidden w-100 sm:h-full flex-col flex flex-row m-8">
      <header class="flex justify-between items-center mt-8 mb-12">
        <img
          class="logoImg"
          :class="{scrolledLogo : scrolled}"
          src="~/assets/newlogo2.svg"
          @click="$router.push('/')"
        >
        <nav class="p-8 sm:pt-0 sm:pr-0 sm:pl-8 sm:pb-0">
          <ul class="list-reset flex justify-center sm:justify-end">
            <li class="p-2 sm:ml-4 font-sans ">
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
      <article class="mt-8 mb-8">
        <time class="mb-2 text-grey-darkest font-bold uppercase text-med tracking-wide">
          February 2019 | <span class="text-orange">
            design, performance, laravel
          </span>
        </time>
        <h1 class="mt-2 mb-8 text-grey-darkest text-4xl">
          How I Built Laravel Core Adventures
        </h1>

        <header class="font-sans leading-normal font-sans text-xl text-grey-darkest font-bold mb-8">
          <p>Most interesting about a new product, except the product itself, are the little details and decisions that shaped it to what it became. This article is my approach to tell you all the problems, ideas, and solutions that created Laravel Core Adventures. It is not rocket science, but it is REAL.</p>
        </header>
        <img class="blogimage" alt="Laravel Core Adventure Banner" src="~/assets/banner.jpg">
        <h2>About</h2>
        <p>
          <a href="https://laravelcoreadventures.com">
            Laravel Core Adventures 
          </a> https://christoph-rumpel.com/2019/02/how-i-built-laravel-core-adventures is a free video series where I teach about how Laravel works under the hood aka the core. The idea is to pick a Laravel topic like <code>Facades</code> and then make little videos to explain important aspects of this topic.
        </p>
        <p>Right now, Laravel Core Adventures consists of two categories, eight videos and over an hour of content. But behind the scenes, I'm already working on the next category and videos.</p>
        <h2>Tech Stack</h2>
        <p>The stack of this project is pretty simple and <code>boring</code>. I'm using:</p>
        <ul>
          <li>Laravel 5.7</li>
          <li>MySQL</li>
          <li>Vanilla JS</li>
          <li>Forge</li>
          <li>Spatie Response Cache</li>
        </ul>
        <p>The Laravel project consists of one layout file and two templates for the <code>welcome/overview</code> and the <code>detail</code> page. All the categories and video details are stored in the database and get updated over Laravel Seeder classes. This way I don't have to touch the tables itself.</p>
        <p>The site needs a little bit of JavaScript for smooth scrolling and the category animations. (more about the animations later) There were at least ten times where I thought about using Vue.js, but in the end, I didn't. The goal for this project always was to keep it simple as long as possible and needed.</p>
        <h2>Design</h2>
        <p>I always try to design such projects myself. And with <code>design</code> I mean finding something similar to what I want and copy it. I'm no designer at all, but still, the visual appearance of what I build is critical to me.</p>
        <h3>You Got A Friend</h3>
        <p>
          Since it is a free product, I also couldn't just hire a designer, and I was ok with that. I knew I could make the site look <code>ok</code> and keep the focus on the videos. Still, I was thinking about getting a logo, and so I asked a good friend of mine. He and his cousin have their own company called <a href="http://complemind.com/">
            complemind
          </a>, where they do all kind of graphic design projects.
        </p>
        <p>So I told my friend about the idea of <code>Laravel Core Adventures</code> and connection to <code>Indiana Jones</code>. It should become more than a video platform. It should be about adventures and fun. He liked the idea and agreed to help me, but...</p>
        <p>It was a big BUT! He and his cousin would help me, but they wanted to do more than just a logo. They wanted more illustrations, maybe a character and all in a style of their choice. So they had the opportunity to try out something new, and in return, I would get their help. Of course, I said yes :-)</p>
        <h3>The Micro Site</h3>
        <p>
          It all started with this landing page example I found on <a href="https://dribbble.com/shots/4178092-Header-Underwater-World">
            Dribbble
          </a>. I wanted the micro-site to look as clean and exciting as that.
        </p>
        <img class="blogimage" alt="Screenshot of the inspiration graphic for Laravel Core Adventures" src="/images/blog/lca_first_inspiration.png">
        <p>While I was working on the application and the overall design of the website, these were the logos that we started with.</p>
        <img class="blogimage" alt="Screenshot of the first two logos" src="/images/blog/lca_logos.png">
        <ol>
          <li>The left logo already looked great, except for the color. Just black wasn't an option for me.</li>
          <li>We released the site with the second logo from the image above. It looks much more alive, and the connection to Indiana Jones is perfect.</li>
        </ol>
        <p>Now that we had the logo, I started thinking about other colors for the site. Since the logo was already very colorful, it wasn't too easy to find a highlight color for the website. (button, links, etc.) In the end, I went for a teal, similar to the one on the right.</p>
        <img class="blogimage" alt="Screenshot of different color variations" src="/images/blog/lca_colors.jpg">
        <p>The content of the site was an easy decision:</p>
        <ul>
          <li>Section 1: short info + call to action = newsletter</li>
          <li>Section 2: more info</li>
          <li>Section 3: example videos</li>
          <li>Section 4: info about myself</li>
        </ul>
        <h3>Full Site</h3>
        <p>After receiving great feedback for the release of the microsite, I already knew I had to work on a full site now. People were interested in this kind of videos, and the concept seemed to be a good one.</p>
        <p>The full site should provide:</p>
        <ul>
          <li>sections for different categories</li>
          <li>lists of the videos</li>
          <li>a detail page for watching a video</li>
          <li>an option for donations</li>
          <li>an illustration in addition to the logo</li>
        </ul>
        <img class="blogimage" alt="Screenshot of the new Laravel Core Adventures header" src="/images/blog/lca_header.png">
        <p>The new header is my absolute favorite section. The designers did great work with the new illustration, and I still love how simple this first part of the website is.</p>
        <p>It was hard for me to remove the newsletter form from this part because it was working so good. Still, I learned from the book I'm currently reading (Company of One by Paul Jarvis) that it is more important to serve the given users. Getting an email is one of the main priorities when you have a micro-site where you check people's interest in an idea. But now with the full site, the priority of a user is to start a journey and watch a video. So I moved the newsletter form down beneath the categories.</p>
        <p>I had the hardest time with the layout of the category section. It took me endless hours and lots of discussions with designer friends to come up with this current solution. Beneath is a screenshot from an older version where I was using collapsable lists for the categories and the current one.</p>
        <img class="blogimage" alt="Screenshot of a comparision of the old and new category design" src="/images/blog/lca_categories_comparison.png">
        <p>And last but not least, there is the detail section. The biggest problem here was that I don't have a typical logo or navbar on the welcome site, which I could use here as well. This is why we decided to create a horizontal text logo as well. Here I also got a comparison of an older design of this site and the current one.</p>
        <img class="blogimage" alt="Screenshot showing comparison of detail site old and current" src="/images/blog/lca_detail_comparison.png">
        <h2>Animations</h2>
        <p>When I got the first illustrations for the category images, the designers Markus and Martin also had an idea about animating the images. They sent me a video of what they had in mind. The animation looked exactly like it does now on the website, but it was a video.</p>
        <video controls="" class="blogimage">
          <source src="/images/blog/Illu2_animate.mp4" type="video/mp4">
          <p>
            Your browser doesn't support HTML5 video. Here is
            a <a href="/images/blog/Illu2_animate.mp4">
              link to the video
            </a> instead.
          </p>
        </video>
        <p>I knew I couldn't use the video, because of performance reasons. It was almost 4MB in size. This is way too much if you want to provide your users with a fast website. So my first idea was to try a kind of parallax effect instead. The designers provided me with different layers for the background, the character, and its legs. Then I decided to animate each layer while the user scrolls so that it looked like in the video. It took me about four hours to realize this is not possible. I came to a solution close, but I wasn't satisfied. These parallax effects work great with just different layers of background that you move differently while scrolling. Animating a bending knee is different.</p>
        <h3>Canvas To Rescue</h3>
        <p>
          I almost told them that it is not possible when I had an idea. What if I tried to implement the video in a better way, than trying to recreate the video. After some research, I found a library called <a href="https://github.com/gka/canvid">
            canvid
          </a>. It lets you play a small video on the canvas element. It works like that:
        </p>
        <ul>
          <li>Export all frames of the video as images</li>
          <li>Combine the images in a sprite</li>
          <li>Load this sprite with canvid</li>
          <li>Play the video with canvid</li>
        </ul>
        <p>This was amazing. I now could modify the current frame of the video, depending on how the user scrolls. The user goes down; I increase the current frame. The user goes up again; I decrease the frame which is like a rewind. Perfect! The only thing I needed to check was if the image was in sight. This can be done pretty easily with JavaScript.</p>
        <p>The only problem was the size of the sprite. In the beginning, it was over 1.5MB which is way too much. Luckily I could optimize the sprites to under 400KB. Jackpot! Here is how such a sprite looks like.</p>
        <img class="blogimage" alt="Sprite of the animated illustration" src="/images/blog/lca_cat_facades_sprite.jpg">
        <p>I was now able to implement these nice animations without scarifying the performance of the site.</p>
        <h2>Videos</h2>
        <p>Laravel Core Adventures would be nothing without the little videos where I speak to you. So here is my current workflow for creating them.</p>
        <h3>Research</h3>
        <p>First I decide on the next category. I already got a list of things I want to cover, but no order. I pick what interests me the most at that moment. Then I'll start my research. Most of the core implementations I talk about are entirely new to me as well. I've seen most of the files and methods, but I never took the time to put all the dots together. And let's be honest, Laravel is a complex application.</p>
        <p>While my research I take pieces of code and try to follow what is happening. I also read a lot about those topics, if I find good articles. I have to admit there are not many of them for what I need. On the other hand, this means I'm providing something new and hopefully useful.</p>
        <h3>The Plan</h3>
        <p>After my research, I hopefully have a good overall understanding of what is happening. Now the hardest part starts: Thinking about a way to teach what I have learned.</p>
        <blockquote>Teaching isn't just about providing information about a subject; it is about finding the right approach of explaining to reach a listener and help him.</blockquote>
        <p>My goal is to create an example that helps to understand what I try to teach. Then, of course, everything needs to be split up in small and easy to consume videos. When I have a plan for this, I start recording.</p>
        <h3>Recording</h3>
        <p>Here the most challenging part is to find the correct words. It should sound professional, but still easy to understand and without useless buzzwords. And of course, you should speak loud, clear and fluently while coding; and all of that in a foreign language :-)</p>
        <p>After recording, editing starts. In my case, I still need to edit a lot. I hope this will get better with every new video. Then I need to upload the videos to Youtube, create preview images, add inspiring titles and descriptions and update the website of course. In the end, it adds up to a lot of work.</p>
        <ul>
          <li>
            Research: <code>one week</code>
          </li>
          <li>
            The plan for the videos: <code>three days</code>
          </li>
          <li>
            Recording: <code>two days</code>
          </li>
          <li>
            Editing: <code>one day</code>
          </li>
          <li>
            Uploading, images, text, release...: <code>one day</code>
          </li>
        </ul>
        <h2>Youtube</h2>
        <p>You probably have already seen that my <code>videos are hosted on Youtube</code> and embedded on the Laravel Core Adventures website. But Youtube wasn't my first choice.</p>
        <p>In the beginning, I tried Vimeo. Next, to the hosting service, you can also use the Vimeo player. Jeffrey Way uses it on Laracasts. What I like the most about it, is the beautiful and clean interface. You don't get that when you embed a Youtube video, because the customization options are limited. Additional, you have to live with video suggestions at the end of every video. Not so cool if they don't fit. (they mostly don't)</p>
        <p>In the end, the decision still came in favor of Youtube, because this way the videos can also be found on Youtube itself. This is a massive benefit if you want to reach many users, and since my course is free, this is essential to me.</p>
        <h2>Donations</h2>
        <p>As mentioned, a section to donate to Laravel Core Adventures was planned on the website. I want to keep the platform free, but I like to provide a possibility to support it. Until now I have <code>spent over 150 hours of work</code> into this project, but I don't want to complain. Nobody forced me too. Still, I would love to see a little financial support to cover costs for Digital Ocean or Laravel Forge for example.</p>
        <p>The reason I didn't include the donation buttons is the EU. For digital sells to EU citizens, I have to collect local taxes. (VAT) This means I have to calculate and raise taxes for every donation I get. Then I have sent this money back to the EU so that every country gets their taxes back. The amount of work to make this happen is much higher than the value of the donation itself. It only makes sense if you sell a lot of products at a good price. In my case, I sadly had to skip this idea.</p>
        <p>I'm still thinking about how I could let people support Laravel Core Adventures. If you have an idea, please let me know!</p>
        <h2>Future</h2>
        <p>
          Now after the website is finished, I have my focus on providing more content. I'm already working on a new category and hope I will be able to release it soon. If you have any questions about Laravel Core Adventures or want to provide feedback, please contact me on <a href="https://twitter.com/christophrumpel">
            Twitter
          </a>.
        </p>
        <p>I wish this platform will:</p>
        <ul>
          <li>help many developers to understand Laravel better</li>
          <li>create better developers</li>
          <li>make me a better teacher</li>
        </ul>
        <p>
          Did you like this kind of in-depth article? Check out <a href="https://christoph-rumpel.com/2018/01/how-i-redesigned-my-blog-and-moved-it-from-jekyll-to-laravel">
            How I redesigned my blog and moved it from Jekyll to Laravel
          </a>.
        </p>
      </article>


      <div class="w-full bg-grey-lighter shadow-md rounded p-8 sm:p-10 mt-8 mb-8">
        <div class="flex items-center flex-col sm:flex-row mb-4">
          <div class="w-full sm:w-1/2">
            <h2 class="mt-0">
              Let's stay in touch
            </h2>
            <p class="text-lg">
              Sign up for my newsletter and I will let you know about more content and new projects of
              mine once a month.
            </p>
          </div>
          <div class="w-full sm:w-1/2 ">
            <form class="mt-4 sm:ml-8" action="https://app.convertkit.com/forms/879727/subscriptions" method="post" name="mc-embedded-subscribe-form" target="_blank">
              <div class="mb-4">
                <label class="block text-grey-darkest text-sm font-bold mb-2" for="email">
                  E-Mail
                </label>
                <input
                  id="email"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-dark"
                  name="email_address"
                  type="text"
                  placeholder="Your E-Mail"
                  required=""
                >
              </div>
              <div class="mb-4">
                <label class="block text-grey-darkest text-sm font-bold mb-2" for="firstname">
                  First name (optional)
                </label>
                <input id="firstname" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-dark" name="fields[first_name]" type="text" placeholder="Your first name">
              </div>
              <div class="flex items-center justify-between">
                <button class="bg-green hover:bg-green-dark text-white font-bold py-2 px-4 rounded" type="submit">
                  Sounds good
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>        
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
.font-sans {
  font-family: Montserrat;
}
.w-screen {
  width: 100vw;
}

h2,
h3,
h4,
h5 {
  color: #3d4852;
  margin-top: 3em;
  margin-bottom: 1.6rem;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

p code {
  background-color: #e3fcec;
  color: #38c172;
  padding-right: 0.25rem;
  padding-left: 0.25rem;
}

a {
  color: #6cb2eb;
}

li {
  color: #3d4852;
  line-height: 1.5;
  font-size: 1.32rem;
  font-family: Lora, Constantia, Lucida Bright, Lucidabright, Lucida Serif,
    Lucida, DejaVu Serif, Bitstream Vera Serif, Liberation Serif, Georgia, serif;
}

.blognote,
article p {
  margin-bottom: 1rem;
}

.text-grey-darkest {
  color: #3d4852;
}

.justify-center {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.bg-color {
  background-color: #fff;
}
.w-100 {
  width: 50rem;
}

.text-4xl {
  font-size: 2.45rem;
}

p,
table {
  color: #3d4852;
  line-height: 1.5;
  font-size: 1.32rem;
  font-family: Lora;
}
</style>
