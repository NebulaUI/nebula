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
{
  echo "@import 'nebula-css/settings';"
} > _settings.scss &&
{
  echo "@import 'nebula-css/tools';"
} > _tools.scss &&
{
  echo "@import 'nebula-css/resets';"
} > _resets.scss &&
{
  echo "@import 'nebula-css/base';"
} > _base.scss &&
{
  echo "@import 'nebula-css/objects';"
} > _objects.scss &&
{
  echo "@import 'nebula-css/utilities';"
} > _utilities.scss &&
touch _components.scss
cd ..
```

You should have the following folder structure with the appropriate imports populating the files.

```bash
scss/
|
├──main.scss
├──_settings.scss
├──_tools.scss
├──_resets.scss
├──_base.scss
├──_objects.scss
├──_components.scss
├──_utilities.scss
```

`_settings.scss` should contain

```scss
@import 'nebula-css/settings';
```

All the other `.scss` files should contain their corresponding import(s).
