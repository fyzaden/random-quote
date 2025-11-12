import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className='flex gap-4 justify-end p-4 bg-amber-950 text-slate-200'>
      <Link href='/'>Home</Link>
      <Link href='/admin'>Admin</Link>
    </nav>
  );
};
export default Navbar;
