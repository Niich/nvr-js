module.exports = {
	/* System Settings */
	system: {
		/* Disable Security - Know what your doing before changing this! */
		disableUISecurity: false,
		/* Username */
		username: 'admin',
		/* bcrypt password (default: admin) */
		password: '$2a$10$CnOx/6vFY2ehRDf68yqd..aLlv0UM.zeBLKnRjuU8YykCsC2Ap3iG',
		/* bcrypt API Key (default: x7Te9m38JHQq6ddv) */
		apiKey: '$2a$10$N53ci.EIQ7JCu6u1HlOjoO//W0Bmp3GrRruyK1Jysr01CQ1rDrVQK',
		/* Any random string */
		cookieKey: 'f3gi6FLhIPVV31d1TBQUPEAngrI3wAoP',
		interfacePort: 7878,
		/* location used for 24/7 recording and database generation */
		/* This should be the root of a mount point i.e a dedicated HDD for 24/7 recordings */
		storageVolume: '/recordings',
		/* Continuous recording settings */
		ffmpegLocation: '/usr/bin/ffmpeg',
		continuousSegTimeMinutes: 15,
		continuousDays: 14,
		continuousPurgeIntervalHours: 24,
		/* event throttle per sensorId */
		eventSensorIdCoolOffSeconds: 60
	}
	/* Cameras */
	// cameras: [
	// 	{
	// 		"_id": "66e39d21-72c4-405c-a838-05a8e8fe0742",
	// 		"name": "nick desktop Stream",
			// "inputConfig": {
			// 	"use_wallclock_as_timestamps": "1",
			// 	"fflags": "+igndts",
			// 	"analyzeduration": "1000000",
			// 	"probesize": "1000000",
			// 	"rtsp_transport": "tcp",
			// 	"stimeout": "30000000"
			// },
			// "input": "rtsp://k3s-pg-03:31884/lincoln.stream",
	// 		"continuous": "true",
			// "liveConfig": {
			// 	"codecString": "video/mp4; codecs='avc1.64001f'",
			// 	"streamConfig": {
			// 		"an": "",
			// 		"vcodec": "copy",
			// 		"f": "mp4",
			// 		"movflags": "+frag_keyframe+empty_moov+default_base_moof",
			// 		"reset_timestamps": "1"
			// 	}
			// }
	// 	}
	// ]
};


// ffmpeg -probesize 30M -f gdigrab -framerate 10 -i desktop -c:v libx264 -f rtsp -rtsp_transport tcp rtsp://10.10.26.5:8554/lincoln.stream