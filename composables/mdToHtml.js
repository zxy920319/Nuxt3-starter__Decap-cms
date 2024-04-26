import { parseMarkdown } from '@nuxtjs/mdc/runtime'

export default async function (md) {
    const rawMd = await useAsyncData('markdown', () => parseMarkdown(md))
    // // Iterate to get the array of elAements returned by parseMarkdown
    const result = await rawMd.data.value.body.children
    // htmlString will be populated with recursive functions and returned in the end
    let htmlString = ""

    function markdownToHtmlLoop(elA) {
        // Iterate through all the parent level array (A) returned from result
        for (let i = 0; i < elA.length; i++) {
            const elAO = new Object({
                tag: elA[i].tag,
                value: elA[i].children
            })
            function createParentElement(elB) {
                let elInner = new String
                if (elB.value.length === 1) {
                    elInner = elB.value[0].value
                } else {
                    function createChildElement(elB) {            
                        let childElementAsString = new String
                        for (let i = 0; i < elB.length; i++) {
                            if (elB[i].type === "text") {
                                childElementAsString += elB[i].value
                            }
                            else {
                                elInner = createChildElement(elB[i].children);
                                const tagStart = "<" + `${elB[i].tag}` + ">"
                                const tagEnd = "</" + `${elB[i].tag}` + ">"
                                const resC = tagStart + elInner + tagEnd
                                childElementAsString += resC
                            }
                        }
                        return childElementAsString
                    }
                    elInner = createChildElement(elB.value)
                }
                const tagStart = "<" + `${elB.tag}` + ">"
                const tagEnd = "</" + `${elB.tag}` + ">"
                const res = tagStart + elInner + tagEnd
                return res
            }
            htmlString += createParentElement(elAO)
        }
    }
    markdownToHtmlLoop(result)
    // Return the entire HTML object as a single string; mount as you wish
    return htmlString
}
