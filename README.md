# Mapping-Earthquakes

## Overview

The purpose of this project is to visually show the differences between the magnitudes of earthquakes all over the world for the last seven days. Readers can click on each circle to get information about the *Magnitude* and the *Location* of the earthquake.

## Tools

The following list of tools and libraries are used to accomplish the final result of this project

- JavaScript
- JSON
- Leaflet & Mapbox
- HTML & CSS

## Results

In this repository I demonstrate how we can build a webpage consisting of map and related tools using public available resource and technology.

A base layer is generated using Mapbox to hold the three base map styles. Overlays are added for the earthquake & tectonic plate data. These data are obtained by making separate API calls using d3.json(). The earthquake data is drilled down into to obtain the magnitude of each instance. This parameter is passed into functions to style the circle markers with both size and color based on the magnitude.

![](https://github.com/albertomontilla17/Mapping-Earthquakes/blob/main/Satellite.png)
![](https://github.com/albertomontilla17/Mapping-Earthquakes/blob/main/Streets.png)
![](https://github.com/albertomontilla17/Mapping-Earthquakes/blob/main/Light.png)
