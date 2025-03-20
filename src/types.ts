export interface MenuItem {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: 'mains' | 'sides' | 'desserts' | 'drinks';
    prepTime: number;
    popular?: boolean;
  }
  
  export interface CartItem extends MenuItem {
    quantity: number;
  }
  
  export interface Category {
    id: string;
    name: string;
    type: MenuItem['category'];
    icon: string;
  }