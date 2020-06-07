import Header from '../components/header';
import Link from 'next/link'
export default () => {
    return (
      
      <div className="container-fluid text-center">
        <Header></Header>
        <h1>What's Your Fortune?</h1>
        <p>Open the cookie if you dare.</p>
        <Link href="/open-cookie">
<a><img src="/images/cookie.jpg"className="img-fluid" alt="responsive image"></img></a>
</Link>
      </div>
    );
  }

  