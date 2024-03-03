import Image from 'next/image';

import diddenIcon from '@/public/Image/didden-clear.png';

export default function AboutUs() {
  return <Image className="margincenter pt-150" src={diddenIcon} alt=".didden" />;
}
