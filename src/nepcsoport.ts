interface HagyományokÜnnepek {
    név: string;
    leírás: string;
  }
  
  interface ÉtelGasztro {
    név: string;
    leírás: string;
  }
  
  interface RuhaViselet {
    név: string;
    leírás: string;
  }
  
  interface KulturálisJellemzők {
    név: string;
    leírás: string;
  }
  
  export interface Kultura {
    név: string;
    nyelvek: string[];
    földrajzi_elhelyezkedés: string;
    hagyományok_ünnepek: HagyományokÜnnepek[];
    étel_gasztro: ÉtelGasztro[];
    vallás_hitrendszer: string;
    ruha_viselet: RuhaViselet[];
    kulturális_jellemzők: KulturálisJellemzők[];
  }
  
  export const Kulturak: Kultura[] = [
    {
      név: "Kína",
      nyelvek: ["Kínai (Mandarin)", "Kanton"],
      földrajzi_elhelyezkedés: "Ázsia, Kelet-Ázsia",
      hagyományok_ünnepek: [
        {
          név: "Kínai Újév",
          leírás: "A kínai naptár alapján ünneplik"
        },
        {
          név: "Sárkányhajó verseny",
          leírás: "Hagyományos kínai vizes sportesemény"
        }
      ],
      étel_gasztro: [
        {
          név: "Pekingi kacsa",
          leírás: "Kínai specialitás, sült kacsa"
        },
        {
          név: "Dim sum",
          leírás: "Kínai harapnivalók kis tálban"
        }
      ],
      vallás_hitrendszer: "Taoizmus, Konfucianizmus, Buddhizmus",
      ruha_viselet: [
        {
          név: "Cheongsam",
          leírás: "Hagyományos kínai női ruha"
        },
        {
          név: "Mao-dzsek",
          leírás: "Hagyományos kínai férfi ruha"
        }
      ],
      kulturális_jellemzők: [
        {
          név: "Kungfu",
          leírás: "Kínai harcművészet"
        },
        {
          név: "Porcelán",
          leírás: "Kínában kifejlesztett finom kerámia"
        }
      ]
    },
    // ... other cultures
  ];
  