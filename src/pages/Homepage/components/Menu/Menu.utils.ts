import { MenuItem } from './Menu.types';
import menuImage1 from '@app/assets/menu/menu-1.png';
import menuImage2 from '@app/assets/menu/menu-2.png';
import menuImage3 from '@app/assets/menu/menu-3.png';
import menuImage4 from '@app/assets/menu/menu-4.png';
import menuImage5 from '@app/assets/menu/menu-5.png';
import menuImage6 from '@app/assets/menu/menu-6.png';
import menuImage7 from '@app/assets/menu/menu-7.png';
import menuImage8 from '@app/assets/menu/menu-8.png';

export const menuData: Record<string, MenuItem[]> = {
  breakfast: [
    {
      title: 'Pancakes',
      price: '$10',
      description: 'Fluffy pancakes served with syrup and fresh fruits.',
      image: menuImage1,
    },
    {
      title: 'Omelette',
      price: '$8',
      description: 'Delicious omelette with cheese and vegetables.',
      image: menuImage2,
    },
    {
      title: 'French Toast',
      price: '$9',
      description: 'Golden brown French toast topped with powdered sugar and berries.',
      image: menuImage3,
    },
  ],
  lunch: [
    {
      title: 'Chicken Sandwich',
      price: '$12',
      description: 'Grilled chicken sandwich with lettuce, tomato, and mayo.',
      image: menuImage3,
    },
    {
      title: 'Caesar Salad',
      price: '$11',
      description: 'Fresh romaine lettuce with parmesan cheese and Caesar dressing.',
      image: menuImage4,
    },
    {
      title: 'Grilled Cheese',
      price: '$10',
      description: 'Crispy grilled cheese sandwich with melted cheddar.',
      image: menuImage5,
    },
  ],
  dinner: [
    {
      title: 'Steak',
      price: '$20',
      description: 'Juicy grilled steak served with mashed potatoes.',
      image: menuImage6,
    },
    {
      title: 'Salmon',
      price: '$18',
      description: 'Grilled salmon fillet with lemon butter sauce.',
      image: menuImage7,
    },
    {
      title: 'Pasta',
      price: '$15',
      description: 'Creamy Alfredo pasta with mushrooms and parmesan.',
      image: menuImage8,
    },
  ],
};
