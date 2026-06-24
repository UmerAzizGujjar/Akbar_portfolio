import { Download, Mail } from "lucide-react"
import { profile } from "@/lib/portfolio-data"
import { GithubIcon, LinkedinIcon } from "./brand-icons"

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
            AA
          </span>
          <div>
            <p className="text-sm font-semibold">{profile.name}</p>
            <p className="text-xs text-muted-foreground">QA Engineer &bull; {profile.location}</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-2">
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={profile.socials.email}
            aria-label="Email"
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
          >
            <Mail className="size-4" />
          </a>
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-border px-3.5 py-2 text-xs font-medium text-foreground transition-colors hover:bg-accent"
          >
            <Download className="size-3.5" />
            CV
          </a>
        </div>
      </div>
    </footer>
  )
}
