# Mobile Authentication System

> This is an authentication template for apps built with Ionic and Firebase.

The idea is to have a fully functional authentication starter template, we're still thinking through the features it should have, but for now this is what we're thinking:

- Email & Password Traditional Authentication.
- Google SSO.
- Anonymous Authentication.
- Passwordless Authentication (_For the web version and need to check availability for the native app_).
- Another form of 3rd party authentication (_Github, Twitter, Facebook?_).
- The "_Forgot your password?_" workflow.
- A profile page for the user to edit their data. (_Or add new authentication workflows_).

<!-- Will eventually add an image of the landing page here -->

## Currently Working on

- Email and Password Authentication
  - [ ] Create the Email Authentication Service.
  - [ ] Create the Landing Page.
  - [ ] Create the Login Page
  - [ ] Create the Signup Page.
  - [ ] Create the Password Reset Page.
  - [ ] Create the Authentication Guard.
  - [ ] Protect Internal Routes with the AuthGuard.
  - [ ] Create documentation for the email & password authentication module.
- Anonymous Authentication.
  - [ ] Enable Anonymous Authentication.
  - [ ] Enable feature to link an anonymous account to a "full" account.
- Social Authentication.
  - [ ] Think about which social providers are going to be included in the app.

## Installation

There's no straightforward way to install 3rd party templates from the Ionic CLI, so the best way to 'install' this template would be to copy the project and run `npm install`.

For that, open your terminal, navigate to the folder you keep your projects and type:

```sh
git clone git@github.com:YuxiGlobal/ionic-firebase-authentication.git
```

Once it's done cloning the project, navigate to the project's folder and run `npm install`.

```sh
cd ionic-firebase-authentication
npm install
```

## Usage example

**PENDING**

The idea is to keep all the documentation inside the `docs/` folder.

## Capacitor

We're going to be using **Capacitor** as a replacement for Cordova. Capacitor isn't enabled by default, so there are a few things we need to do. Open your terminal and type:

```sh
ionic integrations enable capacitor
```

When it's done, make a build of your project:

```sh
ionic build
```

It will generate the build inside the `www/` folder. Now you can add the platforms (_remember that you need a Mac with XCode installed to build for iOS_)

```sh
ionic cap add android
ionic cap add ios
```

And lastly, we need to sync everything inside the `www/` in our app platforms:

```sh
ionic cap sync
```

## Release History

- 0.0.1
  - Work in progress

## Meta

This project is maintained by [Yuxi Global](http://twitter.com/YuxiGlobal), if you have any questions you can get in touch with

Jorge Vergara – [@javebratt](https://twitter.com/javebratt) – jorge.vergara@yuxiglobal.com

Distributed under the MIT license. See [LICENSE](https://opensource.org/licenses/MIT) for more information.

[https://github.com/javebratt](https://github.com/javebratt/)

## Contributing

First of all, thank you for the help :-)

Best way to contribute (_with new features, bug fixes, typo fixes, etc_) is to:

1.  Fork the repo (<https://github.com/YuxiGlobal/ionic-firebase-authentication/fork>)
2.  Create your feature branch (`git checkout -b feature/fooBar`)
3.  Commit your changes (`git commit -am 'Add some fooBar'`)
4.  Push to the branch (`git push origin feature/fooBar`)
5.  Create a new Pull Request

<!-- Markdown link & img dfn's -->

<!-- [npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
 -->
