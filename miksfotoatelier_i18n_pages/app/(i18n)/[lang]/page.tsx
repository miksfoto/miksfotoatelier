import React from "react";
import { BookingButtons } from "@/components/BookingButtons";

const dict = {
  cs: {
    title: "Profesionální fotoateliér v Olomouci",
    subtitle: "Pronájem dvou sálů pro focení nebo konferenci.",
  },
  uk: {
    title: "Професійна фотостудія в Оломоуці",
    subtitle: "Оренда двох залів для зйомок або конференцій.",
  },
  en: {
    title: "Professional photo studio in Olomouc",
    subtitle: "Rent two halls for shooting or conferences.",
  },
} as const;

export default function Page({ params }: { params: { lang: "cs" | "uk" | "en" } }) {
  const t = dict[params.lang];
  return (
    <main className="mx-auto max-w-4xl px-5 py-16">
      <h1 className="text-4xl font-semibold mb-3">MIKS FOTOATELIÉR</h1>
      <p className="opacity-90 mb-8">{t.title} {t.subtitle}</p>
      <BookingButtons lang={params.lang} />
    </main>
  );
}