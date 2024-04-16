import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import {PersonalSocialMedia} from "@/components/PersonalSocialMedia";
import me from "@/images/me.jpg";
import Image from "next/image";

export function Whoyouare() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Who&apos;s building ArtisanDojo?
            </h2>
            <p className="mt-10 text-left font-display text-[0.9rem] text-neutral-300 leading-relaxed tracking-wider">
              Hi, <strong>I&apos;m Iyasin</strong>. I&apos;ve been building web <strong>applications for over 6 years</strong>.
              I&apos;ve worked with startups, small businesses, and large enterprises to develop and scale their web applications.
              People call me a <strong>&quot;Full Stack&quot; engineer</strong> but I prefer to call myself a problem solver :)
            </p>
            <p className="mt-8 text-left font-display text-[0.9rem] text-neutral-300 leading-relaxed tracking-wider">
              I started ArtisanDojo to help businesses build their <strong>E-commerce Marketplace presence</strong>, providing unique solutions that stand out and scale well.
            </p>
            <p className="mt-8 text-left font-display text-[0.9rem] text-neutral-300 leading-relaxed tracking-wider">
              Also, I post relevant web development snippets and tips on <strong>my LinkedIn</strong> and occasionally shitpost
            </p>
            <div className="mt-8 border-t border-white/10 pt-8">
              <PersonalSocialMedia/>
            </div>
          </div>
          <div>
            <FadeIn>
              <div className="group relative overflow-hidden rounded-3xl bg-neutral-100 flex w-full grayscale">
                <Image
                    alt=""
                    src={me}
                    className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                  <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                    Iyasin Arafat
                  </p>
                  <p className="mt-2 text-sm text-white">
                    Founder
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
