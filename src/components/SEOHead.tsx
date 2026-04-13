import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  path = '', 
  image,
  keywords = 'nihmathullah, nihmathullah azhar, web developer, web services, website design, web development, websites, web pages, landing pages, e-commerce websites, custom websites, professional web developer, web design, nihmathullah web services, react developer, front-end developer, full-stack developer, business websites, restaurant websites, online stores, creative writer, web applications, responsive websites, SEO optimized websites, affordable web design, portfolio, international web developer, global web services, worldwide web development, sri lanka web developer, colombo developer'
}: SEOHeadProps) => {
  const baseUrl = 'https://nihmathullah.com';
  const fullUrl = `${baseUrl}${path}`;
  const ogImage = image || `${baseUrl}/assets/img/logo.png`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tags
    const updateOrCreateMeta = (selector: string, attribute: string, content: string) => {
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (selector.includes('property=')) {
          meta.setAttribute('property', selector.split('"')[1]);
        } else {
          meta.setAttribute('name', selector.split('"')[1]);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute(attribute, content);
    };

    // Update basic meta tags
    updateOrCreateMeta('meta[name="description"]', 'content', description);
    updateOrCreateMeta('meta[name="keywords"]', 'content', keywords);
    updateOrCreateMeta('meta[name="author"]', 'content', 'Nihmathullah M. Azhar');
    updateOrCreateMeta('meta[name="robots"]', 'content', 'index, follow');
    updateOrCreateMeta('meta[name="language"]', 'content', 'English');

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Update OG tags
    updateOrCreateMeta('meta[property="og:title"]', 'content', title);
    updateOrCreateMeta('meta[property="og:description"]', 'content', description);
    updateOrCreateMeta('meta[property="og:url"]', 'content', fullUrl);
    updateOrCreateMeta('meta[property="og:image"]', 'content', ogImage);
    updateOrCreateMeta('meta[property="og:type"]', 'content', 'website');
    updateOrCreateMeta('meta[property="og:site_name"]', 'content', 'Nihmathullah M. Azhar');

    // Update Twitter tags
    updateOrCreateMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateOrCreateMeta('meta[name="twitter:title"]', 'content', title);
    updateOrCreateMeta('meta[name="twitter:description"]', 'content', description);
    updateOrCreateMeta('meta[name="twitter:image"]', 'content', ogImage);

    // Add geo tags for Sri Lanka
    updateOrCreateMeta('meta[name="geo.region"]', 'content', 'LK-11');
    updateOrCreateMeta('meta[name="geo.placename"]', 'content', 'Colombo, Sri Lanka');

    // Add or update structured data
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "name": "Nihmathullah M. Azhar",
          "url": baseUrl,
          "image": `${baseUrl}/assets/img/dp.png`,
          "jobTitle": "Web Developer & Writer",
          "worksFor": {
            "@type": "Organization",
            "name": "Nihmathullah Web Services"
          },
          "knowsAbout": ["Web Development", "Web Design", "React", "JavaScript", "Creative Writing"],
          "sameAs": [
            "https://www.linkedin.com/in/nihmathullahmazhar/",
            "https://github.com/nihmathullahmazhar",
            "https://www.instagram.com/_nihmathullah_/"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "LK",
            "addressLocality": "Colombo"
          }
        },
        {
          "@type": "Organization",
          "name": "Nihmathullah Web Services",
          "url": baseUrl,
          "logo": `${baseUrl}/assets/img/logo.png`,
          "description": "Professional web development and design services worldwide. Based in Sri Lanka, serving clients globally.",
          "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "LK",
            "addressLocality": "Colombo"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+94-72-204-0073",
            "contactType": "Customer Service",
            "email": "nihmathullahmazhar@gmail.com",
            "availableLanguage": ["English", "Tamil", "Sinhala"],
            "areaServed": "Worldwide"
          }
        },
        {
          "@type": "WebSite",
          "name": "Nihmathullah M. Azhar",
          "url": baseUrl,
          "description": description,
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        }
      ]
    };

    structuredDataScript.textContent = JSON.stringify(structuredData);

    // Cleanup function to reset when component unmounts
    return () => {
      document.title = 'Nihmathullah M. Azhar - Web Developer & Writer';
    };
  }, [title, description, fullUrl, ogImage, keywords]);

  return null;
};

export default SEOHead;