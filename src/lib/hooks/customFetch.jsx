import { useCallback, useRef, useEffect } from 'react';

// Custom hook que devuelve un callback actualizado según las dependencias dinámicas
function useDynamicCallback(callback, dependencies) {
  const callbackRef = useRef(callback);
  const dependenciesRef = useRef(dependencies);

  // Verifica si las dependencias han cambiado
  const hasDependenciesChanged = dependencies.some((dep, i) => dep !== dependenciesRef.current[i]);

  if (hasDependenciesChanged) {
    dependenciesRef.current = dependencies;
    callbackRef.current = callback;
  }

  // Memoriza y devuelve el callback actualizado
  return useCallback((...args) => callbackRef.current(...args), dependenciesRef.current);
}

const privateUseFetch = async (params, loadingCB, payloadCB, controller) => {
  const { url, ...fields } = params;
  const httpOptions = fields?.httpOptions
  loadingCB(true);

  if (httpOptions != null) {

    try {
      const res = await fetch(url, { ...httpOptions, signal: controller.signal });
      if (!res.ok) {
        payloadCB({
          effectStatus: 'rejected',
          message: 'Rechazo desconocido por la red. Verifique la conexión.',
        });
        return;
      }

      const data = await res.json();
      payloadCB({
        effectStatus: 'fulfilled',
        payload: data,
      });
    } catch (err) {
      if (err.name !== 'AbortError') {
        payloadCB({
          effectStatus: 'rejected',
          message: err.message,
        });
      }
    } finally {
      loadingCB(false);
      console.log('Operaciones internas de React Effect han terminado');
    }
  }
};

// Hook `useFetch` que maneja el ciclo de vida con dependencias dinámicas y `AbortController`
const useFetch = (params, dependenciesArray, setLoading, setPayload, setError) => {
  const callback = useDynamicCallback(() => {
    const controller = new AbortController();
    privateUseFetch(
      params,
      setLoading,
      (effect) => {
        if (effect.effectStatus === 'fulfilled') {
          setPayload(effect.payload);
        } else {
          setError(effect.message);
        }
      },
      controller
    );
    return () => controller.abort();
  }, dependenciesArray);

  useEffect(() => {
    const cancelFetch = callback();
    return cancelFetch; // Cancela `fetch` en desmontaje o cambio de dependencias
  }, [callback]);
};


export { useFetch };
