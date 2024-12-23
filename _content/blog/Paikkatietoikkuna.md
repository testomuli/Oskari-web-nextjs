---
layout: ''
title: Paikkatietoikkuna
excerpt: Paikkatietoikkuna is the national geoportal of Finland presenting spatial data from different data producers. Paikkatietoikkuna is an essential part of implementation of the INSPIRE directive in Finland.
date: 2023-12-01 13:00:00 +0200
image: /resources/Paikkatietoikkuna.jpg
tags:
  - Use case
---

# Paikkatietoikkuna

Paikkatietoikkuna is the national geoportal of Finland presenting spatial data from different data producers. Paikkatietoikkuna is an essential part of implementation of the INSPIRE directive in Finland.

## How is Oskari used?

Paikkatietoikkuna was first published in 2009 by the National Land Survey of Finland. The original source code of Oskari originates from Paikkatietoikkuna from 2011 when Oskari first went open source. Paikkatietoikkuna is designed to support the implementation of the INSPIRE directive and generally the interoperability of spatial data by demonstrating different open map layers that are available in Finland. 

Today, Paikkatietoikkuna contains nearly 4000 map layers from more than 60 Finnish organisations, which is probably the most map layers anybody has in a single Oskari instance. Paikkatietoikkuna contains nearly all open map datasets in Finland. It offers an unique platform for the end users to overlay different thematic map layers and analyse them together in a specific location in Finland. 

The map layers are imported through APIs, ensuring that the data in each layer is as current as the data provided by the respective data producer's services. Hence, the data producers are responsible for their own data and each organization has made a contract with us regarding the maintenance of their datasets. The use of map APIs is in the core of the idea of Oskari interface: to use the existing spatial data infrastructure as much as possible. 

Registered users of Paikkatietoikkuna can easily customise their own map views, create and save their own map features and even embed maps on their own website. 

Paikkatietoikkuna offers unique toolsets, including statistical thematic maps and a specialized coordinate transformation service for Finnish coordinate systems.

Today, nearly all the code that is developed for Paikkatietoikkuna by the team in National Land Survey is adopted in Oskari and made open for anyone to use. In the past couple of years Paikkatietoikkuna developed or improved e.g. the following functionalities in the Oskari frontend: 

For end user: 
* mobile use
* swipe-tool for comparing overlaying map layers
* updating of the place name search to use the new geocoding service of National Land Survey
* 3D map viewing
* aerial photos time series tool with an index map for sparse coverage data

For admin user: 
* major improvements to the administrative tools for managing map layers
* use of new APIs such as OGC API Features and Vector Tiles
* monitoring tool for map layers and their functioning
* improved styling options for vector features
* property-based filtering of vector features

For the future, NLS FI have identified e.g. the following needs, that they would like to work on at some point when possible: 
* finalizing migration from jQuery to React and improving the UX
* improving mobile use further
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

If you are interested in contributing to any of these, please let NLS FI know, so that you could perhaps discuss combining the resources! 

## Who is the map service for?

Paikkatietoikkuna is intended for both spatial data professionals and everyone who is interested in maps and spatial data. 

As of 2024, on weekdays the geoportal has over 4000 daily users. Around half of the users use the platform at work, and another half use it in their free time. Many use it in both. 

## Find out more!

[https://kartta.paikkatietoikkuna.fi/?lang=en](https://kartta.paikkatietoikkuna.fi/?lang=en)
