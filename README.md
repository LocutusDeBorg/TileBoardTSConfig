# TileBoardTSConfig

## What

This is set of configuration scripts, declarations and utilities to configure the TileBoard dashboard using the TypeScript language.

## Why

The author(s) of TileBoard have done a great job of keeping the configuration simple and flexible.  If you know JavaScript, you can very likely get up and running quickly.  But.  As your configuration gets more complex, maintenance and changes become more difficult.  Also, since config.js is 1 huge javascript object, type checking and (by association) "Intellisense" is not as robust.

This project was created so that I can easily write my configuration files as modules (.ts files)...using classes, interfaces, and types.

I also wanted to freshen my TypeScript skills...it's been a while.

## How

- Install npm (TODO: Add link)
- Download the code
- Install rollup: `npm install rollup --global`
- run `npm install`
- Copy rollup.config.example.js to rollup.config.js
- Copy tsconfig.example.json to tsconfig.json
- Edit rollup.config.js (`output.file` item of the default export object) to point to your TileBoard directory 
- Edit rollup.config.js (`input` item of the default export object) to point to your source directory
- Edit tsconfig.json to point to your source directory
- Review/edit the examples in the src directory (I use VSCode...HIGHLY RECOMMENDED!!!)
- Run `npm build`
- Bask in the splendor that is TileBoard (or just reload your TileBoard in your browser) 

BTW, I would recommend keeping your source files outside of the TileBoardTSConfig directory (and change the entries mentioned above in rollup.config.js and tsconfig.json, accordingly).  This will help with versioning:  I won't crush your config files with updates, and you can have a completely separate repo for your stuff (I keep mine with my Home Assistant config files.)  For whatever reason, I wasn't able to get rollup work with external directories.  I ended up using a symlink to my source files.

## When

I will make a best effort to keep up with the changes to TileBoard.  Those guys move fast over there, it might be a challenge.

## Uh-oh

So.  There are a few things that I haven't been able to fix:
 - rollup --watch (TSC bombs if the top level (input) file isn't the one changing)
 - true compile errors from rollup.  If rollup pukes, I just run tsc manually to see the error.
 - transpiling code outside of cwd.

