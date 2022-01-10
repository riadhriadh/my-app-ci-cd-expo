
export default {
    name:'my-app-ci-cd-expo',
    slug: 'my-app-ci-cd-expo',
    version: '0.0.1',
    owner: 'riadh',
    orientation: 'portrait',
    icon: "./assets/icon.png",
    scheme: 'my-app-ci-cd-expo',
    userInterfaceStyle: 'automatic',
    splash: {
      "image": "./assets/splash.png",
      backgroundColor: '#333',
    },
    extra: {

      APP_ID: "com.test.riadh",
      APP_NAME: "my-app-ci-cd-expo",
      // Config variables
   
    },
    android: {
        package: "com.test.riadh"
      },
    plugins: [],
    hooks: {
      postPublish: [  ],
    },
  };