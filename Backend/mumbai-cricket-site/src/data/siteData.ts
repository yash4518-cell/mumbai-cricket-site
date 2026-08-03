// All editable business content lives here.
// Swap text, links and numbers in this one file to re-skin the site for a different client.

export const siteData = {
  brand: {
    name: "Mumbai Cricket",
    handle: "@TheMumbaiCricket",
    tagline: "Live cricket, every maidan, every over.",
    youtubeUrl: "https://www.youtube.com/@TheMumbaiCricket/featured",
  },

  contact: {
    phone: "86526 54866",
    whatsapp: "918652654866",
    email: "book@mumbaicricket.live",
    location: "Mumbai, Maharashtra",
    availability: "Mon–Sun, 9 AM – 9 PM",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Coverages", href: "/coverages" },
    { label: "Past Streams", href: "/past-streams" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    eyebrow: "LIVE ON YOUTUBE",
    headline: "Mumbai's cricket,\ncalled ball by ball.",
    subhead:
      "We bring multi-camera live broadcasts to maidans across the city — from local league finals to corporate box-cricket days — so every six gets seen.",
    ctaPrimary: { label: "Watch Live Channel", href: "https://www.youtube.com/@TheMumbaiCricket/featured" },
    ctaSecondary: { label: "Book Your Match", href: "/contact" },
    stats: [
      { label: "Matches Covered", value: "180+" },
      { label: "Maidans Reached", value: "22" },
      { label: "Hours Streamed", value: "900+" },
      { label: "Subscribers", value: "12K+" },
    ],
  },

  about: {
    eyebrow: "WHO WE ARE",
    heading: "A broadcast crew built for gully-to-league cricket.",
    body:
      "Mumbai Cricket started as a phone propped on a tripod at Cross Maidan. Today we run a full outside-broadcast setup — multiple camera angles, on-screen scoring, live commentary and same-day highlights — for tournaments that never had a broadcaster before. Every stream carries the channel's growing audience straight to your event.",
    points: [
      {
        title: "Multi-camera coverage",
        description: "Bowler's end, square leg and a boundary cam, switched live so no wicket or six is missed.",
      },
      {
        title: "On-screen scoring",
        description: "Live scorecard overlay updated over by over, so viewers can follow without a commentary track.",
      },
      {
        title: "Built-in audience",
        description: "Every match streams to an existing subscriber base actively following Mumbai maidan cricket.",
      },
      {
        title: "Same-day highlights",
        description: "A short highlights cut goes up within hours, ready for your club or sponsor to share.",
      },
    ],
  },

  coverage: {
    eyebrow: "GROUNDS WE COVER",
    heading: "If there's a pitch, we'll set up beside it.",
    body:
      "Regular coverage across South Mumbai's maidans, suburban club grounds and turf venues — with setup for grounds not on this list on request.",
    grounds: [
      "Azad Maidan",
      "Cross Maidan",
      "Oval Maidan",
      "Shivaji Park",
      "MIG Cricket Club, Bandra",
      "Bandra Kurla Complex Grounds",
      "Cooperage Ground",
      "Dadar Union Ground",
      "Andheri Sports Complex",
      "Powai Turf Grounds",
    ],
  },

  streams: {
    eyebrow: "PAST BROADCASTS",
    heading: "Recent matches we've called live.",
    body: "A look at the coverage on the channel — tap through to watch any match in full.",
    matches: [
      {
        title: "Kanga League Semi-Final",
        ground: "Shivaji Park",
        format: "50-over",
        date: "Mar 2026",
        result: "Dadar Union won by 34 runs",
        tag: "LEAGUE",
      },
      {
        title: "Corporate Box Cricket Cup",
        ground: "BKC Grounds",
        format: "Box Cricket",
        date: "Feb 2026",
        result: "Finance XI won by 6 wickets",
        tag: "CORPORATE",
      },
      {
        title: "Mumbai Schools Trophy Final",
        ground: "Cross Maidan",
        format: "T20",
        date: "Jan 2026",
        result: "St. Xavier's won by 18 runs",
        tag: "SCHOOLS",
      },
      {
        title: "Sunday Maidan Premier League",
        ground: "Azad Maidan",
        format: "T20",
        date: "Jan 2026",
        result: "Colaba Colts won by 9 wickets",
        tag: "LEAGUE",
      },
      {
        title: "Bandra Turf Championship",
        ground: "MIG Cricket Club",
        format: "40-over",
        date: "Dec 2025",
        result: "Bandra Blues won by 5 wickets",
        tag: "TURF",
      },
      {
        title: "Republic Day Corporate Cup",
        ground: "Oval Maidan",
        format: "T20",
        date: "Jan 2026",
        result: "Tech Titans won by 22 runs",
        tag: "CORPORATE",
      },
    ],
  },

  services: {
    eyebrow: "BOOK A BROADCAST",
    heading: "Coverage packages for every kind of match day.",
    plans: [
      {
        name: "Single Match",
        price: "₹6,000",
        unit: "/ match",
        description: "One fixture, fully covered — ideal for a final or a one-off corporate game.",
        features: ["2-camera live stream", "On-screen scorecard", "Same-day highlights reel", "Posted to Mumbai Cricket channel"],
      },
      {
        name: "Tournament",
        price: "₹22,000",
        unit: "/ tournament",
        description: "Multi-day league or knockout coverage from the group stage through the final.",
        features: ["3-camera live stream", "Live commentary add-on", "Daily highlights", "Dedicated tournament playlist", "Sponsor branding on overlay"],
        featured: true,
      },
      {
        name: "Season Partner",
        price: "Custom",
        unit: "",
        description: "Ongoing coverage for a club or league across a full season.",
        features: ["Priority match-day scheduling", "Full-season highlights archive", "Custom overlay branding", "Monthly performance report"],
      },
    ],
  },

  testimonials: {
    eyebrow: "FROM THE ORGANISERS",
    quotes: [
      {
        quote:
          "Our league final finally had an audience beyond the boundary rope. Parents who couldn't travel watched every ball from home.",
        name: "Rajesh Kadam",
        role: "Secretary, Dadar Union Cricket Club",
      },
      {
        quote:
          "Booking took five minutes over WhatsApp and the crew was set up an hour before toss. The highlights reel was up before we'd left the ground.",
        name: "Farah Sheikh",
        role: "Tournament Director, Mumbai Schools Trophy",
      },
      {
        quote:
          "We used the stream to pitch sponsors for next season. Having real viewership numbers to show made that conversation a lot easier.",
        name: "Vikram Nair",
        role: "Organiser, Corporate Box Cricket Cup",
      },
    ],
  },

  contactSection: {
    eyebrow: "GET IN TOUCH",
    heading: "Have a match coming up? Let's cover it.",
    body: "Send over your fixture details — ground, date and format — and we'll confirm crew availability within a day.",
  },

  footer: {
    note: "Live cricket broadcasts from Mumbai's maidans.",
  },
};

export type SiteData = typeof siteData;
