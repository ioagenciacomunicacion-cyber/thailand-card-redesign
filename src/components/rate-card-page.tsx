"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  Check,
  ChevronRight,
  FileCheck2,
  Instagram,
  ListChecks,
  Mail,
  Maximize2,
  MessageCircle,
  Radio,
  Sparkles,
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { rateAssets } from "@/assets/rate-card";

const platforms = [
  {
    id: "reels",
    label: "Reels",
    eyebrow: "Instagram Reels",
    title: "A cinematic, real-life story",
    copy: "One vertical video about premium, convenient long-term life in Thailand, published to the full network.",
    facts: ["English voiceover", "Colour grading + subtitles", "30-day paid usage on Instagram"],
  },
  {
    id: "tiktok",
    label: "TikTok",
    eyebrow: "TikTok",
    title: "Native reach, same production",
    copy: "The same campaign story is cross-posted for TikTok and includes a 30-day Spark Ads code.",
    facts: ["Vertical native edit", "Spark Ads code included", "Metrics remain public"],
  },
  {
    id: "stories",
    label: "Stories",
    eyebrow: "Instagram Stories",
    title: "The campaign, continued",
    copy: "A pack of Stories supports the main video and gives the audience a direct route into the campaign.",
    facts: ["Published alongside the video", "Designed in the same visual language", "Additional packs on request"],
  },
];

const channels = [
  [rateAssets.avatar_vanessa_jpg, "@vanessameraki", "178K", "https://instagram.com/vanessameraki"],
  [rateAssets.avatar_thailand_jpg, "@thailand.explores", "970K", "https://instagram.com/thailand.explores"],
  [rateAssets.avatar_bangkok_jpg, "@bangkok.explore", "670K", "https://instagram.com/bangkok.explore"],
  [rateAssets.avatar_antonio_jpg, "@antonioxederax", "20K", "https://instagram.com/antonioxederax"],
];

const metrics = [
  ["4.7M", "Views"], ["265.9K", "Interactions"], ["1.1K", "New followers"],
  ["139K", "Likes"], ["54.9K", "Shares"], ["9.2K", "Saves"],
];

const insightScreens = [
  [rateAssets.insight_01_general_insight_jpg, "General insight"],
  [rateAssets.insight_02_interactions_jpg, "Interactions"],
  [rateAssets.insight_03_top_countries_jpg, "Top countries"],
  [rateAssets.insight_04_top_cities_jpg, "Top cities"],
  [rateAssets.insight_05_top_age_ranges_jpg, "Top age ranges"],
  [rateAssets.insight_06_gender_jpg, "Gender"],
  [rateAssets.insight_07_top_location_countries_jpg, "Top location · countries"],
  [rateAssets.insight_08_top_location_cities_jpg, "Top location · cities"],
];

const scope = [
  ["Concept and storyline", "Premium, exclusive and convenient, as per your brief. Sent for approval before the shoot."],
  ["Shooting on location", "Real settings that show long-term living in Thailand."],
  ["Editing and subtitles", "Music, colour grading and English subtitles."],
  ["Hair, makeup and styling", "We arrive camera-ready."],
  ["No flights or accommodation", "We live in Bangkok. Nothing to charge here."],
  ["Revisions", "1 round on the script, up to 2 minor changes on the draft."],
  ["Metrics stay public", "Views and engagement remain visible on the post."],
];

const timeline = [
  ["Concept and script", "Within 3 working days of receiving the final brief."],
  ["Your approval", "One round of feedback before we shoot."],
  ["Shoot", "On location in Bangkok, on a date we agree."],
  ["Draft delivered", "Within 7 days of the shoot."],
  ["Revisions", "Up to 2 minor changes, returned within 2 working days."],
  ["Publication", "On the agreed date, across all four accounts."],
];

const legal = [
  ["Payment", "50% before production starts. 50% on delivery of the draft. Local Thai bank transfer to our Thai company. Rates quoted excluding taxes."],
  ["Invoicing", "Based in Bangkok and operating through our own Thai company. Invoicing and payment are handled locally, with all company documents supplied."],
  ["Usage", "Organic posting on all four accounts, 30-day Spark Ads code for TikTok and the same paid usage on Instagram. Brand tagged in the first caption line."],
  ["Price on request", "Usage beyond 30 days, urgent draft under 72 hours, additional Story packs and extra platforms."],
];

const brandLogos = [
  [rateAssets.brand_01_amazing_thailand_png, "Amazing Thailand"],
  [rateAssets.brand_02_iconsiam_png, "Iconsiam"],
  [rateAssets.brand_03_kbank_png, "KBank"],
  [rateAssets.brand_04_singha_png, "Singha"],
  [rateAssets.brand_05_aura_bangkok_clinic_png, "Aura Bangkok Clinic"],
  [rateAssets.brand_06_anantara_group_png, "Anantara Group"],
  [rateAssets.brand_07_banyan_tree_png, "Banyan Tree"],
  [rateAssets.brand_08_marriott_png, "Marriott"],
  [rateAssets.brand_09_hilton_png, "Hilton"],
  [rateAssets.brand_10_centralworld_png, "centralwOrld"],
  [rateAssets.brand_11_royal_jordanian_png, "Royal Jordanian"],
  [rateAssets.brand_12_alain_ducasse_paris_png, "Alain Ducasse Paris"],
];

const extras = [
  "Additional Stories pack",
  "Urgent draft · under 72h",
  "Usage beyond 30 days",
  "Extra platforms",
];

const navigation = [
  ["offer", "Oferta", BadgeDollarSign],
  ["channels", "Canales", Radio],
  ["metrics", "Métricas", BarChart3],
  ["terms", "Términos", FileCheck2],
  ["timeline", "Timeline", ListChecks],
  ["contact", "Contacto", MessageCircle],
] as const;

function SectionHead({ number, eyebrow, title, copy }: { number: string; eyebrow: string; title: string; copy?: string }) {
  return (
    <header className="section-head">
      <div className="section-index"><span>{number}</span><i /></div>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </header>
  );
}

function Laurel({ flip = false }: { flip?: boolean }) {
  return (
    <svg className={flip ? "laurel laurel-flip" : "laurel"} viewBox="0 0 44 96" aria-hidden="true">
      <path d="M31 92 Q10 56 26 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      {Array.from({ length: 10 }).map((_, index) => {
        const y = 88 - index * 8;
        const x = index < 5 ? 24 - index * 2 : 14 + (index - 5);
        return <ellipse key={y} cx={x} cy={y} rx="2.6" ry="6.5" transform={`rotate(-42 ${x} ${y})`} fill="currentColor" />;
      })}
    </svg>
  );
}

export function RateCardPage() {
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [activeInsight, setActiveInsight] = useState<number | null>(null);
  const [showNavigation, setShowNavigation] = useState(false);
  const [activeSection, setActiveSection] = useState("offer");
  const heroRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleExtra = (extra: string) => {
    setSelectedExtras((current) => current.includes(extra) ? current.filter((item) => item !== extra) : [...current, extra]);
  };

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const heroObserver = new IntersectionObserver(([entry]) => setShowNavigation(!entry?.isIntersecting), { threshold: 0.08 });
    heroObserver.observe(hero);
    const sections = navigation.map(([id]) => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section));
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveSection(visible.target.id);
    }, { rootMargin: "-22% 0px -62%", threshold: [0, 0.2, 0.6] });
    sections.forEach((section) => sectionObserver.observe(section));
    return () => { heroObserver.disconnect(); sectionObserver.disconnect(); };
  }, []);

  useEffect(() => {
    const activeLink = navRef.current?.querySelector<HTMLAnchorElement>(`a[href="#${activeSection}"]`);
    activeLink?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeSection]);

  return (
    <main className="rate-page">
      <section ref={heroRef} className="rate-hero" aria-label="Thailand Privilege Card rate card">
        <img src={rateAssets.hero_jpg} alt="Vanessa Meraki on a terrace at Wat Arun in Bangkok" className="hero-photo" fetchPriority="high" />
        <div className="hero-branding" aria-label="Vanessa Meraki rate card">
          <img src={rateAssets.vanessa_logo_png} alt="Vanessa Meraki" className="hero-logo" />
          <span>Rate card · 2026</span>
        </div>
        <div className="hero-bottom">
          <p className="eyebrow hero-kicker">Prepared for Amplify</p>
          <div className="hero-project">
            <span>Project for</span>
            <img src={rateAssets.thailand_privilege_logo_png} alt="Thailand Privilege" />
          </div>
          <div className="hero-reach">
            <div className="avatar-stack">
              {channels.map(([image, handle]) => <img key={handle} src={image} alt="" />)}
            </div>
            <p><strong>1.8M</strong><span>followers across 4 accounts</span></p>
          </div>
          <a href="#offer" className="hero-scroll" aria-label="See the rate"><ArrowDown /></a>
        </div>
      </section>

      <nav className={showNavigation ? "section-nav is-visible" : "section-nav"} aria-label="Rate card sections">
        <div ref={navRef} className="section-nav-track">
          {navigation.map(([id, label, Icon]) => (
            <a key={id} href={`#${id}`} className={activeSection === id ? "is-active" : ""} aria-current={activeSection === id ? "location" : undefined}>
              <Icon aria-hidden="true" /><span>{label}</span>
            </a>
          ))}
        </div>
      </nav>

      <div className="rate-content">
        <section id="offer" className="content-section offer-section">
          <SectionHead number="01" eyebrow="Content rate" title="One video. Both platforms." copy="A complete production, designed for premium long-term living in Thailand." />
          <div className="price-stage">
            <Laurel />
            <div><strong>66,000</strong><span>THB</span></div>
            <Laurel flip />
          </div>
          <p className="price-note">Concept, script, voiceover, shooting, editing, Instagram Stories and 30-day paid usage are already included.</p>

          <Tabs defaultValue="reels" className="platform-tabs">
            <TabsList className="platform-list">
              {platforms.map((platform) => <TabsTrigger key={platform.id} value={platform.id}>{platform.label}</TabsTrigger>)}
            </TabsList>
            {platforms.map((platform) => (
              <TabsContent key={platform.id} value={platform.id} className="platform-panel">
                <p className="eyebrow">{platform.eyebrow}</p>
                <h3>{platform.title}</h3>
                <p>{platform.copy}</p>
                <ul>{platform.facts.map((fact) => <li key={fact}><Check />{fact}</li>)}</ul>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <section id="channels" className="content-section reach-section">
          <SectionHead number="02" eyebrow="Built-in reach" title="Four accounts. One price." copy="Your video goes live across the largest Instagram audience in the world following Thailand travel and lifestyle content." />
          <div className="reach-totals"><div><strong>1.8M</strong><span>Combined followers</span></div><div><strong>50M+</strong><span>Views a month</span></div></div>
          <div className="channel-list">
            {channels.map(([image, handle, followers, href]) => (
              <a href={href} target="_blank" rel="noreferrer" key={handle}>
                <img src={image} alt="" /><span><strong>{handle}</strong><small>Instagram</small></span><b>{followers}</b><ChevronRight />
              </a>
            ))}
          </div>
        </section>

        <section id="metrics" className="content-section insight-section">
          <SectionHead number="03" eyebrow="Audience demographics" title="Proof, not promises." copy="Straight from the @vanessameraki Instagram dashboard. Swipe through and tap any screen to enlarge." />
          <div className="metric-grid">{metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
          <Carousel opts={{ align: "start", loop: true }} className="insight-carousel">
            <CarouselContent>
              {insightScreens.map(([image, label], index) => (
                <CarouselItem key={label} className="basis-[54%] sm:basis-1/3">
                  <Button variant="ghost" className="insight-card" onClick={() => setActiveInsight(index)} aria-label={`Enlarge ${label}`}>
                    <img src={image} alt={label} loading="lazy" />
                    <span>{label}<Maximize2 /></span>
                  </Button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="carousel-prev" />
            <CarouselNext className="carousel-next" />
          </Carousel>
        </section>

        <section className="content-section calculator-section">
          <SectionHead number="04" eyebrow="Build your campaign" title="Start with the full package." copy="Select anything extra you may need. Unpriced additions remain on request and are never guessed." />
          <div className="calculator-card">
            <div className="calculator-base"><span>Base campaign</span><strong>66,000 THB</strong></div>
            <div className="extra-list">
              {extras.map((extra) => {
                const selected = selectedExtras.includes(extra);
                return <Button key={extra} variant="ghost" onClick={() => toggleExtra(extra)} className={selected ? "extra-row is-selected" : "extra-row"}><span className="extra-check">{selected ? <Check /> : null}</span><b>{extra}</b><em>On request</em></Button>;
              })}
            </div>
            <div className="calculator-total"><span>Current base</span><strong>66,000 THB</strong><small>{selectedExtras.length ? `+ ${selectedExtras.length} item${selectedExtras.length > 1 ? "s" : ""} to quote` : "No extras selected"}</small></div>
            <Button asChild size="lg" className="quote-button"><a href="mailto:collab@vanessameraki.com?subject=Thailand%20Privilege%20Card%20x%20Vanessa%20Meraki">Request this package <ArrowRight /></a></Button>
          </div>
        </section>

        <section id="terms" className="content-section scope-section">
          <SectionHead number="05" eyebrow="Collaboration terms" title="Already in the price." />
          <div className="scope-grid">{scope.map(([title, copy]) => <article key={title}><Check /><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        </section>

        <section id="timeline" className="content-section process-section">
          <SectionHead number="06" eyebrow="Production & terms" title="Clear at every step." copy="From brief to publication, typically three weeks." />
          <Tabs defaultValue="timeline" className="detail-tabs">
            <TabsList className="detail-tabs-list"><TabsTrigger value="timeline">Timeline</TabsTrigger><TabsTrigger value="terms">Payment & usage</TabsTrigger></TabsList>
            <TabsContent value="timeline"><Accordion type="single" collapsible defaultValue="step-1" className="editorial-accordion">{timeline.map(([title, copy], index) => <AccordionItem value={`step-${index + 1}`} key={title}><AccordionTrigger><span className="step-no">0{index + 1}</span><span>{title}</span></AccordionTrigger><AccordionContent>{copy}</AccordionContent></AccordionItem>)}</Accordion></TabsContent>
            <TabsContent value="terms"><Accordion type="single" collapsible defaultValue="legal-0" className="editorial-accordion">{legal.map(([title, copy], index) => <AccordionItem value={`legal-${index}`} key={title}><AccordionTrigger><span>{title}</span></AccordionTrigger><AccordionContent>{copy}</AccordionContent></AccordionItem>)}</Accordion></TabsContent>
          </Tabs>
        </section>

        <section className="content-section about-section">
          <SectionHead number="07" eyebrow="Who you are booking" title="Vanessa & Antonio" copy="A creator couple working together on every production — Vanessa on camera, Antonio on production and editing." />
          <div className="about-copy"><p>Spanish and Italian, both living in Bangkok: <strong>the exact profile of a Thailand Privilege Card member.</strong> We work in English, Spanish and Italian.</p><p><b>Based in Bangkok.</b> Not visiting: we live here, on Sukhumvit. We know the city's locations. No flights or accommodation to charge you.</p><p><b>Our style.</b> Travel and lifestyle: elevated, cinematic, colour-rich. Long-term life in Thailand is already the heart of our content.</p></div>
          <h3 className="brands-title">Brands we have worked with</h3>
          <div className="brand-grid">{brandLogos.map(([image, label]) => <div key={label}><img src={image} alt={label} loading="lazy" /></div>)}</div>
        </section>

        <footer id="contact" className="rate-footer">
          <Sparkles /><h2>Let’s create something amazing.</h2>
          <p>Vanessa & Antonio · Bangkok, Thailand<br />Rates valid for the 2026 campaign season.</p>
          <div className="footer-contact">
            <Button asChild><a href="mailto:collab@vanessameraki.com"><Mail />Email</a></Button>
            <Button type="button" variant="outline" disabled aria-label="WhatsApp link pending"><MessageCircle />WhatsApp</Button>
            <Button type="button" variant="outline" disabled aria-label="LINE link pending"><MessageCircle />LINE</Button>
          </div>
          <a className="footer-instagram" href="https://instagram.com/vanessameraki" target="_blank" rel="noreferrer"><Instagram />@vanessameraki</a>
        </footer>
      </div>

      <Dialog open={activeInsight !== null} onOpenChange={(open) => { if (!open) setActiveInsight(null); }}>
        <DialogContent className="insight-dialog">
          <DialogTitle>{activeInsight === null ? "Insight" : insightScreens[activeInsight]?.[1]}</DialogTitle>
          <DialogDescription>Instagram audience dashboard</DialogDescription>
          {activeInsight !== null && insightScreens[activeInsight] ? <img src={insightScreens[activeInsight][0]} alt={insightScreens[activeInsight][1]} /> : null}
        </DialogContent>
      </Dialog>
    </main>
  );
}