import { parseMarkdown } from '@nuxtjs/mdc/runtime'

export default async function (md) {
    const rawMd = await useAsyncData('markdown', () => parseMarkdown(md))
    // Iterate to get the array of elements returned by parseMarkdown
    const result = await rawMd.data.value.body.children
    // Construct a new array
    const htmlObjects = new Array
    for (let i = 0; i < result.length; i++) {
        const el = new Object({
            tag: result[i].tag,
            value: result[i].children[0].value
        })
        // htmlObjects.push(result[i])
        htmlObjects.push(el)
    }

    // async function createHtml() {
    //     // create new wrapper element
    //     const content = document.createElement("div");
    //     // add a class
    //     content.classList.add("markdown-to-html-content");
    //     // add new elements to content

    //     function doLoop() {
    //         for (let i = 0; i < htmlObjects.length; i++) {
    //             // create element from tag type
    //             const element = document.createElement(htmlObjects[i].tag);
    //             // create text node with children[0].value 
    //             element.innerHTML += (htmlObjects[i].children[0].value).toString();
    //             // test element attributes
    //             // console.log(element)
    //             content.appendChild(element)
    //         }
    //     }
    //     doLoop();
    //     console.log('2: ', 'loop = done?', content)
    //     return content
    // }
    // const res = createHtml();
    return htmlObjects
    // console.log(res)
}
