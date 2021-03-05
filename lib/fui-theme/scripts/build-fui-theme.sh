#!/bin/sh

BUILD_FUI_THEME=1 ember build --environment=development
mv dist/assets/fui-theme.css lib/fui-theme/addon/styles/fui-theme.css
