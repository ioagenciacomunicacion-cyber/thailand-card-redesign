"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import {
  Activity,
  ArrowDown,
  AtSign,
  BadgeDollarSign,
  BarChart3,
  Bookmark,
  CalendarCheck,
  CalendarClock,
  Camera,
  Check,
  Clapperboard,
  Copy,
  Eye,
  Facebook,

  FileCheck2,
  FileText,
  Heart,
  House,
  Landmark,
  Languages,
  Layers,
  Lightbulb,
  ListChecks,
  Mail,
  MapPin,
  Maximize2,
  MessageCircle,
  Mic,
  Plus,
  Radio,
  Rocket,
  RotateCcw,
  Send,
  Share2,
  Smartphone,
  Sparkles,
  ThumbsUp,
  UserPlus,
  Users,
  Wallet,
  X,
  Zap,
} from "lucide-react";

import { rateAssets } from "@/assets/rate-card";
import { LineIcon, WhatsAppIcon } from "@/components/brand-icons";

type Icon = ComponentType<{ className?: string; "aria-hidden"?: boolean }>;

const PRICE = "58,000";
const EMAIL = "collab@vanessameraki.com";
const PHONE = "+34 653 964 281";
const WHATSAPP = "https://wa.me/34653964281";
const LINE_ID = "@vanessameraki";
const LINE = "https://line.me/ti/p/~vanessameraki";

const channels = [
  [rateAssets.avatar_vanessa_jpg, "@vanessameraki", "178K", "https://instagram.com/vanessameraki"],
  [rateAssets.avatar_thailand_jpg, "@thailand.explores", "970K", "https://instagram.com/thailand.explores"],
  [rateAssets.avatar_bangkok_jpg, "@bangkok.explore", "670K", "https://instagram.com/bangkok.explore"],
  [rateAssets.avatar_antonio_jpg, "@antonioxederax", "20K", "https://instagram.com/antonioxederax"],
] as const;

const included: [Icon, string][] = [
  [Lightbulb, "Concept & script"],
  [Mic, "English voiceover"],
  [Clapperboard, "Shooting & editing"],
  [Smartphone, "Instagram Stories"],
  [Rocket, "30-day Spark Ads"],
  [Users, "Published on 4 accounts"],
];

const metrics: [Icon, string, string][] = [
  [Eye, "4.7M", "Views"],
  [Activity, "265.9K", "Interactions"],
  [UserPlus, "1.1K", "New followers"],
  [Heart, "139K", "Likes"],
  [Share2, "54.9K", "Shares"],
  [Bookmark, "9.2K", "Saves"],
];

const insightScreens = [
  [rateAssets.insight_01_general_insight_jpg, "General insight"],
  [rateAssets.insight_02_interactions_jpg, "Interactions"],
  [rateAssets.insight_03_top_countries_jpg, "Top countries"],
  [rateAssets.insight_04_top_cities_jpg, "Top cities"],
  [rateAssets.insight_05_top_age_ranges_jpg, "Age ranges"],
  [rateAssets.insight_06_gender_jpg, "Gender"],
  [rateAssets.insight_07_top_location_countries_jpg, "Location · countries"],
  [rateAssets.insight_08_top_location_cities_jpg, "Location · cities"],
] as const;

const scope: [Icon, string, string][] = [
  [Lightbulb, "Concept", "Based on your brief. You approve it first."],
  [MapPin, "Location", "Real places in Thailand."],
  [Clapperboard, "Editing", "Music, colour and English subtitles."],
  [Sparkles, "Styling", "Hair and makeup included."],
  [House, "Travel", "We live in Bangkok. No travel costs."],
  [RotateCcw, "Revisions", "1 on the script, 2 small ones on the video."],
  [ThumbsUp, "Metrics", "Views and likes stay public."],
];

const timeline: [Icon, string, string][] = [
  [FileText, "Script", "3 working days after the brief."],
  [Check, "Your approval", "One round of feedback."],
  [Camera, "Shoot", "In Bangkok, on a date we agree."],
  [Clapperboard, "Draft", "7 days after the shoot."],
  [RotateCcw, "Changes", "Up to 2, back in 2 working days."],
  [Send, "Publication", "On all 4 accounts."],
];

const terms: [Icon, string, string][] = [
  [Landmark, "Transfer", "Thai bank transfer. Prices without taxes."],
  [FileText, "Invoice", "From our Thai company."],
  [AtSign, "Tag", "Brand tagged in the first line."],
  [Clapperboard, "Video", "Used as delivered."],
];

const onRequest: [Icon, string][] = [
  [Layers, "More Stories"],
  [Zap, "Urgent draft (72h)"],
  [CalendarClock, "Usage after 30 days"],
  [Plus, "Extra platforms"],
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
] as const;

const navigation: [string, string, Icon][] = [
  ["offer", "Price", BadgeDollarSign],
  ["channels", "Reach", Radio],
  ["metrics", "Stats", BarChart3],
  ["timeline", "Steps", ListChecks],
  ["terms", "Terms", FileCheck2],
  ["contact", "Contact", MessageCircle],
];

function SectionHead({ number, title, phrase, copy }: { number: string; title: string; phrase?: string; copy?: string }) {
  return (
    <header className="section-head">
      <span className="section-index">{number}</span>
      <h2>{title}</h2>
      {phrase ? <p className="section-phrase">{phrase}</p> : null}
      {copy ? <p className="section-copy">{copy}</p> : null}
    </header>
  );
}

function Laurel({ flip = false }: { flip?: boolean }) {
  const leaves = Array.from({ length: 10 }).map((_, k) => {
    const t = k / 9;
    const x = (1 - t) ** 2 * 31 + 2 * (1 - t) * t * 10 + t * t * 26;
    const y = (1 - t) ** 2 * 90 + 2 * (1 - t) * t * 56 + t * t * 8;
    const s = 1 - 0.35 * t;
    return (
      <g key={k}>
        <ellipse cx={x - 5.5} cy={y - 1} rx={2.9 * s} ry={7.4 * s} transform={`rotate(-42 ${x - 5.5} ${y - 1})`} />
        <ellipse cx={x + 5} cy={y - 4} rx={2.7 * s} ry={6.8 * s} transform={`rotate(34 ${x + 5} ${y - 4})`} />
      </g>
    );
  });
  return (
    <svg className={flip ? "laurel laurel-flip" : "laurel"} viewBox="0 0 44 96" aria-hidden="true">
      <path d="M31 92 Q10 56 26 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <g fill="currentColor">{leaves}</g>
    </svg>
  );
}

export function RateCardPage() {
  const [activeInsight, setActiveInsight] = useState<number | null>(null);
  const [showNavigation, setShowNavigation] = useState(false);
  const [activeSection, setActiveSection] = useState("offer");
  const [copied, setCopied] = useState(false);
  const dialogClose = useRef<HTMLButtonElement>(null);
  const activeInsightItem = activeInsight === null ? undefined : insightScreens[activeInsight];

  // The bar only shows once the intro is behind you, and the active item is
  // the last section that has passed under the bar — no guessing, no jumps.
  useEffect(() => {
    const ids = navigation.map(([id]) => id);

    const onScroll = () => {
      const y = window.scrollY;
      const bar = document.querySelector<HTMLElement>(".section-nav");
      const edge = (bar?.offsetHeight ?? 0) + 24;

      setShowNavigation(y > window.innerHeight * 0.6 && activeInsight === null);

      let current = ids[0] ?? "offer";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= edge) current = id;
      }
      // The last block cannot reach the top of the screen: light it at the end.
      if (window.innerHeight + y >= document.documentElement.scrollHeight - 24) {
        current = ids[ids.length - 1] ?? current;
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [activeInsight]);


  // Lightbox: close with Escape, lock page scroll while open
  useEffect(() => {
    if (activeInsight === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiveInsight(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    dialogClose.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeInsight]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const a = document.createElement("textarea");
      a.value = EMAIL;
      document.body.appendChild(a);
      a.select();
      document.execCommand("copy");
      a.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="rate-page">
      {/* ---------- COVER ---------- */}
      <section className="rate-hero" aria-label="Thailand Privilege Card rate card">
        <img src={rateAssets.home_hero_png} alt="Vanessa Meraki at Wat Arun, Bangkok" className="hero-photo" fetchPriority="high" />
        <div className="hero-branding">
          <span>Rate card</span>
          <img src={rateAssets.home_logo_png} alt="Vanessa Meraki" className="hero-logo" />
        </div>
        <div className="hero-partnership">
          <p><span>Prepared for</span><strong>Amplify</strong></p>
          <div aria-hidden="true" />
          <p><span>Project for</span><img src={rateAssets.thailand_privilege_logo_png} alt="Thailand Privilege" className="hero-client" /></p>
        </div>
        <div className="hero-bottom">
          <div className="hero-reach">
            <div className="hero-accounts">
              {channels.map(([image, handle, followers]) => (
                <div key={handle}>
                  <img src={image} alt="" />
                  <span>{handle}</span>
                  <strong>{followers}</strong>
                </div>
              ))}
            </div>
            <p><strong>1.8M</strong><span>combined followers · 50M+ views a month</span></p>
          </div>
          <p className="hero-claim">The world's #1 Thailand travel account</p>
          <a href="#offer" className="hero-scroll" onClick={() => setShowNavigation(true)}>
            <span className="hero-scroll-ring"><ArrowDown aria-hidden /></span>
            <span>See the rate</span>
          </a>
        </div>
      </section>

      {/* ---------- STICKY BAR: 6 items, no side scroll ---------- */}
      <nav className={showNavigation ? "section-nav is-visible" : "section-nav"} aria-label="Sections">
        <div className="section-nav-track">
          {navigation.map(([id, label, NavIcon]) => (
            <a key={id} href={`#${id}`} className={activeSection === id ? "is-active" : ""} aria-current={activeSection === id ? "location" : undefined}>
              <NavIcon aria-hidden />
              <span>{label}</span>
            </a>
          ))}
        </div>
      </nav>

      <div className="rate-content">
        {/* ---------- 01 PRICE ---------- */}
        <section id="offer" className="content-section">
          <SectionHead number="01" title="One video. Three platforms." phrase="Four accounts. One price." copy="Your video goes live on all 4 accounts." />
          <div className="platform-chips">
            <span><Camera aria-hidden />Instagram Reels</span>
            <span><Smartphone aria-hidden />TikTok</span>
            <span><Facebook aria-hidden />Facebook Reels</span>

          </div>
          <div className="price-card">
            <div className="price-stage">
              <Laurel />
              <div><strong>{PRICE}</strong><span>THB</span></div>
              <Laurel flip />
            </div>
            <p className="price-note">Everything included:</p>
            <ul className="icon-list">
              {included.map(([ItemIcon, label]) => (
                <li key={label}><i className="ico"><ItemIcon aria-hidden /></i>{label}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------- 02 REACH ---------- */}
        <section id="channels" className="content-section reach-section">
          <SectionHead number="02" title="Four accounts. One price." copy="The biggest Instagram audience for Thailand travel." />
          <div className="reach-totals">
            <div><Laurel /><Users aria-hidden /><strong>1.8M</strong><span>Followers</span><Laurel flip /></div>
            <div><Laurel /><Eye aria-hidden /><strong>50M+</strong><span>Views a month</span><Laurel flip /></div>
          </div>
          <div className="channel-list">
            {channels.map(([image, handle, followers, href]) => (
              <a href={href} target="_blank" rel="noreferrer" key={handle}>
                <img src={image} alt="" />
                <span>{handle}</span>
                <b>{followers}</b>
              </a>
            ))}
          </div>
        </section>

        {/* ---------- 03 STATS ---------- */}
        <section id="metrics" className="content-section">
          <SectionHead number="03" title="Real numbers." copy="From the @vanessameraki dashboard. Tap to enlarge." />
          <div className="metric-grid">
            {metrics.map(([MetricIcon, value, label]) => (
              <div key={label}>
                <MetricIcon aria-hidden />
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="insight-grid">
            {insightScreens.map(([image, label], index) => (
              <button type="button" key={label} className="insight-card" onClick={() => setActiveInsight(index)} aria-label={`Enlarge ${label}`}>
                <img src={image} alt={label} loading="lazy" />
                <span>{label}<Maximize2 aria-hidden /></span>
              </button>
            ))}
          </div>
        </section>

        {/* ---------- 04 INCLUDED ---------- */}
        <section id="included" className="content-section">
          <SectionHead number="04" title="Already in the price." />
          <div className="row-list">
            {scope.map(([ScopeIcon, title, copy]) => (
              <article key={title}>
                <i className="ico"><ScopeIcon aria-hidden /></i>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </section>

        {/* ---------- 05 STEPS ---------- */}
        <section id="timeline" className="content-section soft-section">
          <SectionHead number="05" title="How we work." copy="About 3 weeks." />
          <ol className="steps">
            {timeline.map(([StepIcon, title, copy], index) => (
              <li key={title}>
                <span className="step-no">{index + 1}</span>
                <div>
                  <h3><StepIcon aria-hidden />{title}</h3>
                  <p>{copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- 06 TERMS ---------- */}
        <section id="terms" className="content-section">
          <SectionHead number="06" title="Payment & usage." />
          <div className="pay-split">
            <div><Wallet aria-hidden /><strong>50%</strong><span>To start</span></div>
            <div><CalendarCheck aria-hidden /><strong>50%</strong><span>On delivery</span></div>
          </div>
          <div className="row-list">
            {terms.map(([TermIcon, title, copy]) => (
              <article key={title}>
                <i className="ico"><TermIcon aria-hidden /></i>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
          <h3 className="sub-title">Price on request</h3>
          <ul className="request-list">
            {onRequest.map(([ReqIcon, label]) => (
              <li key={label}><i className="ico"><ReqIcon aria-hidden /></i><span>{label}</span><em>On request</em></li>
            ))}
          </ul>
        </section>

        {/* ---------- 07 ABOUT ---------- */}
        <section className="content-section">
          <SectionHead number="07" title="Vanessa & Antonio" />
          <div className="row-list">
            <article><i className="ico"><Camera aria-hidden /></i><div><h3>A creator couple</h3><p>Vanessa on camera, Antonio behind it.</p></div></article>
            <article><i className="ico"><MapPin aria-hidden /></i><div><h3>Living in Bangkok</h3><p>Spanish and Italian, based in Bangkok. The exact profile of a Thailand Privilege member.</p></div></article>
            <article><i className="ico"><Languages aria-hidden /></i><div><h3>Three languages</h3><p>We speak English, Spanish and Italian.</p></div></article>
          </div>
          <h3 className="sub-title">Brands we've worked with</h3>
          <div className="brand-grid">
            {brandLogos.map(([image, label]) => <div key={label}><img src={image} alt={label} loading="lazy" /></div>)}
          </div>
        </section>

        {/* ---------- CONTACT ---------- */}
        <footer id="contact" className="rate-footer">
          <Sparkles aria-hidden />
          <h2>Let's create something amazing.</h2>
          <p className="footer-mail">{EMAIL}</p>
          <div className="footer-contact">
            <a className="footer-ghost" href={WHATSAPP} target="_blank" rel="noreferrer"><WhatsAppIcon />WhatsApp</a>
            <a className="footer-ghost" href={LINE} target="_blank" rel="noreferrer"><LineIcon />LINE</a>
            <a href={`mailto:${EMAIL}?subject=Thailand%20Privilege%20Card%20x%20Vanessa%20Meraki`}><Mail aria-hidden />Email us</a>
            <button type="button" onClick={copyEmail}>{copied ? <Check aria-hidden /> : <Copy aria-hidden />}{copied ? "Copied" : "Copy email"}</button>
          </div>
          <p className="footer-handles">{PHONE} · {LINE_ID}</p>
          <p className="footer-small">Vanessa & Antonio · Bangkok, Thailand<br />Rates valid for the 2026 campaign season.</p>
        </footer>
      </div>

      {/* ---------- LIGHTBOX ---------- */}
      {activeInsightItem ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={activeInsightItem[1]} onClick={(e) => e.target === e.currentTarget && setActiveInsight(null)}>
          <button ref={dialogClose} type="button" className="lightbox-close" onClick={() => setActiveInsight(null)} aria-label="Close"><X aria-hidden /></button>
          <figure>
            <img src={activeInsightItem[0]} alt={activeInsightItem[1]} />
            <figcaption>{activeInsightItem[1]}</figcaption>
          </figure>
        </div>
      ) : null}
    </main>
  );
}
