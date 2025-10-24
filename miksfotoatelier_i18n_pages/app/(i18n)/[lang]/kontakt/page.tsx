import React from "react";

function Contact({ lang }: { lang: "cs" | "uk" | "en" }) {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 prose prose-invert">
      <h1>{lang === "cs" ? "Kontakt" : lang === "uk" ? "Контакт" : "Contact"}</h1>
      <p>
        <strong>MIKS FOTOATELIÉR</strong><br/>
        Rubusidauta s.r.o., IČ 17368685<br/>
        Pražákova 1008/69, 639 00 Brno<br/>
        E‑mail: <a href="mailto:miksfotoatelier@gmail.com">miksfotoatelier@gmail.com</a><br/>
        Tel.: <a href="tel:+420777444278">+420 777 444 278</a><br/>
        Instagram: <a href="https://instagram.com/miks.fotoatelier">@miks.fotoatelier</a>
      </p>
      <h2>{lang === "cs" ? "Provozní doba" : lang === "uk" ? "Графік роботи" : "Opening hours"}</h2>
      <p>{lang === "cs" ? "Podle rezervací (po–ne). Vstup pouze s platnou rezervací." : lang === "uk" ? "Згідно з бронюваннями (пн–нд). Вхід лише за наявності дійсного бронювання." : "By bookings (Mon–Sun). Entry with valid booking only."}</p>
      <h2>{lang === "cs" ? "Adresa studia" : lang === "uk" ? "Адреса студії" : "Studio address"}</h2>
      <p>{lang === "cs" ? "Olomouc – přesná adresa v potvrzení rezervace." : lang === "uk" ? "Оломоуц — точну адресу надішлемо в підтвердженні бронювання." : "Olomouc – exact address is sent in booking confirmation."}</p>
    </main>
  );
}

export default function ContactRouter({ params }: { params: { lang: "cs" | "uk" | "en" } }) {
  return <Contact lang={params.lang} />;
}