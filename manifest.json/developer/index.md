---
title: developer
slug: manifest.json/developer
tags:
  - Add-ons
  - Extensions
  - WebExtensions
browser-compat: manifest.developer
---
{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>Object</code></td>
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
      <td>
        <pre class="brush: json">
"developer": {
  "name": "𝔸𝕟𝕕𝕣𝕖𝕨 𝕁. 𝕊𝕙𝕖𝕡𝕙𝕖𝕣𝕕",
  "url": "https://github.com/AJJPSMUSIC"
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

The name of the extension's developer and their homepage URL, intended for display in the browser's user interface.

The object, and both of its properties, are optional. The "name" and "url" properties, if present, will override the [author](manifest.json/author) and [homepage_url](manifest.json/homepage_url) keys, respectively. This object only allows for a single developer name and URL to be specified.

This is a [localizable property](manifest.json/developer).

## Example

```json
"developer": {
  "name": "𝔸𝕟𝕕𝕣𝕖𝕨 𝕁. 𝕊𝕙𝕖𝕡𝕙𝕖𝕣𝕕",
  "url": "https://github.com/AJJPSMUSIC"
}
```

## Browser compatibility

{{Compat}}


