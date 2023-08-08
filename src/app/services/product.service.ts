import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: any[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 99.99,
      imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 149.99,
      imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 149.99,
      imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Description for Product 4',
      price: 149.99,
      imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Description for Product 5',
      price: 149.99,
      imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 6,
      name: 'Product 6',
      description: 'Description for Product 6',
      price: 149.99,
      imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 7,
      name: 'Product 7',
      description: 'Description for Product 7',
      price: 149.99,
      imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 8,
      name: 'Product 8',
      description: 'Description for Product 8',
      price: 149.99,
      imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 9,
      name: 'Product 9',
      description: 'Description for Product 9',
      price: 149.99,
      imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 10,
      name: 'Product 10',
      description: 'Description for Product 10',
      price: 149.99,
      imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 11,
      name: 'Product 11',
      description: 'Description for Product 11',
      price: 149.99,
      imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 12,
      name: 'Product 12',
      description: 'Description for Product 12',
      price: 149.99,
      imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 13,
      name: 'Product 13',
      description: 'Description for Product 13',
      price: 149.99,
      imageUrl: 'https://images.pexels.com/photos/2587370/pexels-photo-2587370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  constructor() {}

  getProducts(): any[] {
    return this.products;
  }

  getProductById(productId: number) {
    return this.products.find(product => product.id === productId);
  }

  getProductsByCategory(category: string): any[] {
    return this.products.filter(product => product.category === category);
  }
}
