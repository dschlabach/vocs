import { hydrateRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes.js'
import { hydrateLazyRoutes } from './utils/hydrateLazyRoutes.js'
import { removeTempStyles } from './utils/removeTempStyles.js'

hydrate()

async function hydrate() {
  await hydrateLazyRoutes(routes)
  removeTempStyles()

  const router = createBrowserRouter(routes)
  hydrateRoot(document.getElementById('app')!, <RouterProvider router={router} />)
}
