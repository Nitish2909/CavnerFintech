import { Helmet } from "react-helmet-async";

const Seo = ({ title, description, keywords, image, path }) => {
  const fullTitle = title ? `${title} | Cavner Fintech` : "Cavner Wealth & Fintech - Loans, Credit Cards & Investments in India";
  const desc = description || "Apply for personal loans, home loans, business loans, credit cards, and investment plans in India. Compare top banks, check CIBIL score, and get instant approval with Cavner Fintech.";
  const kw = keywords || "personal loan, home loan, business loan, credit card, CIBIL score, investment, India fintech";
  const url = `https://cavnerfintech.in${path || ""}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={kw} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default Seo;
