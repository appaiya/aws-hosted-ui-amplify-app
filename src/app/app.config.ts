import { environment } from 'src/environments/environment';

export const AWSAmplifyConfig = {
  Auth: {
    userPoolId: environment.cognito.userPoolId,
    userPoolWebClientId: environment.cognito.appClientId,
  },
  authenticationFlowType: environment.cognito.authFlowType,
  oauth: {
    domain: environment.cognito.oauthDomain,
    scope: environment.cognito.oauthScope,
    redirectSignIn: environment.cognito.redirectURI,
    redirectSignOut: environment.cognito.redirectURI,
    responseType: 'code',
  },
  //   cookieStorage: {
  //     domain: environment.cognito.cookieStorageDomain,
  //     secure: true,
  //     path: '/',
  //     expires: environment.cognito.cookieExpiration,
  //   },
};
