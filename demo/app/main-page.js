"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("tns-core-modules/application");
var observable = require("tns-core-modules/data/observable");
var observableArrayModule = require("tns-core-modules/data/observable-array");
var platformModule = require("tns-core-modules/platform");
var frameModule = require("tns-core-modules/ui/frame");
var color = require("tns-core-modules/color");
var users = [
    { name: "Billy Bob" },
    { name: "Tweeder" },
    { name: "Mox" },
    { name: "Coach" },
    { name: "Lance" },
    { name: "Johnson" },
    { name: "William" },
    { name: "Franklin" },
    { name: "Billy Bob" },
    { name: "Tweeder" },
    { name: "Mox" },
    { name: "Coach" },
    { name: "Lance" },
    { name: "Johnson" },
    { name: "William" },
    { name: "Franklin" }
];
var viewModel = observable.fromObject({
    users: new observableArrayModule.ObservableArray(users)
});
function pageLoaded(args) {
    var page = args.object;
    if (platformModule.isAndroid) {
        if (platformModule.device.sdkVersion >= "21") {
            var window_1 = app.android.startActivity.getWindow();
            window_1.setStatusBarColor(new color.Color("#303F9F").android);
        }
    }
    page.bindingContext = viewModel;
}
exports.pageLoaded = pageLoaded;
function fabTap(args) {
    viewModel.users.unshift({ name: "Gary" });
}
exports.fabTap = fabTap;
function goMultiFab(args) {
    frameModule.topmost().navigate("multifab");
}
exports.goMultiFab = goMultiFab;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsa0RBQW9EO0FBQ3BELDZEQUErRDtBQUMvRCw4RUFBZ0Y7QUFDaEYsMERBQTREO0FBQzVELHVEQUF5RDtBQUN6RCw4Q0FBZ0Q7QUFFaEQsSUFBTSxLQUFLLEdBQUc7SUFDWixFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDckIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtJQUNmLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtJQUNqQixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDakIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0lBQ25CLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7SUFDcEIsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ3JCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDZixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDakIsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO0lBQ2pCLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtJQUNuQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7SUFDbkIsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO0NBQ3JCLENBQUM7QUFDRixJQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDO0lBQ3RDLEtBQUssRUFBRSxJQUFJLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7Q0FDeEQsQ0FBQyxDQUFDO0FBRUgsb0JBQTJCLElBQUk7SUFDN0IsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN6QixFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUU3QixFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzdDLElBQU0sUUFBTSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ3JELFFBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDL0QsQ0FBQztJQUNILENBQUM7SUFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztBQUNsQyxDQUFDO0FBVkQsZ0NBVUM7QUFHRCxnQkFBdUIsSUFBSTtJQUN4QixTQUFpQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNyRCxDQUFDO0FBRkQsd0JBRUM7QUFFRCxvQkFBMkIsSUFBSTtJQUM3QixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFGRCxnQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgKiBhcyBvYnNlcnZhYmxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgKiBhcyBvYnNlcnZhYmxlQXJyYXlNb2R1bGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5XCI7XHJcbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtXCI7XHJcbmltcG9ydCAqIGFzIGZyYW1lTW9kdWxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XHJcbmltcG9ydCAqIGFzIGNvbG9yIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2NvbG9yXCI7XHJcblxyXG5jb25zdCB1c2VycyA9IFtcclxuICB7IG5hbWU6IFwiQmlsbHkgQm9iXCIgfSxcclxuICB7IG5hbWU6IFwiVHdlZWRlclwiIH0sXHJcbiAgeyBuYW1lOiBcIk1veFwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvYWNoXCIgfSxcclxuICB7IG5hbWU6IFwiTGFuY2VcIiB9LFxyXG4gIHsgbmFtZTogXCJKb2huc29uXCIgfSxcclxuICB7IG5hbWU6IFwiV2lsbGlhbVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZyYW5rbGluXCIgfSxcclxuICB7IG5hbWU6IFwiQmlsbHkgQm9iXCIgfSxcclxuICB7IG5hbWU6IFwiVHdlZWRlclwiIH0sXHJcbiAgeyBuYW1lOiBcIk1veFwiIH0sXHJcbiAgeyBuYW1lOiBcIkNvYWNoXCIgfSxcclxuICB7IG5hbWU6IFwiTGFuY2VcIiB9LFxyXG4gIHsgbmFtZTogXCJKb2huc29uXCIgfSxcclxuICB7IG5hbWU6IFwiV2lsbGlhbVwiIH0sXHJcbiAgeyBuYW1lOiBcIkZyYW5rbGluXCIgfVxyXG5dO1xyXG5jb25zdCB2aWV3TW9kZWwgPSBvYnNlcnZhYmxlLmZyb21PYmplY3Qoe1xyXG4gIHVzZXJzOiBuZXcgb2JzZXJ2YWJsZUFycmF5TW9kdWxlLk9ic2VydmFibGVBcnJheSh1c2VycylcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzKSB7XHJcbiAgY29uc3QgcGFnZSA9IGFyZ3Mub2JqZWN0O1xyXG4gIGlmIChwbGF0Zm9ybU1vZHVsZS5pc0FuZHJvaWQpIHtcclxuICAgIC8vIENoYW5nZSBzdGF0dXNiYXIgY29sb3Igb24gTG9sbGlwb3BcclxuICAgIGlmIChwbGF0Zm9ybU1vZHVsZS5kZXZpY2Uuc2RrVmVyc2lvbiA+PSBcIjIxXCIpIHtcclxuICAgICAgY29uc3Qgd2luZG93ID0gYXBwLmFuZHJvaWQuc3RhcnRBY3Rpdml0eS5nZXRXaW5kb3coKTtcclxuICAgICAgd2luZG93LnNldFN0YXR1c0JhckNvbG9yKG5ldyBjb2xvci5Db2xvcihcIiMzMDNGOUZcIikuYW5kcm9pZCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2aWV3TW9kZWw7XHJcbn1cclxuLy8gZXhwb3J0cy5wYWdlTG9hZGVkID0gcGFnZUxvYWRlZDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmYWJUYXAoYXJncykge1xyXG4gICh2aWV3TW9kZWwgYXMgYW55KS51c2Vycy51bnNoaWZ0KHsgbmFtZTogXCJHYXJ5XCIgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnb011bHRpRmFiKGFyZ3MpIHtcclxuICBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUoXCJtdWx0aWZhYlwiKTtcclxufVxyXG4iXX0=