import { MenuItem, Category } from '../types';

export const categories: Category[] = [
  { id: '1', name: 'Main Dishes', type: 'mains', icon: '🍽️' },
  { id: '2', name: 'Side Dishes', type: 'sides', icon: '🥗' },
  { id: '3', name: 'Desserts', type: 'desserts', icon: '🍰' },
  { id: '4', name: 'Drinks', type: 'drinks', icon: '🥤' },
];

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon with lemon herb butter and seasonal vegetables',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1485921325833-c519f76c4927?auto=format&fit=crop&q=80&w=800',
    category: 'mains',
    prepTime: 25,
    popular: true,
  },
  {
    id: '2',
    name: 'Mushroom Risotto',
    description: 'Creamy Arborio rice with wild mushrooms and parmesan',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800',
    category: 'mains',
    prepTime: 30,
  },
  {
    id: '3',
    name: 'Roasted Vegetables',
    description: 'Seasonal vegetables with herbs and balsamic glaze',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&q=80&w=800',
    category: 'sides',
    prepTime: 20,
  },
  {
    id: '4',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with molten center and vanilla ice cream',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&q=80&w=800',
    category: 'desserts',
    prepTime: 15,
    popular: true,
  },
  {
    id: '5',
    name: 'Fresh Mint Lemonade',
    description: 'Homemade lemonade with fresh mint and honey',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?auto=format&fit=crop&q=80&w=800',
    category: 'drinks',
    prepTime: 5,
  },
];