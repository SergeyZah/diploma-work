module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/courses/main',
        permanent: true,
      },
    ];
  },
};
