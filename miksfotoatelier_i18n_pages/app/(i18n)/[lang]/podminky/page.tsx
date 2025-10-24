import React from "react";

function VOP({ lang }: { lang: "cs" | "uk" | "en" }) {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 prose prose-invert">
      <h1>{lang === "cs" ? "Všeobecné obchodní podmínky" : lang === "uk" ? "Загальні комерційні умови" : "Terms & Conditions"}</h1>
      <p>
        {lang === "cs" ? (
          <>Tyto podmínky upravují vztah mezi <strong>Rubusidauta s.r.o.</strong>, IČ 17368685 ("Poskytovatel"), a zákazníkem ("Zákazník") pro služby MIKS FOTOATELIÉR. Nejsme plátce DPH.</>
        ) : lang === "uk" ? (
          <>Ці умови регулюють відносини між <strong>Rubusidauta s.r.o.</strong>, IČ 17368685 ("Постачальник"), та клієнтом ("Клієнт") щодо послуг MIKS FOTOATELIÉR. Ми не платники ПДВ.</>
        ) : (
          <>These terms govern the relationship between <strong>Rubusidauta s.r.o.</strong>, ID 17368685 ("Provider"), and the customer ("Customer") for MIKS FOTOATELIÉR services. We are not VAT payers.</>
        )}
      </p>

      <h2>{lang === "cs" ? "1. Rezervace a smlouva" : lang === "uk" ? "1. Бронювання та договір" : "1. Booking & Contract"}</h2>
      <ol>
        <li>{lang === "cs" ? "Rezervace probíhá online (Reenio). Smlouva vzniká potvrzením a úhradou." : lang === "uk" ? "Бронювання відбувається онлайн (Reenio). Договір укладається після підтвердження та оплати." : "Booking is online (Reenio). Contract is formed after confirmation and payment."}</li>
        <li>{lang === "cs" ? "Poskytovatel může požadovat vratnou kauci dle typu akce." : lang === "uk" ? "Постачальник може вимагати заставу залежно від типу події." : "Provider may request a refundable deposit depending on event type."}</li>
      </ol>

      <h2>{lang === "cs" ? "2. Ceny a platby" : lang === "uk" ? "2. Ціни та оплата" : "2. Prices & Payments"}</h2>
      <ol>
        <li>{lang === "cs" ? "Ceny viz /cs/cenik. Platby přes GoPay (v rámci Reenio) nebo hotově/převodem." : lang === "uk" ? "Ціни див. /uk/cinyk. Оплата через GoPay (у Reenio) або готівкою/переказом." : "See /en/pricing. Payments via GoPay (inside Reenio) or cash/bank transfer."}</li>
        <li>{lang === "cs" ? "Přesčasy účtujeme po 30 minutách." : lang === "uk" ? "Понад час рахуємо кожні 30 хвилин." : "Overtime billed per started 30 minutes."}</li>
      </ol>

      <h2>{lang === "cs" ? "3. Storno" : lang === "uk" ? "3. Скасування" : "3. Cancellation"}</h2>
      <ol>
        <li>{lang === "cs" ? "≥ 24 h – vrácení 100 %." : lang === "uk" ? "≥ 24 год — повернення 100 %." : "≥ 24 h – 100% refund."}</li>
        <li>{lang === "cs" ? "< 24 h – 50 %." : lang === "uk" ? "< 24 год — 50 %." : "< 24 h – 50%."}</li>
        <li>{lang === "cs" ? "Neúčast – 100 %." : lang === "uk" ? "Неявка — 100 %." : "No‑show – 100%."}</li>
      </ol>

      <h2>{lang === "cs" ? "4. Odpovědnost a pravidla" : lang === "uk" ? "4. Відповідальність і правила" : "4. Liability & Rules"}</h2>
      <ol>
        <li>{lang === "cs" ? "Zákazník odpovídá za škody na vybavení a prostorách." : lang === "uk" ? "Клієнт відповідає за пошкодження обладнання та приміщень." : "Customer is liable for damages to equipment and premises."}</li>
        <li>{lang === "cs" ? "Zákaz kouření a otevřeného ohně." : lang === "uk" ? "Заборонено паління та відкрите полум’я." : "No smoking or open flame."}</li>
      </ol>

      <h2>GDPR</h2>
      <p>{lang === "cs" ? "Zpracování osobních údajů viz /cs/gdpr." : lang === "uk" ? "Опрацювання персональних даних див. /uk/gdpr." : "Personal data processing: see /en/privacy."}</p>

      <p className="text-sm opacity-80">{lang === "cs" ? "Účinné od: 24. října 2025" : lang === "uk" ? "Чинно з: 24 жовтня 2025" : "Effective from: 24 Oct 2025"}</p>
    </main>
  );
}

export default function TermsRouter({ params }: { params: { lang: "cs" | "uk" | "en" } }) {
  return <VOP lang={params.lang} />;
}