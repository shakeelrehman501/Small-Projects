import { ShoppingCart, Heart, Star, ChevronDown, ShoppingBag } from "lucide-react";

function FullCart() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">ShopHub</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Heart className="w-6 h-6 text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span>
              </div>
              <div className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">2</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Filters</h3>

              <div className="mb-6">
                <div className="space-y-2">
                  <div className="w-full text-left px-3 py-2 rounded-lg bg-blue-600 text-white">All Products</div>
                  <div className="w-full text-left px-3 py-2 rounded-lg text-gray-700">Electronics</div>
                  <div className="w-full text-left px-3 py-2 rounded-lg text-gray-700">Clothing</div>
                  <div className="w-full text-left px-3 py-2 rounded-lg text-gray-700">Footwear</div>
                  <div className="w-full text-left px-3 py-2 rounded-lg text-gray-700">Accessories</div>
                  <div className="w-full text-left px-3 py-2 rounded-lg text-gray-700">Sports</div>
                </div>
              </div>

              <div className="border-t pt-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-4">Brand</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                    <span className="text-sm text-gray-700">Apple</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                    <span className="text-sm text-gray-700">Sony</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                    <span className="text-sm text-gray-700">Nike</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                    <span className="text-sm text-gray-700">Adidas</span>
                  </label>
                </div>
              </div>

              <div className="border-t pt-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-4">Price Range</h4>
                <div className="relative h-2 bg-gray-200 rounded-full mb-3">
                  <div className="absolute h-2 bg-blue-600 rounded-full left-0" style={{ width: '60%' }}></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>$0</span>
                  <span>$300</span>
                </div>
              </div>

              <div className="border-t pt-6">
                <h4 className="font-bold text-gray-900 mb-4">Customer Rating</h4>
                <div className="space-y-2">
                  <div className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700">
                    <div className="flex">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                    <span className="text-sm">& Up</span>
                  </div>
                  <div className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white">
                    <div className="flex">
                      <Star className="w-4 h-4 fill-white text-white" />
                      <Star className="w-4 h-4 fill-white text-white" />
                      <Star className="w-4 h-4 fill-white text-white" />
                      <Star className="w-4 h-4 fill-white text-white" />
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="text-sm">& Up</span>
                  </div>
                  <div className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700">
                    <div className="flex">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 text-gray-300" />
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="text-sm">& Up</span>
                  </div>
                  <div className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700">
                    <div className="flex">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 text-gray-300" />
                      <Star className="w-4 h-4 text-gray-300" />
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="text-sm">& Up</span>
                  </div>
                  <div className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700">
                    <div className="flex">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 text-gray-300" />
                      <Star className="w-4 h-4 text-gray-300" />
                      <Star className="w-4 h-4 text-gray-300" />
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="text-sm">& Up</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
              <div className="relative">
                <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg">
                  <span className="text-sm text-gray-700">Most Popular</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative">
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">Sale</span>
                  <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-10">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </div>
                  <img src="https://images.unsplash.com/photo-1699796803856-d9017a3a022c?w=400" alt="Product" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">Electronics</p>
                  <h3 className="font-bold text-gray-900 mb-2">Smart Watch Pro</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="text-xs text-gray-500">(245)</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-gray-900">$249.99</span>
                    <span className="text-sm text-gray-500 line-through">$299.99</span>
                  </div>
                  <button className="w-full py-2 rounded-lg font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors">Add to Cart</button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative">
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">Sale</span>
                  <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-10">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </div>
                  <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400" alt="Product" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">Electronics</p>
                  <h3 className="font-bold text-gray-900 mb-2">Wireless Headphones</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="text-xs text-gray-500">(892)</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-gray-900">$119.99</span>
                    <span className="text-sm text-gray-500 line-through">$149.99</span>
                  </div>
                  <button className="w-full py-2 rounded-lg font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors">Add to Cart</button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative">
                  <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">New</span>
                  <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-10">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </div>
                  <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400" alt="Product" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">Accessories</p>
                  <h3 className="font-bold text-gray-900 mb-2">Bluetooth Sunglasses</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 text-gray-300" />
                      <Star className="w-4 h-4 text-gray-300" />
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="text-xs text-gray-500">(134)</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-gray-900">$159.99</span>
                  </div>
                  <button className="w-full py-2 rounded-lg font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors">Add to Cart</button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative">
                  <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-10">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </div>
                  <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400" alt="Product" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">Clothing</p>
                  <h3 className="font-bold text-gray-900 mb-2">Cotton T-Shirt</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="text-xs text-gray-500">(567)</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-gray-900">$24.99</span>
                  </div>
                  <button className="w-full py-2 rounded-lg font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors">Add to Cart</button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative">
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">Sale</span>
                  <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-10">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </div>
                  <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" alt="Product" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">Footwear</p>
                  <h3 className="font-bold text-gray-900 mb-2">Running Shoes</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="text-xs text-gray-500">(1023)</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-gray-900">$119.99</span>
                  </div>
                  <button className="w-full py-2 rounded-lg font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors">Add to Cart</button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative">
                  <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md z-10">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </div>
                  <img src="https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400" alt="Product" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">Sports</p>
                  <h3 className="font-bold text-gray-900 mb-2">Pro Yoga Mat</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                    <span className="text-xs text-gray-500">(423)</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-gray-900">$39.99</span>
                  </div>
                  <button className="w-full py-2 rounded-lg font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors">Add to Cart</button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default FullCart
