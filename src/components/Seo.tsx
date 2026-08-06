import { Helmet } from 'react-helmet-async'

interface SeoProps {
  title: string
  description: string
  image?: string
}

export default function Seo({ title, description, image }: SeoProps) {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://stellerindustries.co.za'
  const ogImage = image || `${siteUrl}/og-default.jpg`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  )
}
