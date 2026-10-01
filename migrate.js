const fs = require('fs');

const html = fs.readFileSync('public/index.html', 'utf8');

// Convert to JSX
let jsx = html;
jsx = jsx.replace(/class=/g, 'className=');
jsx = jsx.replace(/for=/g, 'htmlFor=');

// Fix self closing tags
jsx = jsx.replace(/<img([^>]*[^/])>/g, '<img$1 />');
jsx = jsx.replace(/<input([^>]*[^/])>/g, '<input$1 />');
jsx = jsx.replace(/<link([^>]*[^/])>/g, '<link$1 />');
jsx = jsx.replace(/<meta([^>]*[^/])>/g, '<meta$1 />');
jsx = jsx.replace(/<br>/g, '<br />');
jsx = jsx.replace(/<hr>/g, '<hr />');
jsx = jsx.replace(/<!--(.*?)-->/gs, '{/* $1 */}');

// We have special dash characters in CTA like '?"' let's fix it
jsx = jsx.replace(/\?"/g, '-');
jsx = jsx.replace(/Call Now .*? 8921701846/g, 'Call Now - 8921701846');
jsx = jsx.replace(/style="([^"]+)"/g, (match, styleString) => {
    // Basic inline style conversion if any exist
    return match;
});

// Extract head tags
const headMatch = jsx.match(/<head>([\s\S]*?)<\/head>/i);
let headContent = headMatch ? headMatch[1] : '';

// Remove title and description from headContent since they go into layout metadata
headContent = headContent.replace(/<title>[\s\S]*?<\/title>/i, '');
headContent = headContent.replace(/<meta name="description"[\s\S]*?\/>/i, '');
headContent = headContent.replace(/<meta charset="UTF-8"\s*\/>/i, '');
headContent = headContent.replace(/<meta name="viewport"[\s\S]*?\/>/i, '');

// Extract body tags
const bodyMatch = jsx.match(/<body>([\s\S]*?)<\/body>/i);
let bodyContent = bodyMatch ? bodyMatch[1] : '';

// Remove script tag from body since we'll handle it
bodyContent = bodyContent.replace(/<script src="js\/script\.js"><\/script>/i, '');
bodyContent = bodyContent.replace(/<script src="\/js\/script\.js"><\/script>/i, '');

// Create app dir
fs.mkdirSync('app', { recursive: true });

// app/layout.js
const layoutContent = `import Script from 'next/script';
import '../public/css/style.css';

export const metadata = {
  title: 'Shadow Cabs | Reliable Call Taxi in Trivandrum',
  description: 'Shadow Cabs offers comfortable, safe and reliable taxi service in Trivandrum, Kerala. Book Toyota Innova and Maruti Swift for local and outstation travel.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        ${headContent.trim()}
      </head>
      <body>
        {children}
        <Script src="/js/script.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
`;
fs.writeFileSync('app/layout.js', layoutContent);

// app/page.js
const pageContent = `export default function Home() {
  return (
    <>
      ${bodyContent.trim()}
    </>
  );
}
`;
fs.writeFileSync('app/page.js', pageContent);

// Cleanup old files
try { fs.unlinkSync('public/index.html'); } catch(e){}
try { fs.unlinkSync('next.config.js'); } catch(e){}
try { fs.rmSync('pages', { recursive: true, force: true }); } catch(e){}
