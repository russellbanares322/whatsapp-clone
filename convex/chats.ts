import { query } from "./_generated/server";

// Queries
export const get = query({
    args: {},
    handler: async(ctx) => {
        return await ctx.db.query("chats").collect()
    }
})

// Mutations
