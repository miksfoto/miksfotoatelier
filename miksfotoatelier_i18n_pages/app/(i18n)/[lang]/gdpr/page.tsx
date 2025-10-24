import React from "react";

function GDPR({ lang }: { lang: "cs" | "uk" | "en" }) {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 prose prose-invert">
      <h1>{lang === "cs" ? "Zásady zpracování osobních údajů (GDPR)" : lang === "uk" ? "Політика обробки персональних даних (GDPR)" : "Privacy Policy (GDPR)"}</h1>
      <p>
        {lang === "cs"
          ? "Správcem je Rubusidauta s.r.o., IČ 17368685, Pražákova 1008/69, 639 00 Brno, e‑mail: miksfotoatelier@gmail.com."
          : lang === "uk"
          ? "Адміністратор: Rubusidauta s.r.o., IČ 17368685, Pražákова 1008/69, 639 00 Brno, e‑mail: miksfotoatelier@gmail.com."
          : "Controller: Rubusidauta s.r.o., ID 17368685, Pražákova 1008/69, 639 00 Brno, email: miksfotoatelier@gmail.com."}
      </p>
      <h2>{lang === "cs" ? "Účely a rozsah" : lang === "uk" ? "Цілі та обсяг" : "Purpose & Scope"}</h2>
      <ul>
        <li><strong>Identifikační údaje</strong> / Ідентифікаційні дані / Identification data</li>
        <li><strong>Údaje o rezervaci a platbě</strong> / Дані про бронювання та оплату / Booking & payment data</li>
        <li><strong>Komunikace</strong> / Комунікація / Communication</li>
        <li><strong>Marketing (na souhlas)</strong> / Маркетинг (за згодою) / Marketing (consent)</li>
      </ul>
      <h2>{lang === "cs" ? "Právní základy" : lang === "uk" ? "Правові підстави" : "Legal bases"}</h2>
      <ul>
        <li>{lang === "cs" ? "Plnění smlouvy" : lang === "uk" ? "Виконання договору" : "Contract performance"}</li>
        <li>{lang === "cs" ? "Právní povinnosti (účetnictví, daně)" : lang === "uk" ? "Юридичні обов’язки (бухоблік, податки)" : "Legal obligations (accounting, tax)"}</li>
        <li>{lang === "cs" ? "Oprávněný zájem (bezpečnost, prevence podvodů)" : lang === "uk" ? "Законний інтерес (безпека, шахрайство)" : "Legitimate interest (security, fraud prevention)"}</li>
        <li>{lang === "cs" ? "Souhlas (marketing)" : lang === "uk" ? "Згода (маркетинг)" : "Consent (marketing)"}</li>
      </ul>
      <h2>{lang === "cs" ? "Doba uchování" : lang === "uk" ? "Строк зберігання" : "Retention"}</h2>
      <ul>
        <li>{lang === "cs" ? "Rezervace: 5 let" : lang === "uk" ? "Бронювання: 5 років" : "Bookings: 5 years"}</li>
        <li>{lang === "cs" ? "Faktury: 10 let" : lang === "uk" ? "Рахунки: 10 років" : "Invoices: 10 years"}</li>
      </ul>
      <h2>{lang === "cs" ? "Příjemci" : lang === "uk" ? "Одержувачі" : "Recipients"}</h2>
      <ul>
        <li>WEDOS (hosting), GoPay (platební brána), Google (e‑mail), Reenio (rezervace)</li>
      </ul>
      <h2>{lang === "cs" ? "Práva subjektu údajů" : lang === "uk" ? "Права суб’єкта даних" : "Data subject rights"}</h2>
      <ul>
        <li>{lang === "cs" ? "Přístup, oprava, výmaz, omezení, námitka, přenositelnost" : lang === "uk" ? "Доступ, виправлення, видалення, обмеження, заперечення, перенесення" : "Access, rectification, erasure, restriction, objection, portability"}</li>
        <li>{lang === "cs" ? "Stížnost: ÚOOÚ" : lang === "uk" ? "Скарга: ÚOOÚ" : "Complaint: Czech DPA (ÚOOÚ)"}</li>
      </ul>
      <p className="text-sm opacity-80">{lang === "cs" ? "Účinné od: 24. října 2025" : lang === "uk" ? "Чинно з: 24 жовтня 2025" : "Effective from: 24 Oct 2025"}</p>
    </main>
  );
}

export default function GdprRouter({ params }: { params: { lang: "cs" | "uk" | "en" } }) {
  return <GDPR lang={params.lang} />;
}