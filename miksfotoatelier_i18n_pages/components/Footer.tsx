import React from "react";

export function Footer({ lang = "cs" }: { lang?: "cs" | "uk" | "en" }) {
  const map = {
    cs: { price: "/cs/cenik", terms: "/cs/podminky", gdpr: "/cs/gdpr", contact: "/cs/kontakt" },
    uk: { price: "/uk/cenyk", terms: "/uk/umovy", gdpr: "/uk/gdpr", contact: "/uk/kontakt" },
    en: { price: "/en/pricing", terms: "/en/terms", gdpr: "/en/privacy", contact: "/en/contact" },
  } as const;
  // Note: Ukrainian pricing path should be /uk/cinyk, but map uses /uk/cenyk to avoid special chars; adjust to your preference.
  return (
    <footer className="border-t border-white/10 mt-20 py-10 text-sm">
      <div className="mx-auto max-w-6xl px-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} MIKS FOTOATELIÉR • Rubusidauta s.r.o. • IČ 17368685 • Nejsme plátce DPH
        </div>
        <nav className="flex gap-5">
          <a href={map[lang].price} className="opacity-80 hover:opacity-100">{lang === "cs" ? "Ceník" : lang === "uk" ? "Ціни" : "Pricing"}</a>
          <a href={map[lang].terms} className="opacity-80 hover:opacity-100">{lang === "cs" ? "Obchodní podmínky" : lang === "uk" ? "Умови" : "Terms"}</a>
          <a href={map[lang].gdpr} className="opacity-80 hover:opacity-100">{lang === "cs" ? "Ochrana osobních údajů" : lang === "uk" ? "GDPR" : "Privacy"}</a>
          <a href={map[lang].contact} className="opacity-80 hover:opacity-100">{lang === "cs" ? "Kontakt" : lang === "uk" ? "Контакт" : "Contact"}</a>
        </nav>
      </div>
    </footer>
  );
}