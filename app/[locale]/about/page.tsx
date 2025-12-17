import type { Locale } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About RefCodes Canada | Canadian Referral Code Website',
  description: 'Learn about RefCodes Canada, your trusted source for the best Canadian referral codes and sign-up bonuses.',
};

export default function AboutPage({
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
    </div>
  );
}

const englishContent = {
  title: 'About RefCodes Canada',
  sections: [
    {
      heading: 'Our Mission',
      content: [
        'RefCodes Canada is your trusted source for the best Canadian referral codes and sign-up bonuses. We help Canadians save money by connecting them with legitimate referral programs from established financial and technology companies.',
        'Our goal is simple: help you get the most value from services you were already planning to use, while maintaining complete transparency about how these referral programs work.'
      ]
    },
    {
      heading: 'How We Choose Referral Programs',
      content: [
        'We only feature referral programs from reputable Canadian companies that we use ourselves. Every code and link on this site is personally tested and verified.',
        'We focus on programs with genuine value - those that offer substantial bonuses, have reasonable requirements, and come from companies with excellent reputations for customer service.'
      ]
    },
    {
      heading: 'Why Trust Us',
      content: [
        'Transparency is our priority. We clearly disclose that we earn commissions when you use our referral links, and we explain exactly how each program works, including any limitations or requirements.',
        'We provide honest reviews, including both pros and cons of each service. If there are better alternatives or if requirements change, we update our content accordingly.'
      ]
    },
    {
      heading: 'Our Commitment',
      content: [
        'We commit to keeping our information up-to-date and accurate. Referral programs change frequently, and we monitor these changes to ensure you have the latest information.',
        'We will never recommend a service solely for the commission. Every recommendation is based on genuine value and our personal experience with the service.'
      ]
    }
  ]
};

const frenchContent = {
  title: 'À propos de CodesRéf Canada',
  sections: [
    {
      heading: 'Notre mission',
      content: [
        'CodesRéf Canada est votre source de confiance pour les meilleurs codes de parrainage et bonus d\'inscription canadiens. Nous aidons les Canadiens à économiser de l\'argent en les connectant avec des programmes de parrainage légitimes d\'entreprises financières et technologiques établies.',
        'Notre objectif est simple : vous aider à obtenir le maximum de valeur des services que vous prévoyez déjà utiliser, tout en maintenant une transparence complète sur le fonctionnement de ces programmes de parrainage.'
      ]
    },
    {
      heading: 'Comment nous choisissons les programmes de parrainage',
      content: [
        'Nous ne présentons que des programmes de parrainage d\'entreprises canadiennes réputées que nous utilisons nous-mêmes. Chaque code et lien sur ce site est personnellement testé et vérifié.',
        'Nous nous concentrons sur les programmes qui offrent une valeur réelle - ceux qui offrent des bonus substantiels, ont des exigences raisonnables et proviennent d\'entreprises ayant d\'excellentes réputations pour le service à la clientèle.'
      ]
    },
    {
      heading: 'Pourquoi nous faire confiance',
      content: [
        'La transparence est notre priorité. Nous divulguons clairement que nous gagnons des commissions lorsque vous utilisez nos liens de parrainage, et nous expliquons exactement comment fonctionne chaque programme, y compris les limitations ou exigences.',
        'Nous fournissons des critiques honnêtes, incluant les avantages et inconvénients de chaque service. S\'il y a de meilleures alternatives ou si les exigences changent, nous mettons à jour notre contenu en conséquence.'
      ]
    },
    {
      heading: 'Notre engagement',
      content: [
        'Nous nous engageons à maintenir nos informations à jour et précises. Les programmes de parrainage changent fréquemment, et nous surveillons ces changements pour vous assurer d\'avoir les dernières informations.',
        'Nous ne recommanderons jamais un service uniquement pour la commission. Chaque recommandation est basée sur une valeur réelle et notre expérience personnelle avec le service.'
      ]
    }
  ]
};