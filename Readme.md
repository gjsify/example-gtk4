# Gtk4 Applications Example

## Misc classes to build Gtk4 Applications in Gjs and Typescript

It takes the hassle away from building Gtk4 application in Gjs 
So you can create a cool application, without all the boilerplate code

 * main.ts          is a sample application
 * widgets/*.js     contains classes to make it easy to create your UI

## Requirements (Fedora 36)
* gtk4
* gjs 1.72.0 (or later)
* node 16 (can be installed via [nvm](https://github.com/nvm-sh/nvm))

```bash
sudo dnf install gtk4-devel polkit-devel
```

```bash
npm install
```

Will properly work fine in other distros, but I have only tested in Fedora 36

## Build types

The types in the @types directory were created with [ts-for-gir](https://github.com/sammydre/ts-for-gir).
If you want to create the types yourself install ts-for-gir and run the following command:

```bash
npm run build:types
```

## Build Typescript

```bash
npm run build:app
```

## Start

```bash
npm run start

# or alternatively
gjs -m dist/main.js

```

### Screenshoots
![gtk4python_page1](https://user-images.githubusercontent.com/283985/138865212-6d67f2e0-c844-4ef6-bfbe-6cb064dfb2ab.png)
![gtk4python_page2](https://user-images.githubusercontent.com/283985/138865222-1925c777-4c7f-439c-b6b4-3198925fe5ce.png)
![gtk4python_page3](https://user-images.githubusercontent.com/283985/138865228-28695733-0973-4924-8efb-99b20cd3add5.png)
![gtk4python_page4](https://user-images.githubusercontent.com/283985/138865238-8101c308-93ad-4f51-b80b-70a4e2c07f35.png)
![gtk4python_page5](https://user-images.githubusercontent.com/283985/138865245-f8f31279-2938-4748-a36a-df3bfff5089d.png)
