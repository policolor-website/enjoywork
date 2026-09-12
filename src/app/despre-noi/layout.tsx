import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Despre noi — Belsamen Work Cazare",
  description:
    "Belsamen Work oferă soluții de cazare pentru muncitori în Domnești, Ilfov. Complex construit în 2026, cu 80 de locuri în 20 de camere modern utilate.",
};

export default function DespreNoiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
