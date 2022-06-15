export default {
  type: "object",
  properties: {
    searchTerm: { type: "string" },
  },
  required: ["searchTerm"],
} as const
