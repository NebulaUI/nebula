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