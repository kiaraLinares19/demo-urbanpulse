import { lazy, Suspense } from 'react';

const Prueba1 = lazy(() => import('mf_prueba1/Prueba1'));
const Prueba2 = lazy(() => import('mf_prueba2/Prueba2'));
const Prueba3 = lazy(() => import('mf_prueba3/Prueba3'));

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: 16 }}>
      <h1>Host + 3 microfrontends</h1>
      <Suspense fallback={<p>Cargando módulo…</p>}>
        <Prueba1 />
        <Prueba2 />
        <Prueba3 />
      </Suspense>
    </div>
  );
}