import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Container } from "../ui/container";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-800 bg-dark-bg text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl text-gold">The Rooftop Haveli</p>
          <p className="mt-3 text-sm text-zinc-300">
            Premium rooftop dining in Mehsana with curated flavors and warm hospitality.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Explore</p>
          <div className="mt-3 space-y-2 text-sm text-zinc-300">
            <p>
              <Link href="/menu" className="hover:text-gold">
                Menu
              </Link>
            </p>
            <p>
              <Link href="/events" className="hover:text-gold">
                Events
              </Link>
            </p>
            <p>
              <Link href="/privacy-policy" className="hover:text-gold">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Connect</p>
          <div className="mt-4 flex items-center gap-4 text-xl">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-300 transition hover:text-gold"
            >
              <FaInstagram aria-label="Instagram" />
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-300 transition hover:text-gold"
            >
              <FaWhatsapp aria-label="WhatsApp" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
