import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Reveal from '@/components/Reveal'
import { books } from '@/data/books'
import { journalPosts } from '@/data/journal'

export default function Home() {
  const featured = books.filter((b) => b.featured)
  const latestPost = journalPosts[0]

  return (
    <>
      <Helmet>
        <title>Meridian Press — Independent Publishing</title>
        <meta
          name="description"
          content="Independent publishing for literary fiction, essays, and cultural criticism."
        />
      </Helmet>

      {/* Masthead */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-content mx-auto px-8">
          <Reveal>
            <p className="text-xs text-terracotta tracking-masthead uppercase mb-6">Independent Publishing</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-ink leading-[0.95] tracking-tight max-w-4xl">
              Meridian<br />Press
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-warmgray text-lg md:text-xl leading-relaxed max-w-2xl">
              We publish literary fiction, essay collections, and cultural criticism — works that reward close reading and stay with you long after the last page.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="editorial-rule-thick max-w-content mx-auto" />

      {/* Featured Titles */}
      <section className="py-16 md:py-24">
        <div className="max-w-content mx-auto px-8">
          <Reveal>
            <div className="flex items-baseline justify-between mb-12">
              <h2 className="font-display text-sm text-terracotta tracking-masthead uppercase">Featured</h2>
              <Link to="/catalog" className="text-sm text-warmgray hover:text-ink transition-colors">
                View catalog &rarr;
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {featured.map((book, i) => (
              <Reveal key={book.id} delay={i * 0.1}>
                <Link to="/catalog" className="group block">
                  <div className="aspect-[3/4] bg-sand overflow-hidden mb-6">
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs text-terracotta tracking-editorial uppercase mb-2">{book.genre}</p>
                  <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink group-hover:text-terracotta transition-colors">
                    {book.title}
                  </h3>
                  <p className="mt-2 text-warmgray">{book.author}</p>
                  <p className="mt-3 text-warmgray/70 leading-relaxed max-w-md">{book.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Quote */}
      <section className="py-16 md:py-24 bg-sand/50">
        <div className="max-w-content mx-auto px-8">
          <Reveal>
            <blockquote className="max-w-3xl mx-auto text-center">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-ink leading-snug italic">
                &ldquo;A book should feel inevitable — as though it could not have been written any other way, by anyone else.&rdquo;
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="w-8 h-px bg-terracotta/40" />
                <p className="text-sm text-warmgray">Editorial Philosophy</p>
                <div className="w-8 h-px bg-terracotta/40" />
              </div>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Latest from Journal */}
      <section className="py-16 md:py-24">
        <div className="max-w-content mx-auto px-8">
          <Reveal>
            <div className="flex items-baseline justify-between mb-12">
              <h2 className="font-display text-sm text-terracotta tracking-masthead uppercase">From the Journal</h2>
              <Link to="/journal" className="text-sm text-warmgray hover:text-ink transition-colors">
                All entries &rarr;
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Link to="/journal" className="group block">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {latestPost.image && (
                  <div className="aspect-[4/3] bg-sand overflow-hidden">
                    <img
                      src={latestPost.image}
                      alt={latestPost.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                )}
                <div>
                  <p className="text-xs text-terracotta tracking-editorial uppercase mb-3">{latestPost.category} &middot; {latestPost.date}</p>
                  <h3 className="font-display text-3xl md:text-4xl font-semibold text-ink group-hover:text-terracotta transition-colors leading-tight">
                    {latestPost.title}
                  </h3>
                  <p className="mt-4 text-warmgray leading-relaxed">{latestPost.excerpt}</p>
                  <p className="mt-4 text-sm text-warmgray/60">By {latestPost.author}</p>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-ink/10">
        <div className="max-w-content mx-auto px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink leading-tight">
                Reading is an act of attention. We publish work that deserves it.
              </h2>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/catalog"
                  className="inline-flex items-center gap-2 bg-ink text-cream text-sm tracking-editorial px-7 py-3.5 hover:bg-ink/80 transition-colors duration-200"
                >
                  Browse the Catalog
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-ink/20 text-ink text-sm tracking-editorial px-7 py-3.5 hover:border-ink/40 transition-colors duration-200"
                >
                  Submit a Manuscript
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
