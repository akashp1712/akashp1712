import { NextResponse } from 'next/server';

const HASHNODE_API = 'https://gql.hashnode.com';
const PUBLICATION_HOST = 'blog.akashpanchal.com';
const HASHNODE_ACCESS_TOKEN = process.env.HASHNODE_ACCESS_TOKEN || '';

interface HashnodePost {
  title: string;
  slug: string;
  brief: string;
  coverImage?: {
    url: string;
  };
  publishedAt: string;
  readTimeInMinutes?: number;
  views?: number;
  reactionCount?: number;
  tags?: Array<{ name: string }>;
}

interface HashnodeResponse {
  data: {
    publication?: {
      id?: string;
      title?: string;
      posts: {
        edges: Array<{
          node: HashnodePost;
        }>;
      };
    };
    user?: {
      id?: string;
      username?: string;
      publications?: {
        edges: Array<{
          node: {
            posts: {
              edges: Array<{
                node: HashnodePost;
              }>;
            };
          };
        }>;
      };
      posts?: {
        nodes: Array<HashnodePost>;
      };
    };
  };
  errors?: Array<{
    message: string;
    extensions?: {
      code: string;
    };
  }>;
}

export async function GET() {
  try {
    // Query by publication hostname (most reliable method)
    const query = `
      query GetPublicationArticles($host: String!) {
        publication(host: $host) {
          id
          title
          posts(first: 10) {
            edges {
              node {
                title
                slug
                brief
                coverImage {
                  url
                }
                publishedAt
                readTimeInMinutes
                views
                reactionCount
                tags {
                  name
                }
              }
            }
          }
        }
      }
    `;

    
    
    const response = await fetch(HASHNODE_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(HASHNODE_ACCESS_TOKEN && { 'Authorization': HASHNODE_ACCESS_TOKEN }),
      },
      body: JSON.stringify({
        query,
        variables: { host: PUBLICATION_HOST },
      }),
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Hashnode API error:', errorText);
      throw new Error(`Failed to fetch articles: ${response.status} ${response.statusText}`);
    }

    const data: HashnodeResponse = await response.json();

    // Check for GraphQL errors
    if (data.errors) {
      console.error('GraphQL errors:', data.errors);
      return NextResponse.json({ 
        posts: [], 
        error: data.errors[0]?.message || 'Unknown GraphQL error',
        errors: data.errors 
      }, { status: 500 });
    }

    // Check if publication exists
    if (!data.data?.publication) {
      console.error('Publication not found:', PUBLICATION_HOST);
      return NextResponse.json({ 
        posts: [], 
        error: `Publication ${PUBLICATION_HOST} not found` 
      });
    }

    // Get posts from publication
    const publicationPosts = data.data.publication.posts?.edges || [];
    
    if (publicationPosts.length > 0) {
      const posts = publicationPosts.map(edge => {
        const post = edge.node;
        return {
          ...post,
          coverImage: post.coverImage?.url || undefined,
          readTime: post.readTimeInMinutes,
          totalReactions: post.reactionCount,
        };
      });
      
      // Sort by views (if available) or published date and get top 5
      const sortedPosts = posts
        .sort((a, b) => {
          // Try to sort by views if available, otherwise by date
          if (a.views && b.views) {
            return b.views - a.views;
          }
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        })
        .slice(0, 5);

      return NextResponse.json({ posts: sortedPosts });
    }

    // If no posts found, return empty array with debug info
    return NextResponse.json({ 
      posts: [],
      debug: {
        publicationExists: !!data.data?.publication,
        publicationTitle: data.data?.publication?.title,
        postsCount: publicationPosts.length
      }
    });
  } catch (error) {
    console.error('Error fetching Hashnode articles:', error);
    return NextResponse.json({ posts: [] }, { status: 500 });
  }
}
