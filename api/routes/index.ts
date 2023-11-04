import express from 'express';
import cohereRoute from "./cohereRoute";

const base = '/api';


export function setupRoutes(app: express.Application) {
    app.use(`${base}`, cohereRoute);
  }