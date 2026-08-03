import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import SeamDivider from "./components/SeamDivider";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import SectionTag from "./components/SectionTag";
import CoveragesPage from "./pages/CoveragesPage";
import PastStreamsPage from "./pages/PastStreamsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

function HomeLinks() {
  return (
    <section className="bg-chalk-100 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-10 max-w-2xl">
          <SectionTag>EXPLORE</SectionTag>
          <h2 className="font-display uppercase text-3xl sm:text-4xl text-ink-900">
            Jump to the page you need.
          </h2>
          <p className="mt-4 text-ink-700 leading-relaxed">
            Browse our coverage areas, recent streams, service packages, or contact the team directly.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            to="/coverages"
            className="rounded-sm border border-chalk-200/50 bg-white px-6 py-7 hover:border-ball-500 hover:shadow-lg transition-all"
          >
            <p className="font-display uppercase text-sm tracking-[0.35em] text-ink-700">Coverages</p>
            <p className="mt-4 text-ink-900 font-semibold">Grounds we broadcast across Mumbai.</p>
          </Link>
          <Link
            to="/past-streams"
            className="rounded-sm border border-chalk-200/50 bg-white px-6 py-7 hover:border-ball-500 hover:shadow-lg transition-all"
          >
            <p className="font-display uppercase text-sm tracking-[0.35em] text-ink-700">Past Streams</p>
            <p className="mt-4 text-ink-900 font-semibold">Recent matches we’ve called live.</p>
          </Link>
          <Link
            to="/services"
            className="rounded-sm border border-chalk-200/50 bg-white px-6 py-7 hover:border-ball-500 hover:shadow-lg transition-all"
          >
            <p className="font-display uppercase text-sm tracking-[0.35em] text-ink-700">Services</p>
            <p className="mt-4 text-ink-900 font-semibold">Choose the right broadcast package.</p>
          </Link>
          <Link
            to="/contact"
            className="rounded-sm border border-chalk-200/50 bg-white px-6 py-7 hover:border-ball-500 hover:shadow-lg transition-all"
          >
            <p className="font-display uppercase text-sm tracking-[0.35em] text-ink-700">Contact</p>
            <p className="mt-4 text-ink-900 font-semibold">Book your match or ask a question.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <HomeLinks />
      <About />
      <div className="bg-chalk-100 text-ink-700/40">
        <SeamDivider />
      </div>
      <Testimonials />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-chalk-100">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coverages" element={<CoveragesPage />} />
          <Route path="/past-streams" element={<PastStreamsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
