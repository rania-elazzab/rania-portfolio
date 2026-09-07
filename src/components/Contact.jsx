import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-cream-2 to-rose-faint px-6 py-24 sm:py-32" id="contact">
      <div className="pointer-events-none absolute -right-24 top-0 size-96 rounded-full bg-rose-soft/50 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-96 rounded-full bg-rose/30 blur-[120px]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="reveal fade-up mb-14 flex flex-col items-center text-center">
          <Badge variant="soft" size="sm" className="mb-4 bg-white/70">08 / Contact · Let's work together</Badge>
          <h2 className="font-serif text-4xl font-bold leading-tight text-ink sm:text-5xl md:text-6xl">
            Have an idea?
            <br />
            <em className="bg-gradient-to-r from-berry to-plum-700 bg-clip-text font-serif italic text-transparent">
              Let's build it.
            </em>
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="reveal fade-right">
            <p className="mb-8 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Have an idea, project or collaboration in mind? Send me a message
              and let's start a conversation.
            </p>

            <a
              href="mailto:raniaelazzab31@gmail.com"
              className="group mb-10 flex items-center justify-between gap-4 rounded-2xl border border-line-soft bg-white p-5 shadow-[0_6px_18px_rgba(61,16,36,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(86,24,48,0.16)]"
            >
              <span className="flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-berry/12 to-rose/25 text-lg text-berry">
                  ✉
                </span>
                <span>
                  <small className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted">Email</small>
                  <strong className="text-sm text-ink">raniaelazzab31@gmail.com</strong>
                </span>
              </span>
              <ArrowUpRight className="size-5 text-berry transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="space-y-3">
              <a
                href="https://github.com/rania-elazzab"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 rounded-2xl border border-line-soft bg-white/70 p-4 transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                <span className="flex items-center gap-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                    className="size-6"
                  />
                  <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-ink">GitHub</span>
                </span>
                <span className="text-berry" aria-hidden>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/rania-el-azzab-29200742b"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-4 rounded-2xl border border-line-soft bg-white/70 p-4 transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                <span className="flex items-center gap-3">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn"
                    className="size-6"
                  />
                  <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-ink">LinkedIn</span>
                </span>
                <span className="text-berry" aria-hidden>↗</span>
              </a>
            </div>
          </div>

          <form
            className="reveal fade-left rounded-3xl border border-line-soft bg-white/80 p-7 shadow-[0_16px_44px_rgba(86,24,48,0.12)] backdrop-blur"
            action="https://formsubmit.co/raniaelazzab31@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New Portfolio Message" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Your name</Label>
                <Input id="name" type="text" name="name" placeholder="Enter your name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Your email</Label>
                <Input id="email" type="email" name="email" placeholder="Enter your email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                <span>Send message</span>
                <span aria-hidden>↗</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
