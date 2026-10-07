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

  /* ===== EPISODE 5: Biarkan Dia Bahagia =====
     Halaman 6 sudah pakai gambar baru (pergi-perlahan.png). Halaman 1-5 sementara pakai gambar lama, ganti img-nya kalau gambar barunya sudah jadi. */
  {
    title: {
      id: "Biarkan Dia Bahagia",
      en: "Let Her Be Happy",
      ar: "ليكن سعيدةً"
    },
    cover: "serigala-melolong.png",

    pages: [
      {
        img: "serigala-melolong.png",
        scene: "night",
        sound: "crickets",
        text: {
          id: "Malam itu, Serigala Kecil duduk sendirian di bawah bulan. Ia tahu Kelinci kesayangannya telah menemukan seekor kelinci jantan yang membuatnya bahagia.",
          en: "That night, Little Wolf sat alone beneath the moon. He knew his beloved Bunny had found a male rabbit who made her happy.",
          ar: "في تلك الليلة، جلس الذئب الصغير وحيدًا تحت القمر. كان يعلم أن أرنبته الغالية وجدت أرنبًا يجعلها سعيدة."
        }
      },

      {
        img: "kelinci-bulan.png",
        scene: "night",
        sound: "wind",
        text: {
          id: "Serigala menatap mereka dari kejauhan. Ia tahu mereka berasal dari habitat yang berbeda. Mungkin sejak awal, ia dan Kelinci memang tidak ditakdirkan untuk berjalan di jalan yang sama.",
          en: "Wolf watched them from far away. He knew they came from different habitats. Maybe from the very beginning, he and Bunny were never meant to walk the same path.",
          ar: "نظر الذئب إليهما من بعيد. كان يعلم أنهما من موطنين مختلفين. وربما منذ البداية، لم يكن مقدّرًا له ولها أن يسيرا في الطريق نفسه."
        }
      },

      {
        img: "serigala-nangis.png",
        scene: "night",
        sound: "",
        text: {
          id: "Hati Serigala terasa berat. Ia ingin mendekat, tetapi ia tahu bahwa memaksakan diri hanya akan membuat Kelinci semakin sulit bahagia. Jadi ia hanya tersenyum kecil dan berkata pada dirinya sendiri, “Kalau dia bahagia... mungkin itu sudah cukup.”",
          en: "Wolf's heart felt heavy. He wanted to come closer, but he knew that forcing himself would only make it harder for Bunny to be happy. So he just smiled a little and told himself, “If she's happy... maybe that's enough.”",
          ar: "كان قلب الذئب ثقيلًا. أراد أن يقترب، لكنه عرف أن إجبار نفسه لن يزيد سعادتها إلا صعوبة. فاكتفى بابتسامة صغيرة وقال لنفسه: «إن كانت سعيدة... فربما يكفي هذا.»"
        }
      },

      {
        img: "kelinci-bulan.png",
        scene: "night",
        sound: "crickets",
        text: {
          id: "Serigala tetap memperhatikan Kelinci dari jauh. Melihat Kelinci tersenyum bersama kelinci jantan itu membuat hatinya sakit, tetapi ia tidak ingin merusak kebahagiaan mereka.",
          en: "Wolf kept watching Bunny from afar. Seeing her smile with that male rabbit made his heart ache, but he didn't want to ruin their happiness.",
          ar: "ظلّ الذئب يراقب الأرنب من بعيد. رؤيتها تبتسم مع الأرنب الآخر كانت توجع قلبه، لكنه لم يرد أن يفسد سعادتهما."
        }
      },

      {
        img: "serigala-melolong.png",
        scene: "night",
        sound: "wind",
        text: {
          id: "Serigala menatap bulan dan berbisik, “Aku mungkin tidak bisa menjadi orang yang berjalan di sampingmu...” “Tapi aku tetap berharap kamu selalu bahagia, Little Bunny.”",
          en: "Wolf looked at the moon and whispered, “I may not be the one who walks beside you...” “But I still hope you'll always be happy, Little Bunny.”",
          ar: "نظر الذئب إلى القمر وهمس: «ربما لا أستطيع أن أكون من يسير بجانبكِ...» «لكنني ما زلت أتمنى أن تكوني سعيدة دائمًا، أيتها الأرنبة الصغيرة.»"
        }
      },

      {
        img: "pergi-perlahan.png",
        scene: "rain",
        sound: "rain",
        text: {
          id: "Serigala akhirnya berjalan menjauh, membawa rasa cintanya bersamanya. Ia tidak berhenti mencintai Kelinci malam itu. Ia hanya belajar bahwa terkadang, mencintai seseorang berarti membiarkannya bahagia, meskipun kebahagiaan itu bukan bersamamu. Di bawah bulan yang sama, Serigala tersenyum tipis. “Be happy, Little Bunny.” 🌙🐺🤍🐰 Tamat.",
          en: "Wolf finally walked away, carrying his love with him. He didn't stop loving Bunny that night. He only learned that sometimes, loving someone means letting them be happy, even if that happiness isn't with you. Beneath the same moon, Wolf smiled faintly. “Be happy, Little Bunny.” 🌙🐺🤍🐰 The End.",
          ar: "ابتعد الذئب أخيرًا ببطء، حاملًا حبّه معه. لم يتوقف عن حبها تلك الليلة، بل تعلّم فقط أنه أحيانًا يعني الحب أن تترك من تحب يعيش سعادته، حتى لو لم تكن معك. وتحت القمر نفسه، ابتسم الذئب ابتسامة خفيفة. «كوني سعيدة، أيتها الأرنبة الصغيرة.» 🌙🐺🤍🐰 النهاية."
        }
      }
    ]
  },

  /* ===== EPISODE 6: Bintang yang Dicari =====
     Belum ada gambar baru, jadi sementara pakai gambar lama. Ganti img-nya kalau gambar barunya sudah jadi. */
  {
    title: {
      id: "Bintang yang Dicari",
      en: "The Star They Waited For",
      ar: "النجمة التي انتظراها"
    },
    cover: "berdua-bulan.png",

    pages: [
      {
        img: "kelinci-bulan.png",
        scene: "night",
        sound: "crickets",
        text: {
          id: "Malam itu langit cerah sekali. Dana si Kelinci menengadah dan berkata, “Katanya kalau kita lihat bintang jatuh, permintaan kita bisa jadi nyata.”",
          en: "That night the sky was beautifully clear. Dana the Rabbit looked up and said, “They say if you see a shooting star, your wish can come true.”",
          ar: "كانت السماء صافية جدًا في تلك الليلة. رفعت دانا الأرنب رأسها وقالت: «يُقال إن من يرى نجمة تسقط، تتحقق أمنيته.»"
        }
      },

      {
        img: "berdua-bulan.png",
        scene: "night",
        sound: "crickets",
        text: {
          id: "Dani si Serigala langsung duduk di sampingnya. “Kalau begitu, kita tunggu sampai ada yang jatuh.” Mereka berbagi selimut kecil dan mulai menghitung bintang satu per satu.",
          en: "Dani the Wolf sat right down beside her. “Then let's wait until one falls.” They shared a small blanket and began counting the stars, one by one.",
          ar: "جلس داني الذئب بجانبها فورًا. «إذًا ننتظر حتى تسقط واحدة.» تشاركا بطانية صغيرة وبدآ يعدّان النجوم واحدة تلو الأخرى."
        }
      },

      {
        img: "serigala-melolong.png",
        scene: "night",
        sound: "wind",
        text: {
          id: "Satu jam berlalu dan belum ada bintang yang jatuh. Dani mulai tidak sabar, jadi ia melolong ke langit, “Hei bintang, ada yang mau minta permintaan di sini!” Dana tertawa sampai hampir terguling.",
          en: "An hour passed and not a single star had fallen. Dani grew impatient, so he howled at the sky, “Hey, stars! Someone down here wants to make a wish!” Dana laughed so hard she almost tipped over.",
          ar: "مرّت ساعة ولم تسقط أي نجمة. نفد صبر داني، فعوى نحو السماء: «يا نجوم، هنا من يريد أن يتمنى أمنية!» فضحكت دانا حتى كادت تتدحرج على الأرض."
        }
      },

      {
        img: "berdua-bulan.png",
        scene: "night",
        sound: "",
        text: {
          id: "Tepat saat Dana masih tertawa, sebuah bintang meluncur melintasi langit. “Dani, lihat!” Mereka buru-buru memejamkan mata dan membuat permintaan.",
          en: "Just as Dana was still giggling, a star streaked across the sky. “Dani, look!” They quickly shut their eyes and made a wish.",
          ar: "وبينما كانت دانا لا تزال تضحك، انطلقت نجمة عبر السماء. «داني، انظر!» أغمضا عينيهما بسرعة وتمنّيا أمنية."
        }
      },

      {
        img: "pelukan.png",
        scene: "night",
        sound: "crickets",
        text: {
          id: "“Kamu minta apa?” tanya Dana. “Rahasia,” jawab Dani sambil tersenyum. “Kalau dikasih tahu, nanti nggak jadi.” Dana memeluknya. “Kalau aku, permintaanku sudah terkabul malam ini.” Bintang itu sudah lama menghilang, tapi mereka tetap duduk berdua, hangat di bawah langit yang sama. Tamat.",
          en: "“What did you wish for?” Dana asked. “It's a secret,” Dani said with a smile. “If I tell you, it won't come true.” Dana hugged him. “As for me, my wish already came true tonight.” The star had long since vanished, but they stayed side by side, warm beneath the same sky. The End.",
          ar: "«ماذا تمنّيت؟» سألت دانا. «سرّ»، أجاب داني مبتسمًا. «لو أخبرتكِ فلن تتحقق.» عانقته دانا. «أما أنا، فقد تحققت أمنيتي هذه الليلة.» اختفت النجمة منذ زمن، لكنهما بقيا جالسَين معًا، دافئَين تحت السماء نفسها. النهاية."
        }
      }
    ]
  },

  /* ===== EPISODE 7: Batu yang Semakin Berat =====
     Belum ada gambar baru, jadi sementara pakai gambar lama. Ganti img-nya kalau gambar barunya sudah jadi. */
  {
    title: {
      id: "Batu yang Semakin Berat",
      en: "The Stone That Kept Growing",
      ar: "الحجر الذي ازداد ثقلًا"
    },
    cover: "pelukan.png",
    music: "homesick.mp3",

    pages: [
      {
        img: "kelinci-bulan.png",
        scene: "morning",
        sound: "birds",
        text: {
          id: "Dana si Kelinci dikenal pintar dan mandiri. Ia jarang meminta bantuan, dan hampir selalu yakin pendapatnya yang paling benar. Ia bangga dengan itu, dan memang banyak hal yang bisa ia banggakan.",
          en: "Dana the Rabbit was known for being clever and independent. She rarely asked for help, and she was almost always sure her opinion was the right one. She was proud of that, and she truly had a lot to be proud of.",
          ar: "اشتُهرت دانا الأرنب بذكائها واستقلالها. نادرًا ما كانت تطلب المساعدة، وكانت شبه متأكدة دائمًا أن رأيها هو الصواب. كانت فخورة بذلك، ولديها فعلًا أسباب كثيرة للفخر."
        }
      },

      {
        img: "serigala-melolong.png",
        scene: "morning",
        sound: "birds",
        text: {
          id: "Suatu pagi, Dani si Serigala mengajaknya ke sungai. “Lewat jalan setapak di sebelah kiri aja yuk, katanya lebih cepat,” usul Dani. “Nggak usah,” jawab Dana. “Aku tahu jalan yang lebih bagus.”",
          en: "One morning, Dani the Wolf invited her to the river. “Let's take the little path on the left, they say it's faster,” Dani suggested. “No need,” Dana replied. “I know a better way.”",
          ar: "في صباح أحد الأيام، دعاها داني الذئب إلى النهر. «لنسلك الممر الصغير على اليسار، يقولون إنه أسرع»، اقترح داني. «لا داعي»، أجابت دانا. «أعرف طريقًا أفضل.»"
        }
      },

      {
        img: "menunggu-siang.png",
        scene: "wind",
        sound: "wind",
        text: {
          id: "Dani mencoba menjelaskan, tetapi Dana tidak mau mendengar. Saat itu juga, sebuah batu kecil muncul di punggung Dana. Namanya Batu Ego. Dana tidak menyadarinya.",
          en: "Dani tried to explain, but Dana didn't want to listen. In that very moment, a small stone appeared on Dana's back. It was called the Ego Stone. Dana didn't notice it.",
          ar: "حاول داني أن يشرح، لكن دانا لم ترد أن تسمع. وفي تلك اللحظة، ظهر حجر صغير على ظهرها. حجر الأنا. ولم تنتبه دانا له."
        }
      },

      {
        img: "kelinci-bulan.png",
        scene: "wind",
        sound: "wind",
        text: {
          id: "Akhirnya Dani mengalah dan mengikuti Dana. Jalan pilihan Dana ternyata berliku dan penuh semak. Semakin jauh mereka berjalan, semakin besar batu di punggung Dana, tetapi Dana tetap melangkah dengan dagu terangkat.",
          en: "In the end, Dani gave in and followed Dana. The path she chose turned out to be winding and full of thorny bushes. The farther they walked, the bigger the stone on Dana's back grew, yet she kept walking with her chin held high.",
          ar: "وفي النهاية تراجع داني وتبع دانا. لكن الطريق الذي اختارته كان متعرجًا ومليئًا بالشجيرات. وكلما ابتعدا، كبر الحجر على ظهرها، ومع ذلك واصلت السير رافعةً رأسها."
        }
      },

      {
        img: "menunggu-siang.png",
        scene: "wind",
        sound: "",
        text: {
          id: "“Mau istirahat sebentar?” tanya Dani. “Nggak capek kok,” jawab Dana, padahal napasnya sudah terengah-engah. “Aku bawain ya?” “Nggak usah! Aku bisa sendiri.” Batu itu pun bertambah besar.",
          en: "“Want to rest for a bit?” Dani asked. “I'm not tired,” Dana answered, though she was already panting. “Shall I carry that for you?” “No need! I can do it myself.” And the stone grew even bigger.",
          ar: "«هل تريدين أن نرتاح قليلًا؟» سأل داني. «لست متعبة»، أجابت دانا، رغم أن أنفاسها كانت متقطعة. «هل أحمل عنكِ؟» «لا داعي! أستطيع وحدي.» فازداد الحجر حجمًا."
        }
      },

      {
        img: "kelinci-bulan.png",
        scene: "rain",
        sound: ["rain", "wind"],
        text: {
          id: "Tiba-tiba hujan turun dan tanah menjadi licin. Batu di punggung Dana terlalu berat. Ia terpeleset dan terduduk di tanah, dengan kaki lecet dan mata yang mulai berkaca-kaca. Ia malu, dan bingung harus berkata apa.",
          en: "Suddenly the rain began and the ground turned slippery. The stone on Dana's back was too heavy. She slipped and sat down hard on the ground, her foot scraped and her eyes beginning to glisten. She felt embarrassed and didn't know what to say.",
          ar: "فجأة هطل المطر وصارت الأرض زلقة. كان الحجر على ظهرها أثقل من أن تحمله. انزلقت وجلست على الأرض، وقدمها مخدوشة وعيناها تغرورقان بالدموع. شعرت بالخجل ولم تعرف ماذا تقول."
        }
      },

      {
        img: "pelukan.png",
        scene: "rain",
        sound: "rain",
        text: {
          id: "Dani tidak berkata, “Tuh kan, aku bilang juga apa.” Ia hanya duduk di samping Dana dan meneduhinya dengan ekornya. “Berat ya?” tanyanya pelan. “Nggak... aku kuat,” bisik Dana. “Kuat itu bagus,” kata Dani. “Tapi capek juga boleh. Aku juga sering ngotot kok, makanya aku ngerti.”",
          en: "Dani didn't say, “See? I told you so.” He simply sat beside Dana and sheltered her with his tail. “Heavy, isn't it?” he asked softly. “No... I'm strong,” Dana whispered. “Being strong is good,” said Dani. “But it's okay to be tired, too. I can be stubborn too, so I understand.”",
          ar: "لم يقل داني «ألم أقل لكِ؟». جلس بجانبها وظلّلها بذيله. «ثقيل، أليس كذلك؟» سأل بهدوء. «لا... أنا قوية»، همست دانا. «القوة جميلة»، قال داني. «لكن لا بأس أن تتعبي. وأنا أيضًا أعاند كثيرًا، لذلك أفهمكِ.»"
        }
      },

      {
        img: "pelukan.png",
        scene: "morning",
        sound: "",
        text: {
          id: "Dana menarik napas panjang. “Dani... mungkin jalan yang kamu usulkan tadi memang lebih baik. Maaf ya, aku nggak mau dengerin kamu.” Saat itu juga, batu di punggungnya mengecil menjadi kerikil. Dana terkejut. Ternyata minta maaf tidak membuatnya kecil. Malah terasa ringan.",
          en: "Dana took a long breath. “Dani... maybe the path you suggested was better after all. I'm sorry I wouldn't listen to you.” In that very moment, the stone on her back shrank into a pebble. Dana was stunned. Apologizing hadn't made her smaller. It made her lighter.",
          ar: "أخذت دانا نفسًا عميقًا. «داني... ربما كان الطريق الذي اقترحته أفضل. آسفة لأنني لم أستمع إليك.» وفي اللحظة نفسها، تقلّص الحجر على ظهرها حتى صار حصاة صغيرة. تفاجأت دانا؛ فالاعتذار لم يجعلها أصغر، بل جعلها أخف."
        }
      },

      {
        img: "berdua-bulan.png",
        scene: "morning",
        sound: ["birds", "water"],
        text: {
          id: "Mereka tertawa, lalu berjalan lewat jalan Dani, dan menemukan padang bunga di tepi sungai yang tidak akan Dana lihat kalau ia terus ngotot. Dana menyimpan kerikil kecil itu di sakunya sebagai pengingat. Ego yang terlalu tinggi membuat hidup terasa lebih berat. Mau mengalah, minta maaf, dan mendengarkan bukan tanda lemah. Itu cara melepas beban yang memang tidak perlu dibawa. Tamat.",
          en: "They laughed, then took Dani's path, and found a field of flowers by the river that Dana would never have seen if she'd kept insisting. Dana tucked the little pebble into her pocket as a reminder. An ego that grows too high makes life heavier. Giving in, apologizing, and listening aren't signs of weakness. They are how we put down burdens we never needed to carry. The End.",
          ar: "ضحكا معًا وسارا في طريق داني، فوجدا حقلًا من الزهور على ضفة النهر لم تكن دانا لتراه لو واصلت العناد. وضعت دانا الحصاة الصغيرة في جيبها تذكيرًا. فالأنا حين تعلو كثيرًا تجعل الحياة أثقل. والتراجع والاعتذار والإصغاء ليست ضعفًا، بل هي الطريقة التي نضع بها أحمالًا لم نكن بحاجة إلى حملها. النهاية."
        }
      }
    ]
  },

  {
    title: {
      id: "Episode 8",
      en: "Episode 8",
      ar: "الحلقة 8"
    },
    cover: "kelinci-bulan.png",
    soon: true,
    pages: []
  }
];
