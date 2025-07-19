// This file ensures MSW is started in development mode
if (process.env.NODE_ENV === 'development') {
  import('../mocks').then(() => {
    // MSW worker started
  });
}
