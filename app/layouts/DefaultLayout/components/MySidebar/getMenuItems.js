const getMenuItems = () =>{
  const MENU_ITEMS = [
    {
      to: '/',
      title: 'Home',
      icon: 'home',
    },
    {
      to: '/contact',
      title: 'Contact',
      icon: 'phone',
    },
  ];
  return MENU_ITEMS;
}
export default getMenuItems;