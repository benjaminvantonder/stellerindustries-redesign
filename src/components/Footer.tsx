import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="max-w-content mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
          <div>
            <Link to="/" className="font-display text-lg font-semibold text-ink tracking-editorial uppercase">
              Meridian Press
            </Link>
            <p className="mt-3 text-sm text-warmgray leading-relaxed max-w-xs">
              Independent publishing for literary fiction, essays, and cultural criticism.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/catalog" className="text-sm text-warmgray hover:text-ink transition-colors duration-200">
                    Catalog
                  </Link>
                </li>
                <li>
                  <Link to="/authors" className="text-sm text-warmgray hover:text-ink transition-colors duration-200">
                    Authors
                  </Link>
                </li>
                <li>
                  <Link to="/journal" className="text-sm text-warmgray hover:text-ink transition-colors duration-200">
                    Journal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/contact" className="text-sm text-warmgray hover:text-ink transition-colors duration-200">
                    Submissions
                  </Link>
                </li>
                <li>
                  <a href="mailto:submissions@meridianpress.com" className="text-sm text-warmgray hover:text-ink transition-colors duration-200">
                    submissions@meridianpress.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xs text-warmgray/50">
            &copy; {new Date().getFullYear()} Meridian Press. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
