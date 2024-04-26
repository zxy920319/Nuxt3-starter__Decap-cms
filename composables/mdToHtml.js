import { parseMarkdown } from '@nuxtjs/mdc/runtime'

export default async function (md) {
    const rawMd = await useAsyncData('markdown', () => parseMarkdown(md))
    // // Iterate to get the array of elAements returned by parseMarkdown
    const result = await rawMd.data.value.body.children
    // htmlString will be populated with recursive functions and returned in the end
    let htmlString = ""

    function markdownToHtmlLoop(elA) {
        // Iterate through all the parent level array (A) returned from result
        // Type: Array
        for (let i = 0; i < elA.length; i++) {
            // element: phase A
            // Will be looped over to return a single HTML elAement as a a string (example: <p>hi!</p>)
            const elAO = new Object({
                tag: elA[i].tag,
                value: elA[i].children
            })
            // The function that accepts ( element (A) Object(Obj.tag, Obj.value))
            function createParentElement(elB) {
                let text = new String
                // Type: Object(Object.tag. Object.value)
                console.log(elB)
                if (elB.value.length === 1) {
                    text = elB.value[0].value

                } else {
                    function createChildElement(elB) {
                        // Type: Array
                        // elB = always Array[ => 2]             
                        let childElementAsString = new String
                        function createChildValue(elBelA) {
                            // Type: Array
                            let childValueAsString = new String
                            // if it gets here, its always an array
                            for (let i = 0; i < elBelA.length; i++) {
                                // console.log(elBelA[i].tag)
                                // console.log(elBelA[i].children)

                                text = "recursion"
                                const tagStart = "<" + `${elBelA[i].tag}` + ">"
                                const tagEnd = "</" + `${elBelA[i].tag}` + ">"
                                const resC = tagStart + text + tagEnd
                                childValueAsString += resC
                            }
                            // console.log(childValueAsString)
                            return childValueAsString
                        }

                        text = createChildValue(elB);

                        for (let i = 0; i < elB.length; i++) {
                            const tagStart = "<" + `${elB[i].tag}` + ">"
                            const tagEnd = "</" + `${elB[i].tag}` + ">"
                            const resC = tagStart + text + tagEnd
                            childElementAsString += resC
                        }
                        return childElementAsString
                    }

                    text = createChildElement(elB.value)
                }
                const tagStart = "<" + `${elB.tag}` + ">"
                const tagEnd = "</" + `${elB.tag}` + ">"
                const res = tagStart + text + tagEnd
                return res
            }
            // elemment (A) Object
            htmlString += createParentElement(elAO)
        }
    }
    markdownToHtmlLoop(result)

    // console.log(htmlString)

    // Return the entire HTML object as a single string; mount as you wish
    return htmlString


}
