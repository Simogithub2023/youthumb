import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* ... Your existing meta tags and links ... */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2690887042898420"
            crossOrigin="anonymous"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />

          {/* Adding SEO Text */}
          <div>
            <h1>YouTube Thumbnail Downloader</h1>
            <p>Save YT Video Thumbnails</p>
            <p>Get free thumbnail image of any youtube videos in Full HD(1080), HD (720), SD, and also in small size. it's currently supported formats: YouTube (HD, HQ, 1080p, 4K) videos</p>
            
            {/* Add the rest of your SEO text here */}
          </div>
            <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-P6VRL9DFK9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-P6VRL9DFK9');
</script>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2690887042898420"
     crossorigin="anonymous"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
