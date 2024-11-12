import { query } from './_generated/server';

export const getProductsByUser = query({
  args: {},
  handler: async (ctx) => {
    // Grab the most recent messages.
    const users = await ctx.db.query('users').order('desc').collect();
    const productByUser = await Promise.all(
      users.map(async (user) => {
        // Find the likes for each message
        const products = await ctx.db
          .query('products')
          .withIndex('byUser', (q) => q.eq('user', user._id))
          .collect();
        // Join the count of likes with the message data
        return products;
      })
    );
    // Reverse the list so that it's in a chronological order.
    console.log(getProductsByUser);

    return productByUser;
  },
});
