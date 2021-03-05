#!/bin/sh

BUILD_FUI_THEME=1 yarn build --environment=development
mv dist/assets/fui-theme.css vendor/fui-theme.css
