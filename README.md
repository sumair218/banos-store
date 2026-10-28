# Bano’s store

React + Vite storefront for Bano’s, a ladies fashion store in Gilgit.

    npm install
    npm run dev

Structure

    src/
      assets/        logo and images
      components/
        layout/      AnnouncementBar, Header, Footer
        hero/        BanoHero
        home/        CategoryGrid
        product/     ProductCard, ProductGrid
        cart/        CartDrawer (sends the order to WhatsApp)
      context/       CartContext
      data/          products.js (edit your products and prices here)
      pages/         Home
      styles/        global.css
