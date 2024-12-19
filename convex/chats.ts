import { query } from "./_generated/server";

// Queries
export const getChats = query({
    args: {},
    handler: async(ctx) => {
        return await ctx.db.query("chat_session").collect()
    }
})

// Mutations
