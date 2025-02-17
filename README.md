
# Sticky Bookmarks

Simple sticky bookmarks that can be placed on any line and stay associated with that line no matter how much the file is edited. Bookmarks are persistant over saves with no meta information needed. The UI follows the classic paradigm of toggling and jumping with the addition of a view in the Explorer Panel.

This extension started as a copy of the extension [sticky-bookmarks](https://github.com/tintinweb/vscode-inline-bookmarks) and still has much of the code unchanged.

#### Overview

* Each bookmarked line has the token `//>` at the end in plain text. Comment coloring makes this stand out.
* The toggle bookmark command adds/removes that token or you can edit it directly.
* An icon in the gutter makes the bookmarked lines more visible.
* Easily navigate to bookmarks from the **Sticky Bookmarks View** added to the Explorer Panel. 

#### Limitations

* Sticky Bookmarks do not work in `.json` files because they do not support comments
* Sticky Bookmarks do work inside backtick strings (also known as template literals) that cross line endings, but the token will appear inside the resulting string.

#### Bookmarks View

* click on a bookmark to jump to its location
* click refresh to re-scan loaded files for changes
* toggle to only show bookmarks for visible editors
* the bookmarks view will follow your cursor location in the editor. the follow mode can be changed with the configuration option `sticky-bookmarks.view.followMode`.
* jump to next/previous bookmark with commands `stickyBookmarks.jumpToNext`, `stickyBookmarks.jumpToPrevious` (assign your own keyboard shortcut in vscode preferences) 
* apply custom filter to bookmarks view with command `stickyBookmarks.setTreeViewFilterWords`.
  * empty list unsets filter
  * takes space- or semicolon-delimited list of regular expressions applied on the items label.
  * affects `jumpToNext`, `jumpToPrevious`
  
Buttons (left to right):
- Jump to previous bookmark.
- Jump to next bookmark.
- Filter bookmark view: the prompt accepts regular expressions. keep empty to disable filtering.
- Toggle: show bookmark for visible editors only.
- Quick Refresh: refreshes the bookmark from the internal cache.
- Scan Workspace for Bookmarks: scans all documents in the workspace for bookmark tags

Optionally, hide items from the bookmarks view that are excluded by a downstream `.gitignore` file (`sticky-bookmarks.view.exclude.gitIgnore`; default: `false`; requires reload).

## FAQ

#### Q: Where do I find more settings?

Go to `code → preferences → Extensions: Sticky Bookmarks`.

#### Q: How can I reset the extensions bookmark cache in case of permanent errors?

Bookmarks are cached in the vscode workspace. In case of permanent "ghost entries" or other errors you might want to try to execute the command: `stickyBookmarks.debug.state.reset`. This is going to reset the cache and allow the extension to populate it from scratch. Bookmarks are typically added as you go when opening new files in the editor. You can also make the extension scan the workspace for files containing Bookmarks. We don't do this automatically as it is quite resource intensive.

#### Q: How can I control which paths/file-extensions are being processed by the extension?

By default all paths are included (`sticky-bookmarks.search.includes`) except the ones defined with `sticky-bookmarks.search.excludes` (supports wildcard path globs).

Additionally, file-extensions configured with `sticky-bookmarks.exceptions.file.extensions.ignore` will be excluded as well (prefer this over `search.excludes`). 

**Note**

* `gutterIconColor` may be used to specify a custom icon color using any RGBA format. gutterIconColor will override gutterIconPath. See example below.
* You can assign multiple regex trigger words to a decoration style. See example.

**Example word mapping:** (accepts regular expressions; `\` needs to be encoded as `\\`)

```json
"sticky-bookmarks.expert.custom.words.mapping": {
    "blue": ["@audit\\-info[ \\t\\n]"],
    "purple": ["@audit\\-issue[ \t\\n]"],
    "green": ["@audit\\-ok[ \\t\\n]"],
    "red": ["@audit[ \\t\\n]"],
    "warn": ["@warn[ \\t\\n]"] 
}
```

**Example style definition:** (all [vscode style properties](https://code.visualstudio.com/api/references/vscode-api#DecorationRenderOptions) are allowed)

```json
"sticky-bookmarks.expert.custom.styles": {
    "default": {
        "gutterIconColor": "#157EFB",
        "overviewRulerColor": "rgba(21, 126, 251, 0.7)",
        "light": {
            "fontWeight": "bold"
        },
        "dark": {
            "color": "Chocolate"
        }
    },
    "red": {
        "gutterIconColor": "#F44336",
        "light": {
            "fontWeight": "bold"
        },
        "dark": {
            "color": "Chocolate"
        }
    },
    "blue": {
        "gutterIconColor": "#157EFB",
        "light": {
            "fontWeight": "bold"
        },
        "dark": {
            "color": "Chocolate"
        }
    },
    "green": {
        "gutterIconColor": "#2FCE7C",
        "light": {
            "fontWeight": "bold"
        },
        "dark": {
            "color": "Chocolate"
        }
    },
    "purple": {
        "gutterIconColor": "#C679E0",
        "light": {
            "fontWeight": "bold"
        },
        "dark": {
            "color": "Chocolate"
        }
    },
    "warn": {   // example custom style with yellow color
        "gutterIconColor": "#F4F400",
        "overviewRulerColor": "#F4F400B0",
        "light": {
            "fontWeight": "bold"
        },
        "dark": {
            "color": "Chocolate"
        }
    }
}
```

#### Q: How can I bind keys to `jumpToNext` and `jumpToPrevs` bookmark?

See https://code.visualstudio.com/docs/getstarted/keybindings.

#### Q: How can I change the bookmark-view's follow mode?

`sticky-bookmarks.view.followMode` allows you to specify if you want to select the `nearest` bookmark relative to the current editor selection (default) or the next one (`chapter` mode).

#### Q: How can I make the bookmark-view's `jumpToNext` and `jumpToPrevs` behavior use the current selected line instead of the last selected bookmark?

`sticky-bookmarks.view.lineMode` can be configured to `current-line`. Also see #40.

#### Q: How can I scan the workspace for bookmarks?

For performance reasons we do not automatically scan the complete workspace for bookmarks. They are instead added whenever a bookmark is encountered in a file opened in the editor. Bookmarks are then cached in the workspace and revalidated when a file is opened in the editor. In order to allow you to scan the complete workspace for bookmarks we have added a command `stickyBookmarks.scanWorkspace` that is also exposed as a button in the bookmark-view. Note that this will temporarily load files matching the search path into the editor to check for bookmarks which may demand some resources. 



-----------------------------------------------------------------------------------------------------------
