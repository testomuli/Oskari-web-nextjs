---
layout: post
title: 'Oskari version 2.14.0 is available!'
excerpt: 'December 2024 saw the release of Oskari 2.14.0.'
date: 2025-01-28 13:00:00 +0200
categories: [developing]
tags:
  - blog
---

![Oskari 2.14.0 released](/resources/2025/oskari_2140.png)

# 2.14.0 is here!

Oskari 2.14.0. has been released in December 2024. It is available on (GitHub)[https://github.com/oskariorg] and Oskari.org Maven repository. The sample application package has been updated on [the download page](https://oskari.org/download) and [the OSGeo website](https://download.osgeo.org/oskari/). As always you can take a peek at the latest release at **https://demo.oskari.org/**

# Progress on the React.js migration

The 2.14.0 release doesn’t have too many new features, but lots of dependency updates and progress on the jQuery to React.js migration. Almost all of the tools for publisher functionality have been migrated to React already and we are on the last steps of migrating the rest of the publisher UI. **This means that any jQuery-based application specific publisher tools will not work in a future release so it’s a good time to update them if you have any!**

This release also has a major version update for AntD (the component library we use for UI) so you might need to tune some CSS on your application on the update. See [the Migration guide](https://github.com/oskariorg/oskari-server/blob/master/MigrationGuide.md) for details.
 
This is also the first release after our new documentation site went live. **See the combined notes for the 2.14.0 release on [the Changelog](https://oskari.org/documentation/docs/2.14.0/12-Changelog).**

# Other highlights of 2.14.0. for users

For admins of Oskari services 2.14.0 brings some small improvements. For example, the built-in system roles (Admin, Guest, [a logged in] User) are now separated from any additional roles in user listings to improve usability. For announcements, a banner on top of the page is now set as the default setting instead of a pop-up window.

The end-users might notice some improvements, too. The layerswipe bundle (which handles the comparison of two map layers) has been migrated to React and now supports touch screens as well. But due to changes in OpenLayers the tool is currently not working properly on vector layers with transparency. If embedded maps or saved views use time series, the restoring to the saved state now works as expected. Also, selecting features by drawing a selection on map is now more user-friendly.

# Up next: Oskari 3.0!

We are starting our migration from Java 8 to Java 17 for Oskari-server and the next release will probably be the 3.0 version with the Java migration done. We might also change some things on the frontend side to streamline developer experience for Oskari.

As of now, it hasn’t been decided if we are doing a similar thing as with 1.0 -> 2.0 where you needed to update to 1.56 before updating to 2.0. We might, but it might not be required this time. We’ll let you know when we get there, but it doesn’t hurt updating to 2.14.0 now either.

The tentative release schedule at this point for 3.0 would be at about March/April 2025.