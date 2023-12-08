import React from 'react';
import { Button, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { Category } from '../../Data/Data';

export default function Categories() {
  // Assuming you have a posts array somewhere in your data
  const posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    // Add more posts as needed
  ];

  return (
    <>
      <Button variant="text" style={{ backgroundColor: '#4CAF50', color: 'white', marginRight: '10px' }}>
        Create Blog
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              All Categories
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Map through the Category array to create rows dynamically */}
          {Category.map(category => (
            <TableRow key={category.id}>
              <TableCell>{category.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Add a "Post" section */}
      <div>
        <h2>Recent Posts</h2>
        <ul>
          {/* Map through your posts data to create a list of posts */}
          {posts.map(post => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
