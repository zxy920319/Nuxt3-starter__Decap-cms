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

                // Returns <tag>value</tag> (or a linked version if tag === "a")
                // function called later down the line
                function toElementString(tag, value) {
                    let tagStart = new String
                    if(tag === "a") {
                        tagStart = "<" + `${tag}` + ' href="' + `${value}` + '"' + ' target="_blank"' + ">"
                    } else {
                        tagStart = "<" + `${tag}` + ">"
                    }
                    const tagEnd = "</" + `${tag}` + ">"
                    const res = tagStart + value + tagEnd
                    return res
                }

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
                                childElementAsString += toElementString(elB[i].tag, elInner);
                            }
                        }
                        return childElementAsString
                    }
                    elInner = createChildElement(elB.value)
                }
                return toElementString(elB.tag, elInner);
            }
            htmlString += createParentElement(elAO)
        }
    }
    markdownToHtmlLoop(result)
    // Return the entire HTML object as a single string; mount as you wish
    return htmlString
}
