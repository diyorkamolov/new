// Import necessary modules
import { NextApiRequest, NextApiResponse } from "next";
import client from '../../config/contentful'; // Adjusted import statement assuming contentful.js exports the client properly

// Define your API handler function
const allPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Fetch entries from Contentful
    const response = await client.getEntries({
      content_type: 'blogs',
      select: 'sys.id,fields.displayImg,fields.title,fields.date'
    });

    // Extract items from the response
    const data = response.items;

    // Send the response
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching entries:', error);
    res.status(500).json({ error: 'Failed to fetch entries' });
  }
};

// Export the handler function
export default allPosts;
