import {
  AppLayout,
  AuthLayout,
  DashboardLayout,
  Deployments,
  Home,
  SignIn,
  SignUp,
  Tables,
} from '@/views';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="deployments" element={<Deployments />} />
        <Route path="tables" element={<Tables />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
      </Route>
    </Route>
  )
);

export function RoutingProvider() {
  return <RouterProvider router={router} />;
}
