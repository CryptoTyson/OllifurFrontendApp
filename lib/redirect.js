import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useRedirect = (go) => {
  const router = useRouter();
  const to = go || router.asPath;

  useEffect(() => {
    router.replace(to);
  });

  return null;
};

export const Redirect = () => {
  useRedirect();
  return null;
};

// eslint-disable-next-line react/display-name
export const getRedirect = (to) => () => {
  useRedirect(to);
  return null;
};
