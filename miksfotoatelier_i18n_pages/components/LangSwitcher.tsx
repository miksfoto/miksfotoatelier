export function LangSwitcher({ current }: { current: "cs" | "uk" | "en" }) {
  const langs: Array<["cs" | "uk" | "en", string]> = [
    ["cs", "Česky"],
    ["uk", "Українська"],
    ["en", "English"],
  ];
  return (
    <nav className="flex gap-3 text-sm opacity-90">
      {langs.map(([code, label]) => (
        <a
          key={code}
          href={`/${code}`}
          className={current === code ? "underline" : "hover:opacity-100"}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}