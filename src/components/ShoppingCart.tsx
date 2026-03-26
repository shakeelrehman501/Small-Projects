import { Plus, Minus, Trash2, ShoppingCart as CartIcon } from "lucide-react";

function ShoppingCart() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Shopping Cart (UI Only)</h2>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Products */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Products</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
                alt="Product"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Wireless Headphones
                </h4>
                <p className="text-2xl font-bold text-blue-600 mb-4">
                  $79.99
                </p>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus size={18} />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
                alt="Product"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Smart Watch
                </h4>
                <p className="text-2xl font-bold text-blue-600 mb-4">
                  $199.99
                </p>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus size={18} />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop"
                alt="Product"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Laptop Stand
                </h4>
                <p className="text-2xl font-bold text-blue-600 mb-4">
                  $49.99
                </p>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus size={18} />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=300&h=300&fit=crop"
                alt="Product"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Mechanical Keyboard
                </h4>
                <p className="text-2xl font-bold text-blue-600 mb-4">
                  $129.99
                </p>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Plus size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Cart */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
            <div className="flex items-center gap-2 mb-6">
              <CartIcon size={24} className="text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Your Cart (2)
              </h3>
            </div>

            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {/* Cart Item 1 */}
              <div className="flex gap-3 pb-4 border-b border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=80&h=80&fit=crop"
                  alt="Product"
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    Wireless Headphones
                  </h4>
                  <p className="text-blue-600 font-semibold mb-2">$79.99</p>
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center">2</span>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Plus size={16} />
                    </button>
                    <button className="ml-auto p-1 text-red-600 hover:bg-red-50 rounded">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Cart Item 2 */}
              <div className="flex gap-3 pb-4 border-b border-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=80&h=80&fit=crop"
                  alt="Product"
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    Smart Watch
                  </h4>
                  <p className="text-blue-600 font-semibold mb-2">$199.99</p>
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center">1</span>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Plus size={16} />
                    </button>
                    <button className="ml-auto p-1 text-red-600 hover:bg-red-50 rounded">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">$359.97</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-blue-600">$359.97</span>
              </div>
            </div>

            <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
