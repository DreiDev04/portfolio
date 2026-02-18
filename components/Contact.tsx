"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import config from "@/lib/config";

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formState);
  };

  return (
    <section id="contact" className="bg-background text-foreground">
      {/* HEADER */}
      <div className="border-b border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* SECTION NUMBER */}
          <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
              Section
            </span>
            <span className="text-6xl lg:text-7xl font-bold tracking-tighter text-foreground">
              03
            </span>
          </div>

          {/* HEADLINE */}
          <div className="lg:col-span-10 p-8 lg:p-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-4">
              Get in Touch
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter uppercase leading-[0.9] text-foreground">
              Let&apos;s Work
              <br />
              <span className="text-muted-foreground/40">Together</span>
            </h2>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-border">
        {/* LEFT: LABEL */}
        <div className="lg:col-span-2 border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Contact
          </span>
        </div>

        {/* CENTER: FORM */}
        <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-border">
          <form onSubmit={handleSubmit}>
            {/* NAME FIELD */}
            <div className="border-b border-border">
              <label className="block">
                <span className="block p-4 lg:px-8 lg:py-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground border-b border-border">
                  Your Name
                </span>
                <input
                  type="text"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full p-6 lg:px-8 lg:py-8 bg-transparent text-xl lg:text-2xl font-light text-foreground placeholder:text-muted-foreground/40 focus:outline-none"
                  required
                />
              </label>
            </div>

            {/* EMAIL FIELD */}
            <div className="border-b border-border">
              <label className="block">
                <span className="block p-4 lg:px-8 lg:py-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground border-b border-border">
                  Email Address
                </span>
                <input
                  type="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full p-6 lg:px-8 lg:py-8 bg-transparent text-xl lg:text-2xl font-light text-foreground placeholder:text-muted-foreground/40 focus:outline-none"
                  required
                />
              </label>
            </div>

            {/* MESSAGE FIELD */}
            <div className="border-b border-border">
              <label className="block">
                <span className="block p-4 lg:px-8 lg:py-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground border-b border-border">
                  Your Message
                </span>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="w-full p-6 lg:px-8 lg:py-8 bg-transparent text-xl lg:text-2xl font-light text-foreground placeholder:text-muted-foreground/40 focus:outline-none resize-none"
                  required
                />
              </label>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="group w-full flex items-center justify-between p-6 lg:px-8 lg:py-8 bg-foreground text-background hover:bg-primary transition-colors"
            >
              <span className="text-sm uppercase tracking-[0.2em] font-medium">
                Send Message
              </span>
              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        {/* RIGHT: CONTACT INFO */}
        <div className="lg:col-span-4 flex flex-col">
          {/* EMAIL */}
          <div className="p-8 lg:p-10 border-b border-border">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-4">
              Email
            </span>
            <a
              href="mailto:hello@johntacujan.dev"
              className="group flex items-center gap-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              hello@johntacujan.dev
            </a>
          </div>

          {/* LOCATION */}
          <div className="p-8 lg:p-10 border-b border-border">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-4">
              Location
            </span>
            <div className="flex items-center gap-3 text-lg font-medium text-foreground">
              <MapPin className="w-5 h-5" />
              Tarlac, Philippines
            </div>
          </div>

          {/* STATUS */}
          <div className="p-8 lg:p-10 border-b border-border">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-4">
              Availability
            </span>
            <div className="flex items-center gap-3">
              <span className={`w-2.5 h-2.5 rounded-full ${config.available ? "bg-emerald-500" : "bg-amber-500"}`} />
              <span className="text-lg font-medium text-foreground">
                {config.available ? "Open for new projects" : "Currently booked"}
              </span>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="p-8 lg:p-10 flex-1">
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-6">
              Connect
            </span>
            <div className="space-y-0">
              {config.socials.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-4 border-b border-border last:border-b-0 hover:text-primary transition-colors"
                >
                  <span className="text-base font-medium">{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="hidden lg:block lg:col-span-2 border-r border-border p-6" />
        <div className="lg:col-span-10 p-8 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <p className="text-muted-foreground max-w-md">
            Prefer a quick chat? Feel free to reach out on any of my social platforms.
          </p>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            © {new Date().getFullYear()} {config.name.full}
          </span>
        </div>
      </div>
    </section>
  );
}
