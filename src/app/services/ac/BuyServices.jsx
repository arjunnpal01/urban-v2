"use client";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity } from '@/store/cartSlice';
import Image from "next/image";

export default function BuyService({ services }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items || []);

  // Match both id and category
  const isInCart = (id, category) =>
    cartItems.find((item) => item.id === id && item.category === category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-50 p-4">
      {services.map((service) => {
        const cartItem = isInCart(service.id, service.category);
        return (
          <div key={service.id} className="border rounded-xl bg-white shadow-sm p-4 hover:shadow-md transition">
            <Image src={service.imgSrc} alt={service.alt || service.title} width={300} height={200} className="rounded-md w-full h-48 object-cover" />
            <div className="mt-3">
              <h3 className="font-semibold text-lg">{service.title}</h3>
              <p className="text-sm text-gray-500">{service.description}</p>
              <p className="mt-1 font-bold text-green-600">₹{service.price}</p>
              <div className="mt-3 flex items-center justify-between">
                {cartItem ? (
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        dispatch(decrementQuantity({ id: service.id, category: service.category }))
                      }
                      className="bg-gray-200 px-2 rounded"
                    >
                      -
                    </button>
                    <span>{cartItem.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(addToCart({ ...service, quantity: 1, category: service.category }))
                      }
                      className="bg-gray-200 px-2 rounded"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() =>
                      dispatch(addToCart({ ...service, quantity: 1, category: service.category }))
                    }
                    className="bg-purple-600 text-white px-4 py-1 rounded text-sm"
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}