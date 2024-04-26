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
                let elInner = new String
                // Type: Object(Object.tag. Object.value)
                if (elB.value.length === 1) {
                    elInner = elB.value[0].value

                } else {
                    function createChildElement(elB) {
                        // Type: Array
                        // elB = always Array[ => 2]             
                        let childElementAsString = new String
                        // console.log("elB: ", elB)
                        for (let i = 0; i < elB.length; i++) {
                            // console.log("elB[i]: ", elB[i])
                            if (elB[i].type === "text") {
                                // 2+ level recursion level return if
                                childElementAsString += elB[i].value
                                // console.log("major recursion value: ", elB[i].value)
                            }
                            else {
                                // function createChildValue(elBv) {
                                //     // Type: should be an Object(value/ value, array)                                 
                                //     // console.log("elBv: ", elBv, elBv.length)
                                //     for (let i = 0; i < elBv.length; i++) {
                                //         // console.log("elBv[i]: ", elBv[i])
                                //         let newString = new String
                                //         if (elBv[i].type === "text") {
                                //             newString += elBv[i].value
                                //         } else if (elBv.length === 1) {
                                //             console.log("missing: ", elBv[i].tag)
                                //             elInner = createChildValue(elBv[i].children);
                                //             const tagStart = "<" + `${elBv[i].tag}` + ">"
                                //             const tagEnd = "</" + `${elBv[i].tag}` + ">"
                                //             const resC = tagStart + "LVL3: " + elBv[i].tag + ": " + elInner + tagEnd
                                //             newString += resC

                                //         }
                                //         else {
                                //             console.log("moar??: ", elBv)
                                //             newString += "H E L P"
                                //             for (let i = 0; i < elBv.length; i++) {
                                //                 // console.log("moar??: ", elBv[i])
                                //                 // newString = createChildValue(elBv[i])
                                //                 // console.log("ire element", elBv[i])
                                //                 // // if(elBv.length === 1) {
                                //                 // //     console.log("here then?")
                                //                 // // }
                                //                 // const elBvC = new Object({
                                //                 //     tag: elBv[i].tag,
                                //                 //     value: elBv[i].children
                                //                 // })
                                //                 // console.log(elBvC)
                                //                 // newString = createParentElement(elBvC)

                                //                 // newString = "result here"
                                //             }


                                //         }
                                //         return newString
                                //     }
                                // }
                                elInner = createChildElement(elB[i].children);
                                const tagStart = "<" + `${elB[i].tag}` + ">"
                                const tagEnd = "</" + `${elB[i].tag}` + ">"
                                const resC = tagStart + "LVL2: " + elB[i].tag + ": " + elInner + tagEnd
                                childElementAsString += resC
                            }
                        }
                        return childElementAsString
                    }

                    elInner = createChildElement(elB.value)
                }
                const tagStart = "<" + `${elB.tag}` + ">"
                const tagEnd = "</" + `${elB.tag}` + ">"
                const res = tagStart + "LVL1: " + elB.tag + ": " + elInner + tagEnd
                return res
            }
            // element (A) Object
            htmlString += createParentElement(elAO)
        }
    }
    markdownToHtmlLoop(result)

    console.log(htmlString)

    // Return the entire HTML object as a single string; mount as you wish
    return htmlString


}
