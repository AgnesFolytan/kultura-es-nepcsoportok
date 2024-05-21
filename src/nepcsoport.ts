interface HagyományokÜnnepek {
    név: string;
    leírás: string;
  }
  export interface Kulturaks {
    kultura: Kultura[]
    total: number
    skip: number
    limit: number
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
  };
  