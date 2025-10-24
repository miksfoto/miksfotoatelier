import React from "react";

const priceData = { hourly: 500 };

function PriceTable({ lang }: { lang: "cs" | "uk" | "en" }) {
  return (
    <table>
      <thead>
        <tr>
          <th>{lang === "cs" ? "Služba" : lang === "uk" ? "Послуга" : "Service"}</th>
          <th>{lang === "cs" ? "Cena" : lang === "uk" ? "Ціна" : "Price"}</th>
          <th>{lang === "cs" ? "Poznámka" : lang === "uk" ? "Примітка" : "Note"}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{lang === "cs" ? "Pronájem sálu (A/B)" : lang === "uk" ? "Оренда залу (A/B)" : "Studio hall rental (A/B)"}</td>
          <td><strong>{priceData.hourly} Kč / hod</strong></td>
          <td>{lang === "cs" ? "min. 1,5 hod (sál A) / 1 hod (sál B)" : lang === "uk" ? "мін. 1,5 год (зал A) / 1 год (зал B)" : "min. 1.5h (Hall A) / 1h (Hall B)"}</td>
        </tr>
        <tr>
          <td>{lang === "cs" ? "Přesčas nad sjednaný čas" : lang === "uk" ? "Понад узгоджений час" : "Overtime beyond booking"}</td>
          <td><strong>{lang === "cs" ? "účtováno po 30 min" : lang === "uk" ? "кожні 30 хв" : "charged per 30 min"}</strong></td>
          <td>{lang === "cs" ? "každých započatých 30 min" : lang === "uk" ? "кожні розпочаті 30 хв" : "every started 30 minutes"}</td>
        </tr>
      </tbody>
    </table>
  );
}

function CsCenik() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 prose prose-invert">
      <h1>Ceník a popis služeb</h1>
      <p><strong>Nejsme plátce DPH.</strong></p>
      <h2>Pronájem sálů</h2>
      <ul>
        <li><strong>Sál A</strong> – 6×9 m, bílá/černá stěna, 2× kontinuální, 2× záblesk, vlajky, backdropy.</li>
        <li><strong>Sál B (konferenční)</strong> – 5×7 m, až 12 míst, TV/monitor, flipchart, Wi‑Fi.</li>
      </ul>
      <h2>Ceny</h2>
      {PriceTable({ lang: "cs" })}
      <h2>Platební metody</h2>
      <p>Online přes GoPay (karta, Apple Pay, Google Pay, bankovní tlačítka) nebo hotově / převodem. Rezervace platí po zaplacení.</p>
      <h2>Storno</h2>
      <ul>
        <li>≥ 24 h před začátkem – 0 % storno (vrácení 100 %).</li>
        <li>&lt; 24 h – 50 % storno.</li>
        <li>Neúčast – 100 % ceny.</li>
      </ul>
    </main>
  );
}

function UkCinyk() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 prose">
      <h1>Ціни та опис послуг</h1>
      <p><strong>Ми не платники ПДВ.</strong></p>
      <h2>Оренда залів</h2>
      <ul>
        <li><strong>Зал A</strong> — 6×9 м, біла/чорна стіна, 2× постійне світло, 2× імпульсне, прапори, бекдропи.</li>
        <li><strong>Зал B (конференц-зал)</strong> — 5×7 м, до 12 місць, TV/монітор, фліпчарт, Wi‑Fi.</li>
      </ul>
      <h2>Ціни</h2>
      {PriceTable({ lang: "uk" })}
      <h2>Оплата</h2>
      <p>Онлайн через GoPay (картка, Apple Pay, Google Pay, банківські кнопки) або готівкою/переказом. Бронювання набуває сили після оплати.</p>
      <h2>Скасування</h2>
      <ul>
        <li>≥ 24 год до початку — повернення 100 %.</li>
        <li>&lt; 24 год — утримується 50 %.</li>
        <li>Неявка — 100 % вартості.</li>
      </ul>
    </main>
  );
}

function EnPricing() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 prose prose-invert">
      <h1>Pricing & Services</h1>
      <p><strong>We are not VAT payers.</strong></p>
      <h2>Studio Halls</h2>
      <ul>
        <li><strong>Hall A</strong> – 6×9 m, white/black wall, 2× continuous, 2× strobe, flags, backdrops.</li>
        <li><strong>Hall B (conference)</strong> – 5×7 m, up to 12 seats, TV/monitor, flipchart, Wi‑Fi.</li>
      </ul>
      <h2>Prices</h2>
      {PriceTable({ lang: "en" })}
      <h2>Payments</h2>
      <p>Online via GoPay (card, Apple Pay, Google Pay, bank buttons) or cash / bank transfer. Booking is valid after payment.</p>
      <h2>Cancellation</h2>
      <ul>
        <li>≥ 24 h before start – 100% refund.</li>
        <li>&lt; 24 h – 50% fee.</li>
        <li>No‑show – 100% fee.</li>
      </ul>
    </main>
  );
}

export default function PriceRouter({ params }: { params: { lang: "cs" | "uk" | "en" } }) {
  if (params.lang === "cs") return CsCenik();
  if (params.lang === "uk") return UkCinyk();
  return EnPricing();
}