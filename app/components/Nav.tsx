import Link from 'next/link';
import { MenuButton } from './MenuButton';

export const Nav = () => {
  return (
    <nav className='flex item-center justify-between flex-wrap p-6'>
      <Link href='/'>Home</Link>
      <MenuButton />
    </nav>
  );
};
