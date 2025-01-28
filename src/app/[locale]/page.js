import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import Switcher from '@/component/Switcher';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <Switcher />
      <h1>{t('title')}</h1>
    
    </div>
  );
}