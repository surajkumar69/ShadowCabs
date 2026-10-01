import Script from 'next/script';
import '../public/css/style.css';

export const metadata = {
  title: 'Shadow Cabs | Reliable Call Taxi in Trivandrum',
  description: 'Shadow Cabs offers comfortable, safe and reliable taxi service in Trivandrum, Kerala. Book Toyota Innova and Maruti Swift for local and outstation travel.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*  Google Fonts  */}
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet" />
    {/*  FontAwesome  */}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    {/*  Custom CSS  */}
    <link rel="stylesheet" href="css/style.css" />
      </head>
      <body>
        {children}
        <Script src="/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
