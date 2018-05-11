"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("tns-core-modules/application");
var platformModule = require("tns-core-modules/platform");
var color = require("tns-core-modules/color");
var frame = require("tns-core-modules/ui/frame");
function pageLoaded(args) {
    var page = args.object;
    if (platformModule.isAndroid) {
        if (platformModule.device.sdkVersion >= "21") {
            var window_1 = app.android.startActivity.getWindow();
            window_1.setStatusBarColor(new color.Color("#303F9F").android);
        }
    }
}
exports.pageLoaded = pageLoaded;
function fabTap(args) {
    alert("tap");
    frame.topmost().goBack();
}
exports.fabTap = fabTap;
function animate(args) {
    args.object.animate({
        duration: 500,
        target: args.object,
        opacity: 0,
        translate: { x: 100, y: 200 }
    });
}
exports.animate = animate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGlmYWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtdWx0aWZhYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtEQUFvRDtBQUdwRCwwREFBNEQ7QUFDNUQsOENBQWdEO0FBQ2hELGlEQUFtRDtBQUVuRCxvQkFBMkIsSUFBSTtJQUM3QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3pCLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRTdCLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDN0MsSUFBTSxRQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDckQsUUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvRCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFURCxnQ0FTQztBQUdELGdCQUF1QixJQUFJO0lBQ3pCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNiLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMzQixDQUFDO0FBSEQsd0JBR0M7QUFFRCxpQkFBd0IsSUFBSTtJQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNsQixRQUFRLEVBQUUsR0FBRztRQUNiLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtRQUNuQixPQUFPLEVBQUUsQ0FBQztRQUNWLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRTtLQUM5QixDQUFDLENBQUM7QUFDTCxDQUFDO0FBUEQsMEJBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcclxuaW1wb3J0ICogYXMgb2JzZXJ2YWJsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0ICogYXMgb2JzZXJ2YWJsZUFycmF5TW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5pbXBvcnQgKiBhcyBwbGF0Zm9ybU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybVwiO1xyXG5pbXBvcnQgKiBhcyBjb2xvciBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiO1xyXG5pbXBvcnQgKiBhcyBmcmFtZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZ2VMb2FkZWQoYXJncykge1xyXG4gIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdDtcclxuICBpZiAocGxhdGZvcm1Nb2R1bGUuaXNBbmRyb2lkKSB7XHJcbiAgICAvLyBDaGFuZ2Ugc3RhdHVzYmFyIGNvbG9yIG9uIExvbGxpcG9wXHJcbiAgICBpZiAocGxhdGZvcm1Nb2R1bGUuZGV2aWNlLnNka1ZlcnNpb24gPj0gXCIyMVwiKSB7XHJcbiAgICAgIGNvbnN0IHdpbmRvdyA9IGFwcC5hbmRyb2lkLnN0YXJ0QWN0aXZpdHkuZ2V0V2luZG93KCk7XHJcbiAgICAgIHdpbmRvdy5zZXRTdGF0dXNCYXJDb2xvcihuZXcgY29sb3IuQ29sb3IoXCIjMzAzRjlGXCIpLmFuZHJvaWQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vLyBleHBvcnRzLnBhZ2VMb2FkZWQgPSBwYWdlTG9hZGVkO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZhYlRhcChhcmdzKSB7XHJcbiAgYWxlcnQoXCJ0YXBcIik7XHJcbiAgZnJhbWUudG9wbW9zdCgpLmdvQmFjaygpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYW5pbWF0ZShhcmdzKSB7XHJcbiAgYXJncy5vYmplY3QuYW5pbWF0ZSh7XHJcbiAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgdGFyZ2V0OiBhcmdzLm9iamVjdCxcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgICB0cmFuc2xhdGU6IHsgeDogMTAwLCB5OiAyMDAgfVxyXG4gIH0pO1xyXG59XHJcbiJdfQ==