<template>
  <main class="flex-1">
    <div class="w-full max-w-screen mx-auto px-4 flex py-8">
      <nav class="hidden lg:block lg:w-1/6 mr-8">
        <ul class="list-reset mb-8">
          <div class="pb-3 font-bold uppercase text-black">
            Bestellungen
          </div> <li>
            <nuxt-link to="/dashboard/card1" class="flex items-center no-underline text-grey-darker group hover:text-black py-2">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-current w-6 h-6 text-grey-dark mr-3 group-hover:text-primary text-primary">
                <path d="M0 0h24v24H0z" fill="none" /> <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
              </svg> <span class="font-bold text-black">
                Aktuelle Bestellungen
              </span>
              </a>
            </nuxt-link>
          </li> <li>
            <a href="https://pingping.io/account/notifications" class="flex items-center no-underline text-grey-darker group hover:text-black py-2">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="fill-current w-6 h-6 text-grey-dark mr-3 group-hover:text-primary text-grey-dark">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /> <path d="M0 0h24v24H0z" fill="none" />
              </svg> <span>Fertige Bestellungen</span>
            </a>
          </li> 
        </ul>
      </nav>
      <div class="flex-1">
        <div class="card">
          <div class="card-header">
            <h1>Update Profile</h1>
          </div> <div class="card-body">
            <div class="flex mb-6">
              <div class="w-1/3 pr-10">
                <div class="text-black font-bold">
                  Name
                </div> <p class="mt-4 text-sm text-grey-darker">
                  Your full name, e.g. John Doe
                </p>
              </div> <div class="w-2/3">
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
            </div> <div class="flex">
              <div class="w-1/3 pr-10">
                <div class="text-black font-bold">
                  Email
                </div> <p class="mt-4 text-sm text-grey-darker">
                  We use that email address to get in touch with you.
                  This is also your login.
                </p>
              </div> <div class="w-2/3">
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
          </div> <div class="card-footer">
            <button type="submit" class="btn btn--primary">
              Save Profile
            </button>
          </div>
        </div>
        <footer>
          <div class="w-full max-w-screen mx-auto px-4 pb-6 pt-12 text-sm text-secondary">
            <div class="flex justify-between">
              <div>
                Built by <a href="https://twitter.com/stefanbauerme" target="_blank" rel="noopener noreferrer" class="no-underline text-primary hover:text-primary-dark hover:underline">
                  @stefanbauerme
                </a>
              </div> <div>
                <ul class="list-reset flex">
                  <li class="mr-4">
                    <a href="https://pingping.io/help" class="no-underline text-primary hover:text-primary-dark hover:underline">
                      Support/Help
                    </a>
                  </li> <li class="mr-4">
                    <a href="https://pingping.io/privacy-policy" class="no-underline text-primary hover:text-primary-dark hover:underline">
                      Privacy Policy
                    </a>
                  </li> <li>
                    <a href="https://pingping.io/imprint" class="no-underline text-primary hover:text-primary-dark hover:underline">
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
