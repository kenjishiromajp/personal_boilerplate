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
    {
      to: '/login',
      title: 'Login',
      icon: 'user',
    },
  ];
  return MENU_ITEMS;
}
export default getMenuItems;