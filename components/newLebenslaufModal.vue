
<template>
  <modal
    name="newlebenslauf-modal"
    transition="nice-modal-fade"
    classes="demo-modal-class"
    :delay="100"
    :adaptive="true"
    height="700"
    :width="770"
    @before-close="beforeClose"
  >
    <div class="card h-full">
      <div class="p-3 rounded light no-underline text-info2" @click="fetchForm">
        fetchform
        <ArrowRightIcon />
      </div>
      <!-- {{ data }} -->
      <div class="w-full flex flex-row flex-wrap">
        <div transition="content">
          <div class="py-12 px-16 w-full">
            <div class="w-full">
              <!-- EINS Willkommen-->

              <div v-show="show === 1">
                <div class="mb-16 mx-auto">
                  <img src="~/assets/lebenslauf2.svg" class="w-2/3">
                </div>
               
                <div
                  class="tracking-normal mt-4 text-4xl mb-2 font-light"
                >
                  Willkommen zum Fragebogen Lebenslauf {{ userProfile.name }}
                </div>
             
                <p
                  class="text-grey-darkest font-normal text-xl mt-4"
                >
                  Die hier gemachten Angaben helfen uns für dich den perfekten Lebenslauf zu erstellen.
                </p>
                <div class="p-3 rounded light no-underline text-info2" @click="showNext">
                  Melde dich an um weiterzufahren
                  <ArrowRightIcon />
                </div>
              </div>

              <!-- ZWEI Personalien-->
              <div v-show="show === 2">
                <div class="mb-8 mx-auto">
                  <img src="~/assets/personalien.png" class="w-2/3">
                </div>
                <div
                  class="tracking-normal mt-4 text-4xl mb-2 font-light"
                >
                  Gib zuerst deine Personalien ein
                </div>
              
                <p
                  class="text-grey-darkest font-normal text-xl mt-4"
                >
                  Deine Personalien werden verschlüsselt gespeichtert und sind unter keinen Umständen durch Drittpersonen einsehbar.
                </p>
                <div class="p-3 rounded light no-underline text-info2" @click="showNext">
                  Hier geht es zum Fragebogen Personalien
                  <ArrowRightIcon />
                </div>
              </div>

              <!-- DREI Personalien-->
              <div v-show="show === 3" class="flex flex-row flex-wrap">
                <div class="mb-2">
                  <h1>Personalien</h1>
                </div>

                <div class="flex w-full">
                  <div class="w-full mr-4">
                    <label>
                      Name
                    </label>
                    <div class="mb-2">
                      <input
                        id="name"
                        v-model="data[1]"
                        class="form-input"
                        name="family-name"
                        type="text"
                        placeholder="Name"
                        autocomplete="no"
                      >
                    </div>
                  </div>
                  <div class="w-full">
                    <label>
                      Vorname
                    </label>
                    <div class="mb-2">
                      <input
                        id="name"
                        v-model="data[2]"
                        class="form-input"
                        name="given-name"
                        type="text"
                        placeholder="Vorname"
                        autocomplete="no"
                      >
                    </div>
                  </div>
                </div>
                <div class="flex w-full">
                  <div class="w-full mr-4">
                    <label>
                      Strasse
                    </label>
                    <div class="mb-2">
                      <input
                        id="name"
                        v-model="data[3]"
                        class="form-input"
                        name="street-address"
                        type="text"
                        placeholder="Strasse"
                        autocomplete="no"
                      >
                    </div>
                  </div>

                  <div class="w-full">
                    <label>
                      Ortschaft
                    </label>
                  
                    <v-select v-model="data[4]" :reduce="orte => orte.Ortschaft" :options="orte" label="Ortschaft" />
                  </div>
                </div>
                <div class="flex w-full">
                  <div class="w-full mr-4">
                    {{ date1 }}
                    <label>
                      Geburtsdatum
                    </label>
               
                    <div class="mb-2">
                      <!-- <datepicker v-model="data[5]" format="d MMMM yyyy" full-month-name='true' :placeholder="Geburtsdatum" /> -->
                      <date-picker
                        ref="datePicker"
                        v-model="data[5]"
                        value-type="format"
                        :full-month-name="true"
                        format="D. MMMM YYYY"
                        lang="de"
                      />
                    </div>
                  </div>
                  <div class="w-full">
                    <label>
                      Nationalität
                    </label>
                    <v-select v-model="data[6]" :reduce="staaten => staaten.Suchbegriff" :options="staaten" label="Suchbegriff" />
                  </div>
                </div>
                <div class="flex w-full">
                  <div class="w-full mr-4">
                    <label>
                      Mobil
                    </label>
                    <div class="mb-2">
                      <input
                        id="name"
                        v-model="data[7]"
                        class="form-input"
                        name="phone"
                        type="tel"
                        placeholder="Mobiltelefon"
                        autocomplete="no"
                      >
                    </div>
                  </div>
                  <div class="w-full">
                    <label>
                      Email
                    </label>
                    <div class="mb-2">
                      <input
                        id="name"
                        v-model="data[8]"
                        class="form-input"
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        autocomplete="no"
                      >
                    </div>
                  </div>
                </div>
                <div class="p-3 rounded light no-underline text-info2" @click="showNext">
                  Weiter zu Familie
                  <ArrowRightIcon />
                </div>
              </div>

              <!-- VIER Familie-->
              <div v-show="show === 4">
                <div class="mb-8 mx-auto">
                  <img src="~/assets/personalien.png" class="w-2/3">
                </div>
                <div
                  class="tracking-normal mt-4 text-4xl mb-2 font-light"
                >
                  Mache Angaben zu deiner Familie 
                </div>
              
                <p
                  class="text-grey-darkest font-normal text-xl mt-4"
                >
                  In deinem Lebenslauf informierst du uüüber deine Eltern und deine Geschwister
                </p>
                <div class="p-3 rounded light no-underline text-info2" @click="showNext">
                  Hier geht es zum Fragebogen Familie
                  <ArrowRightIcon />
                </div>
              </div>

              <!-- FUENF Familie -->

            
              <div v-show="show === 5" class="flex flex-row flex-wrap">
                <div class="mb-2">
                  <h1>Familie</h1>
                </div>

                <div class="flex w-full">
                  <div class="flex w-full">
                    <div class="w-full mr-4">
                      <label>
                        Vorname deines Vaters
                      </label>
                      <div class="mb-2">
                        <input
                          id="name"
                          v-model="data[9]"
                          class="form-input"
                          name="name"
                          type="text"
                          placeholder="Vorname Vater"
                          autocomplete="no"
                        >
                      </div>
                    </div>
                    <div class="w-full mr-4">
                      <label>
                        Nachname deines Vaters
                      </label>
                      <div class="mb-2">
                        <input
                          id="name"
                          v-model="data[10]"
                          class="form-input"
                          name="name"
                          type="text"
                          placeholder="Nachname Vater"
                          autocomplete="no"
                        >
                      </div>
                    </div>
                    <div class="w-full">
                      <label>
                        Beruf Vater
                      </label>
                      <div class="mb-2">
                        <input
                          id="name"
                          v-model="data[11]"
                          class="form-input"
                          name="name"
                          type="text"
                          placeholder="Beruf Vater"
                          autocomplete="no"
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex w-full">
                  <div class="w-full mr-4">
                    <label>
                      Vorname deiner Mutter
                    </label>
                    <div class="mb-2">
                      <input
                        id="name"
                        v-model="data[12]"
                        class="form-input"
                        name="name"
                        type="text"
                        placeholder="Vorname Mutter"
                        autocomplete="no"
                      >
                    </div>
                  </div>
                  <div class="w-full mr-4">
                    <label>
                      Nachname deiner Mutter
                    </label>
                    <div class="mb-2">
                      <input
                        id="name"
                        v-model="data[13]"
                        class="form-input"
                        name="name"
                        type="text"
                        placeholder="Nachname Mutter"
                        autocomplete="no"
                      >
                    </div>
                  </div>
                  <div class="w-full">
                    <label>
                      Beruf Mutter
                    </label>
                    <div class="mb-2">
                      <input
                        id="name"
                        v-model="data[14]"
                        class="form-input"
                        name="name"
                        type="text"
                        placeholder="Beruf Mutter"
                        autocomplete="no"
                      >
                    </div>
                  </div>
                </div>
                  
                <div class="flex w-full">
                  <ul>
                    <li v-for="index in 3" :key="index">
                      <div class="flex w-full">
                        <div class="w-full mr-4">
                          <label>
                            Vorname deiner/s Schwester/Bruder
                          </label>
                          <div class="mb-2">
                            <input
                              id="name"
                              v-model="data[(index-1) * 3 +15]"
                              class="form-input"
                              name="name"
                              type="text"
                              placeholder="Vorname Schwester/Bruder"
                              autocomplete="no"
                            >
                          </div>
                        </div>
                        <div class="w-full mr-4">
                          <label>
                            Nachname deiner/s Schwester/Bruders
                          </label>
                          <div class="mb-2">
                            <input
                              id="name"
                              v-model="data[(index-1) * 3 +16]"
                              class="form-input"
                              name="name"
                              type="text"
                              placeholder="Nachname Schwester/Bruder"
                              autocomplete="no"
                            >
                          </div>
                        </div>
                        <div class="w-full mr-4">
                          <label>
                            Tätigkeit oder Beruf deiner/s Schwester/Bruder
                          </label>
                          <div class="mb-2">
                            <input
                              id="name"
                              v-model="data[(index-1) * 3 +17]"
                              class="form-input"
                              name="name"
                              type="text"
                              placeholder="Tätigkeit Schwester/Bruder"
                              autocomplete="no"
                            >
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
               
                <div class="p-3 rounded light no-underline text-info2" @click="showNext">
                  Weiter zu Familie
                  <ArrowRightIcon />
                </div>
              </div>
            </div>



            <!-- SECHS Schulbildung-->

            <div v-show="show === 6">
              <div class="mb-16 mx-auto">
                <img src="~/assets/schulbildung.png" class="w-2/3">
              </div>
              <div
                class="tracking-normal mt-4 text-4xl mb-2 font-light"
              >
                Deine Schulbildung {{ userProfile.name }}
              </div>
              <p
                class="text-grey-darkest font-normal text-xl mt-4"
              >
                Welche Schulen hast du in welchen Jahren besucht?
              </p>
              <div class="p-3 rounded light no-underline text-info2" @click="showNext">
                Melde dich an um weiterzufahren
                <ArrowRightIcon />
              </div>
            </div>

            <!-- SIEBEN Schulbildung-->

            <div v-show="show === 7">
              <div class="mb-2">
                <h1>Schulbildung</h1>
              </div>
              <ul>
                <li v-for="index in 4" :key="index">
                  <div class="flex w-full">
                    <div class="w-1/3 mr-4">
                      <label>
                        Von
                      </label>
                      <div class="mb-2">
                        <date-picker
                          v-model="data[(index-1)*4 +31]"
                          class="w-1/4"
                          lang="en"
                          type="year"
                          value-type="format"
                          format="YYYY"
                          width="100"
                          placeholder="Von"
                        />
                      </div>
                    </div>
                    <div class="w-1/3 mr-4">
                      <label>
                        Bis
                      </label>
                      <div class="mb-2">
                        <date-picker
                          v-model="data[(index-1)*4 +32]"
                          width="100"
                          placeholder="Von"
                          lang="en"
                          type="year"
                          value-type="format"
                          format="YYYY"
                        />
                      </div>
                    </div>
                    <div class="w-full">
                      <label>
                        Schule
                      </label>
                      <div class="mb-2">
                        <input
                          id
                          v-model="data[(index-1)*4 +33]"
                          class="form-input"
                          name="name"
                          type="text"
                          placeholder="Name der Schule"
                          autocomplete="no"
                        >
                      </div>
                    </div>
                    <div class="w-full">
                      <label>
                        Ort der Schule
                      </label>
                      <div class="mb-2">
                        <input
                          id
                          v-model="data[(index-1)*4 +34]"
                          class="form-input"
                          name="name"
                          type="text"
                          placeholder="Ort der Schule"
                          autocomplete="no"
                        >
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
          
              <div class="p-3 rounded light no-underline text-info2" @click="showNext">
                Weiter zu Schulbildung
                <ArrowRightIcon />
              </div>
            </div>

            <!-- ACHT Sprachkenntnisse-->

            <div v-show="show === 8">
              <div class="mb-16 mx-auto">
                <img src="~/assets/schulbildung.png" class="w-2/3">
              </div>
              <div class="tracking-normal mt-4 text-4xl mb-2 font-light">
                Deine Sprachkenntnisse
              </div>
              <p
                class="text-grey-darkest font-normal text-xl mt-4"
              >
                Welche Schulen hast du in welchen Jahren besucht?
              </p>
              <div class="p-3 rounded light no-underline text-info2" @click="showNext">
                Zu den Sprachkenntnissen
                <ArrowRightIcon />
              </div>
            </div>


            <!-- NEUN Sprachkenntnisse-->

            <div v-show="show === 9">
              <div class="mb-12">
                <h1>Sprachkenntnisse</h1>
              </div>
              <ul>
                <li v-for="index in 4" :key="index">
                  <div class="flex w-full">
                    <div class="w-full mr-4">
                      <label>
                        Sprache
                      </label>
                      <div class="mb-2">
                        <input
                          id="name"
                          v-model="data[(index-1)*3 +51]"
                          class="form-input"
                          name="name"
                          type="text"
                          placeholder="Sprache "
                          autocomplete="no"
                          list="sprachen"
                        >
                        <datalist id="sprachen">
                          <option value="Englisch" />
                          <option value="Französisch" />
                          <option value="Italienisch" />
                          <option value="Spanisch" />
                          <option value="Portugiesisch" />
                        </datalist>
                      </div>
                    </div>
                    <div class="w-full mr-4">
                      <label>
                        Anzahl Jahre
                      </label>
                      <div class="mb-2 w-full">
                        <number-input v-model="data[(index-1)*3 +52]" :min="1" :max="10" inline controls />
                      </div>
                    </div>
                    <div class="w-full">
                      <label>
                        Wie hast du die Sprache gelernt?
                      </label>
                      <div class="mb-2">
                        <input
                          id="name"
                          v-model="data[(index-1)*3 +53]"
                          class="form-input"
                          name="name"
                          type="text"
                          placeholder="Kenntnisse"
                          autocomplete="no"
                          list="suggestions"
                        >

                        <datalist id="suggestions">
                          <option value="Schulkenntnisse" />
                          <option value="Sprachaufenthalt" />
                          <option value="Muttersprache" />
                        </datalist>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="p-3 rounded light no-underline text-info2" @click="showNext">
                Zu deinen Hobbies
                <ArrowRightIcon />
              </div>
              </ul>
            </div>

            <!-- ZEHN Schulbildung-->

            <div v-show="show === 10">
              <div class="mb-16 mx-auto">
                <img src="~/assets/schulbildung.png" class="w-2/3">
              </div>
              <div class="tracking-normal mt-4 text-4xl mb-2 font-light">
                Was sind deine Freizeitbeschäftigungen?
              </div>
              <p
                class="text-grey-darkest font-normal text-xl mt-4"
              >
                Welche Interessen hast du, bist Mitglied eines Vereins oder Clubs? 
              </p>
              <div class="p-3 rounded light no-underline text-info2" @click="showNext">
                Zu Hobbies
                <ArrowRightIcon />
              </div>
            </div>

            <!-- ELF Schulbildung-->
            <div v-show="show === 11">
              <div class="mb-12">
                <h1>Hobbies und Interessen</h1>
              </div>
              <ul>
                <li v-for="index in 5" :key="index">
                  <div class="flex w-full">
                    <div class="w-full mr-4">
                      <label>
                        Hobby {{ index }}
                      </label>
                
                      <div class="mb-2">
                        <input
                          id="name"
                          v-model="data[(index-1)*2 +71]"
                          class="form-input"
                          name="hobby"
                          type="text"
                          placeholder="Hobby "
                          autocomplete="no"
                          list="hobbies"
                        >
                        <datalist id="hobbies">
                          <option value="Snowboarden" />
                          <option value="Guitarre" />
                          <option value="Theater" />
                          <option value="Fussball" />
                          <option value="Babysitten" />
                          <option value="Fahrradfahren" />
                          <option value="Reisen" />
                          <option value="usw" />
                        </datalist>
                      </div>
                    </div>
                

                    <div class="w-full mr-4">
                      <label>
                        Wo? 
                      </label>
                      <div class="mb-2 w-full">
                        <input
                          id="name"
                          v-model="data[(index-1)*2 +72]"
                          class="form-input"
                          name="verein"
                          type="text"
                          placeholder="Club oder Verein "
                          autocomplete="no"
                          list="vereine"
                        >
                        <datalist id="vereine">
                          <option value="Handball Verein Seebach" />
                          <option value="Fussball Club FZ Höngg" />
                          <option value="Schachclub STK" />
                          <option value="wöchentliches Training" />
                          <option value="Familie Meier" />
                          <option value="-" />
                        </datalist>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="p-3 rounded light no-underline text-info2" @click="showNext">
                Zu den Schnupperlehren
                <ArrowRightIcon />
              </div>
            </div>


            <!-- ZWOELF Schnupperlehren-->

            <div v-show="show === 12">
              <div class="mb-16 mx-auto">
                <img src="~/assets/schulbildung.png" class="w-2/3">
              </div>
              <div class="tracking-normal mt-4 text-4xl mb-2 font-light">
                Welche Schnupperlehren hast du absolviert
              </div>
              <p
                class="text-grey-darkest font-normal text-xl mt-4"
              >
                Wo warst du bereits Schnuppern und in welchen Berufen. Nur Schnupperlehren erwaähnen, die einen Bezug zu dem Beruf haben, in welchem du dich jetzt bewirst. 
              </p>
              <div class="p-3 rounded light no-underline text-info2" @click="showNext">
                Trage hier deine Schnupperlehren ein. 
                <ArrowRightIcon />
              </div>
            </div>

            <!-- DREIZEHN Schnupperlehren-->
            <div v-show="show === 13">
              <div class="mb-12">
                <h1>Schnupperlehren und Betriebsbesichtigungen</h1>
              </div>
              <ul>
                <li v-for="index in 4" :key="index">
                  <div class="flex w-full">
                    <div>
                      <div class="w-full mr-4">
                        <label>
                          Firma {{ index }}
                        </label>
                        <div class="mb-2">
                          <input
                            id="name"
                    
                            v-model="data[(index-1)*6 +91]"
                            name="firmen"
                            type="text"
                            placeholder="Firmenname "
                            autocomplete="no"
                            list="firmen"
                          >
                          <datalist id="firmen">
                            <option value="Kantonsspital St.Gallen" />
                            <option value="Hofer Architekten AG" />
                          </datalist>
                        </div>
                      </div>
                    </div>
                    <div class="mr-4 w-full">
                      <div class="w-full mr-4">
                        <v-select v-model="data[(index-1)*6 +93]" :options="berufe" />
                      </div>
                      <div class="w-full">
                        <v-select v-model="data[(index-1)*6 +92]" :reduce="orte => orte.Ortschaft" :options="orte" label="Ortschaft" />
                      </div>
                    </div>
                    
                    <div class="">
                      <div class="">
                        <div class="">
                          <number-input v-model="data[(index-1)*6 +94]" :min="1" :max="10" inline controls />
                        </div>
                      </div>
                      
                      <div class=" mt-4 mr-4">
                        <div class="mb-2  flex flex-row ">
                          <date-picker
                            v-model="data[(index-1)*6 +95]"
                            lang="en"
                            value-type="format"
                            :full-month-name="true"
                            format="D. MMMM"
                            placeholder="Von"
                          />
                          <date-picker
                            v-model="data[(index-1)*6 +96]"
                            lang="en"
                            value-type="format"
                            :full-month-name="true"
                            format="D. MMMM YYYY"
                            placeholder="Von"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="p-3 rounded light no-underline text-info2" @click="showNext">
                Zu den Referenzen
                <ArrowRightIcon />
              </div>
            </div>
            <!-- VIERZEHN Schulbildung-->

            <div v-show="show === 14">
              <div class="mb-16 mx-auto">
                <img src="~/assets/schulbildung.png" class="w-2/3">
              </div>
              <div class="tracking-normal mt-4 text-4xl mb-2 font-light">
                Wähle deine Referenzen
              </div>
              <p
                class="text-grey-darkest font-normal text-xl mt-4"
              >
                Wer kennt dich besonders gut und glaubt an dich ausserhalb deiner Familie. 
              </p>
              <div class="p-3 rounded light no-underline text-info2" @click="showNext">
                Gib hier deine Referenzen an 
                <ArrowRightIcon />
              </div>
            </div>
            <!-- FUENFZEHN Schulbildung-->
            <div v-show="show === 15">
              <div class="mb-12">
                <h1>Referenzen</h1>
              </div>
              <ul>
                <li v-for="index in 2" :key="index">
                  <div class="flex w-full">
                    <div class="w-full mr-4">
                      <label>
                        Nachname 
                      </label>
                      <div class="mb-2">
                        <input
                          id="name"
                          v-model="data[(index-1)*6 +111]"
                          class="form-input"
                          name="name"
                          type="text"
                          placeholder="Nachname"
                          autocomplete="no"
                        >
                      </div>
                    </div>
                    <div class="w-full mr-4">
                      <label>
                        Vorname 
                      </label>
                      <div class="mb-2">
                        <input
                          id="name"
                          v-model="data[(index-1)*6 +112]"
                          class="form-input"
                          name="name"
                          type="text"
                          placeholder="Vorname"
                          autocomplete="no"
                        >
                      </div>
                    </div>
                    <div class="w-full mr-4">
                      <label>
                        Position
                      </label>
                      <div class="mb-2 w-full">
                        <input
                          id="name"
                          v-model="data[(index-1)*6 +113]"
                          class="form-input"
                          name="name"
                          type="text"
                          placeholder="Position "
                          autocomplete="no"
                          list="position"
                        >
                        <datalist id="position">
                          <option value="Klassenlehrerin" />
                          <option value="Bezirksschullehrerin" />
                          <option value="Fachlehrer" />
                          <option value="Trainer" />
                          <option value="Berufsbildnerin " />
                        </datalist>
                      </div>
                    </div>
              
                    <div class="w-full mr-4">
                      <label>
                        Arbeitsort 
                      </label>
                      <div class="mb-2 w-full">
                        <input
                          id="name"
                          v-model="data[(index-1)*6 +114]"
                          class="form-input"
                          name="name"
                          type="text"
                          placeholder="Arbeitsort "
                          autocomplete="no"
                          list="position"
                        >
                        <datalist id="position">
                          <option value="Realschule Urtenen" />
                          <option value="Bezirksschule Mutschellen" />
                          <option value="Hotel Schwanen Rapperswil" />
                          <option value="FC Uznach" />
                          <option value="Hofer AG" />
                        </datalist>
                      </div>
                    </div>
                    <div class="w-full mr-4">
                      <label>
                        Email 
                      </label>
                      <div class="mb-2">
                        <input
                          id="name"
                          v-model="data[(index-1)*6 +115]"
                          class="form-input"
                          name="name"
                          type="text"
                          placeholder="Email"
                          autocomplete="no"
                        >
                      </div>
                    </div>
                    <div class="w-full mr-4">
                      <label>
                        Telefon 
                      </label>
                      <div class="mb-2">
                        <input
                          id="name"
                          v-model="data[(index-1)*6 +116]"
                          class="form-input"
                          name="name"
                          type="text"
                          placeholder="Telefon"
                          autocomplete="no"
                        >
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="p-3 rounded light no-underline text-info2" @click="showNext">
                Fragebogen Lebenslauf/CV abschliessen und CV generieren
                <ArrowRightIcon />
              </div>
            </div>
            <!-- SECHSZEHN Schluss-->

            <div
              v-show="show === 16"
            >
              <div class="w-full mr-4">
                <div class="mb-16 mx-auto">
                  <img src="~/assets/success.svg" class="w-2/3 ">
                </div>
                <div class="tracking-normal mt-4 text-4xl mb-2 font-light">
                  Du hast es geschafft. Bravo. 
                </div>
                <p
                  class="text-grey-darkest font-normal text-xl mt-4"
                >
                  Falls du später Änderungen vornehmen möchtest, kannst du dies jederzeit im Dashboard tun.
                </p>
                <div class="p-3 rounded light no-underline text-info2" @click="showNext">
                  Wähle jetzt das passende Design
                  <ArrowRightIcon />
                </div>
              </div>
            </div>
    
            <!-- SIEBZEHN Schluss-->
            <div v-show="show === 17">
              <div class="w-full mr-4 ">
                <div class="w-full mr-4 flex">
                  <div class="mb-4 ">
                    <img src="~/assets/thumbleb1.png" class="w-full mr-2">
                  </div>
                  <div class="mb-4">
                    <img src="~/assets/thumbleb2.png" class="w-full mr-2">
                  </div>
                  <div class="mb-4 ">
                    <img src="~/assets/thumbleb3.png" class="w-full">
                  </div>
                </div>
                <div class="tracking-normal  text-4xl mb-2 font-light">
                  Du hast es geschafft. Bravo. 
                </div>
                <p
                  class="text-grey-darkest font-normal text-xl mt-4"
                >
                  Generiere deinen Lebenslauf. Wie gesagt, kannst du später jederzeit Änderungen vornehmen und den Lebenslauf neu generieren.
                </p>
                <div class="p-3 rounded mx-auto font-semibold button btn border border bg-headline text-icon w-1/3 mt-4 light no-underline " @click="createLebenslauf()">
                  Lebenslauf generieren
                  <ArrowRightIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </modal>
</template>

  <script>
import { mapState } from 'vuex'
import DatePicker from 'vue2-datepicker'
import orte from 'assets/orte.js'
import staaten from 'assets/staaten.js'
import berufe from 'assets/berufe.js'
import moment from 'moment'

import { ArrowRightIcon } from 'vue-feather-icons'
const fb = require('~/services/firebaseConfig.js')

export default {
  components: {
    ArrowRightIcon,
    DatePicker
  },

  data() {
    return {
      orte,
      berufe,
      staaten,
      Nationalität: {},
      Ort: {},
      ort: {},
      Ortschaften: '',
      terms: '',
      fragebogen: true,
      fragebogen2: false,
      unangemeldet: false,
      beruf: null,
      firma: null,
      website: null,
      show: 1,
      date: null,
      date1: null,
      cv: [],
      data: []
    }
  },

  computed: {
    ...mapState(['currentUser', 'userProfile'])
  },
  created() {
    this.$bus.$on('saveInput', payload => {
      this.saveDoc(payload)
    })
    setTimeout(() => {
      this.fetchForm()
    }, 600)
  },
  methods: {
    beforeClose: function() {
      this.show = 1
    },
    saveForm: function(payload) {
      const data2 = this.data
      console.log(data2)
      for (let i = 0; i < data2.length; i++) {
        if (data2[i] === null || data2[i] === undefined) {
          data2[i] = ''
        }
      }
      const obj = {
        arr: data2
      }
      this.$nextTick(() => {
        fb.usersCollection
          .doc(this.currentUser.uid)
          .collection('fragebogen')
          .doc('fragebogen1')
          .set(obj)
          .then(user => {})
          .catch(err => {
            console.log(err)
          })
        // fb.usersCollection
        //   .doc(this.currentUser.uid)
        //   .collection('fragebogen')
        //   .doc('fragebogen1')
        //   .update(obj)
        //   .then(user => {
        //     console.log('hallo' + obj)
        //   })

        //   .catch(err => {
        //     console.log(err)
        //   })
      })
    },
    fetchForm() {
      // const categoryList = []
      this.$nextTick(() => {
        fb.usersCollection
          .doc(this.currentUser.uid)
          .collection('fragebogen')
          .doc('fragebogen1')
          .get()
          .then(snapshot => {
            this.data = snapshot.data().arr
            console.log(this.data)
            fb.usersCollection
              .doc(this.currentUser.uid)
              .collection('fragebogen')
              .doc('fragebogen1')
              .get()
              .then(snapshot => {
                this.date1 = snapshot.data().date1
                console.log(this.date1)
              })
              .catch(error => {
                console.log(error)
              })
          })
          .catch(error => {
            console.log(error)
          })
      })
    },
    showNext: function() {
      console.log(this.show)
      this.show = ++this.show
      console.log(moment)
      this.saveForm()
    },
    saveDoc: function(payload) {
      this.$nextTick(() => {
        fb.usersCollection
          .doc(this.currentUser.uid)
          .collection('fragebogen')
          .doc(this.firma)
          .set({
            beruf: this.beruf,
            firma: this.firma,
            Ort: this.ort,
            Website: this.website
          })
          .then(ref => {
            this.$store.commit('setFirma', this.firma)
            console.log('commit to store' + this.firma)
          })
      })
    },
    createLebenslauf: function(payload) {
      console.log('opening')
      this.$router.push('/dashboard/editor')
      setTimeout(() => {
        this.$bus.$emit('createLebenslauf')
      }, 1000)
    },
    anmelden: function() {
      this.saveDoc()
      if (!this.currentUser) {
        this.unangemeldet = true
        this.fragebogen = false
        this.fragebogen2 = false
      } else {
        this.unangemeldet = false
        this.fragebogen2 = true
        this.fragebogen = false
      }
      //   // this.$store.dispatch('fetchDocumentsList')
      //   // if (route) {
      //   //   this.$router.push('/fragebogen/start')
      //   // } else {
      //   //   console.log('saved ' + this.documentName)
    }
  }
}
</script>



  <style lang="scss" >
.demo-modal-class {
  border-radius: 5px;
}

.v--modal-overlay[data-modal='login-modal'] {
  background: rgba(0, 0, 0, 0.4);
}

.content-enter-active,
.content-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.content-enter,
.content-leave-to {
  opacity: 0;
}

label {
  @apply block  tracking-wide text-xs  mb-2;
}
.spinnerinput {
  box-sizing: border-box;
  border: 1px solid #ebebeb;
  float: left;
  font-size: 16px;
  height: 30px;
  margin: 0;
  outline: none;
  text-align: center;
  width: calc(100% - 80px);
  -webkit-appearance: none !important;
  margin: 0 !important;
  -moz-appearance: textfield !important;
}

.spinnerbutton {
  // transition: background 0.5s ease;
  box-sizing: border-box;
  background: #453890;
  border: 0;
  color: #fff;
  cursor: pointer;
  float: left;
  font-size: 20px;
  height: 30px;
  margin: 0;
  width: 30px;
}

.spinnerbutton:hover {
  background: lighten(#453890, 10%);
}

.spinnerbutton:focus {
  outline: 1px dashed lighten(#387e90, 20%);
  outline-offset: -5px;
}
</style>
