import { Helmet } from 'react-helmet-async'
import Reveal from '@/components/Reveal'
import { books } from '@/data/books'

export default function Catalog() {
  return (
    <>
      <Helmet>
        <title>Catalog — Meridian Press</title>
        <meta
          name="description"
          content="Browse our complete catalog of literary fiction, essays, and poetry."
        />
      </Helmet>

      <div className="pt-32">
        <section className="py-16 md:py-24">
          <div className="max-w-content mx-auto px-8">
            <Reveal>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-[0.95] max-w-3xl">
                Catalog
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-warmgray text-lg md:text-xl leading-relaxed max-w-2xl">
                Every title we&apos;ve published — each one selected, edited, and designed with the same care.
              </p>
            </Reveal>
          </div>
        </section>

        <div className="editorial-rule max-w-content mx-auto" />

        <section className="py-16 md:py-24">
          <div className="max-w-content mx-auto px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {books.map((book, i) => (
                <Reveal key={book.id} delay={i * 0.05}>
                  <article className="group">
                    <div className="aspect-[3/4] bg-sand overflow-hidden mb-5">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-xs text-terracotta tracking-editorial uppercase mb-1.5">{book.genre} &middot; {book.year}</p>
                    <h2 className="font-display text-xl font-semibold text-ink group-hover:text-terracotta transition-colors">
                      {book.title}
                    </h2>
                    <p className="mt-1 text-sm text-warmgray">{book.author}</p>
                    <p className="mt-3 text-sm text-warmgray/70 leading-relaxed">{book.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
