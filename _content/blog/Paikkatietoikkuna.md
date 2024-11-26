---
layout: ''
title: Paikkatietoikkuna
excerpt: Paikkatietoikkuna is the national geoportal in Finland presenting spatial data and related services from different data producers. Paikkatietoikkuna is an important part of Finland's implementation of Inspire.
date: 2023-12-01 13:00:00 +0200
image: /resources/Paikkatietoikkuna.jpg
tags:
  - Use case
---

# Paikkatietoikkuna

Paikkatietoikkuna is the national geoportal presenting spatial data and related services from different data producers in Finland. Paikkatietoikkuna is an important part of Finland's implementation of Inspire.

## How is Oskari used?

Paikkatietoikkuna, which was first published in 2009 by the National Land Survey of Finland, was the source of the Oskari source code in 2011 when Oskari first went open source. Paikkatietoikkuna is designed to support the INSPIRE-directive implementation and generally the interoperability of spatial data by demonstrating different open map layers that are available in Finland. 

Today, Paikkatietoikkuna contains nearly 4000 map layers from more than 60 Finnish organisations, which is probably the most map layers anybody has in a single Oskari instance. It contains nearly all open map datasets in Finland. It offers a unique platform for the endusers to overlay different thematic map layers and analyse them together in a specific location in Finland. The map layers are imported via APIs, which means that the data in each map layer is as up to date as in the services of the particular data producer. Hence, the data producers are responsible for their own data (each organization has made a contract with us regarding the maintenance of theri datasets). The use of APIs is in the core of the idea of Oskari also: to use the existing spatial data infrastructure as much as possible. 

Registered users can easily customize their own map views, create and save their own map features and even embed maps on their own website. 

One specialty toolset in Paikkatietoikkuna is making statistical thematic maps. 

Another specialty toolset is the coordinate transformation service for Finnish coordinate systems. 

Also today nearly all the code that is developed for Paikkatietoikkuna by the team in National Land Survey is adopted in Oskari and made open for anybody else to use. In the past couple of years we developed e.g. the following in the frontend: 
End user: 
* the swipe-tool
* place name search updates
* jQuery was migrated to React and the user interface and experience was enhanced at the same time in e.g. Thematic (statistical) maps, published maps, map publisher, xxx
* use of OGC API Features
* 3D map tools using 3D Tiles
* aerial photos time series tool with a cool index map for sparse coverage data

Admin-user: 
* administrative tools for managing map layers were improved a lot
* map layer monitoring tool
* user role management was improved
* styling for vector features
* property-based filtering of vector features
* renaming and ordering of feature properties

In the future, we've identified e.g. the following needs, that we will try to eventually work on: 
* updating the Java version on server side
* combining the database for user's features and datasets
* improving Matomo user monitoring
* coordinate transformation tool to use the open source PROJ-library (which is currently updated to contain all Finnish systems)

If you are interested to contribute to any of these, please let us know, so that we could perhaps discuss combining our resources! 

## Who is the map service for?

Paikkatietoikkuna is intended for both spatial data professionals and everyone who is interested in maps and spatial data. 

Today,  on weekdays the geoportal has over 4000 daily users. Around half of the users use the platform for professional use, and another half use it in their free time. Many use it in both. 

## Find out more!

[https://kartta.paikkatietoikkuna.fi/?lang=en](https://kartta.paikkatietoikkuna.fi/?lang=en)
