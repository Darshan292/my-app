import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import AmazonProducts from './pages/AmazonProducts';
import GeMProducts from './pages/GeMProducts';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';
import type { ReactNode } from 'react';
import { MainLayout } from './components/layouts/MainLayout';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: 'Home',
    path: '/',
    element: <MainLayout><Home /></MainLayout>
  },
  {
    name: 'About',
    path: '/about',
    element: <MainLayout><About /></MainLayout>
  },
  {
    name: 'Products',
    path: '/products',
    element: <MainLayout><Products /></MainLayout>
  },
  {
    name: 'Research & Innovation',
    path: '/innovation',
    element: <MainLayout><Home /></MainLayout> // Reusing sections from home
  },
  {
    name: 'Certifications',
    path: '/certifications',
    element: <MainLayout><Certifications /></MainLayout>
  },
  {
    name: 'Amazon Products',
    path: '/amazon-products',
    element: <MainLayout><AmazonProducts /></MainLayout>
  },
  {
    name: 'GeM Products',
    path: '/gem-products',
    element: <MainLayout><GeMProducts /></MainLayout>
  },
  {
    name: 'Blog',
    path: '/blog',
    element: <MainLayout><Blog /></MainLayout>
  },
  {
    name: 'Contact',
    path: '/contact',
    element: <MainLayout><Contact /></MainLayout>
  }
];

export default routes;
