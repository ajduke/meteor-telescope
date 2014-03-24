Meteor package for Telescope Application 
--------------------------------------------------------------------
Integrate the Telescope application within any Meteor Application

## Inroduction
This is integration fork of [Meteor Telescope Application](https://github.com/SachaG/Telescope). Made it as meteorite atomosphere package, so that you can integrate it in your application within few minutes and voila !! you have Telescope applicaiton up and running without any new meteor instance or server instance.

Following are good thing about this package:
- Available as meteorite/meteor package
- Easily integratable in your application
- All the CSS are handled, so that it wont mess with your application
- Configurable site url for application 
- Made it to Bootstrap-3 compatiable
- Works well with existing application accounts-ui authentication 

## Assumption

While using this package, it assumes following
- the application uses the iron router for rendering the templates
- application must use accounts-ui authentication for login

##How to integrate with your application
Make sure that `node` and `npm` are installed.
### Install Meteorite
First you need to install `meteorite` npm package itself, using following command

`npm install -g meteorite` 

### Add to your application
It is meteorite package you need to install using folllowing command

`mrt add telescope-package`

Now, it will add the meteor-telescope to your package and its dependencies.

### Configure the packaged Telescope application 
After above installation is done, you need to configure application. It provides the following connfiguration
- Site URL
- Site Title
- Enable/Disble notifications across application
- Enable/Disable categories i.e tagging support for post
- Enable/Disable userlinks on post
- Change the backgroud color

For configuration, we exposed one object called `TelescopeConfig` and two functions called `telescopeRoutes` and `telescopeRoutesServer`, which are used for configuring the routes

Typical way of puting the above application configuration is in `Meteor.startup` method 
Following is **minimal configuration** to run the applicaiton, put following in `.js` file under `lib` or any top level directory other than `client` and `server`

Configuration of Site URL is must for package, and configured application available at `/<configured-root>`. i.e your application will be available at `/` and packaged telescope application will be available at `/<configured-root>`

```

// congiguration of siteURL
TelescopeConfig.siteUrl='forum'

if(Meteor.isClient){
    Meteor.startup(function () {
      telescopeRoutes(TelescopeConfig.appBaseUrl);
    });
}

if(Meteor.isServer){
  Meteor.startup(function () {
    telescopeRoutesServer(TelescopeConfig.siteUrl);
  });
}

```

*Note. You must put above configuration, in order to run application.*

But you can do following following full configuration- properties are self explanatory

```
if(Meteor.isClient){
  Meteor.startup(function () {
    TelescopeConfig.title='My Site' 
      TelescopeConfig.siteUrl='forum'
      TelescopeConfig.enableNotifications=true
      TelescopeConfig.enableUserLinks=true
      TelescopeConfig.enableCategories=true
      TelescopeConfig.backgroudColor='#353535'
      telescopeRoutes(TelescopeConfig.appBaseUrl);
   });
  }
 
 if(Meteor.isServer){
  Meteor.startup(function () {
    TelescopeConfig.enableNotifications=true
    TelescopeConfig.siteUrl='forum'
    telescopeRoutesServer(TelescopeConfig.siteUrl);
  });
}

  ```
  
Following functionality is not provied as compared to Telescope application
- Nested comments which reply on the comment
- No markdown for posts and comment
- Sharing is not supported
