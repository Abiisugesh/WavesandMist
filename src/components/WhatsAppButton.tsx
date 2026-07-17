import { whatsappLink } from "@/lib/site-config";

type Props = {
  message: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function WhatsAppButton({
  message,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm tracked-tight uppercase font-medium transition-transform duration-300 hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-sage-deep text-fog hover:bg-sage"
      : "border border-slate/30 text-slate hover:border-slate hover:bg-slate/5";

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M17.6 6.32A7.85 7.85 0 0 0 12.04 4C7.74 4 4.24 7.5 4.24 11.8c0 1.4.37 2.75 1.06 3.94L4 20l4.38-1.28a7.8 7.8 0 0 0 3.66.93h.01c4.3 0 7.8-3.5 7.8-7.8a7.75 7.75 0 0 0-2.25-5.53Zm-5.56 12a6.5 6.5 0 0 1-3.31-.91l-.24-.14-2.6.76.7-2.53-.16-.26a6.47 6.47 0 0 1-1-3.44 6.5 6.5 0 0 1 6.5-6.5c1.74 0 3.37.68 4.6 1.9a6.45 6.45 0 0 1 1.9 4.6c0 3.6-2.9 6.52-6.39 6.52Zm3.56-4.87c-.2-.1-1.15-.57-1.33-.63-.18-.07-.31-.1-.44.1-.13.19-.5.63-.62.76-.11.13-.23.15-.42.05-.2-.1-.83-.3-1.58-.96a5.9 5.9 0 0 1-1.09-1.35c-.11-.2 0-.3.1-.4.1-.1.2-.24.31-.36.1-.12.13-.2.2-.34.07-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.33h-.38c-.13 0-.35.05-.53.25-.18.19-.7.68-.7 1.66s.72 1.93.82 2.06c.1.13 1.4 2.14 3.4 3 .48.2.85.33 1.14.42.48.15.91.13 1.25.08.38-.06 1.15-.47 1.32-.92.16-.46.16-.84.11-.92-.05-.08-.18-.13-.38-.23Z" />
    </svg>
  );
}
