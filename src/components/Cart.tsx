import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (itemId: string, change: number) => void;
}

export function Cart({ items, onClose, onUpdateQuantity }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = total > 50 ? 0 : 5.99;
  const finalTotal = total + deliveryFee;

  if (items.length === 0) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
        <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
          <div className="p-6 border-b flex justify-between items-center">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="p-6 flex flex-col items-center justify-center h-[calc(100vh-8rem)]">
            <ShoppingBag className="w-20 h-20 text-gray-300 mb-6" />
            <p className="text-xl text-gray-600 font-medium mb-2">Your cart is empty</p>
            <p className="text-gray-500">Add some delicious items to get started!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-20rem)]">
          {items.map((item) => (
            <div key={item.id} className="p-6 border-b">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="ml-4 flex-1">
                  <h3 className="font-medium text-lg">{item.name}</h3>
                  <p className="text-gray-500 mb-3">${item.price.toFixed(2)}</p>
                  <div className="flex items-center">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
                    >
                      {item.quantity === 1 ? <Trash2 className="w-5 h-5" /> : <Minus className="w-5 h-5" />}
                    </button>
                    <span className="mx-4 font-medium w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-lg">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-6 border-t bg-gray-50">
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="font-medium">
                {deliveryFee === 0 ? 'FREE' : `$${deliveryFee.toFixed(2)}`}
              </span>
            </div>
            {total < 50 && (
              <p className="text-sm text-gray-500">
                Add ${(50 - total).toFixed(2)} more for free delivery
              </p>
            )}
            <div className="flex justify-between items-center pt-3 border-t">
              <span className="font-semibold text-lg">Total</span>
              <span className="font-bold text-lg">${finalTotal.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full bg-green-600 text-white py-4 px-4 rounded-lg hover:bg-green-700 transition-colors font-medium text-lg">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}