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
  echo "@import '/node_modules/nebula-components/nebula-components/settings';"
} > _settings.scss &&
{
  echo "@import '/node_modules/nebula-components/nebula-components/tools';"
} > _tools.scss &&
{
  echo "@import '/node_modules/nebula-components/nebula-components/resets';"
} > _resets.scss &&
{
  echo "@import '/node_modules/nebula-components/nebula-components/base';"
} > _base.scss &&
{
  echo "@import '/node_modules/nebula-components/nebula-components/objects';"
} > _objects.scss &&
{
  echo "@import '/node_modules/nebula-components/nebula-components/components';"
} > _components.scss &&
{
  echo "@import '/node_modules/nebula-components/nebula-components/utilities';"
} > _utilities.scss
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