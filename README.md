# Bulma for Drupal 8

A Drupal 8 theme using Bulma, the mobile first and modular CSS framework based on Flexbox.

This project was created with the intention of using it as a parent theme for Drupal web applications. This way the resources would cascade into the child theme, which would contain any style or template overrides and be free to use any other UI frameworks or JavaScript libraries.

It is based on **stable** and is still very much in its infancy. Several of the template files still need the Bulma classes implemented. 

I've added Gulp tasks for compressing all SCSS files into a single CSS file that is referenced in the libraries.yml.

## Getting Started

To implement into a child theme, the {child-theme-name}.info.yml should look something like this:

```yaml
name: ChildTheme
type: theme
description: 'A theme using Bulma as the parent theme.'
core: 8.x
base theme: bulma
```

## Bugs and Issues

Please report any issues you find with this code.

## Built With

* [Bulma](https://bulma.io/) - a free, open source CSS framework based on Flexbox 
* [NodeJS](https://nodejs.org/)
* [GulpJS](https://gulpjs.com/)

## Authors

* **Michael C. Breuer** - *Initial work* - [michabre](https://github.com/michabre)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

Bulma is copyright 2019 Jeremy Thomas. Code released under [the MIT license](https://github.com/jgthms/bulma/blob/master/LICENSE).
