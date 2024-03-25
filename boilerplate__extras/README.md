# In this folder you will find extra files that are provided seperatly so the main boilerplate stays un-opiniated

## vue__components

### Scoped Vue components (not dependent on other components)

- Media/Carousel
- Media/Lightbox
- Media/Cloudinary based responsive image component
- Media/Cloudinary based Responsive video component
- misc/DynamicFields (read more further down this doc)
- misc/ParseMarkdown: Render ANY piece of markdown using NUXT Content's Markdown component
- Button (with 'submit' boolean for use in forms) WIP

### Unscoped Vue components (modular in relation to another (parent) Vue component)

#### Forms/ (with input validation function)

##### Basicinquery.vue (Parent): A contact form with just the minium fields. *Note: `<form>` POST is setup for Netlify Forms handling.*

    - InputName
    - InputEmail
    - InputSubject
    - InputTextarea

##### additional ready to use fields

    - InputEmail
    - InputFile WIP
    - InputMultipleChoice WIP
    - InputName
    - InputNumber
    - InputPhone
    - InputSubject
    - InputTextarea

## decap__config

In extra--Config.yaml you will find code snippets (copy and paste-able code blocks)

## Pages

### contact

Uber minimal contact form page with Basicinquery.vue
*NOTE: copy/move '~boilerplate__extras/nuxt__components/forms' folder to '~/components'

### Products + dynamic slug based product page

- products.vue + product/[slug].vue (simple)

### dynamic-fields

Showcases a modular page building experience. Use in combination with the 'dynamic fields' page code snippet from '~/boilerplate__extras/decap__config/extra--config'.



## More about 'dynamic-fields'

The dynamic fields setup allows for a page building experience using 'fields' i.e. predetermined template blocks which the editor can add and choose. This allows you a fine grain control over the data structure (extend the blocks as you wish, and or add more) and styling.

### How to use/ implement
1. Copy all the related template code blocks in decap__config/extra__config.yml into your actual config.yml file
2. Copy/ move vue__components/dynamicFields.vue into your component directory (and subfolder of your choosing/ design) 
3. Copy/ move nuxt__pages/dynamic-fields.vue into your /pages directory and rename to suite your needs.
4. Additional note: the v-for markup can be place in any file you like offcourse. Happy modular use! 