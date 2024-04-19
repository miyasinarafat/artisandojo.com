import Image from 'next/image'
import Link from 'next/link'

import { Whoyouare } from '@/components/Whoyouare'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
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


import talismik from '@/images/works/talismik.png'
import lulubuy from '@/images/works/lulubuy.jpg'
import valodam from '@/images/works/valodam.jpg'
import iot2market from '@/images/works/iot2market.png'
import nSales from '@/images/works/nSales.jpeg'

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
import clsx from "clsx";
import {GridPattern} from "@/components/GridPattern";

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

const works = [
    {
        logo: talismik,
        href: 'https://talismik.com/',
        client: 'Talismik',
        date: '2024',
        title: 'Your Gateway to Unbeatable Deals on Every Product',
        description: 'Discover the ultimate shopping destination at Talismik, where you\'ll find a diverse range of products at prices that defy the market.',
    },
    {
        logo: lulubuy,
        href: 'https://lulubuy.lu/',
        client: 'Lulubuy',
        date: '2023',
        title: 'E-Commerce Mastery: Revolutionizing B2B and B2C Distribution',
        description: 'Explore Lulubuy\'s unrivaled e-commerce solutions, from flawless B2B/B2C distribution to expert Amazon Vendor Central delegation.',
    },
    {
        logo: valodam,
        href: 'https://www.valodam.com/',
        client: 'Valodam',
        date: '2023',
        title: 'Online B2C Market in Bangladesh',
        description: 'Valodam provides top-quality products, great prices, fast delivery, and exceptional customer support. Your go-to online shopping destination in Bangladesh!',
    },
    {
        logo: iot2market,
        href: 'https://www.iot2market.com/',
        client: 'IoT2Market',
        date: '2020',
        title: 'A leading marketplace for the IoT ecosystem',
        description: 'IoT2Market connects local and global buyers and suppliers, guiding them through the jungle of IoT products and services worldwide.',
    },
    {
        logo: nSales,
        href: 'https://nsales.dk/',
        client: 'nSales',
        date: '2019',
        title: 'A leader in sales optimizing solutions for the B2B/B2C industry',
        description: 'nSales sales order management tool and B2B & B2C e-commerce solutions boost global sales, enhance customer satisfaction, cut order errors, and reduce administrative tasks.',
    },
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

function Works({ works }) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
            Together with our clients, we&apos;ve accomplished amazing things.
            Here are some of the organizations that make our work exciting and rewarding.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {works.map((work) => (
            <FadeIn key={work.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={work.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                      <Image
                          src={work.logo}
                          alt={work.client}
                          className="h-16 w-16 rounded-2xl"
                          unoptimized
                      />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={work.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {work.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>{work.client}</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {work.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {work.description}
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
                unoptimized
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Marketplace Data Integration">
              Automate your reporting to gain better insights into sales, inventory, and more by connecting with your favorite tools.
            </ListItem>
            <ListItem title="E-commerce">
              We custom design your Shopify/E-commerce store to match your brand vision.
              Our team utilizes our proprietary project management process to bring your brand to life and keep projects on time.
            </ListItem>
            <ListItem title="Custom Software Development">
              Develop custom web applications tailored to meet your unique challenges and transform them into profitable SaaS/Subscription/Marketplace products.
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
            className="peer block w-full border-0 border-b border-neutral-300 bg-transparent pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none"
        />
        <label
            htmlFor={id}
            className="pointer-events-none absolute top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
        >
          {label}
        </label>
      </div>
  )
}
function TextareaInput({ label, ...props }) {
  let id = useId()

  return (
      <div className="group relative z-0 transition-all focus-within:z-10">
        <textarea
            rows="2"
            id={id}
            {...props}
            placeholder=""
            className="peer block w-full border-0 border-b border-neutral-300 bg-transparent pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none"
        >
        </textarea>
        <label
            htmlFor={id}
            className="pointer-events-none absolute top-8 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
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
            <h2 className="font-display text-base font-semibold text-neutral-950">
                Work inquiries
            </h2>
            <form className="space-y-10 mt-6 p-6 bg-white border border-neutral-300 rounded-t-2xl rounded-b-2xl">
                <div>
                    <h3 className="font-display text-xl">
                        To begin, could you please <strong>describe your solution idea</strong> or a problem you are facing? *
                    </h3>
                    <p className="text-base text-neutral-600">Tell us about your ideas, challenges, or the specific solution you&apos;re looking for. The more we know, the better we can assist you.</p>
                    <TextareaInput label="Message *" name="message"/>
                </div>
                <div>
                    <h3 className="font-display text-xl">
                        Do you have an <strong>estimated budget</strong> for this project?
                    </h3>
                    <p className="text-base text-neutral-600">Even if you&apos;re not sure about the exact amount, giving us a rough estimate helps us understand your expectations.</p>
                    <fieldset className="mt-2">
                        <legend className="text-base text-neutral-500">Budget</legend>
                        <div className="mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2">
                            <RadioInput label="$3K – $10K" name="budget" value="3-10"/>
                            <RadioInput label="$10K – $25K" name="budget" value="10-25"/>
                            <RadioInput label="$25K – $100K" name="budget" value="25-100"/>
                            <RadioInput label="More than $100K" name="budget" value="over-100"/>
                        </div>
                    </fieldset>
                </div>
                <div>
                    <h3 className="font-display text-xl">
                        <strong>Please tell us a bit about yourself. *</strong>
                    </h3>
                    <p className="text-base text-neutral-600">We value your privacy and assure you that your data will remain confidential. We never share information with third parties.</p>
                    <TextInput label="Name *" name="name" autoComplete="name"/>
                    <TextInput label="Email *" type="email" name="email" autoComplete="email"/>
                    <TextInput label="Phone" type="tel" name="phone" autoComplete="tel"/>
                    <TextInput label="Company" name="company" autoComplete="organization"/>
                </div>
                <button type="submit" className="mt-10 bg-neutral-950 text-white px-4 py-2 rounded hover:bg-neutral-700">
                    Let’s work together
                </button>
            </form>
        </FadeIn>
    );
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

function Testimonial({ children, client, className }) {
    return (
        <div
            className={clsx(
                'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
                className,
            )}
        >
            <GridPattern
                className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
                yOffset={-256}
            />
            <Container>
                <FadeIn>
                    <figure className="mx-auto max-w-4xl">
                        <blockquote className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                            <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                                {children}
                            </p>
                        </blockquote>
                        <figcaption className="mt-10 font-semibold text-neutral-950">
                            {client}
                        </figcaption>
                    </figure>
                </FadeIn>
            </Container>
        </div>
    )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
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

      <Works works={works} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client="Naimul Islam, CEO of Proficient IT Solutions"
      >
          Iyasin&apos;s software engineering skills and leadership have significantly enhanced our technical capabilities,
          driving growth and success across multiple complex projects in the competitive e-commerce landscape.
      </Testimonial>

      <Services />

      <Whoyouare />
      <Contactus />
    </>
  )
}
