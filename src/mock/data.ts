import { MenuItem, TabLabel } from '@app/pages/Homepage/components/Menu/Menu.types';

import menuImage1 from '@app/assets/menu/menu-1.png';
import menuImage2 from '@app/assets/menu/menu-2.png';
import menuImage3 from '@app/assets/menu/menu-3.png';
import menuImage4 from '@app/assets/menu/menu-4.png';
import menuImage5 from '@app/assets/menu/menu-5.png';
import menuImage6 from '@app/assets/menu/menu-6.png';
import menuImage7 from '@app/assets/menu/menu-7.png';
import menuImage8 from '@app/assets/menu/menu-8.png';
import team1Image from '@app/assets/team/team-1.png';
import team2Image from '@app/assets/team/team-2.png';
import team3Image from '@app/assets/team/team-3.png';
import team4Image from '@app/assets/team/team-4.png';
import testimonial1Image from '@app/assets/testimonial/testimonial-1.png';
import testimonial2Image from '@app/assets/testimonial/testimonial-2.png';
import testimonial3Image from '@app/assets/testimonial/testimonial-3.png';

export const services = [
  { iconClass: 'fas fa-user-tie text-5xl', title: 'Master Chefs' },
  { iconClass: 'fas fa-utensils text-5xl', title: 'Quality Food' },
  { iconClass: 'fas fa-shopping-cart text-5xl', title: 'Online Order' },
  { iconClass: 'fas fa-headset text-5xl', title: '24/7 Service' },
];

export const contacts = [
  {
    title: 'Booking',
    email: 'booking@example.com',
  },
  {
    title: 'General',
    email: 'general@example.com',
  },
  {
    title: 'Technical',
    email: 'tech@example.com',
  },
];

export const team = [
  { name: 'Full Name', designation: 'Designation', image: team1Image },
  { name: 'Full Name', designation: 'Designation', image: team2Image },
  { name: 'Full Name', designation: 'Designation', image: team3Image },
  { name: 'Full Name', designation: 'Designation', image: team4Image },
];

export const testimonials = [
  { name: 'Client Name', profession: 'Profession', image: testimonial1Image },
  { name: 'Client Name', profession: 'Profession', image: testimonial2Image },
  { name: 'Client Name', profession: 'Profession', image: testimonial3Image },
];

export const tabLabels: TabLabel[] = [
  {
    label: 'Breakfast',
    description: 'Popular',
    iconClass: 'fas fa-coffee text-4xl text-primary',
  },
  {
    label: 'Lunch',
    description: 'Special',
    iconClass: 'fas fa-hamburger text-4xl text-primary',
  },
  {
    label: 'Dinner',
    description: 'Lovely',
    iconClass: 'fas fa-utensils text-4xl text-primary',
  },
];

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
    {
      title: 'Chicken Sandwich',
      price: '$12',
      description: 'Grilled chicken sandwich with lettuce, tomato, and mayo.',
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
    {
      title: 'French Toast',
      price: '$9',
      description: 'Golden brown French toast topped with powdered sugar and berries.',
      image: menuImage3,
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
    {
      title: 'Caesar Salad',
      price: '$11',
      description: 'Fresh romaine lettuce with parmesan cheese and Caesar dressing.',
      image: menuImage4,
    },
  ],
};
