import type { Locale } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy & Affiliate Disclosure | RefCodes Canada',
  description: 'Privacy policy and affiliate disclosure for RefCodes Canada. Learn how we protect your privacy and our referral partnerships.',
};

export default function PrivacyPage({
  params: { locale }
}: {
  params: { locale: Locale };
}) {
  const content = locale === 'fr' ? frenchContent : englishContent;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        {content.title}
      </h1>
      
      <div className="prose prose-gray max-w-none">
        {content.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              {section.heading}
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-lg">
        <p className="text-sm text-gray-600">
          {content.lastUpdated}
        </p>
      </div>
    </div>
  );
}

const englishContent = {
  title: 'Privacy Policy & Affiliate Disclosure',
  lastUpdated: 'Last updated: December 16, 2025',
  sections: [
    {
      heading: 'Affiliate Disclosure',
      content: [
        'RefCodes Canada participates in various referral and affiliate programs. When you sign up for services using our referral links or codes, we may earn a commission at no additional cost to you.',
        'These commissions help us maintain and improve our website, research new offers, and provide you with up-to-date information about referral programs.',
        'Our recommendations are based on our genuine experience and research. We will never recommend a service solely for the commission - every recommendation is made because we believe it offers real value to our users.'
      ]
    },
    {
      heading: 'Information We Collect',
      content: [
        'We do not collect any personal information directly from visitors to our website. We do not require registration, collect email addresses, or store any personal data.',
        'We use anonymized analytics (Google Analytics) to understand how visitors use our site, which helps us improve the user experience. This data is aggregated and cannot be used to identify individual users.',
        'When you click on our referral links, the destination website may set their own cookies and collect information according to their privacy policies.'
      ]
    },
    {
      heading: 'How We Use Information',
      content: [
        'The only information we collect is anonymized usage data through analytics tools. We use this information to:',
        '• Understand which content is most helpful to our visitors',
        '• Improve our website design and user experience',
        '• Identify technical issues and fix them',
        '• Make decisions about what new content to create'
      ]
    },
    {
      heading: 'Third-Party Services',
      content: [
        'Our website may contain links to third-party websites and services. Each of these services has their own privacy policies and data practices.',
        'When you use our referral links, you will be directed to external websites that may collect personal information according to their own privacy policies. We recommend reviewing the privacy policies of any service before providing personal information.',
        'We are not responsible for the privacy practices of external websites or services.'
      ]
    },
    {
      heading: 'Data Security',
      content: [
        'Since we do not collect personal information, there is minimal risk to your personal data from using our website.',
        'Our website is hosted on secure servers and uses HTTPS encryption for all communications.',
        'We regularly update our website software to ensure security best practices are maintained.'
      ]
    },
    {
      heading: 'Changes to This Policy',
      content: [
        'We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date.',
        'Continued use of our website after any changes constitutes acceptance of the new privacy policy.'
      ]
    },
    {
      heading: 'Contact Us',
      content: [
        'If you have questions about this privacy policy or our affiliate disclosure, you can contact us through our website or email.'
      ]
    }
  ]
};

const frenchContent = {
  title: 'Politique de confidentialité et divulgation d\'affiliation',
  lastUpdated: 'Dernière mise à jour : 16 décembre 2025',
  sections: [
    {
      heading: 'Divulgation d\'affiliation',
      content: [
        'CodesRéf Canada participe à divers programmes de parrainage et d\'affiliation. Lorsque vous vous inscrivez à des services en utilisant nos liens ou codes de parrainage, nous pouvons recevoir une commission sans frais supplémentaires pour vous.',
        'Ces commissions nous aident à maintenir et améliorer notre site web, rechercher de nouvelles offres et vous fournir des informations à jour sur les programmes de parrainage.',
        'Nos recommandations sont basées sur notre expérience et recherche authentiques. Nous ne recommanderons jamais un service uniquement pour la commission - chaque recommandation est faite parce que nous croyons qu\'il offre une valeur réelle à nos utilisateurs.'
      ]
    },
    {
      heading: 'Informations que nous collectons',
      content: [
        'Nous ne collectons aucune information personnelle directement des visiteurs de notre site web. Nous n\'exigeons pas d\'inscription, ne collectons pas d\'adresses courriel et ne stockons aucune donnée personnelle.',
        'Nous utilisons des analyses anonymisées (Google Analytics) pour comprendre comment les visiteurs utilisent notre site, ce qui nous aide à améliorer l\'expérience utilisateur. Ces données sont agrégées et ne peuvent pas être utilisées pour identifier des utilisateurs individuels.',
        'Lorsque vous cliquez sur nos liens de parrainage, le site web de destination peut définir ses propres cookies et collecter des informations selon leurs politiques de confidentialité.'
      ]
    },
    {
      heading: 'Comment nous utilisons les informations',
      content: [
        'Les seules informations que nous collectons sont des données d\'utilisation anonymisées via des outils d\'analyse. Nous utilisons ces informations pour :',
        '• Comprendre quel contenu est le plus utile à nos visiteurs',
        '• Améliorer la conception et l\'expérience utilisateur de notre site web',
        '• Identifier les problèmes techniques et les corriger',
        '• Prendre des décisions sur le nouveau contenu à créer'
      ]
    },
    {
      heading: 'Services tiers',
      content: [
        'Notre site web peut contenir des liens vers des sites web et services tiers. Chacun de ces services a ses propres politiques de confidentialité et pratiques de données.',
        'Lorsque vous utilisez nos liens de parrainage, vous serez dirigé vers des sites web externes qui peuvent collecter des informations personnelles selon leurs propres politiques de confidentialité. Nous recommandons de réviser les politiques de confidentialité de tout service avant de fournir des informations personnelles.',
        'Nous ne sommes pas responsables des pratiques de confidentialité des sites web ou services externes.'
      ]
    },
    {
      heading: 'Sécurité des données',
      content: [
        'Puisque nous ne collectons pas d\'informations personnelles, il y a un risque minimal pour vos données personnelles en utilisant notre site web.',
        'Notre site web est hébergé sur des serveurs sécurisés et utilise le cryptage HTTPS pour toutes les communications.',
        'Nous mettons régulièrement à jour notre logiciel de site web pour nous assurer que les meilleures pratiques de sécurité sont maintenues.'
      ]
    },
    {
      heading: 'Modifications de cette politique',
      content: [
        'Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Tout changement sera publié sur cette page avec une date mise à jour.',
        'L\'utilisation continue de notre site web après tout changement constitue l\'acceptation de la nouvelle politique de confidentialité.'
      ]
    },
    {
      heading: 'Nous contacter',
      content: [
        'Si vous avez des questions sur cette politique de confidentialité ou notre divulgation d\'affiliation, vous pouvez nous contacter via notre site web ou courriel.'
      ]
    }
  ]
};