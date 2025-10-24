MIKS FOTOATELIÉR — i18n (CS/UK/EN) pages pack
============================================

Co je uvnitř
------------
- app/(i18n)/[lang]/** – vícejazyčné stránky (home, ceník/pricing, podmínky/terms, GDPR/privacy, kontakt/contact)
- components/** – LangSwitcher, BookingButtons, Footer
- app/api/gopay-webhook/** – placeholder pro budoucí GoPay webhook
- middleware.ts – přesměrování z `/` na `/cs`

Rychlá instalace do Next.js (App Router)
----------------------------------------
1) Zkopíruj složky `app`, `components`, `middleware.ts` do kořene svého Next.js projektu (sluč dle potřeby).
2) Ujisti se, že máš Tailwind (nepovinné, ale doporučeno pro třídy použitě v komponentách).
3) Spusť projekt: `npm run dev` a otevři `/cs`, `/uk`, `/en`.
4) Aktualizuj odkazy v patičce dle potřeby.

Reenio
------
Tlačítko „Rezervovat/Забронювати/Book now“ odkazuje na
https://miks-fotoatelier.reenio.cz s odpovídajícím jazykem (/cs/terms, /uk/terms, /en/terms).

Vercel deployment
-----------------
- Nahraj repo na GitHub, ve Vercel → Add New Project → Import → nastav Root.
- V DNS u WEDOS nasměruj doménu `miksfotoatelier.cz` na Vercel (A/AAAA/CNAME podle Vercel návodu).
- Vercel → Domains → přidej miksfotoatelier.cz a www.miksfotoatelier.cz.

Poznámka
--------
Pokud hostuješ na klasickém webhostingu bez Node.js, použij Vercel (doporučeno) nebo udělej `next export` a nahrát statiku (ale pak bez API).