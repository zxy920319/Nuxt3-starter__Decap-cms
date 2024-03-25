# Nuxt3 - Decap CMS boilerplate

## A simple starting point

This boilerplate will get you going quick in building with Nuxt and Decap CMS. The base boilerplate consists out of the following:

### Decap CMS (config.yml)

* SEO anchor ready to go (simply use "- &seo" in any page/ file collection)

* Cloudinary support

### Pages
* Home page = this README content

* A typography page with headings, paragraphs, list etc. to help you write your typography styles in one view

### Styling

* Minimal boilerplate styling

* Simple responsive GRID layout

* Categorized .scss files (main.scss, mixins.scss, type.scss, variables.scss etc.)

* variables.modules.scss which allows you to export your scss variables from variables.scss to be used in JS vars. Example: `const color = variables.myColor`

### Components

* A simplistic menu component which switches to a mobile menu in small viewports

* Layout components (logo, header, footer) already called in layout/default.vue

* A markdown render component (based off the Nuxt Content module) that can render any markdown string

### Composables:

* a 'setSeoHead' composable: just feed the SEOmetaData object (defined in config.yaml) from your api data; `setSeoHead(apiData.SEOmetaData)`

* useBtnData composable: does an api call to /content/buttons.md and returns a single button string. Example `cosnt buttonText = useBtnData('buttonsApi.readmore')` => result: `"hello! Read moar!"`. Conistent button text's throughout your site when using `slot` in a `button.vue` component


## Install

1. Clone this repo

2. `yarn install` or `npm install`


## Boilerplate__extras (folder) !

I found it tough to decide wether to build an extranous boilerplate packed with features or to keep it clean and simple.. So i did both..
Addtional code snippets, components and more can be found in the folder 'boilerplate__extras'. If you want to start clean and simple, just delete the folder!


### /decap__config/

* basic 'products' template (i.e. one level dynamic page names with a re-occuring content structure)

* Dynamic Fields using Yaml anchors (much like a page builder) which includes a carousel/lightbox option for mulitple images

### /forms

In this folder you will find modular form building components. Along with a simple contact form that utilizes a few of these. 
Aside from being modular, the simple contact form has form input validation:
1. Input field validation happens in the child component
2. Child component emits validation data
3. Parent component pushes data in an array and checks if all entries are valid

### /media

#### Carousel.vue component with the following options via props:

* imageOnly (Boolean): enable only an array of image links are provided

* Slides (Array): image, caption

* Timed (Boolean): enables timedSlides() function, a slideshow if you will

* hasEnlarge: Enables an overlay on hover which allows for the carousel to enlarge to 100% of the container (full screen function)

* Color (String): provide a color value for carousel colored elements

#### RespImage

Responsive image component based on Cloudinary transformations

#### Props

* url (String): set up for filename only i.e. `"my-image.jpg"`

* Lightbox (Boolean, default: false): enables lightbox function

* Objectfit (String, default: null): sets CSS object-fit property

* Color (String): passes color to lightbox accent color


#### RespVideo

Responsive video component based on Cloudinary transformations

#### Props

* url (String): set up for filename only i.e. `"my-image.jpg"`

* hasSound (Boolean, default: null): sets muted property. If hasSound is set, video controls will appear to allow playback. Otherwise playback will `autoplay` (if autoplay is set to true)

* Autoplay (Boolean, default null): sets autoplay property when video is in view

* loop (Boolean, default null): Sets loop propery

* id (String):  the autoplay in view feature needs an element id to work. The video is is built using `:id` + `props.url.slice(-10)` (ensures unique id's per page)


### /misc (folder)

In here you will find the dynamicFields.vue component that corresponds with the dynamicFields anchors provided in boilerplate__extras/decap__config/