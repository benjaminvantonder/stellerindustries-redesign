import { Helmet } from 'react-helmet-async'

import Reveal from '@/components/Reveal'
import { journalPosts } from '@/data/journal'

export default function Journal() {
  return (
    <>
      <Helmet>
        <title>Journal — Meridian Press</title>
        <meta
          name="description"
          content="Essays, interviews, and cultural commentary from Meridian Press."
        />
      </Helmet>

      <div className="pt-32">
        <section className="py-16 md:py-24">
          <div className="max-w-content mx-auto px-8">
            <Reveal>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-[0.95] max-w-3xl">
                Journal
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-warmgray text-lg md:text-xl leading-relaxed max-w-2xl">
                Essays, interviews, and reflections on reading, writing, and the life of books.
              </p>
            </Reveal>
          </div>
        </section>

        <div className="editorial-rule max-w-content mx-auto" />

        <section className="py-16 md:py-24">
          <div className="max-w-content mx-auto px-8 space-y-16">
            {journalPosts.map((post, i) => (
              <Reveal key={post.id} delay={i * 0.06}>
                <article className="group">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-3">
                      <p className="text-xs text-terracotta tracking-editorial uppercase">{post.category}</p>
                      <p className="text-xs text-warmgray/50 mt-1">{post.date}</p>
                    </div>
                    <div className="md:col-span-9">
                      <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink group-hover:text-terracotta transition-colors leading-tight">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-warmgray leading-relaxed max-w-2xl">
                        {post.excerpt}
                      </p>
                      <p className="mt-3 text-sm text-warmgray/50">By {post.author}</p>
                    </div>
                  </div>
                  {i < journalPosts.length - 1 && (
                    <div className="mt-16 editorial-rule" />
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
