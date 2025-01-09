export const formatDate = (isoString : string) : string => {
     const date = new Date(isoString)
     const formatter = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: "numeric",
        minute: "numeric"
     })
     return formatter.format(date)
}