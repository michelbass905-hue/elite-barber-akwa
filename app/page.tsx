"use client";

import React from "react";
import {
  Phone,
  ArrowUpRight,
  ShieldCheck,
  Volume2,
} from "lucide-react";

export default function Home() {
  const WHATSAPP_NUMBER = "237694882211";

  const getWhatsAppUrl = (msg?: string) => {
    const text = msg
      ? msg
      : "Salut Elite Barber Akwa, je veux caler une coupe pour aujourd'hui. Il y a de la place au salon ?";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EBE8E1] font-sans selection:bg-[#C9A227] selection:text-[#0A0A0A] relative overflow-x-hidden">
      
      {/* 1. STREET TICKER - ROULEAU D'INFORMATION URBAIN (Pas de dégradé, typo brute) */}
      <div className="bg-[#C9A227] text-[#0A0A0A] font-display text-sm md:text-base py-1.5 px-4 font-black tracking-widest uppercase overflow-hidden border-b-2 border-black">
        <div className="flex items-center gap-6 whitespace-nowrap font-bold">
          <span>⚡ AKWA, BOULEVARD DE LA LIBERTÉ</span>
          <span>+++</span>
          <span>LAME NEUVE DÉBALLÉE DEVANT TOI</span>
          <span>+++</span>
          <span>PROMO : COUPE + BARBE 3.000F AU LIEU DE 5.000F</span>
          <span>+++</span>
          <span>CLIM 18°C &amp; SON AFROBEATS</span>
          <span>+++</span>
          <span>SANS RENDEZ-VOUS OU SUR WHATSAPP</span>
          <span>+++</span>
          <span>08H00 - 22H00 NON-STOP</span>
        </div>
      </div>

      {/* 2. HEADER TYPE PROFIL INSTA STREETWEAR */}
      <header className="border-b-2 border-[#222222] bg-[#0E0E0E] px-4 md:px-8 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Bloc Marque / Handle Insta */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-[#141414] border-2 border-[#C9A227] p-1 flex-shrink-0">
              <div className="w-full h-full bg-[#0A0A0A] flex flex-col items-center justify-center font-display font-black text-[#C9A227] text-2xl leading-none">
                <span>EB</span>
                <span className="text-[8px] text-[#EBE8E1] tracking-widest">237</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-display text-3xl md:text-4xl tracking-tight text-[#EBE8E1] leading-none">
                  ELITE BARBER AKWA
                </span>
                <span className="bg-[#C9A227] text-[#0A0A0A] font-display text-xs px-2 py-0.5 font-bold tracking-wider">
                  DOUALA
                </span>
              </div>
              <p className="text-xs text-[#8E8E8E] font-mono mt-0.5">
                @elitebarberakwa • Est. 2018 • Boulevard de la Liberté
              </p>
            </div>
          </div>

          {/* Badge Ouvert + Contact Rapide */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <div className="border border-[#2A2A2A] bg-[#0A0A0A] px-3 py-1.5 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#EBE8E1]">
                OUVERT MAINTENANT <span className="text-[#8E8E8E] hidden sm:inline">(À 2 MIN DU RD-PT SOUDANAISE)</span>
              </span>
            </div>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C9A227] hover:bg-[#E0B838] text-[#0A0A0A] font-display text-lg tracking-wider px-4 py-2 uppercase font-black transition-all flex items-center gap-1.5 shadow-[3px_3px_0px_#FFFFFF]"
            >
              <span>WHATSAPP</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>

        </div>
      </header>

      {/* 3. HERO ASYMÉTRIQUE ÉDITORIAL (60% photo à gauche, textes géants qui débordent et chevauchent) */}
      <section className="relative px-4 md:px-8 pt-8 md:pt-14 pb-16 border-b-2 border-[#222222]">
        <div className="max-w-7xl mx-auto">
          
          {/* Titre affiche de rue géant qui déborde */}
          <div className="relative z-20 mb-[-2rem] md:mb-[-3.5rem] select-none pointer-events-none">
            <div className="inline-block bg-[#C9A227] text-[#0A0A0A] font-display text-xs md:text-sm px-3 py-1 font-black tracking-widest uppercase mb-1 rotate-[-1deg]">
              LE DÉGRADÉ QUI NE MENT PAS • DOUALA 237
            </div>
            <h1 className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] tracking-tight leading-[0.84] text-[#EBE8E1] uppercase break-words">
              LIGNE NETTE.<br />
              <span className="text-[#C9A227]">SANS BAVURE.</span>
            </h1>
          </div>

          {/* Grille Asymétrique : Photo 60% à gauche + Ticket brut à droite */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
            
            {/* Grosse Photo à gauche (7 cols / ~60%) */}
            <div className="lg:col-span-7 relative group">
              <div className="relative border-2 border-[#333333] bg-[#111111] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1200&q=80"
                  alt="Barber Akwa au coupe-chou"
                  className="w-full h-[480px] sm:h-[600px] md:h-[680px] object-cover filter contrast-125 brightness-90 grayscale-[20%]"
                />

                {/* Grain & ombre sombre salon */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80 pointer-events-none"></div>

                {/* Tampon Promo géant collé sur la photo */}
                <div className="absolute top-5 left-5 bg-[#0A0A0A] border-2 border-[#C9A227] p-4 shadow-[5px_5px_0px_#000000] rotate-[-2deg]">
                  <span className="text-[10px] text-[#C9A227] font-mono tracking-widest uppercase block font-bold">
                    [ PROMO FLASH DU MOIS ]
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="font-display text-5xl md:text-6xl text-[#EBE8E1] font-black leading-none">
                      3.000F
                    </span>
                    <span className="font-display text-2xl text-[#777777] line-through">
                      5.000F
                    </span>
                  </div>
                  <span className="text-xs text-[#EBE8E1] font-mono uppercase block mt-1">
                    COUPE COMPLÈTE + DÉGRADÉ + BARBE TRACÉE
                  </span>
                </div>

                {/* Badge street en bas de photo */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0A0A0A]/95 border border-[#333333] p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 font-mono">
                    <ShieldCheck className="w-4 h-4 text-[#C9A227] flex-shrink-0" />
                    <span>LAME GILLETTE PLATINUM DÉBALLÉE DEVANT TOI</span>
                  </div>
                  <span className="text-[#C9A227] font-mono font-bold">HYGIÈNE 100%</span>
                </div>
              </div>

              {/* Tag coordonnées géographiques */}
              <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-[#666666]">
                <span>COORD : 4°03&apos;04.2&quot;N 9°42&apos;12.8&quot;E</span>
                <span>BOULEVARD DE LA LIBERTÉ • AKWA</span>
              </div>
            </div>

            {/* Bloc Contenu qui chevauche à droite (5 cols) */}
            <div className="lg:col-span-5 flex flex-col space-y-6 lg:-ml-12 z-20 lg:pt-16">
              
              {/* Le "Ticket du Salon" façon facture thermique de barbier */}
              <div className="bg-[#111111] border-2 border-[#C9A227] p-6 md:p-8 shadow-[8px_8px_0px_#0A0A0A] relative font-mono">
                
                {/* En-tête de ticket */}
                <div className="border-b-2 border-dashed border-[#333333] pb-4 mb-4">
                  <div className="flex justify-between items-center text-xs text-[#8E8E8E]">
                    <span>TICKET N° 0237-AKWA</span>
                    <span>DOUALA, CM</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl text-[#EBE8E1] tracking-tight uppercase mt-1">
                    ICI ON NE BAVARDE PAS.
                  </h2>
                </div>

                <p className="text-sm text-[#CCCCCC] leading-relaxed font-sans mb-4">
                  Tu as déjà payé un barber qui t&apos;a gâté les contours avant un mariage ou un rencard ? Plus jamais. 
                  À Akwa, on taille au rasoir traditionnel, la ligne est droite au millimètre près, la clim tape à 18°C et le son tourne en fond.
                </p>

                {/* Grille express du ticket */}
                <div className="space-y-2 text-xs border-y-2 border-dashed border-[#333333] py-4 my-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#EBE8E1]">01. TEMPS D&apos;ATTENTE</span>
                    <span className="text-[#C9A227] font-bold">~ 15 MIN MAX</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#EBE8E1]">02. CLIMATISATION</span>
                    <span className="text-[#C9A227] font-bold">18°C CONTINUE</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#EBE8E1]">03. PAIEMENTS ACCEPTÉS</span>
                    <span className="text-[#C9A227] font-bold">CASH / OM / MOMO</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#EBE8E1]">04. SANS RENDEZ-VOUS</span>
                    <span className="text-emerald-400 font-bold">DISPONIBLE DIRECT</span>
                  </div>
                </div>

                {/* Appel à l'action WhatsApp direct */}
                <div className="mt-6 space-y-3">
                  <a
                    href={getWhatsAppUrl("Salut Elite Barber Akwa, je veux caler la Promo 3.000F aujourd'hui. Il y a un fauteuil libre ?")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#C9A227] hover:bg-[#E0B838] text-[#0A0A0A] font-display text-2xl tracking-wider py-4 px-6 uppercase text-center block font-black transition-all shadow-[4px_4px_0px_#FFFFFF]"
                  >
                    CALER MA COUPE SUR WHATSAPP
                  </a>

                  <a
                    href="tel:+237694882211"
                    className="w-full bg-[#0A0A0A] hover:bg-[#1A1A1A] border-2 border-[#333333] text-[#EBE8E1] font-display text-lg tracking-wider py-3 px-6 uppercase text-center flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#C9A227]" />
                    <span>APPELER DIRECTEMENT (+237 694...)</span>
                  </a>
                </div>

                {/* Pied de ticket style code barre */}
                <div className="mt-6 pt-3 border-t border-dashed border-[#333333] text-center">
                  <p className="text-[10px] tracking-widest text-[#666666]">
                    ||| | |||| || | ||||| ||| || |||||| | |||| |||
                  </p>
                  <p className="text-[10px] text-[#888888] mt-1">
                    BOULEVARD DE LA LIBERTÉ • FACE EX-DIRECTION ORANGE
                  </p>
                </div>

              </div>

              {/* Lecteur son en direct */}
              <div className="bg-[#0E0E0E] border border-[#222222] p-3 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-[#C9A227]">
                  <Volume2 className="w-4 h-4" />
                  <span className="text-[#EBE8E1]">AU SALON : Burna Boy, Asake, Trap 237</span>
                </div>
                <span className="text-[10px] text-[#777777]">EN DIRECT</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. LA GRILLE TARIFAIRE DU SALON (Style Ardoise de barbier, pas de cartes tech) */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b-2 border-[#222222] bg-[#0C0C0C]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="bg-[#C9A227] text-[#0A0A0A] font-display text-xs px-2.5 py-0.5 font-bold tracking-widest uppercase inline-block mb-2">
                AFFICHAGE OBLIGATOIRE DU SALON
              </span>
              <h2 className="font-display text-5xl sm:text-7xl text-[#EBE8E1] tracking-tight uppercase">
                LES TARIFS EN FRANCS CFA
              </h2>
            </div>
            <p className="text-xs text-[#8E8E8E] font-mono max-w-sm">
              Ici aucun prix n&apos;est fait à la tête du client. Le montant affiché est le montant payé.
            </p>
          </div>

          {/* Tableau ardoise brut avec prix géants */}
          <div className="border-2 border-[#222222] bg-[#0A0A0A] divide-y-2 divide-[#1C1C1C]">
            
            {/* Ligne 1 : Promo Vedette */}
            <div className="p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-[#121212] relative border-l-4 border-l-[#C9A227]">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="bg-[#C9A227] text-[#0A0A0A] font-display text-xs px-2 py-0.5 font-black uppercase">
                    PROMO EN COURS
                  </span>
                  <span className="text-xs font-mono text-[#888888]">[35 MIN]</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-[#EBE8E1] uppercase tracking-wide">
                  LE PACK SIGNATURE (DÉGRADÉ + BARBE AU RASOIR)
                </h3>
                <p className="text-sm text-[#AAAAAA] mt-1 max-w-2xl font-sans">
                  Taper, Low fade ou Dégradé à blanc + taille de barbe pleine + serviette mentholée vapeur + contours au coupe-chou avec lame neuve.
                </p>
              </div>

              <div className="flex items-center gap-6 self-start lg:self-auto flex-shrink-0">
                <div className="text-right">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl md:text-6xl text-[#C9A227] font-black leading-none">
                      3.000F
                    </span>
                    <span className="font-display text-2xl text-[#666666] line-through">
                      5.000F
                    </span>
                  </div>
                  <span className="text-[10px] text-[#888888] font-mono block mt-0.5">TARIF SALON AKWA</span>
                </div>

                <a
                  href={getWhatsAppUrl("Salut, je veux passer pour le Pack Signature à 3.000F.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C9A227] hover:bg-[#E0B838] text-[#0A0A0A] font-display text-xl px-5 py-3 uppercase font-black"
                >
                  RÉSERVER
                </a>
              </div>
            </div>

            {/* Ligne 2 : Coupe Simple */}
            <div className="p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-[#888888] block mb-1">[20 MIN]</span>
                <h3 className="font-display text-3xl text-[#EBE8E1] uppercase tracking-wide">
                  COUPE SIMPLE + TRAÇAGE DE LA LIGNE
                </h3>
                <p className="text-sm text-[#888888] mt-1 max-w-2xl font-sans">
                  Rafraîchissement tondeuse, finition ciseaux et contours rasoir stérile. Rapide et propre.
                </p>
              </div>

              <div className="flex items-center gap-6 self-start lg:self-auto flex-shrink-0">
                <div className="text-right">
                  <span className="font-display text-4xl md:text-5xl text-[#EBE8E1] font-black leading-none">
                    2.000F
                  </span>
                  <span className="text-[10px] text-[#666666] font-mono block mt-0.5">PRIX UNIQUE</span>
                </div>
                <a
                  href={getWhatsAppUrl("Salut, je veux la Coupe simple à 2.000F.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#181818] hover:bg-[#252525] border border-[#333333] text-[#EBE8E1] font-display text-lg px-4 py-2.5 uppercase"
                >
                  PRENDRE
                </a>
              </div>
            </div>

            {/* Ligne 3 : Taper Fade + Craie */}
            <div className="p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-[#888888] block mb-1">[30 MIN]</span>
                <h3 className="font-display text-3xl text-[#EBE8E1] uppercase tracking-wide">
                  TAPER FADE + FINITION CRAIE BLANCHE
                </h3>
                <p className="text-sm text-[#888888] mt-1 max-w-2xl font-sans">
                  Dégradé tempe et nuque, volume afro travaillé au peigne éponge, traçage géométrique à la craie.
                </p>
              </div>

              <div className="flex items-center gap-6 self-start lg:self-auto flex-shrink-0">
                <div className="text-right">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl md:text-5xl text-[#EBE8E1] font-black leading-none">
                      2.500F
                    </span>
                    <span className="font-display text-xl text-[#666666] line-through">
                      3.500F
                    </span>
                  </div>
                  <span className="text-[10px] text-[#666666] font-mono block mt-0.5">PROMO EN COURS</span>
                </div>
                <a
                  href={getWhatsAppUrl("Salut, je veux le Taper Fade à 2.500F.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#181818] hover:bg-[#252525] border border-[#333333] text-[#EBE8E1] font-display text-lg px-4 py-2.5 uppercase"
                >
                  PRENDRE
                </a>
              </div>
            </div>

            {/* Ligne 4 : VIP Black Mask */}
            <div className="p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-[#C9A227] block mb-1">[50 MIN • SOIN COMPLET]</span>
                <h3 className="font-display text-3xl text-[#EBE8E1] uppercase tracking-wide">
                  RELOOKING TOTAL : COUPE + BARBE + BLACK MASK CHARBON
                </h3>
                <p className="text-sm text-[#888888] mt-1 max-w-2xl font-sans">
                  Soin visage vapeur chaude, extraction points noirs, masque noir purifiant, rasage complet et boisson fraîche offerte.
                </p>
              </div>

              <div className="flex items-center gap-6 self-start lg:self-auto flex-shrink-0">
                <div className="text-right">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl md:text-5xl text-[#C9A227] font-black leading-none">
                      6.000F
                    </span>
                    <span className="font-display text-xl text-[#666666] line-through">
                      8.500F
                    </span>
                  </div>
                  <span className="text-[10px] text-[#888888] font-mono block mt-0.5">FORMULE COMPLÈTE</span>
                </div>
                <a
                  href={getWhatsAppUrl("Salut, je réserve le Relooking VIP Black Mask à 6.000F.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C9A227] hover:bg-[#E0B838] text-[#0A0A0A] font-display text-xl px-5 py-3 uppercase font-black"
                >
                  RÉSERVER
                </a>
              </div>
            </div>

            {/* Ligne 5 : Coupe Enfant */}
            <div className="p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-[#888888] block mb-1">[-12 ANS]</span>
                <h3 className="font-display text-3xl text-[#EBE8E1] uppercase tracking-wide">
                  COUPE JUNIOR / ÉCOLIER
                </h3>
                <p className="text-sm text-[#888888] mt-1 max-w-2xl font-sans">
                  Patience garantie, fauteuil adapté, dessin simple offert sur le côté.
                </p>
              </div>

              <div className="flex items-center gap-6 self-start lg:self-auto flex-shrink-0">
                <div className="text-right">
                  <span className="font-display text-4xl md:text-5xl text-[#EBE8E1] font-black leading-none">
                    1.500F
                  </span>
                  <span className="text-[10px] text-[#666666] font-mono block mt-0.5">TARIF ENFANT</span>
                </div>
                <a
                  href={getWhatsAppUrl("Salut, je passe avec mon fils pour une coupe junior à 1.500F.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#181818] hover:bg-[#252525] border border-[#333333] text-[#EBE8E1] font-display text-lg px-4 py-2.5 uppercase"
                >
                  PRENDRE
                </a>
              </div>
            </div>

          </div>

          {/* Grille des extras rapides façon bande de tickets */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
            <div className="border border-[#222222] bg-[#0E0E0E] p-3 flex justify-between items-center">
              <span>+ MOTIF TRIBAL / TRAIT</span>
              <span className="text-[#C9A227] font-bold">1.000F</span>
            </div>
            <div className="border border-[#222222] bg-[#0E0E0E] p-3 flex justify-between items-center">
              <span>+ TEINTURE BIGEN NOIRE</span>
              <span className="text-[#C9A227] font-bold">1.500F</span>
            </div>
            <div className="border border-[#222222] bg-[#0E0E0E] p-3 flex justify-between items-center">
              <span>+ SHAMPOING FRAÎCHEUR</span>
              <span className="text-[#C9A227] font-bold">1.000F</span>
            </div>
            <div className="border border-[#222222] bg-[#0E0E0E] p-3 flex justify-between items-center">
              <span>+ DURAG PRESS 360°</span>
              <span className="text-[#C9A227] font-bold">1.000F</span>
            </div>
          </div>

        </div>
      </section>

      {/* 5. LE FEED BRUT DU SALON (Polaroids & Travaux réels, sans templates lisses) */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b-2 border-[#222222]">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-10">
            <span className="text-xs font-mono text-[#C9A227] tracking-widest uppercase block">
              PHOTOS RÉELLES DU SHOP • ZÉRO FILTRE
            </span>
            <h2 className="font-display text-5xl sm:text-7xl text-[#EBE8E1] tracking-tight uppercase mt-1">
              SUR LE FAUTEUIL À AKWA
            </h2>
          </div>

          {/* Disposition déstructurée de photos avec légendes feutre */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Photo 1 : Dégradé à blanc net (7 cols) */}
            <div className="md:col-span-7 bg-[#141414] border-2 border-[#2A2A2A] p-3 rotate-[-1deg]">
              <div className="relative h-[380px] sm:h-[480px] overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=80"
                  alt="Skin fade net"
                  className="w-full h-full object-cover filter contrast-125 brightness-95"
                />
                <div className="absolute top-3 left-3 bg-[#0A0A0A] border border-[#C9A227] px-2 py-1 text-[11px] font-mono text-[#C9A227]">
                  SKIN FADE • 20 MIN DE TRAVAIL
                </div>
              </div>
              <div className="p-3 font-mono text-xs flex justify-between items-center text-[#888888]">
                <span>COUPE : Junior &quot;Le Chirurgien&quot;</span>
                <span className="text-[#EBE8E1]">Fauteuil N° 1</span>
              </div>
            </div>

            {/* Photo 2 & 3 : Colonne de droite (5 cols) */}
            <div className="md:col-span-5 space-y-6">
              
              <div className="bg-[#141414] border-2 border-[#2A2A2A] p-3 rotate-[1.5deg]">
                <div className="relative h-64 overflow-hidden bg-black">
                  <img
                    src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=800&q=80"
                    alt="Contour rasoir"
                    className="w-full h-full object-cover filter contrast-125"
                  />
                </div>
                <div className="p-2 font-mono text-xs text-[#888888]">
                  <span>CONTOURS FRONTAUX AU COUPE-CHOU</span>
                </div>
              </div>

              <div className="bg-[#141414] border-2 border-[#2A2A2A] p-3 rotate-[-1deg]">
                <div className="relative h-64 overflow-hidden bg-black">
                  <img
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80"
                    alt="Salon intérieur Akwa"
                    className="w-full h-full object-cover filter contrast-125 brightness-90"
                  />
                </div>
                <div className="p-2 font-mono text-xs text-[#888888]">
                  <span>L&apos;ESPACE SALON • CLIM 18°C &amp; FAUTEUILS CUIR</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. AVIS STYLE SCREENSHOTS CONVERSATION WHATSAPP (100% Street Douala) */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b-2 border-[#222222] bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto">
          
          <div className="mb-10 text-center">
            <span className="text-xs font-mono text-[#C9A227] tracking-widest uppercase block">
              CE QUE LES GARS DISENT LE LENDEMAIN
            </span>
            <h2 className="font-display text-5xl sm:text-6xl text-[#EBE8E1] tracking-tight uppercase mt-1">
              MESSAGES REÇUS SUR WHATSAPP
            </h2>
          </div>

          {/* Interface Chat WhatsApp Sombre */}
          <div className="border-2 border-[#222222] bg-[#0B141A] p-4 md:p-8 space-y-4 font-sans max-w-3xl mx-auto shadow-[8px_8px_0px_#111111]">
            
            {/* Header chat */}
            <div className="border-b border-[#222D34] pb-3 flex items-center justify-between text-xs text-[#8696A0]">
              <span className="font-mono text-[#E9EDEF] font-bold">DISCUSSION RÉCENTE : CLIENTS SALON</span>
              <span>AUJOURD&apos;HUI</span>
            </div>

            {/* Message 1 */}
            <div className="flex flex-col items-start max-w-[88%]">
              <div className="bg-[#202C33] text-[#E9EDEF] p-3.5 rounded-br-lg rounded-tr-lg rounded-bl-none text-sm leading-relaxed border border-[#2A3942]">
                <p className="font-bold text-[#53BDEB] text-xs mb-1">Marc (Akwa Nord)</p>
                Gars, la ligne que Junior m&apos;a calée samedi pour la dot au Prince de Galles... Tout le monde au cocktail m&apos;a demandé le contact du barber. Même ma belle-mère a validé net. Respect chef.
                <span className="text-[10px] text-[#8696A0] block text-right mt-1 font-mono">14:22 ✓✓</span>
              </div>
            </div>

            {/* Réponse du salon */}
            <div className="flex flex-col items-end w-full">
              <div className="bg-[#005C4B] text-[#E9EDEF] p-3 rounded-bl-lg rounded-tl-lg rounded-br-none text-sm max-w-[80%] border border-[#02735E]">
                Merci frérot ! La prochaine fois viens 15 min plus tôt avant le week-end, la clim et ton fauteuil t&apos;attendent. 💈
                <span className="text-[10px] text-[#8696A0] block text-right mt-1 font-mono">14:25 ✓✓</span>
              </div>
            </div>

            {/* Message 2 */}
            <div className="flex flex-col items-start max-w-[88%] pt-2">
              <div className="bg-[#202C33] text-[#E9EDEF] p-3.5 rounded-br-lg rounded-tr-lg rounded-bl-none text-sm leading-relaxed border border-[#2A3942]">
                <p className="font-bold text-[#00A884] text-xs mb-1">Kader T. (Bonamoussadi)</p>
                J&apos;ai pris le taxi depuis Bonamoussadi juste pour tester votre dégradé espagnol. Franchement Yannick ne rigole pas avec la tondeuse. Zéro coupure, la serviette chaude à la fin apaise direct. Je suis abonné chez vous maintenant.
                <span className="text-[10px] text-[#8696A0] block text-right mt-1 font-mono">Hier 19:40 ✓✓</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. LOCALISATION BRUTE DU SALON (Repères concrets d'Akwa) */}
      <section className="px-4 md:px-8 py-16 md:py-24 border-b-2 border-[#222222] bg-[#0E0E0E]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="bg-[#C9A227] text-[#0A0A0A] font-display text-xs px-2.5 py-0.5 font-bold tracking-widest uppercase inline-block mb-2">
                  ACCÈS DIRECT
                </span>
                <h2 className="font-display text-5xl sm:text-7xl text-[#EBE8E1] tracking-tight uppercase">
                  OÙ NOUS TROUVER
                </h2>
              </div>

              <div className="bg-[#0A0A0A] border-2 border-[#222222] p-6 space-y-4 font-mono text-sm">
                <div>
                  <span className="text-[#888888] block text-xs">ADRESSE PHYSIQUE :</span>
                  <p className="text-[#EBE8E1] text-base font-bold mt-0.5">
                    Boulevard de la Liberté, Akwa — Douala (237)
                  </p>
                </div>

                <div className="border-t border-[#1A1A1A] pt-3">
                  <span className="text-[#888888] block text-xs">REPÈRES CONCRETS :</span>
                  <p className="text-[#C9A227] mt-0.5">
                    En face de l&apos;ancienne Direction Orange, à 2 minutes du Rond-Point Soudanaise, juste à côté de la boulangerie Zepol.
                  </p>
                </div>

                <div className="border-t border-[#1A1A1A] pt-3 flex flex-col sm:flex-row justify-between gap-4">
                  <div>
                    <span className="text-[#888888] block text-xs">HORAIRES :</span>
                    <p className="text-[#EBE8E1] mt-0.5">Lun - Sam : 08h00 - 22h00</p>
                    <p className="text-[#888888]">Dimanche : 11h00 - 21h00</p>
                  </div>
                  <div>
                    <span className="text-[#888888] block text-xs">SÉCURITÉ :</span>
                    <p className="text-[#EBE8E1] mt-0.5">Parking surveillé sur le boulevard</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppUrl("Salut, je suis en route pour le salon à Akwa. Vous êtes ouverts ?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C9A227] hover:bg-[#E0B838] text-[#0A0A0A] font-display text-xl tracking-wider py-3.5 px-6 uppercase text-center font-black"
                >
                  PASSER DIRECTEMENT AU SALON
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Boulevard+de+la+Liberte+Akwa+Douala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#121212] hover:bg-[#1E1E1E] border border-[#333333] text-[#EBE8E1] font-display text-lg tracking-wider py-3.5 px-6 uppercase text-center"
                >
                  ITINÉRAIRE GOOGLE MAPS
                </a>
              </div>
            </div>

            {/* Affiche stylisée de localisation */}
            <div className="lg:col-span-5 bg-[#0A0A0A] border-2 border-[#C9A227] p-8 text-center relative overflow-hidden">
              <span className="text-[10px] font-mono tracking-widest text-[#888888] uppercase block">
                AKWA HEADQUARTERS
              </span>
              <h3 className="font-display text-6xl text-[#EBE8E1] uppercase mt-2">
                ELITE BARBER
              </h3>
              <p className="font-display text-3xl text-[#C9A227] uppercase mt-1">
                DOUALA 237
              </p>
              <div className="my-6 border-y-2 border-dashed border-[#222222] py-4 text-xs font-mono text-[#AAAAAA] space-y-1">
                <p>14 FAUTEUILS EN ROTATION</p>
                <p>LAMES STÉRILES SCELLÉES</p>
                <p>BOISSONS FRAÎCHES &amp; CLIM</p>
              </div>
              <p className="text-xs text-[#888888] font-mono">
                TÉL : +237 694 88 22 11
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 8. FOOTER URBAIN STREET */}
      <footer className="px-4 md:px-8 py-8 bg-[#080808] text-xs font-mono text-[#666666]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2018-2026 ELITE BARBER AKWA — TOUS DROITS RÉSERVÉS (DOUALA, CM)</p>
          <p className="text-[#C9A227]">AKWA STREET EDITION • 100% VRAI SALON</p>
        </div>
      </footer>

      {/* 9. BOUTON FLOTTANT WHATSAPP (Bloc brut sans arrondi) */}
      <div className="fixed bottom-4 right-4 z-50">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20BD5A] text-[#0A0A0A] font-display text-base md:text-lg tracking-wider px-4 py-3 uppercase font-black flex items-center gap-2 border-2 border-black shadow-[4px_4px_0px_#FFFFFF]"
        >
          <span className="w-2.5 h-2.5 bg-[#0A0A0A] rounded-full animate-ping"></span>
          <span>ÉCRIRE SUR WHATSAPP</span>
        </a>
      </div>

    </div>
  );
}
