export function getSimplifiedPosts(posts) {
  return posts.map((post) => ({
    id: post.node.id,
    date: post.node.frontmatter.date,
    slug: post.node.frontmatter.slug,
    title: post.node.frontmatter.title,
    tags: post.node.frontmatter.tags,
  }))
}