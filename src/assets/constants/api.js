/**
 * Constantes liées aux API et endpoints
 */

export const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://api.clerelydesign.com';

export const API_ENDPOINTS = {
  PROJECTS: '/projects',
  PROJECT_DETAIL: '/projects/:id',
  BLOG_POSTS: '/blog',
  BLOG_POST_DETAIL: '/blog/:slug',
  CONTACT: '/contact',
  SUBSCRIBE: '/subscribe',
};

export const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
};

export const API_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}; 