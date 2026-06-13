import { Link } from 'react-router-dom';
import { ArrowUpRight, Home } from 'lucide-react';
import Seo from '../components/seo/Seo';
import { FloatingShapes, GridPattern } from '../components/ui/Decor';

const NotFoundPage = () => (
  <>
    <Seo title="Page Not Found" description="The page you requested could not be found." path="/404" />
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-ink-900 text-white">
      <div className="absolute inset-0 bg-mesh-ink" />
      <GridPattern className="opacity-[0.05]" />
      <FloatingShapes />
      <div className="container-x relative z-10 text-center">
        <p className="font-display text-7xl font-extrabold text-gradient md:text-9xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-white md:text-3xl">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-steel-300">
          The page you requested doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn-accent">
            <Home className="h-4 w-4" /> Back Home
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
          >
            View Products <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default NotFoundPage;
