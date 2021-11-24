export default interface Metahumans {
  id: number;
  name: string;
  powerstats: {
    [key: string]: number;
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
