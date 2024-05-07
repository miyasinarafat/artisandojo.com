import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { MDXComponents } from '@/components/MDXComponents'
import { formatDate } from '@/lib/formatDate'
import Content from "./content.mdx";

const policy = {
  title: 'ArtisanDojo.com Terms and Conditions',
  description: 'Last updated on May 05, 2024',
}

export const metadata = {
  title: policy.title,
  description: policy.description,
}

export default async function PrivacyPolicy() {
  return (
      <>
        <Container as="article" className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <header className="mx-auto flex max-w-5xl flex-col text-center">
              <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
                {policy.title}
              </h1>
              <p className="mt-6 text-sm font-semibold text-neutral-950">
                {policy.description}
              </p>
            </header>
          </FadeIn>

          <FadeIn>
            <MDXComponents.wrapper className="mt-24 sm:mt-32 lg:mt-40">
              <Content/>
            </MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </>
  )
}
