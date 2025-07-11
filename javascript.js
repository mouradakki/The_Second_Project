const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("Close");

if (bar) {
  bar.addEventListener("click", function () {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", function () {
    nav.classList.remove("active");
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  function animateOnScroll() {
    animatedElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);

  const liveSearchInput = document.getElementById('live-search-input');
  if (liveSearchInput) {
    liveSearchInput.addEventListener('input', function() {
      const query = liveSearchInput.value.trim().toLowerCase();
      const products = document.querySelectorAll('.pro');
      products.forEach(product => {
        const name = product.querySelector('h5')?.textContent.toLowerCase() || '';
        const brand = product.querySelector('span')?.textContent.toLowerCase() || '';
        if (name.includes(query) || brand.includes(query)) {
          product.style.display = '';
        } else {
          product.style.display = 'none';
        }
      });
    });
  }

  // Product Modal Logic (for both shop.html and index.html)
  const modal = document.getElementById('product-modal');
  const closeModalBtn = document.getElementById('close-product-modal');
  const modalMainImg = document.getElementById('modal-main-img');
  const modalThumbnails = document.getElementById('modal-thumbnails');
  const modalName = document.getElementById('modal-product-name');
  const modalPrice = document.getElementById('modal-product-price');
  const modalDesc = document.getElementById('modal-product-desc');
  const modalAddToCart = document.getElementById('modal-add-to-cart');

  // Example product data (now real data from shop.html and index.html)
  const productData = [
    {
      name: 'Premium Cotton Crew Neck',
      price: 29,
      desc: 'A classic crew neck made from premium cotton for all-day comfort.',
      images: [
        'img/products/a1.jpg',
        'img/products/a2.jpeg',
        'img/products/a3.jpeg'
      ]
    },
    {
      name: 'Vintage Denim Trucker Jacket',
      price: 89,
      desc: 'Classic vintage denim trucker jacket for a timeless look.',
      images: [
        'img/products/a2.jpeg',
        'img/products/a1.jpg',
        'img/products/a3.jpeg'
      ]
    },
    {
      name: 'Cozy Fleece Pullover Hoodie',
      price: 59,
      desc: 'Stay warm and stylish with this cozy fleece pullover hoodie.',
      images: [
        'img/products/a3.jpeg',
        'img/products/a1.jpg',
        'img/products/a2.jpeg'
      ]
    },
    {
      name: 'Floral Print Maxi Dress',
      price: 79,
      desc: 'Elegant floral print maxi dress, perfect for summer occasions.',
      images: [
        'img/products/a4.jpg',
        'img/products/a5.jpeg',
        'img/products/a6.jpeg'
      ]
    },
    {
      name: 'Classic Oxford Button-Down',
      price: 49,
      desc: 'Classic oxford button-down shirt for a smart casual look.',
      images: [
        'img/products/a5.jpeg',
        'img/products/a4.jpg',
        'img/products/a6.jpeg'
      ]
    },
    {
      name: 'Premium Leather Biker Jacket',
      price: 149,
      desc: 'Premium leather biker jacket for a bold statement.',
      images: [
        'img/products/a6.jpeg',
        'img/products/a5.jpeg',
        'img/products/a4.jpg'
      ]
    },
    {
      name: 'Striped Cotton Polo Shirt',
      price: 35,
      desc: 'Striped cotton polo shirt for a sporty and casual style.',
      images: [
        'img/products/a7.jpeg',
        'img/products/a8.jpeg',
        'img/products/a9.jpeg'
      ]
    },
    {
      name: 'Cable Knit Wool Sweater',
      price: 95,
      desc: 'Warm cable knit wool sweater for chilly days.',
      images: [
        'img/products/a8.jpeg',
        'img/products/a7.jpeg',
        'img/products/a9.jpeg'
      ]
    },
    {
      name: 'Tailored Linen Blazer',
      price: 119,
      desc: 'Tailored linen blazer for a sharp, modern look.',
      images: [
        'img/products/a9.jpeg',
        'img/products/a8.jpeg',
        'img/products/a7.jpeg'
      ]
    },
    {
      name: 'Retro Graphic Print Tee',
      price: 25,
      desc: 'Retro graphic print tee for a fun, casual style.',
      images: [
        'img/products/a10.jpg',
        'img/products/a11.jpeg',
        'img/products/a12.jpg'
      ]
    },
    {
      name: 'Relaxed Fit Chino Shorts',
      price: 45,
      desc: 'Relaxed fit chino shorts for everyday comfort.',
      images: [
        'img/products/a11.jpeg',
        'img/products/a10.jpg',
        'img/products/a12.jpg'
      ]
    },
    {
      name: 'Elegant Cocktail Dress',
      price: 129,
      desc: 'Elegant cocktail dress for special occasions.',
      images: [
        'img/products/a12.jpg',
        'img/products/a11.jpeg',
        'img/products/a10.jpg'
      ]
    },
    {
      name: 'Classic Denim Jacket',
      price: 69,
      desc: 'Classic denim jacket for a timeless wardrobe staple.',
      images: [
        'img/products/f1.jpg',
        'img/products/f2.jpg',
        'img/products/f3.jpg'
      ]
    },
    {
      name: 'Premium Cotton Hoodie',
      price: 54,
      desc: 'Premium cotton hoodie for comfort and style.',
      images: [
        'img/products/f2.jpg',
        'img/products/f1.jpg',
        'img/products/f3.jpg'
      ]
    },
    {
      name: 'Casual Linen Shirt',
      price: 39,
      desc: 'Casual linen shirt for a relaxed and breezy look.',
      images: [
        'img/products/f3.jpg',
        'img/products/f1.jpg',
        'img/products/f2.jpg'
      ]
    },
    {
      name: 'Elegant Blazer Jacket',
      price: 109,
      desc: 'Elegant blazer jacket for formal and semi-formal occasions.',
      images: [
        'img/products/f4.jpg',
        'img/products/f5.jpg',
        'img/products/f6.jpg'
      ]
    },
    {
      name: 'Cozy Knit Sweater',
      price: 84,
      desc: 'Cozy knit sweater for warmth and comfort.',
      images: [
        'img/products/f5.jpg',
        'img/products/f4.jpg',
        'img/products/f6.jpg'
      ]
    },
    {
      name: 'Classic Polo Shirt',
      price: 32,
      desc: 'Classic polo shirt for a sporty and casual look.',
      images: [
        'img/products/f6.jpg',
        'img/products/f5.jpg',
        'img/products/f4.jpg'
      ]
    }
    // ... add more as needed ...
  ];

  function openProductModal(product) {
    modal.style.display = 'flex';
    modalName.textContent = product.name;
    modalPrice.textContent = '$' + product.price;
    modalDesc.textContent = product.desc;
    // Detect if we are in shop.html (subpages)
    var prefix = window.location.pathname.includes('shop.html') ? '../' : '';
    // Main image
    modalMainImg.src = prefix + product.images[0];
    // Thumbnails
    modalThumbnails.innerHTML = '';
    product.images.forEach((img, idx) => {
      const thumb = document.createElement('img');
      thumb.src = prefix + img;
      thumb.className = idx === 0 ? 'selected' : '';
      thumb.onclick = function() {
        modalMainImg.src = prefix + img;
        modalThumbnails.querySelectorAll('img').forEach(t => t.classList.remove('selected'));
        thumb.classList.add('selected');
      };
      modalThumbnails.appendChild(thumb);
    });
  }

  // Attach click event to each .pro card (homepage and shop)
  document.querySelectorAll('.pro').forEach((card, idx) => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function(e) {
      // Prevent click on cart icon from opening modal
      if (e.target.closest('.cart')) return;
      // Use example data for now
      openProductModal(productData[idx % productData.length]);
    });
  });

  // Close modal
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }
  window.addEventListener('click', function(e) {
    if (e.target === modal) modal.style.display = 'none';
  });

  // Add to cart from modal (example)
  if (modalAddToCart) {
    modalAddToCart.addEventListener('click', function() {
      alert('Added to cart! (Demo)');
      modal.style.display = 'none';
    });
  }

  // Pagination logic for shop.html
  if (window.location.pathname.includes('shop.html')) {
    const products = Array.from(document.querySelectorAll('.pro'));
    const productsPerPage = 8;
    let currentPage = 1;
    let totalPages = Math.ceil(products.length / productsPerPage);
    let maxPageShown = Math.max(2, totalPages);
    const paginationContainer = document.getElementById('pagination-buttons');

    function renderPagination() {
      if (!paginationContainer) return;
      paginationContainer.innerHTML = '';
      for (let i = 1; i <= maxPageShown; i++) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = i;
        btn.className = (i === currentPage) ? 'active' : '';
        btn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          console.log('Pagination button', i, 'clicked');
          showPage(i);
        });
        paginationContainer.appendChild(btn);
      }
      // Add right arrow
      const arrow = document.createElement('button');
      arrow.type = 'button';
      arrow.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
      arrow.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Pagination arrow clicked');
        maxPageShown++;
        renderPagination();
      });
      paginationContainer.appendChild(arrow);
    }

    function showPage(page) {
      if (!paginationContainer) return;
      currentPage = page;
      products.forEach((pro, idx) => {
        if (idx >= (page-1)*productsPerPage && idx < page*productsPerPage) {
          pro.style.display = '';
        } else {
          pro.style.display = 'none';
        }
      });
      renderPagination();
    }

    // Initial render
    showPage(1);
  }
});
