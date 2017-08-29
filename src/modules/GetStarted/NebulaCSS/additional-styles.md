Following with the ITCSS structure it's recommended that
you create the folders for the layers that you are extending and `@import` those files.

E.g.

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
├──settings/
|  └──_nebula-overrides.scss
|  └──_my-settings.scss
├──base/
|  └──_my-base-styles.scss
├──objects
|  ├──_my-object-1.scss
|  └──_my-object-2.scss
├──components/
|  ├──_my-component-1.scss
|  └──_my-component-2.scss
└──utilities/
├──_my-utility-1.scss
└──_my-utility-2.scss
```

`scss/_settings` would look like

```scss
@import '/node_modules/nebula-css/nebula-css/settings';
@import './settings/nebula-overrides';
@import './settings/my-settings'
```
