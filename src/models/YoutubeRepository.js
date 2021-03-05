import axios from 'axios';
import config from '../Config';

export async function getLatestVideoId() {
	const response = await axios(
		{
			method: 'get',
			url: 'https://www.googleapis.com/youtube/v3/search',
			params: {
				key: config.youtubeApiKey,
				channelId: config.youtubeChannelId,
				part: 'snippet, id',
				order: 'date',
				maxResults: 1
			}
		}
	);
	const videoId = response.data.items[0].id.videoId;
	const embed = `https://www.youtube.com/embed/${videoId}`;
	const external = `https://www.youtube.com/watch?v=${videoId}`;
	return {
		external: external,
		embed: embed,
	}
}