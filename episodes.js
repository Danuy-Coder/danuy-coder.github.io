/* ===== DATA SITUS (ganti sesukamu) =====
   from = pengirim, for = penerima, letter = isi surat di halaman pembuka */
const SITE = {
  music: "lagu.mp3",
  /* kosong = musik ambient bawaan; atau isi nama file di folder music/, misal "lagu.mp3" */
  from: { id: "Dani", en: "Dani", ar: "داني" },
  for: { id: "Dana", en: "Dana", ar: "دانا" },
  letter: {
    id: "Ini dongeng kecil yang aku tulis dari cerita kita berdua. Pelan-pelan aja bacanya ya.",
    en: "This is a little tale I wrote from our story. Take your time reading it.",
    ar: "هذه حكاية صغيرة كتبتها من قصتنا نحن الاثنين. اقرأيها على مهلك."
  }
};

/* ===== TAMBAH EPISODE DI SINI =====
   Salin satu blok { ... } di bawah, tempel setelah koma terakhir, lalu ganti isinya.
   - cover : gambar sampul (file di folder images/)
   - music : (opsional) lagu khusus episode ini, file di folder music/. Kosong = pakai SITE.music
   - title dan text boleh teks biasa ("Halo") ATAU tiga bahasa { id: "...", en: "...", ar: "..." }
     Kalau bahasa tertentu kosong, otomatis tampil versi Indonesia (id).
   - Episode yang belum siap: tambah  soon: true  (tampil terkunci "Segera hadir")

   SUASANA & SUARA (opsional, bisa di tingkat episode atau per halaman):
   - scene : "night" (bawaan) | "morning" | "rain" | "wind"
   - sound : "birds" | "rain" | "wind" | "water" | "crickets", boleh digabung: ["rain", "wind"]
             atau file sendiri di folder sounds/: "hujan.mp3". sound: "" = hening di halaman itu.
*/
const EPISODES = [
  {
    title: {
      id: "Kelinci yang Tidak Sendirian",
      en: "The Rabbit Who Was Not Alone",
      ar: "الأرنب الذي لم يكن وحيدًا"
    },
    cover: "kelinci-bulan.png",

    pages: [
      {
        img: "kelinci-bulan.png",
        text: {
          id: "Malam itu, Dana si Kelinci masih terjaga. Perutnya terasa tidak nyaman, dan malam terasa lebih panjang dari biasanya. Ia memandang bulan dari balik jendela dan berbisik, “Andai malam ini terasa sedikit lebih tenang…”",
          en: "That night, Dana the Rabbit was still awake. Her stomach felt uncomfortable, and the night seemed longer than usual. She looked at the moon through the window and whispered, “I wish tonight could feel a little more peaceful…”",
          ar: "في تلك الليلة، كانت دانا الأرنب لا تزال مستيقظة. كانت تشعر بعدم الراحة في بطنها، وبدا الليل أطول من المعتاد. نظرت إلى القمر من خلف النافذة وهمست: «ليت هذه الليلة تكون أكثر هدوءًا قليلًا…»"
        }
      },

      {
        img: "serigala-melolong.png",
        text: {
          id: "Jauh dari sana, Dani si Serigala juga sedang menatap bulan. Ia tidak tahu bagaimana cara menghilangkan rasa sakit Dana, tetapi ia tahu satu hal: ia tidak ingin Dana merasa sendirian.",
          en: "Far away, Dani the Wolf was looking at the same moon. He didn't know how to take Dana's pain away, but he knew one thing: he didn't want her to feel alone.",
          ar: "وفي مكان بعيد، كان داني الذئب ينظر إلى القمر نفسه. لم يكن يعرف كيف يخفف ألم دانا، لكنه كان يعرف شيئًا واحدًا: لم يكن يريدها أن تشعر بأنها وحيدة."
        }
      },

      {
        img: "serigala-nangis.png",
        text: {
          id: "Dani memeluk boneka kelinci kecil di dadanya. Matanya berkaca-kaca. “Kalau aku bisa, aku ingin duduk di sampingmu malam ini,” bisiknya. “Tapi kalau aku belum bisa, biarkan bulan yang menemaniku menjagamu.”",
          en: "Dani hugged a little rabbit doll against his chest. His eyes filled with tears. “If I could, I would sit beside you tonight,” he whispered. “But if I can't yet, let the moon keep me company while I watch over you.”",
          ar: "ضمّ داني دمية الأرنب الصغيرة إلى صدره، وامتلأت عيناه بالدموع. وهمس: «لو كنت أستطيع، لجلست بجانبك هذه الليلة. لكن إن لم أستطع بعد، فليكن القمر رفيقي وأنا أطمئن عليك.»"
        }
      },

      {
        img: "pelukan.png",
        text: {
          id: "Malam semakin sunyi. Dalam mimpinya, Dana melihat Dani datang tanpa suara. Ia hanya tersenyum lalu memeluknya dengan lembut. “Kamu nggak perlu kuat terus,” kata Dani. “Istirahat saja. Aku di sini.”",
          en: "The night grew quieter. In her dream, Dana saw Dani arrive without a sound. He simply smiled and gently hugged her. “You don't have to be strong all the time,” Dani said. “Just rest. I'm here.”",
          ar: "ازداد الليل هدوءًا. وفي حلمها، رأت دانا داني يأتي دون صوت. ابتسم فقط وعانقها بلطف. قال داني: «لا يجب أن تكوني قوية طوال الوقت. فقط ارتاحي، أنا هنا.»"
        }
      },

      {
        img: "berdua-bulan.png",
        text: {
          id: "Mereka kemudian duduk berdampingan di bawah bulan. Dana memejamkan mata, menarik napas perlahan, dan membiarkan tubuhnya beristirahat. Dani tetap duduk di sampingnya. “Tidurlah, Dana. Kamu tidak harus memikirkan apa pun malam ini. Biarkan malam berlalu dengan tenang. Besok adalah urusan besok.” Bulan bersinar lembut di atas mereka, seolah berkata bahwa malam yang panjang pun pada akhirnya akan berakhir. Dan untuk malam itu, Dana tidak sendirian. Tamat.",
          en: "They then sat together beneath the moon. Dana closed her eyes, took a slow breath, and let her body rest. Dani stayed beside her. “Sleep, Dana. You don't have to think about anything tonight. Let the night pass peacefully. Tomorrow can wait until tomorrow.” The moon shone softly above them, as if reminding them that even the longest night would eventually end. And that night, Dana was not alone. The End.",
          ar: "ثم جلسا جنبًا إلى جنب تحت ضوء القمر. أغلقت دانا عينيها، وأخذت نفسًا ببطء، وتركت جسدها يرتاح. وبقي داني بجانبها. قال: «نامي يا دانا. لا داعي لأن تفكري في أي شيء الليلة. دعي الليل يمر بهدوء. وغدًا له شأنه عندما يأتي.» أضاء القمر فوقهما بنور لطيف، وكأنه يذكّرهما بأن حتى أطول ليلة ستنتهي في النهاية. وفي تلك الليلة، لم تكن دانا وحيدة. النهاية."
        }
      }
    ]
  },

  {
    title: {
      id: "Malam yang Hangat",
      en: "A Warm Night",
      ar: "ليلة دافئة"
    },
    cover: "berdua-bulan.png",
    music: "do.mp3",

    pages: [
      {
        img: "berdua-bulan.png",
        text: {
          id: "Malam ini bulan bersinar penuh. Dani si Serigala dan Dana si Kelinci duduk berdampingan, tanpa perlu bicara apa-apa.",
          en: "Tonight the moon was full. Dani the Wolf and Dana the Rabbit sat side by side, with no need to say anything.",
          ar: "في هذه الليلة كان القمر بدرًا. جلس داني الذئب ودانا الأرنب جنبًا إلى جنب، دون حاجة إلى قول أي شيء."
        }
      },

      {
        img: "kelinci-bulan.png",
        text: {
          id: "Dana menatap bulan dan berbisik, “Kenapa ya, kalau lagi sama kamu, malam terasa lebih pendek?”",
          en: "Dana looked at the moon and whispered, “Why does the night feel shorter when I'm with you?”",
          ar: "نظرت دانا إلى القمر وهمست: «لماذا يبدو الليل أقصر عندما أكون معك؟»"
        }
      },

      {
        img: "serigala-melolong.png",
        text: {
          id: "Dani ingin menjawab dengan sesuatu yang keren, jadi dia melolong ke arah bulan. Suaranya sedikit bergetar, dan Dana pun tertawa kecil.",
          en: "Dani wanted to answer with something cool, so he howled at the moon. His voice wobbled a little, and Dana giggled.",
          ar: "أراد داني أن يجيب بشيء رائع، فعوى نحو القمر. ارتجف صوته قليلًا، فضحكت دانا ضحكة صغيرة."
        }
      },

      {
        img: "pelukan.png",
        text: {
          id: "“Jangan ketawa,” kata Dani sambil pura-pura galak. Dana malah memeluknya erat. “Aku suka suaramu, kok.”",
          en: "“Don't laugh,” Dani said, pretending to be fierce. Dana only hugged him tighter. “I like your voice, really.”",
          ar: "«لا تضحكي»، قال داني متظاهرًا بالشراسة. لكن دانا عانقته بقوة أكبر. «أنا أحب صوتك، حقًا.»"
        }
      },

      {
        img: "berdua-bulan.png",
        text: {
          id: "Mereka pun diam lagi, menikmati malam yang hangat itu. Karena kadang, duduk bersama sudah lebih dari cukup. Tamat.",
          en: "So they fell quiet again, enjoying the warm night. Because sometimes, simply sitting together is more than enough. The End.",
          ar: "ثم صمتا من جديد، يستمتعان بتلك الليلة الدافئة. لأنه أحيانًا، الجلوس معًا أكثر من كافٍ. النهاية."
        }
      }
    ]
  },

  /* ===== EPISODE TES: contoh suasana (scene) dan suara (sound) berganti tiap halaman ===== */
  {
    title: {
      id: "Satu Hari Bersama",
      en: "A Day Together",
      ar: "يوم معًا"
    },
    cover: "pelukan.png",

    pages: [
      {
        img: "pelukan.png",
        scene: "morning",
        sound: "birds",
        text: {
          id: "Pagi itu burung-burung berkicau di luar jendela. Dani dan Dana bangun pelan-pelan, masih mengantuk, tapi sudah tersenyum.",
          en: "That morning, birds were singing outside the window. Dani and Dana woke up slowly, still sleepy, but already smiling.",
          ar: "في ذلك الصباح كانت العصافير تغرّد خارج النافذة. استيقظ داني ودانا ببطء، ما زالا ناعسين لكنهما يبتسمان."
        }
      },

      {
        img: "pelukan.png",
        scene: "wind",
        sound: "wind",
        text: {
          id: "Siang harinya angin berembus kencang. Dana merapatkan diri ke Dani. “Dingin ya,” bisiknya. Dani diam-diam menutupinya dengan ekornya.",
          en: "By noon, the wind blew hard. Dana moved closer to Dani. “It's cold,” she whispered. Dani quietly covered her with his tail.",
          ar: "عند الظهيرة هبّت رياح قوية. اقتربت دانا من داني. «الجو بارد»، همست. فغطّاها داني بهدوء بذيله."
        }
      },

      {
        img: "pelukan.png",
        scene: "rain",
        sound: ["rain", "wind"],
        text: {
          id: "Lalu hujan turun. Mereka berteduh berdua dan mendengarkan tetesnya di atas atap. Tidak ada yang bicara, dan itu terasa nyaman.",
          en: "Then the rain came. They took shelter together and listened to the drops on the roof. Nobody spoke, and it felt comfortable.",
          ar: "ثم هطل المطر. احتميا معًا واستمعا إلى القطرات فوق السقف. لم يتكلم أحد، وكان ذلك مريحًا."
        }
      },

      {
        img: "kelinci-bulan.png",
        scene: "night",
        sound: "crickets",
        text: {
          id: "Ketika hujan reda, malam pun datang. Jangkrik mulai bernyanyi, dan bulan muncul perlahan dari balik awan.",
          en: "When the rain stopped, night came. The crickets began to sing, and the moon slowly appeared from behind the clouds.",
          ar: "عندما توقف المطر، حلّ الليل. بدأت صراصير الليل بالغناء، وظهر القمر ببطء من خلف الغيوم."
        }
      },

      {
        img: "berdua-bulan.png",
        scene: "night",
        sound: "crickets",
        text: {
          id: "Mereka duduk berdampingan menatap bulan. Hari yang panjang itu pun berakhir dengan tenang. Tamat.",
          en: "They sat side by side, gazing at the moon. And so the long day ended peacefully. The End.",
          ar: "جلسا جنبًا إلى جنب يتأملان القمر. وهكذا انتهى ذلك اليوم الطويل بسلام. النهاية."
        }
      }
    ]
  },

  /* ===== EPISODE 4: Kabar yang Ditunggu =====
     Gambar baru: menunggu-pagi.png dan menunggu-siang.png (halaman 1-2).
     Halaman 3-6 sementara pakai gambar lama, ganti img-nya kalau gambar barunya sudah jadi. */
  {
    title: {
      id: "Kabar yang Ditunggu",
      en: "The News He Waited For",
      ar: "الخبر الذي انتظره"
    },
    cover: "menunggu-pagi.png",

    pages: [
      {
        img: "menunggu-pagi.png",
        scene: "morning",
        sound: "birds",
        text: {
          id: "Sejak pagi, Serigala Kecil terus menunggu kabar dari Kelinci. Ia melihat jam, lalu melihat ponselnya lagi. Tapi tidak ada pesan.",
          en: "Since dawn, Little Wolf kept waiting for news from Bunny. He looked at the clock, then at his phone again. But there was no message.",
          ar: "منذ الصباح، ظلّ الذئب الصغير ينتظر خبرًا من الأرنب. نظر إلى الساعة، ثم إلى هاتفه مرة أخرى. لكن لم تصل أي رسالة."
        }
      },

      {
        img: "menunggu-siang.png",
        scene: "wind",
        sound: "wind",
        text: {
          id: "Matahari terus bergeser dan jam tak berhenti berjalan. Serigala masih menunggu. Kekhawatiran perlahan memenuhi pikirannya. “Kenapa dia belum memberi kabar? Apa sesuatu terjadi padanya?”",
          en: "The sun kept moving and the clock never stopped. Wolf was still waiting. Worry slowly filled his mind. “Why hasn't she told me anything? Did something happen to her?”",
          ar: "واصلت الشمس رحلتها ولم تتوقف الساعة عن الدوران. كان الذئب لا يزال ينتظر، والقلق يملأ رأسه شيئًا فشيئًا. «لماذا لم تُخبرني بأي شيء؟ هل حدث لها مكروه؟»"
        }
      },

      {
        img: "serigala-melolong.png",
        scene: "night",
        sound: "wind",
        text: {
          id: "Malam datang, tetapi Kelinci belum juga muncul. Pikiran Serigala semakin buruk. Ia merasa sendirian, takut, dan kehilangan kendali atas dirinya sendiri. Untuk sesaat, ia merasa tidak sanggup menghadapi rasa takut itu lagi.",
          en: "Night fell, but Bunny still hadn't appeared. Wolf's thoughts grew darker. He felt alone, afraid, and out of control. For a moment, he felt he couldn't face that fear again.",
          ar: "جاء الليل ولم يظهر الأرنب بعد. ازدادت أفكار الذئب سوءًا، وشعر بالوحدة والخوف وفقدان السيطرة على نفسه. وللحظة، شعر أنه لم يعد يحتمل هذا الخوف."
        }
      },

      {
        img: "serigala-nangis.png",
        scene: "night",
        sound: "",
        text: {
          id: "Tiba-tiba terdengar suara pelan dari belakangnya. “Serigala...” Ia membeku. Perlahan ia menoleh.",
          en: "Suddenly, a soft voice came from behind him. “Wolf...” He froze. Slowly, he turned around.",
          ar: "فجأة، سُمع صوت هادئ من خلفه. «ذئب...» تجمّد في مكانه، ثم التفت ببطء."
        }
      },

      {
        img: "kelinci-bulan.png",
        scene: "night",
        sound: "crickets",
        text: {
          id: "Kelinci berdiri di sana. Tubuhnya penuh luka dan terlihat sangat lelah, tetapi ia masih berusaha tersenyum. “Maaf aku membuatmu menunggu...”",
          en: "Bunny stood there, covered in wounds and utterly exhausted, yet still trying to smile. “I'm sorry I made you wait...”",
          ar: "وقفت الأرنب هناك، جسدها مليء بالجروح ومنهك تمامًا، لكنها ما زالت تحاول أن تبتسم. «آسفة لأنني جعلتك تنتظر...»"
        }
      },

      {
        img: "pelukan.png",
        scene: "night",
        sound: "crickets",
        text: {
          id: "Serigala langsung berlari dan memeluknya erat. Air matanya jatuh. “Aku kira aku kehilanganmu...” Kelinci memeluknya kembali. “Aku masih di sini.” Malam itu Serigala akhirnya mengerti—rasa takut bisa membuat pikiran mengatakan hal-hal yang tidak benar. Dan ketika seseorang yang kita sayangi belum memberi kabar, kita tidak harus menghadapi ketakutan itu sendirian. 🐺🤍🐰 Tamat.",
          en: "Wolf ran to her and hugged her tightly. Tears fell. “I thought I'd lost you...” Bunny hugged him back. “I'm still here.” That night, Wolf finally understood: fear can make the mind say things that aren't true. And when someone we love hasn't been in touch, we don't have to face that fear alone. 🐺🤍🐰 The End.",
          ar: "ركض الذئب نحوها وعانقها بقوة، وسقطت دموعه. «ظننتُ أنني فقدتكِ...» عانقته الأرنب بدورها. «ما زلتُ هنا.» في تلك الليلة فهم الذئب أخيرًا: الخوف قد يجعل العقل يقول أشياء غير صحيحة. وحين يتأخر من نحبّ في الاطمئنان، لسنا مضطرين لمواجهة الخوف وحدنا. 🐺🤍🐰 النهاية."
        }
      }
    ]
  },

  {
    title: {
      id: "Episode 5",
      en: "Episode 5",
      ar: "الحلقة 5"
    },
    cover: "kelinci-bulan.png",
    soon: true,
    pages: []
  }
];
