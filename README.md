# Simple Tailwind Site TYPO3

This is a **simple TYPO3 8.7 website** using a **site package** based on Tailwind CSS.

All work of mine is inside the `packages/t3_tailwind` folder - the rest is just a standard installation (see [How I created this TYPO3 site](#how-i-created-this-typo3-site).

If you choose to copy just this single `t3_tailwind` package to your site, remember to install it via `ddev composer require lchristmann/t3_tailwind`.

## Prerequisites

- [DDEV](https://ddev.com/)

## Get this quickly up and running

1. First `git clone` or download it.
2. Install dependencies with ddev and start the project.
    ```shell
    ddev composer install 
    ddev start
    ddev import-db --file=db.sql.gz
    ```
3. Open the site in the browser, if prompted to create a FIRST_INSTALL file, run this.
    ```shell
    ddev exec touch public/FIRST_INSTALL
    ```
   Then click `I know what I'm doing, continue!` and set up an admin.
4. Create the pages `Home` (make it root) and below it `About`, `Blog`, `Docs`, `Changelog`. 
5. Create a root TypoScript Template record for the `Home` page (in the Web > Template module), go to the `Includes` Tab and include the `t3_tailwind` static TypoScript from the site package extension.  

From now on, you can start and stop this project with `ddev start` and `ddev stop`.

## Development

For easier development I added the DDEV Add-On "PhpMyAdmin" (with `ddev add-on get ddev/ddev-phpmyadmin`), which you can install and run with `ddev phpmyadmin` and easily inspect the contents of the `db` database.

When having added content during development that affects the website, redo and commit the database export `db.sql.gz` again: `ddev export-db --file=db.sql.gz`.

## How I created and installed the site package

First I set up the files and folders necessary (see `packages/t3_tailwind`). Then I ran:

```shell
ddev composer require lchristmann/t3_tailwind
```

> You don't need to run this anymore, I already did it, so this dependency is defined in the root composer.json and installed with `ddev composer install`.

## How I created this TYPO3 site

```shell
ddev config --project-type=typo3 --docroot=public --php-version 7.4 \
 --composer-version "2.2" --webserver-type 'apache-fpm'
ddev composer create --no-install "typo3/cms-base-distribution:^8.7"
ddev composer install
ddev start
ddev exec touch public/FIRST_INSTALL
```

Then I manually created the folder structure and files necessary for the site package to work.

## Documentation on how a site package works

Usually you would probably use the [Site Package Builder](https://get.typo3.org/sitepackage). But I chose to build it from scratch because...

1. ... the builder forces you to select Typo3 versions > 10.4 (as of March 2025) and I am practicing Typo 8.7.
2. ... I want to understand what is really necessary for a site package and how to build a minimal one.

Therefor I read the [TYPO3 Sitepackage Tutorial](https://docs.typo3.org/m/typo3/tutorial-sitepackage/8.7/en-us/Index.html), which happens to written and [the corresponding videos](https://docs.typo3.org/m/typo3/tutorial-sitepackage/8.7/en-us/Summary/Index.html#videos-on-youtube) recorded for Typo3 8.7 anyways.

I still checked out the educational tutorial from site package builder and some other packages just for reference.

### What makes a site package?

A site packages is like a Typo3 extension, but a lot simpler, because it doesn't have any PHP code or database stuff.

The below directory structure is a simple site package.

```text
.
├── composer.json
├── ext_emconf.php
├── ext_icon.svg
├── ext_tables.php
├── Configuration
│   └── TypoScript
│       └── setup.typoscript
└── Resources
    ├── Private
    │   ├── Layouts
    │   │   └── Default.html
    │   ├── Partials
    │   │   ├── Footer.html
    │   │   └── Header.html
    │   └── Templates
    │       ├── Default.html
    │       └── Home.html
    └── Public
        ├── Icons
        │   ├── identicon.png
        │   └── tailwind.svg
        ├── Images
        │   └── pattern-image.png
        └── JavaScript
            └── mobileMenu.js
```

The top-level files:

- `composer.json`: makes the site package available to be installed by Composer to the `public/typo3conf/ext` directory (where custom extensions are, too - Typo3 doesn't really differentiate here... Site Packages are treated pretty much the same as extensions. The term seems to be just for us developers, so when someone speaks of site package we know it's just configuration, templates and other static resources and _no functionality_ via PHP code and databases)
- `ext_emconf.php`: some basic info for the Extension Manager and the [Typo3 Extension Repository (TER)](https://extensions.typo3.org/) with `'category' => 'templates'` signaling it's a site package ([see attribute docs](https://docs.typo3.org/permalink/t3coreapi:confval-ext-emconf-category)).
- `ext_icon.svg`: will be displayed in the Extension Manager or TER
- `ext_tables.php`: add the site package's TypoScript as static config file, so it can be included by selecting the website's root TypoScript template > visit "Includes" Tab > select the title of your site package
  - note that `extKey` here (the first parameter of the `addStaticFile()` method), _must be exactly the same_ as the `typo3/cms/extension-key` in the `composer.json` file for the site package to work!!

The folders / files inside those:

- `Configuration/TypoScript/setup.typoscript`: the TypoScript file, that gets included in the website's root template record and configures the rendering for the entire website 
- `Resources/Private`: Fluid stuff for rendering ~ [Templates, Layouts and Partials](https://docs.typo3.org/m/typo3/tutorial-sitepackage/8.7/en-us/FluidTemplates/Index.html#folders-under-private)
- `Resources/Public`: public resources that shall be served to the browser as-is. Many site packages have a folder `Css` there, too.