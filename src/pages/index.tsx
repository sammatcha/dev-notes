import {useEffect} from 'react';
import {useHistory} from '@docusaurus/router';

export default function Home(): null {
  const history = useHistory();
  
  useEffect(() => {
    history.replace(process.env.NODE_ENV === 'production' ? '/dev-notes/docs/' : '/docs/');
  }, [history]);
  
  return null;
}
