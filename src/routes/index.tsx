import {
  AuthSignIn,
  Loading,
  ProjectsAnalytics,
  ProjectsBilling,
  ProjectsCreate,
  ProjectsList,
  ProjectsRooms,
  ProjectsSessions,
  ProjectsSettings,
} from '@/containers'
import { PrivateProvider } from '@/providers/private-provider'
import { createBrowserRouter, isRouteErrorResponse, useRouteError } from 'react-router-dom'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <PrivateProvider>
        <Loading />
      </PrivateProvider>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/auth/sign-in',
    element: <AuthSignIn />,
  },
  {
    path: '/projects/:id',
    element: (
      <PrivateProvider>
        <ProjectsAnalytics />
      </PrivateProvider>
    ),
  },
  {
    path: '/projects/:id/billing',
    element: (
      <PrivateProvider>
        <ProjectsBilling />
      </PrivateProvider>
    ),
  },
  {
    path: '/projects/:id/rooms',
    element: (
      <PrivateProvider>
        <ProjectsRooms />
      </PrivateProvider>
    ),
  },
  {
    path: '/projects/:id/sessions',
    element: (
      <PrivateProvider>
        <ProjectsSessions />
      </PrivateProvider>
    ),
  },
  {
    path: '/projects/:id/settings',
    element: (
      <PrivateProvider>
        <ProjectsSettings />
      </PrivateProvider>
    ),
  },
  {
    path: '/projects/create',
    element: (
      <PrivateProvider>
        <ProjectsCreate />
      </PrivateProvider>
    ),
  },
  {
    path: '/projects',
    element: (
      <PrivateProvider>
        <ProjectsList />
      </PrivateProvider>
    ),
  },
])

function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <pre>{error.data}</pre>
      </div>
    )
  }
  throw error
}
