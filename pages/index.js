import Header from '../components/header';
import Link from 'next/link'
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function SimpleMediaQuery() {
  const matches = useMediaQuery('(min-width:600px)');

  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}
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

  