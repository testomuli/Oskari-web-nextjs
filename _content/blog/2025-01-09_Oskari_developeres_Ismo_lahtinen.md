---
layout: post
title: 'Oskari developers: Ismo Lahtinen'
excerpt: 'We interviewed Ismo Lahtinen about his experiences in developing Oskari.'
date: 2025-01-09 11:00:00 +0200
categories: [testing]
tags:
  - blog
---

# Oskari developers: Ismo Lahtinen

Oskari is constantly developed, updated and maintained in different organizations. We had the joy of discussing with a few Oskari developers this autumn about their experiences with Oskari. We went through what kind of developing projects they have had, what kind of problems they faced and what it’s like to develop Oskari. 

Ismo Lahtinen from Gispo Finland Ltd. has 10 to 20 years of experience in developing GIS software (the years depend on how you count it). During that time Lahtinen has made, among other things, browser applications using various tools such as ESRI’s tools and open source software.

## Oskari experience from Finnish Environment Institute

Lahtinen has been involved with Oskari since 2017 or 2018. At that time he was working in the Finnish Environment Institute. The organization already had an Oskari-based map service Liiteri in use. Lahtinen was mainly responsible for maintaining Liiteri and made small development tasks. His tasks included, among other things, security updates and working with various customized parts of the software.

Lahtinen is a newcomer to Oskari development in the sense that Liiteri had developed into its own application. At the time there was difficulty in, among other things, to recognise and separate the Oskari code from the code of Liiteri’s customizations. According to Lahtinen, Oskari's documentation was much worse than it is now. In 2024 the documentation has taken a huge leap forward. Back in the day, the only way to understand Oskari was to look at the source code.

“The impression I got from Liiteri was that it was very stable” comments Lahtinen now. “The problems were specifically related to development, and the problems came when changes were made to a system related to Oskari and they had to be configured. It wasn’t that the software would scale poorly or crash, at least not when I was involved in it.”

## Current Oskari project

Currently Lahtinen is working on a project that makes quite a lot of use of Oskari.

In the current project, challenges could have been solved mostly by reading the documentation. Most of the time in the project, Oskari's former product owner, Timo Aarnio, sits next to him. As Aarnio has a very deep understanding of Oskari, Lahtinen could have had help very easily. Oskari's Gitter channel works well, too, and the technical coordinator of Oskari, Sami Mäkinen, answers Lahtinen's questions “so quickly it’s bizarre".

The challenges that Lahtinen has had with Oskari now have been related to the slight vagueness of the documentation. 

“I would like things to be presented more precisely. It shows in small things, for example when I looked at the old RPC implementation, which used a metadata bundle. Somewhere I find a mention that a new one had been made, maybe "metadata-service" or "metadata-catalog". If you try to search with these names, then in the Oskari API under the bundles section there is surprisingly "metadata", "metadata-flyout" and of these, "metadata" is the one that is deprecated. These have been really confusing for me, i.e. which metadata bundle should be used. But at the same time, these have developed a lot and when you fix them, it is easy. But being able to extract the right information is difficult for me.”

## Oskari on code level

When it comes to the code, Lahtinen doesn't really have anything negative to say. He was happy to hear that there will be an update to the Java and Spring versions in 2025.

During the current project Lahtinen has heard feedback that Oskari’s UI design is outdated. To him, there's nothing stopping people from using React (as is the case in Oskari front-end) these days.

"Many people have the idea that when you use Oskari, the UI will look a certain way: certain things and certain buttons on the left side. That may be partly true, but the image of Oskari shouldn’t be fixed to the default UI look" says Lahtinen.

If there had been questions left unanswered in the documentation, Lahtinen has made issues on GitHub. Though he states that he probably could have figured out all of them himself, he has made an issue if there has been something that he hasn't been 100% sure if he understood it correctly.

Finally we asked what Lahtinen would improve in Oskari.

“Documentation. Overall, I would consider this a very high-quality solution in terms of versatility and customizability. I don't know in which direction this would be expanded.”
