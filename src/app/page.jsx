import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

import amazon from '@/images/marketplaces/amazon.svg'
import walmart from '@/images/marketplaces/walmart.svg'
import etsy from '@/images/marketplaces/etsy.svg'
import shopify from '@/images/marketplaces/shopify.svg'
import ebay from '@/images/marketplaces/ebay.svg'
import zalando from '@/images/marketplaces/zalando.svg'
import kaufland from '@/images/marketplaces/kaufland.svg'
import aboutyou from '@/images/marketplaces/aboutyou.svg'
import {useId} from "react";
import {Button} from "@/components/Button";
import {Offices} from "@/components/Offices";
import {Border} from "@/components/Border";
import {SocialMedia} from "@/components/SocialMedia";

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

const marketplaces = [
  ['Amazon', amazon],
  ['Walmart', walmart],
  ['Etsy', etsy],
  ['Shopify', shopify],
  ['ebay', ebay],
  ['Zalando', zalando],
  ['About You', aboutyou],
  ['Kaufland', kaufland],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing people
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}
function Marketplaces() {
  return (
      <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
        <Container>
          <FadeIn className="flex items-center gap-x-8">
            <h2 className="text-center font-display text-2xl font-semibold tracking-wider text-white sm:text-left">
              Unleash your ecommerce marketplace potential
            </h2>
            <div className="h-px flex-auto bg-neutral-800" />
          </FadeIn>
          <FadeInStagger faster>
            <ul
                role="list"
                className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
            >
              {marketplaces.map(([marketplace, logo]) => (
                  <li key={marketplace}>
                    <FadeIn>
                      <Image className="bg-white p-2.5 rounded-2xl" src={logo} alt={marketplace} unoptimized />
                    </FadeIn>
                  </li>
              ))}
            </ul>
          </FadeInStagger>
        </Container>
      </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Marketplace Data Integration">
              Automate your reporting to gain better insights into sales, inventory, and more by connecting with your favorite tools.
            </ListItem>
            <ListItem title="E-commerce">
              We custom design your Shopify store to match your brand vision.
              Our team utilizes our proprietary project management process to bring your brand to life and keep projects on time.
            </ListItem>
            <ListItem title="Custom Software Development">
              Develop custom web applications tailored to meet your unique challenges and transform them into profitable SaaS/Subscription products.
            </ListItem>
            <ListItem title="Amazon SP-API Migration">
              Transition smoothly from Amazon MWS to the latest SP-API with our expert migration services.
            </ListItem>
            <ListItem title="Marketplace Data Extraction">
              Extract vital marketplace data with precision to better understand market trends and customer behavior.
            </ListItem>
            <ListItem title="Internal Workflow Automations">
              Automate manual processes to save time, reduce errors, and allow your team to concentrate on sales growth.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}


function TextInput({ label, ...props }) {
  let id = useId()

  return (
      <div className="group relative z-0 transition-all focus-within:z-10">
        <input
            type="text"
            id={id}
            {...props}
            placeholder=""
            className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
        />
        <label
            htmlFor={id}
            className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
        >
          {label}
        </label>
      </div>
  )
}

function RadioInput({ label, ...props }) {
  return (
      <label className="flex gap-x-3">
        <input
            type="radio"
            {...props}
            className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
        />
        <span className="text-base/6 text-neutral-950">{label}</span>
      </label>
  )
}

function ContactForm() {
  return (
      <FadeIn className="lg:order-last">
        <form>
          <h2 className="font-display text-base font-semibold text-neutral-950">
            Work inquiries
          </h2>
            <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
                <div>
                    <h2 className="text-left font-display text-2xl">
                        To begin, could you please <strong>describe your solution idea</strong> or a problem you are
                        facing?
                    </h2>
                    <p>Tell us about your ideas, challenges, or the specific solution you're looking for. The more we
                        know, the better we can assist you.</p>
                    <TextInput label="Message" name="message"/>
                </div>
                <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
                    <h2 className="text-left font-display text-2xl">
                        Do you have an <strong>estimated budget</strong> for this project?
                    </h2>
                    <p>Even if you're not sure about the exact amount, giving us a rough estimate helps us understand
                        your expectations.</p>
                    <fieldset>
                        <legend className="text-base/6 text-neutral-500">Budget</legend>
                        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                            <RadioInput label="$3K – $10K" name="budget" value="3-10"/>
                            <RadioInput label="$10K – $25K" name="budget" value="10-25"/>
                            <RadioInput label="$25K – $100K" name="budget" value="25-100"/>
                            <RadioInput label="More than $100K" name="budget" value="over-100"/>
                        </div>
                    </fieldset>
                </div>
                <div>
                    <h2 className="text-left font-display text-2xl">
                        <strong>Please tell us a bit about yourself.</strong>
                    </h2>
                    <p>We value your privacy and assure you that your data will remain confidential. We never share information with third parties.</p>
                    <TextInput label="Name" name="name" autoComplete="name"/>
                    <TextInput
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                    />
                    <TextInput label="Phone" type="tel" name="phone" autoComplete="tel"/>
                    <TextInput
                        label="Company"
                        name="company"
                        autoComplete="organization"
                    />
                </div>


            </div>
            <Button type="submit" className="mt-10">
                Let’s work together
            </Button>
        </form>
      </FadeIn>
  )
}

function ContactDetails() {
    return (
        <FadeIn>
            <h2 className="font-display text-base font-semibold text-neutral-950">
                Our offices
            </h2>
            <p className="mt-6 text-base text-neutral-600">
                Prefer doing things in person? We don’t but we have to list our
                addresses here for legal reasons.
            </p>

            <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2"/>

            <Border className="mt-10 pt-16">
                <ul role="list" className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <li>
                        <h2 className="font-display text-base font-semibold text-neutral-950">
                            Email us
                        </h2>
                        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
                            <div key="contact@artisandojo.com">
                                <dd>
                                    <Link
                                        href="mailto:contact@artisandojo.com"
                                        className="text-neutral-600 hover:text-neutral-950"
                                    >
                                        contact@artisandojo.com
                                    </Link>
                                </dd>
                            </div>
                        </dl>
                    </li>
                    <li>
                      <h2 className="font-display text-base font-semibold text-neutral-950">
                          Follow us
                      </h2>
                      <SocialMedia className="mt-6"/>
                  </li>
              </ul>
          </Border>
      </FadeIn>
  )
}

function Contactus() {
    return (
        <>
            <SectionIntro
                eyebrow="Contact us"
                title="Let’s work together"
                className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Tell us about your project, We can’t wait to hear from you.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-6xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Custom Solutions for your Ecommerce Marketplace Business
          </h1>
          <p className="max-w-4xl mt-6 text-xl text-neutral-600">
            We offer personalized software and automation solutions for your ecommerce marketplace business, crafted with
            technical expertise and genuine care for your success.
          </p>
        </FadeIn>
      </Container>

      <Marketplaces />
      {/*<Clients />*/}

      {/*<CaseStudies caseStudies={caseStudies} />*/}

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <Services />

      <ContactSection />
      <Contactus />
    </>
  )
}
