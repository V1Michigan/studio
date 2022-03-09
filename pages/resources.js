import { useEffect } from 'react';

export default function ResourcesRedirect() {
  useEffect(() => {
    window.location.replace('https://product-studio-resources.super.site/');
  }, []);
  return null;
}
