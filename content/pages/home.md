---
en:
  content: >-
    从波罗的海岸到阿尔卑斯山，从乌拉尔山脉到大西洋东岸，在辽阔的欧洲大地上，聚集着一群黄皮肤、黑头发的人，他们当中，曾是风华正茂的莘莘学子，如今是具
    有国际一流水平的专家、学者。他们的共同的理念是，建立跨专业、跨学科的华人知识团体，为中国的改革与建设出一份力。於是，2001年秋天在欧洲的金融中
    心法兰克福，十几个旅欧华人专业团体的代表相聚在一起，宣告"全欧华人专业协会联合会"(FCPAE)成立了，......


    ## 欧洲论坛简介


    ’欧洲论坛’的全称是《FCPAE欧洲论坛》，是2009年联合会在时任轮值主席协会中国旅法工程师协(AICF)及理事协会全法中国科技者协会(ASICEF)的倡议下，在法国巴黎创立的。欧洲论坛每年在欧洲一个国家举办。


    ## FCPAE专业论坛介绍


    依托全欧华人专业协会联合会理事单位协会的专业人才资源，联合会成立了《FCPAE微电子专业论坛》（成立于2004年6月）、《中欧生命科学论坛 》（与中国海智办公室联合成立于2015年2月）。这些专业性论坛，是面向全欧洲的华人华侨的科技专业组织。


    # Nuxt3 - Decap CMS boilerplate


    **Live boilerplate example:** https://sailsnake-nuxt-decap-boilerplate.netlify.app


    **Link to repo:** https://github.com/Sfolkerts89/Nuxt3-starter__Decap-cms


    ## A simple starting point


    This boilerplate will get you going quick in building with Nuxt and Decap CMS. The base boilerplate consists out of the following:


    ### Decap CMS (config.yml)


    * SEO anchor ready to go (simply use "- &seo" in any page/ file collection)

    * Cloudinary support


    ### Pages


    * Home page (this README content)

    * A typography page with headings, paragraphs, list etc. to help you write your typography styles in one view


    ### Styling


    * Minimal boilerplate styling

    * Simple responsive GRID layout

    * Categorized .scss files (main.scss, mixins.scss, type.scss, variables.scss etc.)

    * variables.modules.scss which allows you to export your scss variables from variables.scss to be used in JS vars. Example: `const color = variables.myColor`


    ### Components


    * A simplistic menu component which switches to a mobile menu in small viewports

    * Layout components (logo, header, footer) already called in layout/default.vue

    * A markdown render component that renders markdown to an HTML string server side (NOTE: it is harnessing an experimental feature 'islandComponents'; to remove set: nuxt.config.ts: islandComponents =>  false, remove the '.server' suffix from ParseMarkdown.server.vue)


    ### Composables:


    * mdToHtml() composable: uses Nuxt/Content/MDC renderer. This first renders an HTML object from markdown input and returns the HTML object as a single string. This renders server side ;)

    * setSeoHead() composable: just feed the SEOmetaData object (defined in config.yaml) from your api data; `setSeoHead(apiData.SEOmetaData)`

    * useBtnData() composable: does an api call to /content/buttons.md and returns a single button string. Example `const buttonText = useBtnData('buttonsApi.readmore')` => result: `"hello! Read moar!"`. Conistent button text's throughout your site when using `slot` in a `button.vue` component


    ## Install


    1. Clone this repo: `git clone https://github.com/Sfolkerts89/Nuxt3-starter__Decap-cms.git` or click 'Use this template'

    2. `yarn install` or `npm install`

    3. Run frontend locally: `yarn dev` or `npm run dev`

    4. Boot up Decap CMS locally:


    * uncomment `local_backend: true` (*leave this out in production for safety's sake*)

    * run `npx decap-server`

    * Navigate to: localhost:3000/admin (asuming you have a frontend instance running)


    ## Netlify deployment


    * Build command: `npm run generate` (dont use YARN: Node will run out of memory)

    * Publish directory: `dist`


    ## Boilerplate__extras/ (folder)


    I found it tough to decide wether to build an extranous boilerplate packed with features or to keep it clean and simple.. So i did both.. Addtional code snippets, components and more can be found in the folder 'boilerplate__extras'. If you want to start clean and simple, just delete the folder!


    ### /decap__config/


    * basic 'products' collection (i.e. one level dynamic page names with a re-occuring content structure)

    * Dynamic Fields using Yaml anchors (much like a page builder) which includes a carousel/lightbox option for mulitple images

    * Dynamic Fields collection: code snippet that can be used as is and built upon/ changed to suite your needs.


    ### /nuxt__pages/


    #### /product/ + \[slug].vue


    A simple dynamic page based of slug as a parameter set up as a 'products' page. This is in relation to the 'products' colleciton in boilerplate**extras/decap**config/


    #### Contact.vue


    Very simplistic contact page that includes the `<BasicInquery />' component. Place the 'forms' folder in a corresponding 'components' folder in your project and uncomment for use.


    #### dynamic-fields.vue


    A page that utlizes the `<dynamicFields />` component. This works in relation with:


    * The Dynamic Fields anchor provided in: /decap__config/

    * The Dynamic Fields collection provided in: /decap__config/


    #### Products.vue


    A simple page displays all the products in the products collection. 


    ### vue__components/forms/


    In this folder you will find modular form building components. Along with a simple contact form that utilizes a few of these.  Aside from being modular, the simple contact form has form input validation:


    1. Input field validation happens in the child component

    2. Child component emits validation data

    3. Parent component pushes data in an array and checks if all entries are valid


    ### /vue__components/media/


    #### Carousel.vue component with the following options via props:


    * imageOnly (Boolean): enable only an array of image links are provided

    * Slides (Array): image, caption

    * Timed (Boolean): enables timedSlides() function, a slideshow if you will

    * hasEnlarge: Enables an overlay on hover which allows for the carousel to enlarge to 100% of the container (full screen function)

    * Color (String): provide a color value for carousel colored elements


    #### RespImage.vue


    Responsive image component based on Cloudinary transformations


    ##### Props


    * url (String): set up for filename only i.e. `"my-image.jpg"`

    * Lightbox (Boolean, default: false): enables lightbox function

    * Objectfit (String, default: null): sets CSS object-fit property

    * Color (String): passes color to lightbox accent color


    ##### RespVideo.vue


    Responsive video component based on Cloudinary transformations


    #### Props


    * url (String): set up for filename only i.e. `"my-image.jpg"`

    * hasSound (Boolean, default: null): sets muted property. If hasSound is set, video controls will appear to allow playback. Otherwise playback will `autoplay` (if autoplay is set to true)

    * Autoplay (Boolean, default null): sets autoplay property when video is in view

    * loop (Boolean, default null): Sets loop propery

    * id (String):  the autoplay in view feature needs an element id to work. The video is is built using `:id` + `props.url.slice(-10)` (ensures unique id's per page)


    ### vue__components/misc/ (folder)


    * DynamicFields.vue: In here you will find the dynamicFields.vue component that corresponds with the 'dynamicFields.vue'. You will need this component to render the fields 'dynamic-fields' collection in dynamicFields.vue

    * Copyright.vue: A component displaying current year and your branding
  title: Home
  SEOmetaData:
    metaImage: public/upload/640.jpg
    metaTitle: FCPAE
    keywords: FCPAE
    metaDescription: ’欧洲论坛’的全称是《FCPAE欧洲论坛》，是2009年联合会在时任轮值主席协会中国旅法工程师协(AICF)及理事协会全法中国科技者协会(ASICEF)的倡议下，在法国巴黎创立的。欧洲论坛每年在欧洲一个国家举办。
zh:
  content: >-
    从波罗的海岸到阿尔卑斯山，从乌拉尔山脉到大西洋东岸，在辽阔的欧洲大地上，聚集着一群黄皮肤、黑头发的人，他们当中，曾是风华正茂的莘莘学子，如今是具
    有国际一流水平的专家、学者。他们的共同的理念是，建立跨专业、跨学科的华人知识团体，为中国的改革与建设出一份力。於是，2001年秋天在欧洲的金融中
    心法兰克福，十几个旅欧华人专业团体的代表相聚在一起，宣告"全欧华人专业协会联合会"(FCPAE)成立了，......


    ## 欧洲论坛简介


    ’欧洲论坛’的全称是《FCPAE欧洲论坛》，是2009年联合会在时任轮值主席协会中国旅法工程师协(AICF)及理事协会全法中国科技者协会(ASICEF)的倡议下，在法国巴黎创立的。欧洲论坛每年在欧洲一个国家举办。


    ## FCPAE专业论坛介绍


    依托全欧华人专业协会联合会理事单位协会的专业人才资源，联合会成立了《FCPAE微电子专业论坛》（成立于2004年6月）、《中欧生命科学论坛 》（与中国海智办公室联合成立于2015年2月）。这些专业性论坛，是面向全欧洲的华人华侨的科技专业组织。


    # Nuxt3 - Decap CMS boilerplate


    **Live boilerplate example:** https://sailsnake-nuxt-decap-boilerplate.netlify.app


    **Link to repo:** https://github.com/Sfolkerts89/Nuxt3-starter__Decap-cms


    ## A simple starting point


    This boilerplate will get you going quick in building with Nuxt and Decap CMS. The base boilerplate consists out of the following:


    ### Decap CMS (config.yml)


    * SEO anchor ready to go (simply use "- &seo" in any page/ file collection)

    * Cloudinary support


    ### Pages


    * Home page (this README content)

    * A typography page with headings, paragraphs, list etc. to help you write your typography styles in one view


    ### Styling


    * Minimal boilerplate styling

    * Simple responsive GRID layout

    * Categorized .scss files (main.scss, mixins.scss, type.scss, variables.scss etc.)

    * variables.modules.scss which allows you to export your scss variables from variables.scss to be used in JS vars. Example: `const color = variables.myColor`


    ### Components


    * A simplistic menu component which switches to a mobile menu in small viewports

    * Layout components (logo, header, footer) already called in layout/default.vue

    * A markdown render component that renders markdown to an HTML string server side (NOTE: it is harnessing an experimental feature 'islandComponents'; to remove set: nuxt.config.ts: islandComponents =>  false, remove the '.server' suffix from ParseMarkdown.server.vue)


    ### Composables:


    * mdToHtml() composable: uses Nuxt/Content/MDC renderer. This first renders an HTML object from markdown input and returns the HTML object as a single string. This renders server side ;)

    * setSeoHead() composable: just feed the SEOmetaData object (defined in config.yaml) from your api data; `setSeoHead(apiData.SEOmetaData)`

    * useBtnData() composable: does an api call to /content/buttons.md and returns a single button string. Example `const buttonText = useBtnData('buttonsApi.readmore')` => result: `"hello! Read moar!"`. Conistent button text's throughout your site when using `slot` in a `button.vue` component


    ## Install


    1. Clone this repo: `git clone https://github.com/Sfolkerts89/Nuxt3-starter__Decap-cms.git` or click 'Use this template'

    2. `yarn install` or `npm install`

    3. Run frontend locally: `yarn dev` or `npm run dev`

    4. Boot up Decap CMS locally:


    * uncomment `local_backend: true` (*leave this out in production for safety's sake*)

    * run `npx decap-server`

    * Navigate to: localhost:3000/admin (asuming you have a frontend instance running)


    ## Netlify deployment


    * Build command: `npm run generate` (dont use YARN: Node will run out of memory)

    * Publish directory: `dist`


    ## Boilerplate__extras/ (folder)


    I found it tough to decide wether to build an extranous boilerplate packed with features or to keep it clean and simple.. So i did both.. Addtional code snippets, components and more can be found in the folder 'boilerplate__extras'. If you want to start clean and simple, just delete the folder!


    ### /decap__config/


    * basic 'products' collection (i.e. one level dynamic page names with a re-occuring content structure)

    * Dynamic Fields using Yaml anchors (much like a page builder) which includes a carousel/lightbox option for mulitple images

    * Dynamic Fields collection: code snippet that can be used as is and built upon/ changed to suite your needs.


    ### /nuxt__pages/


    #### /product/ + \[slug].vue


    A simple dynamic page based of slug as a parameter set up as a 'products' page. This is in relation to the 'products' colleciton in boilerplate**extras/decap**config/


    #### Contact.vue


    Very simplistic contact page that includes the `<BasicInquery />' component. Place the 'forms' folder in a corresponding 'components' folder in your project and uncomment for use.


    #### dynamic-fields.vue


    A page that utlizes the `<dynamicFields />` component. This works in relation with:


    * The Dynamic Fields anchor provided in: /decap__config/

    * The Dynamic Fields collection provided in: /decap__config/


    #### Products.vue


    A simple page displays all the products in the products collection. 


    ### vue__components/forms/


    In this folder you will find modular form building components. Along with a simple contact form that utilizes a few of these.  Aside from being modular, the simple contact form has form input validation:


    1. Input field validation happens in the child component

    2. Child component emits validation data

    3. Parent component pushes data in an array and checks if all entries are valid


    ### /vue__components/media/


    #### Carousel.vue component with the following options via props:


    * imageOnly (Boolean): enable only an array of image links are provided

    * Slides (Array): image, caption

    * Timed (Boolean): enables timedSlides() function, a slideshow if you will

    * hasEnlarge: Enables an overlay on hover which allows for the carousel to enlarge to 100% of the container (full screen function)

    * Color (String): provide a color value for carousel colored elements


    #### RespImage.vue


    Responsive image component based on Cloudinary transformations


    ##### Props


    * url (String): set up for filename only i.e. `"my-image.jpg"`

    * Lightbox (Boolean, default: false): enables lightbox function

    * Objectfit (String, default: null): sets CSS object-fit property

    * Color (String): passes color to lightbox accent color


    ##### RespVideo.vue


    Responsive video component based on Cloudinary transformations


    #### Props


    * url (String): set up for filename only i.e. `"my-image.jpg"`

    * hasSound (Boolean, default: null): sets muted property. If hasSound is set, video controls will appear to allow playback. Otherwise playback will `autoplay` (if autoplay is set to true)

    * Autoplay (Boolean, default null): sets autoplay property when video is in view

    * loop (Boolean, default null): Sets loop propery

    * id (String):  the autoplay in view feature needs an element id to work. The video is is built using `:id` + `props.url.slice(-10)` (ensures unique id's per page)


    ### vue__components/misc/ (folder)


    * DynamicFields.vue: In here you will find the dynamicFields.vue component that corresponds with the 'dynamicFields.vue'. You will need this component to render the fields 'dynamic-fields' collection in dynamicFields.vue

    * Copyright.vue: A component displaying current year and your branding
  title: 首页
---
