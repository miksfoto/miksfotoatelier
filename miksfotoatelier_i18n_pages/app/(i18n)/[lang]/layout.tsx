import React from "react";
import { Footer } from "@/components/Footer";
import { LangSwitcher } from "@/components/LangSwitcher";

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: "cs" | "uk" | "en" };
}) {
  return (
    <html lang={params.lang}>
      <body className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-5 py-6 flex items-center justify-between">
          <a href={`/${params.lang}`} className="font-bold tracking-wide">MIKS FOTOATELIÉR</a>
          <LangSwitcher current={params.lang} />
        </div>
        {children}
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}