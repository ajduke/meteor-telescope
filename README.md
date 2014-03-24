Meteor package for Telescope Application 
--------------------------------------------------------------------
Integrate the Telescope application within any Meteor Application

## Inroduction
This is integration fork of [Telescope Application](https://github.com/SachaG/Telescope). Made it as meteorite atomosphere package, so that you can integrate it in your application within few minutes and voila !! you have Telescope forum applicaiton without any new meteor instance or server instance

Following are good thing about this package:
- Available as meteorite package
- Easily integratable in your application
- All the CSS are handled, so that it wont mess with your application
- Configurable the site url for forum application 
- Made it to Bootstrap-3 compatiable

## Assumption

While using this package, it assumes following
- uses the iron router 
- makes use of existing application accounts-ui authentication

##How to integrate with your application
Make sure that `node` and `npm` are installed.
### Install Meteorite
First you need to install `meteorite` npm package itself, using following command

`npm install -g meteorite` 

### Add to your application
It is meteorite package you need to install using folllowing command

`mrt add meteor-telescope`

Now, it will add the meteor-telescope to your package and its dependencies.

### Configure the packaged Telescope application 
After above installation is done, you need to configure application. It provides the following connfiguration
- Site URL
- Site Title
- Enable/Disble notification across application
- Enable/Disable categories i.e tagging support for post
- Enable/Disable userlink on post
- Change the backgroud color

For configuration, we exposed one object called `TelescopeConfig` and function called `telescopeRoutes`, which is used for configuring the routes

Typical way of puting the above application configuration is in `Meteor.startup` method 
Following is **minimal configuration** to run the applicaiton, put following in `.js` file under any directory except for server folder

Configuration of Site URL is must for Telescope application at `/<configured-root>`. i.e your application will available at `/` and packaged telescope application available at `/<configured-root>`

```
if(Meteor.isClient){
    Meteor.startup(function () {
      TelescopeConfig.siteUrl='forum'
      telescopeRoutes(TelescopeConfig.appBaseUrl);
    });
}
```

*Note. You must put above configuration, in order to run application.*

But you can do following following full configuration- properties are self explanatory

```
Meteor.startup(function () {
  TelescopeConfig.title='My Site' 
  TelescopeConfig.siteUrl='qa'
  TelescopeConfig.enableNotifications=true
  TelescopeConfig.enableUserLinks=true
  TelescopeConfig.enableCategories=true
  TelescopeConfig.backgroudColor='#353535'
  telescopeRoutes(TelescopeConfig.appBaseUrl);
 });
  ```
  
Following functionality is not provied as compared to Telescope application
- Nested comments which reply on the comment
- No markdown for posts and comment
- Sharing is not supported


