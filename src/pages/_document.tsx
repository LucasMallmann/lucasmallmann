import React from 'react';
import Document, {
  DocumentProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital@1&family=Old+Standard+TT:ital@1&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.addEventListener('DOMContentLoaded', (event) => {      
              document.querySelectorAll('pre[class*=language-]').forEach(function(node) {
                  node.classList.add('line-numbers');
            });
          });
            `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
