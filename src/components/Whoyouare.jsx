import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import {SocialMedia} from "@/components/SocialMedia";
import {PersonalSocialMedia} from "@/components/PersonalSocialMedia";

export function Whoyouare() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Who's building ArtisanDojo?
            </h2>
            <p className="mt-10 text-center font-display text-sm tracking-wider text-white sm:text-left">
              Hi, <strong>I'm Iyasin</strong>. I've been building web <strong>applications for over 6 years</strong>.
              I've worked with startups, small businesses, and large enterprises to develop and scale their web applications.
              People call me a <strong>"Full Stack" engineer</strong> but I prefer to call myself a problem solver :)
            </p>
            <p className="mt-8 text-center font-display text-sm tracking-wider text-white sm:text-left">
              I started ArtisanDojo to help businesses build their <strong>E-commerce Marketplace presence</strong>, providing unique solutions that stand out and scale well.
            </p>
            <p className="mt-8 text-center font-display text-sm tracking-wider text-white sm:text-left">
              Also, I post relevant web development snippets and tips on <strong>my LinkedIn</strong> and occasionally shitpost
            </p>
            <div className="mt-8 border-t border-white/10 pt-8">
              <PersonalSocialMedia/>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
