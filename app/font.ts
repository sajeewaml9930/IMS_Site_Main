import { Fjalla_One, Karla } from "next/font/google";

export const fjalla = Fjalla_One({
  subsets: ["latin"],
  weight: ["400"],
});

export const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  fallback: ["poppins"],
});
