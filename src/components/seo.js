import Head from 'next/head'
import config from '../config.ts'


function SEO({ description, title }) {
  const site = config;

  return (
    <Head>
      <title>{`${title} | ${site.title}`}</title>
      <meta name="description" content={description} />

      <link rel="shortcut icon" href={site.url + site.ico} />
      <link rel="apple-touch-icon" sizes="180x180" href={site.url + site.appleTouchIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={site.url + site.icon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={site.url + site.icon16} />
      <link rel="manifest" href={site.url + site.manifest} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={site.title} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={title} />

    </Head>
  )
}

export default SEO
