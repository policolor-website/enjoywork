import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dotări și facilități — BLS HOMES Cazare",
  description:
    "Camere cu 2 sau 4 paturi, baie proprie, Wi-Fi, aer condiționat, frigider, TV, mobilier nou. Bucătării comune, spălătorie, parcare, supraveghere video 24/7. Vezi toate dotările.",
};

export default function DotariLayout({ children }: { children: React.ReactNode }) {
  return children;
}
