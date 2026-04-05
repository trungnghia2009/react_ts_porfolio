// this is a global declaration file for TypeScript to recognize image imports
// it allows you to import image files as modules in your TypeScript code
// for example, you can import a PNG file like this:
// import logo from "./logo.png";
// and TypeScript will understand that "logo" is a string representing the path to the image file

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
