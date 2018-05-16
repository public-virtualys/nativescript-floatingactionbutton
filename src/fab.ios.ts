import {
  FloatingActionButtonBase,
  rippleColorProperty,
  iconProperty,
  sizeProperty
} from "./fab-common";
import { Color } from "tns-core-modules/color";
import {
  backgroundColorProperty,
  widthProperty,
  heightProperty,
  PercentLength
} from "tns-core-modules/ui/core/view";
import * as ImageSource from "tns-core-modules/image-source";
import { screen } from "tns-core-modules/platform";
declare var MNFloatingActionButton: any;

export class Fab extends FloatingActionButtonBase {
  public nativeView: UIView;

  constructor() {
    super();
    const btn = MNFloatingActionButton.alloc().init();
    btn.animationScale = 0.95;
    this.nativeView = btn;
  }

  [iconProperty.setNative](value: any) {
    let iconDrawable = null;
    let newImageView = null;
    if (ImageSource.isFileOrResourcePath(value)) {
      iconDrawable = ImageSource.fromFileOrResource(value);

      // Set the new one
      if (iconDrawable !== null) {
        newImageView = UIImageView.alloc().initWithImage(iconDrawable.ios);
      }
    } else {
      // Default image
      const defaultImage = ImageSource.fromBase64(
        "iVBORw0KGgoAAAANSUhEUgAAAJAAAACQAQAAAADPPd8VAAAAAnRSTlMAAHaTzTgAAAAqSURBVHgBY6AMjIJRYP9n0AuNCo0KMf+HgwPDTmgoRMeo0KgQRWAUjAIABsnZRR7bYyUAAAAASUVORK5CYII="
      );

      newImageView = UIImageView.alloc().initWithImage(defaultImage.ios);
    }

    if (newImageView !== null) {
      // Kill the old Image, cocoapod doesn't support changing it yet
      const button = this.nativeView.subviews[0];
      const oldBadImageView = button.subviews[0];
      oldBadImageView.removeFromSuperview();

      // Add the new guy
      button.addSubview(newImageView);
    }
  }

  public onLayout(
    left: number,
    top: number,
    right: number,
    bottom: number
  ): void {
    super.onLayout(left, top, right, bottom);
    this.centerIcon();
  }

  centerIcon() {
    const frame = this.nativeView.frame;
    const width = frame.size.width;
    const height = frame.size.height;

    const button = this.nativeView.subviews[0];
    const imageView = <UIImageView>button.subviews[0];

    imageView.contentMode = UIViewContentMode.ScaleAspectFit;
    imageView.frame = CGRectMake(0, 0, width / 2, height / 2);
    imageView.center = CGPointMake(width / 2, height / 2);
  }

  public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number): void {
    const frame = this.nativeView.frame;
    const mini = 40 * 2;
    const normal = 56 * 2;
    switch (this.size) {
      case "mini":
        this.setMeasuredDimension(mini, mini);
        return;
      case "auto":
        if ( screen.mainScreen.widthPixels < 470 ) {
          this.setMeasuredDimension(mini, mini);
        }
        else {
          this.setMeasuredDimension(normal, normal);
        }
        return;
      case "custom":
        this.setMeasuredDimension(
          widthMeasureSpec,
          heightMeasureSpec
        );
        return;
      default:
        this.setMeasuredDimension(normal, normal);
        return;
    }
  }
}
