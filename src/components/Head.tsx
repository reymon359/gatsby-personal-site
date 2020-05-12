import React from 'react';
import Helmet from 'react-helmet';

type HeadProps = {
  title: string;
  description: string;
  image: string;
};

const Head: React.FC<HeadProps> = ({ title, description, image }) => (
  <Helmet>
    <html lang="en" amp />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="google-site-verification" content="TODO" />
  </Helmet>
);

export default Head;
