/* ===== DATA SITUS (ganti sesukamu) =====
   from = pengirim, for = penerima, letter = isi surat di halaman pembuka */
const SITE = {
  music: "lagu.mp3", /* kosong = musik ambient bawaan; atau isi nama file di folder music/, misal "lagu.mp3" */
  from: { id: "Dani", en: "Dani", ar: "داني" },
  for:  { id: "Dana", en: "Dana", ar: "دانا" },
  letter: {
    id: "Ini dongeng kecil yang aku tulis dari cerita kita berdua. Pelan-pelan aja bacanya ya.",
    en: "This is a little tale I wrote from our story. Take your time reading it.",
    ar: "هذه حكاية صغيرة كتبتها من قصتنا نحن الاثنين. اقرأيها على مهلك."
  }
};

/* ===== TAMBAH EPISODE DI SINI =====
   Salin satu blok { ... } di bawah, tempel setelah koma terakhir, lalu ganti isinya.
   - cover : gambar sampul (file di folder images/)
   - title dan text boleh teks biasa ("Halo") ATAU tiga bahasa { id: "...", en: "...", ar: "..." }
     Kalau bahasa tertentu kosong, otomatis tampil versi Indonesia (id).
   - Episode yang belum siap: tambah  soon: true  (tampil terkunci "Segera hadir")
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
      id: "Episode 2",
      en: "Episode 2",
      ar: "الحلقة 2"
    },
    cover: "kelinci-bulan.png",
    soon: true,
    pages: []
  }
];