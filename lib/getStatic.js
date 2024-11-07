export const getStaticPaths = () => ({
  fallback: false,
  paths: [], // Update this with your static paths
});

export const getStaticProps = async (ctx) => {
  const props = {
    // Add your static props here
  };
  return { props };
};
