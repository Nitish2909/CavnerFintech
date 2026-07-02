import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      // URL-safe string format lookup optimization
      index: true,
    },
    excerpt: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String, // Rich-text string payload or markdown storage
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true, // E.g., 'Loans', 'Credit Cards', 'Financial Planning'
    },
    tags: {
      type: [String],
      default: [],
    },
    author: {
      type: String, // Can switch to a mongoose.Schema.Types.ObjectId ref if referencing an Admin/Team table
      required: true,
      trim: true,
    },
    thumbnail: {
      type: String, // Image URL address string
      required: true,
    },
    readTime: {
      type: Number, // Estimated reading time in minutes
      required: true,
      min: 1,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
      default: null, // Populated explicitly when public availability goes live
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt
  }
);

// Performance & Search Indexes
blogPostSchema.index({ slug: 1 }, { unique: true });
blogPostSchema.index({ isPublished: 1, publishedAt: -1 });

// Text Index for full-text blog post searching optimization
blogPostSchema.index({ title: 'text', excerpt: 'text', tags: 'text' });

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;