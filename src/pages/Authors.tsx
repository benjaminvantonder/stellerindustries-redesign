import { Helmet } from 'react-helmet-async'
import Reveal from '@/components/Reveal'
import { authors } from '@/data/authors'

export default function Authors() {
  return (
    <>
      <Helmet>
        <title>Authors — Meridian Press</title>
        <meta
          name="description"
          content="The writers published by Meridian Press — voices that reward close reading."
        />
      </Helmet>

      <div className="pt-32">
        <section className="py-16 md:py-24">
          <div className="max-w-content mx-auto px-8">
            <Reveal>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-[0.95] max-w-3xl">
                Authors
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-warmgray text-lg md:text-xl leading-relaxed max-w-2xl">
                The writers we publish — each one chosen for the singularity of their voice and the depth of their craft.
              </p>
            </Reveal>
          </div>
        </section>

        <div className="editorial-rule max-w-content mx-auto" />

        <section className="py-16 md:py-24">
          <div className="max-w-content mx-auto px-8 space-y-24">
            {authors.map((author, i) => (
              <Reveal key={author.id} delay={i * 0.08}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                  <div className="aspect-[3/4] bg-sand overflow-hidden md:[direction:ltr]">
                    <img
                      src={author.portrait}
                      alt={author.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:[direction:ltr]">
                    <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
                      {author.name}
                    </h2>
                    <p className="mt-6 text-warmgray leading-relaxed text-lg">
                      {author.bio}
                    </p>
                    <div className="mt-6">
                      <p className="text-xs text-terracotta tracking-editorial uppercase mb-2">Titles</p>
                      <ul className="space-y-1">
                        {author.books.map((title) => (
                          <li key={title} className="text-ink font-display text-lg">
                            {title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
