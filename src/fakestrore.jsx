import React, { useEffect, useState } from "react";
import axios from "axios";

export function FakeStoreApp() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceFilter, setPriceFilter] = useState(1000);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategories(["all", ...res.data]);
    });
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    axios
      .get(
        value === "all"
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${value}`
      )
      .then((res) => {
        setProducts(res.data);
      });
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart`);
  };

  const handleRemoveFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0).toFixed(2);

  const filteredProducts = products
    .filter((p) => {
      return (
        (p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
        p.price <= priceFilter &&
        p.rating.rate >= ratingFilter
      );
    })
    .sort((a, b) => {
      if (sortOrder === "asc") return a.price - b.price;
      if (sortOrder === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <div className="container-fluid">
      <header className="p-2 d-flex justify-content-between align-items-center">
        <div>
          <button
            className="btn btn-dark"
            data-bs-toggle="offcanvas"
            data-bs-target="#menu"
          >
            <span className="bi bi-justify"></span>
          </button>
        </div>

        <div className="offcanvas offcanvas-start" id="menu">
          <div className="offcanvas-header">
            <h5>Filter Products</h5>
            <button className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body">
            <label className="form-label fw-bold">Category</label>
            <select className="form-select mb-2" onChange={handleCategoryChange}>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c.toUpperCase()}
                </option>
              ))}
            </select>

            <label className="form-label fw-bold">Max Price: ₹{priceFilter}</label>
            <input
              type="range"
              min="100"
              max="1000"
              className="form-range"
              value={priceFilter}
              onChange={(e) => setPriceFilter(Number(e.target.value))}
            />

            <label className="form-label fw-bold">Minimum Rating</label>
            <select
              className="form-select mb-2"
              value={ratingFilter}
              onChange={(e) => setRatingFilter(Number(e.target.value))}
            >
              <option value={0}>All</option>
              <option value={4}>4+</option>
              <option value={3}>3+</option>
              <option value={2}>2+</option>
            </select>

            <label className="form-label fw-bold">Sort by Price</label>
            <select
              className="form-select"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">None</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
        </div>

        <h4>FakeStore</h4>

        <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
          <input
            className="form-control me-2"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>

        <button
          className="btn btn-warning position-relative"
          data-bs-toggle="modal"
          data-bs-target="#cartModal"
        >
          <i className="bi bi-cart3"></i>
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-circle">
            {cart.length}
          </span>
        </button>
      </header>

      {/* Cart Modal */}
      <div className="modal fade" id="cartModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5>Cart</h5>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {cart.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>₹ Price</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>₹{item.price.toFixed(2)}</td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleRemoveFromCart(item.id)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="3" className="text-end fw-bold">
                        Total: ₹{totalAmount}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Product List */}
      <div className="row mt-3">
        <main className="col d-flex flex-wrap justify-content-start">
          {filteredProducts.length === 0 ? (
            <p className="text-center fs-4 text-muted">No products found.</p>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="card p-2 m-2"
                style={{ width: "200px" }}
              >
                <img
                  src={product.image}
                  className="card-img-top"
                  height="150"
                  alt={product.title}
                  style={{ objectFit: "contain" }}
                />
                <div className="card-header" style={{ height: "100px" }}>
                  {product.title}
                </div>
                <div className="card-body">
                  <p>₹{product.price.toFixed(2)}</p>
                  <p>
                    {product.rating.rate} <i className="bi bi-star-fill text-success"></i>
                  </p>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => handleAddToCart(product)}
                  >
                    <i className="bi bi-cart4"></i> Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </main>
      </div>
    </div>
  );
}
