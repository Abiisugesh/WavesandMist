import {
  Phone,
  Mail,
  MapPin,
  // Facebook,
  // Instagram,
  Globe,
} from "lucide-react";
import { WHATSAPP_NUMBER } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  const displayNumber = `+${WHATSAPP_NUMBER.slice(
    0,
    2
  )} ${WHATSAPP_NUMBER.slice(2, 7)} ${WHATSAPP_NUMBER.slice(7)}`;

  return (
    <footer className="bg-[#123f66] text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="font-display text-3xl text-white">
              Waves & Mist
            </h2>

            <p className="mt-4 leading-7 text-white/80">
              Discover the best Resorts, Villas, Homestays,
              Farm Stays, Estate Stays, Adventure Tours,
              Beaches and Waterfalls across
              Kanyakumari, Kerala and Tamil Nadu.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3 text-white/85">

              <li><a href="#home" className="hover:text-[#67e8f9] transition">Home</a></li>

              <li><a href="#about" className="hover:text-[#67e8f9] transition">About</a></li>

              <li><a href="#stays" className="hover:text-[#67e8f9] transition">Destinations</a></li>

              <li><a href="#book" className="hover:text-[#67e8f9] transition">Book Now</a></li>

              <li><a href="#owners" className="hover:text-[#67e8f9] transition">List Property</a></li>

            </ul>

          </div>

          {/* Popular Destinations */}

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Popular Destinations
            </h3>

            <ul className="space-y-3 text-white/85">

              <li>Kanyakumari</li>

              <li>Keeriparai</li>

              <li>Kalikesam</li>

              <li>Muttom</li>

              <li>Poovar</li>

              <li>Varkala</li>

              <li>Kerala</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-xl font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-5 text-white/85">

              <div className="flex gap-3">

                <Phone className="text-[#67e8f9]" size={20} />

                <span>{displayNumber}</span>

              </div>

              <div className="flex gap-3">

                <Mail className="text-[#67e8f9]" size={20} />

                <span>info@wavesmist.com</span>

              </div>

              <div className="flex gap-3">

                <MapPin className="text-[#67e8f9]" size={80} />

                <span>
                  1st Floor, 54C, Eraniel - Thuckala Rd, opposite to Court Complex JRD Complex, Thuckalay, Padmanabhapuram, Tamil Nadu 629175
                </span>

              </div>

              <div className="mt-6 flex gap-4">

                {/* <a href="#">
                  <Facebook className="hover:text-[#67e8f9]" />
                </a>

                <a href="#">
                  <Instagram className="hover:text-[#67e8f9]" />
                </a> */}

               

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/20">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-white/70 md:flex-row">

          <p>
            © {year} Waves & Mist. All Rights Reserved.
          </p>

          <p>
            Designed & Developed by
            <span className="ml-2 font-semibold text-[#67e8f9]">
              Waves & Mist
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
}