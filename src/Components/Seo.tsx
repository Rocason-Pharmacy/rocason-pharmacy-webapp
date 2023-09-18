import { FC } from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  title: string;
  description: string;
  keywords: string;
}
const SEO: FC<Props> = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

export default SEO;
