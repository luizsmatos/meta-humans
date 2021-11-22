export default interface Metahumans {
  id: number;
  name: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearance: {
    gender: string;
    race: string;
  };
  biography: {
    fullName: string;
    aliases: Array<string>;
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}
