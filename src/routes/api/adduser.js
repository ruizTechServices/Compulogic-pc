// src/routes/api/addUser.js
import { db } from '$lib/utils/supabaseClient'; // Import your database connector

export async function post(request) {
  const { firstName } = JSON.parse(request.body);

  try {
    // Assuming `db` is your database connection instance
    const result = await db.query('INSERT INTO users (first_name) VALUES ($1) RETURNING id', [firstName]);
    return {
      status: 200,
      body: {
        message: 'User added successfully',
        userId: result.rows[0].id, // Return the new user's id
      },
    };
  } catch (error) {
    console.error('Error adding user to the database:', error);
    return {
      status: 500,
      body: {
        error: 'Internal Server Error',
      },
    };
  }
}
