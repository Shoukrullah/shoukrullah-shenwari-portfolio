interface NavItemsShape {
  id: number;
  label: string;
  href: string;
}

const navItems:NavItemsShape[] = [
  {
    label: "About Me",
    href: '/about',
    id:1
  },
  {
    id: 2,
    label: 'Services',
    href: '/services'
  },
  // {
  //   id: 3,
  //   label: 'Resume',
  //   href: '/resume'
  // },
  {
    id: 4,
    label: 'Contact',
    href: '/contact'
  },
];
export default navItems
