import { useEffect } from 'react';

export default function AgreementRedirect() {
  useEffect(() => {
    window.location.replace('https://www.figma.com/file/5tQxMJQgYE6A0pEVYel0Hh/V1-Michigan---Studio-Kickoff');
  }, []);
  return null;
}
