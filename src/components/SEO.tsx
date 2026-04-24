import { Helmet } from 'react-helmet-async';
import { useLocale } from '../i18n';
import { content } from '../content';

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO = ({ title, description }: SEOProps) => {
  const { locale } = useLocale();
  const t = content[locale];
  const siteTitle = t.meta.siteTitle;
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} - ${t.meta.siteTagline}`;
  const defaultDesc = t.home.hero.subtitle;
  const metaDesc = description || defaultDesc;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDesc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};
