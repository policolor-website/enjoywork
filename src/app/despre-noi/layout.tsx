import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre noi — Enjoy Residence Cazare",
  description:
    "Enjoy Residence oferă soluții de cazare pentru muncitori în Domnești, Ilfov. Complex construit în 2026, cu 80 de locuri în 40 de camere modern utilate.",
};

export default function DespreNoiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
