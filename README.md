To install the plugin `skpm` needs to be installed globally. For webview the plugin depends on [sketch-module-web-view](https://github.com/skpm/sketch-module-web-view). To build and link the plugin run,

```bash
yarn
```

When the plugin is run using `sketchtool` it crashes Sketch. This does not happen when run from the Sketch UI. To reproduce the crash run,

```bash
/Applications/Sketch.app/Contents/Resources/sketchtool/bin/sketchtool run ~/Library/Application\ Support/com.bohemiancoding.sketch3/Plugins/sketch-crash-plugin/sketch-crash-plugin.sketchplugin my-command-identifier
```

Change the path to the sketchtool or, plugin folder if it is different on your machine