import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  images: defineTable({
    body: v.string(),
    format: v.string(),
  }),
  products: defineTable({
    category: v.array(
      v.object({
        men: v.array(v.string()),
        women: v.array(v.string()),
        kids: v.array(v.string()),
      })
    ),
    description: v.string(),
    discountPercentage: v.number(),
    image: v.string(),
    isDiscounted: v.boolean(),
    isFeatured: v.boolean(),
    mainCategory: v.string(),
    name: v.string(),
    price: v.number(),
    quantity: v.number(),
    subCategory: v.string(),
    user: v.id('users'),
  }).index('byUser', ['user']),
  reviews: defineTable({
    comment: v.string(),
    name: v.string(),
    occupation: v.string(),
    productId: v.id('products'),
    star: v.number(),
  }).index('byProductId', ['productId']),
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
  }).index('byTokenId', ['tokenIdentifier']),
});
