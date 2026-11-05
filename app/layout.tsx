import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ELITE BARBER AKWA | Le salon le plus net de Douala (237)",
  description: "Barbershop urbain au cœur d'Akwa, Boulevard de la Liberté. Dégradés chirurgicaux, contours au millimètre, barbe au coupe-chou. Lames stériles, clim 18°C, son lourd.",
  openGraph: {
    title: "ELITE BARBER AKWA — Douala",
    description: "Le salon de référence à Akwa. Fade, taper, contours au rasoir. Passe direct sans attente.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-mat-black text-off-white antialiased font-sans selection:bg-aged-gold selection:text-mat-black">
        {children}
      </body>
    </html>
  );
}
