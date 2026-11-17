"use client";

import { useMemo, useState } from "react";
import { Search, ShoppingBag, ShieldCheck, Globe2, Zap, ChevronDown, Menu, X, ArrowUpRight, Check, LockKeyhole, Cloud, Monitor, Sparkles, Plus, Minus, Trash2 } from "lucide-react";

const products = [
  { id: 1, name: "Endpoint Security Pro", type: "Cybersecurity", detail: "Advanced protection for everyday devices", price: 29, icon: ShieldCheck, tag: "POPULAR", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=85" },
  { id: 7, name: "Norton 360 Deluxe", type: "Antivirus", detail: "Antivirus and multi-device digital protection", price: 49, icon: ShieldCheck, tag: "ANTIVIRUS", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=85" },
  { id: 8, name: "Bitdefender Total Security", type: "Antivirus", detail: "Security suite for Windows, macOS, iOS and Android", price: 39, icon: ShieldCheck, tag: "ANTIVIRUS", image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=900&q=85" },
  { id: 9, name: "McAfee Total Protection", type: "Antivirus", detail: "Device security and web protection suite", price: 44, icon: ShieldCheck, tag: "ANTIVIRUS", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85" },
  { id: 10, name: "Trend Micro Maximum Security", type: "Antivirus", detail: "Protection for devices, privacy and online activity", price: 35, icon: ShieldCheck, tag: "ANTIVIRUS", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85" },
  { id: 12, name: "Avast Premium Security", type: "Antivirus", detail: "Real-time antivirus and online threat protection", price: 32, icon: ShieldCheck, tag: "ANTIVIRUS", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85" },
  { id: 3, name: "CloudVault Backup", type: "Cloud & Backup", detail: "Keep important files backed up", price: 49, icon: Cloud, tag: "CLOUD", image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=85" },
  { id: 4, name: "System Utility Suite", type: "Utilities", detail: "Helpful tools to keep your PC organised", price: 19, icon: Zap, tag: "UTILITY", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=85" },
  { id: 5, name: "Firewall Defender", type: "Cybersecurity", detail: "Network monitoring and firewall tools", price: 35, icon: ShieldCheck, tag: "SECURITY", image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=900&q=85" },
  { id: 6, name: "Workstation OS License", type: "Operating Systems", detail: "Operating system license category preview", price: 79, icon: Monitor, tag: "LICENSE", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85" },
];
const categories = ["All software", "Antivirus", "Cybersecurity", "Operating Systems", "Utilities", "Cloud & Backup"];

const antivirusBrands = [
  { name: "Bitdefender", country: "Romania", founded: "2001", website: "https://www.bitdefender.com/", logo: "https://cdn.simpleicons.org/bitdefender/FFFFFF" },
  { name: "Trend Micro", country: "Japan (headquarters)", founded: "1988", website: "https://www.trendmicro.com/", logo: "https://cdn.simpleicons.org/trendmicro/FFFFFF" },
  { name: "Avast", country: "Czech Republic", founded: "1988", website: "https://www.avast.com/", logo: "https://cdn.simpleicons.org/avast/FFFFFF" },
  { name: "McAfee", country: "United States", founded: "1987", website: "https://www.mcafee.com/", logo: "https://cdn.simpleicons.org/mcafee/FFFFFF" },
  { name: "Norton", country: "United States", founded: "1991", website: "https://www.norton.com/", logo: "https://cdn.simpleicons.org/norton/FFFFFF" },
];

const trendMicroProducts = [
  { name: "Antivirus+ Security", summary: "Essential protection against viruses, malware, ransomware and spyware.", devices: "Windows", link: "https://www.trendmicro.com/en_in/forHome/products/antivirus-plus.html", points: ["Antivirus and malware protection", "Ransomware defence", "Email scam protection"] },
  { name: "Internet Security", summary: "Advanced protection for your PC, online banking and family browsing.", devices: "Windows", link: "https://www.trendmicro.com/en_in/forHome/products/internet-security.html", points: ["AI-powered threat protection", "Pay Guard for safer transactions", "Parental controls"] },
  { name: "Maximum Security", summary: "Comprehensive protection for computers, phones and tablets.", devices: "Windows · Mac · Android · iOS · Chromebook", link: "https://www.trendmicro.com/en_in/forHome/products/maximum-security.html", points: ["Multi-device security", "Privacy and web threat protection", "Password management"] },
];

export default function Home() {
  const [category, setCategory] = useState("All software");
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState<{[key:number]:number}>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const shown = useMemo(() => products.filter(p => (category === "All software" || p.type === category) && (p.name + p.detail + p.type).toLowerCase().includes(query.toLowerCase())), [category, query]);
  const count = Object.values(cart).reduce((a,b)=>a+b,0);
  const subtotal = products.reduce((sum,p)=>sum+p.price*(cart[p.id]||0),0);
  const add = (id:number) => setCart(old=>({...old,[id]:(old[id]||0)+1}));
  const change = (id:number, delta:number) => setCart(old=>{const n=(old[id]||0)+delta; const next={...old}; if(n<=0) delete next[id]; else next[id]=n; return next;});

  return <main>
    <div className="topline"><span><Globe2 size={13}/> DIGITAL SOFTWARE MARKETPLACE</span><span>Built for a connected world <ArrowUpRight size={13}/></span></div>
    <header className="nav wrap">
      <a className="brand" href="#"><span className="brand-mark"><Sparkles size={20}/></span><span>Soft<span>Multiverse</span><small>ONE UNIVERSE. INFINITE SOFTWARE.</small></span></a>
      <nav className={menuOpen?"navlinks open":"navlinks"}>
        <a href="#catalog" onClick={()=>setMenuOpen(false)}>Explore software</a><a href="#security-brands" onClick={()=>setMenuOpen(false)}>Antivirus brands</a><a href="#why" onClick={()=>setMenuOpen(false)}>Why SoftMultiverse</a><a href="#footer" onClick={()=>setMenuOpen(false)}>Support</a>
      </nav>
      <div className="nav-actions"><button className="signin" onClick={()=>alert("Customer accounts will be enabled after secure authentication is connected.")}>Sign in</button><button className="cart-btn" onClick={()=>setCartOpen(true)}><ShoppingBag size={17}/> Cart <b>{count}</b></button><button className="mobile-menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen?<X/>:<Menu/>}</button></div>
    </header>

    <section className="hero wrap">
      <div className="hero-copy"><div className="eyebrow"><span className="pulse"/> YOUR DIGITAL WORLD, DISCOVERED</div>
        <h1>Find the right<br/><em>software universe.</em></h1>
        <p>Explore digital tools for security, productivity and more — all in one destination.</p>
        <div className="hero-cta"><a href="#catalog" className="primary">Explore marketplace <ArrowUpRight size={17}/></a><a href="#why" className="secondary">Discover our approach</a></div>
        <div className="trust-row"><span><ShieldCheck size={15}/> Security-minded</span><span><Globe2 size={15}/> Global vision</span><span><Zap size={15}/> Digital-first</span></div>
      </div>
      <div className="hero-art"><img className="hero-photo" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=90" alt="Digital earth and global technology network"/><div className="hero-photo-shade"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="planet"><div className="planet-core"><Sparkles size={48}/></div></div><div className="float-card card-a"><ShieldCheck/><span><b>Digital protection</b><small>Tools for safer devices</small></span></div><div className="float-card card-b"><Cloud/><span><b>Cloud essentials</b><small>Your files, in focus</small></span></div><div className="art-caption">SOFTWARE WITHOUT BORDERS <span>✦</span></div></div>
    </section>

    <section className="ticker"><div>CYBERSECURITY <i>✳</i> PRODUCTIVITY <i>✳</i> CLOUD TOOLS <i>✳</i> DIGITAL ESSENTIALS <i>✳</i> CYBERSECURITY <i>✳</i></div></section>

    <section className="catalog wrap" id="catalog"><div className="section-head"><div><div className="eyebrow">THE COLLECTION</div><h2>Explore the <em>marketplace.</em></h2><p>Browse software categories and discover tools for your digital life.</p></div><div className="catalog-count">CURATED CATEGORIES <b>06</b></div></div>
      <div className="catalog-tools"><div className="filters">{categories.map(c=><button key={c} onClick={()=>setCategory(c)} className={category===c?"filter active":"filter"}>{c}</button>)}</div><label className="search"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search software..."/></label></div>
      <div className="product-grid">{shown.map(p=>{const Icon=p.icon;return <article className="product" key={p.id}><div className="product-image"><img src={p.image} alt={`${p.name} software visual`} loading="lazy"/><div className="product-image-shade"/><div className="product-top"><div className="product-icon"><Icon size={24}/></div><span className="product-tag">{p.tag}</span></div></div><div className="product-type">{p.type}</div><h3>{p.name}</h3><p>{p.detail}</p><div className="product-bottom"><div><small>INDICATIVE PRICE</small><strong>${p.price.toFixed(2)} <small>USD</small></strong></div><button className="add-btn" onClick={()=>add(p.id)}><Plus size={16}/> Add</button></div></article>})}</div>
      {shown.length===0&&<div className="empty">No matching products. Try another search.</div>}
      <p className="demo-note">Catalogue and prices are sample content for preview only. No software license is currently offered for sale through this demo.</p>
    </section>


    <section className="brand-directory wrap" id="security-brands">
      <div className="section-head">
        <div><div className="eyebrow">SECURITY SOFTWARE MAKERS</div><h2>Explore antivirus <em>brands.</em></h2><p>Discover leading cybersecurity names from around the world.</p></div>
        <div className="catalog-count">BRAND DIRECTORY <b>05</b></div>
      </div>
      <div className="brand-grid">
        {antivirusBrands.map(brand => <a className="brand-card" href={brand.website} target="_blank" rel="noopener noreferrer" key={brand.name}>
          <div className="brand-logo"><img src={brand.logo} alt={brand.name + " logo"} loading="lazy"/></div>
          <div className="brand-info"><h3>{brand.name}</h3><p>{brand.country} · Since {brand.founded}</p><span>Official website <ArrowUpRight size={14}/></span></div>
        </a>)}
      </div>
      <p className="brand-disclaimer">Brand names and logos are shown for identification only. SoftMultiverse is not claiming an authorized partnership with these companies. Product sales will begin only after the relevant reseller permissions are approved.</p>
    </section>

    <section className="trend-showcase wrap" id="trend-micro">
      <div className="trend-heading">
        <div className="trend-brand-lockup">
          <img src="https://cdn.simpleicons.org/trendmicro/FFFFFF" alt="Trend Micro logo" loading="lazy"/>
          <span>OFFICIAL PRODUCT RANGE</span>
        </div>
        <div><div className="eyebrow">TREND MICRO · SECURITY SPOTLIGHT</div><h2>Protection for your <em>digital life.</em></h2><p>Explore selected Trend Micro home-security products. Product details link to Trend Micro's official India website.</p></div>
      </div>
      <div className="trend-product-grid">
        {trendMicroProducts.map((item, index) => <article className="trend-product-card" key={item.name}>
          <div className="trend-product-art">
            <div className="trend-product-orbit"></div>
            <img src="https://cdn.simpleicons.org/trendmicro/FFFFFF" alt="Trend Micro brand mark" loading="lazy"/>
            <span>0{index + 1} / HOME SECURITY</span>
          </div>
          <div className="trend-product-copy"><div className="trend-device">{item.devices}</div><h3>{item.name}</h3><p>{item.summary}</p>
            <ul>{item.points.map(point => <li key={point}><Check size={14}/>{point}</li>)}</ul>
            <a href={item.link} target="_blank" rel="noopener noreferrer">View official product <ArrowUpRight size={15}/></a>
          </div>
        </article>)}
      </div>
      <p className="trend-note">Product names and descriptions are provided for identification and discovery. SoftMultiverse is not an authorised Trend Micro reseller unless and until written approval is obtained. Purchases and subscriptions should be completed only through verified authorised channels.</p>
    </section>

    <section className="why" id="why"><div className="wrap why-inner"><div><div className="eyebrow">A BETTER WAY TO DISCOVER</div><h2>One destination.<br/><em>More possibilities.</em></h2><p>SoftMultiverse is being built around a simple idea: make discovering digital software clearer, more accessible and easier to navigate.</p></div><div className="benefits"><div><span>01</span><b>Clarity first</b><p>Clear product information and straightforward categories.</p></div><div><span>02</span><b>Trust matters</b><p>Our goal is to offer authentic products from verified sources.</p></div><div><span>03</span><b>Global outlook</b><p>A marketplace designed with international customers in mind.</p></div></div></div></section>

    <section className="newsletter wrap"><div className="newsletter-icon"><Sparkles/></div><div><div className="eyebrow">STAY IN THE LOOP</div><h2>The digital universe is expanding.</h2><p>More tools and categories are on the way.</p></div><a href="mailto:hello@softmultiverse.com" className="secondary">Contact the team <ArrowUpRight size={16}/></a></section>
    <footer id="footer"><div className="wrap foot"><a className="brand" href="#"><span className="brand-mark"><Sparkles size={20}/></span><span>Soft<span>Multiverse</span><small>ONE UNIVERSE. INFINITE SOFTWARE.</small></span></a><p>© 2026 SoftMultiverse. Marketplace preview.</p><div className="footer-links"><a href="mailto:hello@softmultiverse.com">Contact</a><a href="#why">About</a><a href="/privacy-policy">Privacy Policy</a><a href="/return-refund-policy">Return &amp; Refund</a></div></div><div className="wrap footnote">Product listings are illustrative placeholders. Availability, licensing, pricing, payment and delivery are not yet active.</div></footer>

    {cartOpen&&<div className="overlay" onClick={()=>setCartOpen(false)}><aside className="cart-panel" onClick={e=>e.stopPropagation()}><div className="cart-head"><div><small>YOUR SELECTION</small><h2>Shopping cart</h2></div><button onClick={()=>setCartOpen(false)}><X/></button></div>{count===0?<div className="cart-empty"><ShoppingBag size={32}/><h3>Your cart is empty</h3><p>Add products from the marketplace to see them here.</p></div>:<><div className="cart-items">{products.filter(p=>cart[p.id]).map(p=><div className="cart-item" key={p.id}><div><b>{p.name}</b><small>${p.price.toFixed(2)} USD · demo listing</small><div className="qty"><button onClick={()=>change(p.id,-1)}><Minus size={13}/></button><span>{cart[p.id]}</span><button onClick={()=>change(p.id,1)}><Plus size={13}/></button><button className="remove" onClick={()=>setCart(old=>{const n={...old};delete n[p.id];return n;})}><Trash2 size={14}/></button></div></div><strong>${(p.price*cart[p.id]).toFixed(2)}</strong></div>)}</div><div className="cart-total"><span>Demo subtotal</span><b>${subtotal.toFixed(2)} USD</b></div><button className="checkout" onClick={()=>alert("Checkout is a preview only. Payments and license delivery are not connected yet.")}>Checkout unavailable in preview</button><p className="cart-disclaimer">No payment will be taken. This is a storefront demonstration.</p></>}</aside></div>}
  </main>;
}
