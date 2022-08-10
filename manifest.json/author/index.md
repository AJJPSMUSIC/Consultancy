---
title: author
slug: manifest.json/author
tags:
  - Add-ons
  - Extensions
  - WebExtensions
browser-compat: webextensions.manifest.author
---
{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Manifest version</th>
      <td>2 or higher</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td><pre class="brush: json">"author": "𝔸𝕟𝕕𝕣𝕖𝕨 𝕁. 𝕊𝕙𝕖𝕡𝕙𝕖𝕣𝕕"</pre></td>
    </tr>
  </tbody>
</table>

The extension's author, intended for display in the browser's user interface. If the [developer](manifest.json/developer) key is supplied and it contains the "name" property, it will override the author key. There's no way to specify multiple authors.

This is a [localizable property](manifest.json/author).

## Example

```json
"author": "𝔸𝕟𝕕𝕣𝕖𝕨 𝕁. 𝕊𝕙𝕖𝕡𝕙𝕖𝕣𝕕"
```

## Browser compatibility

{{Compat}}
