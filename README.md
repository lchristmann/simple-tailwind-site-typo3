# Simple Tailwind Site TYPO3

This is a **simple TYPO3 8.7 website** using a **site package** based on Tailwind CSS.

## Prerequisites

- [DDEV](https://ddev.com/)

## Get this quickly up and running

1. First `git clone` or download it.
2. Install dependencies with ddev and start the project.
    ```shell
    ddev composer install
    ddev start
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

\<TBD>