<template>
  <main class="flex-1">
    <div class="w-full max-w-screen mx-auto px-4 flex py-8">
      <nav class="hidden lg:block lg:w-1/6 mr-8">
        <ul class="list-reset mb-8">
          <div class="pb-3 font-bold uppercase text-black">
            Mein Profil
          </div>
          <li>
            <nuxt-link
              to="/dashboard/card1"
              class="flex items-center no-underline text-grey-darker group hover:text-black py-2"
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current w-6 h-6 mr-3 group-hover:text-primary text-grey-dark"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"
                />
              </svg>
              <span class="font-bold text-black">
                Benutzerdaten
              </span>
            </nuxt-link>
          </li>
          <li>
            <a
              href
              class="flex items-center no-underline text-grey-darker group hover:text-black py-2"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="fill-current w-6 h-6 text-grey-dark mr-3 group-hover:text-primary text-grey-dark"
              >
                <path
                  d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
                />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
              <span>Credentials</span>
            </a>
          </li>
          <li class="mt-6 border-t border-grey pt-4">
            <a
              href
              class="flex items-center no-underline text-grey-darker group hover:text-black py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                class="fill-current w-6 h-6 mr-3 group-hover:text-primary text-grey-dark"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                />
              </svg>
              <span>Lösche deinen Account</span>
            </a>
          </li>
        </ul>
      </nav>
      <div class="flex-1">
        <div class="card">
          <div class="card-header">
            <h1>Update Profile</h1>
          </div>
          <div class="card-body">
            <div class="flex mb-6">
              <div class="w-1/3 pr-10">
                <div class="text-black font-bold">
                  Name
                </div>
                <p class="mt-4 text-sm text-grey-darker">
                  Your full name, e.g. John Doe
                </p>
              </div>
              <div class="w-2/3">
                <div class="mb-4">
                  <input
                    id="name"
                    class="form-input"
                    name="name"
                    type="text"
                    value="Thomas Marti"
                    autocomplete="no"
                  >
                </div>
              </div>
            </div>
            <div class="flex">
              <div class="w-1/3 pr-10">
                <div class="text-black font-bold">
                  Email
                </div>
                <p class="mt-4 text-sm text-grey-darker">
                  We use that email address to get in touch with you.
                  This is also your login.
                </p>
              </div>
              <div class="w-2/3">
                <div class="mb-4">
                  <input
                    id="email"
                    class="form-input"
                    name="email"
                    type="text"
                    value="thommymarti@gmail.com"
                    autocomplete="no"
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button type="submit" class="btn btn--primary">
              Save Profile
            </button>
          </div>
        </div>
        <footer>
          <div class="w-full max-w-screen mx-auto px-4 pb-6 pt-12 text-sm text-secondary">
            <div class="flex justify-between">
              <div>
                Built by
                <a
                  href="https://twitter.com/stefanbauerme"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="no-underline text-primary hover:text-primary-dark hover:underline"
                >
                  @stefanbauerme
                </a>
              </div>
              <div>
                <ul class="list-reset flex">
                  <li class="mr-4">
                    <a
                      href="https://pingping.io/help"
                      class="no-underline text-primary hover:text-primary-dark hover:underline"
                    >
                      Support/Help
                    </a>
                  </li>
                  <li class="mr-4">
                    <a
                      href="https://pingping.io/privacy-policy"
                      class="no-underline text-primary hover:text-primary-dark hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pingping.io/imprint"
                      class="no-underline text-primary hover:text-primary-dark hover:underline"
                    >
                      Imprint
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </main>
</template>
