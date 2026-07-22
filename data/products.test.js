const products = require('./products');

describe('Product Data', () => {
  test('should be an array', () => {
    expect(Array.isArray(products)).toBe(true);
  });

  test('should contain at least 5 products', () => {
    expect(products.length).toBeGreaterThanOrEqual(5);
  });

  test('each product should have required properties', () => {
    products.forEach(product => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('name');
      expect(product).toHaveProperty('brand');
      expect(product).toHaveProperty('category');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('imageUrl');
      expect(product).toHaveProperty('description');
      expect(product).toHaveProperty('features');

      expect(typeof product.id).toBe('string');
      expect(typeof product.name).toBe('string');
      expect(typeof product.brand).toBe('string');
      expect(typeof product.category).toBe('string');
      expect(typeof product.price).toBe('number');
      expect(typeof product.imageUrl).toBe('string');
      expect(typeof product.description).toBe('string');
      expect(Array.isArray(product.features)).toBe(true);
      
      expect(product.features.every(feature => typeof feature === 'string')).toBe(true);
    });
  });

  test('product IDs should be unique', () => {
    const ids = products.map(p => p.id);
    const uniqueIds = new Set(ids);
    expect(ids.length).toBe(uniqueIds.size);
  });
});
