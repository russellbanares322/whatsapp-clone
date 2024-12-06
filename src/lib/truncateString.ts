export const truncateString = (text: string) => {
const isTextLong = text.length > 12;

    if(isTextLong){
        return `${text.slice(0,10)}...`
    }

    return text
}