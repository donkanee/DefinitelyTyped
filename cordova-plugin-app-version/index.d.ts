// Type definitions for cordova-plugin-app-version v0.1.7
// Project: https://github.com/whiteoctober/cordova-plugin-app-version
// Definitions by: Markus Wagner <https://github.com/Ritzlgrmft/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="jquery" />
/// <reference types="q" />

interface Cordova {
	getAppVersion: {
		getAppName: () => Q.IPromise<string> & JQueryPromise<string>;
		getPackageName: () => Q.IPromise<string> & JQueryPromise<string>;
		getVersionCode: () => Q.IPromise<string> & JQueryPromise<string>;
		getVersionNumber: () => Q.IPromise<string> & JQueryPromise<string>;
	};
}
