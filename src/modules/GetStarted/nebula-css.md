`yarn add nebula-css`

## Setup ITCSS structure

Paste the following into your terminal:
```bash
mkdir scss &&
cd scss &&
{
  echo "@import 'settings';"
  echo "@import 'tools';"
  echo "@import 'resets';"
  echo "@import 'base';"
  echo "@import 'objects';"
  echo "@import 'components';"
  echo "@import 'utilities';"
  echo ""
} > main.scss &&
touch _settings.scss _tools.scss _resets.scss _base.scss _objects.scss _components.scss _utilities.scss
cd ..
```

And populate `main.scss` with the following imports:
```scss
/* main.scss */
@import 'settings';
@import 'tools';
@import 'resets';
@import 'base';
@import 'objects';
@import 'components';
@import 'utilities';
```

The blank files imported above should be populated in order to imports its specific ITCSS layer from Luna:
```scss
/* _settings.scss */
@import '/node_modules/nebula-css/nebula-css/settings';
```

Complete for all remaining files within the `scss/` directory.

**Note: Nebula CSS does not ship with a `components` layer so attempting to import it will result in an error.**
