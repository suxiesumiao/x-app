<script>
	export default {
		onLaunch: function() {
			//#ifdef APP-PLUS
			const platform = uni.getSystemInfoSync().platform;
			switch (platform) {
				case "android":
				  this.checkOpenGPSServiceByAndroid();
					break;
				case "ios":
				  this.setAndroidConfig();
					break;
			}
			  
			//#endif
			// uni.setStorageSync("token", "token");
      const token = uni.getStorageSync("token");
      if (!token) {
        uni.redirectTo({
          url: "/pages/login/index"
        });
      }
		},
		onShow: function() {
		},
		onHide: function() {
		},
		methods: {
			setAndroidConfig() {
				var UIApplication = plus.ios.import("UIApplication");  
				var app = UIApplication.sharedApplication();  
				var enabledTypes  = 0;  
				if (app.currentUserNotificationSettings) {  
				    var settings = app.currentUserNotificationSettings();  
				    enabledTypes = settings.plusGetAttribute("types");  
				} else {  
				    //针对低版本ios系统  
				    enabledTypes = app.enabledRemoteNotificationTypes();  
				}  
				plus.ios.deleteObject(app);  
				if ( 0 == enabledTypes ) {  
				    uni.showModal({  
				        title: '提示',  
				        content: '请先打开APP通知权限',  
				        showCancel: false,  
				        success: function (res) {  
				            if (res.confirm) {  
				                var UIApplication = plus.ios.import("UIApplication");  
				                var NSURL = plus.ios.import("NSURL");  
				                var setting = NSURL.URLWithString("app-settings:");  
				                var application = UIApplication.sharedApplication();  
				                application.openURL(setting);  
				                plus.ios.deleteObject(setting);  
				                plus.ios.deleteObject(application);  
				            }  
				        }  
				    });  
				}  
			},
			checkOpenGPSServiceByAndroid() {
				const system = uni.getSystemInfoSync();
				if(system.platform === 'android') {
					const context = plus.android.importClass("android.content.Context");
					const locationManager = plus.android.importClass("android.location.LocationManager");
					const main = plus.android.runtimeMainActivity();
					const mainSvr = main.getSystemService(context.LOCATION_SERVICE);
					
					if(!mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER)) {
						uni.showModal({
							title: "提示",
							content: "请开启定位服务功能",
							showCnacel: false,
							success() {
								if(!mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER)) {
									const Intent = plus.android.importClass("android.content.Intent");
									const Settings = plus.android.importClass("android.provider.Settings");
									const indext = new Intent(Settings.ACTION_LOCATION_SOURCE_SETTINGS);
									main.startActivity(indent);
								} else {
									console.log('GPS 功能已经开启')
								}
							}
						})
					} else {
						
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "uview-ui/index.scss";
	/* icon */
	@import "./static/css/icon.css";
	/* common */
	@import "./static/css/common.scss";
	@import url("components/ly-tree/ly-tree.css");
	body {
		font-family: Source Han Sans SC, Helvetica Neue, Helvetica,sans-serif;
		height: 100%!important;
    background-color: #f2f2f8;
	}
</style>
