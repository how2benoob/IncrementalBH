gdjs.IncrementalCode = {};
gdjs.IncrementalCode.GDButtonObjects1= [];
gdjs.IncrementalCode.GDButtonObjects2= [];
gdjs.IncrementalCode.GDButtonObjects3= [];
gdjs.IncrementalCode.GDCurrencyObjects1= [];
gdjs.IncrementalCode.GDCurrencyObjects2= [];
gdjs.IncrementalCode.GDCurrencyObjects3= [];
gdjs.IncrementalCode.GDBackgroundObjects1= [];
gdjs.IncrementalCode.GDBackgroundObjects2= [];
gdjs.IncrementalCode.GDBackgroundObjects3= [];
gdjs.IncrementalCode.GDMoneyIconObjects1= [];
gdjs.IncrementalCode.GDMoneyIconObjects2= [];
gdjs.IncrementalCode.GDMoneyIconObjects3= [];
gdjs.IncrementalCode.GDNewSpriteObjects1= [];
gdjs.IncrementalCode.GDNewSpriteObjects2= [];
gdjs.IncrementalCode.GDNewSpriteObjects3= [];
gdjs.IncrementalCode.GDUpgradeCostObjects1= [];
gdjs.IncrementalCode.GDUpgradeCostObjects2= [];
gdjs.IncrementalCode.GDUpgradeCostObjects3= [];
gdjs.IncrementalCode.GDCoinParticleObjects1= [];
gdjs.IncrementalCode.GDCoinParticleObjects2= [];
gdjs.IncrementalCode.GDCoinParticleObjects3= [];

gdjs.IncrementalCode.conditionTrue_0 = {val:false};
gdjs.IncrementalCode.condition0IsTrue_0 = {val:false};
gdjs.IncrementalCode.condition1IsTrue_0 = {val:false};
gdjs.IncrementalCode.condition2IsTrue_0 = {val:false};
gdjs.IncrementalCode.condition3IsTrue_0 = {val:false};
gdjs.IncrementalCode.conditionTrue_1 = {val:false};
gdjs.IncrementalCode.condition0IsTrue_1 = {val:false};
gdjs.IncrementalCode.condition1IsTrue_1 = {val:false};
gdjs.IncrementalCode.condition2IsTrue_1 = {val:false};
gdjs.IncrementalCode.condition3IsTrue_1 = {val:false};


gdjs.IncrementalCode.mapOfGDgdjs_46IncrementalCode_46GDButtonObjects2Objects = Hashtable.newFrom({"Button": gdjs.IncrementalCode.GDButtonObjects2});
gdjs.IncrementalCode.mapOfGDgdjs_46IncrementalCode_46GDButtonObjects2Objects = Hashtable.newFrom({"Button": gdjs.IncrementalCode.GDButtonObjects2});
gdjs.IncrementalCode.mapOfGDgdjs_46IncrementalCode_46GDCoinParticleObjects2Objects = Hashtable.newFrom({"CoinParticle": gdjs.IncrementalCode.GDCoinParticleObjects2});
gdjs.IncrementalCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.IncrementalCode.GDButtonObjects2);

gdjs.IncrementalCode.condition0IsTrue_0.val = false;
gdjs.IncrementalCode.condition1IsTrue_0.val = false;
{
gdjs.IncrementalCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.IncrementalCode.condition0IsTrue_0.val ) {
{
gdjs.IncrementalCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IncrementalCode.mapOfGDgdjs_46IncrementalCode_46GDButtonObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.IncrementalCode.condition1IsTrue_0.val) {
/* Reuse gdjs.IncrementalCode.GDButtonObjects2 */
{for(var i = 0, len = gdjs.IncrementalCode.GDButtonObjects2.length ;i < len;++i) {
    gdjs.IncrementalCode.GDButtonObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.IncrementalCode.GDButtonObjects2);

gdjs.IncrementalCode.condition0IsTrue_0.val = false;
{
{gdjs.IncrementalCode.conditionTrue_1 = gdjs.IncrementalCode.condition0IsTrue_0;
gdjs.IncrementalCode.condition0IsTrue_1.val = false;
gdjs.IncrementalCode.condition1IsTrue_1.val = false;
{
gdjs.IncrementalCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.IncrementalCode.mapOfGDgdjs_46IncrementalCode_46GDButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.IncrementalCode.condition0IsTrue_1.val ) {
{
gdjs.IncrementalCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
gdjs.IncrementalCode.conditionTrue_1.val = true && gdjs.IncrementalCode.condition0IsTrue_1.val && gdjs.IncrementalCode.condition1IsTrue_1.val;
}
}if (gdjs.IncrementalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IncrementalCode.GDButtonObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Currency"), gdjs.IncrementalCode.GDCurrencyObjects2);
gdjs.IncrementalCode.GDCoinParticleObjects2.length = 0;

{runtimeScene.getVariables().getFromIndex(0).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)));
}{for(var i = 0, len = gdjs.IncrementalCode.GDCurrencyObjects2.length ;i < len;++i) {
    gdjs.IncrementalCode.GDCurrencyObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.IncrementalCode.GDButtonObjects2.length ;i < len;++i) {
    gdjs.IncrementalCode.GDButtonObjects2[i].setAnimation(0);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Audio/tempbuttonpushup.mp3", false, 20, 1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.IncrementalCode.mapOfGDgdjs_46IncrementalCode_46GDCoinParticleObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button"), gdjs.IncrementalCode.GDButtonObjects1);

gdjs.IncrementalCode.condition0IsTrue_0.val = false;
gdjs.IncrementalCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IncrementalCode.GDButtonObjects1.length;i<l;++i) {
    if ( gdjs.IncrementalCode.GDButtonObjects1[i].getAnimation() == 1 ) {
        gdjs.IncrementalCode.condition0IsTrue_0.val = true;
        gdjs.IncrementalCode.GDButtonObjects1[k] = gdjs.IncrementalCode.GDButtonObjects1[i];
        ++k;
    }
}
gdjs.IncrementalCode.GDButtonObjects1.length = k;}if ( gdjs.IncrementalCode.condition0IsTrue_0.val ) {
{
{gdjs.IncrementalCode.conditionTrue_1 = gdjs.IncrementalCode.condition1IsTrue_0;
gdjs.IncrementalCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8052492);
}
}}
if (gdjs.IncrementalCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Audio/tempbuttonpushdown.mp3", false, 100, 1);
}}

}


};gdjs.IncrementalCode.mapOfGDgdjs_46IncrementalCode_46GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.IncrementalCode.GDNewSpriteObjects2});
gdjs.IncrementalCode.mapOfGDgdjs_46IncrementalCode_46GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.IncrementalCode.GDNewSpriteObjects2});
gdjs.IncrementalCode.mapOfGDgdjs_46IncrementalCode_46GDNewSpriteObjects2Objects = Hashtable.newFrom({"NewSprite": gdjs.IncrementalCode.GDNewSpriteObjects2});
gdjs.IncrementalCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.IncrementalCode.GDNewSpriteObjects2);

gdjs.IncrementalCode.condition0IsTrue_0.val = false;
{
gdjs.IncrementalCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IncrementalCode.mapOfGDgdjs_46IncrementalCode_46GDNewSpriteObjects2Objects, runtimeScene, true, false);
}if (gdjs.IncrementalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IncrementalCode.GDNewSpriteObjects2 */
{for(var i = 0, len = gdjs.IncrementalCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.IncrementalCode.GDNewSpriteObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.IncrementalCode.GDNewSpriteObjects2);

gdjs.IncrementalCode.condition0IsTrue_0.val = false;
{
gdjs.IncrementalCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.IncrementalCode.mapOfGDgdjs_46IncrementalCode_46GDNewSpriteObjects2Objects, runtimeScene, true, true);
}if (gdjs.IncrementalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.IncrementalCode.GDNewSpriteObjects2 */
{for(var i = 0, len = gdjs.IncrementalCode.GDNewSpriteObjects2.length ;i < len;++i) {
    gdjs.IncrementalCode.GDNewSpriteObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.IncrementalCode.GDNewSpriteObjects2);

gdjs.IncrementalCode.condition0IsTrue_0.val = false;
{
{gdjs.IncrementalCode.conditionTrue_1 = gdjs.IncrementalCode.condition0IsTrue_0;
gdjs.IncrementalCode.condition0IsTrue_1.val = false;
gdjs.IncrementalCode.condition1IsTrue_1.val = false;
gdjs.IncrementalCode.condition2IsTrue_1.val = false;
{
gdjs.IncrementalCode.condition0IsTrue_1.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2));
}if ( gdjs.IncrementalCode.condition0IsTrue_1.val ) {
{
gdjs.IncrementalCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.IncrementalCode.mapOfGDgdjs_46IncrementalCode_46GDNewSpriteObjects2Objects, runtimeScene, true, false);
}if ( gdjs.IncrementalCode.condition1IsTrue_1.val ) {
{
gdjs.IncrementalCode.condition2IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
}
gdjs.IncrementalCode.conditionTrue_1.val = true && gdjs.IncrementalCode.condition0IsTrue_1.val && gdjs.IncrementalCode.condition1IsTrue_1.val && gdjs.IncrementalCode.condition2IsTrue_1.val;
}
}if (gdjs.IncrementalCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Currency"), gdjs.IncrementalCode.GDCurrencyObjects2);
gdjs.copyArray(runtimeScene.getObjects("UpgradeCost"), gdjs.IncrementalCode.GDUpgradeCostObjects2);
{runtimeScene.getVariables().getFromIndex(0).sub(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)));
}{runtimeScene.getVariables().getFromIndex(2).mul(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(4)));
}{runtimeScene.getVariables().getFromIndex(1).add(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)));
}{for(var i = 0, len = gdjs.IncrementalCode.GDUpgradeCostObjects2.length ;i < len;++i) {
    gdjs.IncrementalCode.GDUpgradeCostObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.IncrementalCode.GDCurrencyObjects2.length ;i < len;++i) {
    gdjs.IncrementalCode.GDCurrencyObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Audio/tempchaching.mp3", false, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Currency"), gdjs.IncrementalCode.GDCurrencyObjects1);

gdjs.IncrementalCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.IncrementalCode.GDCurrencyObjects1.length;i<l;++i) {
    if ( gdjs.IncrementalCode.GDCurrencyObjects1[i].getString() == "." ) {
        gdjs.IncrementalCode.condition0IsTrue_0.val = true;
        gdjs.IncrementalCode.GDCurrencyObjects1[k] = gdjs.IncrementalCode.GDCurrencyObjects1[i];
        ++k;
    }
}
gdjs.IncrementalCode.GDCurrencyObjects1.length = k;}if (gdjs.IncrementalCode.condition0IsTrue_0.val) {
}

}


};gdjs.IncrementalCode.eventsList2 = function(runtimeScene) {

{


gdjs.IncrementalCode.eventsList0(runtimeScene);
}


{


gdjs.IncrementalCode.eventsList1(runtimeScene);
}


{


gdjs.IncrementalCode.condition0IsTrue_0.val = false;
{
gdjs.IncrementalCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.IncrementalCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Currency"), gdjs.IncrementalCode.GDCurrencyObjects1);
gdjs.copyArray(runtimeScene.getObjects("UpgradeCost"), gdjs.IncrementalCode.GDUpgradeCostObjects1);
{for(var i = 0, len = gdjs.IncrementalCode.GDUpgradeCostObjects1.length ;i < len;++i) {
    gdjs.IncrementalCode.GDUpgradeCostObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))));
}
}{for(var i = 0, len = gdjs.IncrementalCode.GDCurrencyObjects1.length ;i < len;++i) {
    gdjs.IncrementalCode.GDCurrencyObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0))));
}
}}

}


};

gdjs.IncrementalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IncrementalCode.GDButtonObjects1.length = 0;
gdjs.IncrementalCode.GDButtonObjects2.length = 0;
gdjs.IncrementalCode.GDButtonObjects3.length = 0;
gdjs.IncrementalCode.GDCurrencyObjects1.length = 0;
gdjs.IncrementalCode.GDCurrencyObjects2.length = 0;
gdjs.IncrementalCode.GDCurrencyObjects3.length = 0;
gdjs.IncrementalCode.GDBackgroundObjects1.length = 0;
gdjs.IncrementalCode.GDBackgroundObjects2.length = 0;
gdjs.IncrementalCode.GDBackgroundObjects3.length = 0;
gdjs.IncrementalCode.GDMoneyIconObjects1.length = 0;
gdjs.IncrementalCode.GDMoneyIconObjects2.length = 0;
gdjs.IncrementalCode.GDMoneyIconObjects3.length = 0;
gdjs.IncrementalCode.GDNewSpriteObjects1.length = 0;
gdjs.IncrementalCode.GDNewSpriteObjects2.length = 0;
gdjs.IncrementalCode.GDNewSpriteObjects3.length = 0;
gdjs.IncrementalCode.GDUpgradeCostObjects1.length = 0;
gdjs.IncrementalCode.GDUpgradeCostObjects2.length = 0;
gdjs.IncrementalCode.GDUpgradeCostObjects3.length = 0;
gdjs.IncrementalCode.GDCoinParticleObjects1.length = 0;
gdjs.IncrementalCode.GDCoinParticleObjects2.length = 0;
gdjs.IncrementalCode.GDCoinParticleObjects3.length = 0;

gdjs.IncrementalCode.eventsList2(runtimeScene);
return;

}

gdjs['IncrementalCode'] = gdjs.IncrementalCode;
