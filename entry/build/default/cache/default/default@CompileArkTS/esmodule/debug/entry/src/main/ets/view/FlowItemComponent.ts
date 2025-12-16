if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface FlowItemComponent_Params {
    item?: ProductItem;
    currentHoverId?: string;
    scaleVal?: number;
    isShowPopup?: boolean;
    currentImage?: ResourceStr;
    HOVER_SCALE?: number;
    FIXED_IMAGE_HEIGHT?: Length;
}
import type ProductItem from '../viewmodel/ProductItem';
import { CommonConstants as Const } from "@bundle:com.huawei.waterflow/entry/ets/common/constants/CommonConstants";
import router from "@ohos:router";
export default class FlowItemComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__item = new SynchedPropertyObjectOneWayPU(params.item, this, "item");
        this.__currentHoverId = this.createStorageLink('hoveringItemId', '', "currentHoverId");
        this.__scaleVal = new ObservedPropertySimplePU(1, this, "scaleVal");
        this.__isShowPopup = new ObservedPropertySimplePU(false, this, "isShowPopup");
        this.__currentImage = new ObservedPropertyObjectPU({ "id": 16777305, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, this, "currentImage");
        this.HOVER_SCALE = 1.02;
        this.FIXED_IMAGE_HEIGHT = { "id": 16777256, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" };
        this.setInitiallyProvidedValue(params);
        this.declareWatch("item", this.onItemChange);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: FlowItemComponent_Params) {
        if (params.scaleVal !== undefined) {
            this.scaleVal = params.scaleVal;
        }
        if (params.isShowPopup !== undefined) {
            this.isShowPopup = params.isShowPopup;
        }
        if (params.currentImage !== undefined) {
            this.currentImage = params.currentImage;
        }
        if (params.HOVER_SCALE !== undefined) {
            this.HOVER_SCALE = params.HOVER_SCALE;
        }
        if (params.FIXED_IMAGE_HEIGHT !== undefined) {
            this.FIXED_IMAGE_HEIGHT = params.FIXED_IMAGE_HEIGHT;
        }
    }
    updateStateVars(params: FlowItemComponent_Params) {
        this.__item.reset(params.item);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__item.purgeDependencyOnElmtId(rmElmtId);
        this.__currentHoverId.purgeDependencyOnElmtId(rmElmtId);
        this.__scaleVal.purgeDependencyOnElmtId(rmElmtId);
        this.__isShowPopup.purgeDependencyOnElmtId(rmElmtId);
        this.__currentImage.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__item.aboutToBeDeleted();
        this.__currentHoverId.aboutToBeDeleted();
        this.__scaleVal.aboutToBeDeleted();
        this.__isShowPopup.aboutToBeDeleted();
        this.__currentImage.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __item: SynchedPropertySimpleOneWayPU<ProductItem>;
    get item() {
        return this.__item.get();
    }
    set item(newValue: ProductItem) {
        this.__item.set(newValue);
    }
    private __currentHoverId: ObservedPropertyAbstractPU<string>;
    get currentHoverId() {
        return this.__currentHoverId.get();
    }
    set currentHoverId(newValue: string) {
        this.__currentHoverId.set(newValue);
    }
    private __scaleVal: ObservedPropertySimplePU<number>;
    get scaleVal() {
        return this.__scaleVal.get();
    }
    set scaleVal(newValue: number) {
        this.__scaleVal.set(newValue);
    }
    private __isShowPopup: ObservedPropertySimplePU<boolean>;
    get isShowPopup() {
        return this.__isShowPopup.get();
    }
    set isShowPopup(newValue: boolean) {
        this.__isShowPopup.set(newValue);
    }
    private __currentImage: ObservedPropertyObjectPU<ResourceStr>;
    get currentImage() {
        return this.__currentImage.get();
    }
    set currentImage(newValue: ResourceStr) {
        this.__currentImage.set(newValue);
    }
    private readonly HOVER_SCALE: number;
    private readonly FIXED_IMAGE_HEIGHT: Length;
    aboutToAppear() { this.updateImage(); }
    onItemChange() { this.updateImage(); }
    private updateImage() {
        this.currentImage = this.item?.image_url || { "id": 16777305, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" };
    }
    PopupBuilder(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
            Row.padding(10);
            Row.backgroundColor(Color.White);
            Row.borderRadius(8);
            Row.shadow({ radius: 10, color: '#00000030' });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel({ "id": 16777220, "type": 10003, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Button.fontSize(12);
            Button.backgroundColor(Color.White);
            Button.fontColor('#333333');
            Button.height(32);
            Button.onClick(() => this.isShowPopup = false);
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel({ "id": 16777221, "type": 10003, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Button.fontSize(12);
            Button.backgroundColor({ "id": 16777233, "type": 10001, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Button.fontColor(Color.White);
            Button.height(32);
            Button.onClick(() => this.isShowPopup = false);
        }, Button);
        Button.pop();
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Context.animation({ duration: 200 });
            Column.borderRadius({ "id": 16777261, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Column.backgroundColor(Color.White);
            Column.padding({ left: 10, right: 10, bottom: 10 });
            Column.scale({ x: this.scaleVal, y: this.scaleVal });
            Column.shadow(this.isSelfHovering ? { radius: 10, color: { "id": 16777233, "type": 10001, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, offsetY: 5 } : ShadowStyle.OUTER_DEFAULT_XS);
            Context.animation(null);
            Column.onHover((isHover) => {
                if (isHover) {
                    this.currentHoverId = this.item?.name;
                    Context.animateTo({ duration: 200 }, () => this.scaleVal = this.HOVER_SCALE);
                }
                else if (this.currentHoverId === this.item?.name) {
                    this.currentHoverId = '';
                    Context.animateTo({ duration: 200 }, () => this.scaleVal = 1.0);
                }
            });
            Column.onClick(() => {
                this.currentHoverId = '';
                Context.animateTo({ duration: 100 }, () => this.scaleVal = 0.95);
                setTimeout(() => { Context.animateTo({ duration: 100 }, () => this.scaleVal = 1.0); router.pushUrl({ url: 'pages/ProductDetailPage', params: this.item }); }, 100);
            });
            Gesture.create(GesturePriority.Low);
            LongPressGesture.create({ repeat: false });
            LongPressGesture.onAction(() => this.isShowPopup = true);
            LongPressGesture.pop();
            Gesture.pop();
            Column.bindPopup(this.isShowPopup, { builder: { builder: this.PopupBuilder.bind(this) }, placement: Placement.Top, mask: false, onStateChange: (e) => { if (!e.isVisible)
                    this.isShowPopup = false; } });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.currentImage);
            Image.width(this.FIXED_IMAGE_HEIGHT);
            Image.height(this.FIXED_IMAGE_HEIGHT);
            Image.objectFit(ImageFit.Contain);
            Image.margin({ top: { "id": 16777287, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, bottom: { "id": 16777286, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" } });
            Image.onError(() => {
                console.warn('FlowItem', `Image load failed for ${this.item.name}, fallback to default.`);
                this.currentImage = { "id": 16777290, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" };
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.item?.name);
            Text.fontSize({ "id": 16777277, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Text.fontColor(Color.Black);
            Text.alignSelf(ItemAlign.Start);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.item?.discount);
            Text.fontSize({ "id": 16777278, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Text.opacity(Const.SIXTY_OPACITY);
            Text.alignSelf(ItemAlign.Start);
            Text.margin({ bottom: { "id": 16777244, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" } });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.item?.price);
            Text.fontSize({ "id": 16777250, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Text.fontColor({ "id": 16777233, "type": 10001, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            Text.lineHeight({ "id": 16777255, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(Const.FULL_WIDTH);
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.item?.promotion) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(`${this.item?.promotion}`);
                        Text.fontSize({ "id": 16777262, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
                        Text.fontColor(Color.White);
                        Text.borderRadius(2);
                        Text.backgroundColor({ "id": 16777233, "type": 10001, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
                        Text.padding({ left: 4, right: 4 });
                        Text.margin({ top: 4, right: 4 });
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (this.item?.bonus_points) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create(`${this.item?.bonus_points}`);
                        Text.fontSize({ "id": 16777262, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
                        Text.fontColor({ "id": 16777233, "type": 10001, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
                        Text.borderRadius(2);
                        Text.borderWidth(1);
                        Text.borderColor({ "id": 16777233, "type": 10001, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
                        Text.padding({ left: 4, right: 4 });
                        Text.margin({ top: 4 });
                    }, Text);
                    Text.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                });
            }
        }, If);
        If.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
