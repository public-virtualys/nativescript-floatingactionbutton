import {
  FloatingActionButtonBase,
  rippleColorProperty,
  iconProperty,
  sizeProperty
} from "./fab-common";
import * as style from "tns-core-modules/ui/styling/style";
import * as utils from "tns-core-modules/utils/utils";
import * as ImageSource from "tns-core-modules/image-source";
import { screen } from "tns-core-modules/platform";
import { Color } from "tns-core-modules/color";
import {
  backgroundColorProperty,
  backgroundInternalProperty
} from "tns-core-modules/ui/core/view";

declare var android: any;

export class Fab extends FloatingActionButtonBase {
  private _androidViewId: number;
  private _android: any;
  public static tapEvent = "tap";

  get android(): any {
    return this.nativeView;
  }

  public createNativeView() {
    this._android = new android.support.design.widget.FloatingActionButton(
      this._context
    );
    let that = new WeakRef(this);
    this._android.setOnClickListener(
      new android.view.View.OnClickListener({
        get owner() {
          return that.get();
        },

        onClick: function(v) {
          if (this.owner) {
            this.owner._emit("tap");
          }
        }
      })
    );

    return this._android;
  }

  public initNativeView() {
    this._androidViewId = android.view.View.generateViewId();
    this.nativeView.setId(this._androidViewId);
  }

  public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
    switch (this.size) {
      case "mini":
        this.setMeasuredDimension(40, 40);
        return;

      case "auto":
        if ( screen.mainScreen.widthPixels < 470 ) {
          this.setMeasuredDimension(80, 80);
        }
        else {
          this.setMeasuredDimension(112, 112);
        }
        return;
      case "custom":
        this.setMeasuredDimension(
          widthMeasureSpec,
          heightMeasureSpec
        );
        return;
      default:
        this.setMeasuredDimension(56, 56);
        return;
    }
  }

  [backgroundColorProperty.getDefault](): android.content.res.ColorStateList {
    return this.nativeView.getBackgroundTintList();
  }

  [backgroundColorProperty.setNative](
    value: Color | android.content.res.ColorStateList
  ) {
    let newValue: android.content.res.ColorStateList;
    if (value instanceof Color) {
      newValue = android.content.res.ColorStateList.valueOf(value.android);
    } else {
      // Resetting with the default value;
      newValue = value;
    }
    try {
      this.nativeView.setBackgroundTintList(newValue);
    } catch (err) {
      console.log(`Error setNative backgroundColorProperty: `, err);
    }
  }

  [backgroundInternalProperty.setNative](value: any) {
    // NOOP
  }

  [rippleColorProperty.setNative](value: Color) {
    this.nativeView.setRippleColor(value.android);
  }

  [iconProperty.setNative](value: any) {
    let iconDrawable = null;
    if (!value) {
      return;
    }

    if (ImageSource.isFileOrResourcePath(value)) {
      iconDrawable = ImageSource.fromFileOrResource(value);
      if (iconDrawable) {
        this.nativeView.setImageBitmap(iconDrawable.android);
      } else {
        console.log(
          "The icon: " + value + " was not found. Check your XML icon property."
        );
      }
    } else {
      const drawableId = android.content.res.Resources
        .getSystem()
        .getIdentifier(value, "drawable", "android");
      iconDrawable = android.content.res.Resources
        .getSystem()
        .getDrawable(drawableId);

      if (iconDrawable) {
        this.nativeView.setImageDrawable(iconDrawable);
      } else {
        console.log(
          "The icon: " + value + " was not found. Check your XML icon property."
        );
      }
    }
  }

  [sizeProperty.setNative](value: any) {
    switch (value) {
      case "mini":
        this.nativeView.setSize(android.support.design.widget.FloatingActionButton.SIZE_MINI);
        break;
      case "auto":
        this.nativeView.setSize(android.support.design.widget.FloatingActionButton.SIZE_AUTO);
        break;
      case "custom":
        break;
      default:
        this.nativeView.setSize(android.support.design.widget.FloatingActionButton.SIZE_NORMAL);
        break;
    }
  }
}
