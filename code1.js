gdjs.ShopCode = {};
gdjs.ShopCode.GDShopIconObjects1= [];
gdjs.ShopCode.GDShopIconObjects2= [];
gdjs.ShopCode.GDShopIconObjects3= [];

gdjs.ShopCode.conditionTrue_0 = {val:false};
gdjs.ShopCode.condition0IsTrue_0 = {val:false};
gdjs.ShopCode.condition1IsTrue_0 = {val:false};
gdjs.ShopCode.condition2IsTrue_0 = {val:false};


gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDShopIconObjects2Objects = Hashtable.newFrom({"ShopIcon": gdjs.ShopCode.GDShopIconObjects2});
gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDShopIconObjects2Objects = Hashtable.newFrom({"ShopIcon": gdjs.ShopCode.GDShopIconObjects2});
gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDShopIconObjects1Objects = Hashtable.newFrom({"ShopIcon": gdjs.ShopCode.GDShopIconObjects1});
gdjs.ShopCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ShopIcon"), gdjs.ShopCode.GDShopIconObjects2);

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDShopIconObjects2Objects, runtimeScene, true, false);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ShopCode.GDShopIconObjects2 */
{for(var i = 0, len = gdjs.ShopCode.GDShopIconObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDShopIconObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShopIcon"), gdjs.ShopCode.GDShopIconObjects2);

gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDShopIconObjects2Objects, runtimeScene, true, true);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
/* Reuse gdjs.ShopCode.GDShopIconObjects2 */
{for(var i = 0, len = gdjs.ShopCode.GDShopIconObjects2.length ;i < len;++i) {
    gdjs.ShopCode.GDShopIconObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ShopIcon"), gdjs.ShopCode.GDShopIconObjects1);

gdjs.ShopCode.condition0IsTrue_0.val = false;
gdjs.ShopCode.condition1IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ShopCode.mapOfGDgdjs_46ShopCode_46GDShopIconObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ShopCode.condition0IsTrue_0.val ) {
{
gdjs.ShopCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.ShopCode.condition1IsTrue_0.val) {
}

}


};gdjs.ShopCode.eventsList1 = function(runtimeScene) {

{


gdjs.ShopCode.eventsList0(runtimeScene);
}


};gdjs.ShopCode.eventsList2 = function(runtimeScene) {

{


gdjs.ShopCode.condition0IsTrue_0.val = false;
{
gdjs.ShopCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ShopCode.condition0IsTrue_0.val) {
}

}


{


{
}

}


{


gdjs.ShopCode.eventsList1(runtimeScene);
}


};

gdjs.ShopCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ShopCode.GDShopIconObjects1.length = 0;
gdjs.ShopCode.GDShopIconObjects2.length = 0;
gdjs.ShopCode.GDShopIconObjects3.length = 0;

gdjs.ShopCode.eventsList2(runtimeScene);
return;

}

gdjs['ShopCode'] = gdjs.ShopCode;
