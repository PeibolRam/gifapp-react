export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=7xbxqy1W7Nx6kT9Gn1eyA1D1O5N8I0cl&q=${category}&limit=10`
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs;
}
