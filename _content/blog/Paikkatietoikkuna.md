---
layout: ''
title: Paikkatietoikkuna
excerpt: Paikkatietoikkuna is the national geoportal in Finland presenting spatial data from different data producers. Paikkatietoikkuna is an essential part of implementation of Inspire in Finland.
date: 2023-12-01 13:00:00 +0200
image: /resources/Paikkatietoikkuna.jpg
tags:
  - Use case
---

# Paikkatietoikkuna

Paikkatietoikkuna is the national geoportal presenting spatial data from different data producers in Finland. Paikkatietoikkuna is an essential part of implementation of Inspire in Finland.

## How is Oskari used?

Paikkatietoikkuna, which was first published in 2009 by the National Land Survey of Finland, was the source of the Oskari source code in 2011 when Oskari first went open source. Paikkatietoikkuna is designed to support the INSPIRE-directive implementation and generally the interoperability of spatial data by demonstrating different open map layers that are available in Finland. 

Today, Paikkatietoikkuna contains nearly 4000 map layers from more than 60 Finnish organisations, which is probably the most map layers anybody has in a single Oskari instance. It contains nearly all open map datasets in Finland. It offers a unique platform for the end users to overlay different thematic map layers and analyse them together in a specific location in Finland. The map layers are imported via APIs, which means that the data in each map layer is as up to date as in the services of the particular data producer. Hence, the data producers are responsible for their own data (each organization has made a contract with us regarding the maintenance of their datasets). The use of map APIs is in the core of the idea of Oskari interface: to use the existing spatial data infrastructure as much as possible. 

Registered users can easily customise their own map views, create and save their own map features and even embed maps on their own website. 

One special toolset in Paikkatietoikkuna is statistical thematic maps. Another specialty toolset is the coordinate transformation service for Finnish coordinate systems. 

Today, nearly all the code that is developed for Paikkatietoikkuna by the team in National Land Survey is adopted in Oskari and made open for anybody else to use. In the past couple of years we developed or improved e.g. the following functionalities in the Oskari frontend: 

For end user: 
* mobile use
* swipe-tool for comparing overlaying map layers
* updating the place name search to use the National Land Survey new geocoding service
* 3D map viewing
* aerial photos time series tool with an index map for sparse coverage data

For admin user: 
* in general, administrative tools for managing map layers were improved a lot
* use of new APIs such as OGC API Features and Vector Tiles
* monitoring tool for map layers and their functioning
* improved styling options for vector features
* property-based filtering of vector features

For the future, we've identified e.g. the following needs, that we would like to work on at some point when possible: 
* finalizing migration from jQuery to React and improving the UX
* continue improving mobile use
* updating the Java version on server side
* combining the database for end user's features and datasets
* improving Matomo user monitoring
* coordinate transformation tool to use the open source PROJ-library (which is currently updated to contain all Finnish systems)
* improving accessibility
* spatial analysis tools
* enhancing the map layer monitoring and reporting tools
* improving the way metadata descriptions are shown
* improving the performance of Oskari in general
* improving the 3D map viewing, tools and performance
* automatic updating of map layer capabilities information

If you are interested in contributing to any of these, please let us know, so that we could perhaps discuss combining our resources! 

## Who is the map service for?

Paikkatietoikkuna is intended for both spatial data professionals and everyone who is interested in maps and spatial data. 

Today, on weekdays the geoportal has over 4000 daily users. Around half of the users use the platform at work, and another half use it in their free time. Many use it in both. 

## Find out more!

[https://kartta.paikkatietoikkuna.fi/?lang=en](https://kartta.paikkatietoikkuna.fi/?lang=en)
