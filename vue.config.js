module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? 'http://broccoli-rob.me/'
    : '/',

  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: 'default',
      region: 'us-east-2',
      bucket: 'broccoli-rob.me',
      createBucket: false,
      staticHosting: true,
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: false,
      enableCloudfront: false,
      uploadConcurrency: 5,
      pluginVersion: '4.0.0-rc3',
      overrideEndpoint: false,
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html'
    }
  }
}
