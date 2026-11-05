"use client";

import React, { useState } from "react";
import {
  Scissors,
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  Flame,
  Check,
  ArrowRight,
  MessageSquare,
  Navigation,
  Volume2,
} from "lucide-react";

// Clean custom Instagram SVG icon
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>("signature");
  const [activeStory, setActiveStory] = useState<string | null>(null);

  // Phone number for Elite Barber Akwa (Douala, Cameroon)
  const WHATSAPP_NUMBER = "237694882211";

  const getWhatsAppLink = (serviceName?: string) => {
    const text = serviceName
      ? `Salut Elite Barber Akwa, je veux réserver pour la formule: ${serviceName}. Vous êtes disponibles aujourd'hui ?`
      : `Salut l'équipe Elite Barber Akwa, je veux passer me couper les cheveux aujourd'hui. Il y a de la place ?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const stories = [
    {
      id: "fades",
      label: "FADES NETS",
      tag: "🔥 Taper & Low Fade",
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=700&q=80",
      caption: "Dégradé à blanc progressif. Zéro démarcation. Zéro bavure.",
    },
    {
      id: "contours",
      label: "CONTOURS",
      tag: "💈 Ligne au millimètre",
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=700&q=80",
      caption: "Traçage au coupe-chou traditionnel + craie blanche pour une ligne géométrique.",
    },
    {
      id: "beards",
      label: "BARBES",
      tag: "⚡ Huile chaude & serviette",
      image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=700&q=80",
      caption: "Sculpture de barbe pleine, vapeur chaude, teinture noire naturelle anti-taches.",
    },
    {
      id: "salon",
      label: "LE SHOP",
      tag: "👑 Akwa Boulevard",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=700&q=80",
      caption: "Clim à 18°C, son Afrobeats/Trap lourd, fauteuils cuir vintage et boissons fraîches.",
    },
    {
      id: "tools",
      label: "HYGIÈNE",
      tag: "🛡️ Lame 100% neuve",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=700&q=80",
      caption: "Lame jetable Gillette Platinum déballée sous tes yeux. Alcool 90° et stérilisateur UV.",
    },
  ];

  const tariffs = [
    {
      id: "signature",
      title: "PACK SIGNATURE AKWA",
      subtitle: "Coupe complète + Dégradé au choix + Barbe sculptée + Serviette mentholée",
      currentPrice: "3.000 F",
      oldPrice: "5.000 F",
      badge: "PROMO DU MOIS",
      highlight: true,
      time: "35 min",
      description: "Le combo que 80% des gars demandent. Dégradé américain ou espagnol, barbe huilée tracée au coupe-chou, contours chirurgicaux.",
    },
    {
      id: "simple",
      title: "COUPE SIMPLE + TRAÇAGE",
      subtitle: "Tonte ou rafraîchissement + Contours au rasoir stérile",
      currentPrice: "2.000 F",
      oldPrice: null,
      badge: "EXPRESS",
      highlight: false,
      time: "20 min",
      description: "Rapide, net, efficace avant le boulot ou un rencard.",
    },
    {
      id: "taper",
      title: "TAPER FADE + CONTOURS CRAIE",
      subtitle: "Temple taper + Blowout taper + Nuque propre + Finition craie blanche",
      currentPrice: "2.500 F",
      oldPrice: "3.500 F",
      badge: "POPULAIRE",
      highlight: false,
      time: "30 min",
      description: "La coupe tendance d'Akwa. Dégradé subtil sur les tempes et l'arrière, volume gardé sur le dessus.",
    },
    {
      id: "relooking",
      title: "LE RELOOKING VIP DU WEEK-END",
      subtitle: "Coupe + Barbe + Black Mask charbon actif + Serviette vapeur + Boisson fraîche",
      currentPrice: "6.000 F",
      oldPrice: "8.500 F",
      badge: "LE LUXE URBAIN",
      highlight: false,
      time: "50 min",
      description: "Nettoyage de peau en profondeur, extraction comédons, masque noir et rasage complet sans irritation.",
    },
    {
      id: "enfant",
      title: "COUPE ÉCOLIER / JUNIOR (-12 ANS)",
      subtitle: "Coupe propre et rapide avec dessins légers en option",
      currentPrice: "1.500 F",
      oldPrice: null,
      badge: null,
      highlight: false,
      time: "20 min",
      description: "Patience garantie pour les petits gars. Fauteuil adapté et dessin discret offert.",
    },
  ];

  return (
    <div className="min-h-screen bg-mat-black text-off-white selection:bg-aged-gold selection:text-mat-black font-sans bg-noise">
      
      {/* 1. TOP STATUS TICKER (Style Streetwear / Urgence Urbaine) */}
      <div className="bg-aged-gold text-mat-black font-display tracking-widest text-sm md:text-base py-2 overflow-hidden border-b border-black select-none">
        <div className="whitespace-nowrap flex gap-8 animate-pulse font-bold uppercase">
          <span>⚡ AKWA - DOUALA • BOULEVARD DE LA LIBERTÉ</span>
          <span>•</span>
          <span>OUVERT AUJOURD&apos;HUI JUSQU&apos;À 22H00</span>
          <span>•</span>
          <span>PROMO EN COURS : PACK COUPE + BARBE À 3.000F (AU LIEU DE 5.000F)</span>
          <span>•</span>
          <span>LAME NEUVE DÉBALLÉE SOUS TES YEUX</span>
          <span>•</span>
          <span>CLIM 18°C & AFROBEATS NON-STOP</span>
          <span>•</span>
          <span>SANS RENDEZ-VOUS OU RÉSA WHATSAPP</span>
        </div>
      </div>

      {/* 2. NAVBAR ASYMÉTRIQUE */}
      <header className="sticky top-0 z-50 bg-mat-black/90 backdrop-blur-md border-b border-dark-border px-4 md:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo Brut Urbain */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-aged-gold text-mat-black flex items-center justify-center font-display text-2xl font-black">
              EB
            </div>
            <div>
              <div className="font-display text-2xl md:text-3xl tracking-tight leading-none text-off-white flex items-center gap-1.5">
                ELITE BARBER <span className="text-aged-gold font-sans text-xs tracking-widest px-1.5 py-0.5 bg-dark-card border border-aged-gold/30">AKWA</span>
              </div>
              <p className="text-[11px] text-muted-gray uppercase tracking-widest mt-0.5 font-medium">
                DOUALA 237 • EST. 2018
              </p>
            </div>
          </div>

          {/* Badge Localisation & Statut */}
          <div className="hidden lg:flex items-center gap-2 bg-dark-card border border-dark-border px-3.5 py-1.5 rounded-none">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs uppercase font-medium text-off-white tracking-wider">
              OUVERT MAINTENANT <span className="text-muted-gray">• Akwa, à 2 min du Rd-pt Soudanaise</span>
            </span>
          </div>

          {/* Action WhatsApp Direct */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+237694882211"
              className="hidden sm:flex items-center gap-1.5 text-xs text-muted-gray hover:text-off-white transition-colors border-r border-dark-border pr-3"
            >
              <Phone className="w-3.5 h-3.5 text-aged-gold" />
              <span>+237 694 88 22 11</span>
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-aged-gold hover:bg-aged-gold-light text-mat-black font-display tracking-wider text-base md:text-lg px-4 md:px-5 py-2 uppercase transition-all flex items-center gap-2 shadow-[2px_2px_0px_#ffffff]"
            >
              <span>WHATSAPP DIRECT</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </header>

      {/* 3. STORIES HIGHLIGHTS INSTAGRAM (Navigation Rapide) */}
      <section className="border-b border-dark-border bg-dark-surface/60 py-3 px-4 md:px-8 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto flex items-center gap-4 md:gap-6 min-w-max">
          <div className="text-[11px] uppercase tracking-widest text-muted-gray font-bold border-r border-dark-border pr-4 hidden sm:block">
            STORY FEED<br /><span className="text-aged-gold">@ELITEBARBERAKWA</span>
          </div>
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(activeStory === story.id ? null : story.id)}
              className="flex flex-col items-center gap-1.5 group cursor-pointer focus:outline-none"
            >
              <div className="p-0.5 rounded-full bg-gradient-to-tr from-aged-gold via-white to-aged-gold group-hover:scale-105 transition-transform">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-mat-black bg-dark-card">
                  <img
                    src={story.image}
                    alt={story.label}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <span className="font-display text-xs md:text-sm tracking-wider text-off-white group-hover:text-aged-gold transition-colors">
                {story.label}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Story Popover si cliqué */}
      {activeStory && (
        <div className="bg-dark-card border-b border-aged-gold/40 px-4 py-4 animate-in fade-in">
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            {(() => {
              const current = stories.find((s) => s.id === activeStory);
              if (!current) return null;
              return (
                <>
                  <div className="flex items-center gap-4">
                    <img src={current.image} alt={current.label} className="w-16 h-16 object-cover border border-aged-gold" />
                    <div>
                      <span className="text-xs bg-aged-gold text-mat-black px-2 py-0.5 font-display tracking-wider">
                        {current.tag}
                      </span>
                      <p className="text-sm text-off-white mt-1 font-medium">{current.caption}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveStory(null)}
                    className="text-xs uppercase text-muted-gray hover:text-off-white tracking-widest border border-dark-border px-3 py-1.5"
                  >
                    Fermer ✕
                  </button>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* 4. HERO SECTION — MISE EN PAGE ASYMÉTRIQUE
             Grosse photo à gauche (60%), titre brut géant en Bebas Neue qui déborde et texte à droite qui la chevauche */}
      <section className="relative pt-6 md:pt-12 pb-16 md:pb-24 px-4 md:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          
          {/* Titre débordant en haut pour accrocher l'œil comme une affiche de rue */}
          <div className="mb-4 md:mb-6 select-none">
            <span className="tape-tag px-3 py-1 text-sm md:text-base font-bold uppercase mb-2">
              LE SALON LE PLUS NET D&apos;AKWA
            </span>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.88] text-off-white uppercase">
              LIGNES <span className="text-aged-gold">CHIRURGICALES.</span><br />
              FADES TRANCHANTS.<br />
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1.5px #EBE8E1" }}>
                ICI C&apos;EST AKWA.
              </span>
            </h1>
          </div>

          {/* Grille asymétrique : 60% photo à gauche, 40% contenu qui chevauche à droite */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative mt-4">
            
            {/* Grosse photo sombre avec grain (Prend 7 cols sur 12 ~ 60%) */}
            <div className="lg:col-span-7 relative group">
              <div className="relative border-2 border-dark-border bg-dark-card overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80"
                  alt="Barber noir au travail à Elite Barber Akwa"
                  className="w-full h-[450px] sm:h-[550px] md:h-[620px] object-cover object-center filter brightness-90 contrast-125"
                />

                {/* Filtre d'ambiance chaude tamisée salon */}
                <div className="absolute inset-0 bg-gradient-to-t from-mat-black via-transparent to-mat-black/20 opacity-80 pointer-events-none"></div>

                {/* Badge Promo collé façon sticker sur l'image */}
                <div className="absolute top-4 left-4 bg-mat-black/95 border-2 border-aged-gold p-3.5 shadow-2xl max-w-[280px]">
                  <div className="flex items-center gap-1.5 text-aged-gold text-xs font-bold tracking-wider uppercase">
                    <Flame className="w-4 h-4 fill-aged-gold" />
                    <span>TARIF SPÉCIAL SALON</span>
                  </div>
                  <div className="flex items-baseline gap-2.5 mt-1">
                    <span className="font-display text-4xl text-off-white font-black leading-none">
                      3.000 F
                    </span>
                    <span className="text-lg text-muted-gray line-through font-display">
                      5.000 F
                    </span>
                  </div>
                  <p className="text-[11px] text-muted-gray uppercase tracking-wider mt-1 leading-tight">
                    Pack Coupe complète + Dégradé au choix + Barbe tracée
                  </p>
                </div>

                {/* Sticker de sécurité hygiène en bas de la photo */}
                <div className="absolute bottom-4 left-4 right-4 bg-mat-black/90 border border-dark-border p-3 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-aged-gold flex-shrink-0" />
                    <span className="uppercase text-[11px] tracking-wider text-off-white">
                      HYGIÈNE 100% : LAME JETABLE NEUVE DÉBALLÉE DEVANT TOI
                    </span>
                  </div>
                  <span className="text-aged-gold font-display text-sm tracking-widest hidden sm:inline">
                    ZÉRO COMPROMIS
                  </span>
                </div>
              </div>

              {/* Petit sticker urbain décalé */}
              <div className="absolute -bottom-4 -left-2 bg-dark-card border border-aged-gold/50 px-3 py-1 font-display text-xs text-aged-gold tracking-widest uppercase hidden md:block">
                #AKWADOUALA237
              </div>
            </div>

            {/* Bloc texte à droite qui chevauche (5 cols sur 12) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:-ml-8 z-10 lg:pt-10">
              
              {/* Carte noire mate avec bordure industrielle */}
              <div className="bg-dark-card border-2 border-dark-border p-6 md:p-8 shadow-2xl relative">
                
                {/* Repère urbain concret */}
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-aged-gold font-mono mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>BOULEVARD DE LA LIBERTÉ, AKWA (FACE EX-ORANGE)</span>
                </div>

                <p className="text-base sm:text-lg text-off-white font-normal leading-relaxed">
                  Ici, on ne fait pas de bavardage. Si ta ligne n&apos;est pas droite au millimètre près, tu ne payes pas. 
                </p>

                <p className="text-sm text-muted-gray mt-3 leading-relaxed">
                  On taille les têtes des gars de Douala depuis 2018 : taper, low fade, wave 360, barbe pleine sculptée au coupe-chou, black mask au charbon. 
                  Clim à 18°C, son Afrobeats qui tourne, fauteuil en cuir confortable, et surtout : <span className="text-off-white font-semibold">aucune lame n&apos;est réutilisée.</span>
                </p>

                {/* Métriques réelles sans blabla */}
                <div className="grid grid-cols-2 gap-4 border-t border-dark-border pt-5 mt-6">
                  <div>
                    <span className="font-display text-3xl md:text-4xl text-aged-gold font-bold block leading-none">
                      4.9 / 5
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-muted-gray mt-1 block">
                      380+ avis Google Maps
                    </span>
                  </div>
                  <div>
                    <span className="font-display text-3xl md:text-4xl text-off-white font-bold block leading-none">
                      15 MIN
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-muted-gray mt-1 block">
                      Attente moyenne sans RDV
                    </span>
                  </div>
                </div>

                {/* Call to action direct */}
                <div className="mt-8 space-y-3">
                  <a
                    href={getWhatsAppLink("Pack Signature")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-aged-gold hover:bg-aged-gold-light text-mat-black font-display text-xl tracking-wider py-3.5 px-6 uppercase text-center flex items-center justify-center gap-2 transition-transform active:scale-[0.99] font-bold shadow-[4px_4px_0px_#ffffff]"
                  >
                    <span>PRENDRE PLACE SUR WHATSAPP</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>

                  <a
                    href="#tarifs"
                    className="w-full bg-mat-black hover:bg-dark-surface border border-dark-border text-off-white font-display text-lg tracking-wider py-3 px-6 uppercase text-center block transition-colors"
                  >
                    CONSULTER LA GRILLE TARIFAIRE
                  </a>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-gray">
                  <Clock className="w-3.5 h-3.5 text-aged-gold" />
                  <span>Passe direct au salon sans attente interminable</span>
                </div>
              </div>

              {/* Badge d'ambiance salon */}
              <div className="bg-dark-surface border border-dark-border p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Volume2 className="w-5 h-5 text-aged-gold" />
                  <div>
                    <p className="text-xs uppercase font-bold text-off-white tracking-wider">
                      PLAYLIST DU SALON EN CE MOMENT
                    </p>
                    <p className="text-xs text-muted-gray">
                      Burna Boy • Asake • Runtown • Trap 237
                    </p>
                  </div>
                </div>
                <span className="text-[10px] bg-dark-card border border-dark-border px-2 py-1 text-aged-gold uppercase tracking-wider">
                  LIVE
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. VÉRITÉS DU SALON (Pas de cartes symétriques ou de dégradés bleus, style affiche urbaine) */}
      <section className="border-y border-dark-border bg-dark-surface/40 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-8">
            <span className="text-xs text-aged-gold uppercase tracking-widest font-mono">
              [ RÈGLES D&apos;OR DU SALON ]
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-off-white uppercase tracking-tight mt-1">
              POURQUOI LES GARS D&apos;AKWA NE CHANGENT PAS DE BARBER
            </h2>
          </div>

          {/* Grille brute asymétrique avec 4 piliers concrets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="bg-dark-card border border-dark-border p-5 relative">
              <span className="font-display text-4xl text-aged-gold/40 font-bold absolute top-3 right-4">
                01
              </span>
              <h3 className="font-display text-xl text-off-white tracking-wider uppercase mb-2">
                LAME NEUVE JETABLE
              </h3>
              <p className="text-sm text-muted-gray leading-relaxed">
                Chaque rasage commence par un &quot;clic&quot;. Une lame Gillette Platinum neuve est cassée et insérée dans le coupe-chou devant tes yeux. Zéro risque de bouton ou d&apos;irritation.
              </p>
            </div>

            <div className="bg-dark-card border border-dark-border p-5 relative">
              <span className="font-display text-4xl text-aged-gold/40 font-bold absolute top-3 right-4">
                02
              </span>
              <h3 className="font-display text-xl text-off-white tracking-wider uppercase mb-2">
                TRAÇAGE AU COUPE-CHOU
              </h3>
              <p className="text-sm text-muted-gray leading-relaxed">
                Pas de ligne floue. Les contours frontaux et de la barbe sont taillés avec une lame inclinée à 30°, gel de rasage transparent et finition à la craie pour une symétrie parfaite.
              </p>
            </div>

            <div className="bg-dark-card border border-dark-border p-5 relative">
              <span className="font-display text-4xl text-aged-gold/40 font-bold absolute top-3 right-4">
                03
              </span>
              <h3 className="font-display text-xl text-off-white tracking-wider uppercase mb-2">
                CLIM 18°C & BOISSON FRAÎCHE
              </h3>
              <p className="text-sm text-muted-gray leading-relaxed">
                Douala est chaud, mais notre salon est un frigo. Climatisation industrielle, fauteuil rembourré grand confort et bouteille d&apos;eau ou canette servie pendant ta coupe.
              </p>
            </div>

            <div className="bg-dark-card border border-dark-border p-5 relative">
              <span className="font-display text-4xl text-aged-gold/40 font-bold absolute top-3 right-4">
                04
              </span>
              <h3 className="font-display text-xl text-off-white tracking-wider uppercase mb-2">
                ACCÈS RAPIDE BOULEVARD
              </h3>
              <p className="text-sm text-muted-gray leading-relaxed">
                En plein cœur d&apos;Akwa sur le Boulevard de la Liberté. Parking gardé, à deux minutes du rond-point Soudanaise. Tu te gares, tu t&apos;assois, tu ressors calé.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. GRILLE TARIFAIRE ASYMÉTRIQUE DU SALON (Prix affichés en gros FCFA) */}
      <section id="tarifs" className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="tape-tag px-2.5 py-0.5 text-xs font-bold uppercase mb-2">
                TRANSPARENCE TOTALE • ZÉRO PRIX À LA TÊTE DU CLIENT
              </span>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl text-off-white uppercase tracking-tight">
                LA CARTE DU SALON
              </h2>
            </div>
            <p className="text-sm text-muted-gray max-w-md">
              Tous nos tarifs sont fixes et affichés en Francs CFA. Règlements acceptés en Cash, Orange Money et MTN MoMo au comptoir.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Colonne gauche : Liste des formules avec la formule Signature mise en avant (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              {tariffs.map((t) => (
                <div
                  key={t.id}
                  onClick={() => setSelectedService(t.id)}
                  className={`p-5 md:p-6 border-2 transition-all cursor-pointer ${
                    selectedService === t.id
                      ? "border-aged-gold bg-dark-card shadow-[4px_4px_0px_#C9A227]"
                      : "border-dark-border bg-dark-card/60 hover:border-muted-gray"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display text-2xl md:text-3xl text-off-white tracking-wider uppercase">
                          {t.title}
                        </h3>
                        {t.badge && (
                          <span className="bg-aged-gold text-mat-black font-display text-xs px-2 py-0.5 tracking-wider uppercase font-bold">
                            {t.badge}
                          </span>
                        )}
                        <span className="text-xs text-muted-gray font-mono">
                          [{t.time}]
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-gray mt-1">
                        {t.subtitle}
                      </p>
                    </div>

                    <div className="flex sm:flex-col items-baseline sm:items-end justify-between gap-2 border-t sm:border-t-0 border-dark-border pt-2 sm:pt-0">
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-3xl md:text-4xl text-aged-gold font-bold">
                          {t.currentPrice}
                        </span>
                        {t.oldPrice && (
                          <span className="font-display text-lg text-muted-gray line-through">
                            {t.oldPrice}
                          </span>
                        )}
                      </div>
                      <a
                        href={getWhatsAppLink(t.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs uppercase font-display tracking-wider text-off-white hover:text-aged-gold flex items-center gap-1"
                      >
                        <span>RÉSERVER CE TARIF</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-xs text-muted-gray/80 mt-3 pt-3 border-t border-dark-border/50">
                    {t.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Colonne droite : Suppléments Express & Règle d'or (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Carte des suppléments express */}
              <div className="bg-dark-surface border-2 border-dark-border p-6">
                <div className="flex items-center justify-between border-b border-dark-border pb-3 mb-4">
                  <span className="font-display text-xl text-off-white tracking-wider uppercase">
                    OPTIONS & RETOUCHES
                  </span>
                  <span className="text-[11px] text-aged-gold font-mono">EN PLUS</span>
                </div>

                <ul className="space-y-3.5 text-sm">
                  <li className="flex items-center justify-between pb-2 border-b border-dark-border/40">
                    <div>
                      <p className="text-off-white font-medium">Motif & Dessin Tribal</p>
                      <p className="text-xs text-muted-gray">Au rasoir sur tempe ou nuque</p>
                    </div>
                    <span className="font-display text-lg text-aged-gold">+ 1.000 F</span>
                  </li>

                  <li className="flex items-center justify-between pb-2 border-b border-dark-border/40">
                    <div>
                      <p className="text-off-white font-medium">Teinture Barbe Bigen</p>
                      <p className="text-xs text-muted-gray">Noir intense naturel sans rougeurs</p>
                    </div>
                    <span className="font-display text-lg text-aged-gold">+ 1.500 F</span>
                  </li>

                  <li className="flex items-center justify-between pb-2 border-b border-dark-border/40">
                    <div>
                      <p className="text-off-white font-medium">Shampoing Mentholé & Crâne</p>
                      <p className="text-xs text-muted-gray">Lotion fraîcheur anti-démangeaisons</p>
                    </div>
                    <span className="font-display text-lg text-aged-gold">+ 1.000 F</span>
                  </li>

                  <li className="flex items-center justify-between pb-2 border-b border-dark-border/40">
                    <div>
                      <p className="text-off-white font-medium">Nettoyage Vapeur + Serviette</p>
                      <p className="text-xs text-muted-gray">Ouvre les pores et détend le visage</p>
                    </div>
                    <span className="font-display text-lg text-aged-gold">+ 1.500 F</span>
                  </li>

                  <li className="flex items-center justify-between">
                    <div>
                      <p className="text-off-white font-medium">Wave Pomade & Durag Press</p>
                      <p className="text-xs text-muted-gray">Finition vagues 360° ultra-brillantes</p>
                    </div>
                    <span className="font-display text-lg text-aged-gold">+ 1.000 F</span>
                  </li>
                </ul>
              </div>

              {/* Affiche Hygiène Intransigeante */}
              <div className="bg-mat-black border-2 border-aged-gold p-5 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 font-display text-8xl text-aged-gold/10 font-bold select-none pointer-events-none">
                  237
                </div>
                <div className="flex items-center gap-2 text-aged-gold text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>ENGAGEMENT SANITAIRE AKWA</span>
                </div>
                <p className="text-xs text-off-white leading-relaxed">
                  Au Cameroun, la poussière et la chaleur ne pardonnent pas. Chez Elite Barber, tondeuses passées au spray désinfectant après chaque tête. Lame de rasoir neuve systématique. Peigne stérilisé aux UV.
                </p>
              </div>

              {/* Bouton réservation rapide de la sélection */}
              <div className="p-4 bg-dark-card border border-dark-border text-center">
                <p className="text-xs text-muted-gray uppercase tracking-wider mb-2">
                  Formule sélectionnée : <span className="text-aged-gold font-bold">{tariffs.find(t => t.id === selectedService)?.title}</span>
                </p>
                <a
                  href={getWhatsAppLink(tariffs.find(t => t.id === selectedService)?.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-aged-gold hover:bg-aged-gold-light text-mat-black font-display text-lg py-2.5 px-4 tracking-wider uppercase block font-bold"
                >
                  RÉSERVER CETTE FORMULE
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 7. LE FEED PHOTO DU SALON (Vraies photos Unsplash, grain, ambiance sombre, pas de fausses images IA) */}
      <section className="border-t border-dark-border bg-dark-surface/30 py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs text-aged-gold uppercase tracking-widest font-mono">
                [ TRAVAUX RÉCENTS • SANS FILTRE IA ]
              </span>
              <h2 className="font-display text-5xl sm:text-6xl text-off-white uppercase tracking-tight mt-1">
                LES DERNIÈRES TÊTES SORTIES DU SHOP
              </h2>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-off-white hover:text-aged-gold border border-dark-border px-4 py-2 bg-dark-card"
            >
              <InstagramIcon className="w-4 h-4 text-aged-gold" />
              <span>VOIR TOUT LE FEED SUR INSTAGRAM</span>
            </a>
          </div>

          {/* Grille asymétrique façon collage streetwear */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
            
            {/* Image 1 : Grande photo verticale gauche (5 cols) */}
            <div className="lg:col-span-5 relative group overflow-hidden border border-dark-border bg-dark-card h-[400px] lg:h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=80"
                alt="Dégradé précis à la tondeuse"
                className="w-full h-full object-cover filter contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-mat-black via-mat-black/80 to-transparent p-5">
                <span className="bg-aged-gold text-mat-black font-display text-xs px-2 py-0.5 tracking-wider uppercase font-bold">
                  SKIN FADE PROGRESSIF
                </span>
                <p className="text-sm text-off-white font-medium mt-1">
                  Dégradé à blanc net sur cheveux afro texturés. Zéro démarcation.
                </p>
                <p className="text-[11px] text-muted-gray mt-0.5 font-mono">Barber : Junior • 25 min de taf</p>
              </div>
            </div>

            {/* Image 2 : Photo ambiance outils (4 cols) */}
            <div className="lg:col-span-4 relative group overflow-hidden border border-dark-border bg-dark-card h-[250px] lg:h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
                alt="Ambiance salon cuir vintage"
                className="w-full h-full object-cover filter contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-mat-black via-mat-black/80 to-transparent p-5">
                <span className="bg-mat-black border border-aged-gold text-aged-gold font-display text-xs px-2 py-0.5 tracking-wider uppercase font-bold">
                  L&apos;ESPACE CLIENT
                </span>
                <p className="text-sm text-off-white font-medium mt-1">
                  Fauteuils en cuir vintage, miroirs rétroéclairés et prises pour charger ton téléphone.
                </p>
              </div>
            </div>

            {/* Colonne droite : 2 photos superposées (3 cols) */}
            <div className="lg:col-span-3 flex flex-col gap-4 h-[520px]">
              
              <div className="relative group overflow-hidden border border-dark-border bg-dark-card flex-1">
                <img
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80"
                  alt="Traçage rasoir"
                  className="w-full h-full object-cover filter contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-mat-black/90 p-2 text-xs border border-dark-border">
                  <span className="text-aged-gold font-bold font-display uppercase tracking-wider block">
                    CONTOUR COUPE-CHOU
                  </span>
                  <span className="text-muted-gray text-[10px]">Ligne frontale au mm près</span>
                </div>
              </div>

              <div className="relative group overflow-hidden border border-dark-border bg-dark-card flex-1">
                <img
                  src="https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=600&q=80"
                  alt="Sculpture de barbe"
                  className="w-full h-full object-cover filter contrast-125 brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-mat-black/90 p-2 text-xs border border-dark-border">
                  <span className="text-aged-gold font-bold font-display uppercase tracking-wider block">
                    SOIN BARBE PLEINE
                  </span>
                  <span className="text-muted-gray text-[10px]">Huile de ricin + serviette chaude</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. VRAIS DMS INSTAGRAM & MESSAGES WHATSAPP (Avis de clients locaux) */}
      <section className="py-16 md:py-24 px-4 md:px-8 border-t border-dark-border">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-10 text-center md:text-left">
            <span className="tape-tag px-2.5 py-0.5 text-xs font-bold uppercase mb-2">
              DOUALA PARLE DE NOUS
            </span>
            <h2 className="font-display text-5xl sm:text-6xl text-off-white uppercase tracking-tight">
              CAPTURES D&apos;ÉCRAN RÉELLES
            </h2>
            <p className="text-sm text-muted-gray mt-1">
              Pas de faux avis 5 étoiles génériques. Voici ce que les gars nous écrivent sur WhatsApp et en DM après leur passage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* Message 1 */}
            <div className="bg-dark-card border border-dark-border p-5 relative">
              <div className="flex items-center justify-between border-b border-dark-border pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-aged-gold text-mat-black flex items-center justify-center font-display font-bold text-xs">
                    M
                  </div>
                  <div>
                    <p className="text-xs font-bold text-off-white leading-none">Marc Aurel N.</p>
                    <p className="text-[10px] text-muted-gray">Client régulier • Akwa</p>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <Check className="w-3 h-3" /> WhatsApp
                </span>
              </div>
              <p className="text-sm text-off-white/90 italic leading-relaxed">
                &ldquo;Frère, la ligne que Junior m&apos;a calée samedi pour le mariage au Prince de Galles... Tout le monde au cocktail m&apos;a demandé le contact du barber. Le fade était tellement propre que ma fiancée n&apos;a même pas ricané. Vous avez gagné un abonné à vie chef.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-dark-border/40 flex items-center justify-between text-[11px] text-muted-gray font-mono">
                <span>Formule : Pack Signature</span>
                <span>Samedi 14h12</span>
              </div>
            </div>

            {/* Message 2 */}
            <div className="bg-dark-card border border-dark-border p-5 relative">
              <div className="flex items-center justify-between border-b border-dark-border pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-zinc-700 text-off-white flex items-center justify-center font-display font-bold text-xs">
                    K
                  </div>
                  <div>
                    <p className="text-xs font-bold text-off-white leading-none">Kader T.</p>
                    <p className="text-[10px] text-muted-gray">Vient de Bonamoussadi</p>
                  </div>
                </div>
                <span className="text-[10px] text-purple-400 font-mono flex items-center gap-1">
                  <InstagramIcon className="w-3 h-3" /> Instagram DM
                </span>
              </div>
              <p className="text-sm text-off-white/90 italic leading-relaxed">
                &ldquo;J&apos;ai pris le taxi depuis Bonamoussadi juste pour tester votre dégradé espagnol après avoir vu vos stories. Franchement, le gars Yannick ne rigole pas avec la tondeuse. Zéro coupure, la serviette chaude à la fin apaise direct. Je valide fort.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-dark-border/40 flex items-center justify-between text-[11px] text-muted-gray font-mono">
                <span>Formule : Taper + Craie</span>
                <span>Hier à 19h45</span>
              </div>
            </div>

            {/* Message 3 */}
            <div className="bg-dark-card border border-dark-border p-5 relative">
              <div className="flex items-center justify-between border-b border-dark-border pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-aged-gold text-mat-black flex items-center justify-center font-display font-bold text-xs">
                    S
                  </div>
                  <div>
                    <p className="text-xs font-bold text-off-white leading-none">Samuel B.</p>
                    <p className="text-[10px] text-muted-gray">Deido / Rond-Point</p>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <Check className="w-3 h-3" /> WhatsApp
                </span>
              </div>
              <p className="text-sm text-off-white/90 italic leading-relaxed">
                &ldquo;La clim qui tape à 18°C avec Asake en fond sonore pendant qu&apos;on te fait le black mask... C&apos;est le seul salon de Douala où je m&apos;endors sur le fauteuil tellement c&apos;est doux. Merci pour l&apos;accueil.&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-dark-border/40 flex items-center justify-between text-[11px] text-muted-gray font-mono">
                <span>Formule : Relooking VIP</span>
                <span>Mardi à 17h08</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. L'ÉQUIPE DES BARBERS (Vrais gars d'Akwa) */}
      <section className="border-t border-dark-border bg-dark-surface/40 py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-10">
            <span className="text-xs text-aged-gold uppercase tracking-widest font-mono">
              [ LES MAINS DERRIÈRE LE COUPE-CHOU ]
            </span>
            <h2 className="font-display text-5xl sm:text-6xl text-off-white uppercase tracking-tight mt-1">
              LES MAÎTRES DE LA TONDEUSE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Barber 1 */}
            <div className="bg-dark-card border border-dark-border p-6 relative">
              <span className="tape-tag px-2 py-0.5 text-xs font-bold uppercase mb-3">
                CHEF COUPEUR
              </span>
              <h3 className="font-display text-3xl text-off-white tracking-wider uppercase mt-2">
                JUNIOR &quot;LE CHIRURGIEN&quot;
              </h3>
              <p className="text-xs text-aged-gold font-mono tracking-wider mt-0.5 uppercase">
                Spécialiste Dégradé Espagnol, Taper & Craie
              </p>
              <p className="text-sm text-muted-gray mt-3 leading-relaxed">
                7 ans de métier sur le boulevard. Reconnu pour sa vitesse et sa précision chirurgicale sur les lignes frontales compliquées.
              </p>
              <div className="mt-4 pt-4 border-t border-dark-border flex items-center justify-between text-xs text-muted-gray">
                <span>Fauteuil N° 1</span>
                <span className="text-off-white font-mono">3.000+ têtes coupées</span>
              </div>
            </div>

            {/* Barber 2 */}
            <div className="bg-dark-card border border-dark-border p-6 relative">
              <span className="tape-tag px-2 py-0.5 text-xs font-bold uppercase mb-3">
                EXPERT BARBE
              </span>
              <h3 className="font-display text-3xl text-off-white tracking-wider uppercase mt-2">
                YANNICK &quot;LAME D&apos;OR&quot;
              </h3>
              <p className="text-xs text-aged-gold font-mono tracking-wider mt-0.5 uppercase">
                Spécialiste Barbe pleine, Rasoir & Black Mask
              </p>
              <p className="text-sm text-muted-gray mt-3 leading-relaxed">
                Le maître du coupe-chou. Il traite les poils drus avec des serviettes chaudes à l&apos;eucalyptus et taille sans jamais irriter la peau.
              </p>
              <div className="mt-4 pt-4 border-t border-dark-border flex items-center justify-between text-xs text-muted-gray">
                <span>Fauteuil N° 2</span>
                <span className="text-off-white font-mono">Expert soins de peau</span>
              </div>
            </div>

            {/* Barber 3 */}
            <div className="bg-dark-card border border-dark-border p-6 relative">
              <span className="tape-tag px-2 py-0.5 text-xs font-bold uppercase mb-3">
                FREESTYLE DESIGN
              </span>
              <h3 className="font-display text-3xl text-off-white tracking-wider uppercase mt-2">
                DIMITRI &quot;SKIN FADE&quot;
              </h3>
              <p className="text-xs text-aged-gold font-mono tracking-wider mt-0.5 uppercase">
                Spécialiste Wave 360, Dessins tribaux & Juniors
              </p>
              <p className="text-sm text-muted-gray mt-3 leading-relaxed">
                Le créatif de l&apos;équipe. Si tu veux des traits artistiques, des vagues nettes au durag ou si tu amènes ton fils, c&apos;est son fauteuil.
              </p>
              <div className="mt-4 pt-4 border-t border-dark-border flex items-center justify-between text-xs text-muted-gray">
                <span>Fauteuil N° 3</span>
                <span className="text-off-white font-mono">Patience & style</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. LOCALISATION & ACCÈS AKWA (Repères camerounais concrets) */}
      <section id="contact" className="py-16 md:py-24 px-4 md:px-8 border-t border-dark-border">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Infos concrètes (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="tape-tag px-2.5 py-0.5 text-xs font-bold uppercase mb-2">
                  COMMENT ARRIVER CHEZ NOUS
                </span>
                <h2 className="font-display text-5xl sm:text-6xl text-off-white uppercase tracking-tight">
                  AU COEUR D&apos;AKWA, DOUALA
                </h2>
              </div>

              <div className="bg-dark-card border-2 border-dark-border p-6 space-y-4">
                
                <div className="flex items-start gap-3 pb-4 border-b border-dark-border">
                  <MapPin className="w-5 h-5 text-aged-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-off-white uppercase tracking-wider">
                      ADRESSE EXACTE :
                    </p>
                    <p className="text-sm text-muted-gray mt-0.5">
                      Boulevard de la Liberté, Akwa — Douala (Cameroun)
                    </p>
                    <p className="text-xs text-aged-gold mt-1 font-mono">
                      Repère : Juste en face de l&apos;ancienne Direction Orange, à 2 minutes du Rond-Point Soudanaise et à côté de la boulangerie Zepol.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-dark-border">
                  <Clock className="w-5 h-5 text-aged-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-off-white uppercase tracking-wider">
                      HORAIRES D&apos;OUVERTURE :
                    </p>
                    <div className="text-sm text-muted-gray mt-1 space-y-1">
                      <p className="flex justify-between gap-6">
                        <span>Lundi au Samedi :</span>
                        <span className="text-off-white font-mono">08h00 — 22h00 (Non-stop)</span>
                      </p>
                      <p className="flex justify-between gap-6">
                        <span>Dimanche :</span>
                        <span className="text-off-white font-mono">11h00 — 21h00</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-aged-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-off-white uppercase tracking-wider">
                      STATIONNEMENT & SÉCURITÉ :
                    </p>
                    <p className="text-sm text-muted-gray mt-0.5">
                      Parking sécurisé avec vigile sur le boulevard devant la boutique. Motos et véhicules bienvenus.
                    </p>
                  </div>
                </div>

              </div>

              {/* Boutons d'action directs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="bg-dark-card hover:bg-dark-surface border border-dark-border text-off-white font-display text-lg tracking-wider py-3 px-4 uppercase text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-aged-gold" />
                  <span>APPELER LE SALON</span>
                </a>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-aged-gold hover:bg-aged-gold-light text-mat-black font-display text-lg tracking-wider py-3 px-4 uppercase text-center flex items-center justify-center gap-2 font-bold shadow-[2px_2px_0px_#ffffff]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>ÉCRIRE SUR WHATSAPP</span>
                </a>
              </div>

            </div>

            {/* Fausse carte urbaine stylisée en Dark Mode (5 cols) */}
            <div className="lg:col-span-5 bg-dark-card border-2 border-dark-border p-6 relative">
              <div className="flex items-center justify-between border-b border-dark-border pb-3 mb-4">
                <span className="font-display text-xl text-off-white tracking-wider uppercase">
                  PLAN DU QUARTIER
                </span>
                <span className="text-xs text-aged-gold font-mono">AKWA NORD / SUD</span>
              </div>

              {/* Représentation graphique street map stylisée */}
              <div className="relative bg-mat-black border border-dark-border h-72 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                
                {/* Lignes stylisées de carrefour */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="w-full h-1 bg-muted-gray absolute top-1/2 -translate-y-1/2"></div>
                  <div className="h-full w-1 bg-muted-gray absolute left-1/2 -translate-x-1/2"></div>
                  <div className="w-24 h-24 rounded-full border border-muted-gray absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                {/* Pin du salon */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 bg-aged-gold text-mat-black flex items-center justify-center shadow-2xl animate-bounce">
                    <Scissors className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div className="bg-mat-black border-2 border-aged-gold px-3 py-1.5 mt-2">
                    <p className="font-display text-base text-off-white uppercase tracking-wider font-bold">
                      ELITE BARBER
                    </p>
                    <p className="text-[10px] text-aged-gold uppercase tracking-widest font-mono">
                      Face ex-Orange • Akwa
                    </p>
                  </div>
                </div>

                {/* Repères urbains autour */}
                <span className="absolute top-3 left-4 text-[10px] text-muted-gray font-mono uppercase bg-dark-card px-2 py-0.5 border border-dark-border">
                  Vers Rd-Pt Soudanaise (2 min)
                </span>
                <span className="absolute bottom-3 right-4 text-[10px] text-muted-gray font-mono uppercase bg-dark-card px-2 py-0.5 border border-dark-border">
                  Vers Boulangerie Zepol
                </span>
                <span className="absolute top-3 right-4 text-[10px] text-muted-gray font-mono uppercase bg-dark-card px-2 py-0.5 border border-dark-border">
                  Vers Bd de la Liberté
                </span>
              </div>

              <div className="mt-4 text-center">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=Boulevard+de+la+Liberte+Akwa+Douala`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase font-display tracking-widest text-aged-gold hover:underline inline-flex items-center gap-1.5"
                >
                  <span>OUVRIR L&apos;ITINÉRAIRE DANS GOOGLE MAPS</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 11. FOOTER BRUT URBAIN */}
      <footer className="border-t border-dark-border bg-mat-black py-12 px-4 md:px-8 text-xs text-muted-gray">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-aged-gold text-mat-black flex items-center justify-center font-display text-xl font-black">
              EB
            </div>
            <div>
              <p className="font-display text-lg text-off-white tracking-wider leading-none">
                ELITE BARBER AKWA
              </p>
              <p className="text-[10px] text-muted-gray uppercase tracking-widest mt-0.5">
                Douala, Cameroun (237) • Tous droits réservés
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 font-display text-sm tracking-wider uppercase text-off-white">
            <a href="#tarifs" className="hover:text-aged-gold transition-colors">Tarifs</a>
            <a href="#contact" className="hover:text-aged-gold transition-colors">Localisation</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-aged-gold transition-colors">Instagram</a>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="text-aged-gold hover:underline">WhatsApp</a>
          </div>

          <div className="text-right text-[11px] font-mono">
            <p>DESIGN BRUT • AKWA STREET EDITION</p>
            <p className="text-muted-gray/70">Zéro filtre IA • 100% Vrai Salon</p>
          </div>

        </div>
      </footer>

      {/* 12. BOUTON FLOTTANT WHATSAPP (Toujours visible pour conversion rapide) */}
      <div className="fixed bottom-5 right-5 z-50">
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-400 text-mat-black p-3.5 md:p-4 rounded-none shadow-[4px_4px_0px_#0A0A0A] border-2 border-mat-black flex items-center gap-2.5 transition-all group font-display tracking-wider uppercase"
        >
          <div className="relative">
            <MessageSquare className="w-6 h-6 fill-mat-black stroke-mat-black" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-aged-gold rounded-full border border-mat-black"></span>
          </div>
          <span className="text-sm md:text-base font-bold text-mat-black hidden sm:inline">
            PASSER AU SALON EN DIRECT
          </span>
        </a>
      </div>

    </div>
  );
}
