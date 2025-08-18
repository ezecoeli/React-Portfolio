import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white p-4 text-center mt-auto">
      {t('allRightsReserved')}
    </footer>
  );
}

