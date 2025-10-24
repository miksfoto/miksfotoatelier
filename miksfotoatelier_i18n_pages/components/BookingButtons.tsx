export function BookingButtons({ lang }: { lang: "cs" | "uk" | "en" }) {
  const base = "https://miks-fotoatelier.reenio.cz";
  const path = lang === "cs" ? "/cs/terms" : lang === "uk" ? "/uk/terms" : "/en/terms";
  const href = `${base}${path}`;
  return (
    <div className="flex gap-4">
      <a href={href} className="px-5 py-3 rounded-2xl bg-white text-black font-medium">
        {lang === "cs" ? "Rezervovat" : lang === "uk" ? "Забронювати" : "Book now"}
      </a>
      <a href="https://instagram.com/miks.fotoatelier" className="px-5 py-3 rounded-2xl bg-pink-500 text-white font-medium">
        Instagram
      </a>
    </div>
  );
}