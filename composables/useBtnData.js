export const useBtnData = (params) => {
    const getLocale = useState("setLocale");
    const { data: buttonData } = useAsyncData("btnData", () => queryContent("/components/buttons").findOne(), {watch: [getLocale]});
    let result = computed(() => {
        if(buttonData.value) {
            return buttonData.value[getLocale.value][params]
        } else {
            return "could not retrieve buttonData"
        }
    })
    return result;
}

