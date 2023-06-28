import { getTopTracks } from '../lib/top-tracks'
var Filter = require('bad-words'),
	filter = new Filter()

var removeByAttr = function (arr, attr, value) {
	var i = arr.length
	while (i--) {
		if (
			arr[i] &&
			arr[i].hasOwnProperty(attr) &&
			arguments.length > 2 &&
			arr[i][attr] === value
		) {
			arr.splice(i, 1)
		}
	}
	return arr
}

export default async (_, res) => {
	const response = await getTopTracks()
	const { items } = await response.json()

	const tracks = items.slice(0, 10).map((track) => ({
		artist: track.artists.map((_artist) => _artist.name).join(', '),
		songUrl: track?.external_urls?.spotify,
		title: track?.name,
		albumArt: track?.album?.images[0].url,
		cleanTitle: filter.clean(track?.name || '')
	}))

	// removeByAttr(tracks, 'title', 'Song Name')

	// return res.status(200).json({ items })
	return res.status(200).json({ tracks })
}
