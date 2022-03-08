import { useEffect } from 'react';

export default function ResourcesRedirect() {
  useEffect(() => {
    window.location.replace('https://v1michigan.com/');
  }, []);
  return null;
}
