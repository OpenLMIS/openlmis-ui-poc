/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as authLoginImport } from './routes/(auth)/login'
import { Route as appAppImport } from './routes/(app)/_app'
import { Route as appAppHomeImport } from './routes/(app)/_app.home'
import { Route as appAppUsersIndexImport } from './routes/(app)/_app.users.index'
import { Route as appAppRolesIndexImport } from './routes/(app)/_app.roles.index'
import { Route as appAppUsersCreateImport } from './routes/(app)/_app.users.create'
import { Route as appAppRolesCreateImport } from './routes/(app)/_app.roles.create'
import { Route as appAppUsersUserIdEditImport } from './routes/(app)/_app.users.$userId.edit'
import { Route as appAppRolesTypeCreateImport } from './routes/(app)/_app.roles.type.create'
import { Route as appAppRolesRoleIdEditImport } from './routes/(app)/_app.roles.$roleId.edit'

// Create Virtual Routes

const appImport = createFileRoute('/(app)')()

// Create/Update Routes

const appRoute = appImport.update({
  id: '/(app)',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const authLoginRoute = authLoginImport.update({
  id: '/(auth)/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const appAppRoute = appAppImport.update({
  id: '/_app',
  getParentRoute: () => appRoute,
} as any)

const appAppHomeRoute = appAppHomeImport.update({
  id: '/home',
  path: '/home',
  getParentRoute: () => appAppRoute,
} as any)

const appAppUsersIndexRoute = appAppUsersIndexImport.update({
  id: '/users/',
  path: '/users/',
  getParentRoute: () => appAppRoute,
} as any)

const appAppRolesIndexRoute = appAppRolesIndexImport.update({
  id: '/roles/',
  path: '/roles/',
  getParentRoute: () => appAppRoute,
} as any)

const appAppUsersCreateRoute = appAppUsersCreateImport.update({
  id: '/users/create',
  path: '/users/create',
  getParentRoute: () => appAppRoute,
} as any)

const appAppRolesCreateRoute = appAppRolesCreateImport.update({
  id: '/roles/create',
  path: '/roles/create',
  getParentRoute: () => appAppRoute,
} as any)

const appAppUsersUserIdEditRoute = appAppUsersUserIdEditImport.update({
  id: '/users/$userId/edit',
  path: '/users/$userId/edit',
  getParentRoute: () => appAppRoute,
} as any)

const appAppRolesTypeCreateRoute = appAppRolesTypeCreateImport.update({
  id: '/roles/type/create',
  path: '/roles/type/create',
  getParentRoute: () => appAppRoute,
} as any)

const appAppRolesRoleIdEditRoute = appAppRolesRoleIdEditImport.update({
  id: '/roles/$roleId/edit',
  path: '/roles/$roleId/edit',
  getParentRoute: () => appAppRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/(app)': {
      id: '/(app)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof appImport
      parentRoute: typeof rootRoute
    }
    '/(app)/_app': {
      id: '/(app)/_app'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof appAppImport
      parentRoute: typeof appRoute
    }
    '/(auth)/login': {
      id: '/(auth)/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLoginImport
      parentRoute: typeof rootRoute
    }
    '/(app)/_app/home': {
      id: '/(app)/_app/home'
      path: '/home'
      fullPath: '/home'
      preLoaderRoute: typeof appAppHomeImport
      parentRoute: typeof appAppImport
    }
    '/(app)/_app/roles/create': {
      id: '/(app)/_app/roles/create'
      path: '/roles/create'
      fullPath: '/roles/create'
      preLoaderRoute: typeof appAppRolesCreateImport
      parentRoute: typeof appAppImport
    }
    '/(app)/_app/users/create': {
      id: '/(app)/_app/users/create'
      path: '/users/create'
      fullPath: '/users/create'
      preLoaderRoute: typeof appAppUsersCreateImport
      parentRoute: typeof appAppImport
    }
    '/(app)/_app/roles/': {
      id: '/(app)/_app/roles/'
      path: '/roles'
      fullPath: '/roles'
      preLoaderRoute: typeof appAppRolesIndexImport
      parentRoute: typeof appAppImport
    }
    '/(app)/_app/users/': {
      id: '/(app)/_app/users/'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof appAppUsersIndexImport
      parentRoute: typeof appAppImport
    }
    '/(app)/_app/roles/$roleId/edit': {
      id: '/(app)/_app/roles/$roleId/edit'
      path: '/roles/$roleId/edit'
      fullPath: '/roles/$roleId/edit'
      preLoaderRoute: typeof appAppRolesRoleIdEditImport
      parentRoute: typeof appAppImport
    }
    '/(app)/_app/roles/type/create': {
      id: '/(app)/_app/roles/type/create'
      path: '/roles/type/create'
      fullPath: '/roles/type/create'
      preLoaderRoute: typeof appAppRolesTypeCreateImport
      parentRoute: typeof appAppImport
    }
    '/(app)/_app/users/$userId/edit': {
      id: '/(app)/_app/users/$userId/edit'
      path: '/users/$userId/edit'
      fullPath: '/users/$userId/edit'
      preLoaderRoute: typeof appAppUsersUserIdEditImport
      parentRoute: typeof appAppImport
    }
  }
}

// Create and export the route tree

interface appAppRouteChildren {
  appAppHomeRoute: typeof appAppHomeRoute
  appAppRolesCreateRoute: typeof appAppRolesCreateRoute
  appAppUsersCreateRoute: typeof appAppUsersCreateRoute
  appAppRolesIndexRoute: typeof appAppRolesIndexRoute
  appAppUsersIndexRoute: typeof appAppUsersIndexRoute
  appAppRolesRoleIdEditRoute: typeof appAppRolesRoleIdEditRoute
  appAppRolesTypeCreateRoute: typeof appAppRolesTypeCreateRoute
  appAppUsersUserIdEditRoute: typeof appAppUsersUserIdEditRoute
}

const appAppRouteChildren: appAppRouteChildren = {
  appAppHomeRoute: appAppHomeRoute,
  appAppRolesCreateRoute: appAppRolesCreateRoute,
  appAppUsersCreateRoute: appAppUsersCreateRoute,
  appAppRolesIndexRoute: appAppRolesIndexRoute,
  appAppUsersIndexRoute: appAppUsersIndexRoute,
  appAppRolesRoleIdEditRoute: appAppRolesRoleIdEditRoute,
  appAppRolesTypeCreateRoute: appAppRolesTypeCreateRoute,
  appAppUsersUserIdEditRoute: appAppUsersUserIdEditRoute,
}

const appAppRouteWithChildren =
  appAppRoute._addFileChildren(appAppRouteChildren)

interface appRouteChildren {
  appAppRoute: typeof appAppRouteWithChildren
}

const appRouteChildren: appRouteChildren = {
  appAppRoute: appAppRouteWithChildren,
}

const appRouteWithChildren = appRoute._addFileChildren(appRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof appAppRouteWithChildren
  '/login': typeof authLoginRoute
  '/home': typeof appAppHomeRoute
  '/roles/create': typeof appAppRolesCreateRoute
  '/users/create': typeof appAppUsersCreateRoute
  '/roles': typeof appAppRolesIndexRoute
  '/users': typeof appAppUsersIndexRoute
  '/roles/$roleId/edit': typeof appAppRolesRoleIdEditRoute
  '/roles/type/create': typeof appAppRolesTypeCreateRoute
  '/users/$userId/edit': typeof appAppUsersUserIdEditRoute
}

export interface FileRoutesByTo {
  '/': typeof appAppRouteWithChildren
  '/login': typeof authLoginRoute
  '/home': typeof appAppHomeRoute
  '/roles/create': typeof appAppRolesCreateRoute
  '/users/create': typeof appAppUsersCreateRoute
  '/roles': typeof appAppRolesIndexRoute
  '/users': typeof appAppUsersIndexRoute
  '/roles/$roleId/edit': typeof appAppRolesRoleIdEditRoute
  '/roles/type/create': typeof appAppRolesTypeCreateRoute
  '/users/$userId/edit': typeof appAppUsersUserIdEditRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/(app)': typeof appRouteWithChildren
  '/(app)/_app': typeof appAppRouteWithChildren
  '/(auth)/login': typeof authLoginRoute
  '/(app)/_app/home': typeof appAppHomeRoute
  '/(app)/_app/roles/create': typeof appAppRolesCreateRoute
  '/(app)/_app/users/create': typeof appAppUsersCreateRoute
  '/(app)/_app/roles/': typeof appAppRolesIndexRoute
  '/(app)/_app/users/': typeof appAppUsersIndexRoute
  '/(app)/_app/roles/$roleId/edit': typeof appAppRolesRoleIdEditRoute
  '/(app)/_app/roles/type/create': typeof appAppRolesTypeCreateRoute
  '/(app)/_app/users/$userId/edit': typeof appAppUsersUserIdEditRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/login'
    | '/home'
    | '/roles/create'
    | '/users/create'
    | '/roles'
    | '/users'
    | '/roles/$roleId/edit'
    | '/roles/type/create'
    | '/users/$userId/edit'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/login'
    | '/home'
    | '/roles/create'
    | '/users/create'
    | '/roles'
    | '/users'
    | '/roles/$roleId/edit'
    | '/roles/type/create'
    | '/users/$userId/edit'
  id:
    | '__root__'
    | '/'
    | '/(app)'
    | '/(app)/_app'
    | '/(auth)/login'
    | '/(app)/_app/home'
    | '/(app)/_app/roles/create'
    | '/(app)/_app/users/create'
    | '/(app)/_app/roles/'
    | '/(app)/_app/users/'
    | '/(app)/_app/roles/$roleId/edit'
    | '/(app)/_app/roles/type/create'
    | '/(app)/_app/users/$userId/edit'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  appRoute: typeof appRouteWithChildren
  authLoginRoute: typeof authLoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  appRoute: appRouteWithChildren,
  authLoginRoute: authLoginRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/(app)",
        "/(auth)/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/(app)": {
      "filePath": "(app)",
      "children": [
        "/(app)/_app"
      ]
    },
    "/(app)/_app": {
      "filePath": "(app)/_app.tsx",
      "parent": "/(app)",
      "children": [
        "/(app)/_app/home",
        "/(app)/_app/roles/create",
        "/(app)/_app/users/create",
        "/(app)/_app/roles/",
        "/(app)/_app/users/",
        "/(app)/_app/roles/$roleId/edit",
        "/(app)/_app/roles/type/create",
        "/(app)/_app/users/$userId/edit"
      ]
    },
    "/(auth)/login": {
      "filePath": "(auth)/login.tsx"
    },
    "/(app)/_app/home": {
      "filePath": "(app)/_app.home.tsx",
      "parent": "/(app)/_app"
    },
    "/(app)/_app/roles/create": {
      "filePath": "(app)/_app.roles.create.tsx",
      "parent": "/(app)/_app"
    },
    "/(app)/_app/users/create": {
      "filePath": "(app)/_app.users.create.tsx",
      "parent": "/(app)/_app"
    },
    "/(app)/_app/roles/": {
      "filePath": "(app)/_app.roles.index.tsx",
      "parent": "/(app)/_app"
    },
    "/(app)/_app/users/": {
      "filePath": "(app)/_app.users.index.tsx",
      "parent": "/(app)/_app"
    },
    "/(app)/_app/roles/$roleId/edit": {
      "filePath": "(app)/_app.roles.$roleId.edit.tsx",
      "parent": "/(app)/_app"
    },
    "/(app)/_app/roles/type/create": {
      "filePath": "(app)/_app.roles.type.create.tsx",
      "parent": "/(app)/_app"
    },
    "/(app)/_app/users/$userId/edit": {
      "filePath": "(app)/_app.users.$userId.edit.tsx",
      "parent": "/(app)/_app"
    }
  }
}
ROUTE_MANIFEST_END */
