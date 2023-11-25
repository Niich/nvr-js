module.exports = {
	/* System Settings */
	system: {
		/* Username */
		username: "admin",
		/* bcrypt password (default: admin) */
		password: '$2a$10$CnOx/6vFY2ehRDf68yqd..aLlv0UM.zeBLKnRjuU8YykCsC2Ap3iG',
		/* bcrypt API Key (default: x7Te9m38JHQq6ddv) */
		apiKey: '$2a$10$N53ci.EIQ7JCu6u1HlOjoO//W0Bmp3GrRruyK1Jysr01CQ1rDrVQK',
		/* Any random string */
		cookieKey: 'f3gi6FLhIPVV31d1TBQUPEAngrI3wAoP',
		/* Port the server will listen on */
		interfacePort: 7878,
		/**
		 * location where mediamtx places completed video segments
		 * 
		 * this will need to be some kind of shared storage. 
		 * it can be a shared mount if both containers are on the same docker host. 
		 */
		storageVolume: 'C:/ligma/recordings',
		ffmpegLocation: 'C:/Users/samui/AppData/Local/Microsoft/WinGet/Links/ffmpeg.exe',
		/* mongodb settings */
		mongo: {
			uri: 'mongodb://root:rootpassword123@192.168.1.89:27017/',
			db: 'nvrjsdb',
		},
		/**
		 * Nifi settings
		 */
		nifi: {
			uri: 'https://nifi2.booneworld.com',
			useHTTPS: true
		}
	}
};