import Head from 'next/head';

export default () => {
    return (
      <div>
        <Head>
          <link href="/css/index.css" rel="stylesheet" />
        </Head>
        <h1>This Is A Web Page Bitch!</h1>
        <p>This is not a good web page bitch.</p>
        <img src="/images/punkotter.jpg"></img>
      </div>
    );
  }