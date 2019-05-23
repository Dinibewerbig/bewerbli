const steps = [
  {
    id: 1,
    frage:
      'Wähle den Beruf, in welchem du gerne eine Lehrstelle bekommen würdest?',
    thematik: 'Einstiegsfragen',
    shown: 'Yes',
    component: 'Form2',
    options: '[‚hello‘,’zwei’,’drei’'
  },
  {
    id: 2,
    frage:
      'Wähle die Firma, bei welcher du dich gerne um eine Lehrstelle bewerben würdest?',
    thematik: 'Einstiegsfragen',
    shown: 'Yes',
    component: 'Form2',
    options: '[‚hello‘,’zwei’,’drei’'
  },
  {
    id: 3,
    frage:
      'Von wo weisst du von der Lehrstelle? (Lena? Yousty? Verwandte/Freunde? ) ',
    thematik: 'Einstiegsfragen',
    shown: 'Yes',
    component: 'Form2',
    options: '[‚hello‘,’zwei’,’drei’'
  },
  {
    id: 4,
    frage: 'Wie bist du auf die Firma X gestossen?',
    thematik: 'Firmenbezug',
    shown: 'Yes',
    component: 'Form2',
    options: '[‚hello‘,’zwei’,’drei’'
  },
  {
    id: 5,
    frage: 'Wieso willst du gerade bei der Firma X deine Lehre machen? ',
    thematik: 'Firmenbezug',
    shown: 'Yes',
    component: 'Form2',
    options: '[‚hello‘,’zwei’,’drei’'
  },
  {
    id: 6,
    frage: 'Hat die Firma eine Homepage und welche?',
    thematik: 'Firmenbezug',
    shown: 'Yes',
    component: 'Form2',
    options: '[‚hello‘,’zwei’,’drei’'
  },
  {
    id: 7,
    frage: 'Hat dir die Homepage der Firma gefallen und wieso? ',
    thematik: 'Firmenbezug',
    shown: 'Yes',
    component: 'Form2',
    options: '[‚hello‘,’zwei’,’drei’'
  },
  {
    id: 8,
    frage:
      'Welche wichtigen Informationen konntest du aus der Website entnehmen. ',
    thematik: 'Firmenbezug',
    shown: 'Yes',
    component: 'Form2',
    options: '[‚hello‘,’zwei’,’drei’'
  },
  {
    id: 9,
    frage:
      'Was hat dir an der Beschreibung der Firma auf der Homepage besonders Eindruck gemacht?',
    thematik: 'Firmenbezug',
    shown: 'Yes',
    component: 'Form2',
    options: '[‚hello‘,’zwei’,’drei’'
  },
  {
    id: 10,
    frage: 'Hast du bereits mit der Firma telefonisch Kontakt aufgenommen? ',
    thematik: 'Firmenbezug',
    shown: 'Yes',
    component: 'Form2',
    options: '[‚hello‘,’zwei’,’drei’'
  },
  {
    id: 11,
    frage: 'was habt ihr dort besprochen ',
    thematik: 'Firmenbezug',
    shown: 'Yes',
    component: 'Form2',
    options: '[‚hello‘,’zwei’,’drei’'
  },
  {
    id: 12,
    frage: 'wie hiess die Kontaktperson ',
    thematik: 'Firmenbezug',
    shown: 'Yes',
    component: 'Form2',
    options: '[‚hello‘,’zwei’,’drei’'
  },
  {
    id: 13,
    frage: 'an welchem Datum hattest du telefonisch Kontakt?',
    thematik: 'Firmenbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 14,
    frage: 'Was weisst du alles über die Firma X?',
    thematik: 'Firmenbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 15,
    frage: 'Worauf legt die Firma X besonders Wert?',
    thematik: 'Firmenbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 16,
    frage:
      'Kennst du die Produkte oder Dienstleistungen der Firma X? Welche sind diese? ',
    thematik: 'Firmenbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 17,
    frage: 'Weisst du genaueres über die Lehrlingsausbildung der Firma X? ',
    thematik: 'Firmenbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 18,
    frage:
      'Was bietet dir die Firma X besonderes, wenn du dort die Lehre machst? ',
    thematik: 'Firmenbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 19,
    frage: 'Wie bist auf den Beruf X gestossen? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 20,
    frage: 'Wer hat dich auf diesen Beruf aufmerksam gemacht? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 21,
    frage: 'Seit wann willst du diesen Beruf erlernen? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 22,
    frage:
      'Hast du bereits Info-Nachmittage oder andere Veranstaltungen zu diesem Beruf besucht? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 23,
    frage: 'Wann und wo war das? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 24,
    frage: 'Und wo?',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 25,
    frage: 'Was hat dir am Infonachmittag besonders gefallen?',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 26,
    frage: 'Was hast du an dieser Veranstaltung vor allem gelernt. ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 27,
    frage:
      'Hast du bereits in dem Beruf X oder einem ähnlichen Beruf geschnuppert? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 28,
    frage:
      'In welchen Betrieben warst du auf dem Beruf X oder einem ähnlichen schnuppern',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 29,
    frage: 'Wann war das? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 30,
    frage: 'Und wie lange? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 31,
    frage: 'Was hat dir beim Schnuppern in dem Beruf X besonders gefallen? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 32,
    frage: 'Welche Arbeiten konntest du beim Schnuppern erledigen? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 33,
    frage: 'Welche Arbeiten haben dir besonders gefallen? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 34,
    frage: 'Wieso haben dir diese Arbeiten besonders gefallen? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 35,
    frage: 'Welche Arbeiten sind dir besonders leicht gefallen? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 36,
    frage: 'Was hast du deiner Meinung nach besonders gut gemacht?',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 37,
    frage: 'Was fiel dir leicht beim Arbeiten in diesem Beruf?',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 38,
    frage: 'Wieso sind dir diese Arbeiten besonders leicht gefallen? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 39,
    frage: 'Was fandest du sonst noch spannend beim Schnuppern? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 40,
    frage: 'Hattest du Kontakt zu den Mitarbeitern der Firma? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 41,
    frage: 'Was konntest von den Mitarbeitern lernen? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 42,
    frage: 'War der Schnupperlehrbetrieb mit dir zufrieden? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 43,
    frage:
      'In welchen Bereichen war der Schnupperlehrbetrieb mit dir zufrieden? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 44,
    frage: 'Hast du einen Schnupperbericht bekommen?',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 45,
    frage:
      'In welchen Bereichen ist dein Schnupperbericht besonders positiv ausgefallen? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 46,
    frage: 'Welche Tätigkeiten gefallen dir besonders am Beruf X',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 47,
    frage: 'Welche anderen Aspekte gefallen dir besonders am Beruf X?  ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 48,
    frage:
      'Wieso willst gerade in diesem Beruf deine Lehre machen und nicht in einem anderen?',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 49,
    frage: 'Für welche Aspekte des Berufes interessierst du dich besonders? ',
    thematik: 'Berufsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 50,
    frage: 'Wieso passt du gerade besonders in diesen Beruf?',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 51,
    frage:
      'Welche für den Beruf wichtigen Fähigkeiten und Fertigkeiten bringst du mit? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 52,
    frage: 'Wähle die Fähigkeiten aus. Ergänze… ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 53,
    frage:
      'Du bist im Alltag in der Schule oder zu Hause manchmal X (Teamfähig)? Woran sieht man das? Wie machst du das genau? Erzähle',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 54,
    frage: 'Wofür begeisterst du dich in deiner Freizeit?',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 55,
    frage:
      'Machst du zu Hause manchmal Dinge, die etwas mit deinem Beruf zu tun haben? Welche?  ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 56,
    frage: 'Welches sind deine Lieblingsfächer in der Schule? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 57,
    frage: 'Warum? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 58,
    frage:
      'Wo denkst du liegen am ehesten deine allgemeinen Stärken, die für den Beruf wichtig sind: Durchhaltevermögen, etc.  (Auswahl) ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 59,
    frage: 'Du bist stark in X. Woran sieht man das? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 60,
    frage:
      'Welche Fähigkeiten, die für den Beruf wichtig sind, bringst du sonst noch mit? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 61,
    frage:
      'Hast du in deinem Leben bereits Dinge gemacht die etwas mit dem Beruf zu tun hatten? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 62,
    frage: 'Welche Stärken schreibt dir dein Lehrer zu?',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 63,
    frage: 'Welche Stärken schreiben dir deine Eltern zu?',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 64,
    frage:
      'Welche Stärken schreiben dir deine Klassenkameraden und Freunde zu?',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 65,
    frage: 'Was mögen andere an dir?',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 66,
    frage:
      'Bist du überzeugt, dass du die nötigen Voraussetzungen für den Beruf X mitbringst? Wieso? Wieso nicht? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 67,
    frage:
      'Hast du bereits Ziele für während oder nach der Lehre? a) Möchtest du gerne neben der Lehre eine BMS besuchen?',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 68,
    frage: 'Hast du einen Multicheck oder Basic Check gemacht?  ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 69,
    frage: 'Welche Stärken hast du im Bezug zu  ? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 70,
    frage:
      'Hast du Hobbies, die in irgendeiner Form einen Bezug zu deinem Beruf haben? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 71,
    frage: 'Welche Hobbies hast du sonst noch?  ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 72,
    frage: 'Wie häufig übst du deine Hobbies aus? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 73,
    frage: 'Bist du Mitglied eines Vereins oder Clubs? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 74,
    frage: 'Wo? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 75,
    frage: 'Was unternimmst du sonst so in deiner Freizeit? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 76,
    frage:
      'Haben deine Eltern oder Verwandten eventuell ähnliche Berufe wie der Beruf X? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 77,
    frage: 'In welche Schule gehst du aktuell?',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 78,
    frage: 'Wie gefällt es dir dort? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 79,
    frage: 'In welche Klasse gehst du zur Zeit? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 80,
    frage: 'Welches Niveau besuchst du generell ?',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 81,
    frage:
      'In welchen Bereichen hast du dich in letzter Zeit positiv entwickelt? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 82,
    frage:
      'Nimm Stellung zu deinem Zeugnis? Wo bist du zufrieden, wo nicht so? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 83,
    frage:
      'Bei welchen Fächern, die für den Beruf wichtig sind, bist du mit den Noten noch nicht ganz zufrieden? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 84,
    frage: 'Welche Massnahmen hast du getroffen um dich zu verbessern? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 85,
    frage:
      'In welchen Fächern bist sowieso du stark ohne dich gross anstrengen zu müssen?',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 86,
    frage:
      'Welche Fächer machen dir Spass und bringst ein grosses Interesse mit? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 87,
    frage: 'Welche Fortschritte hast du in letzter Zeit gemacht? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 88,
    frage:
      'Besuchst du zur Zeit spezielle Zusatz/Wahlfächer oder wirst diese besuchen und welche? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 89,
    frage: 'Hast du bereits irgendwelche anderweitigen Kurse gemacht? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 90,
    frage: 'Hast du irgendwelche Diplome erworben? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 91,
    frage: 'Welche weiteren Berufe hast du sonst noch ins Auge gefasst? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 92,
    frage:
      'Gibt es sonst noch spezielle Dinge, die man über dich wissen sollte?',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  },
  {
    id: 93,
    frage: 'Was für ein Lehrling wirst du in der Lehre sein ? ',
    thematik: 'Persönlichkeitsbezug',
    shown: 'Yes',
    component: 'Form2',
    options: ''
  }
]

export default steps
